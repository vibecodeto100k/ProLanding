export const HERO_ASSET = '/src/assets/images/hero_agency_studio_1793523234620.jpg';
export const ABOUT_ASSET = '/src/assets/images/about_agency_collaboration_1793524016959.jpg';

export interface TrustLogoPlaceholder {
  id: string;
  name: string;
  symbol: string;
}

export const TRUST_PLACEHOLDER_LOGOS: TrustLogoPlaceholder[] = [
  { id: 'logo-1', name: 'NEXUS LABS', symbol: '◈' },
  { id: 'logo-2', name: 'APEX DIGITAL', symbol: '▲' },
  { id: 'logo-3', name: 'LUMINA TECH', symbol: '✦' },
  { id: 'logo-4', name: 'VERTEX MEDIA', symbol: '⬡' },
  { id: 'logo-5', name: 'ORBIT CLOUD', symbol: '◎' },
];

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Code' | 'Layout' | 'Palette' | 'Search';
  features: string[];
}

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    description:
      'Modern, high-performance web applications built on React and TypeScript. Engineered for sub-second page loads, clean component architecture, and effortless scalability.',
    iconName: 'Code',
    features: ['Next.js & React SPA Architecture', 'Tailwind CSS Custom Design System', 'Sub-second Lighthouse 95+ speed'],
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description:
      'Intuitive user interfaces and conversion-focused user journeys. We balance aesthetic elegance with psychological usability to ensure every visitor takes action.',
    iconName: 'Layout',
    features: ['Interactive Figma prototypes', 'Design tokens & component systems', 'Mobile-first layout optimization'],
  },
  {
    id: 'branding',
    title: 'Branding',
    description:
      'Distinctive visual identities that command authority in your niche. From bespoke color palettes to custom typography pairings that make your brand memorable.',
    iconName: 'Palette',
    features: ['Logo marks & vector assets', 'Brand guideline documentation', 'Consistent digital asset kits'],
  },
  {
    id: 'seo',
    title: 'SEO Optimization',
    description:
      'Technical SEO, Core Web Vitals hardening, and semantic structured data. We build websites that search engines love and rank on page one.',
    iconName: 'Search',
    features: ['OpenGraph & Schema.org JSON-LD', 'Zero layout shifts & fast FCP', 'Search-engine index optimization'],
  },
];

export interface DemoProject {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  demoType: string;
}

export const DEMO_PROJECTS: DemoProject[] = [
  {
    id: 'saas-dashboard',
    title: 'SaaS Dashboard',
    category: 'Web Application',
    description: 'Real-time analytics portal with responsive telemetry charts, dark navy dashboard cards, and interactive data filtering.',
    image: '/src/assets/images/portfolio_fintech_app_1793523235739.jpg',
    tags: ['React', 'TypeScript', 'Analytics'],
    demoType: 'Interactive Demo Showcase',
  },
  {
    id: 'ecommerce-website',
    title: 'E-commerce Website',
    category: 'Online Commerce',
    description: 'Minimalist luxury lifestyle storefront featuring editorial product photography, instant drawer cart, and clean typography.',
    image: '/src/assets/images/portfolio_ecommerce_platform_1793523235759.jpg',
    tags: ['Next.js', 'Tailwind CSS', 'Stripe'],
    demoType: 'Interactive Demo Showcase',
  },
  {
    id: 'restaurant-website',
    title: 'Restaurant Website',
    category: 'Hospitality & Dining',
    description: 'Sensory gastronomy digital presence with interactive dinner reservation booking, seasonal menus, and dark ambiance.',
    image: '/src/assets/images/portfolio_restaurant_website_1793524015407.jpg',
    tags: ['UI/UX', 'Responsive', 'Booking'],
    demoType: 'Interactive Demo Showcase',
  },
  {
    id: 'agency-website',
    title: 'Agency Website',
    category: 'Digital Studio',
    description: 'Full-service digital agency flagship featuring animated node workflows, case study modals, and interactive service grids.',
    image: '/src/assets/images/portfolio_ai_saas_platform_1793523235189.jpg',
    tags: ['Bespoke Design', 'Figma', 'Motion'],
    demoType: 'Interactive Demo Showcase',
  },
  {
    id: 'fitness-website',
    title: 'Fitness Website',
    category: 'Health & Athletic',
    description: 'High-energy athletic conditioning portal with workout progression tracking, athlete bio showcases, and membership plans.',
    image: '/src/assets/images/portfolio_fitness_website_1793524015613.jpg',
    tags: ['Web App', 'Performance', 'Mobile-First'],
    demoType: 'Interactive Demo Showcase',
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio',
    category: 'Creator Portfolio',
    description: 'Sophisticated personal portfolio for senior developers and creative directors, designed to showcase achievements.',
    image: '/src/assets/images/portfolio_personal_portfolio_1793524016537.jpg',
    tags: ['Editorial', 'Typography', 'Minimal'],
    demoType: 'Interactive Demo Showcase',
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  summary: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    summary: 'Understanding goals & architecture',
    description:
      'We research your audience, establish technical requirements, and define clear project milestones before writing code.',
  },
  {
    number: '02',
    title: 'Planning',
    summary: 'Wireframing & data strategy',
    description:
      'We build wireframes, design token systems, and outline content layouts to ensure smooth client approval and zero surprises.',
  },
  {
    number: '03',
    title: 'Design',
    summary: 'UI/UX crafting & interaction',
    description:
      'Every desktop and mobile view is designed with dark navy elegance, electric blue accents, and readable typography.',
  },
  {
    number: '04',
    title: 'Development and Launch',
    summary: 'Testing, speed hardening & deployment',
    description:
      'Clean TypeScript and Tailwind CSS development, rigorous cross-device testing, and seamless global deployment.',
  },
];

