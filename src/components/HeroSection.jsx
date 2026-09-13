import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { ArrowRight, ChevronDown, Coins, ShieldCheck, BarChart3 } from 'lucide-react';
import HeroStackedDeck from './HeroStackedDeck';
import AnimatedText from './AnimatedText';

export default function HeroSection({ onOpenDemo }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeStage, setActiveStage] = useState(0);
  const [headlineScrambleTrigger, setHeadlineScrambleTrigger] = useState(0);
  const [isHeadlineScrambling, setIsHeadlineScrambling] = useState(false);

  const triggerHeadlineScramble = () => {
    setHeadlineScrambleTrigger((prev) => prev + 1);
    setIsHeadlineScrambling(true);
    setTimeout(() => setIsHeadlineScrambling(false), 800);
  };

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

  // Continuous slideshow animation driven by the travelling orange dot (smoothed to a calm, luxurious 16.0s cycle)
  const CYCLE_DURATION = 16.0;
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
      className="relative min-h-[100dvh] min-h-screen px-4 sm:px-6 md:px-12 max-w-[1360px] mx-auto flex flex-col justify-between pt-14 xs:pt-16 sm:pt-22 md:pt-26 lg:pt-32 pb-2 xs:pb-3 sm:pb-6 overflow-hidden lg:overflow-visible bg-tech-grid"
    >
      {/* 1. Top Section: 2-Column Split Horizontally Aligned (Text & Impact Images) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 xs:gap-4 sm:gap-8 lg:gap-12 items-center w-full my-auto pt-1 xs:pt-1.5 sm:pt-2 lg:pt-3 pb-0 flex-1">
        
        {/* Left Side: Headline & Copy Centered Vertically */}
        <div className="lg:col-span-6 space-y-2.5 xs:space-y-3.5 sm:space-y-5 z-10 flex flex-col justify-center pl-0 lg:pl-2 overflow-visible text-left">
          


          <motion.h1 
            initial={{ opacity: 0, y: 35, rotateX: 20 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.95, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={triggerHeadlineScramble}
            onClick={triggerHeadlineScramble}
            className="text-[27px] xxs:text-[30px] xs:text-[33px] sm:text-[46px] md:text-6xl lg:text-[72px] xl:text-8xl font-medium tracking-tight text-[#222720] leading-[1.1] sm:leading-[1.06] lg:leading-[1.02] transform-gpu whitespace-normal cursor-pointer select-none group/headline"
            style={{ perspective: '1000px' }}
            title="Hover or click to trigger 3D code formation"
          >
            <AnimatedText 
              text="Good" 
              mode="word" 
              direction="left" 
              enableCodeScramble={true}
              triggerScramble={headlineScrambleTrigger}
              scrambleCascadeDelay={0}
            /> <br className="hidden lg:inline" />
            <AnimatedText 
              text="deserves" 
              mode="word" 
              delay={0.12} 
              direction="bottom" 
              enableCodeScramble={true}
              triggerScramble={headlineScrambleTrigger}
              scrambleCascadeDelay={65}
            /> <br className="hidden lg:inline" />
            <motion.span 
              whileHover={{ scale: 1.04 }}
              className="text-[#e95126] relative inline-block transition-transform cursor-pointer"
            >
              <AnimatedText 
                text="better." 
                mode="char" 
                delay={0.24} 
                direction="right" 
                enableCodeScramble={true}
                triggerScramble={headlineScrambleTrigger}
                scrambleCascadeDelay={130}
                isOrange={true}
              />
              <motion.span 
                animate={{ 
                  rotate: isHeadlineScrambling ? 720 : 360,
                  scale: isHeadlineScrambling ? [1, 1.3, 1] : 1
                }}
                transition={{ 
                  duration: isHeadlineScrambling ? 0.75 : 22, 
                  repeat: isHeadlineScrambling ? 0 : Infinity, 
                  ease: isHeadlineScrambling ? "easeOut" : "linear" 
                }}
                className="text-[#e95126] text-[22px] xxs:text-[24px] xs:text-[27px] sm:text-[42px] lg:text-6xl inline-block ml-1 xs:ml-1.5 sm:ml-3 align-middle" 
                aria-hidden="true"
              >
                ✳
              </motion.span>
            </motion.span>
          </motion.h1>

          {/* Description Paragraph with edge load */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-1.5 max-w-md transform-gpu"
          >
            <p className="text-xs xs:text-sm sm:text-base lg:text-lg text-[#222720] leading-relaxed font-normal">
              <AnimatedText 
                text="Ekhum connects fundraising, verification, disbursals and outcome reporting in one platform." 
                mode="word" 
                stagger={0.03}
                delay={0.15}
              />
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-2.5 sm:gap-5 pt-0.5 relative z-20 transform-gpu"
          >
            <button
              onClick={onOpenDemo}
              className="group relative px-4 xs:px-5 sm:px-7 py-2 xs:py-2.5 sm:py-3.5 rounded-full bg-[#222720] text-white hover:bg-[#e95126] font-medium text-xs sm:text-sm transition-all duration-300 transform active:scale-95 hover:-translate-y-0.5 flex items-center justify-center gap-2 xs:gap-2.5 sm:gap-4 shadow-lg shadow-[#222720]/10 ring-2 ring-[#e95126]/30 cursor-pointer min-h-[38px] xs:min-h-[42px] glow-orange-sm"
            >
              <span>Book a demo</span>
              <ArrowRight className="w-3.5 h-3.5 xs:w-4 xs:h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#purpose-section"
              className="group text-xs sm:text-sm font-semibold text-[#222720] hover:text-[#e95126] flex items-center gap-1.5 sm:gap-2.5 transition-colors py-1.5"
            >
              <span>Meet the platform</span>
              <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-[#d8d9cf] flex items-center justify-center group-hover:border-[#e95126] group-hover:bg-[#e95126] group-hover:text-white transition-all">
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </span>
            </a>
          </motion.div>

        </div>

        {/* Right Side: Centered 3D Stacked Glossy Glass Cards Deck Visual */}
        <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-start w-full overflow-visible mt-0 lg:mt-0">
          <HeroStackedDeck 
            isLoaded={isLoaded} 
            activeStage={activeStage} 
            setActiveStage={handleSelectStage} 
          />
        </div>

      </div>

      {/* 2. Platform Journey Pipeline — Positioned cleanly at the end of Hero Section */}
      <div className="w-full mt-auto pt-3 xs:pt-4 sm:pt-8 lg:pt-9 relative z-20 overflow-hidden sm:overflow-visible">
        
        {/* SVG Flowing Wave Path with Traveling Indicator */}
        <div className="relative w-full h-20 xs:h-22 sm:h-26 lg:h-28 overflow-hidden sm:overflow-visible">
          
          <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden sm:overflow-visible">
            <svg className="w-full h-full overflow-hidden sm:overflow-visible" preserveAspectRatio="none" viewBox="0 0 1200 90">
              <defs>
                <linearGradient id="risingWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#e95126" stopOpacity="0.75" />
                  <stop offset="50%" stopColor="#e95126" stopOpacity="1" />
                  <stop offset="100%" stopColor="#e95126" stopOpacity="0.75" />
                </linearGradient>
              </defs>

              {/* Underlying Track */}
              <path
                d={wavePathD}
                fill="none"
                stroke="#d8d9cf"
                strokeWidth="2"
                strokeDasharray="4 4"
                strokeOpacity="0.6"
              />

              {/* Main Shining Solid Wave Line */}
              <path
                d={wavePathD}
                fill="none"
                stroke="url(#risingWaveGradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Left Terminal Point at exact 0 edge */}
              <g>
                <circle cx="0" cy="45" r="4" fill="#e95126" />
              </g>

              {/* Right Terminal Point at exact 1200 edge */}
              <g>
                <circle cx="1200" cy="45" r="4" fill="#e95126" />
              </g>

              {/* Travelling Light Indicator — synchronized with slideshow */}
              <motion.circle
                ref={dotRef}
                r="5"
                fill="#ffffff"
                stroke="#e95126"
                strokeWidth="2.5"
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
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center group cursor-pointer touch-manipulation"
                  onClick={() => handleSelectStage(node.id)}
                >
                  {/* Radar pulse ring for active node */}
                  {isActiveNode && (
                    <span className="absolute -inset-2.5 rounded-full border border-[#e95126]/60 animate-radar pointer-events-none" />
                  )}



                  {/* Icon Button Centered DIRECTLY on the Wave Line */}
                  <button
                    className={`w-6.5 h-6.5 xs:w-7.5 xs:h-7.5 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm ${
                      isActiveNode 
                        ? 'bg-[#e95126] text-white scale-110 shadow-md ring-2 ring-[#e95126]/40 glow-orange-sm' 
                        : 'bg-white text-[#e95126] border border-[#d8d9cf] hover:border-[#e95126] hover:scale-105'
                    }`}
                    aria-label={`Select stage ${node.label}`}
                  >
                    {React.cloneElement(node.icon, {
                      className: `w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 ${isActiveNode ? 'text-white' : 'text-[#e95126]'}`,
                    })}
                  </button>

                  {/* Text Label Anchored Below without moving the button off the line */}
                  <span className={`absolute top-full mt-1 sm:mt-1.5 left-1/2 -translate-x-1/2 text-[8.5px] xs:text-[9.5px] sm:text-xs font-semibold tracking-wide transition-colors whitespace-nowrap pointer-events-none ${
                    isActiveNode ? 'text-[#e95126] font-bold' : 'text-[#66695f] group-hover:text-[#222720]'
                  }`}>
                    {node.label}
                  </span>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Bar: Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center sm:justify-start gap-2 pt-2.5 sm:pt-4 mt-1 sm:mt-2 border-t border-[#d8d9cf]/50 text-[10px] xs:text-[11px] sm:text-xs"
        >
          {/* Scroll Prompt */}
          <div className="flex items-center gap-1.5 xs:gap-2 text-[#66695f]">
            <span className="w-[1px] h-3.5 sm:h-5 bg-[#d8d9cf] inline-block" />
            <div className="flex items-center gap-1.5 xs:gap-2">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#222720]" />
              <span className="font-medium truncate max-w-[130px] xs:max-w-none">Scroll to explore</span>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-[#e95126] animate-bounce ml-0.5 shrink-0" />
          </div>
        </motion.div>

      </div>

    </section>
  );
}
