import React from 'react';
import { TESTIMONIALS_DEMO } from '../../data/agencyData';
import { Container } from '../ui/Container';
import { Star, MessageSquare } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 border-t border-white/10 bg-[#101A2D]/40 relative">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#080D1A] border border-white/10 text-xs font-semibold text-[#60A5FA] mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span>Illustrative Social Proof</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 text-balance">
            Client Feedback & Demonstrations
          </h2>
          <p className="text-base text-[#A3AEC2] leading-relaxed text-balance">
            Explore sample review card formats designed for client testimonials and project endorsements.
          </p>
          <span className="text-xs text-[#A3AEC2] italic block mt-2">
            * Note: Sample placeholder content provided for layout illustration. Fictional identities are not presented as real customers.
          </span>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DEMO.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-[#080D1A] border border-white/10 hover:border-[#3B82F6]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                {/* 5-star rating */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-slate-200 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{item.clientRole}</h4>
                  <p className="text-xs text-[#A3AEC2]">{item.industry}</p>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#101A2D] text-[#60A5FA] border border-white/5">
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