export interface TestimonialDemo {
  id: string;
  quote: string;
  clientRole: string;
  industry: string;
  rating: number;
  isPlaceholderNotice: string;
}

export const TESTIMONIALS_DEMO: TestimonialDemo[] = [
  {
    id: 't-1',
    quote:
      'The modern design and rapid load times completely transformed our user retention. A truly world-class digital agency execution.',
    clientRole: 'VP of Product Engineering',
    industry: 'Fintech & SaaS Platform',
    rating: 5,
    isPlaceholderNotice: 'Demo Placeholder Concept',
  },
  {
    id: 't-2',
    quote:
      'Clean code, clear communication, and an eye for typography that made our brand immediately stand out from competitors.',
    clientRole: 'Creative Director & Founder',
    industry: 'Luxury Retail & E-commerce',
    rating: 5,
    isPlaceholderNotice: 'Demo Placeholder Concept',
  },
  {
    id: 't-3',
    quote:
      'The attention to detail on mobile responsiveness and accessibility was unmatched. Delivered ahead of schedule with zero technical debt.',
    clientRole: 'Chief Technology Officer',
    industry: 'Automated Cloud Solutions',
    rating: 5,
    isPlaceholderNotice: 'Demo Placeholder Concept',
  },
];

export interface PricingPlanDemo {
  id: string;
  name: string;
  price: string;
  badge?: string;
  description: string;
  features: string[];
  ctaText: string;
}

export const PRICING_PLANS_DEMO: PricingPlanDemo[] = [
  {
    id: 'starter',
    name: 'STARTER',
    price: '$2,499',
    description: 'Perfect for single-product launches and concise, high-converting promotions.',
    features: [
      'Single landing page architecture',
      'Responsive mobile-first design',
      'Interactive contact form',
      'Electric blue design tokens',
      'Sub-second speed optimization',
    ],
    ctaText: 'Get Started with Starter',
  },
  {
    id: 'professional',
    name: 'PROFESSIONAL',
    price: '$4,899',
    badge: 'Most Popular',
    description: 'Complete digital agency presence tailored for scaling companies and studios.',
    features: [
      'Multi-section comprehensive website',
      'Bespoke custom UI/UX design',
      'Validated contact form & lead capture',
      'Basic SEO & OpenGraph tags',
      'Interactive portfolio & case study modals',
      '2 weeks post-launch support',
    ],
    ctaText: 'Get Started with Professional',
  },
  {
    id: 'enterprise',
    name: 'ENTERPRISE',
    price: '$8,999',
    description: 'Advanced custom engineering with tailored database integrations and priority SLA.',
    features: [
      'Advanced custom web application',
      'Premium custom design system',
      'Custom backend & Supabase functionality',
      'Priority dedicated support SLA',
      'Comprehensive security & performance audit',
      'Automated CI/CD deployment pipeline',
    ],
    ctaText: 'Get Started with Enterprise',
  },
];

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQS_LIST: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How does the process work?',
    answer:
      'We follow a proven 4-step framework: Discovery (identifying goals), Planning (wireframes & architecture), Design (UI/UX in Figma), and Development & Launch (clean React/TypeScript code). You receive continuous updates and previews at every stage.',
  },
  {
    id: 'faq-2',
    question: 'How long does a website take?',
    answer:
      'A standard single-page landing page typically takes 2 to 3 weeks. A comprehensive multi-section agency website or custom web app takes approximately 4 to 6 weeks from kickoff to final deployment.',
  },
  {
    id: 'faq-3',
    question: 'Is the website mobile-friendly?',
    answer:
      'Yes, 100%. Every layout is designed mobile-first and tested rigorously across iOS, Android, tablets, and wide desktop screens to guarantee smooth performance and responsive typography.',
  },
  {
    id: 'faq-4',
    question: 'Can I request revisions?',
    answer:
      'Yes. Each phase includes dedicated feedback cycles during both the design prototype stage and the development stage to ensure the final product exceeds your expectations before public launch.',
  },
  {
    id: 'faq-5',
    question: 'Do you provide maintenance?',
    answer:
      'Every project includes complimentary post-launch monitoring and bug-fix support. We also offer monthly retainer packages for teams requiring ongoing feature development and updates.',
  },
  {
    id: 'faq-6',
    question: 'How can I start a project?',
    answer:
      'Simply scroll down to our contact section below or click any "Start a Project" / "Get Started" button. Fill out your details, and our senior engineer will reply with an initial technical assessment within 24 hours.',
  },
];
