# ProLanding — Premium Digital Agency Landing Page

> A modern, high-performance digital agency landing page with dark-mode aesthetic, interactive components, responsive layouts, and a secure Supabase-backed contact inquiry pipeline.

---

## 1. Project Introduction

**ProLanding** is a premier digital agency web application crafted for high-growth businesses and creative studios. Designed from the ground up to reflect modern agency aesthetics, ProLanding combines an immersive midnight-navy backdrop, electric blue atmospheric glow effects, fluid typography, and interactive components.

Unlike generic templates, ProLanding is built as a complete, full-stack application. It pairs a dynamic React 19 single-page interface with a hardened Node.js/Express backend server that connects directly to a PostgreSQL database hosted on [Supabase](https://supabase.com). Every section — from the interactive portfolio modal previews to the rate-limited, bot-shielded contact form — has been engineered to deliver a world-class user experience.

---

## 2. Project Objectives

- **Conversion-Driven Architecture:** Guide prospective clients through credibility, services, past work, transparent pricing, and direct inquiry submission with clear calls-to-action (CTAs).
- **Modern Design & Visual Polish:** Deliver an agency-grade visual presence with balanced typography, subtle radial gradients, frosted-glass card treatments, and fluid hover transitions.
- **Enterprise-Grade Security:** Protect contact inquiries with server-side rate limiting, honeypot bot trap detection, payload validation, and server-side secret management.
- **Real Database Persistence:** Seamlessly record client inquiries in a structured Supabase PostgreSQL database without exposing privileged credentials to client browsers.
- **Accessibility & Performance:** Comply with WCAG standards through semantic HTML landmarks, visible focus rings, ARIA roles, `prefers-reduced-motion` fallbacks, and zero horizontal layout shift.

---

## 3. Technology Stack

### Frontend
- **React 19:** Modern functional components, hooks (`useState`, `useEffect`, `useRef`), and concurrent rendering.
- **TypeScript:** Strict type checking across data models, UI properties, and API responses.
- **Vite 8:** Lightning-fast module bundler with integrated Hot Module Replacement (HMR).
- **Tailwind CSS v4:** Modern CSS engine utilizing `@import "tailwindcss";` and custom utility layers for glassmorphism and radiant gradients.
- **Lucide React:** Lightweight, accessible SVG iconography.

### Backend & Database
- **Node.js & Express:** Lightweight, robust server handling API routing and static asset serving.
- **TypeScript Execution (`tsx`):** Seamless runtime execution of TypeScript server files without separate build steps.
- **Supabase (`@supabase/supabase-js`):** Managed PostgreSQL database handling persistence, Row Level Security (RLS), and automated timestamps.
- **Dotenv:** Secure runtime configuration loader for environment variables.

---

## 4. Features

1. **Responsive Navigation Bar:**
   - Sticky header with backdrop blur on scroll.
   - Smooth jump-scrolling to all page sections (`#services`, `#about`, `#portfolio`, `#pricing`, `#contact`).
   - Accessible mobile drawer menu that automatically closes upon link selection.

2. **Impactful Hero Section:**
   - Main headline with high-contrast gradient text and dynamic project counter badge.
   - Dual action CTAs: "Start a Project" (scrolls to Contact) and "Explore Our Work" (scrolls to Portfolio).
   - Interactive live preview dashboard mockup illustrating real-time client growth analytics.

3. **Credibility & Trust Indicators:**
   - Client satisfaction metrics, project delivery counts, and average client ROI statistics.
   - Clearly labeled illustrative corporate partner placeholders.

4. **Comprehensive Services Showcase:**
   - Four core agency offerings: Website Development, UI/UX Design, Brand Identity, and SEO Optimization.
   - Interactive service modals detailing deliverables, typical timelines, and key advantages.

5. **About & Studio Philosophy:**
   - Core mission statement, design ethos, and three pillars: Design-First Mindset, Performance Core, and Transparent Partnership.

6. **Interactive Portfolio Gallery:**
   - Six project case studies covering SaaS Dashboards, E-commerce, Restaurant Portals, Creative Agencies, Fitness Platforms, and Executive Portfolios.
   - Dynamic modal dialog showcasing high-resolution previews, challenge/solution breakdowns, and tech stacks.

7. **Four-Stage Process Timeline:**
   - Step-by-step roadmap: Discovery, Strategy & Planning, Design & Prototyping, Development & Launch.

8. **Verified Testimonials:**
   - Authentic client feedback quotes, roles, company tags, and 5-star rating badges.

9. **Tiered Pricing Calculator:**
   - Clear Starter, Growth, and Enterprise plans with comprehensive feature checklists.
   - One-click plan selection that prefills the contact inquiry form.

10. **Interactive FAQ Accordion:**
    - Fully accessible accordion with keyboard navigation (`Enter` / `Space`), smooth height expansion, and ARIA expansion attributes.

11. **Secure Contact Inquiry Form:**
    - Controlled input fields with live client-side validation for name, email, subject, and message.
    - Hidden honeypot field (`_hp`) that immediately discards automated spam bot submissions.
    - Real-time visual feedback: loading spinner, success confirmation card, and contextual error handling.

12. **Legal & Compliance Footers:**
    - Built-in Privacy Policy and Terms of Service modal dialogs accessible directly from footer links.

---

## 5. Folder Structure

```text
prolanding/
├── public/                       # Static public assets
│   ├── favicon.svg               # ProLanding brand favicon
│   ├── og-hero.jpg               # OpenGraph social share card preview
│   ├── robots.txt                # Search engine crawler directives
│   └── sitemap.xml               # XML sitemap for SEO indexation
├── src/                          # Frontend source code
│   ├── assets/                   # Image assets and graphics
│   ├── components/               # React component library
│   │   ├── sections/             # Page sections
│   │   │   ├── About.tsx         # Studio intro, mission, and pillars
│   │   │   ├── Contact.tsx       # Controlled contact form with API integration
│   │   │   ├── FAQ.tsx           # Expandable accordion Q&A
│   │   │   ├── Footer.tsx        # Footer navigation, social links, and legal modals
│   │   │   ├── Hero.tsx          # Hero banner with CTAs and live mockup
│   │   │   ├── Navbar.tsx        # Top navigation bar with mobile toggle
│   │   │   ├── Portfolio.tsx     # Portfolio cards with preview modals
│   │   │   ├── Pricing.tsx       # Pricing tiers with plan selector
│   │   │   ├── Process.tsx       # Four-phase delivery roadmap
│   │   │   ├── Services.tsx      # Service cards with detail popups
│   │   │   ├── Testimonials.tsx  # Client reviews and quotes
│   │   │   └── TrustSection.tsx  # Credibility metrics and client logos
│   │   └── ui/                   # Shared UI primitives
│   │       ├── Button.tsx        # Reusable button with variants & sizes
│   │       ├── Card.tsx          # Card container with glassmorphism style
│   │       ├── Container.tsx     # Max-width layout wrapper
│   │       ├── Modal.tsx         # Accessible overlay modal dialog
│   │       ├── Section.tsx       # Section wrapper with padding and IDs
│   │       └── SectionHeader.tsx # Standardized section badge, title, & subtitle
│   ├── data/
│   │   └── agencyData.ts         # Centralized data store (services, projects, FAQs)
│   ├── lib/
│   │   ├── theme.ts              # Design tokens and color system constants
│   │   └── utils.ts              # Class name merging and string formatters
│   ├── types/
│   │   └── agency.ts             # TypeScript interfaces for data entities
│   ├── App.tsx                   # Main root application layout
│   ├── index.css                 # Tailwind CSS v4 directives and custom utilities
│   └── main.tsx                  # React entry point mounting to DOM
├── .env.example                  # Template of required environment variables
├── index.html                    # HTML document shell with SEO meta tags
├── package.json                  # Project manifest, scripts, and dependencies
├── server.ts                     # Express backend server with Vite integration & API
├── tsconfig.json                 # TypeScript compiler configuration
└── vite.config.ts                # Vite build and plugin configuration
```

---

## 6. Installation Instructions

Follow these step-by-step instructions to get ProLanding running on your local computer.

### Prerequisites

Make sure you have the following installed on your machine:
- **Node.js**: Version `18.0.0` or higher (Version `20.x` or `22.x` recommended). Check your version by opening your terminal and running:
  ```bash
  node -v
  ```
- **npm** (comes bundled with Node.js): Check your version with:
  ```bash
  npm -v
  ```
- **Git**: For cloning and source control.

### Step 1: Clone or Download the Project

Clone the repository to your local computer:
```bash
git clone https://github.com/your-username/prolanding.git
cd prolanding
```

### Step 2: Install Project Dependencies

Run `npm install` to download and install all necessary dependencies (React, Express, Tailwind, Supabase, Lucide icons, etc.):
```bash
npm install
```

---

## 7. Development Commands

The following commands are defined in `package.json` to help you develop, test, and build the application:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Express server and Vite in development mode on `http://localhost:3000`. |
| `npm run build` | Compiles and bundles frontend TypeScript and React code into the production-ready `dist/` directory. |
| `npm run start` | Runs the production Express server using `tsx server.ts`. |
| `npm run lint` | Runs the TypeScript compiler (`tsc --noEmit`) to verify that there are no type or syntax errors. |
| `npm run clean` | Removes previously compiled build output (`dist/`). |

To start developing right away, execute:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000`.

---

## 8. Environment Variable Instructions

ProLanding uses environment variables to configure connections to external services like Supabase.

### How Environment Variables Work

1. In the root directory of the project, you will find a file named `.env.example`.
2. This file acts as a template showing which settings are needed.
3. Make a copy of `.env.example` and name the new file `.env`:
   ```bash
   cp .env.example .env
   ```
4. Open the newly created `.env` file in your code editor and populate the values:

```env
# ProLanding Environment Configuration

# 1. Supabase Project URL (found in Supabase Dashboard -> Project Settings -> API)
# Must start with https:// and end with .supabase.co
SUPABASE_URL="https://your-project-id.supabase.co"

# 2. Supabase Service Role Key (found in Supabase Dashboard -> Project Settings -> API)
# Keep this secret! It is only used by the server.ts backend to securely write to your database.
SUPABASE_SERVICE_ROLE_KEY="your-supabase-service-role-key-here"

# 3. Supabase Public Anon Key (Optional fallback)
SUPABASE_ANON_KEY="your-supabase-anon-key-here"

# 4. Optional Application URL
APP_URL="http://localhost:3000"
```

> **CRITICAL SECURITY NOTE FOR BEGINNERS:**
> Never commit your `.env` file to GitHub or any public code repository! The `.env` file contains secret credentials. The project's `.gitignore` file is already set up to ignore `.env`. Always keep your keys private.

---

## 9. Supabase Setup

ProLanding saves contact inquiries into a PostgreSQL database table named `contact_submissions`. Follow these steps to configure your Supabase account and database:

### Step 1: Create a Free Supabase Project
1. Visit [supabase.com](https://supabase.com) and click **Start your project** (or sign in with GitHub).
2. Click **New Project**.
3. Choose an organization, choose a project name (e.g., `prolanding-db`), set a strong database password, and select the region closest to your users.
4. Click **Create new project** and wait 1–2 minutes for the database to provision.

### Step 2: Create the `contact_submissions` Table
1. In your Supabase project dashboard, click on the **SQL Editor** tab in the left sidebar (it looks like a small terminal with `>_`).
2. Click **New Query** and paste the following SQL script into the editor:

```sql
-- 1. Create the contact_submissions table
CREATE TABLE IF NOT EXISTS public.contact_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Enable Row Level Security (RLS) on the table
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- 3. Policy: Allow server-side service role to have full access
-- Note: When using SUPABASE_SERVICE_ROLE_KEY in server.ts, it bypasses RLS automatically.
-- If you choose to use the ANON key, enable this insert policy:
CREATE POLICY "Allow anonymous insert for contact inquiries"
ON public.contact_submissions
FOR INSERT
TO anon
WITH CHECK (true);

-- 4. Disallow public users from reading or deleting submissions
-- Submissions should only be viewed by administrators in the Supabase Dashboard.
CREATE POLICY "Deny public read access"
ON public.contact_submissions
FOR SELECT
TO anon
USING (false);
```

3. Click the green **Run** button (or press `Ctrl+Enter` / `Cmd+Enter`).
4. You should see a message confirming the query was executed successfully.

### Step 3: Copy Your API Credentials
1. In the Supabase dashboard, click on the **Project Settings** (gear icon) in the bottom-left corner.
2. Select **API** under Configuration.
3. Locate the following two pieces of information:
   - **Project URL:** Looks like `https://abcdefghijklm.supabase.co`. Copy this into your `.env` file as `SUPABASE_URL`.
   - **service_role (secret) Key:** Under "Project API keys", find `service_role`. Reveal and copy this string into your `.env` file as `SUPABASE_SERVICE_ROLE_KEY`.
4. Save your `.env` file and restart your local dev server (`npm run dev`).

---

## 10. Deployment Instructions

ProLanding can be deployed to any platform supporting Node.js (Render, Railway, Fly.io, Google Cloud Run) or static/hybrid platforms (Vercel).

### Deploying to Render / Railway / Cloud Run (Recommended for Full-Stack)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit of ProLanding"
   git remote add origin https://github.com/your-username/prolanding.git
   git push -u origin main
   ```
2. **Create a new Web Service:**
   - Link your GitHub repository.
   - Set **Build Command:** `npm install && npm run build`
   - Set **Start Command:** `npm run start` (or `node server.ts` via `tsx`)
3. **Add Environment Variables:**
   - In the hosting dashboard's Environment Variables section, add:
     - `SUPABASE_URL`
     - `SUPABASE_SERVICE_ROLE_KEY`
     - `NODE_ENV=production`
4. **Deploy:** Click **Deploy**. Once the build finishes, your app will be live on your custom `.app` or custom domain!

### Deploying to Vercel

If you deploy to Vercel, the React frontend can be built via `npm run build` and served as a single-page app, while the `/api/contact` route can either run via a serverless function (`/api/contact.ts`) or connect to your hosted Express instance. Ensure all environment variables are added in **Project Settings -> Environment Variables**.

---

## 11. Testing Instructions

### 1. Automated Syntax & Type Checking
To ensure there are no compilation or TypeScript errors, run:
```bash
npm run lint
```
A clean check with no output indicates that all types, imports, and syntax rules are fully valid.

### 2. Manual UI Testing Checklist
Launch the local server (`npm run dev`) and test the following in your browser (`http://localhost:3000`):

- [ ] **Navbar Navigation:** Click on *Services*, *About*, *Work*, *Pricing*, and *Contact* in the navbar. Verify the page smoothly scrolls to each section.
- [ ] **Mobile Menu:** Resize your browser window to a mobile width (< 768px). Click the hamburger icon to open the drawer. Click a navigation link and ensure the drawer closes automatically.
- [ ] **Hero CTAs:** Click *Start a Project* to confirm it scrolls to the contact section; click *Explore Our Work* to confirm it scrolls to the portfolio section.
- [ ] **Portfolio Modals:** Click *View Project Details* on any of the six portfolio cards. Verify that the modal opens with project information and can be closed using the *Close* button, the backdrop click, or the `Escape` key.
- [ ] **FAQ Accordion:** Click on each question in the FAQ section. Verify that clicking an item expands its answer and clicking again collapses it.
- [ ] **Plan Selection:** Click *Select Starter* or *Select Growth* in the pricing table. Notice how the page scrolls to the contact form and prefills the subject field with your selected plan.

### 3. Contact Form & Backend API Testing

#### Testing via Browser UI:
1. Navigate to the **Let's Build Something Extraordinary** contact section at the bottom of the page.
2. Try clicking **Send Message** with empty fields. Observe the red validation error notices.
3. Enter invalid inputs (e.g., an invalid email format) and observe the specific error prompt.
4. Enter valid test data:
   - **Full Name:** `Jane Doe`
   - **Email:** `jane.doe@example.com`
   - **Subject:** `Website Redesign Inquiry`
   - **Message:** `Hello ProLanding team! We would love to discuss a complete redesign of our platform.`
5. Click **Send Message**.
6. The submit button will display a spinning loading indicator and transition into a green success card confirming receipt.
7. Open your [Supabase Dashboard](https://supabase.com) -> **Table Editor** -> `contact_submissions`. You should see the new row with your exact submission!

#### Testing via cURL Command Line:
You can also verify the `/api/contact` backend route directly using your terminal:

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Alex Smith",
    "email": "alex.smith@example.com",
    "subject": "Mobile App Development",
    "message": "We need an experienced agency to build our React Native mobile application."
  }'
```

Expected JSON response:
```json
{
  "success": true,
  "message": "Inquiry successfully saved to the database.",
  "submissionId": "..."
}
```

---

## 12. Known Limitations

1. **Demonstration Client Logos:**
   - The partner logos in the Trust Indicators section (e.g., *HyperScale*, *ApexGlobal*, *Novalyze*) are illustrative placeholders designed for demonstration purposes and do not represent actual commercial partnerships.
2. **Database Storage vs. Email Alerts:**
   - Submissions made through the contact form are securely stored in the Supabase `contact_submissions` table. The current implementation does not trigger outbound SMTP emails (e.g. via SendGrid or Resend). To receive automated email notifications, you can enable a Supabase Database Webhook or connect a transactional email provider.
3. **Illustrative Pricing:**
   - The pricing numbers displayed in the Pricing section ($4,900 / $8,500 / Custom) are baseline figures for demonstration. Final project scopes and estimates are subject to agency consultation.
4. **Single-Page Application Scope:**
   - The application is engineered as a high-conversion Single-Page Application (SPA). Portfolio detail cards open in responsive modal overlays rather than dedicated multi-page routes (`/portfolio/slug`).

---

## License

This project is licensed under the [MIT License](LICENSE). You are free to customize, modify, and deploy this project for personal or commercial use.
