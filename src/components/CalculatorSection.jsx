import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { IndianRupee, Percent, ShieldCheck, Sparkles, Zap } from 'lucide-react';

export default function CalculatorSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // State for volume and commission percentage
  const [volume, setVolume] = useState(10000000); // starts at 10L for entrance animation
  const [commission, setCommission] = useState(1.0); // starts at 1.0% for entrance animation
  const [barProgress, setBarProgress] = useState(0); // 0% to animated value
  const [hasAnimated, setHasAnimated] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);

  // Formatter for Indian Rupees
  function formatMoney(value) {
    if (!value || isNaN(value)) return '₹0';
    if (value >= 10000000) {
      const cr = (value / 10000000).toFixed(2);
      return `₹${parseFloat(cr)} Crore`;
    }
    if (value >= 100000) {
      const lakh = (value / 100000).toFixed(2);
      return `₹${parseFloat(lakh)} Lakh`;
    }
    return `₹${Math.round(value).toLocaleString('en-IN')}`;
  }

  function formatFullRupees(value) {
    if (!value || isNaN(value)) return '₹0';
    return `₹${Math.round(value).toLocaleString('en-IN')}`;
  }

  // Automatic live animation when the user scrolls into Section 6
  useEffect(() => {
    if (isInView && !hasAnimated && !userInteracted) {
      setHasAnimated(true);

      // 1. Animate Funds Raised from 10 Lakh up to 5 Crore
      const volumeAnimation = animate(10000000, 50000000, {
        duration: 1.8,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => {
          if (!userInteracted) setVolume(Math.round(latest));
        },
      });

      // 2. Animate Commission from 1.0% up to 4.0%
      const commissionAnimation = animate(1.0, 4.0, {
        duration: 1.8,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => {
          if (!userInteracted) setCommission(parseFloat(latest.toFixed(1)));
        },
      });

      // 3. Animate the comparison bar moving automatically from 0% to 50%
      const barAnimation = animate(0, 50, {
        duration: 1.8,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => {
          if (!userInteracted) setBarProgress(latest);
        },
      });

      return () => {
        volumeAnimation.stop();
        commissionAnimation.stop();
        barAnimation.stop();
      };
    }
  }, [isInView, hasAnimated, userInteracted]);

  const handleVolumeChange = (newVal) => {
    setUserInteracted(true);
    const val = Number(newVal);
    setVolume(val);
    setBarProgress((commission / 8) * 100);
  };

  const handleCommissionChange = (newVal) => {
    setUserInteracted(true);
    const comm = Number(newVal);
    setCommission(comm);
    setBarProgress((comm / 8) * 100);
  };

  const annualSavings = (volume * commission) / 100;
  const currentBarWidth = userInteracted ? (commission / 8) * 100 : barProgress;

  // Preset volume chips
  const volumePresets = [
    { label: '₹50 Lakh', value: 5000000 },
    { label: '₹2 Crore', value: 20000000 },
    { label: '₹5 Crore', value: 50000000 },
    { label: '₹10 Crore', value: 100000000 },
    { label: '₹25 Crore', value: 250000000 },
  ];

  return (
    <section 
      id="calculator" 
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-20 bg-[#f5f3ed] text-[#222720] relative overflow-hidden select-none flex flex-col justify-center"
    >
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[350px] bg-[#dce4d3]/35 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#e95126]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1140px] mx-auto px-6 md:px-10 w-full space-y-10 sm:space-y-12 lg:space-y-14 relative z-10">
        
        {/* Adjusted Single-Line Clean Heading */}
        <div className="border-b border-[#d8d9cf]/80 pb-5 sm:pb-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e95126]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e95126] animate-pulse" />
              <span>06 / SAVINGS CALCULATOR</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#222720]">
              Good deserves <span className="text-[#e95126]">more.</span>
            </h2>
          </div>
        </div>

        {/* Snug, Breathable & Animated Dashboard Card */}
        <motion.div 
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-[28px] border border-[#d8d9cf] shadow-[0_20px_50px_rgba(34,39,32,0.07)] hover:shadow-[0_24px_60px_rgba(34,39,32,0.1)] transition-all duration-300 overflow-hidden grid grid-cols-1 lg:grid-cols-12"
        >
          
            {/* Left Column: Interactive Sliders & Quick Controls */}
          <div className="lg:col-span-6 p-4 xs:p-6 sm:p-8 lg:p-9 space-y-5 sm:space-y-7 border-b lg:border-b-0 lg:border-r border-[#d8d9cf]/80 flex flex-col justify-center">
            
            {/* Slider 1: Annual Funds Raised */}
            <div className="space-y-3">
              <div className="flex flex-wrap justify-between items-baseline gap-2">
                <label htmlFor="volume-slider" className="text-xs xs:text-sm sm:text-base font-bold text-[#222720] flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-[#f5f3ed] border border-[#d8d9cf] flex items-center justify-center shrink-0">
                    <IndianRupee className="w-3.5 h-3.5 text-[#e95126]" />
                  </div>
                  <span>Annual funds raised</span>
                </label>

                {/* Animated Number Badge */}
                <motion.span 
                  key={volume}
                  initial={{ scale: 0.92, opacity: 0.8 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 28 }}
                  className="text-lg xs:text-xl sm:text-2xl font-extrabold text-[#e95126] font-mono tracking-tight ml-auto"
                >
                  {formatMoney(volume)}
                </motion.span>
              </div>

              <div className="relative pt-1.5">
                <input
                  id="volume-slider"
                  type="range"
                  min="1000000"
                  max="250000000"
                  step="1000000"
                  value={volume}
                  onChange={(e) => handleVolumeChange(e.target.value)}
                  className="w-full h-2.5 bg-[#e7e5dc] rounded-full appearance-none cursor-pointer accent-[#e95126] touch-pan-x"
                />
                <div className="flex justify-between text-[10px] xs:text-[11px] font-semibold text-[#8c9285] mt-1.5">
                  <span>₹10 Lakh</span>
                  <span>₹5 Crore</span>
                  <span>₹25 Crore</span>
                </div>
              </div>

              {/* Quick Volume Preset Chips */}
              <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                {volumePresets.map((preset) => (
                  <button
                    key={preset.value}
                    onClick={() => handleVolumeChange(preset.value)}
                    className={`px-2 xs:px-2.5 py-1 rounded-lg text-[11px] xs:text-xs font-semibold transition-all cursor-pointer ${
                      volume === preset.value
                        ? 'bg-[#222720] text-white shadow-xs scale-105'
                        : 'bg-[#f5f3ed] hover:bg-[#e7e5dc] text-[#555a4e] border border-[#d8d9cf]/70 active:scale-95'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider 2: Current Platform Fee */}
            <div className="space-y-3 pt-4 border-t border-[#f0eee6]">
              <div className="flex flex-wrap justify-between items-baseline gap-2">
                <label htmlFor="commission-slider" className="text-xs xs:text-sm sm:text-base font-bold text-[#222720] flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-[#f5f3ed] border border-[#d8d9cf] flex items-center justify-center shrink-0">
                    <Percent className="w-3.5 h-3.5 text-[#e95126]" />
                  </div>
                  <span>Platform fee to compare</span>
                </label>

                {/* Animated Percentage Badge */}
                <motion.span 
                  key={commission}
                  initial={{ scale: 0.92, opacity: 0.8 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 28 }}
                  className="text-lg xs:text-xl sm:text-2xl font-extrabold text-[#e95126] font-mono tracking-tight ml-auto"
                >
                  {commission.toFixed(1)}%
                </motion.span>
              </div>

              <div className="relative pt-1.5">
                <input
                  id="commission-slider"
                  type="range"
                  min="1"
                  max="8"
                  step="0.5"
                  value={commission}
                  onChange={(e) => handleCommissionChange(e.target.value)}
                  className="w-full h-2.5 bg-[#e7e5dc] rounded-full appearance-none cursor-pointer accent-[#e95126] touch-pan-x"
                />
                <div className="flex justify-between text-[10px] xs:text-[11px] font-semibold text-[#8c9285] mt-1.5">
                  <span>1.0% (Low)</span>
                  <span>4.0% (Average)</span>
                  <span>8.0% (Agency)</span>
                </div>
              </div>

              {/* Commission Benchmark Presets */}
              <div className="grid grid-cols-3 gap-1.5 xs:gap-2 pt-0.5">
                {[
                  { label: 'Basic 2.5%', val: 2.5 },
                  { label: 'Standard 4.0%', val: 4.0 },
                  { label: 'Agency 6.0%', val: 6.0 },
                ].map((bench) => (
                  <button
                    key={bench.val}
                    onClick={() => handleCommissionChange(bench.val)}
                    className={`py-1.5 px-1 xs:px-2.5 rounded-lg text-[10px] xs:text-xs font-semibold text-center transition-all cursor-pointer truncate ${
                      commission === bench.val
                        ? 'bg-[#e95126]/10 border border-[#e95126] text-[#e95126] font-bold shadow-xs'
                        : 'bg-[#f5f3ed] hover:bg-[#e7e5dc] border border-[#d8d9cf]/70 text-[#66695f] active:scale-95'
                    }`}
                  >
                    {bench.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Animated Live Savings Number & Comparison Bars */}
          <div className="lg:col-span-6 p-4 xs:p-6 sm:p-8 lg:p-9 bg-[#eef2e6] flex flex-col justify-between space-y-6">
            
            {/* Live Counter Hero Block */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 text-[11px] xs:text-xs font-bold uppercase tracking-wider text-[#4d5946]">
                  <span className="w-2 h-2 rounded-full bg-[#358a4d] animate-ping" />
                  <span>Live Annual Savings</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#222720] text-[#dce4d3] text-[10px] xs:text-[11px] font-bold shadow-2xs">
                  100% Retained
                </span>
              </div>

              {/* Kinetic Animated Real-Time Live Counter */}
              <motion.div 
                key={annualSavings}
                initial={{ scale: 0.94, opacity: 0.85, y: 4 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 450, damping: 25 }}
                className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#222720] font-mono break-words"
              >
                {formatMoney(annualSavings)}
              </motion.div>
              
              <p className="text-xs sm:text-sm text-[#555a4e] font-medium leading-relaxed">
                Exact direct savings: <strong className="text-[#222720] font-bold">{formatFullRupees(annualSavings)}</strong> kept for your mission each year.
              </p>
            </div>

            {/* Comparison Bars with Live Animated Track */}
            <div className="space-y-4 pt-4 border-t border-[#4d5946]/20">
              
              {/* Traditional Platform Fee Bar */}
              <div className="space-y-1.5">
                <div className="flex flex-wrap justify-between text-xs font-bold text-[#222720] gap-1">
                  <span>Traditional Platform ({commission.toFixed(1)}% fee)</span>
                  <span className="text-[#e95126] font-mono ml-auto">-{formatMoney(annualSavings)}</span>
                </div>
                <div className="h-5 sm:h-5.5 w-full bg-white/90 rounded-xl overflow-hidden p-0.5 border border-[#c9cebf] shadow-inner">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-[#e95126] to-[#ff6f47] rounded-lg shadow-xs"
                    style={{ width: `${Math.min(100, Math.max(10, currentBarWidth))}%` }}
                    transition={{ duration: 0.15, ease: 'linear' }}
                  />
                </div>
              </div>

              {/* Ekhum 0% Platform Fee Bar */}
              <div className="space-y-1.5">
                <div className="flex flex-wrap justify-between text-xs font-bold text-[#222720] gap-1">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#222720] shrink-0" />
                    <span>Ekhum Platform Fee</span>
                    <span className="px-1.5 py-0.2 rounded-md bg-[#222720] text-white text-[9px] font-bold">
                      0% FEE
                    </span>
                  </span>
                  <span className="font-mono text-[#222720] font-bold ml-auto">₹0 Deducted</span>
                </div>
                <div className="h-5 sm:h-5.5 w-full bg-white/90 rounded-xl overflow-hidden p-0.5 border border-[#c9cebf] shadow-inner flex items-center">
                  <div className="h-full w-2.5 bg-[#222720] rounded-lg" />
                </div>
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
