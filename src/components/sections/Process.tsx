import React from 'react';
import { PROCESS_STEPS } from '../../data/agencyData';
import { Container } from '../ui/Container';
import { Compass, FileCode2, Palette, Rocket, Sparkles } from 'lucide-react';

export const Process: React.FC = () => {
  const getStepIcon = (num: string) => {
    switch (num) {
      case '01':
        return <Compass className="w-5 h-5 text-[#3B82F6]" />;
      case '02':
        return <FileCode2 className="w-5 h-5 text-[#3B82F6]" />;
      case '03':
        return <Palette className="w-5 h-5 text-[#3B82F6]" />;
      default:
        return <Rocket className="w-5 h-5 text-[#3B82F6]" />;
    }
  };

  return (
    <section id="process" className="py-28 border-t border-white/[0.08] bg-[#0A1020] scroll-mt-16 relative">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101A2D] border border-white/10 text-xs font-semibold text-[#60A5FA] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span>Structured Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 text-balance">
            Four Steps to Digital Excellence
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed text-balance">
            A clear, collaborative, and disciplined roadmap from technical discovery to production deployment.
          </p>
        </div>

        {/* 4 Steps Timeline / Luxury Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="p-8 rounded-2xl luxury-card transition-all duration-300 flex flex-col justify-between group relative"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-400/25 flex items-center justify-center group-hover:scale-105 group-hover:border-blue-400/50 transition-all duration-300 shadow-inner">
                    {getStepIcon(step.number)}
                  </div>
                  <span className="text-3xl font-extrabold font-mono text-[#3B82F6]/60 group-hover:text-[#60A5FA] transition-colors tabular-nums">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-white">{step.title}</h3>
                <p className="text-xs font-semibold text-[#60A5FA] mb-4 tracking-tight">{step.summary}</p>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-6 mt-8 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#94A3B8] font-mono">
                <span>PHASE 0{idx + 1}</span>
                <span className="w-2 h-2 rounded-full bg-[#3B82F6] shadow-[0_0_8px_#3B82F6]" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
