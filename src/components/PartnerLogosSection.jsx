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
    <section id="partner-organisations-section" className="py-10 sm:py-14 bg-[#e9ece2] border-y border-[#d0d6c8] relative overflow-hidden select-none">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-12 mb-6 sm:mb-8">
        <div className="space-y-1 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e95126]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e95126]" />
            <span>Trusted Network</span>
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#222720]">
            Organisations we have worked with
          </h3>
        </div>
      </div>

      {/* Infinite Scrolling Marquee Track with Side Fade Masks */}
      <div className="relative w-full overflow-hidden">
        {/* Left Gradient Fade Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 bg-gradient-to-r from-[#e9ece2] via-[#e9ece2]/80 to-transparent z-10 pointer-events-none" />

        {/* Right Gradient Fade Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 bg-gradient-to-l from-[#e9ece2] via-[#e9ece2]/80 to-transparent z-10 pointer-events-none" />

        {/* Animated Marquee Row of Pure Images */}
        <div className="flex items-center py-2">
          <motion.div
            className="flex items-center gap-8 xs:gap-12 sm:gap-16 md:gap-20 shrink-0 transform-gpu"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 26,
                ease: 'linear',
              },
            }}
          >
            {loopLogos.map((logo, idx) => (
              <div
                key={`${logo.name}-${idx}`}
                className="flex items-center justify-center shrink-0 cursor-pointer group"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-7 xs:h-8 sm:h-10 md:h-11 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 drop-shadow-xs"
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
