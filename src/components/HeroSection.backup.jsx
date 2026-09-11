import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import HeroStackedDeck from './HeroStackedDeck';

export default function HeroSection({ onOpenDemo }) {
  const [stageProgress, setStageProgress] = useState(0);
  const [manualStage, setManualStage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const totalScrollable = heroRef.current.offsetHeight - window.innerHeight;
        
        if (totalScrollable > 0) {
          const scrollOffset = Math.max(0, -rect.top);
          const rawProgress = Math.min(0.999, Math.max(0, scrollOffset / totalScrollable));
          setStageProgress(rawProgress * 4.0);
          if (manualStage !== null) setManualStage(null);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [manualStage]);

  const activeStageIndex = manualStage !== null 
    ? manualStage 
    : Math.min(4, Math.floor(stageProgress + 0.15));

  const handleSelectStage = (idx) => {
    setManualStage(idx);
  };

  return (
    <section 
      ref={heroRef} 
      id="hero-section" 
      className="relative min-h-[250vh] px-6 md:px-12 max-w-[1360px] mx-auto overflow-visible"
    >
      {/* Sticky Viewport Container - Positioned to align top of text and image */}
      <div className="sticky top-24 min-h-[calc(100vh-96px)] flex flex-col justify-between pt-4 pb-6">
        
        {/* 2-Column Split: Headline + 3D Fanning Deck starting at EQUAL HORIZONTAL LEVEL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start my-auto">
          
          {/* Left Side: Headline & Copy starting at top level */}
          <div className="lg:col-span-5 space-y-6 z-10 flex flex-col justify-start">
            
            <motion.h1 
              initial={{ opacity: 0, x: 30 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-7xl lg:text-8xl font-medium tracking-tight text-[#222720] leading-[1.02] -mt-2"
            >
              Good <br />
              deserves <br />
              <span className="text-[#e95126] relative inline-block hover:scale-105 transition-transform cursor-pointer">
                better.
                <span className="text-[#e95126] text-4xl sm:text-6xl inline-block ml-3 animate-spin-slow" aria-hidden="true">
                  ✳
                </span>
              </span>
            </motion.h1>

            {/* Description Paragraph */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-3 max-w-md"
            >
              <p className="text-base sm:text-lg text-[#222720] leading-relaxed font-normal">
                Ekhum connects fundraising, verification, disbursals and outcome reporting in one platform.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap items-center gap-5 pt-1"
            >
              <button
                onClick={onOpenDemo}
                className="group px-7 py-3.5 rounded-full bg-[#222720] text-white hover:bg-[#e95126] font-medium text-sm transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-4 shadow-lg shadow-[#222720]/10"
              >
                <span>Book a demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#purpose-section"
                className="group text-sm font-semibold text-[#222720] hover:text-[#e95126] flex items-center gap-2.5 transition-colors"
              >
                <span>Meet the platform</span>
                <span className="w-8 h-8 rounded-full border border-[#d8d9cf] flex items-center justify-center group-hover:border-[#e95126] group-hover:bg-[#e95126] group-hover:text-white transition-all">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </a>
            </motion.div>

          </div>

          {/* Right Side: 3D Stacked Fanning Deck Visual starting at EQUAL HORIZONTAL LEVEL */}
          <div className="lg:col-span-7 relative flex items-start justify-end">
            <HeroStackedDeck 
              stageProgress={stageProgress} 
              activeStage={activeStageIndex} 
              onSelectStage={handleSelectStage}
              isLoaded={isLoaded}
            />
          </div>

        </div>

        {/* Bottom Left Scroll Prompt */}
        <div className="flex items-center gap-3 text-xs text-[#66695f] pt-2">
          <span className="w-[1px] h-6 bg-[#d8d9cf] inline-block" />
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#222720]" />
            <span className="font-medium">
              Scroll to see the journey (0{activeStageIndex + 1} / 05)
            </span>
          </div>
          <ChevronDown className="w-3.5 h-3.5 text-[#e95126] animate-bounce ml-1" />
        </div>

      </div>
    </section>
  );
}
