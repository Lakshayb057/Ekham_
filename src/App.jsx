import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ScaleSection from './components/ScaleSection';
import SystemsSection from './components/SystemsSection';
import PartnerLogosSection from './components/PartnerLogosSection';
import DonationJourney from './components/DonationJourney';
import TechnologySection from './components/TechnologySection';
import TrustSection from './components/TrustSection';
import FunderSection from './components/FunderSection';
import CalculatorSection from './components/CalculatorSection';
import ClosingSection from './components/ClosingSection';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';

import ScrollCardWrapper from './components/ScrollCardWrapper';
import PageSlideNavigator from './components/PageSlideNavigator';

export default function App() {
  const [demoOpen, setDemoOpen] = useState(false);

  const handleOpenDemo = () => setDemoOpen(true);
  const handleCloseDemo = () => setDemoOpen(false);

  return (
    <div className="min-h-screen bg-[#f5f3ed] text-[#222720] font-sans antialiased selection:bg-[#e95126] selection:text-white w-full max-w-full">
      {/* Skip to Content for Accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-[#222720] text-white px-4 py-2 rounded-lg text-sm"
      >
        Skip to main content
      </a>

      {/* Floating Header Navbar */}
      <Header onOpenDemo={handleOpenDemo} />

      {/* Page Slide Controller & Floating Dot Indicator */}
      <PageSlideNavigator />

      {/* Main Content Sections with 3D Deck Card Scrolling */}
      <main id="main-content" className="w-full max-w-full overflow-visible">
        {/* Slide 0: Hero Section (Root base card) */}
        <ScrollCardWrapper id="hero-card" enableCardStyle={false} className="!scroll-mt-0">
          <HeroSection onOpenDemo={handleOpenDemo} />
        </ScrollCardWrapper>

        {/* Slide 1: Scale of Good (Human Scale Metric Cards) */}
        <ScrollCardWrapper id="scale-card" cardBg="bg-[#f5f3ed]">
          <ScaleSection />
        </ScrollCardWrapper>

        {/* Slide 2: Connected Systems (The Solution to Silos) */}
        <ScrollCardWrapper id="systems-card" cardBg="bg-[#f5f3ed]">
          <SystemsSection onOpenDemo={handleOpenDemo} />
        </ScrollCardWrapper>

        {/* Slide 3: Partner Organisations Section */}
        <ScrollCardWrapper id="partners-card" cardBg="bg-[#e9ece2]" fullHeightOnMobile={false}>
          <PartnerLogosSection />
        </ScrollCardWrapper>

        {/* Slide 4: Contribution Journey Platform Section */}
        <ScrollCardWrapper id="journey-card" cardBg="bg-[#f5f3ed]">
          <DonationJourney onOpenDemo={handleOpenDemo} />
        </ScrollCardWrapper>

        {/* Slide 5: Technology Engine Section (Dark Slate Card) */}
        <ScrollCardWrapper id="technology-card" cardBg="bg-[#222720]">
          <TechnologySection onOpenDemo={handleOpenDemo} />
        </ScrollCardWrapper>

        {/* Card 5: Trust & Compliance Section */}
        <ScrollCardWrapper id="trust-card" cardBg="bg-[#f5f3ed]">
          <TrustSection onOpenDemo={handleOpenDemo} />
        </ScrollCardWrapper>

        {/* Card 6: Funders & CSR Section (Soft Sage Card) */}
        <ScrollCardWrapper id="funders-card" cardBg="bg-[#e7eadf]">
          <FunderSection onOpenDemo={handleOpenDemo} />
        </ScrollCardWrapper>

        {/* Card 7: Calculator Section */}
        <ScrollCardWrapper id="calculator-card" cardBg="bg-[#f5f3ed]" fullHeightOnMobile={false}>
          <CalculatorSection />
        </ScrollCardWrapper>

        {/* Slide 9: Closing Banner Section & Footer */}
        <ScrollCardWrapper id="closing-card" cardBg="bg-[#f5f3ed]" fullHeightOnMobile={false} contentJustify="justify-center">
          <ClosingSection onOpenDemo={handleOpenDemo} />
          <Footer onOpenDemo={handleOpenDemo} />
        </ScrollCardWrapper>
      </main>

      {/* Demo Walkthrough Brief Modal */}
      <DemoModal isOpen={demoOpen} onClose={handleCloseDemo} />
    </div>
  );
}
