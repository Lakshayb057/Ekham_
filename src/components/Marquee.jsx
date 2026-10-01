import React from 'react';

export default function Marquee() {
  // Exact official brand color filters for partner logos
  const unicefBlue = 'invert(52%) sepia(82%) saturate(2331%) hue-rotate(167deg) brightness(98%) contrast(101%)'; // Official UNICEF Cyan Blue (#00ADEF)
  const usaidNavy = 'invert(12%) sepia(89%) saturate(4622%) hue-rotate(203deg) brightness(96%) contrast(106%)'; // Official USAID Navy (#002F6C)
  const saveChildrenRed = 'invert(21%) sepia(85%) saturate(5436%) hue-rotate(354deg) brightness(93%) contrast(92%)'; // Official Save the Children Red (#DA291C)
  const cbmOrange = 'invert(58%) sepia(98%) saturate(1630%) hue-rotate(358deg) brightness(99%) contrast(105%)'; // Official cbm Amber/Orange (#F39200)
  const roundglassTeal = 'invert(44%) sepia(86%) saturate(1480%) hue-rotate(139deg) brightness(94%) contrast(101%)'; // Official Roundglass Teal (#00A896)
  const medcellTeal = 'invert(22%) sepia(61%) saturate(2250%) hue-rotate(152deg) brightness(94%) contrast(101%)'; // Official MEDCELL Teal (#005B60)
  const magicBusOrange = 'invert(48%) sepia(76%) saturate(3015%) hue-rotate(345deg) brightness(99%) contrast(93%)'; // Official Magic Bus Orange (#F26522)
  const ethanBeanBrown = 'invert(28%) sepia(45%) saturate(1250%) hue-rotate(355deg) brightness(92%) contrast(90%)'; // Official Ethan & Bean Coffee Brown (#7B4A26)
  const ranglaPunjabGreen = 'invert(36%) sepia(95%) saturate(1350%) hue-rotate(135deg) brightness(90%) contrast(101%)'; // Official Rangla Punjab Emerald (#00875A)
  const wwfDark = 'brightness(0) opacity(0.85)'; // Official WWF Dark Charcoal (#1C2421)

  const logos = [
    { src: './logo-medcell.png', alt: 'MEDCELL', filter: medcellTeal },
    { src: './logo-cbm.png', alt: 'cbm', filter: cbmOrange },
    { src: './logo-rangla-punjab.png', alt: 'Rangla Punjab', filter: ranglaPunjabGreen },
    { src: './logo-unicef.png', alt: 'UNICEF', filter: unicefBlue },
    { src: './logo-save-children.png', alt: 'Save the Children', filter: saveChildrenRed },
    { src: './logo-usaid.png', alt: 'USAID', filter: usaidNavy },
    { src: './logo-ethan-bean.png', alt: 'Ethan & The Bean', filter: ethanBeanBrown },
    { src: './logo-wwf.png', alt: 'WWF', filter: wwfDark },
    { src: './logo-magic-bus.png', alt: 'Magic Bus', filter: magicBusOrange },
    { src: './logo-roundglass.png', alt: 'Roundglass Foundation', filter: roundglassTeal },
  ];

  return (
    <section className="w-full bg-[#F5F3ED] py-3.5 sm:py-4 px-0 relative overflow-hidden border-t border-b border-[#E5DCD0]/80 flex items-center z-20">
      {/* Edge fade overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#F5F3ED] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#F5F3ED] to-transparent z-10 pointer-events-none"></div>

      {/* Moving Partners Ticker Track */}
      <div className="hero-marquee-track flex items-center w-full">
        {[1, 2, 3, 4].map((groupNum) => (
          <div
            key={`group-${groupNum}`}
            className="hero-marquee-group flex items-center shrink-0"
            aria-hidden={groupNum > 1 ? 'true' : undefined}
          >
            {logos.map((logo, idx) => (
              <div
                key={`g${groupNum}-${idx}`}
                className="flex items-center shrink-0 px-6 sm:px-10 lg:px-12 select-none"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-6 sm:h-7 md:h-8 max-h-8 w-auto object-contain hover:scale-105 transition-all duration-200"
                  style={{ filter: logo.filter, opacity: 0.95 }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
