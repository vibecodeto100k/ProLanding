import React from 'react';
import { PROCESS_STEPS } from '../../data/agencyData';
import { Container } from '../ui/Container';
import { Compass, FileCode2, Palette, Rocket } from 'lucide-react';

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
    <section id="process" className="py-24 border-t border-white/10 bg-[#080D1A] scroll-mt-16">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#60A5FA] mb-3 block">
            Our Working Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 text-balance">
            Four Steps to Digital Excellence
          </h2>
          <p className="text-base text-[#A3AEC2] leading-relaxed text-balance">
            A clear, collaborative, and structured roadmap from initial concept to global launch.
          </p>
        </div>

        {/* 4 Steps Timeline / Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="p-7 rounded-2xl bg-[#101A2D]/60 border border-white/10 hover:border-[#3B82F6]/50 transition-all duration-300 flex flex-col justify-between group relative"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/25 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getStepIcon(step.number)}
                  </div>
                  <span className="text-2xl font-extrabold font-mono text-[#3B82F6]/60 group-hover:text-[#60A5FA] transition-colors">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1.5">{step.title}</h3>
                <p className="text-xs font-medium text-[#60A5FA] mb-4">{step.summary}</p>
                <p className="text-xs text-[#A3AEC2] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] text-[#A3AEC2]">
                <span>Phase {idx + 1} of 4</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
