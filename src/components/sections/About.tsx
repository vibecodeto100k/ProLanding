import React from 'react';
import { Container } from '../ui/Container';
import { ABOUT_ASSET } from '../../data/agencyData';
import { Sparkles, Zap, ShieldCheck, HeartHandshake } from 'lucide-react';

export const About: React.FC = () => {
  const keyBenefits = [
    {
      icon: <Zap className="w-5 h-5 text-[#3B82F6]" />,
      title: 'Sub-Second Performance',
      description:
        'Engineered for maximum speed and zero layout shifts, keeping visitors engaged and boosting organic search rankings.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#3B82F6]" />,
      title: 'Production-Grade Quality',
      description:
        'Strict TypeScript and modular component architecture ensure your application is scalable, maintainable, and bug-free.',
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#3B82F6]" />,
      title: 'Collaborative Partnership',
      description:
        'Direct communication with senior engineers and designers through every phase of planning, prototyping, and deployment.',
    },
  ];

  return (
    <section id="about" className="py-24 border-t border-white/10 bg-[#080D1A] scroll-mt-16">
      <Container>
        {/* Top Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101A2D] border border-white/10 text-xs font-semibold text-[#60A5FA] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span>About ProLanding</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 text-balance">
            Turning Ideas Into Digital Experiences
          </h2>
          <p className="text-base sm:text-lg text-[#A3AEC2] leading-relaxed text-balance">
            We are a creative engineering agency passionate about designing modern, conversion-focused websites that empower ambitious businesses to grow.
          </p>
        </div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Company Story & Mission */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
              <p className="text-sm text-[#A3AEC2] leading-relaxed">
                To bridge the gap between creative visual artistry and robust technical engineering. We believe every brand deserves a web presence that loads instantly, looks magnificent, and drives real commercial results.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2">Our Working Philosophy</h3>
              <p className="text-sm text-[#A3AEC2] leading-relaxed">
                Simplicity, performance, and transparency. We eliminate bloated themes, avoid unnecessary dependencies, and craft bespoke software using clean, modern React code that our clients can maintain with ease.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-6">
              <div>
                <div className="text-2xl font-bold font-mono text-white">100%</div>
                <div className="text-xs text-[#A3AEC2] mt-1">Responsive Quality</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-white">&lt;0.8s</div>
                <div className="text-xs text-[#A3AEC2] mt-1">Average Page Load</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-white">24h</div>
                <div className="text-xs text-[#A3AEC2] mt-1">Response Guarantee</div>
              </div>
            </div>
          </div>

          {/* Supporting Visual Frame */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl p-1 bg-gradient-to-b from-white/15 via-white/5 to-white/0 shadow-2xl">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-[#101A2D] border border-white/10">
                <img
                  src={ABOUT_ASSET}
                  alt="ProLanding creative director and software engineering team collaborating around an architectural UI prototype display"
                  width={1200}
                  height={675}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080D1A]/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-[#A3AEC2]">
                  <span className="font-semibold text-white">VibeCode Innovation Studio</span>
                  <span className="text-[11px] text-[#60A5FA]">Creative Collaboration</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Three Key Benefits Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
          {keyBenefits.map((benefit, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#101A2D]/60 border border-white/10 hover:border-[#3B82F6]/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/25 flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h4 className="text-base font-bold text-white mb-2">{benefit.title}</h4>
              <p className="text-xs text-[#A3AEC2] leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
