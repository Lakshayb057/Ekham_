import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  FileText, 
  ShieldCheck, 
  Lock, 
  Globe, 
  Users, 
  RefreshCw, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  ArrowUpRight
} from 'lucide-react';

export default function TrustSection({ onOpenDemo }) {
  const [activeIndex, setActiveIndex] = useState(1); // Default to FCRA-aware flows (02 / 06)
  const [selectedExplainer, setSelectedExplainer] = useState(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );
  
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.18, once: false });
  const isVisibleRef = useRef(true);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const SLIDE_INTERVAL = 1500; // Exact 1.5s interval to rotate cards smoothly and continuously

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Use IntersectionObserver so auto-slideshow pauses completely when off-screen
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const trustNodes = [
    {
      id: '80g',
      step: '01 / 06',
      title: '80G receipting',
      category: 'Automate PDF',
      verificationTag: 'Verified record',
      copy: 'Generate sequentially numbered receipts at settlement and preserve their history through reissues.',
      image: '/assets/tech-instant-receipt.jpg',
      icon: <FileText className="w-5 h-5 text-[#e95126]" />,
      explainer: {
        headline: 'Automated 80G Statutory Receipting',
        summary: 'Instant digitally signed, sequentially numbered tax certificates generated automatically upon webhook confirmation from authorized payment gateways.',
        highlights: [
          'Sequential 80G numbering with tamper-evident audit log.',
          'Instant automated delivery via WhatsApp Cloud API & Email.',
          'Annual aggregation and structured Form 10BD export.',
          'Preserves immutable version history on certificate reissue.',
        ],
      },
    },
    {
      id: 'fcra',
      step: '02 / 06',
      title: 'FCRA-aware flows',
      category: 'Statutory isolation',
      verificationTag: 'Verified in real-time',
      copy: 'Route foreign and domestic donations into separate compliance tracks automatically.',
      image: '/assets/indian-ngo-team.jpg',
      icon: <ShieldCheck className="w-5 h-5 text-[#e95126]" />,
      explainer: {
        headline: 'Automated FCRA Regulatory Isolation',
        summary: 'Real-time multi-currency isolation guaranteeing statutory segregation between domestic accounts and FCRA SBI New Delhi main accounts.',
        highlights: [
          'Direct routing to authorized FCRA accounts.',
          'Automated donor passport & nationality verification.',
          'Instant Form FC-4 annual return record compilation.',
          'Zero co-mingling ledger validation.',
        ],
      },
    },
    {
      id: 'roles',
      step: '03 / 06',
      title: 'Four-eyes controls',
      category: 'Dual authorization',
      verificationTag: 'Cryptographic log',
      copy: 'Require dual approval on payout batches, rate card updates, and sensitive exports.',
      image: '/assets/trust-role-access.jpg',
      icon: <Lock className="w-5 h-5 text-[#e95126]" />,
      explainer: {
        headline: 'Maker-Checker Authorization Protocol',
        summary: 'Prevents single-point unauthorized disbursals by enforcing cryptographic dual approval across critical administrative actions.',
        highlights: [
          'Dual cryptographic signatory requirement for disbursals > ₹10,000.',
          'Hardware security key (WebAuthn / FIDO2) support.',
          'Time-locked approval windows with automatic revocation.',
          'Immutable tamper-evident audit logs.',
        ],
      },
    },
    {
      id: 'privacy',
      step: '04 / 06',
      title: 'Local data sovereignty',
      category: 'Data residency',
      verificationTag: 'India DC certified',
      copy: 'Donor data stored on sovereign infrastructure with role-scoped access control.',
      image: '/assets/trust-data-residency.jpg',
      icon: <Globe className="w-5 h-5 text-[#e95126]" />,
      explainer: {
        headline: 'DPDP 2023 Compliant Sovereign Cloud',
        summary: '100% in-country data residency guaranteed with MeitY-empanelled Tier IV data center partners and localized AES-256 encryption.',
        highlights: [
          'Zero cross-border telemetry or donor record transfer.',
          'Full compliance with the Digital Personal Data Protection Act 2023.',
          'Field-level masking for donor PAN and Aadhaar records.',
          'Automated data retention and right-to-erasure workflows.',
        ],
      },
    },
    {
      id: 'access',
      step: '05 / 06',
      title: 'Scoped team roles',
      category: 'Granular RBAC',
      verificationTag: 'Zero-trust design',
      copy: 'Finance, audit, and ground teams see only what their operational role requires.',
      image: '/assets/tech-audit-reconciliation.jpg',
      icon: <Users className="w-5 h-5 text-[#e95126]" />,
      explainer: {
        headline: 'Zero-Trust Granular Role Permissions',
        summary: 'Strict least-privilege architecture separating field operations, finance managers, executive leadership, and statutory auditors.',
        highlights: [
          'Pre-configured auditor view mode with read-only access.',
          'Time-bound session expiry and IP whitelisting.',
          'Action-level permission scoping (view, export, approve, revoke).',
          'Export watermarking with automated supervisor notification.',
        ],
      },
    },
    {
      id: 'recon',
      step: '06 / 06',
      title: 'Daily bank match',
      category: 'Daily 3-way match',
      verificationTag: '99.98% match rate',
      copy: 'Automated correlation between gateway settlements, ledger entries, and bank statements.',
      image: '/assets/trust-bank-reconciliation.jpg',
      icon: <RefreshCw className="w-5 h-5 text-[#e95126]" />,
      explainer: {
        headline: 'Automated 3-Way Bank Reconciliation',
        summary: 'Triangulates payment gateway settlement reports, ERP ledger postings, and core banking statements automatically every 24 hours.',
        highlights: [
          'Automated 3-way UTR correlation every 24 hours.',
          'Automated discrepancy alerts and variance queues.',
          'Eliminates manual spreadsheet reconciliation prep.',
          'Real-time cash flow and disbursal visibility.',
        ],
      },
    },
  ];

  const total = trustNodes.length;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleSelect = (idx) => {
    setActiveIndex(idx);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedExplainer) {
        if (e.key === 'Escape') setSelectedExplainer(null);
        return;
      }
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedExplainer]);

  // Automatic slideshow timer moving every 1.5s properly forever
  useEffect(() => {
    if (selectedExplainer) return;

    const timer = setInterval(() => {
      if (isVisibleRef.current) {
        setActiveIndex((current) => (current + 1) % total);
      }
    }, SLIDE_INTERVAL);

    return () => clearInterval(timer);
  }, [selectedExplainer, total]);

  // Touch swipe handling for phones and tablets
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const getResponsiveXOffset = (diff) => {
    if (windowWidth < 380) return diff * 70;
    if (windowWidth < 480) return diff * 90;
    if (windowWidth < 768) return diff * 150;
    if (windowWidth < 1024) return diff * 210;
    return diff * 255;
  };

  return (
    <section 
      id="trust" 
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="content-auto min-h-[100dvh] min-h-screen pt-20 xs:pt-22 sm:pt-24 lg:pt-28 pb-10 sm:pb-14 lg:pb-16 bg-[#f5f3ed] text-[#222720] relative overflow-hidden select-none flex flex-col justify-center"
    >
      {/* Background Soft Sage and Warm Highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[450px] sm:w-[650px] h-[350px] sm:h-[450px] bg-[#dce4d3]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-[#e95126]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 w-full space-y-6 sm:space-y-8 relative z-10">
        
        {/* Top Header Section */}
        <motion.div 
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -60 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="border-b border-[#d8d9cf] pb-4 sm:pb-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3"
        >
          <div className="space-y-1.5">

            
            {/* Clickable Heading with Hover-Only Arrow */}
            <div className="flex items-center">
              <button
                onClick={() => setSelectedExplainer(trustNodes[activeIndex] || trustNodes[0])}
                className="group flex items-center gap-2.5 sm:gap-3 text-left cursor-pointer focus:outline-none"
                title="Click to open Trust & Compliance architectural overview"
              >
                <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#222720] group-hover:text-[#e95126] transition-colors leading-tight">
                  Good deserves <span className="text-[#e95126]">confidence.</span>
                </h2>
                <span className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#e95126] text-white flex items-center justify-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-md shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                </span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* 3D Revolving Trust Deck Stage */}
        <motion.div 
          animate={{ 
            opacity: isInView ? 1 : 0, 
            y: isInView ? 0 : 70, 
            scale: isInView ? 1 : 0.9 
          }}
          transition={{ duration: 0.85, ease: [0.19, 1, 0.22, 1] }}
          className="relative w-full min-h-[360px] xs:min-h-[380px] sm:min-h-[405px] pt-2 sm:pt-5 flex items-center justify-center overflow-visible"
        >
          {/* Deck Carousel Cards */}
          <div 
            className="relative w-full max-w-[290px] xs:max-w-[340px] sm:max-w-[380px] md:max-w-[400px] h-[360px] xs:h-[380px] sm:h-[405px] flex items-center justify-center" 
            style={{ perspective: '1400px' }}
          >
            {trustNodes.map((node, idx) => {
              // Calculate relative circular offset (-2, -1, 0, 1, 2)
              let diff = idx - activeIndex;
              if (diff > 3) diff -= total;
              if (diff < -3) diff += total;

              const isActive = diff === 0;
              const maxVisibleDiff = windowWidth < 480 ? 1 : 2;
              const isVisible = Math.abs(diff) <= maxVisibleDiff;

              if (!isVisible) return null;

              const xOffset = getResponsiveXOffset(diff);
              const yOffset = Math.abs(diff) * 10;
              const rotateY = diff * -16;
              const scale = isActive ? 1 : Math.abs(diff) === 1 ? 0.78 : 0.55;
              const opacity = isActive ? 1 : Math.abs(diff) === 1 ? 0.75 : 0.35;
              const zIndex = 30 - Math.abs(diff) * 10;

              const targetX = isInView ? xOffset : (diff === 0 ? 0 : diff < 0 ? -180 : 180);
              const targetY = isInView ? yOffset : (yOffset + 140);
              const targetRotateY = isInView ? rotateY : (diff * -32);
              const targetScale = isInView ? scale : (scale * 0.65);
              const targetOpacity = isInView ? opacity : 0;

              return (
                <motion.div
                  key={node.id}
                  onClick={() => {
                    if (isActive) {
                      setSelectedExplainer(node);
                    } else {
                      handleSelect(idx);
                    }
                  }}
                  animate={{
                    x: targetX,
                    y: targetY,
                    rotateY: targetRotateY,
                    scale: targetScale,
                    opacity: targetOpacity,
                  }}
                  transition={{
                    duration: isInView ? 0.85 : 0.4,
                    delay: isInView ? Math.abs(diff) * 0.08 : 0,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                  style={{
                    zIndex: zIndex,
                    transformStyle: 'preserve-3d',
                  }}
                  className={`group absolute w-full rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer transition-shadow duration-300 touch-manipulation transform-gpu ${
                    isActive
                      ? 'shadow-[0_18px_40px_rgba(233,81,38,0.18)] border border-[#e95126]/50 bg-white h-[355px] xs:h-[375px] sm:h-[405px] flex flex-col ring-1 ring-[#e95126]/30'
                      : 'shadow-sm bg-white/95 hover:bg-white hover:opacity-95 border border-[#d8d9cf]/80 h-[335px] xs:h-[355px] sm:h-[385px] p-4 sm:p-5 flex flex-col justify-between'
                  }`}
                  title={isActive ? `Click to open description for ${node.title}` : `Click to select ${node.title}`}
                >
                  {isActive ? (
                    /* Active Center Large Card with Clean Photo */
                    <>
                      <div 
                        className="relative h-48 xs:h-52 sm:h-60 w-full overflow-hidden bg-[#222720] shrink-0 cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedExplainer(node);
                        }}
                      >
                        <motion.img
                          animate={{
                            scale: isInView ? 1 : 1.35,
                            y: isInView ? 0 : 25,
                            opacity: isInView ? 1 : 0.35,
                          }}
                          transition={{
                            duration: 1.1,
                            ease: [0.19, 1, 0.22, 1],
                          }}
                          src={node.image}
                          alt={node.title}
                          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                        
                        {/* Hover Overlay: Clean prompt to open description modal */}
                        <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none z-10">
                          <div className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#222720] text-xs font-semibold shadow-md flex items-center gap-1.5 transform scale-95 group-hover:scale-100 transition-transform duration-200">
                            <span>Open description</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-[#e95126]" />
                          </div>
                        </div>
                      </div>

                      {/* Active Card Content */}
                      <div 
                        className="p-3.5 sm:p-4.5 bg-white space-y-1.5 sm:space-y-2 flex-1 flex flex-col justify-center cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedExplainer(node);
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#f5f3ed] border border-[#d8d9cf] flex items-center justify-center shrink-0">
                            {node.icon}
                          </div>
                          <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#222720] tracking-tight group-hover:text-[#e95126] transition-colors">
                            {node.title}
                          </h3>
                        </div>

                        <p className="mt-0.5 text-[11px] sm:text-xs text-[#66695f] leading-relaxed line-clamp-2">
                          {node.copy}
                        </p>
                      </div>
                    </>
                  ) : (
                    /* Side Background Card */
                    <>
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#f5f3ed] border border-[#d8d9cf] flex items-center justify-center text-[#e95126]">
                            {node.icon}
                          </div>
                          <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#dce4d3] text-[#222720]">
                            {node.category}
                          </span>
                        </div>

                        <div className="space-y-1 sm:space-y-1.5">
                          <h3 className="text-base sm:text-lg font-bold text-[#222720] tracking-tight">
                            {node.title}
                          </h3>
                          <p className="text-[11px] sm:text-xs text-[#66695f] leading-relaxed line-clamp-2 sm:line-clamp-3">
                            {node.copy}
                          </p>
                        </div>
                      </div>

                      <div className="pt-2 sm:pt-3 border-t border-[#f0eee6] flex items-center justify-end text-[10px] sm:text-[11px] font-semibold text-[#8c9285]">
                        <span className="text-[10px] font-mono text-[#66695f]">
                          {node.step.split(' ')[0]}
                        </span>
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Left / Right Carousel Navigation Controls */}
          <motion.button
            animate={{ x: isInView ? 0 : -35, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            onClick={handlePrev}
            aria-label="Previous trust card"
            className="absolute left-1 xs:left-2 sm:left-6 lg:left-12 z-40 w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 backdrop-blur-md border border-[#d8d9cf] shadow-sm hover:shadow-md text-[#222720] hover:text-[#e95126] active:scale-95 hover:scale-105 transition-all flex items-center justify-center cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>

          <motion.button
            animate={{ x: isInView ? 0 : 35, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            onClick={handleNext}
            aria-label="Next trust card"
            className="absolute right-1 xs:right-2 sm:right-6 lg:right-12 z-40 w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 backdrop-blur-md border border-[#d8d9cf] shadow-sm hover:shadow-md text-[#222720] hover:text-[#e95126] active:scale-95 hover:scale-105 transition-all flex items-center justify-center cursor-pointer"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>
        </motion.div>

        {/* Clean Step Progress Dot Selectors */}
        <motion.div 
          animate={{ y: isInView ? 0 : 30, opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-3 sm:pt-6"
        >
          {trustNodes.map((node, i) => (
            <button
              key={node.id}
              onClick={() => handleSelect(i)}
              className={`relative overflow-hidden transition-all duration-200 flex items-center gap-1 sm:gap-1.5 px-2.5 xs:px-3 sm:px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-semibold cursor-pointer ${
                activeIndex === i
                  ? 'bg-[#222720] text-white shadow-sm scale-105'
                  : 'bg-[#e7e5dc] text-[#66695f] hover:bg-[#dedcd2]'
              }`}
            >
              <span className="relative z-10">{node.step.split(' ')[0]}</span>
              {activeIndex === i && (
                <span className="relative z-10 hidden md:inline text-[10px] text-[#dce4d3] font-normal">
                  · {node.title}
                </span>
              )}
            </button>
          ))}
        </motion.div>

      </div>

      {/* Deep-Dive Trust Feature Explainer Modal */}
      <AnimatePresence>
        {selectedExplainer && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 xs:p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExplainer(null)}
              className="fixed inset-0 bg-[#142013]/70 backdrop-blur-sm"
            />

            {/* Modal Dialog Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl max-h-[90dvh] overflow-y-auto bg-[#f5f3ed] text-[#222720] rounded-2xl sm:rounded-3xl shadow-xl border border-white/80 p-5 sm:p-8 z-10 space-y-4 sm:space-y-5 safe-p-bottom"
            >
              {/* Modal Top Bar */}
              <div className="flex items-start justify-between gap-3 sm:gap-4 border-b border-[#d8d9cf] pb-3 sm:pb-4">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-[#d8d9cf] shadow-xs flex items-center justify-center text-[#e95126] shrink-0">
                    {selectedExplainer.icon}
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#e95126]">
                      {selectedExplainer.category} · {selectedExplainer.step}
                    </span>
                    <h3 className="text-lg sm:text-2xl font-bold text-[#222720]">
                      {selectedExplainer.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedExplainer(null)}
                  className="p-1.5 rounded-full text-[#66695f] hover:text-[#e95126] hover:bg-white active:scale-95 transition-colors cursor-pointer shrink-0"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Tabs for All 6 Compliance Nodes */}
              <div className="flex flex-wrap gap-1.5 border-b border-[#d8d9cf] pb-3">
                {trustNodes.map((node) => (
                  <button
                    key={node.id}
                    onClick={() => setSelectedExplainer(node)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      selectedExplainer.id === node.id
                        ? 'bg-[#222720] text-white shadow-xs'
                        : 'bg-white/80 text-[#66695f] hover:text-[#222720] hover:bg-white border border-[#d8d9cf]/60'
                    }`}
                  >
                    {node.title}
                  </button>
                ))}
              </div>

              {/* Main Modal Details */}
              <div className="space-y-4">
                
                {/* Visual Banner Preview */}
                <div className="relative h-40 rounded-2xl overflow-hidden shadow-sm border border-[#d8d9cf]">
                  <img
                    src={selectedExplainer.image}
                    alt={selectedExplainer.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-3 text-white text-xs font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#e95126]" />
                    <span>{selectedExplainer.explainer.headline}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#4b5145] leading-relaxed">
                  {selectedExplainer.explainer.summary}
                </p>

                {/* Key Technical Highlights */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#222720]">
                    Statutory & Operational Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedExplainer.explainer.highlights.map((point, i) => (
                      <div
                        key={i}
                        className="bg-white/90 border border-[#d8d9cf] rounded-xl p-2.5 flex items-start gap-2 shadow-2xs"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#e95126] shrink-0 mt-0.5" />
                        <p className="text-xs text-[#222720] leading-snug font-medium">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Modal Footer CTAs */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-[#d8d9cf]">
                <div className="text-xs text-[#66695f]">
                  Press <kbd className="px-1.5 py-0.5 rounded bg-white text-[#222720] font-mono border border-[#d8d9cf]">Esc</kbd> to close.
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedExplainer(null)}
                    className="px-4 py-2 rounded-full border border-[#d8d9cf] text-xs font-semibold text-[#222720] hover:bg-white transition-colors"
                  >
                    Close
                  </button>
                  {onOpenDemo && (
                    <button
                      onClick={() => {
                        setSelectedExplainer(null);
                        onOpenDemo();
                      }}
                      className="px-5 py-2 rounded-full bg-[#e95126] text-white hover:bg-[#d4431a] text-xs font-bold transition-all shadow-sm flex items-center gap-2"
                    >
                      <span>Book a live demo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

