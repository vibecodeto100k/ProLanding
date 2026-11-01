import React from 'react';
import { PRICING_PLANS_DEMO } from '../../data/agencyData';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

interface PricingProps {
  onSelectPlan?: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const handlePlanClick = (planName: string) => {
    if (onSelectPlan) {
      onSelectPlan(planName);
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-28 border-t border-white/[0.08] bg-[#0A1020] scroll-mt-16 relative">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101A2D] border border-white/10 text-xs font-semibold text-[#60A5FA] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span>Investment Structure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 text-balance">
            Transparent, Sample Pricing Plans
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed text-balance">
            Predictable scope packages engineered for single-page MVPs, scaling business platforms, and enterprise-grade applications.
          </p>
          <span className="text-xs text-[#60A5FA] italic block mt-3 font-medium">
            * Note: Sample baseline pricing figures shown below for illustration; all tiers can be customized to your exact requirements.
          </span>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS_DEMO.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                plan.badge
                  ? 'bg-[#0E182F] border-2 border-[#3B82F6] shadow-[0_0_40px_rgba(59,130,246,0.25)] ring-1 ring-blue-400/50 -translate-y-2'
                  : 'luxury-card'
              }`}
            >
              <div>
                {/* Popular badge */}
                {plan.badge && (
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-bold tracking-wider uppercase shadow-md shadow-blue-500/30">
                      <Sparkles className="w-3 h-3" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{plan.name}</h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-8 min-h-[40px]">
                  {plan.description}
                </p>

                {/* Price Box with Tabular Numerals */}
                <div className="mb-8 p-5 rounded-xl bg-[#080D1A] border border-white/10 shadow-inner">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight tabular-nums">
                      {plan.price}
                    </span>
                    <span className="text-xs text-[#94A3B8] font-medium">/ baseline estimate</span>
                  </div>
                  <span className="text-[11px] text-[#60A5FA] mt-1.5 block font-mono">
                    (Editable Sample Package)
                  </span>
                </div>

                {/* Feature List */}
                <div className="space-y-3.5 mb-10">
                  <span className="text-xs font-bold uppercase tracking-wider text-white block">
                    Included in {plan.name}:
                  </span>
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-[#60A5FA]" />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Get Started Button */}
              <div className="pt-6 border-t border-white/[0.08]">
                <Button
                  variant={plan.badge ? 'primary' : 'outline'}
                  size="md"
                  onClick={() => handlePlanClick(plan.name)}
                  className="w-full justify-center"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Get Started with {plan.name}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
