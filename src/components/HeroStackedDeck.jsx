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
    if (windowWidth < 380) return [0, 14, 28, 42];
    if (windowWidth < 500) return [0, 18, 36, 54];
    if (windowWidth < 768) return [0, 26, 52, 78];
    if (windowWidth < 1024) return [0, 44, 88, 132];
    if (windowWidth < 1280) return [0, 75, 150, 225];
    return [0, 95, 190, 280];
  };

  const getResponsiveYOffsets = () => {
    if (windowWidth < 380) return [0, 7, 14, 21];
    if (windowWidth < 500) return [0, 9, 18, 27];
    if (windowWidth < 768) return [0, 12, 24, 36];
    if (windowWidth < 1024) return [0, 10, 20, 30];
    return [0, 2, 4, 6];
  };

  const getResponsiveRotations = () => {
    if (windowWidth < 380) return [0, 2.2, 4.4, 6.6];
    if (windowWidth < 500) return [0, 2.6, 5.2, 7.8];
    if (windowWidth < 768) return [0, 2.6, 5.2, 7.8];
    if (windowWidth < 1024) return [0, 2.0, 4.0, 6.0];
    return [0, 0.8, 1.6, 2.4];
  };

  const xOffsets = getResponsiveXOffsets();
  const yOffsets = getResponsiveYOffsets();
  const rotations = getResponsiveRotations();

  return (
    <div className="relative w-full flex flex-col items-center lg:items-start justify-center overflow-visible select-none py-1 sm:py-2">
      
      {/* Photographic Glossy Glass Cards Deck */}
      <div 
        ref={containerRef}
        className="relative w-[235px] xxs:w-[255px] xs:w-[285px] sm:w-[370px] md:w-[440px] lg:w-full lg:max-w-[640px] h-[260px] xxs:h-[280px] xs:h-[310px] sm:h-[390px] md:h-[450px] lg:h-[420px] mx-auto lg:mx-0 flex items-center justify-start z-10 will-change-transform"
        style={{
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div className="relative w-full h-full">
          {cards.map((card, idx) => {
            const order = (idx - activeStage + cards.length) % cards.length;
            const isActive = idx === activeStage;

            const targetX = xOffsets[order] ?? order * 18;
            const targetY = isActive ? -4 : (yOffsets[order] ?? order * 5);
            const rotate = isActive ? 0 : (rotations[order] ?? order * 1.5);
            const scale = isActive ? 1.02 : Math.max(0.85, 1 - order * 0.04);
            const zIndex = 50 - order * 10;
            const opacity = isActive ? 1 : Math.max(0.48, 1 - order * 0.16);

            return (
              <motion.div
                key={card.id}
                initial={{ x: -20, scale: 0.88, opacity: 0 }}
                animate={{
                  x: targetX,
                  y: targetY,
                  scale,
                  opacity,
                  zIndex,
                  rotate,
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => setActiveStage && setActiveStage(idx)}
                className={`absolute top-0 left-0 w-[185px] xxs:w-[200px] xs:w-[225px] sm:w-[275px] md:w-[315px] lg:w-[340px] xl:w-[365px] h-[240px] xxs:h-[260px] xs:h-[290px] sm:h-[365px] md:h-[420px] lg:h-[400px] xl:h-[415px] rounded-2xl sm:rounded-3xl overflow-hidden border origin-bottom-left cursor-pointer transition-shadow duration-300 select-none transform-gpu touch-manipulation ${
                  isActive 
                    ? 'border-[#e95126] shadow-[0_12px_36px_rgba(233,81,38,0.25)] ring-2 ring-[#e95126]/60' 
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

                {/* Ultra-Glossy Glass Overlay & Reflections */}
                <div className={`absolute inset-0 bg-gradient-to-t from-[#222720]/95 via-[#222720]/35 to-black/20 pointer-events-none transition-opacity duration-500 ${
                  isActive ? 'opacity-90' : 'opacity-75'
                }`} />
                
                {/* Background Dimming for non-active cards */}
                {!isActive && (
                  <div className="absolute inset-0 bg-[#222720]/30 pointer-events-none" />
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
                    <div className="space-y-1 max-w-[195px] xs:max-w-[240px] sm:max-w-[270px]">
                      <h3 className="text-sm xs:text-base sm:text-lg lg:text-xl font-medium tracking-tight text-white leading-snug drop-shadow-lg">
                        {card.title}
                      </h3>
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
