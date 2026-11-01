import React from 'react';
import { TRUST_PLACEHOLDER_LOGOS } from '../../data/agencyData';

export const TrustSection: React.FC = () => {
  return (
    <section className="py-14 border-y border-white/[0.08] bg-[#0A1020] relative overflow-hidden">
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(59,130,246,0.06),transparent_100%)] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-14">
          {/* Credibility Statement */}
          <div className="max-w-md text-center lg:text-left shrink-0">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#60A5FA] block mb-1">
              Production Standard
            </span>
            <p className="text-sm font-semibold text-white/90 leading-snug">
              Engineered with modern full-stack patterns trusted across high-performance web platforms.
            </p>
            <span className="text-[10px] text-[#64748B] italic block mt-1">
              (Illustrative Concept Logos — Non-affiliative)
            </span>
          </div>

          {/* 5 Attractive Company Logo Placeholders */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {TRUST_PLACEHOLDER_LOGOS.map((logo) => (
              <div
                key={logo.id}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#080D1A]/80 border border-white/10 hover:border-[#3B82F6]/50 hover:bg-[#101A2D] transition-all duration-300 group select-none shadow-sm"
              >
                <span className="text-sm text-[#3B82F6] font-bold group-hover:scale-110 transition-transform duration-200">
                  {logo.symbol}
                </span>
                <span className="text-xs font-bold tracking-wider text-slate-300 group-hover:text-white transition-colors duration-200">
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
