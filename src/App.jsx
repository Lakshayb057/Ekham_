import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PurposeSection from './components/PurposeSection';
import PartnerLogosSection from './components/PartnerLogosSection';
import DonationJourney from './components/DonationJourney';
import TechnologySection from './components/TechnologySection';
import TrustSection from './components/TrustSection';
import FunderSection from './components/FunderSection';
import CalculatorSection from './components/CalculatorSection';
import ClosingSection from './components/ClosingSection';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';

export default function App() {
  const [demoOpen, setDemoOpen] = useState(false);

  const handleOpenDemo = () => setDemoOpen(true);
  const handleCloseDemo = () => setDemoOpen(false);

  return (
    <div className="min-h-screen bg-[#f5f3ed] text-[#222720] font-sans antialiased selection:bg-[#e95126] selection:text-white">
      {/* Skip to Content for Accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-[#222720] text-white px-4 py-2 rounded-lg text-sm"
      >
        Skip to main content
      </a>

      {/* Floating Header Navbar */}
      <Header onOpenDemo={handleOpenDemo} />

      {/* Main Content Sections */}
      <main id="main-content">
        <HeroSection onOpenDemo={handleOpenDemo} />
        <PurposeSection onOpenDemo={handleOpenDemo} />
        <PartnerLogosSection />
        <DonationJourney onOpenDemo={handleOpenDemo} />
        <TechnologySection onOpenDemo={handleOpenDemo} />
        <TrustSection onOpenDemo={handleOpenDemo} />
        <FunderSection onOpenDemo={handleOpenDemo} />
        <CalculatorSection />
        <ClosingSection onOpenDemo={handleOpenDemo} />
      </main>

      {/* Footer */}
      <Footer onOpenDemo={handleOpenDemo} />

      {/* Demo Walkthrough Brief Modal */}
      <DemoModal isOpen={demoOpen} onClose={handleCloseDemo} />
    </div>
  );
}
