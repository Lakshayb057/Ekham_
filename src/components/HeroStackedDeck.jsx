import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function HeroStackedDeck({ isLoaded = true, activeStage = 0, setActiveStage }) {
  const containerRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let animationFrameId;
    const handleMouseMove = (e) => {
      // Disable mouse parallax on touch-only devices for performance
      if (window.innerWidth < 768) return;
      const { innerWidth, innerHeight } = window;
      const targetX = (e.clientX / innerWidth - 0.5) * 6;
      const targetY = (e.clientY / innerHeight - 0.5) * 6;

      animationFrameId = requestAnimationFrame(() => {
        if (containerRef.current) {
          containerRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const cards = [
    {
      id: 'collect',
      number: '01',
      stageName: 'COLLECT',
      title: 'Every contribution begins with a promise.',
      image: '/assets/wellmed-care-hero.jpg',
    },
    {
      id: 'verify',
      number: '02',
      stageName: 'VERIFY',
      title: 'Trust gives generosity a direction.',
      image: '/assets/roadmap-verify.jpg',
    },
    {
      id: 'disburse',
      number: '03',
      stageName: 'DISBURSE',
      title: 'Technology turns support into coordinated care.',
      image: '/assets/india-team.png',
    },
    {
      id: 'prove',
      number: '04',
      stageName: 'PROVE',
      title: 'Every outcome deserves to be seen.',
      image: '/assets/wellmed-outcome-child.jpg',
    },
  ];

  const currentCard = cards[activeStage] || cards[0];

  // Dynamic responsive offsets based on viewport width to prevent clipping on mobile
  const getResponsiveOffsets = () => {
    if (windowWidth < 400) return [0, 20, 40, 60];
    if (windowWidth < 500) return [0, 26, 52, 78];
    if (windowWidth < 768) return [0, 45, 90, 135];
    if (windowWidth < 1024) return [0, 65, 130, 195];
    if (windowWidth < 1280) return [0, 80, 160, 240];
    return [0, 95, 190, 280];
  };

  const offsets = getResponsiveOffsets();

  return (
    <div className="relative w-full flex flex-col items-center lg:items-start justify-center overflow-visible select-none py-2">
      
      {/* Photographic Glossy Glass Cards Deck */}
      <div 
        ref={containerRef}
        className="relative w-full max-w-[320px] xs:max-w-[360px] sm:max-w-[480px] md:max-w-[560px] lg:max-w-[640px] h-[300px] xs:h-[330px] sm:h-[380px] lg:h-[420px] flex items-center justify-center lg:justify-start z-10 will-change-transform"
        style={{
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div className="relative w-full h-full flex items-center justify-center lg:justify-start">
          {cards.map((card, idx) => {
            const order = (idx - activeStage + cards.length) % cards.length;
            const isActive = idx === activeStage;

            const targetX = offsets[order] ?? order * (offsets[1] || 25);
            const scale = isActive ? 1.02 : Math.max(0.86, 1 - order * 0.04);
            const zIndex = 50 - order * 10;
            const opacity = isActive ? 1 : Math.max(0.4, 1 - order * 0.18);
            const rotate = isActive ? 0 : order * 0.8;

            return (
              <motion.div
                key={card.id}
                initial={{ x: -20, scale: 0.88, opacity: 0 }}
                animate={isLoaded ? {
                  x: targetX,
                  scale,
                  opacity,
                  zIndex,
                  y: isActive ? -6 : order * 2,
                  rotate,
                } : { x: -20, scale: 0.88, opacity: 0 }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() => setActiveStage && setActiveStage(idx)}
                className={`absolute top-0 left-0 w-[215px] xs:w-[245px] sm:w-[300px] md:w-[325px] lg:w-[340px] xl:w-[365px] h-[280px] xs:h-[310px] sm:h-[360px] md:h-[385px] lg:h-[400px] xl:h-[415px] rounded-2xl overflow-hidden border origin-bottom-left cursor-pointer transition-shadow duration-500 select-none transform-gpu touch-manipulation ${
                  isActive 
                    ? 'border-[#e95126]/80 shadow-[0_16px_36px_-10px_rgba(233,81,38,0.35)] ring-2 ring-[#e95126]' 
                    : 'border-white/30 shadow-lg'
                }`}
                style={{ zIndex }}
              >
                {/* Photo */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out"
                  loading="eager"
                  decoding="async"
                />

                {/* Stage Badge inside active card frame */}
                {isActive && (
                  <motion.div 
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.1 }}
                    className="absolute top-3 xs:top-4 left-3.5 xs:left-5 sm:left-6 z-40"
                  >
                    <div className="inline-flex items-center gap-1.5 xs:gap-2 px-2.5 xs:px-3.5 py-1 xs:py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#e95126]/30 shadow-md text-[10px] xs:text-[11px] font-bold uppercase tracking-widest text-[#222720]">
                      <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-[#e95126] animate-pulse" />
                      <span className="text-[#e95126] font-extrabold">{currentCard.number}</span>
                      <span className="text-[#66695f]/50">/</span>
                      <span className="tracking-wider xs:tracking-widest text-[#222720]">{currentCard.stageName}</span>
                    </div>
                  </motion.div>
                )}

                {/* Ultra-Glossy Glass Overlay & Reflections */}
                <div className={`absolute inset-0 bg-gradient-to-t from-[#222720]/90 via-[#222720]/30 to-black/15 pointer-events-none transition-opacity duration-500 ${
                  isActive ? 'opacity-90' : 'opacity-75'
                }`} />
                
                {/* Background Dimming for non-active cards */}
                {!isActive && (
                  <div className="absolute inset-0 bg-[#222720]/25 pointer-events-none" />
                )}

                {/* Specular Diagonal Glass Sheen */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/25 via-white/10 to-transparent pointer-events-none mix-blend-overlay" />

                {/* Glossy Top Glass Edge Border */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none z-20" />

                {/* Glass Inner Frame Ring */}
                <div className="absolute inset-0 rounded-2xl border border-white/20 pointer-events-none z-20" />

                {/* Main Quote Overlay */}
                {isActive && (
                  <motion.div 
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.12 }}
                    className="absolute bottom-4 xs:bottom-5 sm:bottom-7 left-3.5 xs:left-5 sm:left-6 right-3.5 xs:right-5 sm:right-6 z-30 flex items-end justify-between gap-2"
                  >
                    <h3 className="text-sm xs:text-base sm:text-lg lg:text-xl font-medium tracking-tight text-white leading-snug drop-shadow-lg max-w-[220px] xs:max-w-[250px] sm:max-w-[270px]">
                      {card.title}
                    </h3>
                    
                    {/* Arrow Action Badge */}
                    <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#222720] shadow-lg shrink-0">
                      <motion.span animate={{ x: [0, 2, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                        →
                      </motion.span>
                    </div>
                  </motion.div>
                )}

              </motion.div>
            );
          })}
        </div>

      </div>

    </div>
  );
}
