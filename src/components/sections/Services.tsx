import React from 'react';
import { SERVICES_LIST, ServiceItem } from '../../data/agencyData';
import { Container } from '../ui/Container';
import { Code, Layout, Palette, Search, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

interface ServicesProps {
  onLearnMore?: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onLearnMore }) => {
  const getIcon = (name: ServiceItem['iconName']) => {
    switch (name) {
      case 'Code':
        return <Code className="w-6 h-6 text-[#3B82F6]" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-[#3B82F6]" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-[#3B82F6]" />;
      case 'Search':
        return <Search className="w-6 h-6 text-[#3B82F6]" />;
    }
  };

  const handleLearnMore = (service: ServiceItem) => {
    if (onLearnMore) {
      onLearnMore(service);
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-28 border-t border-white/[0.08] bg-[#080D1A] scroll-mt-16 relative">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101A2D] border border-white/10 text-xs font-semibold text-[#60A5FA] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span>Specialized Disciplines</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 text-balance">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed text-balance">
            From architecture to deployment, we deliver tailored web engineering and brand identities designed to help ambitious companies thrive.
          </p>
        </div>

        {/* 4 Service Cards Grid with Luxury Hardware styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_LIST.map((service, index) => (
            <div
              key={service.id}
              className="p-8 sm:p-10 rounded-2xl luxury-card transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-13 h-13 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/5 border border-blue-400/30 flex items-center justify-center group-hover:scale-105 group-hover:border-blue-400/60 transition-all duration-300 shadow-inner">
                    {getIcon(service.iconName)}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                    <span className="text-xs font-mono font-bold text-[#60A5FA] tracking-wider">
                      0{index + 1}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#60A5FA] transition-colors duration-200">
                  {service.title}
                </h3>

                <p className="text-sm text-[#94A3B8] leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="space-y-3 pt-5 border-t border-white/[0.06] mb-8">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-white/[0.08]">
                <button
                  type="button"
                  onClick={() => handleLearnMore(service)}
                  className="text-xs font-semibold text-[#60A5FA] hover:text-white flex items-center gap-2 transition-colors cursor-pointer group-hover:translate-x-1 duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  <span>Learn More &amp; Start Inquiry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
