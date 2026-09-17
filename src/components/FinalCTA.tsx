import React from 'react';
import { ArrowRight, MessageCircle, Users, Leaf, BarChart3 } from 'lucide-react';

interface FinalCTAProps {
  onOpenDemoModal: () => void;
  onOpenContactModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenDemoModal, onOpenContactModal }) => {
  return (
    <section className="relative w-full bg-[#0F1614] overflow-hidden font-sans">
      
      {/* Background Image & Overlay */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[60%] z-0 pointer-events-none">
        <img 
          src="/smiling_indian_girl_cta.png" 
          alt="Smiling Indian Girl" 
          className="w-full h-full object-cover object-center contrast-125 brightness-110"
        />
        {/* Gradient to seamlessly blend the left edge of the image into the solid dark background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1614] via-[#0F1614]/60 to-transparent"></div>
        {/* Vertical gradient to soften top and bottom edges */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1614] via-transparent to-[#0F1614]/30"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 pt-20 pb-12 lg:pt-28 lg:pb-12 flex flex-col lg:flex-row justify-between h-full min-h-[580px]">
        
        {/* Left Content */}
        <div className="w-full lg:w-3/5 flex flex-col justify-center">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#EB5E28]">
              THE NEXT CHAPTER STARTS HERE
            </span>
            <div className="h-[1px] w-12 bg-gray-600"></div>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-5xl xl:text-5xl font-black text-white leading-[1.05] tracking-tight mb-3 lg:pr-20">
            A Kinder, Stronger India<br />
            Starts with <span className="text-[#EB5E28]">Connected Giving.</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-400 max-w-lg mb-5 leading-relaxed">
            Join the organizations, donors, and partners making philanthropy more transparent, efficient, and impactful with EKhum.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <button onClick={onOpenDemoModal} className="bg-[#EB5E28] hover:bg-[#D84E1A] text-white px-6 py-3.5 rounded-full font-bold flex items-center justify-center gap-2 transition-colors text-sm w-full sm:w-auto">
              Get Started Today
              <ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={onOpenContactModal} className="bg-transparent border border-gray-600 hover:border-gray-400 text-white px-6 py-3.5 rounded-full font-bold flex items-center justify-center gap-2 transition-colors text-sm w-full sm:w-auto">
              <MessageCircle className="w-4 h-4" />
              Talk to Our Team
            </button>
          </div>

          {/* Metrics Row */}
          <div className="flex flex-wrap items-center gap-8 border-t border-gray-700/50 pt-6">
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-gray-400" />
              <span className="text-xs text-gray-300 font-semibold leading-tight">Stronger<br/>Communities</span>
            </div>
            <div className="h-8 w-[1px] bg-gray-700 hidden sm:block"></div>
            <div className="flex items-center gap-3">
              <Leaf className="w-6 h-6 text-gray-400" />
              <span className="text-xs text-gray-300 font-semibold leading-tight">More<br/>Transparency</span>
            </div>
            <div className="h-8 w-[1px] bg-gray-700 hidden sm:block"></div>
            <div className="flex items-center gap-3">
              <BarChart3 className="w-6 h-6 text-gray-400" />
              <span className="text-xs text-gray-300 font-semibold leading-tight">Greater<br/>Impact</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
