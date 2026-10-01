import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import WorkflowSection from './components/WorkflowSection';
import PillarsSection from './components/PillarsSection';
import TransformSection from './components/TransformSection';
import EcosystemSection from './components/EcosystemSection';
import CalculatorSection from './components/CalculatorSection';
import TestimonialsSection from './components/TestimonialsSection';
import BottomCTA from './components/BottomCTA';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  useScrollReveal();

  const handleOpenDemo = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setIsDemoOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoOpen(false);
  };

  // Global click listener matching script.js demo trigger logic
  useEffect(() => {
    const handleGlobalClick = (event) => {
      const target = event.target.closest('button, a');
      if (!target) return;

      const label = target.textContent.replace(/\s+/g, ' ').trim().toLowerCase();
      if (
        label.includes('book a demo') ||
        label.includes('free 15-min demo') ||
        label === 'start' ||
        label.includes('get started today') ||
        label.includes('talk to our team')
      ) {
        if (!target.getAttribute('href') || target.getAttribute('href') === '#') {
          event.preventDefault();
          setIsDemoOpen(true);
        }
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C2421] font-sans selection:bg-[#EB5E28]/20 selection:text-[#EB5E28] relative overflow-x-hidden">
      <Navbar onOpenDemo={handleOpenDemo} />

      <main>
        <Hero onOpenDemo={handleOpenDemo} />
        <ProblemSection onOpenDemo={handleOpenDemo} />
        <SolutionSection onOpenDemo={handleOpenDemo} />
        <WorkflowSection onOpenDemo={handleOpenDemo} />
        <PillarsSection onOpenDemo={handleOpenDemo} />
        <TransformSection onOpenDemo={handleOpenDemo} />
        <EcosystemSection onOpenDemo={handleOpenDemo} />
        <CalculatorSection onOpenDemo={handleOpenDemo} />
        <TestimonialsSection onOpenDemo={handleOpenDemo} />
        <BottomCTA onOpenDemo={handleOpenDemo} />
      </main>

      <Footer onOpenDemo={handleOpenDemo} />

      <DemoModal isOpen={isDemoOpen} onClose={handleCloseDemo} />
    </div>
  );
}
