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
    <section id="about" className="py-28 border-t border-white/[0.08] bg-[#0A1020] scroll-mt-16 relative">
      <Container>
        {/* Top Header */}
        <div className="max-w-3xl mb-18 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101A2D] border border-white/10 text-xs font-semibold text-[#60A5FA] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span>Studio Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 text-balance">
            Turning Ideas Into Digital Experiences
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed text-balance">
            We are a creative engineering agency passionate about designing modern, conversion-focused websites that empower ambitious businesses to grow.
          </p>
        </div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-20">
          {/* Company Story & Mission */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Our Mission</h3>
              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                To bridge the gap between creative visual artistry and robust technical engineering. We believe every brand deserves a web presence that loads instantly, looks magnificent, and drives real commercial results.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Our Working Philosophy</h3>
              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                Simplicity, performance, and transparency. We eliminate bloated themes, avoid unnecessary dependencies, and craft bespoke software using clean, modern React code that our clients can maintain with ease.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-6">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white tabular-nums tracking-tight">
                  100%
                </div>
                <div className="text-xs text-[#94A3B8] mt-1 font-medium">Responsive Quality</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white tabular-nums tracking-tight">
                  &lt;0.8s
                </div>
                <div className="text-xs text-[#94A3B8] mt-1 font-medium">Avg. Page Load</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white tabular-nums tracking-tight">
                  24h
                </div>
                <div className="text-xs text-[#94A3B8] mt-1 font-medium">SLA Response</div>
              </div>
            </div>
          </div>

          {/* Supporting Visual Frame */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl p-1 bg-gradient-to-b from-white/15 via-white/5 to-white/0 shadow-2xl group">
              {/* Subtle ambient blur behind */}
              <div
                aria-hidden="true"
                className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-indigo-600/10 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500"
              />

              <div className="relative aspect-video rounded-xl overflow-hidden bg-[#101A2D] border border-white/10">
                <img
                  src={ABOUT_ASSET}
                  alt="ProLanding creative director and software engineering team collaborating around an architectural UI prototype display"
                  width={1200}
                  height={675}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080D1A]/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-xs text-[#94A3B8]">
                  <span className="font-semibold text-white">ProLanding Innovation Studio</span>
                  <span className="text-[11px] text-[#60A5FA] font-medium">Engineering &amp; UI Prototype Hub</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Three Key Benefits Strip with Luxury Card Surfaces */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/[0.08]">
          {keyBenefits.map((benefit, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-8 rounded-2xl luxury-card transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center mb-5 shadow-inner">
                {benefit.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-2 tracking-tight">{benefit.title}</h4>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
