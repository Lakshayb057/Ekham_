import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Check, Database, Sparkles } from 'lucide-react';

export default function HeroVisual({ scrollProgress = 0 }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [impactRecorded, setImpactRecorded] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (e.clientX / innerWidth - 0.5) * 12,
        y: (e.clientY / innerHeight - 0.5) * 12,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Trigger impact recorded notification after signal completes initial cycle
    const timer = setTimeout(() => {
      setImpactRecorded(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const stages = [
    { label: 'Collect', number: '01', x: '5%', y: '85%' },
    { label: 'Verify', number: '02', x: '30%', y: '88%' },
    { label: 'Disburse', number: '03', x: '60%', y: '88%' },
    { label: 'Prove', number: '04', x: '88%', y: '85%' },
  ];

  return (
    <div className="relative w-full h-[460px] sm:h-[520px] lg:h-[580px] flex items-center justify-end">
      
      {/* Background Soft Glow & Blur Aura */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#e95126]/12 via-[#dce4d3]/25 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Enlarged Softly Blurred Backdrop Image Layer */}
      <div 
        className="absolute inset-x-0 -inset-y-4 rounded-[40px] overflow-hidden opacity-25 blur-xl pointer-events-none transform scale-105"
        style={{
          transform: `translate3d(${mousePos.x * -0.4}px, ${mousePos.y * -0.4}px, 0)`,
        }}
      >
        <img
          src="/assets/wellmed-care-hero.jpg"
          alt="Ambient blurred image background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Photographic Story Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          transform: `translate3d(${mousePos.x * 0.6}px, ${mousePos.y * 0.6}px, 0) scale(${1 + scrollProgress * 0.04})`,
        }}
        className="relative z-10 w-full lg:w-[105%] h-full rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl border border-[#d8d9cf]/80 group bg-[#f5f3ed]"
      >
        {/* Main Photograph: Clean, Unobstructed View of People */}
        <img
          src="/assets/wellmed-care-hero.jpg"
          alt="Indian healthcare professional offering compassionate care to an elder patient"
          className="w-full h-full object-cover object-[center_35%] transition-transform duration-1000 group-hover:scale-102"
        />

        {/* Soft Vignette Mask merging with page background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#222720]/75 via-transparent to-black/10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f5f3ed]/30 via-transparent to-transparent pointer-events-none" />

        {/* Outer Perimeter Curved SVG Path & Flowing Signal Light */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <svg className="w-full h-full overflow-visible">
            <path
              d="M -30 250 C 40 250, 100 480, 320 480 C 420 480, 480 430, 460 360"
              fill="none"
              stroke="rgba(255, 255, 255, 0.25)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            {/* Animated Contribution Light Pulse */}
            <motion.circle
              r="6"
              fill="#e95126"
              filter="drop-shadow(0px 0px 8px #e95126)"
              animate={{
                offsetDistance: ['0%', '100%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                offsetPath: `path('M -30 250 C 40 250, 100 480, 320 480 C 420 480, 480 430, 460 360')`,
              }}
            />
          </svg>

          {/* Minimal Outer Stage Micro-Markers */}
          {stages.map((st) => (
            <div
              key={st.label}
              style={{ left: st.x, top: st.y }}
              className="absolute z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[10px] font-semibold text-white/90 shadow-sm transform -translate-x-1/2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#e95126] animate-pulse" />
              <span>{st.label}</span>
            </div>
          ))}

          {/* Impact Recorded Confirmation Popup */}
          <AnimatePresence>
            {impactRecorded && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute top-[58%] right-[14%] z-30 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#d8d9cf] shadow-lg flex items-center gap-2 text-xs font-bold text-[#222720]"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#e95126]" />
                <span>Impact recorded.</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Refined Impact Annotation 1: Lower Left Edge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="absolute bottom-6 left-6 z-30 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-[#d8d9cf]/80 shadow-lg flex items-center gap-2.5 text-xs text-[#222720]"
        >
          <div className="w-5 h-5 rounded-full bg-[#dce4d3] flex items-center justify-center text-[#222720]">
            <Check className="w-3 h-3 stroke-[3]" />
          </div>
          <span className="font-semibold">Contribution verified</span>
        </motion.div>

        {/* Refined Impact Annotation 2: Lower Right Edge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="absolute bottom-6 right-6 z-30 bg-[#222720]/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20 shadow-lg flex items-center gap-2.5 text-xs text-white"
        >
          <Database className="w-3.5 h-3.5 text-[#dce4d3]" />
          <span className="font-medium">Care connected to one record</span>
        </motion.div>

      </motion.div>

      {/* Understated Bottom Statement Line */}
      <div className="absolute -bottom-8 right-4 z-20 hidden sm:flex items-center gap-3 text-xs text-[#66695f]">
        <span className="w-8 h-[1px] bg-[#d8d9cf]" />
        <span className="font-medium">From contribution to recorded outcome.</span>
      </div>

    </div>
  );
}
