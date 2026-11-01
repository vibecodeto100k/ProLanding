import React, { useState } from 'react';
import { Navbar } from '../components/sections/Navbar';
import { Hero } from '../components/sections/Hero';
import { TrustSection } from '../components/sections/TrustSection';
import { Services } from '../components/sections/Services';
import { About } from '../components/sections/About';
import { Portfolio } from '../components/sections/Portfolio';
import { Process } from '../components/sections/Process';
import { Testimonials } from '../components/sections/Testimonials';
import { Pricing } from '../components/sections/Pricing';
import { FAQ } from '../components/sections/FAQ';
import { Contact } from '../components/sections/Contact';
import { Footer } from '../components/sections/Footer';
import { ServiceItem, DemoProject } from '../data/agencyData';

export default function HomePage() {
  const [selectedSubject, setSelectedSubject] = useState<string>('');

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLearnMoreService = (service: ServiceItem) => {
    setSelectedSubject(`Inquiry regarding ${service.title}`);
    scrollToContact();
  };

  const handleSelectPricingPlan = (planName: string) => {
    setSelectedSubject(`Interested in ${planName} Plan`);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#080D1A] text-white flex flex-col justify-between selection:bg-[#3B82F6] selection:text-white">
      {/* Global Navigation */}
      <Navbar onContactClick={scrollToContact} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onContactClick={scrollToContact}
          onExploreClick={scrollToPortfolio}
        />

        {/* SECTION 1: Trust Indicators */}
        <TrustSection />

        {/* SECTION 2: Services */}
        <Services onLearnMore={handleLearnMoreService} />

        {/* SECTION 3: About */}
        <About />

        {/* SECTION 4: Portfolio */}
        <Portfolio
          onInquireProject={(subject) => {
            setSelectedSubject(subject);
            scrollToContact();
          }}
        />

        {/* SECTION 5: Our Process */}
        <Process />

        {/* SECTION 6: Testimonials */}
        <Testimonials />

        {/* SECTION 7: Pricing */}
        <Pricing onSelectPlan={handleSelectPricingPlan} />

        {/* SECTION 8: FAQ */}
        <FAQ />

        {/* SECTION 9: Contact */}
        <Contact initialSubject={selectedSubject} />
      </main>

      {/* SECTION 10: Footer */}
      <Footer />
    </div>
  );
}
