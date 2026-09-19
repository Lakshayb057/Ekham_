import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MetricsStrip } from './components/MetricsStrip';
import { ProblemSection } from './components/ProblemSection';
import { DashboardShowcase } from './components/DashboardShowcase';
import { WorkflowSection } from './components/WorkflowSection';
import { PillarsSection } from './components/PillarsSection';
import { EcosystemSection } from './components/EcosystemSection';
import { SavingsCalculator } from './components/SavingsCalculator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { TrustStrip } from './components/TrustStrip';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { BookDemoModal } from './components/BookDemoModal';
import { StoryModal } from './components/StoryModal';
import { LoginModal } from './components/LoginModal';

export const App: React.FC = () => {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [storyModalOpen, setStoryModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const handleOpenDemo = () => setDemoModalOpen(true);
  const handleCloseDemo = () => setDemoModalOpen(false);

  const handleOpenStory = () => setStoryModalOpen(true);
  const handleCloseStory = () => setStoryModalOpen(false);

  const handleCloseLogin = () => setLoginModalOpen(false);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C2421] font-sans selection:bg-[#EB5E28]/20 selection:text-[#EB5E28] relative overflow-x-hidden">
      {/* Sticky Navigation Bar */}
      <Navbar 
        onOpenDemoModal={handleOpenDemo}
      />

      {/* Main Page Story Flow */}
      <main>
        {/* Page 1: Hero Section + Metrics Strip (Dedicated 100vh Screen) */}
        <div className="flex flex-col h-[100dvh] lg:h-screen lg:min-h-[700px] justify-between overflow-hidden">
          <HeroSection 
            onOpenDemoModal={handleOpenDemo}
            onOpenStoryModal={handleOpenStory}
          />
          <MetricsStrip />
        </div>

        {/* Page 2: The Problem & Why EKhum (Dedicated 100vh Screen) */}
        <ProblemSection 
          onOpenDemoModal={handleOpenDemo} 
          onLearnMore={handleOpenDemo} 
        />

        {/* 3. Interactive SaaS Dashboard Showcase */}
        <DashboardShowcase onOpenDemoModal={handleOpenDemo} />

        {/* 6. End-to-End 9-Step Workflow */}
        <WorkflowSection onOpenDemoModal={handleOpenDemo} />

        {/* 7. Core Pillars Interactive Feature Tabs */}
        <PillarsSection />

        {/* 8. Ecosystem / 4 Audience Roles */}
        <EcosystemSection />

        {/* 9. Interactive Savings & Compliance Calculator */}
        <SavingsCalculator onOpenDemoModal={handleOpenDemo} />

        {/* 10. Social Proof & Testimonials */}
        <TestimonialsSection />

        {/* 11. Trusted By Change Makers Logo Strip */}
        <TrustStrip />

        {/* 12. Final Emotional CTA Banner */}
        <FinalCTA 
          onOpenDemoModal={handleOpenDemo}
          onOpenContactModal={handleOpenDemo}
        />
      </main>

      {/* 13. Multi-Column Footer */}
      <Footer />

      {/* Interactive Modals */}
      <BookDemoModal 
        isOpen={demoModalOpen} 
        onClose={handleCloseDemo} 
      />

      <StoryModal 
        isOpen={storyModalOpen} 
        onClose={handleCloseStory} 
        onOpenDemoModal={handleOpenDemo} 
      />

      <LoginModal 
        isOpen={loginModalOpen} 
        onClose={handleCloseLogin} 
        onOpenDemoModal={handleOpenDemo} 
      />
    </div>
  );
};

export default App;
