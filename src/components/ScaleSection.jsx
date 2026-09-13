import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wifi, 
  Battery, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  CheckCircle2, 
  TrendingUp 
} from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

export default function ScaleSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const autoPlayRef = useRef(null);

  const partnerLogos = [
    { name: 'UNICEF', src: '/assets/reference-3.webp' },
    { name: 'Save the Children', src: '/assets/reference-4.webp' },
    { name: 'Magic Bus', src: '/assets/reference-5.webp' },
    { name: 'WWF', src: '/assets/reference-6.webp' },
    { name: 'CBM', src: '/assets/reference-7.webp' },
    { name: 'Roundglass Foundation', src: '/assets/reference-8.webp' },
    { name: 'Medcell', src: '/assets/reference-9.webp' },
    { name: 'Rangla Punjab', src: '/assets/reference-10.webp' },
    { name: 'Ethan & The Bean', src: '/assets/reference-11.webp' },
  ];

  // 16-tile dense collage matrix repeating the 9 authentic logos to look like many organisations
  const collageLogos = [
    partnerLogos[0], // UNICEF
    partnerLogos[1], // Save the Children
    partnerLogos[2], // Magic Bus
    partnerLogos[3], // WWF
    partnerLogos[4], // CBM
    partnerLogos[5], // Roundglass Foundation
    partnerLogos[6], // Medcell
    partnerLogos[7], // Rangla Punjab
    partnerLogos[8], // Ethan & The Bean
    partnerLogos[0], // UNICEF
    partnerLogos[2], // Magic Bus
    partnerLogos[4], // CBM
    partnerLogos[1], // Save the Children
    partnerLogos[5], // Roundglass Foundation
    partnerLogos[3], // WWF
    partnerLogos[7], // Rangla Punjab
  ];

  const stations = [
    {
      id: 0,
      title: '40 organisations',
      subtitle: 'Partner NGOs and impact institutions across India.',
      counterValue: 40,
      highlights: [
        '100% Due Diligence Cleared',
        'Direct Field Program Execution',
        'Pan-India 18 States Network'
      ],
      metrics: [
        { label: 'Verified Partners', val: '40+' },
        { label: 'Active Programs', val: '240+' },
        { label: 'Compliance Score', val: '99.8%' }
      ]
    },
    {
      id: 1,
      title: 'Rs. 1 billion',
      subtitle: 'Transparent, end-to-end verified funds deployed.',
      counterValue: 1,
      image: '/assets/milestone-sapling.jpg',
      alt: 'Sustainable growth sapling held in hands',
      highlights: [
        'Zero Leakage Protocol',
        'Real-time Milestone Disbursal',
        'Direct-to-Program Settlement'
      ],
      metrics: [
        { label: 'Disbursal Speed', val: '~1.2s' },
        { label: 'Intermediary Friction', val: '0%' },
        { label: 'Audit Trail', val: 'Instant' }
      ]
    },
    {
      id: 2,
      title: 'One ledger',
      subtitle: 'Connecting every rupee back to verified human outcomes.',
      image: '/assets/mother-child-plant.jpg',
      alt: 'Mother and daughter holding plant seedling together',
      highlights: [
        'Cryptographic Proof-of-Delivery',
        'Biometric & Geo-Tagged Milestone Sync',
        'Audited by Top-tier Institutional Custodians'
      ],
      metrics: [
        { label: 'Beneficiaries', val: '1.4M+' },
        { label: 'Reconciliation', val: '100%' },
        { label: 'Chain State', val: 'Finalized' }
      ]
    }
  ];

  // Auto-play horizontal carousel - 3.0 seconds interval
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % stations.length);
    }, 3000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [stations.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % stations.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + stations.length) % stations.length);
  };

  const handleSelectStation = (index) => {
    setCurrentSlide(index);
  };

  // Touch swipe support
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    if (touchStart - touchEnd > 50) {
      handleNext();
    }
    if (touchStart - touchEnd < -50) {
      handlePrev();
    }
  };

  const activeStation = stations[currentSlide];

  return (
    <section 
      id="scale-section" 
      className="content-auto min-h-[100dvh] min-h-screen pt-20 xs:pt-22 sm:pt-24 lg:pt-28 pb-10 sm:pb-14 lg:pb-16 bg-[#f5f3ed] relative overflow-hidden flex flex-col justify-center select-none"
    >
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 md:px-10 space-y-5 sm:space-y-6 w-full my-auto">
        
        {/* Clean Section Headline (02 badge and pause box removed) */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#222720] leading-[1.1]">
            Real progress at <span className="text-[#e95126]">human scale.</span>
          </h2>
        </motion.div>

        {/* ============================================================ */}
        {/* RESPONSIVE iOS PHONE MOCKUP: PORTRAIT ON SMALL, LANDSCAPE ON SM+ */}
        {/* ============================================================ */}
        <div className="relative pt-1 pb-2">
          {/* Subtle Ambient Backlight Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-r from-[#e95126]/12 via-[#e9ece2]/30 to-[#222720]/10 blur-3xl pointer-events-none -z-10" />

          {/* Outer Titanium Phone Chassis: Portrait on mobile, Landscape on sm+ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 25 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto max-w-[340px] xs:max-w-[370px] sm:max-w-[1020px] w-full rounded-[44px] sm:rounded-[54px] md:rounded-[62px] p-2.5 sm:p-3 md:p-3.5 bg-[#181c16] border-[3px] sm:border-[4px] border-[#363e33] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.06)]"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Portrait Hardware Buttons (Small Screens Only: Action, Volume Up/Down on left, Power on right) */}
            <div 
              className="sm:hidden absolute -left-[3.5px] w-[3px] bg-[#3a4237] rounded-l-[2px]" 
              style={{ top: '110px', height: '24px' }} 
            />
            <div 
              className="sm:hidden absolute -left-[3.5px] w-[3px] bg-[#3a4237] rounded-l-[2px]" 
              style={{ top: '148px', height: '44px' }} 
            />
            <div 
              className="sm:hidden absolute -left-[3.5px] w-[3px] bg-[#3a4237] rounded-l-[2px]" 
              style={{ top: '204px', height: '44px' }} 
            />
            <div 
              className="sm:hidden absolute -right-[3.5px] w-[3px] bg-[#3a4237] rounded-r-[2px]" 
              style={{ top: '155px', height: '64px' }} 
            />

            {/* Landscape Hardware Buttons (sm and larger screens) */}
            <div className="hidden sm:block absolute -top-[5px] left-36 w-16 h-[3px] bg-[#424b3f] rounded-t-sm" />
            <div className="hidden sm:block absolute -top-[5px] left-56 w-16 h-[3px] bg-[#424b3f] rounded-t-sm" />
            <div className="hidden sm:block absolute -bottom-[5px] right-36 w-20 h-[3px] bg-[#424b3f] rounded-b-sm" />

            {/* Inner Bezel Screen Display: Portrait on small, Landscape on sm+ */}
            <div 
              className="relative w-full min-h-[480px] xs:min-h-[520px] sm:min-h-[410px] md:min-h-[450px] aspect-[9/16.5] sm:aspect-[19.5/9] rounded-[34px] sm:rounded-[44px] md:rounded-[52px] overflow-hidden bg-[#e9ece2] border border-[#222720]/10 flex flex-col justify-between"
              style={{
                backgroundImage: 'linear-gradient(to right, rgba(34, 39, 32, 0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(34, 39, 32, 0.055) 1px, transparent 1px)',
                backgroundSize: '24px 24px'
              }}
            >
              
              {/* ------------------------------------------------------------- */}
              {/* iOS DYNAMIC ISLAND: Top-center in portrait, Left-edge in landscape */}
              {/* ------------------------------------------------------------- */}
              <div className="absolute z-40 bg-[#181c16] border border-white/20 shadow-md rounded-full transition-all duration-300
                top-2.5 left-1/2 -translate-x-1/2 w-20 xs:w-22 h-4 xs:h-4.5 flex items-center justify-between px-2.5
                sm:top-1/2 sm:-translate-y-1/2 sm:left-2.5 md:sm:left-3.5 sm:translate-x-0 sm:w-3 sm:md:w-3.5 sm:h-16 md:sm:h-20 sm:flex-col sm:justify-center sm:gap-1.5 sm:px-0"
              >
                {/* Camera Lens Specular Element */}
                <div className="w-2 h-2 rounded-full bg-[#0e1410] border border-cyan-900/60 relative shrink-0">
                  <div className="w-0.5 h-0.5 rounded-full bg-cyan-400 absolute top-0.5 left-0.5 opacity-80" />
                </div>
                {/* FaceID / Mic Dot */}
                <div className="w-1 h-1 rounded-full bg-[#242b22] shrink-0" />
              </div>

              {/* ------------------------------------------------------------- */}
              {/* iOS STATUS BAR: Clean Apple Look */}
              {/* ------------------------------------------------------------- */}
              <div className="relative z-30 px-5 xs:px-6 sm:px-8 pt-2.5 sm:pt-3 pb-1 flex items-center justify-between text-[11px] sm:text-xs text-[#222720]/80 font-medium select-none">
                {/* Left: Clock */}
                <div className="flex items-center pl-1 sm:pl-4">
                  <span className="font-semibold tracking-tight text-[#222720] font-mono text-xs sm:text-sm">9:41</span>
                </div>

                {/* Right: iOS Icons (Cellular, Wifi, Battery) */}
                <div className="flex items-center gap-1.5 sm:gap-2.5 pr-1 text-[#222720]">
                  {/* Signal bars */}
                  <div className="flex items-end gap-0.5 h-2.5">
                    <span className="w-0.5 h-1 bg-[#222720] rounded-xs" />
                    <span className="w-0.5 h-1.5 bg-[#222720] rounded-xs" />
                    <span className="w-0.5 h-2 bg-[#222720] rounded-xs" />
                    <span className="w-0.5 h-2.5 bg-[#222720] rounded-xs" />
                  </div>
                  <span className="text-[10px] font-bold font-mono text-[#222720]">5G</span>
                  <Wifi className="w-3.5 h-3.5 text-[#222720]" />
                  <div className="flex items-center gap-1">
                    <span className="text-[9px] font-mono font-semibold text-[#222720]">100%</span>
                    <Battery className="w-3.5 h-3.5 text-[#222720]" />
                  </div>
                </div>
              </div>

              {/* ------------------------------------------------------------- */}
              {/* HORIZONTALLY SCROLLING SLIDE VIEWPORT */}
              {/* ------------------------------------------------------------- */}
              <div className="relative flex-1 w-full overflow-hidden px-3 xs:px-4 sm:pl-14 sm:pr-8 md:pl-16 md:pr-10 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStation.id}
                    initial={{ opacity: 0, x: 50, scale: 0.98 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -50, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full flex items-center py-1 sm:py-3"
                  >
                    
                    {/* SLIDE 0: 40 ORGANISATIONS WITH DENSE COLLAGE */}
                    {activeStation.id === 0 && (
                      <div className="w-full h-full flex flex-col justify-center sm:grid sm:grid-cols-12 gap-2 xs:gap-2.5 sm:gap-6 sm:justify-between sm:items-center py-0.5 sm:py-0">
                        {/* Top/Left: 4x4 Dense Mosaic Collage (16 Tiles using 9 logos) */}
                        <div className="sm:col-span-6 w-full h-[175px] xs:h-[195px] sm:h-full sm:max-h-[265px] md:max-h-[290px] rounded-2xl sm:rounded-[28px] bg-white/75 backdrop-blur-sm border border-[#ccd3c4] p-1.5 sm:p-2.5 flex flex-col justify-center relative overflow-hidden shadow-xs shrink-0">
                          <div className="grid grid-cols-4 gap-1 xs:gap-1.5 sm:gap-2 h-full items-center">
                            {collageLogos.map((logo, lIdx) => (
                              <motion.div 
                                key={lIdx}
                                initial={{ opacity: 0, scale: 0.85 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: lIdx * 0.025, duration: 0.25 }}
                                className="bg-white hover:bg-[#fbfcf9] rounded-md sm:rounded-xl p-0.5 sm:p-1.5 flex items-center justify-center shadow-xs transition-all duration-300 hover:scale-105 hover:shadow-md h-8 xs:h-9 sm:h-10 md:h-11 border border-[#dce1d5]"
                              >
                                <img 
                                  src={logo.src} 
                                  alt={logo.name} 
                                  className="h-3.5 xs:h-4 sm:h-5 w-auto max-w-[85%] object-contain" 
                                  loading="lazy"
                                  decoding="async"
                                />
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Bottom/Right: Metric Headline & Detailed Capabilities */}
                        <div className="sm:col-span-6 flex flex-col justify-center space-y-1.5 xs:space-y-2 sm:space-y-3 text-[#222720] pl-0.5 sm:pl-2">
                          <div>
                            <div className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#222720] flex items-baseline gap-1.5 sm:gap-2">
                              <AnimatedCounter to={40} duration={1.4} />
                              <span className="text-sm xs:text-base sm:text-2xl font-normal text-[#222720]/80">organisations</span>
                            </div>
                            <p className="text-[10px] xs:text-[11px] sm:text-sm text-[#5d6356] font-normal mt-0.5 sm:mt-1 leading-snug">
                              {activeStation.subtitle}
                            </p>
                          </div>

                          {/* Capability Chips */}
                          <div className="flex flex-wrap gap-1 xs:gap-1.5 pt-0.5">
                            {activeStation.highlights.map((h, i) => (
                              <span 
                                key={i}
                                className="text-[8px] xs:text-[9px] sm:text-[11px] px-1.5 xs:px-2 py-0.5 rounded-md bg-white/85 text-[#222720] border border-[#ccd3c4] flex items-center gap-1 shadow-2xs font-medium"
                              >
                                <CheckCircle2 className="w-2.5 h-2.5 text-[#e95126]" />
                                {h}
                              </span>
                            ))}
                          </div>

                          {/* Mini Telemetry Bar */}
                          <div className="grid grid-cols-3 gap-1.5 sm:gap-2 pt-1 sm:pt-1.5 border-t border-[#ccd3c4]">
                            {activeStation.metrics.map((m, mi) => (
                              <div key={mi}>
                                <div className="text-[7.5px] xs:text-[8.5px] text-[#6d7366] uppercase font-mono font-medium">{m.label}</div>
                                <div className="text-[10.5px] xs:text-xs sm:text-sm font-bold font-mono text-[#222720]">{m.val}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* SLIDE 1: RS. 1 BILLION */}
                    {activeStation.id === 1 && (
                      <div className="w-full h-full flex flex-col justify-center sm:grid sm:grid-cols-12 gap-2 xs:gap-2.5 sm:gap-6 sm:justify-between sm:items-center py-0.5 sm:py-0">
                        {/* Top/Left: Milestone Sapling Real Impact Photography */}
                        <div className="sm:col-span-6 w-full h-[175px] xs:h-[195px] sm:h-full sm:max-h-[265px] md:max-h-[290px] rounded-2xl sm:rounded-[28px] relative overflow-hidden border border-[#ccd3c4] shadow-sm bg-neutral-100 shrink-0">
                          <img 
                            src={activeStation.image} 
                            alt={activeStation.alt} 
                            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>

                        {/* Bottom/Right: Capital Disbursal Stats */}
                        <div className="sm:col-span-6 flex flex-col justify-center space-y-1.5 xs:space-y-2 sm:space-y-3 text-[#222720] pl-0.5 sm:pl-2">
                          <div>
                            <div className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#222720] flex items-baseline gap-1.5 sm:gap-2">
                              <span>Rs. <AnimatedCounter to={1} duration={1.2} /></span>
                              <span className="text-sm xs:text-base sm:text-2xl font-normal text-[#222720]/80">billion</span>
                            </div>
                            <p className="text-[10px] xs:text-[11px] sm:text-sm text-[#5d6356] font-normal mt-0.5 sm:mt-1 leading-snug">
                              {activeStation.subtitle}
                            </p>
                          </div>

                          {/* Highlights */}
                          <div className="flex flex-wrap gap-1 xs:gap-1.5 pt-0.5">
                            {activeStation.highlights.map((h, i) => (
                              <span 
                                key={i}
                                className="text-[8px] xs:text-[9px] sm:text-[11px] px-1.5 xs:px-2 py-0.5 rounded-md bg-white/85 text-[#222720] border border-[#ccd3c4] flex items-center gap-1 shadow-2xs font-medium"
                              >
                                <CheckCircle2 className="w-2.5 h-2.5 text-[#e95126]" />
                                {h}
                              </span>
                            ))}
                          </div>

                          {/* Mini Telemetry Bar */}
                          <div className="grid grid-cols-3 gap-1.5 sm:gap-2 pt-1 sm:pt-1.5 border-t border-[#ccd3c4]">
                            {activeStation.metrics.map((m, mi) => (
                              <div key={mi}>
                                <div className="text-[7.5px] xs:text-[8.5px] text-[#6d7366] uppercase font-mono font-medium">{m.label}</div>
                                <div className="text-[10.5px] xs:text-xs sm:text-sm font-bold font-mono text-[#222720]">{m.val}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* SLIDE 2: ONE LEDGER */}
                    {activeStation.id === 2 && (
                      <div className="w-full h-full flex flex-col justify-center sm:grid sm:grid-cols-12 gap-2 xs:gap-2.5 sm:gap-6 sm:justify-between sm:items-center py-0.5 sm:py-0">
                        {/* Top/Left: Mother & Child Plant Real Photograph */}
                        <div className="sm:col-span-6 w-full h-[175px] xs:h-[195px] sm:h-full sm:max-h-[265px] md:max-h-[290px] rounded-2xl sm:rounded-[28px] relative overflow-hidden border border-[#ccd3c4] shadow-sm bg-neutral-100 shrink-0">
                          <img 
                            src={activeStation.image} 
                            alt={activeStation.alt} 
                            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>

                        {/* Bottom/Right: Unified Ledger Details */}
                        <div className="sm:col-span-6 flex flex-col justify-center space-y-1.5 xs:space-y-2 sm:space-y-3 text-[#222720] pl-0.5 sm:pl-2">
                          <div>
                            <div className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#222720] flex items-baseline gap-1.5 sm:gap-2">
                              <span>One</span>
                              <span className="text-sm xs:text-base sm:text-2xl font-normal text-[#222720]/80">ledger</span>
                            </div>
                            <p className="text-[10px] xs:text-[11px] sm:text-sm text-[#5d6356] font-normal mt-0.5 sm:mt-1 leading-snug">
                              {activeStation.subtitle}
                            </p>
                          </div>

                          {/* Highlights */}
                          <div className="flex flex-wrap gap-1 xs:gap-1.5 pt-0.5">
                            {activeStation.highlights.map((h, i) => (
                              <span 
                                key={i}
                                className="text-[8px] xs:text-[9px] sm:text-[11px] px-1.5 xs:px-2 py-0.5 rounded-md bg-white/85 text-[#222720] border border-[#ccd3c4] flex items-center gap-1 shadow-2xs font-medium"
                              >
                                <CheckCircle2 className="w-2.5 h-2.5 text-[#e95126]" />
                                {h}
                              </span>
                            ))}
                          </div>

                          {/* Mini Telemetry Bar */}
                          <div className="grid grid-cols-3 gap-1.5 sm:gap-2 pt-1 sm:pt-1.5 border-t border-[#ccd3c4]">
                            {activeStation.metrics.map((m, mi) => (
                              <div key={mi}>
                                <div className="text-[7.5px] xs:text-[8.5px] text-[#6d7366] uppercase font-mono font-medium">{m.label}</div>
                                <div className="text-[10.5px] xs:text-xs sm:text-sm font-bold font-mono text-[#222720]">{m.val}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                  </motion.div>
                </AnimatePresence>
              </div>

              {/* ------------------------------------------------------------- */}
              {/* iOS BOTTOM CONTROLS & HOME INDICATOR */}
              {/* ------------------------------------------------------------- */}
              <div className="relative z-30 px-3.5 xs:px-5 sm:px-12 md:px-14 pt-2 pb-1.5 xs:pb-2 flex flex-col items-center border-t border-[#ccd3c4] bg-[#e9ece2] rounded-b-[34px] sm:rounded-b-[44px] md:rounded-b-[52px]">
                {/* Centered Controls Row: Prev, Dots, Next aligned on the same horizontal axis */}
                <div className="w-full flex items-center justify-between">
                  {/* Previous Button */}
                  <button
                    onClick={handlePrev}
                    className="w-7 h-7 xs:w-8 xs:h-8 sm:w-auto sm:h-auto sm:py-1.5 sm:px-3.5 rounded-full sm:rounded-2xl bg-white/95 hover:bg-white text-[#222720] border border-[#ccd3c4] transition-all cursor-pointer flex items-center justify-center gap-1.5 text-[10px] sm:text-xs font-mono font-medium shadow-xs hover:shadow-sm active:scale-95 shrink-0"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">Prev</span>
                  </button>

                  {/* Center: Pagination Dots */}
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    {stations.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => handleSelectStation(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`transition-all duration-300 rounded-full cursor-pointer ${
                          currentSlide === i 
                            ? 'w-5 xs:w-6 h-1.5 bg-[#e95126]' 
                            : 'w-1.5 h-1.5 bg-[#222720]/25 hover:bg-[#222720]/50'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Next Button */}
                  <button
                    onClick={handleNext}
                    className="w-7 h-7 xs:w-8 xs:h-8 sm:w-auto sm:h-auto sm:py-1.5 sm:px-3.5 rounded-full sm:rounded-2xl bg-white/95 hover:bg-white text-[#222720] border border-[#ccd3c4] transition-all cursor-pointer flex items-center justify-center gap-1.5 text-[10px] sm:text-xs font-mono font-medium shadow-xs hover:shadow-sm active:scale-95 shrink-0"
                    aria-label="Next Slide"
                  >
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                </div>

                {/* iOS Home Indicator Bar placed cleanly below */}
                <div className="w-22 xs:w-26 sm:w-32 h-1 bg-[#222720]/35 rounded-full mt-1.5 xs:mt-2" />
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
