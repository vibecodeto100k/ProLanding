import React from 'react';
import { TRUST_PLACEHOLDER_LOGOS } from '../../data/agencyData';

export const TrustSection: React.FC = () => {
  return (
    <section className="py-14 border-y border-white/10 bg-[#101A2D]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
          {/* Credibility Statement */}
          <div className="max-w-md text-center md:text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#60A5FA] block mb-1">
              Industry Standard Architecture
            </span>
            <p className="text-sm font-medium text-white/90 leading-snug">
              Engineered with modern full-stack patterns trusted across high-performance web platforms.
            </p>
            <span className="text-[11px] text-[#A3AEC2] italic block mt-1">
              (Illustrative Concept Logos — Non-affiliative)
            </span>
          </div>

          {/* 5 Attractive Company Logo Placeholders */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-10">
            {TRUST_PLACEHOLDER_LOGOS.map((logo) => (
              <div
                key={logo.id}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#080D1A]/60 border border-white/10 hover:border-[#3B82F6]/40 transition-colors group select-none"
              >
                <span className="text-sm text-[#3B82F6] font-bold group-hover:scale-110 transition-transform">
                  {logo.symbol}
                </span>
                <span className="text-xs font-bold tracking-wider text-slate-300 group-hover:text-white transition-colors">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
