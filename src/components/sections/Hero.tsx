import React, { useState } from 'react';
import { ArrowRight, Eye, Sparkles, Lock, ShieldCheck, Zap } from 'lucide-react';
import { Button } from '../ui/Button';
import { HERO_ASSET } from '../../data/agencyData';

export interface HeroProps {
  onContactClick?: () => void;
  onExploreClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onContactClick,
  onExploreClick,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Smooth scroll handlers
  const handleStartProject = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }
    }
  };

  const handleExploreWork = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      const el = document.getElementById('portfolio');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden bg-[#080D1A]"
    >
      {/* Ambient electric blue radial glow mesh */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none select-none overflow-hidden"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-blue-600/15 to-indigo-500/10 rounded-full blur-[160px]" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[350px] bg-sky-400/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* ========================================================
              LEFT COLUMN: Editorial Copy, Value Prop & Dual CTAs
             ======================================================== */}
          <div className="lg:col-span-7 space-y-8 text-left animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Category Kicker */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#101A2D]/80 border border-white/10 text-xs font-semibold tracking-wide text-[#60A5FA] shadow-sm backdrop-blur-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-slate-200">Digital Product Engineering</span>
              <span className="text-white/20">·</span>
              <span className="text-[#60A5FA]">Bespoke Web Studio</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold tracking-[-0.03em] text-white leading-[1.08] text-balance">
              We Build Digital Experiences That{' '}
              <span className="bg-gradient-to-r from-white via-[#93C5FD] to-[#3B82F6] bg-clip-text text-transparent">
                Grow Businesses
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-[#94A3B8] leading-relaxed max-w-2xl text-balance font-normal">
              We help ambitious businesses turn bold ideas into beautiful, high-performing digital experiences with sub-second page performance.
            </p>

            {/* Dual Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={handleStartProject}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="text-sm sm:text-base px-7 py-3.5"
              >
                Start a Project
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleExploreWork}
                leftIcon={<Eye className="w-4 h-4 text-[#60A5FA]" />}
                className="text-sm sm:text-base px-6 py-3.5"
              >
                Explore Our Work
              </Button>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-5 text-xs text-[#94A3B8]">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#3B82F6] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="font-semibold text-white/90">Enterprise Grade</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#3B82F6] shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <span className="font-semibold text-white/90">Sub-Second Speed</span>
              </div>
              <div className="hidden sm:flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#3B82F6] shrink-0">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <span className="font-semibold text-white/90">Direct Engineer SLA</span>
              </div>
            </div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: High-Fidelity Studio Mockup
             ======================================================== */}
          <div className="lg:col-span-5 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
            <div className="relative group">
              {/* Outer decorative ambient glow behind the mockup */}
              <div
                aria-hidden="true"
                className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-[#3B82F6]/30 via-[#60A5FA]/20 to-[#2563EB]/30 blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500"
              />

              {/* Browser window frame */}
              <div className="relative rounded-2xl bg-[#080D1A] border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden">
                {/* Browser Chrome Header */}
                <div className="px-4 py-3 bg-[#101A2D] border-b border-white/10 flex items-center justify-between gap-4 select-none">
                  {/* Traffic lights */}
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="w-3 h-3 rounded-full bg-[#EF4444]/80 inline-block shadow-sm" />
                    <span className="w-3 h-3 rounded-full bg-[#F59E0B]/80 inline-block shadow-sm" />
                    <span className="w-3 h-3 rounded-full bg-[#10B981]/80 inline-block shadow-sm" />
                  </div>

                  {/* Browser URL address pill */}
                  <div className="flex-1 max-w-[240px] mx-auto px-3 py-1 rounded-lg bg-[#080D1A]/90 border border-white/10 flex items-center justify-center gap-1.5 text-[11px] text-[#94A3B8] font-mono">
                    <Lock className="w-3 h-3 text-[#3B82F6] shrink-0" />
                    <span className="truncate">prolanding.agency/showcase</span>
                  </div>

                  {/* Window status dot */}
                  <div className="w-3 h-3 shrink-0 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_6px_#10B981]" />
                  </div>
                </div>

                {/* Main Screen Content */}
                <div className="relative aspect-[16/10] w-full bg-[#080D1A] overflow-hidden">
                  {!imageError ? (
                    <img
                      src={HERO_ASSET}
                      alt="ProLanding digital agency studio headquarters with high-performance workstations, code monitors, and UI prototypes"
                      width={1200}
                      height={750}
                      loading="eager"
                      decoding="async"
                      className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
                        imageLoaded ? 'opacity-100' : 'opacity-0'
                      }`}
                      onLoad={() => setImageLoaded(true)}
                      onError={() => setImageError(true)}
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#101A2D] text-center">
                      <span className="text-sm font-semibold text-white mb-1">
                        ProLanding Digital Agency
                      </span>
                      <p className="text-xs text-[#94A3B8]">
                        High-Performance Web Architecture
                      </p>
                    </div>
                  )}

                  {/* Subtle glass reflection scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080D1A] via-[#080D1A]/20 to-transparent pointer-events-none" />

                  {/* Floating Performance KPI Overlay Card */}
                  <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-[#080D1A]/90 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs shadow-xl">
                    <div>
                      <div className="font-bold text-white tracking-tight flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981]" />
                        <span>Core Web Vitals 99.8%</span>
                      </div>
                      <div className="text-[11px] text-[#94A3B8] mt-0.5">
                        Lighthouse 100 · Sub-second delivery
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-mono font-bold text-[#3B82F6] text-sm block">
                        +140%
                      </span>
                      <span className="text-[10px] text-[#94A3B8]">Avg. Growth</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
