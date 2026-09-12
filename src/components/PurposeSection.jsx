import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Coins, 
  FileCheck, 
  ShieldCheck, 
  ArrowRight, 
  FileSpreadsheet, 
  FileText, 
  Cloud, 
  Sparkles, 
  CheckCircle2, 
  Heart, 
  BarChart3, 
  User, 
  Sprout,
  Check,
  X,
  ArrowUpRight,
  Database,
  Layers,
  Clock,
  TrendingUp,
  AlertCircle
} from 'lucide-react';

export default function PurposeSection({ onOpenDemo }) {
  const [activeProblem, setActiveProblem] = useState(0);
  const [isExplainerOpen, setIsExplainerOpen] = useState(false);

  // Partner logos for the 40 Organisations collage background
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

  // Close explainer modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsExplainerOpen(false);
    };
    if (isExplainerOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isExplainerOpen]);

  return (
    <section id="purpose-section" className="content-auto py-14 sm:py-20 md:py-28 bg-[#f5f3ed] relative overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-12 space-y-16 sm:space-y-24">
        
        {/* ========================================================
            SECTION 2 — “THE SCALE OF GOOD”
           ======================================================== */}
        <div id="scale-section" className="relative space-y-6 sm:space-y-8">
          
          {/* Section Header */}
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e95126]">
              <span className="w-2 h-2 rounded-full bg-[#e95126]" />
              <span>The Scale of Good</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#222720] leading-[1.1]">
              Real progress at <span className="text-[#e95126]">human scale.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#66695f] font-normal leading-relaxed">
              Built with purpose. Trusted by organisations that drive real impact across India.
            </p>
          </div>

          {/* Interactive Scale Scene: 3 Full-Bleed Photography Metric Cards */}
          <div className="relative pt-1 sm:pt-2 pb-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 xs:gap-4 sm:gap-5 md:gap-4 lg:gap-6 relative z-20">
              
              {/* Station 1: 40 Organisations with Logo Collage Mosaic Background */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6 }}
                className="group relative rounded-2xl overflow-hidden shadow-md border border-white/80 h-[165px] xxs:h-[175px] xs:h-[190px] sm:h-[220px] md:h-[230px] lg:h-[250px] flex flex-col justify-between p-3.5 xs:p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-[#222720]"
              >
                {/* Full Card Background: Aesthetic Mosaic Collage of Partner Logos */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1b1f1a] to-[#282e25] overflow-hidden">
                  <div className="absolute inset-0 grid grid-cols-3 gap-1.5 xs:gap-2 p-2 xs:p-2.5 opacity-35 group-hover:opacity-55 transition-opacity duration-700 transform scale-105 group-hover:scale-100">
                    {partnerLogos.map((logo, lIdx) => (
                      <div 
                        key={lIdx} 
                        className="bg-white/90 rounded-lg p-1 xs:p-1.5 flex items-center justify-center shadow-xs backdrop-blur-xs"
                      >
                        <img 
                          src={logo.src} 
                          alt={logo.name} 
                          className="h-3.5 xs:h-4 sm:h-5 md:h-6 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500" 
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Vignette Overlay for High Typography Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#222720]/95 via-[#222720]/75 to-[#222720]/50 pointer-events-none" />

                {/* Top Pill Badges */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-2 xs:px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] xs:text-[11px] font-bold border border-white/30 shadow-xs">
                    01 / Network
                  </span>
                  <span className="px-2 xs:px-2.5 py-0.5 rounded-full bg-[#e95126] text-white text-[9px] xs:text-[10px] font-bold uppercase tracking-wider shadow-xs">
                    Pan-India
                  </span>
                </div>

                {/* Bottom Overlay Metric */}
                <div className="relative z-10 space-y-0.5 text-white">
                  <div className="flex items-baseline gap-1.5 xs:gap-2 drop-shadow-sm">
                    <span className="text-2xl xs:text-3xl sm:text-3xl lg:text-4xl font-medium tracking-tight">40</span>
                    <span className="text-base xs:text-lg sm:text-lg lg:text-xl font-normal text-white/90">organisations</span>
                  </div>
                  <p className="text-[11px] xs:text-xs text-white/80 font-normal leading-snug">
                    Partner NGOs and impact institutions across India.
                  </p>
                </div>
              </motion.div>

              {/* Station 2: Rs. 1 Billion with Real Impact Sapling & Disbursal Photo */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group relative rounded-2xl overflow-hidden shadow-md border border-white/80 h-[165px] xxs:h-[175px] xs:h-[190px] sm:h-[220px] md:h-[230px] lg:h-[250px] flex flex-col justify-between p-3.5 xs:p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Full Card Background Image */}
                <img
                  src="/assets/milestone-sapling.jpg"
                  alt="Sustainable growth sapling held in hands"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#222720]/90 via-[#222720]/45 to-[#222720]/30 pointer-events-none" />

                {/* Top Pill Badges */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-2 xs:px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] xs:text-[11px] font-bold border border-white/30 shadow-xs">
                    02 / Disbursals
                  </span>
                  <span className="px-2 xs:px-2.5 py-0.5 rounded-full bg-emerald-600 text-white text-[9px] xs:text-[10px] font-bold uppercase tracking-wider shadow-xs">
                    18 States
                  </span>
                </div>

                {/* Bottom Overlay Metric */}
                <div className="relative z-10 space-y-0.5 text-white">
                  <div className="flex items-baseline gap-1.5 xs:gap-2 drop-shadow-sm">
                    <span className="text-2xl xs:text-3xl sm:text-3xl lg:text-4xl font-medium tracking-tight">Rs. 1</span>
                    <span className="text-base xs:text-lg sm:text-lg lg:text-xl font-normal text-white/90">billion</span>
                  </div>
                  <p className="text-[11px] xs:text-xs text-white/80 font-normal leading-snug">
                    Transparent, end-to-end verified funds deployed.
                  </p>
                </div>
              </motion.div>

              {/* Station 3: One Ledger with Real Mother & Child Impact Photo */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group relative rounded-2xl overflow-hidden shadow-md border border-white/80 h-[165px] xxs:h-[175px] xs:h-[190px] sm:h-[220px] md:h-[230px] lg:h-[250px] flex flex-col justify-between p-3.5 xs:p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Full Card Background Image */}
                <img
                  src="/assets/mother-child-plant.jpg"
                  alt="Mother and daughter holding plant seedling together"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#222720]/90 via-[#222720]/45 to-[#222720]/30 pointer-events-none" />

                {/* Top Pill Badges */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-2 xs:px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] xs:text-[11px] font-bold border border-white/30 shadow-xs">
                    03 / Verified
                  </span>
                  <span className="px-2 xs:px-2.5 py-0.5 rounded-full bg-[#e95126] text-white text-[9px] xs:text-[10px] font-bold uppercase tracking-wider shadow-xs">
                    100% Reconciled
                  </span>
                </div>

                {/* Bottom Overlay Metric */}
                <div className="relative z-10 space-y-0.5 text-white">
                  <div className="flex items-baseline gap-1.5 xs:gap-2 drop-shadow-sm">
                    <span className="text-2xl xs:text-3xl sm:text-3xl lg:text-4xl font-medium tracking-tight">One</span>
                    <span className="text-base xs:text-lg sm:text-lg lg:text-xl font-normal text-white/90">ledger</span>
                  </div>
                  <p className="text-[11px] xs:text-xs text-white/80 font-normal leading-snug">
                    Connecting every rupee back to verified human outcomes.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>

        </div>


        {/* ========================================================
            SECTION 1 — “THE COST OF DISCONNECTED SYSTEMS”
            (Visual-first, minimal text, clickable heading with deep-dive modal)
           ======================================================== */}
        <div id="disconnected-systems-section" className="relative pt-16 sm:pt-24 lg:pt-28 border-t border-[#d8d9cf] mt-16 sm:mt-24 lg:mt-32">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Column: Interactive Clickable Heading & Quick Stage Switcher */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e95126]">
                  <span className="w-2 h-2 rounded-full bg-[#e95126]" />
                  <span>01 / A Better Foundation</span>
                </div>
                
                {/* Clickable Heading with Hover Glow & Explainer Trigger */}
                <button
                  onClick={() => setIsExplainerOpen(true)}
                  className="text-left group cursor-pointer block focus:outline-none transition-transform active:scale-[0.99]"
                  title="Click to view detailed system explanation"
                >
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#222720] leading-[1.1] group-hover:text-[#e95126] transition-colors flex items-center gap-2">
                    <span>Good deserves better systems.</span>
                    <ArrowUpRight className="w-6 h-6 text-[#e95126] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0 inline-block" />
                  </h2>
                </button>

                {/* Single Short Dynamic Line */}
                <div className="pt-1">
                  <p className="text-base sm:text-lg text-[#66695f] font-normal leading-snug">
                    When systems sit apart, people have to join the dots.
                  </p>
                </div>
              </div>

              {/* Minimal 3-Stage Tab Switcher */}
              <div className="space-y-2 pt-1">
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
                      className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left transition-all duration-300 ${
                        isActive 
                          ? 'bg-white shadow-sm border border-[#e95126]/30 text-[#e95126]' 
                          : 'hover:bg-white/50 text-[#66695f]'
                      }`}
                    >
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 transition-all ${
                        isActive ? 'bg-[#e95126] text-white' : 'bg-[#e5e5dc] text-[#66695f]'
                      }`}>
                        {item.num}
                      </span>
                      <span className={`text-xs sm:text-sm font-medium transition-colors ${
                        isActive ? 'text-[#222720] font-bold' : 'text-[#222720]/80'
                      }`}>
                        {item.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenDemo}
                  className="group px-6 py-3 rounded-full bg-[#222720] text-white hover:bg-[#e95126] font-medium text-xs sm:text-sm transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2.5 shadow-md"
                >
                  <span>See how it works</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => setIsExplainerOpen(true)}
                  className="px-5 py-3 rounded-full bg-white/80 hover:bg-white text-[#222720] border border-[#d8d9cf] font-medium text-xs sm:text-sm transition-all duration-300 hover:border-[#e95126] flex items-center gap-1.5"
                >
                  <span>Learn more</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#e95126]" />
                </button>
              </div>

            </div>

            {/* Right Column: Visual Architecture (Matching Reference Mockup Exactly) */}
            <div className="lg:col-span-8 space-y-6 relative">
              
              {/* Top 3 Visual Problem Cards in 1 Connected Row */}
              <div className="grid grid-cols-3 gap-2 xs:gap-3 sm:gap-4 relative z-10">
                
                {/* Card 01: Scattered Donor Records */}
                <motion.div 
                  whileHover={{ y: -3 }}
                  onClick={() => setActiveProblem(0)}
                  onMouseEnter={() => setActiveProblem(0)}
                  className={`p-2.5 xs:p-3 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    activeProblem === 0 
                      ? 'bg-white shadow-xl border-[#e95126] ring-2 ring-[#e95126]/20 scale-[1.01]' 
                      : 'bg-white/80 border-white/90 shadow-sm hover:bg-white hover:border-[#e95126]/40'
                  }`}
                >
                  {/* Top Header: Badge + Title */}
                  <div className="flex items-start gap-1.5 xs:gap-2">
                    <span className="text-[10px] xs:text-[11px] font-bold text-[#e95126] bg-[#e95126]/10 px-1.5 xs:px-2 py-0.5 rounded-md shrink-0">
                      01
                    </span>
                    <h4 className="text-[11px] xs:text-xs sm:text-sm font-bold text-[#222720] leading-tight">
                      Scattered donor records
                    </h4>
                  </div>

                  {/* Middle Visual Area: 3 Floating App / Cloud Tiles */}
                  <div className="py-2 sm:py-3.5 flex items-center justify-center gap-1 xs:gap-1.5 sm:gap-2.5 flex-1">
                    {/* Excel Tile */}
                    <div className="w-7 h-7 xxs:w-8 xxs:h-8 xs:w-9 xs:h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white shadow-md border border-emerald-100 flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform">
                      <div className="w-5 h-5 xxs:w-6 xxs:h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-[9px] xs:text-[10px] sm:text-xs shadow-inner">
                        X
                      </div>
                    </div>

                    {/* Google Sheets Tile */}
                    <div className="w-7 h-7 xxs:w-8 xxs:h-8 xs:w-9 xs:h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white shadow-md border border-blue-100 flex items-center justify-center transform translate-y-[-2px] hover:translate-y-0 transition-transform">
                      <div className="w-5 h-5 xxs:w-6 xxs:h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-blue-500 flex items-center justify-center text-white text-[9px] xs:text-[10px] sm:text-xs shadow-inner">
                        <FileSpreadsheet className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-5 sm:h-5" />
                      </div>
                    </div>

                    {/* Cloud Storage Tile */}
                    <div className="w-7 h-7 xxs:w-8 xxs:h-8 xs:w-9 xs:h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white shadow-md border border-sky-100 flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform">
                      <div className="w-5 h-5 xxs:w-6 xxs:h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-sky-500 flex items-center justify-center text-white text-[9px] xs:text-[10px] sm:text-xs shadow-inner">
                        <Cloud className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-5 sm:h-5" />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Card 02: Compliance Assembled by Hand */}
                <motion.div 
                  whileHover={{ y: -3 }}
                  onClick={() => setActiveProblem(1)}
                  onMouseEnter={() => setActiveProblem(1)}
                  className={`p-2.5 xs:p-3 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    activeProblem === 1 
                      ? 'bg-white shadow-xl border-[#e95126] ring-2 ring-[#e95126]/20 scale-[1.01]' 
                      : 'bg-white/80 border-white/90 shadow-sm hover:bg-white hover:border-[#e95126]/40'
                  }`}
                >
                  {/* Top Header: Badge + Title */}
                  <div className="flex items-start gap-1.5 xs:gap-2">
                    <span className="text-[10px] xs:text-[11px] font-bold text-[#e95126] bg-[#e95126]/10 px-1.5 xs:px-2 py-0.5 rounded-md shrink-0">
                      02
                    </span>
                    <h4 className="text-[11px] xs:text-xs sm:text-sm font-bold text-[#222720] leading-tight">
                      Compliance assembled by hand
                    </h4>
                  </div>

                  {/* Middle Visual Area: Paper Stack with Sticky Notes Image */}
                  <div className="py-1 xs:py-1.5 sm:py-2 flex items-center justify-center flex-1 w-full">
                    <div className="w-full h-18 xxs:h-20 xs:h-22 sm:h-24 md:h-26 rounded-lg sm:rounded-xl overflow-hidden shadow-xs border border-[#d8d9cf]/60 bg-white">
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
                  className={`p-2.5 xs:p-3 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    activeProblem === 2 
                      ? 'bg-white shadow-xl border-[#e95126] ring-2 ring-[#e95126]/20 scale-[1.01]' 
                      : 'bg-white/80 border-white/90 shadow-sm hover:bg-white hover:border-[#e95126]/40'
                  }`}
                >
                  {/* Top Header: Badge + Title */}
                  <div className="flex items-start gap-1.5 xs:gap-2">
                    <span className="text-[10px] xs:text-[11px] font-bold text-[#e95126] bg-[#e95126]/10 px-1.5 xs:px-2 py-0.5 rounded-md shrink-0">
                      03
                    </span>
                    <h4 className="text-[11px] xs:text-xs sm:text-sm font-bold text-[#222720] leading-tight">
                      Outcomes detached from funding
                    </h4>
                  </div>

                  {/* Middle Visual Area: Field Coordinator & Child Photo */}
                  <div className="py-1 xs:py-1.5 sm:py-2 flex items-center justify-center flex-1 w-full">
                    <div className="w-full h-18 xxs:h-20 xs:h-22 sm:h-24 md:h-26 rounded-lg sm:rounded-xl overflow-hidden shadow-xs border border-[#d8d9cf]/60 bg-white">
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

              </div>

              {/* Dotted Stream Convergence Funnel SVG (Visible across ALL devices including phones) */}
              <div className="w-full h-8 sm:h-10 relative overflow-visible pointer-events-none -my-1 block">
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 600 50">
                  {/* Left Stream */}
                  <path d="M 100 0 C 100 25, 270 30, 290 50" fill="none" stroke="#e95126" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.75" />
                  {/* Center Stream */}
                  <path d="M 300 0 C 300 25, 300 30, 300 50" fill="none" stroke="#e95126" strokeWidth="2.5" strokeDasharray="4 4" strokeOpacity="0.9" />
                  {/* Right Stream */}
                  <path d="M 500 0 C 500 25, 330 30, 310 50" fill="none" stroke="#e95126" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.75" />
                  
                  {/* Top Origin Points from bottom center of the 3 cards */}
                  <circle cx="100" cy="2" r="3" fill="#e95126" />
                  <circle cx="300" cy="2" r="3.5" fill="#e95126" />
                  <circle cx="500" cy="2" r="3" fill="#e95126" />

                  {/* Destination Convergence Point */}
                  <circle cx="300" cy="48" r="4" fill="#e95126" />
                </svg>
              </div>

              {/* Bottom Unified Block: One Connected Record Card + Full-Bleed Mother & Daughter Photo */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch pt-2 sm:pt-0">
                
                {/* Connected Record Card (7 cols) */}
                <div className="md:col-span-7 bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-[#e95126]/30 shadow-xl space-y-3.5 relative flex flex-col justify-center min-h-[180px] sm:min-h-[210px]">
                  
                  {/* Top Pill Badge */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#e95126] text-white px-3.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-widest shadow-sm flex items-center gap-1.5 whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    <span>One Connected Record</span>
                  </div>

                  <p className="text-[11px] sm:text-xs font-semibold text-[#66695f] text-center pt-1">
                    Every rupee tied to a verified human outcome.
                  </p>

                  {/* 5 Connected Node Pipeline Icons */}
                  <div className="flex items-center justify-between pt-1 px-0.5 sm:px-1 relative overflow-x-auto">
                    {/* Connecting Bar */}
                    <div className="absolute left-3 right-3 top-3.5 h-[1.5px] bg-[#d8d9cf] -z-0" />

                    {[
                      { label: 'Donor', icon: <User className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> },
                      { label: 'Gift', icon: <Coins className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> },
                      { label: 'Verify', icon: <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> },
                      { label: 'Disburse', icon: <FileCheck className="w-3.5 h-3.5" /> },
                      { label: 'Outcome', icon: <BarChart3 className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> },
                    ].map((step, idx) => (
                      <div key={step.label} className="flex flex-col items-center gap-1 z-10 shrink-0">
                        <div className={`w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all ${
                          idx === 2 || idx === 4 
                            ? 'bg-[#e95126] text-white shadow-sm ring-2 ring-[#e95126]/30 scale-105' 
                            : 'bg-white text-[#222720] border border-[#d8d9cf]'
                        }`}>
                          {step.icon}
                        </div>
                        <span className="text-[8px] xs:text-[9px] sm:text-[10px] font-bold text-[#222720] whitespace-nowrap">{step.label}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Right Frame: Full-Bleed Mother & Daughter Image Card (5 cols) */}
                <div className="md:col-span-5 relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl min-h-[170px] sm:min-h-[210px] group border border-white/80 flex flex-col justify-end p-3 sm:p-3.5">
                  <img
                    src="/assets/mother-child-plant.jpg"
                    alt="Indian mother and daughter holding plant seedling"
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#222720]/80 via-[#222720]/20 to-transparent pointer-events-none" />

                  {/* Emotional Floating Badge Over Full-Bleed Image */}
                  <div className="relative z-10 bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl border border-white/50 shadow-lg flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#e95126]/15 text-[#e95126] flex items-center justify-center shrink-0">
                      <Heart className="w-3 h-3 fill-current animate-pulse" />
                    </span>
                    <span className="text-[11px] sm:text-xs font-bold text-[#222720] leading-tight">
                      More time for what really matters.
                    </span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>


        {/* ========================================================
            DEDICATED EXPLANATION MODAL (OPENS ON HEADING CLICK)
           ======================================================== */}
        <AnimatePresence>
          {isExplainerOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-3 xs:p-4 sm:p-6 md:p-10">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsExplainerOpen(false)}
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
                  onClick={() => setIsExplainerOpen(false)}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-[#222720] flex items-center justify-center shadow-md transition-transform active:scale-95 hover:scale-105 cursor-pointer z-20"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Header */}
                <div className="space-y-3 max-w-2xl">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e95126]">
                    <Sparkles className="w-4 h-4" />
                    <span>Deep Dive — The Connected Architecture</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#222720]">
                    Why Connected Systems Matter
                  </h3>
                  <p className="text-sm sm:text-base text-[#66695f] leading-relaxed">
                    Donor information, financial records and programme data belong together. When systems sit apart, teams spend weeks manually reconciling spreadsheets instead of driving impact. Ekhum connects them into one immutable, verified lifecycle.
                  </p>
                </div>

                {/* Visual Comparative Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  
                  {/* Before: Fragmented Operations */}
                  <div className="bg-white/80 rounded-2xl p-6 border border-red-200 shadow-sm space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-red-700 font-bold text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>The Disconnected Reality</span>
                      </div>
                      <span className="text-[10px] uppercase tracking-wider font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded">High Friction</span>
                    </div>

                    <ul className="space-y-3 text-xs sm:text-sm text-[#66695f]">
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

                  {/* After: The Ekhum Unified Flow */}
                  <div className="bg-white rounded-2xl p-6 border border-[#e95126]/40 shadow-md space-y-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#e95126]/10 rounded-full blur-xl pointer-events-none" />
                    
                    <div className="flex items-center justify-between relative z-10">
                      <div className="flex items-center gap-2 text-[#e95126] font-bold text-sm">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>The Ekhum Unified Flow</span>
                      </div>
                      <span className="text-[10px] uppercase tracking-wider font-bold text-[#e95126] bg-[#e95126]/10 px-2 py-0.5 rounded">Verified Ledger</span>
                    </div>

                    <ul className="space-y-3 text-xs sm:text-sm text-[#222720] relative z-10">
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

                {/* Visual Impact Metric Badges in Modal */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="bg-white/90 p-4 rounded-xl border border-[#d8d9cf] flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#e95126]/10 text-[#e95126] flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-base font-bold text-[#222720]">70% Time Saved</div>
                      <div className="text-[11px] text-[#66695f]">in annual compliance & audit prep</div>
                    </div>
                  </div>

                  <div className="bg-white/90 p-4 rounded-xl border border-[#d8d9cf] flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-base font-bold text-[#222720]">100% Audit-Proof</div>
                      <div className="text-[11px] text-[#66695f]">cryptographically verified entries</div>
                    </div>
                  </div>

                  <div className="bg-white/90 p-4 rounded-xl border border-[#d8d9cf] flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-base font-bold text-[#222720]">Instant Reporting</div>
                      <div className="text-[11px] text-[#66695f]">real-time transparency for donors</div>
                    </div>
                  </div>
                </div>

                {/* Modal Footer CTAs */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#d8d9cf]">
                  <div className="font-serif italic text-sm text-[#8c523f]">
                    Empowering teams to do more good.
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsExplainerOpen(false)}
                      className="px-5 py-2.5 rounded-full border border-[#d8d9cf] text-[#222720] text-xs font-semibold hover:bg-white transition-colors"
                    >
                      Close
                    </button>
                    <button
                      onClick={() => {
                        setIsExplainerOpen(false);
                        onOpenDemo();
                      }}
                      className="px-6 py-2.5 rounded-full bg-[#e95126] text-white hover:bg-[#d4431a] text-xs font-bold transition-all shadow-md flex items-center gap-2"
                    >
                      <span>Book a live demo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
