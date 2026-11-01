import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Body parsing middleware
app.use(express.json({ limit: '100kb' }));

// Basic in-memory rate limiting / spam protection
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

const rateLimiter = (req: Request, res: Response, next: () => void) => {
  const ip = req.ip || req.socket.remoteAddress || 'unknown';
  const now = Date.now();
  const clientRecord = rateLimitMap.get(ip);

  if (!clientRecord || now > clientRecord.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return next();
  }

  if (clientRecord.count >= MAX_REQUESTS_PER_WINDOW) {
    return res.status(429).json({
      success: false,
      error: 'Too many submissions from this IP. Please wait a minute before trying again.',
    });
  }

  clientRecord.count += 1;
  next();
};

// Input sanitization helper
function sanitizeString(str: unknown): string {
  if (typeof str !== 'string') return '';
  return str
    .replace(/[<>]/g, '') // strip HTML angle brackets
    .trim();
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Resilient Supabase client resolution
function getSupabaseClient() {
  let supabaseUrl = process.env.SUPABASE_URL ? process.env.SUPABASE_URL.trim() : '';
  const supabaseKey = (
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.SUPABASE_ANON_KEY ||
    ''
  ).trim();

  if (!supabaseKey) {
    return null;
  }

  // If SUPABASE_URL is missing http(s) or was mistakenly populated with a key or bare project ref,
  // attempt to recover the valid project URL from the JWT payload
  if (!supabaseUrl.startsWith('http://') && !supabaseUrl.startsWith('https://')) {
    try {
      const parts = supabaseKey.split('.');
      if (parts.length >= 2) {
        const payload = JSON.parse(Buffer.from(parts[1], 'base64').toString('utf8'));
        if (payload.ref) {
          console.log(`[Supabase] Automatically resolved project URL from JWT reference: https://${payload.ref}.supabase.co`);
          supabaseUrl = `https://${payload.ref}.supabase.co`;
        }
      }
    } catch (e) {
      console.warn('[Supabase] Could not parse project ref from JWT', e);
    }
  }

  // If still not a valid HTTP/HTTPS URL, return null
  if (!supabaseUrl.startsWith('http://') && !supabaseUrl.startsWith('https://')) {
    console.error(`[Supabase] Invalid supabaseUrl: "${supabaseUrl}". Must begin with https://`);
    return null;
  }

  return createClient(supabaseUrl, supabaseKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

// ==========================================
// API ROUTE: POST /api/contact
// ==========================================
app.post('/api/contact', rateLimiter, async (req: Request, res: Response) => {
  try {
    const { name, email, subject, message, _hp } = req.body;

    // 1. Honeypot check for bots
    if (_hp) {
      return res.status(200).json({ success: true });
    }

    // 2. Sanitize and validate inputs
    const sanitizedName = sanitizeString(name);
    const sanitizedEmail = sanitizeString(email).toLowerCase();
    const sanitizedSubject = sanitizeString(subject);
    const sanitizedMessage = sanitizeString(message);

    if (!sanitizedName || sanitizedName.length < 2) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid full name (at least 2 characters).',
      });
    }

    if (!sanitizedEmail || !isValidEmail(sanitizedEmail)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address (e.g. name@domain.com).',
      });
    }

    if (!sanitizedSubject || sanitizedSubject.length < 2) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a subject line (at least 2 characters).',
      });
    }

    if (!sanitizedMessage || sanitizedMessage.length < 10) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a descriptive message (at least 10 characters).',
      });
    }

    // 3. Connect to Supabase
    const supabase = getSupabaseClient();
    if (!supabase) {
      return res.status(503).json({
        success: false,
        error:
          'Invalid or missing Supabase URL. Please ensure SUPABASE_URL is formatted as a valid HTTPS URL (e.g. https://your-project.supabase.co).',
        code: 'SUPABASE_NOT_CONFIGURED',
      });
    }

    // 4. Insert into contact_submissions table
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name: sanitizedName,
          email: sanitizedEmail,
          subject: sanitizedSubject,
          message: sanitizedMessage,
        },
      ])
      .select('id, created_at');

    if (error) {
      console.error('Supabase insertion error:', error);
      return res.status(500).json({
        success: false,
        error: `Database error: ${error.message}`,
        details: error.details || error.hint || undefined,
      });
    }

    // 5. Successful database persistence
    return res.status(201).json({
      success: true,
      message: 'Inquiry successfully saved to the database.',
      submissionId: data && data[0] ? data[0].id : null,
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Unknown server error';
    console.error('Unexpected server error on /api/contact:', err);
    return res.status(500).json({
      success: false,
      error: `Server error: ${errorMsg}`,
    });
  }
});

// ==========================================
// VITE MIDDLEWARE / STATIC ASSETS
// ==========================================
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  // Always serve static assets from public/ folder (robots.txt, sitemap.xml, favicon.svg, images)
  app.use(express.static(path.resolve(__dirname, 'public')));

  if (!isProd) {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        host: '0.0.0.0',
        port: Number(PORT),
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`ProLanding server running on port ${PORT}`);
  });
}

startServer();
