import React, { useState } from 'react';
import { FAQS_LIST } from '../../data/agencyData';
import { Container } from '../ui/Container';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS_LIST[0].id);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-28 border-t border-white/[0.08] bg-[#080D1A] scroll-mt-16" aria-labelledby="faq-heading">
      <Container size="md">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101A2D] border border-white/10 text-xs font-semibold text-[#60A5FA] mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span>Common Inquiries</span>
          </div>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed text-balance">
            Direct answers regarding project timelines, revision workflows, responsive mobile testing, and post-launch maintenance.
          </p>
        </div>

        {/* 6 FAQ Accordion Items */}
        <div className="space-y-4">
          {FAQS_LIST.map((faq) => {
            const isOpen = openId === faq.id;
            const buttonId = `faq-btn-${faq.id}`;
            const panelId = `faq-panel-${faq.id}`;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#101A2D] border border-[#3B82F6]/60 shadow-xl shadow-black/30 ring-1 ring-[#3B82F6]/20'
                    : 'bg-[#101A2D]/50 border border-white/[0.08] hover:border-white/20'
                }`}
              >
                <h3 className="m-0 p-0 text-base font-semibold text-white">
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggle(faq.id)}
                    className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between text-left cursor-pointer gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-xl bg-[#080D1A] border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#60A5FA] border-[#3B82F6]/50' : 'text-[#94A3B8]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className={`px-6 sm:px-8 pb-6 sm:pb-8 pt-1 text-sm sm:text-base text-[#94A3B8] leading-relaxed border-t border-white/[0.06] transition-opacity duration-200 ${
                    isOpen ? 'block opacity-100' : 'hidden opacity-0'
                  }`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
