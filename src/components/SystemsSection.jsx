import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Coins, 
  FileCheck, 
  ShieldCheck, 
  ArrowRight, 
  ArrowLeft,
  FileSpreadsheet, 
  Cloud, 
  Sparkles, 
  CheckCircle2, 
  Heart, 
  BarChart3, 
  User, 
  X, 
  ArrowUpRight, 
  Clock, 
  TrendingUp, 
  AlertCircle 
} from 'lucide-react';

export default function SystemsSection({ onOpenDemo }) {
  const [activeProblem, setActiveProblem] = useState(0);
  const [isExplainerOpen, setIsExplainerOpen] = useState(false);
  const [offscreenRight, setOffscreenRight] = useState(800);
  const [isMobile, setIsMobile] = useState(false);

  // Dynamically calculate right offscreen position and detect mobile viewport
  useEffect(() => {
    const updateDimensions = () => {
      const w = window.innerWidth;
      setOffscreenRight(Math.max(w * 0.75, 450));
      setIsMobile(w < 768);
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const rotateYAngle = isMobile ? -10 : -22;
  const rotateZAngle = isMobile ? 1 : 2;

  const closeModal = () => {
    if (window.history.state?.modal === 'systems') {
      window.history.back();
    } else {
      setIsExplainerOpen(false);
    }
  };

  // Close explainer modal on Escape key & browser back button
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isExplainerOpen) {
        if (e.key === 'Escape') closeModal();
        return;
      }
    };
    if (isExplainerOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      window.history.pushState({ modal: 'systems' }, '');
      const handlePopState = () => setIsExplainerOpen(false);
      window.addEventListener('popstate', handlePopState);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('popstate', handlePopState);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isExplainerOpen]);

  return (
    <section id="systems-section" className="content-auto min-h-[100dvh] min-h-screen pt-16 xs:pt-20 sm:pt-24 lg:pt-28 pb-8 sm:pb-12 lg:pb-16 bg-[#f5f3ed] relative overflow-hidden flex flex-col justify-center select-none">
      <div className="max-w-[1240px] mx-auto px-3.5 xs:px-4 sm:px-6 md:px-10 w-full my-auto">
        
        {/* Main Grid: Left copy & buttons, Right visual diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 xs:gap-6 sm:gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Interactive Clickable Heading & Quick Stage Switcher */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 space-y-3.5 xs:space-y-4 sm:space-y-6"
          >
            <div className="space-y-1.5 xs:space-y-2 sm:space-y-3">
              <button
                onClick={() => setIsExplainerOpen(true)}
                className="text-left group cursor-pointer block focus:outline-none transition-transform active:scale-[0.99]"
                title="Click to view detailed system explanation"
              >
                <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#222720] leading-[1.1] group-hover:text-[#e95126] transition-colors flex items-center gap-2">
                  <span>Good deserves better systems.</span>
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#e95126] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0 inline-block" />
                </h2>
              </button>

              <div className="pt-0.5 sm:pt-1">
                <p className="text-xs xs:text-sm sm:text-base text-[#66695f] font-normal leading-snug">
                  When systems sit apart, people have to join the dots.
                </p>
              </div>
            </div>

            {/* Minimal 3-Stage Tab Switcher */}
            <div className="space-y-1.5 sm:space-y-2 pt-0.5 sm:pt-1">
              {[
                { id: 0, num: '01', title: 'Scattered donor records' },
                { id: 1, num: '02', title: 'Compliance assembled by hand' },
                { id: 2, num: '03', title: 'Outcomes detached from funding' },
              ].map((item) => {
                const isActive = activeProblem === item.id;
                return (
                  <button
                    key={item.num}
                    onClick={() => setActiveProblem(item.id)}
                    onMouseEnter={() => setActiveProblem(item.id)}
                    className={`w-full flex items-center gap-2.5 sm:gap-3 px-3 sm:px-3.5 py-1.5 xs:py-2 sm:py-2.5 rounded-lg xs:rounded-xl text-left transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? 'bg-white shadow-sm border border-[#e95126]/30 text-[#e95126]' 
                        : 'hover:bg-white/50 text-[#66695f]'
                    }`}
                  >
                    <span className={`w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full flex items-center justify-center text-[10px] sm:text-[11px] font-mono-tech font-bold shrink-0 transition-all ${
                      isActive ? 'bg-[#e95126] text-white' : 'bg-[#e5e5dc] text-[#66695f]'
                    }`}>
                      {item.num}
                    </span>
                    <span className={`text-[11px] xs:text-xs sm:text-sm font-medium transition-colors ${
                      isActive ? 'text-[#222720] font-bold' : 'text-[#222720]/80'
                    }`}>
                      {item.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-2 sm:gap-3">
              <button
                onClick={onOpenDemo}
                className="group px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-full bg-[#222720] text-white hover:bg-[#e95126] font-medium text-xs sm:text-sm transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 sm:gap-2.5 shadow-md glow-orange-sm cursor-pointer"
              >
                <span>See how it works</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setIsExplainerOpen(true)}
                className="px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-full bg-white/80 hover:bg-white text-[#222720] border border-[#d8d9cf] font-medium text-xs sm:text-sm transition-all duration-300 hover:border-[#e95126] flex items-center gap-1.5 cursor-pointer"
              >
                <span>Learn more</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#e95126]" />
              </button>
            </div>

          </motion.div>

          {/* Right Column: Visual Architecture 3D Stage */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            style={{ 
              perspective: isMobile ? '1100px' : '1600px', 
              transformStyle: 'preserve-3d', 
              WebkitBackfaceVisibility: 'hidden', 
              backfaceVisibility: 'hidden' 
            }}
            className="lg:col-span-8 space-y-3 xs:space-y-3.5 sm:space-y-5 relative transform-gpu"
          >
            {/* Top 3 Visual Problem Cards in 1 Connected Row (Entering with 3D perspective from right edge) */}
            <motion.div 
              variants={{
                hidden: { 
                  opacity: 0, 
                  x: offscreenRight, 
                  rotateY: rotateYAngle,
                  rotateZ: rotateZAngle,
                  scale: 0.94
                },
                visible: { 
                  opacity: 1, 
                  x: 0, 
                  rotateY: 0,
                  rotateZ: 0,
                  scale: 1,
                  transition: {
                    duration: 0.85,
                    delay: 0.05,
                    ease: [0.16, 1, 0.3, 1]
                  }
                }
              }}
              style={{ transformStyle: 'preserve-3d', WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden', willChange: 'transform, opacity' }}
              className="grid grid-cols-3 gap-1.5 xs:gap-2.5 sm:gap-4 relative z-10"
            >
              
              {/* Card 01: Scattered Donor Records */}
              <motion.div 
                whileHover={{ y: -3 }}
                onClick={() => setActiveProblem(0)}
                onMouseEnter={() => setActiveProblem(0)}
                className={`p-1.5 xs:p-2 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden relative ${
                  activeProblem === 0 
                    ? 'bg-white shadow-xl border-[#e95126] ring-2 ring-[#e95126]/20 scale-[1.01]' 
                    : 'bg-white/80 border-white/90 shadow-sm hover:bg-white hover:border-[#e95126]/40'
                }`}
              >
                <div className="space-y-0.5 xs:space-y-1 sm:space-y-1.5">
                  <h4 className="text-[8.5px] xxs:text-[9.5px] xs:text-[11px] sm:text-sm font-bold text-[#222720] leading-[1.15] sm:leading-tight break-words">
                    Scattered donor records
                  </h4>
                </div>

                <div className="py-1 xs:py-2 sm:py-3.5 flex items-center justify-center gap-0.5 xs:gap-1.5 sm:gap-2.5 flex-1 w-full overflow-hidden">
                  <div className="w-5 h-5 xxs:w-6 xxs:h-6 xs:w-7 xs:h-7 sm:w-11 sm:h-11 rounded sm:rounded-xl bg-white shadow-md border border-emerald-100 flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform shrink-0">
                    <div className="w-3.5 h-3.5 xxs:w-4.5 xxs:h-4.5 xs:w-5.5 xs:h-5.5 sm:w-7.5 sm:h-7.5 rounded sm:rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-[6.5px] xxs:text-[7.5px] xs:text-[8.5px] sm:text-xs shadow-inner">
                      X
                    </div>
                  </div>

                  <div className="w-5 h-5 xxs:w-6 xxs:h-6 xs:w-7 xs:h-7 sm:w-11 sm:h-11 rounded sm:rounded-xl bg-white shadow-md border border-blue-100 flex items-center justify-center transform translate-y-[-2px] hover:translate-y-0 transition-transform shrink-0">
                    <div className="w-3.5 h-3.5 xxs:w-4.5 xxs:h-4.5 xs:w-5.5 xs:h-5.5 sm:w-7.5 sm:h-7.5 rounded sm:rounded-lg bg-blue-500 flex items-center justify-center text-white text-[6.5px] xxs:text-[7.5px] xs:text-[8.5px] sm:text-xs shadow-inner">
                      <FileSpreadsheet className="w-2 h-2 xxs:w-2.5 xxs:h-2.5 xs:w-3 xs:h-3 sm:w-4.5 sm:h-4.5" />
                    </div>
                  </div>

                  <div className="w-5 h-5 xxs:w-6 xxs:h-6 xs:w-7 xs:h-7 sm:w-11 sm:h-11 rounded sm:rounded-xl bg-white shadow-md border border-sky-100 flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform shrink-0">
                    <div className="w-3.5 h-3.5 xxs:w-4.5 xxs:h-4.5 xs:w-5.5 xs:h-5.5 sm:w-7.5 sm:h-7.5 rounded sm:rounded-lg bg-sky-500 flex items-center justify-center text-white text-[6.5px] xxs:text-[7.5px] xs:text-[8.5px] sm:text-xs shadow-inner">
                      <Cloud className="w-2 h-2 xxs:w-2.5 xxs:h-2.5 xs:w-3 xs:h-3 sm:w-4.5 sm:h-4.5" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 02: Compliance Assembled by Hand */}
              <motion.div 
                whileHover={{ y: -3 }}
                onClick={() => setActiveProblem(1)}
                onMouseEnter={() => setActiveProblem(1)}
                className={`p-1.5 xs:p-2 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden relative ${
                  activeProblem === 1 
                    ? 'bg-white shadow-xl border-[#e95126] ring-2 ring-[#e95126]/20 scale-[1.01]' 
                    : 'bg-white/80 border-white/90 shadow-sm hover:bg-white hover:border-[#e95126]/40'
                }`}
              >
                <div className="space-y-0.5 xs:space-y-1 sm:space-y-1.5">
                  <h4 className="text-[8.5px] xxs:text-[9.5px] xs:text-[11px] sm:text-sm font-bold text-[#222720] leading-[1.15] sm:leading-tight break-words">
                    Compliance assembled by hand
                  </h4>
                </div>

                <div className="py-0.5 xs:py-1 sm:py-2 flex items-center justify-center flex-1 w-full">
                  <div className="w-full h-10 xxs:h-12 xs:h-16 sm:h-24 md:h-26 rounded-md sm:rounded-xl overflow-hidden shadow-xs border border-[#d8d9cf]/60 bg-white">
                    <img
                      src="/assets/compliance-paper-stack.jpg"
                      alt="Paper compliance documents with sticky notes"
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Card 03: Outcomes Detached from Funding */}
              <motion.div 
                whileHover={{ y: -3 }}
                onClick={() => setActiveProblem(2)}
                onMouseEnter={() => setActiveProblem(2)}
                className={`p-1.5 xs:p-2 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden relative ${
                  activeProblem === 2 
                    ? 'bg-white shadow-xl border-[#e95126] ring-2 ring-[#e95126]/20 scale-[1.01]' 
                    : 'bg-white/80 border-white/90 shadow-sm hover:bg-white hover:border-[#e95126]/40'
                }`}
              >
                <div className="space-y-0.5 xs:space-y-1 sm:space-y-1.5">
                  <h4 className="text-[8.5px] xxs:text-[9.5px] xs:text-[11px] sm:text-sm font-bold text-[#222720] leading-[1.15] sm:leading-tight break-words">
                    Outcomes detached from funding
                  </h4>
                </div>

                <div className="py-0.5 xs:py-1 sm:py-2 flex items-center justify-center flex-1 w-full">
                  <div className="w-full h-10 xxs:h-12 xs:h-16 sm:h-24 md:h-26 rounded-md sm:rounded-xl overflow-hidden shadow-xs border border-[#d8d9cf]/60 bg-white">
                    <img
                      src="/assets/outcomes-field-worker.jpg"
                      alt="Field coordinator talking with child"
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </motion.div>

            </motion.div>

            {/* Dotted Stream Convergence Funnel SVG */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, scale: 0.85 },
                visible: { 
                  opacity: 1, 
                  scale: 1,
                  transition: { duration: 0.5, delay: 0.22, ease: 'easeOut' }
                }
              }}
              className="w-full h-4 xs:h-5 sm:h-8 relative overflow-visible pointer-events-none -my-0.5 sm:-my-1 block"
            >
              <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 600 50">
                <path d="M 100 0 C 100 25, 270 30, 290 50" fill="none" stroke="#e95126" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.75" />
                <path d="M 300 0 C 300 25, 300 30, 300 50" fill="none" stroke="#e95126" strokeWidth="2.5" strokeDasharray="4 4" strokeOpacity="0.9" />
                <path d="M 500 0 C 500 25, 330 30, 310 50" fill="none" stroke="#e95126" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.75" />
                <circle cx="100" cy="2" r="3" fill="#e95126" />
                <circle cx="300" cy="2" r="3.5" fill="#e95126" />
                <circle cx="500" cy="2" r="3" fill="#e95126" />
                <circle cx="300" cy="48" r="4" fill="#e95126" />
              </svg>
            </motion.div>

            {/* Bottom Unified Block: One Connected Record Card + Full-Bleed Mother & Daughter Photo */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 xs:gap-3 sm:gap-4 items-stretch pt-0.5 sm:pt-0">
              
              {/* Connected Record Process Figure Card (7 cols - Entering from right edge with 3D effect) */}
              <motion.div 
                variants={{
                  hidden: { 
                    opacity: 0, 
                    x: offscreenRight, 
                    rotateY: rotateYAngle,
                    rotateZ: rotateZAngle,
                    scale: 0.94
                  },
                  visible: { 
                    opacity: 1, 
                    x: 0, 
                    rotateY: 0,
                    rotateZ: 0,
                    scale: 1,
                    transition: {
                      duration: 0.9,
                      delay: 0.14,
                      ease: [0.16, 1, 0.3, 1]
                    }
                  }
                }}
                style={{ transformStyle: 'preserve-3d', WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden', willChange: 'transform, opacity' }}
                className="md:col-span-7 bg-white/95 backdrop-blur-md rounded-xl xs:rounded-2xl sm:rounded-3xl p-3 xs:p-4 sm:p-5 border border-[#e95126]/30 shadow-xl space-y-2.5 xs:space-y-3 sm:space-y-3.5 relative flex flex-col justify-center min-h-[145px] xs:min-h-[160px] sm:min-h-[200px]"
              >
                
                <div className="absolute -top-2.5 sm:-top-3 left-1/2 -translate-x-1/2 bg-[#e95126] text-white px-2.5 xs:px-3.5 py-0.5 rounded-full text-[8px] xs:text-[9px] sm:text-[10px] font-mono-tech font-bold uppercase tracking-widest shadow-sm flex items-center gap-1 xs:gap-1.5 whitespace-nowrap glow-orange-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span>ONE CONNECTED RECORD // v2.4</span>
                </div>

                <p className="text-[9.5px] xs:text-[11px] sm:text-xs font-semibold text-[#66695f] text-center pt-0.5 sm:pt-1">
                  Every rupee tied to a verified human outcome.
                </p>

                {/* 5 Connected Node Pipeline Icons */}
                <div className="flex items-center justify-between pt-1 px-0.5 sm:px-1 relative overflow-x-auto">
                  <div className="absolute left-3 right-3 top-3 xs:top-3.5 h-[1.5px] bg-[#d8d9cf] -z-0" />

                  {[
                    { label: 'Donor', icon: <User className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5" /> },
                    { label: 'Gift', icon: <Coins className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5" /> },
                    { label: 'Verify', icon: <ShieldCheck className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5" /> },
                    { label: 'Disburse', icon: <FileCheck className="w-2.5 h-2.5 xs:w-3.5 h-3.5" /> },
                    { label: 'Outcome', icon: <BarChart3 className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5" /> },
                  ].map((step, idx) => (
                    <motion.div 
                      key={step.label} 
                      variants={{
                        hidden: { opacity: 0, scale: 0.5, y: 8 },
                        visible: { 
                          opacity: 1, 
                          scale: 1, 
                          y: 0,
                          transition: {
                            duration: 0.35,
                            delay: 0.32 + idx * 0.06,
                            ease: [0.16, 1, 0.3, 1]
                          }
                        }
                      }}
                      className="flex flex-col items-center gap-0.5 xs:gap-1 z-10 shrink-0"
                    >
                      <div className={`w-5.5 h-5.5 xs:w-6.5 xs:h-6.5 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all ${
                        idx === 2 || idx === 4 
                          ? 'bg-[#e95126] text-white shadow-sm ring-2 ring-[#e95126]/30 scale-105' 
                          : 'bg-white text-[#222720] border border-[#d8d9cf]'
                      }`}>
                        {step.icon}
                      </div>
                      <span className="text-[7px] xxs:text-[8px] xs:text-[9px] sm:text-[10px] font-bold text-[#222720] whitespace-nowrap">{step.label}</span>
                    </motion.div>
                  ))}
                </div>

              </motion.div>

              {/* Right Frame: Full-Bleed Mother & Daughter Image Card (5 cols - Entering from right edge with 3D effect) */}
              <motion.div 
                variants={{
                  hidden: { 
                    opacity: 0, 
                    x: offscreenRight, 
                    rotateY: rotateYAngle,
                    rotateZ: rotateZAngle,
                    scale: 0.94
                  },
                  visible: { 
                    opacity: 1, 
                    x: 0, 
                    rotateY: 0,
                    rotateZ: 0,
                    scale: 1,
                    transition: {
                      duration: 0.95,
                      delay: 0.22,
                      ease: [0.16, 1, 0.3, 1]
                    }
                  }
                }}
                style={{ transformStyle: 'preserve-3d', WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden', willChange: 'transform, opacity' }}
                className="md:col-span-5 relative rounded-xl xs:rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl min-h-[125px] xs:min-h-[145px] sm:min-h-[200px] group border border-white/80 flex flex-col justify-end p-2 xs:p-2.5 sm:p-3.5"
              >
                <img
                  src="/assets/mother-child-plant.jpg"
                  alt="Indian mother and daughter holding plant seedling"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#222720]/80 via-[#222720]/20 to-transparent pointer-events-none" />

                <div className="relative z-10 bg-white/95 backdrop-blur-md px-2 xs:px-2.5 sm:px-3 py-1 xs:py-1.5 sm:py-2 rounded-lg xs:rounded-xl border border-white/50 shadow-lg flex items-center gap-1.5 sm:gap-2">
                  <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#e95126]/15 text-[#e95126] flex items-center justify-center shrink-0">
                    <Heart className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current animate-pulse" />
                  </span>
                  <span className="text-[9.5px] xs:text-[11px] sm:text-xs font-bold text-[#222720] leading-tight">
                    More time for what really matters.
                  </span>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>

      </div>

      {/* ========================================================
          EXPLAINER MODAL (TELEPORTED TO BODY)
         ======================================================== */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isExplainerOpen && (
            <div className="fixed inset-0 z-[99999] flex flex-col sm:items-center sm:justify-center sm:p-6 md:p-10">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
                className="fixed inset-0 bg-[#222720]/80 backdrop-blur-md"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 15 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-[100dvh] sm:h-auto sm:max-w-4xl sm:max-h-[90dvh] bg-[#f5f3ed] rounded-none sm:rounded-3xl shadow-2xl sm:border sm:border-white/80 z-10 flex flex-col overflow-hidden"
              >
                {/* Mobile Top Bar with Back Tab and Close Button */}
                <div className="sm:hidden flex items-center justify-between px-4 py-3 bg-[#f5f3ed]/95 backdrop-blur-md border-b border-[#d8d9cf] shrink-0 z-30">
                  <button
                    onClick={closeModal}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#d8d9cf] shadow-xs text-xs font-semibold text-[#222720] active:scale-95 transition-transform cursor-pointer"
                    aria-label="Back to overview"
                  >
                    <ArrowLeft className="w-3.5 h-3.5 text-[#e95126]" />
                    <span>Back</span>
                  </button>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#e95126]">
                    Architecture
                  </span>
                  <button
                    onClick={closeModal}
                    className="w-8 h-8 rounded-full bg-white border border-[#d8d9cf] shadow-xs flex items-center justify-center text-[#222720] active:scale-95 transition-transform cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Desktop Close Button (hidden on mobile) */}
                <button
                  onClick={closeModal}
                  className="hidden sm:flex absolute top-6 right-6 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#222720] items-center justify-center shadow-md transition-transform active:scale-95 hover:scale-105 cursor-pointer z-20"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto overscroll-contain p-5 sm:p-8 md:p-10 space-y-6 sm:space-y-8 safe-p-bottom">
                  {/* Modal Header */}
                  <div className="space-y-3 max-w-2xl">
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e95126]">
                      <Sparkles className="w-4 h-4" />
                      <span>Deep Dive — The Connected Architecture</span>
                    </div>
                    <h3 className="text-2xl sm:text-4xl font-medium tracking-tight text-[#222720]">
                      Why Connected Systems Matter
                    </h3>
                    <p className="text-xs sm:text-base text-[#66695f] leading-relaxed">
                      Donor information, financial records and programme data belong together. When systems sit apart, teams spend weeks manually reconciling spreadsheets instead of driving impact. Ekhum connects them into one immutable, verified lifecycle.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-2">
                    <div className="bg-white/80 rounded-2xl p-4 sm:p-6 border border-red-200 shadow-sm space-y-3 sm:space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-red-700 font-bold text-sm">
                          <AlertCircle className="w-4 h-4" />
                          <span>The Disconnected Reality</span>
                        </div>
                        <span className="text-[10px] uppercase tracking-wider font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded">High Friction</span>
                      </div>

                      <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-[#66695f]">
                        <li className="flex items-start gap-2.5">
                          <span className="text-red-500 font-bold">✕</span>
                          <span><strong>Fragmented Silos:</strong> Donor CRM in one tool, bank accounts in another, Excel spreadsheets for field receipts.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <span className="text-red-500 font-bold">✕</span>
                          <span><strong>Manual Compliance:</strong> 80G tax receipts and FCRA audit trails compiled by hand over weeks.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <span className="text-red-500 font-bold">✕</span>
                          <span><strong>Delayed Proof:</strong> Donors wait months for anecdotal reports disconnected from specific funds.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-2xl p-4 sm:p-6 border border-[#e95126]/40 shadow-md space-y-3 sm:space-y-4 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#e95126]/10 rounded-full blur-xl pointer-events-none" />
                      
                      <div className="flex items-center justify-between relative z-10">
                        <div className="flex items-center gap-2 text-[#e95126] font-bold text-sm">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>The Ekhum Unified Flow</span>
                        </div>
                        <span className="text-[10px] uppercase tracking-wider font-bold text-[#e95126] bg-[#e95126]/10 px-2 py-0.5 rounded">Verified Ledger</span>
                      </div>

                      <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-[#222720] relative z-10">
                        <li className="flex items-start gap-2.5">
                          <span className="text-emerald-600 font-bold">✓</span>
                          <span><strong>One Live Pipeline:</strong> Donor pledges automatically trigger verified accounting entries and disbursal tracks.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <span className="text-emerald-600 font-bold">✓</span>
                          <span><strong>Instant Compliance:</strong> Automated 80G certificates, digital receipts, and statutory audit exports.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <span className="text-emerald-600 font-bold">✓</span>
                          <span><strong>Verified Human Outcomes:</strong> Every beneficiary milestone tied directly back to the supporting rupee.</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-2">
                    <div className="bg-white/90 p-4 rounded-xl border border-[#d8d9cf] flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#e95126]/10 text-[#e95126] flex items-center justify-center shrink-0">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm sm:text-base font-bold text-[#222720]">70% Time Saved</div>
                        <div className="text-[11px] text-[#66695f]">in annual compliance & audit prep</div>
                      </div>
                    </div>

                    <div className="bg-white/90 p-4 rounded-xl border border-[#d8d9cf] flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm sm:text-base font-bold text-[#222720]">100% Audit-Proof</div>
                        <div className="text-[11px] text-[#66695f]">cryptographically verified entries</div>
                      </div>
                    </div>

                    <div className="bg-white/90 p-4 rounded-xl border border-[#d8d9cf] flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm sm:text-base font-bold text-[#222720]">Instant Reporting</div>
                        <div className="text-[11px] text-[#66695f]">real-time transparency for donors</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-[#d8d9cf]">
                    <div className="font-serif italic text-xs sm:text-sm text-[#8c523f]">
                      Empowering teams to do more good.
                    </div>
                    <div className="flex items-center justify-between sm:justify-end gap-3">
                      <button
                        onClick={closeModal}
                        className="px-4 sm:px-5 py-2.5 rounded-full border border-[#d8d9cf] text-[#222720] text-xs font-semibold hover:bg-white active:scale-95 transition-all cursor-pointer"
                      >
                        Back
                      </button>
                      <button
                        onClick={() => {
                          closeModal();
                          if (onOpenDemo) onOpenDemo();
                        }}
                        className="px-5 sm:px-6 py-2.5 rounded-full bg-[#e95126] text-white hover:bg-[#d4431a] active:scale-95 text-xs font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer"
                      >
                        <span>Book a live demo</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}

    </section>
  );
}
