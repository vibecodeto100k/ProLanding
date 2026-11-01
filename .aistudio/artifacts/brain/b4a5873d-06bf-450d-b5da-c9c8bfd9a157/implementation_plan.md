# ProLanding — Architectural Blueprint & Technical Specification

> **Project**: ProLanding  
> **Channel**: VibeCodeTo100K  
> **Type**: Professional Digital Agency Landing Page & Portfolio  
> **Status**: Architecture Proposal (Pending User Approval)

---

## 1. Executive Summary & Framework Clarification

ProLanding is designed as a conversion-focused, visually striking web experience for a modern digital agency. It showcases services, client work, social proof, pricing tiers, and inquiry generation with a premium dark navy (`#0B0F19`), electric blue (`#2563EB` / `#38BDF8`), and crisp white aesthetic.

### Environment & Framework Gate
- **Requested Stack**: Next.js App Router, React, TypeScript, Tailwind CSS, Lucide React, Supabase.
- **Current AI Studio Environment**: Runs **Vite + React 19 + TypeScript + Tailwind CSS v4** on Node/Linux with Cloud Run preview. Next.js App Router's SSR runtime is not natively wired to this preview server.
- **Recommended Path**: We construct ProLanding using **React 19 + Vite + TypeScript + Tailwind CSS v4 + Lucide React** with an optional modular Express backend (`server.ts`) for inquiry submissions. 
- **Beginner Advantage**: The component architecture, hooks, Tailwind classes, and TypeScript types are **100% portable** to Next.js whenever you export to GitHub and deploy on Vercel.

---

## 2. System Architecture Diagram

```
┌────────────────────────────────────────────────────────────────────────┐
│                        ProLanding Client (React 19)                    │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │                    App Container & Theme Provider                │  │
│  └─────────────────────────────────┬────────────────────────────────┘  │
│                                    │                                   │
│  ┌─────────────────────────────────┴────────────────────────────────┐  │
│  │                      12 Core Section Blocks                      │  │
│  │  1. Navbar (Sticky, backdrop-blur, mobile drawer)                │  │
│  │  2. Hero (Headline, badge, CTA buttons, visual agency showcase) │  │
│  │  3. Trust Indicators (Client logos, metric counter cards)        │  │
│  │  4. Services (Interactive grid: Web, Mobile, UI/UX, Cloud)       │  │
│  │  5. About Us (Agency story, stats, philosophy, core team)        │  │
│  │  6. Portfolio (Category filtering, modal preview, live links)    │  │
│  │  7. Working Process (4-step visual timeline: Discover to Deploy) │  │
│  │  8. Testimonials (Client carousel / review cards with ratings)   │  │
│  │  9. Pricing (Monthly/Annual toggle, feature lists, popular tag)  │  │
│  │ 10. FAQ (Accordion with smooth height transitions)               │  │
│  │ 11. Contact (Interactive inquiry form + direct channels)         │  │
│  │ 12. Footer (Sitemap, legal links, social links, newsletter)      │  │
│  └─────────────────────────────────┬────────────────────────────────┘  │
│                                    │                                   │
│  ┌─────────────────────────────────┴────────────────────────────────┐  │
│  │                 Reusable Design System Components                │  │
│  │  Button, Badge, Card, SectionHeader, Modal, Accordion, Input     │  │
│  └─────────────────────────────────┬────────────────────────────────┘  │
└────────────────────────────────────┼───────────────────────────────────┘
                                     │
                                     ▼
┌────────────────────────────────────────────────────────────────────────┐
│                        Data & Persistence Layer                        │
│                                                                        │
│  ┌───────────────────────────────┐   ┌──────────────────────────────┐  │
│  │ Client-Side State / Mock Data │   │ Supabase / PostgreSQL Client │  │
│  │ (Projects, Services, Reviews) │   │ (Inquiries, Leads, Bookings) │  │
│  └───────────────────────────────┘   └──────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Proposed Folder Structure (Clean & Beginner-Friendly)

```
/
├── index.html                   # HTML entry point, SEO meta tags, Google Fonts
├── metadata.json                # AI Studio application metadata
├── package.json                 # Dependencies & project scripts
├── vite.config.ts               # Vite bundler configuration & path aliases
├── tsconfig.json                # TypeScript strict rules
├── src/
│   ├── main.tsx                 # React entry point mounting App
│   ├── App.tsx                  # Primary page orchestrator assembling sections
│   ├── index.css                # Tailwind CSS imports & custom utility tokens
│   │
│   ├── types/                   # TypeScript interfaces (contracts)
│   │   ├── agency.ts            # Service, Project, Testimonial, Pricing types
│   │   └── contact.ts           # ContactForm submission payload type
│   │
│   ├── data/                    # Structured agency content (easy to edit)
│   │   ├── services.ts          # Service definitions, features, icons
│   │   ├── portfolio.ts         # Case studies, tags, deliverables, images
│   │   ├── testimonials.ts      # Client feedback, avatars, ratings
│   │   ├── pricing.ts           # Tiered plans, included features
│   │   ├── process.ts           # 4-stage workflow steps
│   │   └── faqs.ts              # Questions and clear answers
│   │
│   ├── components/
│   │   ├── ui/                  # Reusable atomic building blocks
│   │   │   ├── Button.tsx       # Primary, secondary, outline, ghost variants
│   │   │   ├── Badge.tsx        # Pill badges for tags & highlights
│   │   │   ├── Card.tsx         # Border-lit glassmorphic card container
│   │   │   ├── SectionHeader.tsx# Reusable section title, subtitle & pill
│   │   │   ├── Modal.tsx        # Project quick-view modal dialog
│   │   │   └── Toast.tsx        # Success message on form submission
│   │   │
│   │   └── sections/            # The 12 primary page sections
│   │       ├── Navbar.tsx
│   │       ├── Hero.tsx
│   │       ├── TrustIndicators.tsx
│   │       ├── Services.tsx
│   │       ├── About.tsx
│   │       ├── Portfolio.tsx
│   │       ├── Process.tsx
│   │       ├── Testimonials.tsx
│   │       ├── Pricing.tsx
│   │       ├── FAQ.tsx
│   │       ├── Contact.tsx
│   │       └── Footer.tsx
│   │
│   └── lib/
│       └── utils.ts             # Tailwind class merging helper
```

---

## 4. Reusable UI Components Catalog

1. **`Button`**: Supports variants (`primary` with electric blue glow, `secondary` in slate navy, `outline`, and `ghost`), optional icons, and loading states.
2. **`Badge`**: Status indicators (`"Popular"`, `"New"`, `"Case Study"`), category pills.
3. **`Card`**: Dark navy container (`bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/40`) with subtle backdrop blur.
4. **`SectionHeader`**: Standardized component ensuring visual hierarchy across all 12 sections with eyebrow badge, large title, and descriptive subtitle.
5. **`Modal`**: Accessible overlay for full project case studies, tech stack pills, and live demo previews.
6. **`Accordion`**: Expandable question/answer panel for FAQ with smooth height transitions.
7. **`Input` & `Textarea`**: Styled form controls with focus rings, helper text, and error states.

---

## 5. Page & Route Strategy

- **Primary Architecture**: Single Page Application (SPA) with smooth hash-scroll navigation (`#services`, `#portfolio`, `#about`, `#pricing`, `#contact`).
- **Why this is best for a Digital Agency**: High-converting agency websites prefer a continuous storytelling flow where potential clients read the narrative without jarring page reloads.
- **Project Deep-Dive Modals**: Rather than sending visitors to empty stub sub-pages, clicking a project opens an instant case-study modal retaining user scroll position.

