export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  deliverables: string[];
  timeline: string;
  iconName: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: 'web' | 'mobile' | 'ai' | 'branding';
  categoryLabel: string;
  image: string;
  metric: string;
  metricLabel: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
  liveUrl?: string;
  year: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  metric: string;
  rating: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  isPopular?: boolean;
  features: string[];
  turnaround: string;
  ctaText: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  timeframe: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}
