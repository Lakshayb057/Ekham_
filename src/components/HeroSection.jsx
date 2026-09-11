import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { ArrowRight, ChevronDown, Coins, ShieldCheck, BarChart3 } from 'lucide-react';
import HeroStackedDeck from './HeroStackedDeck';

export default function HeroSection({ onOpenDemo }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeStage, setActiveStage] = useState(0);

  const progress = useMotionValue(0.15); // Start at Collect (15%)
  const offsetDistance = useTransform(progress, (v) => `${(v % 1) * 100}%`);
  const dotRef = useRef(null);
  const animationRef = useRef(null);
  const isPausedRef = useRef(false);
  const pauseTimerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 120);
    return () => clearTimeout(timer);
  }, []);

  // 4 Platform Pipeline Nodes distributed evenly along the edge-to-edge wave path
  const pipelineNodes = [
    { id: 0, label: 'Collect', icon: <Coins className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, leftPct: 15, topPct: 50 },
    { id: 1, label: 'Verify', icon: <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, leftPct: 38.33, topPct: 27.78 },
    { id: 2, label: 'Disburse', icon: <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, leftPct: 61.67, topPct: 72.22 },
    { id: 3, label: 'Prove', icon: <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, leftPct: 85, topPct: 33.33 },
  ];

  // Perfectly smooth SVG path spanning 100% edge-to-edge from (0, 45) to (1200, 45)
  const wavePathD = "M 0 45 C 60 45, 120 45, 180 45 C 270 45, 370 25, 460 25 C 550 25, 650 65, 740 65 C 830 65, 930 30, 1020 30 C 1080 30, 1140 45, 1200 45";

  const stageCaptions = [
    { stage: '01 / COLLECT', quote: 'Every contribution begins with a promise.' },
    { stage: '02 / VERIFY', quote: 'Trust gives generosity a direction.' },
    { stage: '03 / DISBURSE', quote: 'Technology turns support into coordinated care.' },
    { stage: '04 / PROVE', quote: 'Every outcome deserves to be seen.' },
  ];

  // Continuous slideshow animation driven by the travelling orange dot (speed optimized to 8.0s)
  const CYCLE_DURATION = 8.0;
  const startSlideshowAnimation = (fromVal = 0.15) => {
    if (animationRef.current) {
      animationRef.current.stop();
    }

    const remainingFraction = Math.max(0.01, 1 - fromVal);
    animationRef.current = animate(progress, 1, {
      duration: CYCLE_DURATION * remainingFraction,
      ease: 'linear',
      onComplete: () => {
        progress.set(0);
        animationRef.current = animate(progress, 1, {
          duration: CYCLE_DURATION,
          ease: 'linear',
          repeat: Infinity,
        });
      },
    });
  };

  useEffect(() => {
    startSlideshowAnimation(0.15);

    const unsubscribe = progress.on('change', (v) => {
      const normalized = v % 1;
      
      if (dotRef.current) {
        dotRef.current.style.offsetDistance = `${normalized * 100}%`;
      }

      if (isPausedRef.current) return;

      // When the orange dot arrives at each node, change the stage accordingly:
      // Collect at ~15% -> Stage 0
      // Verify at ~38.33% -> Stage 1
      // Disburse at ~61.67% -> Stage 2
      // Prove at ~85% -> Stage 3
      let newStage;
      if (normalized < 0.266) {
        newStage = 0; // Collect
      } else if (normalized < 0.5) {
        newStage = 1; // Verify
      } else if (normalized < 0.733) {
        newStage = 2; // Disburse
      } else {
        newStage = 3; // Prove
      }

      setActiveStage((prev) => (prev !== newStage ? newStage : prev));
    });

    return () => {
      if (animationRef.current) animationRef.current.stop();
      unsubscribe();
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    };
  }, []);

  // Click-to-change handler: directly transitions to stage on click
  const handleSelectStage = (stageId) => {
    setActiveStage(stageId);
    isPausedRef.current = true;

    const stageOffsets = [0.15, 0.3833, 0.6167, 0.85];
    const targetOffset = stageOffsets[stageId] ?? 0.15;

    // Stop current auto-run and hold dot directly at clicked stage
    if (animationRef.current) {
      animationRef.current.stop();
    }
    progress.set(targetOffset);
    if (dotRef.current) {
      dotRef.current.style.offsetDistance = `${targetOffset * 100}%`;
    }

    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    // Pause auto-slideshow for 6s after user click, then resume seamlessly
    pauseTimerRef.current = setTimeout(() => {
      isPausedRef.current = false;
      startSlideshowAnimation(targetOffset);
    }, 6000);
  };

  return (
    <section 
      id="hero-section" 
      className="relative min-h-[92vh] sm:min-h-screen px-4 sm:px-6 md:px-12 max-w-[1360px] mx-auto flex flex-col justify-between pt-20 xs:pt-24 sm:pt-28 lg:pt-32 pb-4 sm:pb-6 overflow-visible"
    >
      {/* 1. Top Section: 2-Column Split Horizontally Aligned (Text & Impact Images) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center w-full my-auto pt-2 pb-0 sm:pt-4 sm:pb-0">
        
        {/* Left Side: Headline & Copy Centered Vertically - Emerging smoothly from inside the images */}
        <div className="lg:col-span-6 space-y-4 sm:space-y-6 z-10 flex flex-col justify-center pl-0 lg:pl-2 overflow-visible text-left">
          
          <motion.h1 
            initial={{ opacity: 0, x: 80, scale: 0.96 }}
            animate={isLoaded ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 80, scale: 0.96 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[72px] xl:text-8xl font-medium tracking-tight text-[#222720] leading-[1.06] sm:leading-[1.02] transform-gpu"
          >
            Good <br />
            deserves <br />
            <span className="text-[#e95126] relative inline-block hover:scale-105 transition-transform cursor-pointer">
              better.
              <span className="text-[#e95126] text-3xl xs:text-4xl sm:text-6xl inline-block ml-2 sm:ml-3 animate-spin-slow align-middle" aria-hidden="true">
                ✳
              </span>
            </span>
          </motion.h1>

          {/* Description Paragraph */}
          <motion.div 
            initial={{ opacity: 0, x: 60 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-2 max-w-md transform-gpu"
          >
            <p className="text-sm xs:text-base sm:text-lg text-[#222720] leading-relaxed font-normal">
              Ekhum connects fundraising, verification, disbursals and outcome reporting in one platform.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.75, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-3 sm:gap-5 pt-1 relative z-20 transform-gpu"
          >
            <button
              onClick={onOpenDemo}
              className="group relative px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#222720] text-white hover:bg-[#e95126] font-medium text-xs sm:text-sm transition-all duration-300 transform active:scale-95 hover:-translate-y-0.5 flex items-center justify-center gap-3 sm:gap-4 shadow-lg shadow-[#222720]/10 ring-2 ring-[#e95126]/30 cursor-pointer"
            >
              <span>Book a demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#purpose-section"
              className="group text-xs sm:text-sm font-semibold text-[#222720] hover:text-[#e95126] flex items-center gap-2 sm:gap-2.5 transition-colors py-2"
            >
              <span>Meet the platform</span>
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#d8d9cf] flex items-center justify-center group-hover:border-[#e95126] group-hover:bg-[#e95126] group-hover:text-white transition-all">
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </span>
            </a>
          </motion.div>

        </div>

        {/* Right Side: Centered 3D Stacked Glossy Glass Cards Deck Visual */}
        <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-start w-full overflow-visible">
          <HeroStackedDeck 
            isLoaded={isLoaded} 
            activeStage={activeStage} 
            setActiveStage={handleSelectStage} 
          />
        </div>

      </div>

      {/* 2. Platform Journey Pipeline — Completely Spanning Edge-to-Edge with Synchronized Pulse */}
      <div className="w-full mt-3 sm:mt-6 lg:mt-7 pt-1 relative z-20 overflow-visible">
        
        {/* SVG Flowing Wave Path with Traveling Light Pulse */}
        <div className="relative w-full h-20 xs:h-24 sm:h-28 overflow-visible">
          
          <div className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 1200 90">
              <defs>
                {/* Shining Radiant Gradient with Specular Highlights */}
                <linearGradient id="risingWaveGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#e95126" stopOpacity="0.9" />
                  <stop offset="25%" stopColor="#ff7a45" stopOpacity="1" />
                  <stop offset="50%" stopColor="#ff9a6c" stopOpacity="1" />
                  <stop offset="75%" stopColor="#ff7a45" stopOpacity="1" />
                  <stop offset="100%" stopColor="#e95126" stopOpacity="0.9" />
                </linearGradient>
                <linearGradient id="waveCoreShimmer" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#ffffff" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.4" />
                </linearGradient>
              </defs>

              {/* Deep Ambient Neon Aura Glow */}
              <path
                d={wavePathD}
                fill="none"
                stroke="#e95126"
                strokeWidth="12"
                strokeOpacity="0.22"
                className="blur-md"
              />

              {/* Secondary Vibrant Glow */}
              <path
                d={wavePathD}
                fill="none"
                stroke="#ff7a45"
                strokeWidth="6"
                strokeOpacity="0.4"
                className="blur-sm"
              />

              {/* Main Shining Solid Wave Line */}
              <path
                d={wavePathD}
                fill="none"
                stroke="url(#risingWaveGlow)"
                strokeWidth="3.2"
                strokeLinecap="round"
              />

              {/* Crisp Inner Laser Shimmer Highlight */}
              <path
                d={wavePathD}
                fill="none"
                stroke="url(#waveCoreShimmer)"
                strokeWidth="1"
                strokeLinecap="round"
              />

              {/* Left Terminal Point at exact 0 edge */}
              <g>
                <circle cx="0" cy="45" r="8" fill="#e95126" fillOpacity="0.35" className="animate-ping" />
                <circle cx="0" cy="45" r="5" fill="#e95126" stroke="#ffffff" strokeWidth="2" />
              </g>

              {/* Right Terminal Point at exact 1200 edge */}
              <g>
                <circle cx="1200" cy="45" r="8" fill="#e95126" fillOpacity="0.35" className="animate-ping" />
                <circle cx="1200" cy="45" r="5" fill="#e95126" stroke="#ffffff" strokeWidth="2" />
              </g>

              {/* Travelling Light Pulse Ball — synchronized with slideshow */}
              <motion.circle
                ref={dotRef}
                r="5.5"
                fill="#ffffff"
                stroke="#e95126"
                strokeWidth="2.5"
                filter="drop-shadow(0px 0px 8px #e95126)"
                style={{
                  offsetPath: `path('${wavePathD}')`,
                  offsetDistance,
                }}
              />
            </svg>
          </div>

          {/* 4 Pipeline Node Buttons Positioned Exactly on the Wave Curve */}
          <div className="relative w-full h-full z-30 pointer-events-auto">
            {pipelineNodes.map((node) => {
              const isActiveNode = activeStage === node.id;

              return (
                <div
                  key={node.label}
                  style={{
                    left: `${node.leftPct}%`,
                    top: `${node.topPct}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  className="absolute flex flex-col items-center group cursor-pointer touch-manipulation"
                  onClick={() => handleSelectStage(node.id)}
                >
                  {/* Active Ring Pulse Glow */}
                  {isActiveNode && (
                    <span className="animate-ping absolute -top-1 w-9 h-9 xs:w-11 xs:h-11 rounded-full bg-[#e95126]/30 opacity-75 pointer-events-none" />
                  )}

                  {/* Icon Button Centered Directly on the Wave Line */}
                  <button
                    className={`w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                      isActiveNode 
                        ? 'bg-[#e95126] text-white scale-110 shadow-lg shadow-[#e95126]/40 ring-4 ring-[#e95126]/20' 
                        : 'bg-white text-[#e95126] border border-[#d8d9cf] hover:border-[#e95126] hover:scale-105'
                    }`}
                    aria-label={`Select stage ${node.label}`}
                  >
                    {React.cloneElement(node.icon, {
                      className: `w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActiveNode ? 'text-white' : 'text-[#e95126]'}`,
                    })}
                  </button>

                  {/* Text Label Cleanly Below Button */}
                  <span className={`mt-1 xs:mt-1.5 text-[10px] xs:text-[11px] sm:text-xs font-semibold tracking-wide transition-colors whitespace-nowrap ${
                    isActiveNode ? 'text-[#e95126] font-bold' : 'text-[#66695f] group-hover:text-[#222720]'
                  }`}>
                    {node.label}
                  </span>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Bar: Scroll Indicator & Synchronized Stage Caption */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 pt-3 sm:pt-4 mt-1 sm:mt-2 border-t border-[#d8d9cf]/50">
          
          {/* Scroll Prompt */}
          <div className="flex items-center gap-2.5 text-[11px] xs:text-xs text-[#66695f]">
            <span className="w-[1px] h-4 sm:h-5 bg-[#d8d9cf] inline-block" />
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#222720]" />
              <span className="font-medium">Scroll to explore platform</span>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-[#e95126] animate-bounce ml-0.5" />
          </div>

          {/* Active Stage Caption Synchronized with Cards */}
          <div className="flex items-center gap-2 text-[11px] xs:text-xs">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#e95126] animate-pulse shrink-0" />
            <span className="font-bold text-[#e95126] uppercase tracking-wider whitespace-nowrap">
              {stageCaptions[activeStage]?.stage || '01 / COLLECT'}
            </span>
            <span className="text-[#66695f]/60 hidden md:inline">—</span>
            <span className="text-[#222720] font-medium hidden md:inline truncate max-w-xs lg:max-w-none">
              {stageCaptions[activeStage]?.quote || 'Every contribution begins with a promise.'}
            </span>
          </div>

        </div>

      </div>

    </section>
  );
}
