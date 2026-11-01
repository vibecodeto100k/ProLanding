import React, { useState } from 'react';
import { ArrowUp, Youtube, Github, Twitter, Linkedin, Mail, MapPin, Shield, FileText, Info } from 'lucide-react';
import { Container } from '../ui/Container';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | 'disclosure' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const servicesLinks = [
    { label: 'Website Development', href: '#services' },
    { label: 'UI/UX Design', href: '#services' },
    { label: 'Branding Systems', href: '#services' },
    { label: 'SEO Optimization', href: '#services' },
  ];

  return (
    <footer className="border-t border-white/[0.08] bg-[#080D1A] py-18 text-[#94A3B8] text-xs">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">
          {/* Column 1: Logo & Brand Description */}
          <div className="md:col-span-4 space-y-5 text-left">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="flex items-center gap-3 text-white font-bold text-xl tracking-tight group inline-block"
              aria-label="ProLanding Homepage"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#2563EB] to-[#60A5FA] p-[1px] inline-flex items-center justify-center shadow-md shadow-blue-500/25">
                <div className="w-full h-full bg-[#080D1A] rounded-[9px] flex items-center justify-center">
                  <span className="text-[#3B82F6] font-bold text-sm">P</span>
                </div>
              </div>
              <span className="text-white text-xl font-extrabold tracking-tight">
                Pro<span className="text-[#3B82F6]">Landing</span>
              </span>
            </a>

            <p className="text-[#94A3B8] text-sm leading-relaxed max-w-sm">
              We help ambitious businesses turn bold ideas into beautiful, high-performing digital experiences. Designed and engineered for the VibeCodeTo100K community.
            </p>

            {/* Social Links with Tactile Elevation */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://youtube.com/@VibeCodeTo100K"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-400 transition-all p-2.5 bg-[#101A2D] border border-white/10 rounded-xl hover:border-red-400/40 hover:-translate-y-0.5"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-all p-2.5 bg-[#101A2D] border border-white/10 rounded-xl hover:border-white/30 hover:-translate-y-0.5"
                aria-label="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#60A5FA] transition-all p-2.5 bg-[#101A2D] border border-white/10 rounded-xl hover:border-blue-400/40 hover:-translate-y-0.5"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#60A5FA] transition-all p-2.5 bg-[#101A2D] border border-white/10 rounded-xl hover:border-blue-400/40 hover:-translate-y-0.5"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="md:col-span-3 space-y-4 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-white block">
              Quick Navigation
            </span>
            <ul className="grid grid-cols-2 gap-2.5 text-xs">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[#94A3B8] hover:text-white transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Links */}
          <div className="md:col-span-2 space-y-4 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-white block">
              Our Services
            </span>
            <ul className="space-y-2.5 text-xs">
              {servicesLinks.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="text-[#94A3B8] hover:text-white transition-colors duration-200">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information & Back to Top */}
          <div className="md:col-span-3 space-y-5 text-left md:text-right flex flex-col justify-between">
            <div className="space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-white block">
                Direct Contact
              </span>
              <div className="flex items-center gap-2 md:justify-end text-xs text-[#94A3B8]">
                <Mail className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span className="font-medium">vibecodeto.100k@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 md:justify-end text-xs text-[#94A3B8]">
                <MapPin className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>San Francisco, CA · Remote Worldwide</span>
              </div>
            </div>

            <div className="pt-2 flex md:justify-end">
              <button
                type="button"
                onClick={scrollToTop}
                className="p-3 rounded-xl bg-[#101A2D] border border-white/10 text-[#94A3B8] hover:text-white hover:border-[#3B82F6]/50 hover:bg-[#101A2D]/90 transition-all cursor-pointer flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-[#3B82F6] hover:-translate-y-0.5 shadow-sm"
                aria-label="Scroll to top of page"
              >
                <ArrowUp className="w-4 h-4 text-[#3B82F6]" />
                <span className="text-xs font-semibold">Back to Top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-[#94A3B8]">
          <div>
            &copy; {new Date().getFullYear()} ProLanding Agency. Built for the VibeCodeTo100K community. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-[#94A3B8]">
            <button
              type="button"
              onClick={() => setModalType('privacy')}
              className="hover:text-white transition-colors cursor-pointer text-xs"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true" className="text-white/20">·</span>
            <button
              type="button"
              onClick={() => setModalType('terms')}
              className="hover:text-white transition-colors cursor-pointer text-xs"
            >
              Terms of Service
            </button>
            <span aria-hidden="true" className="text-white/20">·</span>
            <button
              type="button"
              onClick={() => setModalType('disclosure')}
              className="hover:text-white transition-colors cursor-pointer text-xs"
            >
              Demo Disclosure
            </button>
          </div>
        </div>
      </Container>

      {/* Legal & Policy Modals */}
      {modalType && (
        <Modal
          isOpen={Boolean(modalType)}
          onClose={() => setModalType(null)}
          title={
            modalType === 'privacy'
              ? 'Privacy Policy'
              : modalType === 'terms'
              ? 'Terms of Service'
              : 'Demonstration Project Disclosure'
          }
        >
          <div className="space-y-4 text-left text-sm text-[#94A3B8] leading-relaxed">
            {modalType === 'privacy' && (
              <>
                <div className="flex items-center gap-2 text-white font-semibold mb-2">
                  <Shield className="w-5 h-5 text-[#3B82F6]" />
                  <span>Data Protection &amp; Privacy Notice</span>
                </div>
                <p>
                  ProLanding is committed to respecting your privacy. When you submit a project inquiry through our contact form, your name, email address, subject, and message are securely transmitted to our backend endpoint and stored in Supabase with Row Level Security (RLS).
                </p>
                <p>
                  We do not sell, rent, or distribute your inquiry data to third-party advertisers. All submissions are strictly utilized by our engineering and design team to evaluate project inquiries and respond directly.
                </p>
              </>
            )}

            {modalType === 'terms' && (
              <>
                <div className="flex items-center gap-2 text-white font-semibold mb-2">
                  <FileText className="w-5 h-5 text-[#3B82F6]" />
                  <span>Client Terms of Engagement</span>
                </div>
                <p>
                  All project agreements are formalized with clear technical milestones, scope documentation, and intellectual property transfers upon completion and payment.
                </p>
                <p>
                  Baseline pricing estimates listed on the pricing schedule represent representative scoping brackets and may be adjusted based on specific technical complexity, integrations, and deployment SLAs.
                </p>
              </>
            )}

            {modalType === 'disclosure' && (
              <>
                <div className="flex items-center gap-2 text-white font-semibold mb-2">
                  <Info className="w-5 h-5 text-[#3B82F6]" />
                  <span>Illustrative Concept &amp; Educational Disclosure</span>
                </div>
                <p>
                  ProLanding is engineered as a high-fidelity digital agency website and portfolio showcase for the <strong>VibeCodeTo100K</strong> YouTube channel community.
                </p>
                <p>
                  Client logos and portfolio case studies displayed on this website are illustrative architectural concepts created to showcase design versatility, typography, and full-stack engineering standards.
                </p>
              </>
            )}

            <div className="pt-4 border-t border-white/10 flex justify-end">
              <Button variant="primary" size="sm" onClick={() => setModalType(null)}>
                Understood
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </footer>
  );
};
