import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform, useMotionValueEvent } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowLeft,
  ShieldCheck, 
  Heart, 
  BarChart3, 
  Truck,
  ArrowUpRight,
  X,
  Sparkles,
  Check,
  ChevronDown
} from 'lucide-react';

export default function DonationJourney({ onOpenDemo }) {
  const [activeStage, setActiveStage] = useState(0);
  const [isContinuityModalOpen, setIsContinuityModalOpen] = useState(false);
  
  const containerRef = useRef(null);

  // Track raw scroll position across the optimized 380vh section for smooth, effortless movement
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Snappy, effortless spring physics: responsive to wheel ticks without drag or overshoot
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 65,
    damping: 24,
    mass: 0.45,
    restDelta: 0.0005,
  });

  // Track active stage cleanly from smoothProgress with balanced thresholds
  useMotionValueEvent(smoothProgress, 'change', (latest) => {
    let stageIndex = 0;
    if (latest < 0.28) {
      stageIndex = 0; // Collect
    } else if (latest < 0.58) {
      stageIndex = 1; // Verify
    } else if (latest < 0.86) {
      stageIndex = 2; // Disburse
    } else {
      stageIndex = 3; // Prove
    }
    setActiveStage((prev) => (prev !== stageIndex ? stageIndex : prev));
  });

  // Programmatically scroll the page to a specific stage checkpoint
  const scrollToStage = (stageIdx) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const containerTop = rect.top + scrollTop;
    const totalHeight = containerRef.current.offsetHeight - window.innerHeight;
    
    // Smooth target checkpoints
    const checkpoints = [0.05, 0.38, 0.68, 0.95];
    const targetScroll = containerTop + totalHeight * (checkpoints[stageIdx] ?? 0);
    
    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
    setActiveStage(stageIdx);
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsContinuityModalOpen(false);
    };
    if (isContinuityModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isContinuityModalOpen]);

  const stages = [
    {
      id: 'collect',
      step: '01',
      name: 'Collect',
      stageTag: '01 / INTAKE',
      supporting: 'Every contribution begins with intent.',
      detailedStatement: 'Accept donations across campaigns, recurring mandates, and offline entries with zero friction.',
      icon: <Heart className="w-4 h-4" />,
      photo: '/assets/roadmap-collect.jpg',
      alt: 'Young Indian woman donating on tablet',
      contextLabel: 'E-Mandate & Direct Intake',
      systemRef: 'UPI / NetBanking Native',
      modalBullets: [
        'White-labeled donation portals natively hosted on your own NGO domain.',
        'Seamless UPI, NetBanking, auto-debit recurring mandates, and international currencies.',
        'Every gift generates an instant, cryptographically verifiable digital intake receipt.'
      ]
    },
    {
      id: 'verify',
      step: '02',
      name: 'Verify',
      stageTag: '02 / COMPLIANCE',
      supporting: 'Trust gives generosity a direction.',
      detailedStatement: 'Real-time validation against FCRA, NGO Darpan, and statutory compliance frameworks.',
      icon: <ShieldCheck className="w-4 h-4" />,
      photo: '/assets/roadmap-verify.jpg',
      alt: 'Compliance auditor working on laptop outdoors',
      contextLabel: 'Section 80G & FCRA Isolation',
      systemRef: 'NGO Darpan & 12A Synchronized',
      modalBullets: [
        'Automated real-time validation against FCRA, NGO Darpan, and Section 12A/80G databases.',
        'Tamper-proof audit logs recorded at every regulatory verification milestone.',
        'Reusable digital trust passport eliminating redundant diligence for institutional grantmakers.'
      ]
    },
    {
      id: 'disburse',
      step: '03',
      name: 'Disburse',
      stageTag: '03 / GROUND SUPPORT',
      supporting: 'Support reaches the right people.',
      detailedStatement: 'Milestone-conditioned fund tranches linked directly to verified on-ground field execution.',
      icon: <Truck className="w-4 h-4" />,
      photo: '/assets/roadmap-disburse.jpg',
      alt: 'Field coordinator delivering care supply box to woman',
      contextLabel: 'Tranche Disbursal Control',
      systemRef: 'Milestone Escrow Release',
      modalBullets: [
        'Milestone-conditioned grant tranche disbursals linked directly to field verification.',
        'Direct automated bank settlement with mandatory vendor invoice reconciliation.',
        'Synchronized ledger notifications delivered simultaneously to funder and recipient.'
      ]
    },
    {
      id: 'prove',
      step: '04',
      name: 'Prove',
      stageTag: '04 / EVIDENCE LEDGER',
      supporting: 'Impact becomes visible.',
      detailedStatement: 'Immutable visual evidence and geotagged outcome records reconciled to the single rupee.',
      icon: <BarChart3 className="w-4 h-4" />,
      photo: '/assets/roadmap-prove.jpg',
      alt: 'Smiling schoolgirl in uniform holding plant sapling',
      contextLabel: 'Rupee-for-Rupee Audit Trail',
      systemRef: 'Geotagged Ledger Record',
      modalBullets: [
        'Geotagged photographic evidence and beneficiary milestones directly attached to the ledger.',
        'Self-updating live impact visibility portal for institutional and retail donors.',
        'One-click statutory audit export for board members, auditors, and regulatory filings.'
      ]
    },
  ];

  return (
    <section 
      id="platform" 
      ref={containerRef}
      className="relative bg-[#f5f3ed] select-none min-h-[380vh]"
    >
      {/* Background Ambient Depth */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#e3e8dc]/40 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-[600px] h-[600px] bg-[#eddcd2]/30 rounded-full blur-3xl" />
      </div>

      {/* Sticky Viewport Container Pinned While Scrolling */}
      <div className="sticky top-14 sm:top-18 lg:top-20 w-full max-w-[1360px] mx-auto px-4 sm:px-6 md:px-12 py-3 sm:py-6 flex flex-col justify-center min-h-[calc(100dvh-56px)] sm:min-h-[calc(100vh-80px)] relative z-10">
        
        {/* ========================================================
            TWO-COLUMN EDITORIAL COMPOSITION (BALANCED & ALIGNED)
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center w-full">
          
          {/* ========================================================
              LEFT COLUMN — CLEAN CARDLESS EDITORIAL LIST & GLOWING ACCENTS
             ======================================================== */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 flex flex-col justify-center">
            
            {/* Top Heading Block */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e95126]">
                <span className="w-2 h-2 rounded-full bg-[#e95126] animate-pulse" />
                <span>02 / The Contribution Journey</span>
              </div>

              {/* Clickable Heading with Hover Arrow */}
              <button
                onClick={() => setIsContinuityModalOpen(true)}
                className="text-left group cursor-pointer block focus:outline-none transition-transform active:scale-[0.99]"
                title="Click to explore full platform architecture"
              >
                <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#222720] leading-[1.15] group-hover:text-[#e95126] transition-colors flex items-center gap-2">
                  <span>Good deserves <span className="text-[#e95126]">continuity.</span></span>
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#e95126] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0" />
                </h2>
              </button>

              <p className="text-xs xs:text-sm sm:text-base text-[#66695f] font-normal leading-relaxed max-w-md pt-0.5">
                Ekhum carries each contribution through four connected stages, preserving the context and records needed at every step.
              </p>
            </div>

            {/* Vertically Aligned Cardless Editorial Stage List */}
            <div className="space-y-1 sm:space-y-1.5 pt-1 sm:pt-2 border-t border-[#d8d9cf]/80 relative">
              {/* Subtle connecting vertical track */}
              <div className="absolute left-[24px] sm:left-[26px] top-6 bottom-6 w-[1.5px] bg-[#d8d9cf]/60 pointer-events-none" />

              {stages.map((stg, idx) => {
                const isActive = activeStage === idx;

                return (
                  <div
                    key={stg.id}
                    onMouseEnter={() => setActiveStage(idx)}
                    onClick={() => scrollToStage(idx)}
                    className={`group cursor-pointer transition-all duration-300 py-2 sm:py-3 px-2 sm:px-3 rounded-xl relative z-10 touch-manipulation ${
                      isActive 
                        ? 'opacity-100 bg-[#e95126]/[0.06]' 
                        : 'opacity-65 hover:opacity-100 hover:bg-black/[0.02]'
                    }`}
                  >
                    {/* Active Left Indicator Bar */}
                    {isActive && (
                      <motion.div 
                        layoutId="activeStageLine"
                        className="absolute left-0 top-1.5 bottom-1.5 w-[3px] bg-[#e95126] rounded-full"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}

                    <div className="flex items-center justify-between gap-2 sm:gap-4 pl-1">
                      {/* Left: Glowing Number Badge + Name */}
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-[11px] sm:text-xs font-bold font-mono transition-all duration-300 relative z-10 ${
                          isActive 
                            ? 'bg-[#e95126] text-white shadow-[0_0_12px_rgba(233,81,38,0.7)] ring-2 ring-[#e95126] scale-105' 
                            : 'bg-[#e5e5dc] text-[#66695f] group-hover:bg-[#dadad0]'
                        }`}>
                          {stg.step}
                        </span>

                        <div className={`transition-colors duration-300 ${
                          isActive ? 'text-[#e95126]' : 'text-[#66695f] group-hover:text-[#222720]'
                        }`}>
                          {stg.icon}
                        </div>

                        <span className={`text-xs xs:text-sm sm:text-base font-bold tracking-tight transition-colors duration-300 ${
                          isActive ? 'text-[#222720]' : 'text-[#222720]/80 group-hover:text-[#222720]'
                        }`}>
                          {stg.name}
                        </span>
                      </div>

                      {/* Right: Short Supporting Line with Smooth Upward Fade */}
                      <AnimatePresence mode="wait">
                        <motion.div 
                          key={`${stg.id}-${isActive}`}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className={`text-[11px] xs:text-xs sm:text-sm transition-colors text-right truncate max-w-[140px] xs:max-w-[200px] sm:max-w-none ${
                            isActive ? 'text-[#e95126] font-semibold' : 'text-[#66695f]'
                          }`}
                        >
                          {stg.supporting}
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Active Expanded Stage Statement */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, y: 4 }}
                          animate={{ opacity: 1, height: 'auto', y: 0 }}
                          exit={{ opacity: 0, height: 0, y: 4 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="pt-1.5 pl-8 sm:pl-12 pr-2 overflow-hidden space-y-1"
                        >
                          <p className="text-[11px] sm:text-xs text-[#66695f] leading-relaxed">
                            {stg.detailedStatement}
                          </p>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsContinuityModalOpen(true);
                            }}
                            className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-[#e95126] hover:underline pt-0.5"
                          >
                            <span>Platform architecture details</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Bottom Controls / Stepper */}
            <div className="flex items-center justify-between pt-1 sm:pt-2 border-t border-[#d8d9cf]/80">
              <div className="text-[11px] sm:text-xs text-[#66695f] font-serif italic">
                Tap or scroll to explore stages.
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2">
                <button
                  onClick={() => scrollToStage(Math.max(0, activeStage - 1))}
                  disabled={activeStage === 0}
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#d8d9cf] bg-white flex items-center justify-center text-[#222720] shadow-xs transition-colors ${
                    activeStage === 0 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-[#222720] hover:text-white active:scale-95'
                  }`}
                  aria-label="Previous stage"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
                <span className="text-[11px] sm:text-xs font-bold text-[#222720] px-1.5 sm:px-2 font-mono">
                  0{activeStage + 1} / 04
                </span>
                <button
                  onClick={() => scrollToStage(Math.min(3, activeStage + 1))}
                  disabled={activeStage === 3}
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#d8d9cf] bg-white flex items-center justify-center text-[#222720] shadow-xs transition-colors ${
                    activeStage === 3 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-[#222720] hover:text-white active:scale-95'
                  }`}
                  aria-label="Next stage"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* ========================================================
              RIGHT COLUMN — 100% CRISP, GLOSSY PRESENTATION
             ======================================================== */}
          <div className="lg:col-span-6 relative w-full flex items-center justify-center">
            
            {/* The Unified Visual Stage Frame */}
            <motion.div 
              initial={{ opacity: 0, y: 25, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[420px] sm:max-w-[490px] lg:max-w-[520px] mx-auto h-[260px] xs:h-[300px] sm:h-[380px] md:h-[420px] lg:h-[480px] xl:h-[500px] rounded-2xl overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.25)] border border-[#2b3327]/60 bg-[#1c201a]"
            >
              {/* Active Stage Image & Overlays: 100% Crystal-Clear, High-Contrast & Gentle on Eyes */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={stages[activeStage].id}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1.0 }}
                  exit={{ opacity: 0, scale: 0.99 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full flex flex-col justify-between p-5 sm:p-6 rounded-xl overflow-hidden"
                >
                  {/* Background Full-Bleed Photograph: Natural, Sharp & Crisp */}
                  <img
                    src={stages[activeStage].photo}
                    alt={stages[activeStage].alt}
                    className="absolute inset-0 w-full h-full object-cover object-center transform-gpu"
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Refined Deep Photographic Vignette for High-Contrast Text Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151913]/95 via-[#151913]/40 to-[#151913]/25 pointer-events-none" />

                  {/* Top Row: Clean Cardless Typography Only (e.g. 01 / Collect) */}
                  <motion.div 
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-20 flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-white/90 drop-shadow-md"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e95126] animate-pulse" />
                    <span className="text-[#ff9a6c]">{stages[activeStage].step}</span>
                    <span className="text-white/40">/</span>
                    <span className="text-white">{stages[activeStage].name}</span>
                  </motion.div>

                  {/* Bottom HUD Overlay: Quote & High-Contrast Visibility */}
                  <div className="relative z-20 space-y-3">
                    
                    {/* Supporting Statement */}
                    <motion.div 
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="space-y-1.5 max-w-lg"
                    >
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#ff9a6c]">
                        {stages[activeStage].stageTag}
                      </span>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-medium tracking-tight text-white leading-snug drop-shadow-md">
                        "{stages[activeStage].supporting}"
                      </h3>
                    </motion.div>

                    {/* Authentic Institutional Metadata Footer */}
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="flex flex-wrap items-center justify-between gap-3 pt-2.5 border-t border-white/20"
                    >
                      {/* Operational Context Label */}
                      <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/20 text-white shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-[#e95126]" />
                        <span className="text-xs font-medium text-white/95">
                          {stages[activeStage].contextLabel}
                        </span>
                      </div>

                      {/* Clean Milestone Counter */}
                      <div className="flex items-center gap-1.5 text-xs font-mono text-white/80 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10">
                        <span>Milestone 0{activeStage + 1} / 04</span>
                      </div>
                    </motion.div>

                  </div>

                </motion.div>
              </AnimatePresence>

            </motion.div>

          </div>

        </div>

      </div>

      {/* ========================================================
          DEDICATED ARCHITECTURE DEEP-DIVE MODAL
         ======================================================== */}
      <AnimatePresence>
        {isContinuityModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 xs:p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsContinuityModalOpen(false)}
              className="absolute inset-0 bg-[#222720]/80 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-4xl max-h-[90dvh] overflow-y-auto bg-[#f5f3ed] rounded-2xl sm:rounded-3xl shadow-2xl border border-white/80 p-5 sm:p-8 md:p-10 z-10 space-y-6 sm:space-y-8 safe-p-bottom"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsContinuityModalOpen(false)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-[#222720] flex items-center justify-center shadow-md transition-transform active:scale-95 hover:scale-105 cursor-pointer z-20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e95126]">
                  <Sparkles className="w-4 h-4 text-[#e95126]" />
                  <span>The Platform Architecture</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#222720]">
                  How Ekhum Preserves Continuity
                </h3>
                <p className="text-sm sm:text-base text-[#66695f] leading-relaxed">
                  Every contribution moves through a continuous 4-stage lifecycle where context, compliance documents, and fund allocation are never lost or separated.
                </p>
              </div>

              {/* 4 Stages Detailed Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                {stages.map((stg) => (
                  <div 
                    key={stg.id}
                    className="bg-white rounded-2xl p-5 sm:p-6 border border-[#d8d9cf] shadow-sm space-y-3 relative overflow-hidden hover:border-[#e95126]/40 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#e95126] text-white flex items-center justify-center text-xs font-bold">
                          {stg.step}
                        </span>
                        <span className="font-bold text-base text-[#222720]">{stg.name}</span>
                      </div>
                      <div className="text-[#e95126]">
                        {stg.icon}
                      </div>
                    </div>

                    <h4 className="text-sm font-bold text-[#e95126]">
                      {stg.supporting}
                    </h4>

                    <p className="text-xs text-[#66695f]">
                      {stg.detailedStatement}
                    </p>

                    <ul className="space-y-2 text-xs sm:text-sm text-[#66695f] pt-1">
                      {stg.modalBullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Footer CTA */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#d8d9cf]">
                <div className="font-serif italic text-sm text-[#8c523f]">
                  Preserving context from donor pledge to verified outcome.
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsContinuityModalOpen(false)}
                    className="px-5 py-2.5 rounded-full border border-[#d8d9cf] text-[#222720] text-xs font-semibold hover:bg-white transition-colors"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      setIsContinuityModalOpen(false);
                      if (onOpenDemo) onOpenDemo();
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#e95126] text-white hover:bg-[#d4431a] text-xs font-bold transition-all shadow-md flex items-center gap-2"
                  >
                    <span>Book a live walkthrough</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

