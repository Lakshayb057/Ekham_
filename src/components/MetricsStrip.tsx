import React from 'react';
import { Building2, Heart, Users, FileCheck } from 'lucide-react';

export const MetricsStrip: React.FC = () => {
  const metrics = [
    {
      icon: Building2,
      value: '1,000+',
      label: 'NGOs Empowered',
    },
    {
      icon: Heart,
      value: '₹500Cr+',
      label: 'Donations Processed',
    },
    {
      icon: Users,
      value: '5M+',
      label: 'Donors Connected',
    },
    {
      icon: FileCheck,
      value: '99.9%',
      label: 'Compliance Ready',
    },
  ];

  return (
    <section className="w-full bg-[#14201A] text-white py-5 sm:py-6 lg:py-7 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-[#23352D]/80">
      
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-80 h-28 bg-[#EB5E28]/12 blur-2xl pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 relative z-10">
        
        {/* Left Tagline - Prominent & Properly Aligned */}
        <div className="w-full lg:w-auto text-left flex-shrink-0">
          <span className="text-sm sm:text-base lg:text-[16.5px] font-black uppercase tracking-[0.16em] text-white/95 block leading-snug">
            A GROWING ECOSYSTEM<br />OF CHANGE
          </span>
        </div>

        {/* Middle 4 Metrics - Generous Spacing Between Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 lg:gap-14 xl:gap-16 flex-grow w-full justify-items-start sm:justify-items-center">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3.5 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-[#EB5E28] group-hover:bg-[#EB5E28] group-hover:text-white transition-all duration-300">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-[30px] font-black text-white tracking-tight leading-none">
                    {item.value}
                  </div>
                  <div className="text-xs sm:text-[13px] text-gray-300 font-medium mt-1 whitespace-nowrap">
                    {item.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
