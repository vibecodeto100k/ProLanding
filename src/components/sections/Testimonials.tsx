import React from 'react';
import { TESTIMONIALS_DEMO } from '../../data/agencyData';
import { Container } from '../ui/Container';
import { Star, MessageSquare, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-28 border-t border-white/[0.08] bg-[#080D1A] relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/[0.06] rounded-full blur-[160px] pointer-events-none"
      />

      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101A2D] border border-white/10 text-xs font-semibold text-[#60A5FA] mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span>Client Endorsement Formats</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 text-balance">
            Client Feedback &amp; Endorsements
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed text-balance">
            Explore sample testimonial card formats designed for client reviews, verified performance metrics, and leadership feedback.
          </p>
          <span className="text-xs text-[#60A5FA] italic block mt-3 font-medium">
            * Note: Sample placeholder content provided for layout illustration. Fictional identities are not presented as real customers.
          </span>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {TESTIMONIALS_DEMO.map((item) => (
            <div
              key={item.id}
              className="p-8 sm:p-9 rounded-2xl luxury-card transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  {/* 5-star rating */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-blue-500/20 group-hover:text-blue-500/40 transition-colors" />
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic mb-8">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-5 border-t border-white/[0.08] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight">{item.clientRole}</h4>
                  <p className="text-xs text-[#94A3B8] mt-0.5">{item.industry}</p>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#080D1A] text-[#60A5FA] border border-white/10">
                    {item.isPlaceholderNotice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
