import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
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
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.15, once: false });

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

  // Auto-advance stages every 2 seconds (Collect -> Verify -> Disburse -> Prove)
  useEffect(() => {
    if (isContinuityModalOpen) return;

    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isContinuityModalOpen, stages.length]);

  const closeModal = () => {
    if (window.history.state?.modal === 'continuity') {
      window.history.back();
    } else {
      setIsContinuityModalOpen(false);
    }
  };

  // Keyboard navigation & browser back button support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isContinuityModalOpen) {
        if (e.key === 'Escape') closeModal();
        return;
      }
    };
    if (isContinuityModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      // Push history state so hardware/browser back button closes modal
      window.history.pushState({ modal: 'continuity' }, '');
      const handlePopState = () => setIsContinuityModalOpen(false);
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
  }, [isContinuityModalOpen]);

  const goToStage = (idx) => {
    setActiveStage(idx);
  };
  return (
    <section 
      id="platform" 
      ref={sectionRef}
      className="content-auto relative bg-[#f5f3ed] select-none pt-20 xs:pt-22 sm:pt-24 lg:pt-28 pb-10 sm:pb-14 min-h-[100dvh] min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background Ambient Depth */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#e3e8dc]/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-[600px] h-[600px] bg-[#eddcd2]/25 rounded-full blur-3xl" />
      </div>

      {/* Main Section Content Container */}
      <div className="relative w-full max-w-[1240px] mx-auto px-4 xs:px-6 sm:px-8 md:px-10 z-10 my-auto flex flex-col items-center">
        
        {/* ========================================================
            TOP: HEADING & 4 STEPS ALIGNED IN THE SAME HORIZONTAL LINE
           ======================================================== */}
        <motion.div 
          initial={{ opacity: 0, y: 25, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ perspective: '1000px' }}
          className="w-full max-w-[1280px] flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6 mb-8 sm:mb-10 px-2 sm:px-4"
        >
          
          {/* Left: Heading */}
          <button
            onClick={() => setIsContinuityModalOpen(true)}
            className="text-left cursor-pointer focus:outline-none group inline-block shrink-0"
            title="Click to explore full platform architecture"
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[40px] font-medium tracking-tight text-[#222720] leading-none whitespace-nowrap">
              <span>Good deserves <span className="text-[#e95126]">continuity.</span></span>
            </h2>
          </button>

          {/* Right: 4 Steps Text aligned in the SAME line horizontally in front of the heading */}
          <div className="flex items-center gap-4 xs:gap-6 sm:gap-8 lg:gap-10 overflow-x-auto no-scrollbar py-1">
            {stages.map((stg, idx) => {
              const isActive = activeStage === idx;

              return (
                <button
                  key={stg.id}
                  onClick={() => goToStage(idx)}
                  className={`group flex items-center gap-2 cursor-pointer transition-all duration-200 whitespace-nowrap focus:outline-none select-none ${
                    isActive ? 'text-[#e95126]' : 'text-[#66695f] hover:text-[#222720]'
                  }`}
                >
                  <span className={`font-mono text-xs sm:text-sm font-bold transition-colors ${
                    isActive ? 'text-[#e95126]' : 'text-[#a3a699] group-hover:text-[#222720]'
                  }`}>
                    {stg.step}
                  </span>
                  <span className={`text-sm sm:text-base lg:text-lg font-bold tracking-tight transition-colors ${
                    isActive ? 'text-[#e95126]' : 'text-[#222720]'
                  }`}>
                    {stg.name}
                  </span>
                  {isActive && (
                    <motion.span 
                      layoutId="activeStepHeaderPip" 
                      className="w-1.5 h-1.5 rounded-full bg-[#e95126] shadow-[0_0_6px_#e95126]" 
                    />
                  )}
                </button>
              );
            })}
          </div>

        </motion.div>

        {/* ========================================================
            THE HORIZONTAL HANGING LINE (NO TEXT ON THIS LINE)
           ======================================================== */}
        <div className="w-full max-w-[1280px] relative px-2 sm:px-4">
          
          {/* Continuous Clean Hanging Rail Across the Screen */}
          <div className="relative w-full z-20">
            {/* The Rail Line */}
            <div className="w-full h-[2.5px] bg-[#cfd1c7] relative rounded-full overflow-hidden shadow-xs">
              {/* Active glowing progress fill along the line */}
              <div
                className="h-full bg-gradient-to-r from-[#e95126] via-[#ff7b52] to-[#e95126] shadow-[0_0_8px_rgba(233,81,38,0.7)] transition-all duration-500 ease-out"
                style={{
                  width: `${((activeStage + 1) / 4) * 100}%`
                }}
              />
            </div>

            {/* Fixed Anchor Beads on the Line for each column (hidden on small screens to prevent vertical dot stacking) */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none z-30">
              {stages.map((stg, idx) => {
                const isActive = activeStage === idx;
                return (
                  <div key={`anchor-${stg.id}`} className="flex justify-center">
                    <div className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#e95126] border-white ring-2 ring-[#e95126]/50 shadow-[0_0_10px_rgba(233,81,38,0.9)] scale-110' 
                        : 'bg-[#4e5447] border-[#f5f3ed] shadow-xs'
                    }`} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Emerging Hanging Cards Area — Strictly Clipped at the Rail Top so items emerge from INSIDE the line */}
          <div 
            className="relative w-full pt-0"
            style={{
              clipPath: 'inset(0px -40px -100px -40px)',
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 pt-3 sm:pt-0">
              {stages.map((stg, idx) => {
                const isActive = activeStage === idx;

                return (
                  <motion.div
                    key={`hanging-card-${stg.id}`}
                    className="flex flex-col items-center"
                    initial={{ y: -520, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: -520, opacity: 0 }}
                    transition={{
                      type: 'spring',
                      damping: 18,
                      stiffness: 70,
                      mass: 1.0,
                      delay: 0.12 + idx * 0.16,
                    }}
                  >
                    {/* High-Contrast Taut Hanging Thread (hidden on small screens to prevent extra dots) */}
                    <div className="hidden sm:flex flex-col items-center w-full">
                      {/* The Thread String */}
                      <div 
                        className={`w-[2px] h-10 sm:h-12 lg:h-14 transition-all duration-300 ${
                          isActive 
                            ? 'bg-[#e95126] shadow-[0_0_8px_rgba(233,81,38,0.9)]' 
                            : 'bg-[#4e5447]/85'
                        }`} 
                      />

                      {/* Top Eyelet / Fastener Ring attaching thread to card */}
                      <div className={`w-3 h-3 rounded-full border-2 transition-all duration-300 -mb-1.5 z-20 ${
                        isActive 
                          ? 'bg-white border-[#e95126] shadow-[0_0_6px_rgba(233,81,38,0.6)]' 
                          : 'bg-white border-[#4e5447]'
                      }`} />
                    </div>

                    {/* The Image Card — Clean Visual Hanging Card (Click to open architecture details modal) */}
                    <div
                      onClick={() => {
                        goToStage(idx);
                        setIsContinuityModalOpen(true);
                      }}
                      className={`group relative w-full h-[290px] xs:h-[320px] sm:h-[350px] lg:h-[370px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 select-none transform-gpu touch-manipulation ${
                        isActive
                          ? 'ring-2 ring-[#e95126] shadow-[0_20px_45px_rgba(233,81,38,0.24)] scale-[1.02] border-transparent'
                          : 'border border-white/60 shadow-md opacity-85 hover:opacity-100 hover:scale-[1.01]'
                      }`}
                      title={`Click to view platform architecture details for ${stg.name}`}
                    >
                      {/* Background Photograph */}
                      <img
                        src={stg.photo}
                        alt={stg.alt}
                        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />

                      {/* Subtle Vignette for clean photographic depth */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                      {/* Top Edge Specular Sheen for Active Card */}
                      {isActive && (
                        <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none z-20" />
                      )}

                      {/* Hover Overlay: Clean prompt to open architecture modal */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none z-20">
                        <div className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#222720] text-xs font-semibold shadow-lg flex items-center gap-1.5 transform scale-95 group-hover:scale-100 transition-transform duration-200">
                          <span>View Architecture</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#e95126]" />
                        </div>
                      </div>

                    </div>

                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>

      {/* ========================================================
          DEDICATED ARCHITECTURE DEEP-DIVE MODAL (TELEPORTED TO BODY)
         ======================================================== */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isContinuityModalOpen && (
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
                      <Sparkles className="w-4 h-4 text-[#e95126]" />
                      <span>The Platform Architecture</span>
                    </div>
                    <h3 className="text-2xl sm:text-4xl font-medium tracking-tight text-[#222720]">
                      How Ekhum Preserves Continuity
                    </h3>
                    <p className="text-xs sm:text-base text-[#66695f] leading-relaxed">
                      Every contribution moves through a continuous 4-stage lifecycle where context, compliance documents, and fund allocation are never lost or separated.
                    </p>
                  </div>

                  {/* 4 Stages Detailed Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 pt-2">
                    {stages.map((stg, sIdx) => {
                      const isSelected = activeStage === sIdx;
                      return (
                        <div 
                          key={stg.id}
                          className={`rounded-2xl p-4 sm:p-6 border shadow-sm space-y-3 relative overflow-hidden transition-all duration-300 ${
                            isSelected 
                              ? 'bg-[#fffaf7] border-[#e95126] ring-2 ring-[#e95126]/30 shadow-md' 
                              : 'bg-white border-[#d8d9cf] hover:border-[#e95126]/40'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className={`w-6 h-6 rounded-full text-white flex items-center justify-center text-xs font-bold ${
                                isSelected ? 'bg-[#e95126] ring-2 ring-[#e95126]/40' : 'bg-[#e95126]'
                              }`}>
                                {stg.step}
                              </span>
                              <span className="font-bold text-sm sm:text-base text-[#222720]">{stg.name}</span>
                              {isSelected && (
                                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-[#e95126]/10 text-[#e95126] font-bold">
                                  Selected
                                </span>
                              )}
                            </div>
                            <div className="text-[#e95126]">
                              {stg.icon}
                            </div>
                          </div>

                          <h4 className="text-xs sm:text-sm font-bold text-[#e95126]">
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
                      );
                    })}
                  </div>

                  {/* Footer CTA */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-[#d8d9cf]">
                    <div className="font-serif italic text-xs sm:text-sm text-[#8c523f]">
                      Preserving context from donor pledge to verified outcome.
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
                        <span>Book a walkthrough</span>
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

