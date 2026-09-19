import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const HeroImpactSlider: React.FC = () => {
  return (
    <div className="relative w-full h-full select-none flex items-stretch">
      
      {/* Main Container:
          - No boundary, no card border
          - Reaches to top and right edges
          - Smooth gradient blend on the left edge instead of mask-image
      */}
      <div 
        className="relative w-full h-full min-h-[250px] lg:min-h-0 overflow-hidden group flex"
        style={{ 
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 100%)',
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 100%)'
        }}
      >
        
        {/* ================= LEFT HALF: BEFORE ================= */}
        <div 
          style={{ width: `50%` }} 
          className="absolute top-0 bottom-0 left-0 overflow-hidden bg-[#E5DCD2]"
        >
          {/* Childhood girl with chin on hands looking up */}
          <img
            src="/hero-before.jpg"
            alt="Young girl before support looking upward with hope"
            className="w-full h-full object-cover object-[center_28%]"
          />
          {/* Enhancement overlay for better contrast and text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none"></div>

          {/* Left Handwritten Script: "From uncertainty" with small arrow */}
          <div className="absolute top-6 sm:top-9 left-8 sm:left-12 z-10 pointer-events-none">
            <span className="font-handwriting text-xl sm:text-[26px] text-[#E5DCD2] font-bold block leading-tight -rotate-3 select-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              From<br />uncertainty
            </span>
            <svg className="w-7 h-7 text-[#E5DCD2] mt-1 ml-2 opacity-90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" viewBox="0 0 40 40" fill="none">
              <path d="M8 6 C 16 16, 20 22, 24 31" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M17 28 L 24 32 L 28 24" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* BEFORE Badge at Bottom Left */}
          <div className="absolute bottom-6 sm:bottom-8 left-8 sm:left-12 z-10 pointer-events-none">
            <span className="inline-block px-3 py-1 bg-black/45 backdrop-blur-md rounded-full text-[10px] sm:text-[11px] font-bold tracking-widest text-white border border-white/20 uppercase shadow-sm mb-1.5">
              BEFORE
            </span>
            <p className="text-[10px] sm:text-sm font-semibold text-white drop-shadow-md leading-tight">
              A childhood full<br className="sm:hidden" /> of limitations
            </p>
          </div>
        </div>

        {/* ================= RIGHT HALF: AFTER ================= */}
        <div 
          style={{ width: `50%` }} 
          className="absolute top-0 bottom-0 right-0 overflow-hidden bg-[#1C2421]"
        >
          {/* Graduate Image: Head/cap touches top near navbar, touches right corner */}
          <img
            src="/hero-after.jpg"
            alt="Young woman university graduate with academic cap and gown"
            className="w-full h-full object-cover object-[center_6%]"
          />
          {/* Enhancement overlay for better contrast and text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/50 pointer-events-none"></div>

          {/* Right Handwritten Script: "To a brighter tomorrow" with orange underline */}
          <div className="absolute top-6 sm:top-9 right-6 sm:right-10 text-right z-10 pointer-events-none">
            <span className="font-handwriting text-xl sm:text-[26px] text-white font-bold block leading-tight -rotate-2 select-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
              To a<br />brighter<br />tomorrow
            </span>
            <svg className="w-20 h-3 text-[#EB5E28] ml-auto mt-1 drop-shadow-sm" viewBox="0 0 100 15" fill="none">
              <path d="M5 10C35 4 65 14 95 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

          {/* AFTER Label at Bottom Right */}
          <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-10 text-right z-10 pointer-events-none">
            <span className="inline-block px-3 py-1 bg-[#EB5E28]/90 backdrop-blur-md rounded-full text-[10px] sm:text-[11px] font-bold tracking-widest text-white border border-white/30 uppercase shadow-sm mb-1.5">
              AFTER
            </span>
            <p className="text-[10px] sm:text-sm font-semibold text-white drop-shadow-md leading-tight">
              Education creates<br className="sm:hidden" /> opportunities
            </p>
          </div>
        </div>

        {/* ================= VERTICAL DIVIDER & CENTERED HANDLE ================= */}
        <div
          className="absolute top-0 bottom-0 z-30 pointer-events-none -translate-x-1/2"
          style={{ left: `50%` }}
        >
          {/* Vertical white divider line running full height through the center */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)]"></div>

          {/* Centered Drag Handle - Centered directly on top of the vertical line */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-[#1C2421] shadow-[0_4px_24px_rgba(0,0,0,0.4)] flex items-center justify-center border-2 border-white pointer-events-none group">
            <ChevronLeft className="w-3.5 h-3.5 -mr-0.5 text-[#14201A] stroke-[2.5]" />
            <ChevronRight className="w-3.5 h-3.5 text-[#14201A] stroke-[2.5]" />
          </div>
        </div>

      </div>

    </div>
  );
};
