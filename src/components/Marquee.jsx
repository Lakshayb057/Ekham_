import React from 'react';
import unicefLogo from '../../partners-logo/unicef.png';
import saveChildrenLogo from '../../partners-logo/save-children.png';
import roundGlassLogo from '../../partners-logo/roundglass.png';
import magicBusLogo from '../../partners-logo/magic-bus.png';
import medcellLogo from '../../partners-logo/medcell.png';
import wwfLogo from '../../partners-logo/wwf.png';
import cbmLogo from '../../partners-logo/cbm.png';
import ethanBeanLogo from '../../partners-logo/ethan-bean.png';

export default function Marquee() {
  const logos = [
    {
      src: unicefLogo,
      alt: 'UNICEF',
      height: 30, // Cyan Blue (Wide)
    },
    {
      src: saveChildrenLogo,
      alt: 'Save the Children',
      height: 34, // Red & Black (Badge)
    },
    {
      src: roundGlassLogo,
      alt: 'Roundglass Foundation',
      height: 28, // Emerald & Black (Wide)
    },
    {
      src: magicBusLogo,
      alt: 'Magic Bus',
      height: 36, // Yellow & Red (Circular Badge)
    },
    {
      src: medcellLogo,
      alt: 'MEDCELL',
      height: 27, // Teal & Blue (Wide)
    },
    {
      src: wwfLogo,
      alt: 'WWF',
      height: 36, // Black Panda Icon (Vertical)
    },
    {
      src: cbmLogo,
      alt: 'cbm',
      height: 30, // Red & Amber (Wide)
    },
    {
      src: ethanBeanLogo,
      alt: 'Ethan & The Bean',
      height: 38, // Warm Black (Circular Badge)
    },
  ];

  return (
    <section className="w-full bg-[#F5F3ED] py-3 sm:py-3.5 px-0 relative overflow-hidden border-t border-b border-[#E5DCD0]/80 flex items-center z-20">
      {/* Edge fade overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#F5F3ED] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#F5F3ED] to-transparent z-10 pointer-events-none"></div>

      {/* Moving Partners Ticker Track */}
      <div className="hero-marquee-track flex items-center">
        {[1, 2, 3, 4].map((groupNum) => (
          <div
            key={`group-${groupNum}`}
            className="hero-marquee-group flex items-center shrink-0"
            aria-hidden={groupNum > 1 ? 'true' : undefined}
          >
            {logos.map((logo, idx) => (
              <div
                key={`g${groupNum}-${idx}`}
                className="partner-logo-item flex items-center justify-center shrink-0 px-6 sm:px-9 lg:px-11 h-12 select-none"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="eager"
                  decoding="async"
                  className="partner-logo-img w-auto object-contain transition-transform duration-200 hover:scale-105 pointer-events-auto"
                  style={{
                    height: `${logo.height}px`,
                    maxHeight: '40px',
                    width: 'auto',
                  }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
