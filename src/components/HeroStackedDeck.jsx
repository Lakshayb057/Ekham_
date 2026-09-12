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

  // Dynamic responsive horizontal & vertical offsets for a rich, visibly fanned 3D deck
  const getResponsiveXOffsets = () => {
    if (windowWidth < 380) return [0, 20, 40, 60];
    if (windowWidth < 500) return [0, 26, 52, 78];
    if (windowWidth < 768) return [0, 34, 68, 102];
    if (windowWidth < 1024) return [0, 48, 96, 144];
    if (windowWidth < 1280) return [0, 80, 160, 240];
    return [0, 95, 190, 280];
  };

  const getResponsiveYOffsets = () => {
    if (windowWidth < 380) return [0, 10, 20, 30];
    if (windowWidth < 500) return [0, 14, 28, 42];
    if (windowWidth < 768) return [0, 16, 32, 48];
    if (windowWidth < 1024) return [0, 12, 24, 36];
    return [0, 2, 4, 6];
  };

  const getResponsiveRotations = () => {
    if (windowWidth < 380) return [0, 2.8, 5.6, 8.4];
    if (windowWidth < 500) return [0, 3.2, 6.4, 9.6];
    if (windowWidth < 768) return [0, 2.8, 5.6, 8.4];
    if (windowWidth < 1024) return [0, 2.2, 4.4, 6.6];
    return [0, 0.8, 1.6, 2.4];
  };

  const xOffsets = getResponsiveXOffsets();
  const yOffsets = getResponsiveYOffsets();
  const rotations = getResponsiveRotations();

  return (
    <div className="relative w-full flex flex-col items-center lg:items-start justify-center overflow-visible select-none py-2">
      
      {/* Photographic Glossy Glass Cards Deck */}
      <div 
        ref={containerRef}
        className="relative w-[305px] xs:w-[355px] sm:w-[410px] md:w-[480px] lg:w-full lg:max-w-[640px] h-[415px] xs:h-[475px] sm:h-[495px] md:h-[500px] lg:h-[420px] mx-auto lg:mx-0 flex items-center justify-start z-10 will-change-transform"
        style={{
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div className="relative w-full h-full">
          {cards.map((card, idx) => {
            const order = (idx - activeStage + cards.length) % cards.length;
            const isActive = idx === activeStage;

            const targetX = xOffsets[order] ?? order * 20;
            const targetY = isActive ? -6 : (yOffsets[order] ?? order * 6);
            const rotate = isActive ? 0 : (rotations[order] ?? order * 1.5);
            const scale = isActive ? 1.02 : Math.max(0.85, 1 - order * 0.04);
            const zIndex = 50 - order * 10;
            const opacity = isActive ? 1 : Math.max(0.48, 1 - order * 0.16);

            return (
              <motion.div
                key={card.id}
                initial={{ x: -20, scale: 0.88, opacity: 0 }}
                animate={isLoaded ? {
                  x: targetX,
                  y: targetY,
                  scale,
                  opacity,
                  zIndex,
                  rotate,
                } : { x: -20, scale: 0.88, opacity: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 280,
                  damping: 24,
                  mass: 0.8,
                }}
                onClick={() => setActiveStage && setActiveStage(idx)}
                className={`absolute top-0 left-0 w-[245px] xs:w-[275px] sm:w-[305px] md:w-[335px] lg:w-[340px] xl:w-[365px] h-[385px] xs:h-[440px] sm:h-[460px] md:h-[470px] lg:h-[400px] xl:h-[415px] rounded-2xl sm:rounded-3xl overflow-hidden border origin-bottom-left cursor-pointer transition-shadow duration-300 select-none transform-gpu touch-manipulation ${
                  isActive 
                    ? 'border-[#e95126] shadow-[0_16px_36px_rgba(34,39,32,0.22)] ring-1 ring-[#e95126]/50' 
                    : 'border-white/50 shadow-md'
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
                    className="absolute top-3 xs:top-3.5 sm:top-4 left-3.5 xs:left-4.5 sm:left-6 z-40"
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
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-white/20 pointer-events-none z-20" />

                {/* Main Quote Overlay */}
                {isActive && (
                  <motion.div 
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.12 }}
                    className="absolute bottom-3.5 xs:bottom-4.5 sm:bottom-7 left-3.5 xs:left-4.5 sm:left-6 right-3.5 xs:right-4.5 sm:right-6 z-30 flex items-end justify-between gap-1.5 xs:gap-2"
                  >
                    <h3 className="text-sm xs:text-base sm:text-lg lg:text-xl font-medium tracking-tight text-white leading-snug drop-shadow-lg max-w-[195px] xs:max-w-[240px] sm:max-w-[270px]">
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
