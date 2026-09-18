import React from 'react';
import { ArrowRight, Play, Check } from 'lucide-react';
import { HeroImpactSlider } from './HeroImpactSlider';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  onOpenDemoModal: () => void;
  onOpenStoryModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  onOpenDemoModal, 
  onOpenStoryModal 
}) => {
  return (
    <section id="hero" className="relative pt-[60px] pb-0 overflow-hidden bg-[#FAF8F5] flex-grow flex flex-col justify-center">
      
      {/* Decorative Organic Muted Green Leaf on Bottom-Left Margin */}
      <div className="absolute bottom-2 left-0 w-24 sm:w-32 h-36 sm:h-44 bg-[#9AA99B]/30 rounded-[40%_60%_30%_70%/60%_30%_70%_40%] pointer-events-none transform -rotate-12 -translate-x-6 z-0"></div>

      {/* Main Full-Bleed Flex Layout */}
      <div className="w-full flex-grow flex flex-col lg:flex-row items-stretch min-h-[440px]">
        
        {/* Left Column (Content) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.1 }}
          className="w-full lg:w-[47%] xl:w-[45%] flex flex-col justify-center px-4 sm:px-10 lg:pl-14 xl:pl-20 lg:pr-4 py-3 sm:py-8 lg:py-4 z-20 flex-shrink-0"
        >
          
          {/* Eyebrow - Plain text only (no bullet dot) */}
          <div className="mb-2 sm:mb-3.5">
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#EB5E28] uppercase">
              A KINDER. STRONGER. BRIGHTER FUTURE.
            </span>
          </div>

          {/* Main Headline - Increased font size */}
          <h1 className="text-4xl sm:text-6xl lg:text-[3.9rem] xl:text-[4.5rem] font-black text-[#14201A] tracking-[-0.04em] leading-[1.03] mb-3 sm:mb-5">
            Good<br />
            Deserve <span className="text-[#EB5E28]">Better.</span>
          </h1>

          {/* Supporting Paragraph */}
          <p className="text-[11.5px] sm:text-sm md:text-[14.5px] lg:text-[15px] text-[#4A5550] leading-[1.5] max-w-lg mb-4 sm:mb-6 font-normal">
            EKhum connects fundraising, donations, donors, campaigns, compliance, reporting, AI, and analytics on one intelligent platform — so charities can focus less on fragmented operations and more on creating meaningful impact.
          </p>

          {/* CTAs with tactile depth & micro-interactions */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
            <button
              onClick={onOpenDemoModal}
              className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 text-xs sm:text-sm font-semibold text-white bg-[#EB5E28] hover:bg-[#D84E1A] rounded-full shadow-[0_4px_16px_rgba(235,94,40,0.32)] hover:shadow-[0_6px_22px_rgba(235,94,40,0.42)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={onOpenStoryModal}
              className="group inline-flex items-center gap-2.5 px-5 sm:px-6 py-3 text-xs sm:text-sm font-semibold text-[#1C2421] bg-white hover:bg-[#FAF8F5] border border-[#DDD5C9] hover:border-[#CFC4B5] rounded-full shadow-[0_2px_8px_rgba(20,32,26,0.04)] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <div className="w-5 h-5 rounded-full bg-[#EB5E28]/10 group-hover:bg-[#EB5E28] flex items-center justify-center text-[#EB5E28] group-hover:text-white transition-colors duration-200">
                <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
              </div>
              <span>Watch Our Story</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex justify-between items-center w-full pt-3 sm:pt-4 border-t border-[#E8E2D8] text-[8.5px] sm:text-xs font-semibold text-[#3D4842]">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#2A724E]/12 flex items-center justify-center text-[#2A724E] flex-shrink-0">
                <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 stroke-[3]" />
              </div>
              <span>100% Charity-Owned Data</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5">
              <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#2A724E]/12 flex items-center justify-center text-[#2A724E] flex-shrink-0">
                <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 stroke-[3]" />
              </div>
              <span>Instant 80G Certificates</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5">
              <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#2A724E]/12 flex items-center justify-center text-[#2A724E] flex-shrink-0">
                <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 stroke-[3]" />
              </div>
              <span>Built for NGOs</span>
            </div>
          </div>

        </motion.div>

        {/* Right Column: Full-bleed image touching navbar bottom and right edge without boundaries */}
        <div className="w-full lg:w-[54%] xl:w-[56%] relative flex-grow flex items-stretch z-10 overflow-hidden">
          <HeroImpactSlider />
        </div>

      </div>
    </section>
  );
};