---

## 6. Frontend & Backend Strategy

- **Frontend**: React 19 with declarative state (`useState`, `useMemo`).
  - Mobile-responsive navigation with slide-out drawer on small screens.
  - Interactive portfolio category filtering (All, Web App, UI/UX, Mobile, Branding).
  - Pricing billing cycle switch (Monthly vs. Annual with 20% discount badge).
  - Client-side form validation before submission.
- **Backend / API**:
  - Phase 1 (Initial Build): Resilient client-side form submission with instant feedback and localStorage lead persistence.
  - Phase 2 (Supabase integration upon approval): Direct Supabase client inserting into an `inquiries` table with optional email alerts.

---

## 7. Database Strategy (Supabase Preparation)

When you approve connecting Supabase, we will define a single clean table:

```sql
create table inquiries (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  full_name text not null,
  email text not null,
  service text,
  budget text,
  message text not null,
  status text default 'new' check (status in ('new', 'contacted', 'archived'))
);
```

- Beginner-friendly: No complex joins or foreign keys required for the landing page.
- Direct Row-Level Security (RLS) policies allowing public `INSERT` of inquiries while restricting `SELECT` to authenticated agency admins.

---

## 8. Deployment Path (Vercel & GitHub)

- **Local / AI Studio Preview**: Runs live on port 3000.
- **Pushing to GitHub**: Initialize git repository, commit files, push to `github.com/VibeCodeTo100K/prolanding`.
- **Hosting on Vercel**:
  1. Link GitHub repository in Vercel dashboard.
  2. Framework Preset: Automatically detected as Vite (or Next.js if ported).
  3. Build Command: `npm run build`, Output Directory: `dist`.
  4. Environment Variables: Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.

---

## 9. Next Steps

Awaiting your approval to begin implementing the UI components and 12 sections!
