import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight, X, Check, ShieldCheck } from 'lucide-react';

const funderCapabilities = [
  {
    id: 'velocity',
    title: 'Live Utilisation',
    badge: 'Allocation & Flow',
    image: '/assets/funder-live-utilisation.jpg',
    summary: 'A continuous, live view of fund allocation, utilisation, and ground-level disbursements.',
    bullets: [
      'Continuous telemetry on non-profit bank account transactions and verified vendor receipts.',
      'Automated variance alerts when spending deviates from agreed funding terms.',
      'Direct integration with banking rails for instantaneous fund confirmation.',
    ],
  },
  {
    id: 'terms',
    title: 'Grant Terms as Data',
    badge: 'Programmatic Logic',
    image: '/assets/funder-grant-terms.jpg',
    summary: 'Transform legal grant agreements and milestones into structured, programmatic data.',
    bullets: [
      'Subsequent tranche releases trigger automatically upon verified milestone proofs.',
      'Automated monitoring for designated corpus and restricted capital allocations.',
      'Multi-year grant schedules with automated milestone tracking.',
    ],
  },
  {
    id: 'portfolio',
    title: 'Portfolio Reporting',
    badge: 'Cross-Programme View',
    image: '/assets/funder-portfolio-reporting.jpg',
    summary: 'Consolidated outcome reporting across foundations, corporate giving, and philanthropists.',
    bullets: [
      'Standardized Social Return on Investment (SROI) and unit-cost benchmarking.',
      'Verified field evidence repository with geo-tagged beneficiary logs.',
      'Board-ready executive summaries and slide-deck exports generated in seconds.',
    ],
  },
  {
    id: 'compliance',
    title: 'Audit-Ready Exports',
    badge: '100% Indian Sovereign',
    image: '/assets/funder-audit-ready-exports.jpg',
    summary: 'Instant compliance packs and recorded outcomes against agreed funding terms.',
    bullets: [
      'One-click export of statutory MCA Form CSR-2, CSR-1, and 80G tax reports.',
      'Cryptographically signed audit logs for internal and statutory auditors.',
      'Complete adherence to DPDP Act 2023 with localized Indian data residency.',
    ],
  },
];

const featurePoints = [
  {
    id: 'velocity',
    title: 'Live Utilisation',
    badge: 'Real-Time Telemetry',
    desc: 'Real-time view of allocation and ground-level spending.',
    image: '/assets/funder-live-utilisation.jpg',
  },
  {
    id: 'terms',
    title: 'Grant Terms as Data',
    badge: 'Programmatic Logic',
    desc: 'Automated milestones and tranche release conditions.',
    image: '/assets/funder-grant-terms.jpg',
  },
  {
    id: 'portfolio',
    title: 'Portfolio Reporting',
    badge: 'Cross-Grant View',
    desc: 'Unified outcome tracking across multiple programmes.',
    image: '/assets/funder-portfolio-reporting.jpg',
  },
  {
    id: 'compliance',
    title: 'Audit-Ready Exports',
    badge: 'Statutory DPDP & 80G',
    desc: 'Instant compliance records against funding terms.',
    image: '/assets/funder-audit-ready-exports.jpg',
  },
];

