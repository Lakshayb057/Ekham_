import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Coins, ShieldCheck, ArrowRight, BarChart3 } from 'lucide-react';

export default function HeroRisingPath({ stageProgress = 0, activeStage = 0, onSelectStage, isLoaded = false }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (e.clientX / innerWidth - 0.5) * 8,
        y: (e.clientY / innerHeight - 0.5) * 8,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const cards = [
    {
      id: 'promise',
      number: '01',
      stageName: 'PROMISE',
      title: 'Every contribution begins with a promise.',
      image: '/assets/wellmed-care-hero.jpg',
      badge: 'Real people. Real possibilities.',
      italicNote: 'A healthier tomorrow',
      statement: 'A contribution begins with intent.',
    },
    {
      id: 'support',
      number: '02',
      stageName: 'SUPPORT',
      title: 'The right support reaches the right people.',
      image: '/assets/india-community.png',
      badge: 'Dignified community action',
      italicNote: 'Coordinated care',
      statement: 'Intent becomes trusted support.',
    },
    {
      id: 'care',
      number: '03',
      stageName: 'CARE',
      title: 'Technology turns support into coordinated care.',
      image: '/assets/india-team.png',
      badge: 'Transparent tracking',
      italicNote: 'Audit-ready records',
      statement: 'Support reaches the right people.',
    },
    {
      id: 'outcome',
      number: '04',
      stageName: 'OUTCOME',
      title: 'Every outcome deserves to be seen.',
      image: '/assets/india-learning.png',
      badge: 'Verified outcomes',
      italicNote: 'Demonstrated impact',
      statement: 'Impact becomes visible.',
    },
    {
      id: 'impact',
      number: '05',
      stageName: 'IMPACT',
      title: 'One connected record. A more meaningful impact.',
      image: '/assets/wellmed-outcome-child.jpg',
      badge: 'A brighter tomorrow',
      italicNote: 'Sustainable change',
      statement: 'Every contribution has a human destination.',
    },
  ];

  const pipelineNodes = [
    { id: 0, label: 'Collect', icon: <Coins className="w-4 h-4" />, x: '8%', y: '84%' },
    { id: 1, label: 'Verify', icon: <ShieldCheck className="w-4 h-4" />, x: '32%', y: '78%' },
    { id: 2, label: 'Disburse', icon: <ArrowRight className="w-4 h-4" />, x: '58%', y: '70%' },
    { id: 3, label: 'Prove', icon: <BarChart3 className="w-4 h-4" />, x: '84%', y: '60%' },
  ];

  const currentCard = cards[Math.min(activeStage, 4)];

  return (
    <div className="relative w-full min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex flex-col justify-between overflow-visible">
      
      {/* 3D Photographic Memory Stack Window */}
      <div 
        className="relative flex-1 w-full h-[390px] sm:h-[450px] lg:h-[480px] flex items-start justify-end z-10"
        style={{
          transform: `translate3d(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px, 0)`,
        }}
      >
        <div className="relative w-full h-full">
          {cards.map((card, idx) => {
            const order = (idx - activeStage + cards.length) % cards.length;
            const isActive = order === 0;

            const offsets = [0, 95, 180, 255, 320];
            const targetX = isLoaded ? (offsets[order] || order * 70) : 0;
            const scale = isLoaded ? (1 - order * 0.055) : 0.88;
            const zIndex = 30 - order * 5;
            const opacity = isLoaded ? (1 - order * 0.12) : (idx === 0 ? 1 : 0);

            return (
              <motion.div
                key={card.id}
                initial={{ x: 0, scale: 0.85, opacity: 0 }}
                animate={{
                  x: targetX,
                  scale,
                  opacity,
                  zIndex,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -10,
                  scale: scale * 1.025,
                  boxShadow: '0px 22px 45px rgba(233, 81, 38, 0.22)',
                }}
                onClick={() => onSelectStage && onSelectStage(idx)}
                className={`absolute top-0 left-0 w-[290px] sm:w-[370px] lg:w-[410px] h-[370px] sm:h-[430px] lg:h-[460px] rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-2xl border border-white/50 bg-[#222720] origin-left transform-gpu cursor-pointer transition-all duration-300 ${
                  isActive 
                    ? 'shadow-2xl shadow-[#222720]/30 ring-2 ring-[#e95126]/40' 
                    : 'filter brightness-95 opacity-90'
                }`}
              >
                {/* Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-center"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#222720]/90 via-[#222720]/20 to-black/25" />

                {/* Tag */}
                <div className="absolute top-6 left-7 right-7 flex items-center justify-between text-white z-20">
                  <span className="text-xs font-bold uppercase tracking-widest bg-black/40 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/20">
                    {card.number} / {card.stageName}
                  </span>
                </div>

                {/* Quote */}
                <div className="absolute top-16 left-7 right-7 z-20 max-w-sm">
                  <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white leading-snug drop-shadow-md">
                    {card.title}
                  </h3>
                </div>

                {/* Lower Badge */}
                <div className="absolute bottom-6 left-7 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#d8d9cf] shadow-xl flex items-center gap-3 text-xs text-[#222720]">
                  <div className="w-5 h-5 rounded-full bg-[#e95126]/10 flex items-center justify-center text-[#e95126]">
                    <Heart className="w-3.5 h-3.5 fill-current animate-pulse" />
                  </div>
                  <div className="leading-tight">
                    <p className="font-bold text-[11px]">{card.badge}</p>
                  </div>
                </div>

                {/* Lower Note */}
                <div className="absolute bottom-6 right-7 z-20 text-right">
                  <span className="text-xs italic text-white/95 font-serif drop-shadow-md">
                    {card.italicNote}
                  </span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

      {/* 3D Rising Impact Path & Floating Stage Markers Attached */}
      <div className="relative w-full pt-8 pb-4 z-30">
        
        {/* Layered 3D Rising Bézier Wave Path */}
        <div className="absolute top-2 left-0 right-0 h-28 pointer-events-none overflow-visible">
          <svg className="w-full h-full overflow-visible">
            {/* Outer Translucent Glow Layer */}
            <path
              d="M -160 70 C -10 95, 120 75, 260 65 C 420 52, 600 38, 800 22 C 950 10, 1080 30, 1180 50"
              fill="none"
              stroke="#e95126"
              strokeWidth="10"
              strokeOpacity="0.15"
              className="blur-md"
            />
            {/* Sharp Core Dashed Path */}
            <motion.path
              d="M -160 70 C -10 95, 120 75, 260 65 C 420 52, 600 38, 800 22 C 950 10, 1080 30, 1180 50"
              fill="none"
              stroke="#e95126"
              strokeWidth="2.5"
              strokeOpacity="0.6"
              strokeDasharray="6 6"
              initial={{ pathLength: 0 }}
              animate={isLoaded ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
            {/* Travelling Orange Energy Pulse Signal */}
            <motion.circle
              r="6"
              fill="#e95126"
              filter="drop-shadow(0px 0px 10px #e95126)"
              animate={{
                offsetDistance: ['0%', '100%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                offsetPath: `path('M -160 70 C -10 95, 120 75, 260 65 C 420 52, 600 38, 800 22 C 950 10, 1080 30, 1180 50')`,
              }}
            />
          </svg>
        </div>

        {/* 4 Rising Stage Markers Attached to Path */}
        <div className="flex items-center justify-start gap-8 sm:gap-14 pl-6 md:pl-10 relative z-30">
          {pipelineNodes.map((node) => {
            const isActiveNode = activeStage === node.id || (activeStage === 4 && node.id === 3);

            return (
              <button
                key={node.label}
                onClick={() => onSelectStage && onSelectStage(node.id)}
                className="flex flex-col items-center gap-1.5 group focus:outline-none relative"
              >
                {/* Active Ring Pulse */}
                {isActiveNode && (
                  <span className="animate-ping absolute -top-1 w-11 h-11 rounded-full bg-[#e95126]/30 opacity-75 pointer-events-none" />
                )}

                <div 
                  className={`w-9.5 h-9.5 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                    isActiveNode 
                      ? 'bg-[#e95126] text-white scale-110 shadow-lg shadow-[#e95126]/50 ring-4 ring-[#e95126]/20' 
                      : 'bg-white text-[#e95126] border border-[#d8d9cf] hover:border-[#e95126] hover:scale-105'
                  }`}
                >
                  {React.cloneElement(node.icon, {
                    className: `w-4 h-4 ${isActiveNode ? 'text-white' : 'text-[#e95126]'}`,
                  })}
                </div>
                <span className={`text-xs font-semibold tracking-wide transition-colors ${
                  isActiveNode ? 'text-[#e95126] font-bold' : 'text-[#66695f] group-hover:text-[#222720]'
                }`}>
                  {node.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Statement attached near active point */}
        <div className="mt-3 pl-6 text-left">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentCard.statement}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="text-xs font-medium text-[#222720] bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#d8d9cf] inline-flex items-center gap-2 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#e95126] animate-pulse" />
              <span>{currentCard.statement}</span>
            </motion.p>
          </AnimatePresence>
        </div>

      </div>

    </div>
  );
}
