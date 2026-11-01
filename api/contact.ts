import type { Request, Response } from 'express';
import { createClient } from '@supabase/supabase-js';

// Basic in-memory rate limiting / spam protection for serverless invocations
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const clientRecord = rateLimitMap.get(ip);

  if (!clientRecord || now > clientRecord.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (clientRecord.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  clientRecord.count += 1;
  return true;
}

function sanitizeString(str: unknown): string {
  if (typeof str !== 'string') return '';
  return str.replace(/[<>]/g, '').trim();
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getSupabaseClient() {
  let supabaseUrl = (process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL || '').trim();
  const supabaseKey = (
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.SUPABASE_ANON_KEY ||
    process.env.VITE_SUPABASE_ANON_KEY ||
    ''
  ).trim();

  if (!supabaseKey) {
    return null;
  }

  // If SUPABASE_URL is missing http(s) or bare project ref, try parsing from JWT payload
  if (!supabaseUrl.startsWith('http://') && !supabaseUrl.startsWith('https://')) {
    try {
      const parts = supabaseKey.split('.');
      if (parts.length >= 2) {
        const payload = JSON.parse(Buffer.from(parts[1], 'base64').toString('utf8'));
        if (payload.ref) {
          supabaseUrl = `https://${payload.ref}.supabase.co`;
        }
      }
    } catch {
      // Fallback
    }
  }

  if (!supabaseUrl.startsWith('http://') && !supabaseUrl.startsWith('https://')) {
    return null;
  }

  return createClient(supabaseUrl, supabaseKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

export default async function handler(req: Request, res: Response) {
  // Set CORS headers for Vercel
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const ip =
    (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
    req.socket?.remoteAddress ||
    'unknown';

  if (!checkRateLimit(ip)) {
    return res.status(429).json({
      success: false,
      error: 'Too many submissions from this IP. Please wait a minute before trying again.',
    });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};
    const { name, email, subject, message, _hp } = body;

    // Honeypot check for bots
    if (_hp) {
      return res.status(200).json({ success: true });
    }

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

    const supabase = getSupabaseClient();
    if (!supabase) {
      return res.status(503).json({
        success: false,
        error:
          'Supabase credentials not configured in Vercel Environment Variables. Please set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY (or SUPABASE_ANON_KEY).',
        code: 'SUPABASE_NOT_CONFIGURED',
      });
    }

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

    return res.status(201).json({
      success: true,
      message: 'Inquiry successfully saved to the database.',
      submissionId: data && data[0] ? data[0].id : null,
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Unknown server error';
    return res.status(500).json({
      success: false,
      error: `Server error: ${errorMsg}`,
    });
  }
}