export default function FunderSection({ onOpenDemo }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(funderCapabilities[0].id);
  const [hoveredPointIndex, setHoveredPointIndex] = useState(0);

  // Close modal on Escape key and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  const activeCapability = funderCapabilities.find((c) => c.id === activeTab) || funderCapabilities[0];
  const currentItem = featurePoints[hoveredPointIndex] || featurePoints[0];

  return (
    <section id="funders" className="content-auto bg-[#e7eadf] min-h-[100dvh] min-h-screen pt-20 xs:pt-22 sm:pt-24 lg:pt-28 pb-10 sm:pb-14 text-[#222720] select-none bg-tech-grid flex flex-col justify-center">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 space-y-6 sm:space-y-8 my-auto w-full">
        
        {/* Header Divided by Line */}
        <motion.div 
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="border-b border-[#c9cebf] pb-4 sm:pb-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3"
        >
          <div className="space-y-1.5 sm:space-y-2">

            
            {/* Clickable Heading with Hover-Only Arrow */}
            <div className="flex items-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group flex items-center gap-2.5 sm:gap-3 text-left cursor-pointer focus:outline-none"
                title="Click to explore full funder architecture"
              >
                <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#222720] group-hover:text-[#e95126] transition-colors leading-tight">
                  Good deserves <span className="text-[#e95126]">recognition.</span>
                </h2>
                <span className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#e95126] text-white flex items-center justify-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-md shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                </span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Two-Column Section Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Proportional Dynamic Image with Animated Typography Overlay */}
          <motion.div 
            initial={{ opacity: 0, x: -60, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            style={{ perspective: '1000px' }}
            className="lg:col-span-6 transform-gpu"
          >
            <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-[#d5dacb] bg-[#1a1f18] aspect-[16/9] xs:aspect-[16/10] sm:aspect-[16/10] lg:aspect-[4/3] max-h-[220px] xs:max-h-[260px] sm:max-h-[320px] lg:max-h-[440px] group ring-1 ring-[#e95126]/20">
              {/* Dynamic Image Crossfade */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentItem.image}
                  src={currentItem.image}
                  alt={currentItem.title}
                  initial={{ opacity: 0.3, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0.3, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full object-cover object-center block"
                />
              </AnimatePresence>

              {/* Gradient Shade for Pure Font Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

              {/* Pure Typography Overlay with Noticeable Animation */}
              <div className="absolute bottom-3 xs:bottom-4 sm:bottom-6 left-3.5 xs:left-4 sm:left-6 right-3.5 xs:right-4 sm:right-6 z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`text-${currentItem.id}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-0.5 xs:space-y-1 sm:space-y-1.5"
                  >
                    <span className="text-[9.5px] xs:text-[10.5px] font-mono-tech font-bold uppercase tracking-widest text-[#ff8059]">
                      {currentItem.badge}
                    </span>
                    <h4 className="text-base xs:text-lg sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-tight">
                      {currentItem.title}
                    </h4>
                    <p className="text-[10px] xs:text-xs sm:text-sm text-white/90 font-light leading-relaxed max-w-lg line-clamp-2 sm:line-clamp-none">
                      {currentItem.desc}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Heading + Interactive Lines + Explore Action with 3D edge entry */}
          <motion.div 
            initial={{ opacity: 0, x: 60, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            style={{ perspective: '1000px' }}
            className="lg:col-span-6 space-y-3 sm:space-y-5 transform-gpu"
          >
            
            {/* Heading on the Points */}
            <div className="space-y-0.5 sm:space-y-1">
              <span className="text-[10px] xs:text-[11px] uppercase font-bold tracking-wider text-[#66695f]">
                What It Enables
              </span>
              <h3 className="text-base xs:text-lg sm:text-2xl font-bold tracking-tight text-[#222720]">
                Continuous Funding Visibility
              </h3>
            </div>

            {/* Interactive Feature List */}
            <div className="divide-y divide-[#c9cebf]/70 border-y border-[#c9cebf]/70">
              {featurePoints.map((item, idx) => {
                const isSelected = hoveredPointIndex === idx || activeTab === item.id;
                return (
                  <button
                    type="button"
                    key={item.title}
                    onMouseEnter={() => {
                      setHoveredPointIndex(idx);
                      setActiveTab(item.id);
                    }}
                    onClick={() => {
                      setHoveredPointIndex(idx);
                      setActiveTab(item.id);
                    }}
                    className={`w-full text-left py-2 xs:py-2.5 sm:py-3 px-2 xs:px-2.5 sm:px-3 rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-between gap-2.5 sm:gap-3 touch-manipulation active:scale-[0.99] ${
                      isSelected
                        ? 'bg-[#dce4d3] shadow-2xs'
                        : 'hover:bg-[#e0e5d8]/50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className={`w-8 h-8 xs:w-10 xs:h-10 rounded-lg xs:rounded-xl overflow-hidden shrink-0 border transition-all duration-200 ${
                        isSelected 
                          ? 'border-[#e95126] ring-2 ring-[#e95126]/30 scale-105' 
                          : 'border-[#c9cebf] bg-white'
                      }`}>
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className={`text-xs sm:text-sm font-bold transition-colors leading-tight ${
                          isSelected ? 'text-[#e95126]' : 'text-[#222720]'
                        }`}>
                          {item.title}
                        </h4>
                        <p className="text-[10px] xs:text-[11px] sm:text-xs text-[#66695f] leading-snug line-clamp-1 xs:line-clamp-none">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* Active line indicator arrow */}
                    <div className={`shrink-0 transition-all duration-200 ${
                      isSelected ? 'opacity-100 translate-x-0 text-[#e95126]' : 'opacity-30 -translate-x-1 text-[#66695f]'
                    }`}>
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Simple, Clean Explore Action */}
            <div className="pt-1 sm:pt-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-semibold text-[#222720] hover:text-[#e95126] transition-colors cursor-pointer"
              >
                <span>Make more room for good</span>
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#c9cebf] flex items-center justify-center group-hover:border-[#e95126] group-hover:bg-[#e95126] group-hover:text-white transition-all duration-200 shadow-2xs">
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </span>
              </button>
            </div>

          </motion.div>

        </div>

      </div>

      {/* Detailed Funder Intelligence Modal Dialog */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 xs:p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-[#121611]/80 backdrop-blur-md"
            />

            {/* Modal Dialog Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-4xl max-h-[90dvh] overflow-y-auto bg-[#f5f3ed] text-[#222720] rounded-2xl sm:rounded-3xl shadow-2xl border border-[#d8d9cf] p-5 sm:p-8 md:p-10 z-10 space-y-5 sm:space-y-6 safe-p-bottom"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="flex items-start justify-between gap-4 border-b border-[#d8d9cf] pb-6">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#e7eadf] border border-[#c6cebe] text-[10px] font-bold uppercase tracking-wider text-[#46503e]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e95126]" />
                    <span>05 / For Funders</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#222720]">
                    Good Deserves Recognition
                  </h3>
                  <p className="text-xs sm:text-sm text-[#46503e] font-medium">
                    See where funding moves, what it enables, and what it achieves.
                  </p>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2.5 rounded-full bg-[#e7eadf] text-[#66695f] hover:text-[#e95126] hover:bg-[#d8d9cf] transition-colors shrink-0 cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Comprehensive Context Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#e7eadf]/70 border border-[#d4dacd] space-y-1">
                <p className="text-xs sm:text-sm text-[#44483e] leading-relaxed">
                  Ekhum gives foundations, corporate giving programmes and philanthropists a live view of allocation, utilisation and recorded outcomes against their funding terms.
                </p>
              </div>

              {/* Navigation Tabs Inside Modal */}
              <div className="flex flex-wrap gap-2 border-b border-[#d8d9cf] pb-4">
                {funderCapabilities.map((cap) => (
                  <button
                    key={cap.id}
                    onClick={() => setActiveTab(cap.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeTab === cap.id
                        ? 'bg-[#222720] text-white shadow-xs'
                        : 'bg-[#e7eadf] text-[#66695f] hover:text-[#222720] hover:bg-[#dce4d3]'
                    }`}
                  >
                    {cap.title}
                  </button>
                ))}
              </div>

              {/* Active Tab Detailed View */}
              <div className="space-y-5">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-xs border border-[#c9cebf] shrink-0 bg-white">
                    <img
                      src={activeCapability.image}
                      alt={activeCapability.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#e95126]">
                      {activeCapability.badge}
                    </span>
                    <h4 className="text-xl sm:text-2xl font-bold text-[#222720]">
                      {activeCapability.title}
                    </h4>
                    <p className="text-sm text-[#66695f] leading-relaxed">
                      {activeCapability.summary}
                    </p>
                  </div>
                </div>

                {/* Detailed Capabilities Points */}
                <div className="space-y-3 bg-[#e7eadf]/60 rounded-2xl p-5 sm:p-6 border border-[#d8d9cf]">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-[#46503e]">
                    Key Technical Highlights
                  </h5>
                  <div className="space-y-2.5">
                    {activeCapability.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#222720]">
                        <Check className="w-4 h-4 text-[#e95126] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Compliance & Sovereignty Callout */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-[#d8d9cf] text-xs">
                  <div className="flex items-center gap-2 text-[#46503e] font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#1b7a43]" />
                    <span>DPDP Act 2023 Compliant · Ministry of Corporate Affairs Form CSR-2 Ready</span>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <button
                      onClick={() => {
                        setIsModalOpen(false);
                        if (onOpenDemo) onOpenDemo();
                      }}
                      className="px-5 py-2.5 rounded-full bg-[#e95126] hover:bg-[#d04218] text-white font-bold transition-all shadow-xs cursor-pointer"
                    >
                      Book Funder Consultation
                    </button>
                  </div>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
