import React, { useState } from 'react';
import { DEMO_PROJECTS, DemoProject } from '../../data/agencyData';
import { Container } from '../ui/Container';
import { ArrowUpRight, Sparkles, Send } from 'lucide-react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';

interface PortfolioProps {
  onSelectProject?: (project: DemoProject) => void;
  onInquireProject?: (projectTitle: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({
  onSelectProject,
  onInquireProject,
}) => {
  const [selectedDemo, setSelectedDemo] = useState<DemoProject | null>(null);

  const handleOpenDemo = (project: DemoProject) => {
    if (onSelectProject) {
      onSelectProject(project);
    } else {
      setSelectedDemo(project);
    }
  };

  const handleInquireFromModal = (projectTitle: string) => {
    setSelectedDemo(null);
    if (onInquireProject) {
      onInquireProject(`Inquiry regarding ${projectTitle} concept`);
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-24 border-t border-white/10 bg-[#101A2D]/40 scroll-mt-16" aria-labelledby="portfolio-heading">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101A2D] border border-white/10 text-xs font-semibold text-[#60A5FA] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span>Illustrative Portfolio</span>
          </div>
          <h2 id="portfolio-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 text-balance">
            Featured Demo Projects
          </h2>
          <p className="text-base text-[#A3AEC2] leading-relaxed text-balance">
            Explore six concept applications demonstrating our versatility across SaaS, e-commerce, hospitality, fitness, and branding.
          </p>
          <span className="text-xs text-[#60A5FA] italic block mt-2">
            * Note: These are illustrative demonstration projects designed to showcase technical and visual capabilities.
          </span>
        </div>

        {/* 6 Demo Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DEMO_PROJECTS.map((project) => (
            <div
              key={project.id}
              tabIndex={0}
              role="button"
              aria-label={`View demo details for ${project.title}`}
              onClick={() => handleOpenDemo(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOpenDemo(project);
                }
              }}
              className="rounded-2xl bg-[#080D1A] border border-white/10 hover:border-[#3B82F6]/50 overflow-hidden transition-all duration-300 group flex flex-col justify-between cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
            >
              {/* Media Container */}
              <div className="relative aspect-video w-full bg-[#101A2D] overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.category} web application interface mockup`}
                  width={640}
                  height={360}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080D1A] via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-3 left-3 bg-[#080D1A]/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 text-[10px] font-semibold text-[#60A5FA]">
                  {project.category}
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-[#A3AEC2]">
                  <span className="text-[11px] font-mono text-white/80">Demo Showcase</span>
                  <span className="text-[10px] text-white/60">Concept Only</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#60A5FA] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#A3AEC2] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#A3AEC2]">
                    {project.tags.join(' · ')}
                  </div>

                  <span className="text-xs font-semibold text-[#3B82F6] group-hover:text-[#60A5FA] flex items-center gap-1 transition-colors">
                    <span>View Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Modal Quick View */}
      {selectedDemo && (
        <Modal
          isOpen={Boolean(selectedDemo)}
          onClose={() => setSelectedDemo(null)}
          title={`Demo Project: ${selectedDemo.title}`}
        >
          <div className="space-y-6">
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-[#080D1A] border border-white/10">
              <img
                src={selectedDemo.image}
                alt={`${selectedDemo.title} full showcase`}
                width={1200}
                height={675}
                decoding="async"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-[#A3AEC2] border-b border-white/10 pb-4">
              <span>Category: <strong className="text-white">{selectedDemo.category}</strong></span>
              <span className="text-[#60A5FA] font-medium">Illustrative Demo Model</span>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#A3AEC2] mb-2">
                Concept Overview
              </h4>
              <p className="text-sm text-slate-200 leading-relaxed">
                {selectedDemo.description}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#101A2D] border border-white/10">
              <span className="text-xs font-semibold text-white block mb-1">
                Architecture & Deliverables
              </span>
              <p className="text-xs text-[#A3AEC2]">
                Full responsive layout, custom theme tokens ({selectedDemo.tags.join(', ')}), optimized media assets, and clean accessibility.
              </p>
            </div>

            <div className="pt-2 flex items-center justify-between gap-4 border-t border-white/10">
              <Button
                variant="primary"
                size="sm"
                onClick={() => handleInquireFromModal(selectedDemo.title)}
                rightIcon={<Send className="w-3.5 h-3.5" />}
              >
                Inquire About Similar Project
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedDemo(null)}
              >
                Close Preview
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};
