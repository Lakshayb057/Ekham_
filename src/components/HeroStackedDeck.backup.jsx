import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Coins, ShieldCheck, ArrowRight, BarChart3, Sun } from 'lucide-react';

export default function HeroStackedDeck({ stageProgress = 0, activeStage = 0, onSelectStage, isLoaded = false }) {
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
    },
    {
      id: 'support',
      number: '02',
      stageName: 'SUPPORT',
      title: 'The right support reaches the right people.',
      image: '/assets/india-community.png',
      badge: 'Dignified community action',
      italicNote: 'Coordinated care',
    },
    {
      id: 'care',
      number: '03',
      stageName: 'CARE',
      title: 'Technology turns support into coordinated care.',
      image: '/assets/india-team.png',
      badge: 'Transparent tracking',
      italicNote: 'Audit-ready records',
    },
    {
      id: 'outcome',
      number: '04',
      stageName: 'OUTCOME',
      title: 'Every outcome deserves to be seen.',
      image: '/assets/india-learning.png',
      badge: 'Verified outcomes',
      italicNote: 'Demonstrated impact',
    },
    {
      id: 'impact',
      number: '05',
      stageName: 'IMPACT',
      title: 'One connected record. A more meaningful impact.',
      image: '/assets/wellmed-outcome-child.jpg',
      badge: 'A brighter tomorrow',
      italicNote: 'Sustainable change',
    },
  ];

  const pipelineNodes = [
    { id: 0, label: 'Collect', icon: <Coins className="w-4 h-4" /> },
    { id: 1, label: 'Verify', icon: <ShieldCheck className="w-4 h-4" /> },
    { id: 2, label: 'Disburse', icon: <ArrowRight className="w-4 h-4" /> },
    { id: 3, label: 'Prove', icon: <BarChart3 className="w-4 h-4" /> },
  ];

  return (
    <div className="relative w-full flex flex-col justify-between overflow-visible">
      
      {/* 3D Folder Cards Deck Window - Completely Free of Line Overlap */}
      <div 
        className="relative w-full h-[380px] sm:h-[440px] lg:h-[470px] flex items-start justify-end z-10"
        style={{
          transform: `translate3d(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px, 0)`,
        }}
      >
        
        {/* Sunburst Accent on Top-Right of Card 5 */}
        <div className="absolute -top-3 right-4 md:right-8 z-40 flex items-center gap-2 pointer-events-none">
          <div className="relative flex items-center justify-center">
            <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-[#e95126]/30 opacity-75" />
            <Sun className="w-5 h-5 text-[#e95126] animate-spin-slow" />
          </div>
          <span className="text-[11px] font-bold italic tracking-wide text-[#e95126] max-w-[85px] leading-tight">
            More brighter tomorrows
          </span>
        </div>

        {/* 5 Fanning 3D Cards Stacked horizontally */}
        <div className="relative w-full h-full">
          {cards.map((card, idx) => {
            const order = (idx - activeStage + cards.length) % cards.length;
            const isActive = order === 0;

            const offsets = [0, 110, 200, 275, 340];
            const targetX = isLoaded ? (offsets[order] || order * 75) : 0;
            const scale = isLoaded ? (1 - order * 0.06) : 0.9;
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
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -8,
                  scale: scale * 1.02,
                  boxShadow: '0px 20px 40px rgba(233, 81, 38, 0.2)',
                }}
                onClick={() => onSelectStage && onSelectStage(idx)}
                className={`absolute top-0 left-0 w-[290px] sm:w-[370px] lg:w-[410px] h-[360px] sm:h-[420px] lg:h-[450px] rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-2xl border border-white/50 bg-[#222720] origin-left transform-gpu cursor-pointer transition-all duration-300 ${
                  isActive 
                    ? 'shadow-2xl shadow-[#222720]/30 ring-2 ring-[#e95126]/30' 
                    : 'filter brightness-95 opacity-90'
                }`}
              >
                {/* Photo */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-center"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#222720]/90 via-[#222720]/20 to-black/25" />

                {/* Header Tag */}
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

                {/* Lower Left Badge */}
                <div className="absolute bottom-6 left-7 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#d8d9cf] shadow-xl flex items-center gap-3 text-xs text-[#222720]">
                  <div className="w-5 h-5 rounded-full bg-[#e95126]/10 flex items-center justify-center text-[#e95126]">
                    <Heart className="w-3.5 h-3.5 fill-current animate-pulse" />
                  </div>
                  <div className="leading-tight">
                    <p className="font-bold text-[11px]">{card.badge}</p>
                  </div>
                </div>

                {/* Lower Right Note */}
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

      {/* Beautiful Wave Orange Ribbon Path BELOW the Images */}
      <div className="relative w-full pt-8 pb-2 z-20">
        
        {/* Wave SVG Curve Positioned Entirely Below the Photographs */}
        <div className="absolute top-4 left-0 right-0 h-16 pointer-events-none overflow-visible">
          <svg className="w-full h-full overflow-visible">
            <path
              d="M -180 25 C -20 50, 180 5, 420 28 C 620 48, 820 12, 1120 25"
              fill="none"
              stroke="#e95126"
              strokeWidth="2.5"
              strokeOpacity="0.45"
              strokeDasharray="6 6"
            />
            {/* Travelling Light Orb */}
            <motion.circle
              r="5.5"
              fill="#e95126"
              filter="drop-shadow(0px 0px 8px #e95126)"
              animate={{
                offsetDistance: ['0%', '100%'],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                offsetPath: `path('M -180 25 C -20 50, 180 5, 420 28 C 620 48, 820 12, 1120 25')`,
              }}
            />
          </svg>
        </div>

        {/* 4 Stepping Node Buttons Placed Below the Wave */}
        <div className="flex items-center justify-start gap-10 sm:gap-14 pl-6 md:pl-12 relative z-30">
          {pipelineNodes.map((node) => {
            const isActiveNode = activeStage === node.id || (activeStage === 4 && node.id === 3);

            return (
              <button
                key={node.label}
                onClick={() => onSelectStage && onSelectStage(node.id)}
                className="flex flex-col items-center gap-1.5 group focus:outline-none"
              >
                <div 
                  className={`w-9.5 h-9.5 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                    isActiveNode 
                      ? 'bg-[#e95126] text-white scale-110 shadow-lg shadow-[#e95126]/40 ring-4 ring-[#e95126]/20' 
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

      </div>

    </div>
  );
}
