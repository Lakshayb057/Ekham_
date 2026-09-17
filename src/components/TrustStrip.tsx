import React from 'react';
import { Globe, Leaf, PawPrint, Users, Coffee } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const logos = [
    // 1. Rangla Punjab
    <div key="rangla" className="flex items-center gap-2 shrink-0 px-8 transition-all hover:scale-105 cursor-pointer">
      <Leaf className="w-7 h-7 text-[#db2777]" />
      <div className="flex flex-col leading-none bg-[#1e1b4b] px-2.5 py-1 rounded-sm shadow-sm">
        <span className="text-[10px] font-black text-white tracking-widest">RANGLA</span>
        <span className="text-[10px] font-black text-[#38bdf8] tracking-widest mt-0.5">PUNJAB</span>
        <span className="text-[8px] font-bold text-[#f43f5e] tracking-wider mt-1">SOCIETY</span>
      </div>
    </div>,
    // 2. Ethan & The Bean
    <div key="ethan" className="flex flex-col items-center justify-center shrink-0 px-8 transition-all hover:scale-105 cursor-pointer">
      <div className="w-12 h-12 rounded-full border-2 border-black border-dotted flex items-center justify-center mb-1 bg-white">
        <Coffee className="w-5 h-5 text-black" />
      </div>
      <span className="text-[8px] font-black uppercase tracking-wider text-black">Ethan & The Bean</span>
    </div>,
    // 3. unicef
    <div key="unicef" className="flex flex-col items-center justify-center shrink-0 px-8 transition-all hover:scale-105 cursor-pointer">
      <div className="flex items-center gap-0.5 text-[#0ea5e9]">
        <span className="text-2xl font-bold lowercase tracking-tighter">unicef</span>
        <Globe className="w-5 h-5 ml-0.5" />
      </div>
      <span className="text-[9px] text-[#0ea5e9] font-medium tracking-wide">for every child</span>
    </div>,
    // 4. Save the Children
    <div key="save" className="flex flex-col items-center justify-center shrink-0 px-8 transition-all hover:scale-105 cursor-pointer">
      <div className="w-7 h-7 rounded-full bg-[#e11d48] flex items-center justify-center mb-1.5 shadow-sm">
        <Users className="w-4 h-4 text-white" />
      </div>
      <span className="text-xs font-black text-black leading-tight text-center tracking-tight">Save the<br/>Children</span>
    </div>,
    // 5. Magic Bus
    <div key="magicbus" className="shrink-0 px-8 transition-all hover:scale-105 cursor-pointer">
      <div className="w-14 h-14 rounded-full border-[3px] border-[#facc15] bg-white flex flex-col items-center justify-center shadow-sm">
        <span className="text-[9px] font-black text-[#e11d48] leading-[1.1] uppercase tracking-wide">Magic</span>
        <span className="text-[9px] font-black text-[#e11d48] leading-[1.1] uppercase tracking-wide">Bus</span>
      </div>
    </div>,
    // 6. WWF
    <div key="wwf" className="flex flex-col items-center justify-center shrink-0 px-8 transition-all hover:scale-105 cursor-pointer">
      <PawPrint className="w-7 h-7 text-black" />
      <span className="text-xl font-black text-black tracking-tighter mt-1">WWF</span>
    </div>,
    // 7. cbm
    <div key="cbm" className="flex items-center gap-1 shrink-0 px-8 transition-all hover:scale-105 cursor-pointer">
      <span className="text-3xl font-extrabold text-[#e11d48] tracking-tighter">cbm</span>
      <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] -mt-3"></div>
    </div>,
    // 8. roundglass
    <div key="roundglass" className="flex items-center gap-2 shrink-0 px-8 transition-all hover:scale-105 cursor-pointer">
      <div className="w-5 h-5 rounded-full border-[3.5px] border-[#16a34a]"></div>
      <div className="flex flex-col leading-[0.9]">
        <span className="text-sm font-bold text-[#16a34a]">roundglass</span>
        <span className="text-[11px] font-bold text-[#16a34a]">foundation</span>
      </div>
    </div>,
    // 9. MEDCELL
    <div key="medcell" className="shrink-0 px-8 transition-all hover:scale-105 cursor-pointer">
      <div className="bg-[#1e3a8a] px-3.5 py-1.5 rounded-sm flex items-center justify-center shadow-sm">
        <span className="text-sm font-bold text-white tracking-widest">MEDCELL</span>
      </div>
    </div>
  ];

  // Duplicate the logos array so the marquee loops seamlessly
  const marqueeContent = [...logos, ...logos, ...logos];

  return (
    <section className="pt-16 sm:pt-20 pb-4 sm:pb-6 bg-[#FAF8F5] border-t overflow-hidden relative">
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333333%); }
          }
          .animate-infinite-scroll {
            display: flex;
            width: max-content;
            animation: scroll 35s linear infinite;
          }
          .animate-infinite-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>
      
      <div className="max-w-4xl mx-auto mb-14 px-4 text-center">
        <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#EB5E28] mb-4 block">
          OUR PARTNERS
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1a1a1a] tracking-tight mb-4">
          Partners in Progress.
        </h2>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          EKhum connects mission-driven organizations, donors, CSR teams, and institutions to make giving more transparent, efficient, and impactful.
        </p>
      </div>

      {/* Marquee Track */}
      <div className="w-full relative flex items-center overflow-hidden py-4">
        {/* Left/Right fading gradients for a seamless look */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-[#FAF8F5] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-[#FAF8F5] to-transparent z-10 pointer-events-none"></div>
        
        <div className="animate-infinite-scroll flex items-center">
          {marqueeContent}
        </div>
      </div>

    </section>
  );
};
