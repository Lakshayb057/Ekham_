import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function HeroImpactElevator({ stageProgress = 0, activeStage = 0 }) {
  const moments = [
    {
      id: 'promise',
      name: 'Promise',
      image: '/assets/wellmed-care-hero.jpg',
      caption: 'Every contribution begins with a promise.',
      dynamicLine: 'A contribution begins with intent.',
    },
    {
      id: 'support',
      name: 'Support',
      image: '/assets/india-community.png',
      caption: 'Support reaches the people who need it.',
      dynamicLine: 'Intent becomes support.',
    },
    {
      id: 'care',
      name: 'Care',
      image: '/assets/india-team.png',
      caption: 'Better systems help care move forward.',
      dynamicLine: 'Support becomes action.',
    },
    {
      id: 'outcome',
      name: 'Outcome',
      image: '/assets/india-learning.png',
      caption: 'Impact becomes visible through real outcomes.',
      dynamicLine: 'Action becomes measurable.',
    },
    {
      id: 'impact',
      name: 'Impact',
      image: '/assets/wellmed-care-hero.jpg',
      caption: 'Every contribution has a human destination.',
      dynamicLine: 'Impact stays connected.',
    },
  ];

  const current = moments[activeStage];

  return (
    <div className="relative w-full h-[480px] sm:h-[540px] lg:h-[600px] flex items-center justify-end">
      
      {/* Ambient Background Glow Aura */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#e95126]/15 via-[#dce4d3]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Main Impact Elevator Viewport Container */}
      <div className="relative z-10 w-full lg:w-[105%] h-full rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl border border-[#d8d9cf]/80 bg-[#222720] flex">
        
        {/* Images Stack Window (Elevator Chamber) */}
        <div className="relative flex-1 h-full overflow-hidden">
          
          {moments.map((m, idx) => {
            // Distance from exact floating stage progress (0.0 to 4.0)
            const diff = idx - stageProgress;
            
            // Vertical offset percentage for rising transition
            const translateY = diff * 100; // -100% (above), 0% (centered), 100% (below)
            
            // Opacity: 1 at center, fading out as it moves away
            const opacity = Math.max(0, 1 - Math.abs(diff) * 1.1);
            
            // Scale: 1 at center, 0.94 as it rises from below
            const scale = 0.94 + Math.max(0, (1 - Math.abs(diff)) * 0.06);

            // Filter: Slight desaturation when moving above center ("Before and after" progression)
            const isPast = diff < -0.2;
            const filter = isPast ? 'grayscale(40%) contrast(90%)' : 'none';

            return (
              <div
                key={m.id}
                className="absolute inset-0 w-full h-full transition-transform duration-300 ease-out pointer-events-none"
                style={{
                  transform: `translate3d(0, ${translateY}%, 0) scale(${scale})`,
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
                
                {/* Soft Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#222720]/80 via-transparent to-black/20" />
              </div>
            );
          })}

          {/* Fine Orange Impact Thread (Vertical Laser Line traversing the image) */}
          <div className="absolute left-6 top-8 bottom-8 w-[2px] bg-white/20 z-20 pointer-events-none">
            <div 
              className="w-full bg-[#e95126] transition-all duration-300 rounded-full shadow-lg shadow-[#e95126]"
              style={{ height: `${(stageProgress / 4) * 100}%` }}
            />
          </div>

          {/* Caption Pill (Bottom Left, Outside Faces) */}
          <div className="absolute bottom-6 left-12 right-16 z-30 flex items-center justify-between pointer-events-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#d8d9cf] shadow-xl text-xs font-semibold text-[#222720] max-w-sm flex items-center gap-2.5"
              >
                <span className="w-2 h-2 rounded-full bg-[#e95126] animate-pulse" />
                <span>{current.caption}</span>
              </motion.div>
            </AnimatePresence>

            {/* Stage Complete Signal Badge */}
            {activeStage === 4 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#dce4d3] text-[#222720] text-xs font-bold shadow-md"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#4d5946]" />
                <span>Verified</span>
              </motion.div>
            )}
          </div>

        </div>

        {/* Thin Vertical Progress Line (Elevator Rail on Right Edge) */}
        <div className="w-12 bg-black/40 backdrop-blur-md border-l border-white/10 flex flex-col items-center justify-between py-8 z-30 relative">
          
          {/* Vertical Rail Path */}
          <div className="absolute top-10 bottom-10 w-[2px] bg-white/15" />
          
          {/* Animated Orange Indicator Light */}
          <div 
            className="absolute w-3 h-3 rounded-full bg-[#e95126] shadow-lg shadow-[#e95126] transition-all duration-300 -translate-x-[0.5px]"
            style={{ top: `calc(40px + ${(stageProgress / 4) * 82}%)` }}
          />

          {/* 5 Micro Stage Dots */}
          {moments.map((moment, idx) => {
            const isActive = activeStage === idx;
            const isPassed = activeStage > idx;

            return (
              <div 
                key={moment.id} 
                className="relative z-10 flex flex-col items-center group cursor-pointer"
              >
                <div 
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'bg-[#e95126] scale-125 shadow-md shadow-[#e95126]' 
                      : isPassed 
                      ? 'bg-[#dce4d3]' 
                      : 'bg-white/30'
                  }`} 
                />
                
                {/* Tooltip Label on Hover */}
                <span className="absolute right-8 top-1/2 -translate-y-1/2 bg-[#222720] text-white text-[10px] font-bold px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {moment.name}
                </span>
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
}
