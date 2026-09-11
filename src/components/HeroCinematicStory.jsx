import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, CheckCircle2, Sparkles, Heart } from 'lucide-react';

export default function HeroCinematicStory({ stageProgress = 0, activeStage = 0 }) {
  const [captionVisible, setCaptionVisible] = useState(false);
  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 });

  const moments = [
    {
      id: 'promise',
      name: 'Promise',
      image: '/assets/wellmed-care-hero.jpg',
      caption: 'Every contribution begins with a promise.',
      recordTag: 'Contribution record • Initiated',
    },
    {
      id: 'support',
      name: 'Support',
      image: '/assets/india-community.png',
      caption: 'Support reaches the people who need it.',
      recordTag: 'Support allocated • In transit',
    },
    {
      id: 'care',
      name: 'Care',
      image: '/assets/india-team.png',
      caption: 'Care becomes easier to coordinate.',
      recordTag: 'Coordinated care • Active',
    },
    {
      id: 'outcome',
      name: 'Outcome',
      image: '/assets/india-learning.png',
      caption: 'Progress becomes visible.',
      recordTag: 'Outcome measured • Verified',
    },
    {
      id: 'impact',
      name: 'Impact',
      image: '/assets/wellmed-care-hero.jpg',
      caption: 'Impact stays connected.',
      recordTag: 'Outcome recorded • Completed',
    },
  ];

  // Mouse Parallax Tilt Effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      setMouseTilt({
        x: (e.clientX / innerWidth - 0.5) * 10,
        y: (e.clientY / innerHeight - 0.5) * 10,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Delay caption reveal until image transition settles (Requirement #5)
  useEffect(() => {
    setCaptionVisible(false);
    const timer = setTimeout(() => {
      setCaptionVisible(true);
    }, 280);
    return () => clearTimeout(timer);
  }, [activeStage]);

  const current = moments[activeStage];

  return (
    <div className="relative w-full h-[480px] sm:h-[540px] lg:h-[600px] flex items-center justify-end">
      
      {/* LAYER 1: Background Ambient Layer (Enlarged Blurred Image + Ambient Glow) */}
      <div 
        className="absolute inset-0 overflow-hidden rounded-[40px] opacity-25 blur-2xl pointer-events-none transition-all duration-700"
        style={{
          transform: `translate3d(${mouseTilt.x * -0.4}px, ${mouseTilt.y * -0.4}px, 0) scale(1.1)`,
        }}
      >
        <img
          src={current.image}
          alt="Ambient layer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#e95126]/20 via-[#dce4d3]/30 to-transparent" />
      </div>

      {/* LAYER 2: Main Camera Story Viewport Container */}
      <div 
        className="relative z-10 w-full lg:w-[105%] h-full rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl border border-[#d8d9cf]/80 bg-[#222720] flex"
        style={{
          transform: `translate3d(${mouseTilt.x * 0.5}px, ${mouseTilt.y * 0.5}px, 0)`,
        }}
      >
        {/* Elevator Camera Chamber */}
        <div className="relative flex-1 h-full overflow-hidden">
          
          {moments.map((m, idx) => {
            const diff = idx - stageProgress;
            const translateY = diff * 100; // Vertical rising offset
            const opacity = Math.max(0, 1 - Math.abs(diff) * 1.1);
            
            // Slow zoom camera effect (1.0 -> 1.06)
            const zoomScale = 1 + (1 - Math.abs(diff)) * 0.06;
            
            // Before-and-after desaturation for past stages
            const isPast = diff < -0.15;
            const filter = isPast ? 'grayscale(35%) contrast(95%)' : 'none';

            return (
              <div
                key={m.id}
                className="absolute inset-0 w-full h-full transition-transform duration-500 ease-out pointer-events-none"
                style={{
                  transform: `translate3d(0, ${translateY}%, 0) scale(${zoomScale})`,
                  opacity,
                  filter,
                  zIndex: 10 - Math.abs(Math.round(diff)),
                }}
              >
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full object-cover object-[center_35%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#222720]/80 via-transparent to-black/15" />
              </div>
            );
          })}

          {/* LAYER 3: Physical Ribbon of Light ("Impact Thread") */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            <svg className="w-full h-full">
              <path
                d="M -20 220 C 60 220, 40 460, 240 480 C 360 490, 420 440, 460 380"
                fill="none"
                stroke="rgba(233, 81, 38, 0.3)"
                strokeWidth="3"
                strokeDasharray="6 6"
              />
              <motion.path
                d="M -20 220 C 60 220, 40 460, 240 480 C 360 490, 420 440, 460 380"
                fill="none"
                stroke="#e95126"
                strokeWidth="3"
                style={{
                  pathLength: stageProgress / 4,
                  filter: 'drop-shadow(0px 0px 8px #e95126)',
                }}
              />
            </svg>
          </div>

          {/* 3D Restrained Floating Contribution Record Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              transform: `translate3d(${mouseTilt.x * -0.3}px, ${mouseTilt.y * -0.3}px, 0)`,
            }}
            className="absolute bottom-16 left-6 z-30 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#d8d9cf] shadow-xl flex items-center gap-3 text-xs text-[#222720] pointer-events-none"
          >
            <div className="p-2 rounded-xl bg-[#e95126]/10 text-[#e95126]">
              {activeStage === 4 ? (
                <CheckCircle2 className="w-4 h-4 text-[#4d5946]" />
              ) : (
                <FileText className="w-4 h-4" />
              )}
            </div>
            <div>
              <p className="font-bold text-[#222720]">{current.recordTag}</p>
              <p className="text-[10px] text-[#66695f]">Attributed • Time-stamped</p>
            </div>
          </motion.div>

          {/* Staggered Delayed Caption Pill (Requirement #4 & #5: Settles AFTER image) */}
          <div className="absolute bottom-6 left-6 right-16 z-30 pointer-events-none">
            <AnimatePresence mode="wait">
              {captionVisible && (
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#f5f3ed]/95 backdrop-blur-md px-4 py-2 rounded-xl border border-[#d8d9cf] shadow-md text-xs font-semibold text-[#222720] inline-flex items-center gap-2 max-w-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-[#e95126] animate-pulse" />
                  <span>{current.caption}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* LAYER 3: Micro Progress Rail (Elevator Rail on Right Edge) */}
        <div className="w-12 bg-black/40 backdrop-blur-md border-l border-white/10 flex flex-col items-center justify-between py-8 z-30 relative pointer-events-none">
          <div className="absolute top-10 bottom-10 w-[2px] bg-white/15" />
          
          <div 
            className="absolute w-3 h-3 rounded-full bg-[#e95126] shadow-lg shadow-[#e95126] transition-all duration-300 -translate-x-[0.5px]"
            style={{ top: `calc(40px + ${(stageProgress / 4) * 82}%)` }}
          />

          {moments.map((moment, idx) => {
            const isActive = activeStage === idx;
            const isPassed = activeStage > idx;

            return (
              <div key={moment.id} className="relative z-10 flex flex-col items-center">
                <div 
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'bg-[#e95126] scale-125 shadow-md shadow-[#e95126]' 
                      : isPassed 
                      ? 'bg-[#dce4d3]' 
                      : 'bg-white/30'
                  }`} 
                />
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
}
