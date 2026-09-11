import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HeroStoryVisual({ currentStage = 0 }) {
  const storyMoments = [
    {
      id: 'promise',
      stageName: 'Promise',
      image: '/assets/wellmed-care-hero.jpg',
      alt: 'Compassionate care in India clinic',
      caption: 'Every contribution begins with a promise.',
    },
    {
      id: 'support',
      stageName: 'Support',
      image: '/assets/india-community.png',
      alt: 'Volunteers distributing community support supplies',
      caption: 'The right support reaches the right people.',
    },
    {
      id: 'care',
      stageName: 'Care',
      image: '/assets/india-team.png',
      alt: 'Nonprofit team coordinating care and programme data',
      caption: 'Technology turns support into coordinated care.',
    },
    {
      id: 'outcome',
      stageName: 'Outcome',
      image: '/assets/india-learning.png',
      alt: 'Children demonstrating verified learning outcomes',
      caption: 'Every outcome deserves to be seen.',
    },
    {
      id: 'impact',
      stageName: 'Impact',
      image: '/assets/wellmed-care-hero.jpg',
      alt: 'Final connected record of care and recovery',
      caption: 'One connected record. A more meaningful impact.',
    },
  ];

  const current = storyMoments[Math.min(currentStage, 4)];

  return (
    <div className="relative w-full h-[480px] sm:h-[540px] lg:h-[600px] flex items-center justify-end">
      
      {/* Background Soft Glow Aura */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#e95126]/12 via-[#dce4d3]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Primary Sticky Image Story Container */}
      <div className="relative z-10 w-full lg:w-[105%] h-full rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl border border-[#d8d9cf]/80 bg-[#f5f3ed]">
        
        {/* Image Transition Layer */}
        <AnimatePresence mode="wait">
          <motion.img
            key={current.id}
            src={current.image}
            alt={current.alt}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full object-cover object-[center_35%]"
          />
        </AnimatePresence>

        {/* Soft Vignette Mask */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#222720]/80 via-transparent to-black/15 pointer-events-none" />

        {/* Restrained Fiber Line & Signal Dot */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <svg className="w-full h-full">
            <path
              d="M 30 500 C 120 500, 200 540, 420 540"
              fill="none"
              stroke="rgba(255, 255, 255, 0.25)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            {/* Active Stage Signal Light Pulse */}
            <motion.circle
              r="5"
              fill="#e95126"
              filter="drop-shadow(0px 0px 6px #e95126)"
              animate={{
                cx: `${20 + currentStage * 18}%`,
                cy: '90%',
              }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            />
          </svg>
        </div>

        {/* Subtle Progress Indicator (5 Micro-Stages: Promise, Support, Care, Outcome, Impact) */}
        <div className="absolute top-6 left-6 right-6 z-30 flex items-center justify-between bg-black/40 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 shadow-lg">
          {storyMoments.map((moment, idx) => {
            const isActive = currentStage === idx;
            const isPassed = currentStage > idx;

            return (
              <div key={moment.id} className="flex items-center gap-2">
                <div 
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'bg-[#e95126] scale-125 shadow-md shadow-[#e95126]' 
                      : isPassed 
                      ? 'bg-[#dce4d3]' 
                      : 'bg-white/30'
                  }`} 
                />
                <span className={`text-[10px] sm:text-xs font-semibold tracking-wider transition-colors ${
                  isActive ? 'text-white font-bold' : 'text-white/60'
                }`}>
                  {moment.stageName}
                </span>
              </div>
            );
          })}
        </div>

        {/* Cinematic Caption Pill (Bottom Left, Outside Faces) */}
        <div className="absolute bottom-6 left-6 right-6 z-30 flex items-center justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.caption}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#d8d9cf] shadow-xl text-xs font-semibold text-[#222720] max-w-sm"
            >
              <span className="text-[#e95126] font-bold mr-2">•</span>
              <span>{current.caption}</span>
            </motion.div>
          </AnimatePresence>

          <span className="hidden sm:inline-block text-[11px] font-medium text-white/80 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
            0{currentStage + 1} / 05
          </span>
        </div>

      </div>

    </div>
  );
}
