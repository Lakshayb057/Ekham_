import React from 'react';
import { motion } from 'framer-motion';

export default function PartnerLogosSection() {
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

  // Quadruple logos to guarantee seamless infinite loop on any screen width
  const loopLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos];

  return (
    <section id="partner-organisations-section" className="mt-8 sm:mt-12 mb-3 xs:mb-4 sm:mb-6 lg:mb-8 py-10 xs:py-12 sm:py-16 md:py-20 bg-[#e9ece2] border-y border-[#d0d6c8] relative overflow-hidden select-none">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-12 mb-8 sm:mb-12 md:mb-14">
        <div className="space-y-1 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#e95126]">
            <span className="w-2 h-2 rounded-full bg-[#e95126]" />
            <span>Trusted Network</span>
          </div>
          <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#222720]">
            Organisations we have worked with
          </h3>
        </div>
      </div>

      {/* Infinite Scrolling Marquee Track with Side Fade Masks */}
      <div className="relative w-full overflow-hidden">
        {/* Left Gradient Fade Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 md:w-44 bg-gradient-to-r from-[#e9ece2] via-[#e9ece2]/80 to-transparent z-10 pointer-events-none" />

        {/* Right Gradient Fade Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 md:w-44 bg-gradient-to-l from-[#e9ece2] via-[#e9ece2]/80 to-transparent z-10 pointer-events-none" />

        {/* Animated Marquee Row of Vibrant Full-Color Logos */}
        <div className="flex items-center py-2">
          <motion.div
            className="flex items-center gap-8 xs:gap-12 sm:gap-16 md:gap-24 shrink-0 transform-gpu"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 28,
                ease: 'linear',
              },
            }}
          >
            {loopLogos.map((logo, idx) => (
              <div
                key={`${logo.name}-${idx}`}
                className="flex items-center justify-center shrink-0 cursor-pointer group px-2"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-10 xs:h-12 sm:h-14 md:h-16 lg:h-18 max-w-[140px] sm:max-w-[180px] md:max-w-[220px] w-auto object-contain filter-none opacity-100 group-hover:scale-105 transition-transform duration-300 drop-shadow-xs"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
