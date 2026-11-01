import React from 'react';
import { PRICING_PLANS_DEMO, PricingPlanDemo } from '../../data/agencyData';
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
    <section id="pricing" className="py-24 border-t border-white/10 bg-[#080D1A] scroll-mt-16">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101A2D] border border-white/10 text-xs font-semibold text-[#60A5FA] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span>Investment Options</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 text-balance">
            Transparent, Sample Pricing Plans
          </h2>
          <p className="text-base text-[#A3AEC2] leading-relaxed text-balance">
            Editable package templates customized to project scale and technical requirements.
          </p>
          <span className="text-xs text-[#A3AEC2] italic block mt-2">
            * Note: Sample baseline pricing figures shown below for illustration; all tiers can be customized to your exact requirements.
          </span>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS_DEMO.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.badge
                  ? 'bg-[#101A2D] border-2 border-[#3B82F6] shadow-2xl shadow-blue-500/10'
                  : 'bg-[#101A2D]/60 border border-white/10 hover:border-white/20'
              }`}
            >
              <div>
                {/* Popular badge */}
                {plan.badge && (
                  <span className="inline-block px-3 py-1 rounded-full bg-[#3B82F6] text-white text-[11px] font-bold tracking-wide uppercase mb-3">
                    {plan.badge}
                  </span>
                )}

                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-xs text-[#A3AEC2] leading-relaxed mb-6 min-h-[36px]">
                  {plan.description}
                </p>

                {/* Price Box */}
                <div className="mb-6 p-4 rounded-xl bg-[#080D1A] border border-white/10">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white font-mono">
                      {plan.price}
                    </span>
                    <span className="text-xs text-[#A3AEC2]">/ project estimate</span>
                  </div>
                  <span className="text-[10px] text-[#60A5FA] mt-1 block">
                    (Editable Sample Price)
                  </span>
                </div>

                {/* Feature List */}
                <div className="space-y-3 mb-8">
                  <span className="text-xs font-semibold text-white block">
                    Included in {plan.name}:
                  </span>
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Get Started Button */}
              <div className="pt-4 border-t border-white/10">
                <Button
                  variant={plan.badge ? 'primary' : 'outline'}
                  size="md"
                  onClick={() => handlePlanClick(plan.name)}
                  className="w-full justify-center"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
