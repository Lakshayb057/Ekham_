import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function PartnerLogosSection() {
  const sectionRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredLogo, setHoveredLogo] = useState(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 9 Partner Organisations arranged in orbit around fixed center "ekhum"
  const partnerLogos = [
    { name: 'UNICEF', src: '/assets/reference-3.webp' },
    { name: 'Save the Children', src: '/assets/reference-4.webp' },
    { name: 'Magic Bus', src: '/assets/reference-5.webp' },
    { name: 'WWF', src: '/assets/reference-6.webp' },
    { name: 'CBM', src: '/assets/reference-7.webp' },
    { name: 'Roundglass Foundation', src: '/assets/reference-8.webp' },
    { name: 'Medcell', src: '/assets/reference-9.webp' },
    { name: 'Rangla Punjab', src: '/assets/reference-10.webp' },
    { name: 'Ethan & The Bean', src: '/assets/reference-11.webp' },
  ];

  // Dynamic responsive orbital radius calibrated for 100% viewport clearance and balance
  const getRadius = () => {
    if (windowWidth < 380) return 105;
    if (windowWidth < 480) return 120;
    if (windowWidth < 640) return 140;
    if (windowWidth < 768) return 160;
    if (windowWidth < 1024) return 170;
    if (windowWidth < 1280) return 180;
    return 190;
  };

  const radius = getRadius();
  const cardHalfSize = windowWidth >= 768 ? 48 : 40;
  const stageSize = (radius + cardHalfSize + 12) * 2;

  // Track cursor across section for soft background lighting
  const handleSectionMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleSectionMouseLeave = () => {
    setMousePos({ x: -1000, y: -1000 });
  };

  return (
    <section 
      id="partner-organisations-section" 
      ref={sectionRef}
      onMouseMove={handleSectionMouseMove}
      onMouseLeave={handleSectionMouseLeave}
      className="min-h-0 sm:min-h-[100dvh] sm:min-h-screen pt-14 xs:pt-16 sm:pt-24 lg:pt-24 pb-4 xs:pb-6 sm:pb-10 px-3 xs:px-4 sm:px-6 md:px-12 bg-[#e9ece2] border-y border-[#d0d6c8] relative overflow-hidden select-none bg-tech-grid flex flex-col justify-start items-center"
    >
      <style>{`
        @keyframes ekhum-orbit-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes ekhum-orbit-counter {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
      `}</style>

      {/* Soft Dynamic Cursor Glow in Background */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(233,81,38,0.07), rgba(255,255,255,0.12) 30%, transparent 70%)`,
        }}
      />

      {/* Ambient background blur orbs */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-white/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#e95126]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container: Vertically Stacked Heading on Left, Circular Orbit on Right */}
      <div className="max-w-[1360px] w-full mx-auto z-10 flex flex-col lg:flex-row items-center justify-between mt-1 sm:mt-4 lg:mt-6 mb-2 sm:mb-auto gap-4 sm:gap-8 lg:gap-12 xl:gap-16 px-4 sm:px-8 md:pl-10 md:pr-20 lg:pl-14 lg:pr-28">
        
        {/* Left: Vertically Stacked Multi-line Headline */}
        <motion.div 
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="shrink-0 flex flex-col items-center lg:items-start justify-center select-none text-center lg:text-left z-20 max-w-md lg:max-w-lg xl:max-w-xl"
        >
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e95126] shrink-0 animate-pulse shadow-xs" />
            <span className="text-xs sm:text-sm font-mono-tech uppercase font-bold text-[#66695f] tracking-widest">
              Partners & Network
            </span>
          </div>

          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[78px] 2xl:text-[86px] font-extrabold tracking-tight text-[#222720] leading-[1.01] flex flex-col font-heading">
            <span className="text-[#1a1e18]">Organisations</span>
            <span className="text-[#3b4237]">we have</span>
            <span className="text-[#3b4237]">worked</span>
            <span className="text-[#e95126]">with</span>
          </h2>

          <div className="w-16 h-1.5 bg-[#e95126]/40 rounded-full mt-5 hidden lg:block" />
        </motion.div>

        {/* In Front / Right: Circular Orbital Solar Stage with Fixed Center "ekhum" */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.85, rotateX: 14 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ perspective: '1400px' }}
          className="relative flex-1 flex items-center justify-center overflow-visible py-0 sm:py-1 w-full"
        >
          <div 
            className="relative flex items-center justify-center"
            style={{ 
              width: `${Math.min(stageSize, windowWidth - 24)}px`, 
              height: `${Math.min(stageSize, windowWidth - 24)}px`,
              maxHeight: '500px',
            }}
          >
            {/* Celestial Track Rings SVG */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox={`0 0 ${stageSize} ${stageSize}`}
            >
              {/* Outer decorative halo */}
              <circle
                cx={stageSize / 2}
                cy={stageSize / 2}
                r={radius * 1.15}
                fill="none"
                stroke="#d0d6c8"
                strokeWidth="1"
                strokeOpacity="0.4"
              />

              {/* Main orbital track */}
              <circle
                cx={stageSize / 2}
                cy={stageSize / 2}
                r={radius}
                fill="none"
                stroke="#e95126"
                strokeWidth="1.5"
                strokeDasharray="4 6"
                strokeOpacity="0.35"
              />

              {/* Inner decorative orbit */}
              <circle
                cx={stageSize / 2}
                cy={stageSize / 2}
                r={radius * 0.64}
                fill="none"
                stroke="#d0d6c8"
                strokeWidth="1"
                strokeDasharray="3 5"
                strokeOpacity="0.45"
              />
            </svg>

            {/* Fixed Center Point: "ekhum." */}
            <div 
              className="absolute z-20 flex items-center justify-center cursor-pointer pointer-events-auto"
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Animated Radar Ambient Pulse Wave */}
              <div className="absolute inset-0 rounded-full bg-[#e95126]/12 animate-ping duration-1000 pointer-events-none" />
              <div className="absolute -inset-3 sm:-inset-5 rounded-full bg-gradient-to-br from-[#e95126]/20 via-white/30 to-transparent blur-md pointer-events-none" />

              {/* Center Core Glass Disc */}
              <motion.div 
                whileHover={{ scale: 1.06 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="relative w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-white/95 backdrop-blur-md border-2 border-white shadow-[0_18px_45px_rgba(233,81,38,0.18),0_4px_16px_rgba(0,0,0,0.06)] flex items-center justify-center select-none ring-4 ring-[#e95126]/15 group hover:ring-[#e95126]/30 transition-all duration-300"
              >
                <div className="flex items-center justify-center translate-x-[2px] translate-y-[2px] sm:translate-x-[2.5px] sm:translate-y-[2.5px]">
                  <h3 className="text-xl xs:text-2xl sm:text-[26px] md:text-[30px] font-black tracking-tight text-[#222720] leading-none select-none text-center flex items-baseline">
                    <span>ekhum</span><span className="text-[#e95126] inline-block ml-[1px]">.</span>
                  </h3>
                </div>
              </motion.div>
            </div>

            {/* Revolving Orbital Ring of Partner Logos */}
            <div 
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{
                animation: 'ekhum-orbit-spin 45s linear infinite',
                animationPlayState: isPaused ? 'paused' : 'running',
              }}
            >
              {partnerLogos.map((logo, idx) => {
                // Calculate position along circular orbit
                const total = partnerLogos.length;
                const angleDeg = (idx * 360) / total;
                const angleRad = (angleDeg * Math.PI) / 180;
                const x = radius * Math.cos(angleRad);
                const y = radius * Math.sin(angleRad);

                return (
                  <div
                    key={logo.name}
                    className="absolute pointer-events-auto"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    onMouseEnter={() => {
                      setIsPaused(true);
                      setHoveredLogo(logo.name);
                    }}
                    onMouseLeave={() => {
                      setIsPaused(false);
                      setHoveredLogo(null);
                    }}
                  >
                    {/* Counter-rotating child wrapper keeps logo always upright */}
                    <div
                      style={{
                        animation: 'ekhum-orbit-counter 45s linear infinite',
                        animationPlayState: isPaused ? 'paused' : 'running',
                      }}
                    >
                      <OrbitalLogoCard 
                        logo={logo} 
                        index={idx}
                        isHighlighted={hoveredLogo === logo.name} 
                      />
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

/**
 * OrbitalLogoCard:
 * Generously sized luxury frosted-glass card with dynamic 3D magnetic tilt,
 * specular flashlight glare, and elevated 3D logo depth.
 */
function OrbitalLogoCard({ logo, index = 0, isHighlighted }) {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -12;
    const rotY = ((x - centerX) / centerX) * 12;

    setCoords({ x, y });
    setTilt({ rotateX: rotX, rotateY: rotY });
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.35, rotateY: 15 }}
      whileInView={{ opacity: 1, scale: isHovered ? 1.12 : 1, rotateY: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.04, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      animate={{
        scale: isHovered ? 1.12 : 1,
        z: isHovered ? 30 : 0,
      }}
      style={{ perspective: 1000 }}
      className="relative cursor-pointer touch-manipulation group"
      title={logo.name}
    >
      <motion.div
        animate={{
          rotateX: isHovered ? tilt.rotateX : 0,
          rotateY: isHovered ? tilt.rotateY : 0,
        }}
        transition={{ type: 'spring', stiffness: 360, damping: 24 }}
        style={{ transformStyle: 'preserve-3d' }}
        className={`relative w-15 h-15 xxs:w-16 xxs:h-16 xs:w-18 xs:h-18 sm:w-20 sm:h-20 md:w-22 md:h-22 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center p-2 xs:p-2.5 sm:p-3 transition-all duration-300 border ${
          isHovered || isHighlighted
            ? 'bg-white border-[#e95126]/50 shadow-[0_20px_45px_rgba(233,81,38,0.22),0_6px_16px_rgba(0,0,0,0.06)] ring-2 ring-[#e95126]/30'
            : 'bg-white/90 backdrop-blur-md border-white shadow-[0_8px_24px_rgba(34,39,32,0.05)] hover:border-white/80'
        }`}
      >
        {/* Dynamic Specular Flashlight/Glare */}
        {isHovered && (
          <div
            className="absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none overflow-hidden transition-opacity duration-200"
            style={{
              background: `radial-gradient(140px circle at ${coords.x}px ${coords.y}px, rgba(255,255,255,0.95), transparent 75%)`,
            }}
          />
        )}

        {/* 3D Elevated Logo Image */}
        <div
          style={{ 
            transform: isHovered ? 'translateZ(26px) scale(1.08)' : 'translateZ(0px)', 
            transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)' 
          }}
          className="w-full h-full flex items-center justify-center pointer-events-none select-none relative z-10"
        >
          <img
            src={logo.src}
            alt={logo.name}
            className="max-h-[78%] max-w-[82%] object-contain filter-none drop-shadow-xs transition-all duration-300"
            loading="lazy"
            decoding="async"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
