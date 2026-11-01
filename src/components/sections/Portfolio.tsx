import React, { useState } from 'react';
import { DEMO_PROJECTS, DemoProject } from '../../data/agencyData';
import { Container } from '../ui/Container';
import { ArrowUpRight, Sparkles, Send, Filter, CheckCircle2 } from 'lucide-react';
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
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Web Application', 'Online Commerce', 'Hospitality & Dining', 'Digital Studio', 'Health & Athletic', 'Creator Portfolio'];

  const filteredProjects = activeFilter === 'All' 
    ? DEMO_PROJECTS 
    : DEMO_PROJECTS.filter((p) => p.category === activeFilter);

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
    <section id="portfolio" className="py-28 border-t border-white/[0.08] bg-[#080D1A] scroll-mt-16 relative" aria-labelledby="portfolio-heading">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101A2D] border border-white/10 text-xs font-semibold text-[#60A5FA] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span>Interactive Portfolio Showcase</span>
          </div>
          <h2 id="portfolio-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 text-balance">
            Featured Demo Projects
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed text-balance">
            Explore six concept applications demonstrating our versatility across SaaS telemetry, luxury commerce, hospitality, athletic performance, and creative studio portfolios.
          </p>
          <span className="text-xs text-[#60A5FA] italic block mt-3 font-medium">
            * Note: These are illustrative demonstration concepts designed to showcase full-stack technical and UI/UX capabilities.
          </span>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 border border-blue-400/40'
                  : 'bg-[#101A2D]/60 text-[#94A3B8] hover:text-white hover:bg-[#101A2D] border border-white/10'
              }`}
            >
              {cat === 'All' ? 'All Showcase' : cat.split(' & ')[0]}
            </button>
          ))}
        </div>

        {/* 6 Demo Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
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
              className="rounded-2xl luxury-card overflow-hidden transition-all duration-300 group flex flex-col justify-between cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
            >
              {/* Media Container with 16:10 aspect ratio */}
              <div className="relative aspect-[16/10] w-full bg-[#080D1A] overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.category} web application interface mockup`}
                  width={640}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Glass Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080D1A] via-transparent to-transparent opacity-80 pointer-events-none" />

                {/* Quiet Unboxed Category Tag */}
                <div className="absolute top-3.5 left-3.5 bg-[#080D1A]/85 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-[11px] font-bold text-[#60A5FA]">
                  {project.category}
                </div>

                {/* Subtle Concept Marker */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-[#94A3B8]">
                  <span className="text-[11px] font-mono text-white/90 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Interactive Case Study
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">Demo Preview</span>
                </div>
              </div>

              {/* Card Body with strict Zero-Pill unboxed typography */}
              <div className="p-7 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#60A5FA] transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  {/* Clean unboxed tags with typographic divider dots */}
                  <div className="text-xs text-[#94A3B8] font-medium tracking-tight">
                    {project.tags.join(' · ')}
                  </div>

                  <span className="text-xs font-bold text-[#3B82F6] group-hover:text-[#60A5FA] flex items-center gap-1.5 transition-colors">
                    <span>View Project</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
          title={`Demo Showcase: ${selectedDemo.title}`}
        >
          <div className="space-y-6">
            <div className="aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#080D1A] border border-white/10 shadow-2xl">
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

            <div className="flex items-center justify-between text-xs text-[#94A3B8] border-b border-white/10 pb-4">
              <span>Category: <strong className="text-white">{selectedDemo.category}</strong></span>
              <span className="text-[#60A5FA] font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Illustrative Architecture
              </span>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Project Overview & Objectives
              </h4>
              <p className="text-sm text-slate-200 leading-relaxed">
                {selectedDemo.description}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#080D1A] border border-white/10 space-y-2">
              <span className="text-xs font-semibold text-white block">
                Deliverables & Technology Stack
              </span>
              <div className="flex flex-wrap gap-2 text-xs text-[#60A5FA]">
                {selectedDemo.tags.map((tag, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-md bg-[#101A2D] border border-white/10 text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-xs text-[#94A3B8] pt-1">
                Engineered with strict zero-layout-shift responsive performance, accessible keyboard traversal, and tailored typography.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10">
              <Button
                variant="primary"
                size="sm"
                onClick={() => handleInquireFromModal(selectedDemo.title)}
                rightIcon={<Send className="w-3.5 h-3.5" />}
                className="w-full sm:w-auto"
              >
                Inquire About Similar Project
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedDemo(null)}
                className="w-full sm:w-auto"
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
