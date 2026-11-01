import React from 'react';
import { SERVICES_LIST, ServiceItem } from '../../data/agencyData';
import { Container } from '../ui/Container';
import { Code, Layout, Palette, Search, ArrowRight, CheckCircle2 } from 'lucide-react';

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
    <section id="services" className="py-24 border-t border-white/10 bg-[#080D1A] scroll-mt-16">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#60A5FA] mb-3 block">
            Our Core Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 text-balance">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-base text-[#A3AEC2] leading-relaxed text-balance">
            From architecture to deployment, we deliver tailored services designed to help ambitious companies thrive online.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_LIST.map((service, index) => (
            <div
              key={service.id}
              className="p-8 rounded-2xl bg-[#101A2D]/60 border border-white/10 hover:border-[#3B82F6]/50 hover:bg-[#101A2D]/90 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/25 group-hover:bg-[#3B82F6]/20 transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-mono font-bold text-[#60A5FA]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#60A5FA] transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-[#A3AEC2] leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-white/5 mb-6">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2.5 text-xs text-[#A3AEC2]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#3B82F6] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => handleLearnMore(service)}
                  className="text-xs font-semibold text-[#60A5FA] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer group-hover:translate-x-1"
                >
                  <span>Learn More</span>
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
