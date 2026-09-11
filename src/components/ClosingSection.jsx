import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ClosingSection({ onOpenDemo }) {
  return (
    <section className="bg-[#f5f3ed] py-8 sm:py-12 px-4 sm:px-8 lg:px-12 relative select-none">
      <div className="max-w-[1360px] mx-auto">
        
        {/* Spacious Floating Gradient Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden bg-gradient-to-br from-[#e95126] via-[#ee592e] to-[#c73910] text-white px-5 xs:px-8 sm:px-14 lg:px-18 py-10 xs:py-14 sm:py-20 lg:py-24 min-h-[240px] sm:min-h-[300px] flex flex-col justify-center shadow-[0_25px_55px_rgba(233,81,38,0.25)]"
        >
          {/* Subtle Ambient Mesh Radial Glows */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/18 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-black/25 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(255,255,255,0.18)_0%,transparent_60%)] pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 xs:gap-8 sm:gap-10">
            
            {/* Minimal Punchy Headline */}
            <div className="space-y-2.5 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[10px] xs:text-[11px] font-bold uppercase tracking-widest text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span>The next chapter of your good work</span>
              </div>

              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.15] text-white">
                Good deserves better. <span className="text-[#ffe0d1] font-normal block sm:inline">Let’s make it happen.</span>
              </h2>
            </div>

            {/* Interactive CTA Button */}
            <div className="w-full sm:w-auto shrink-0 pt-2 md:pt-0">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenDemo}
                className="w-full sm:w-auto group flex items-center justify-center gap-3 bg-white hover:bg-[#fff7f2] text-[#e95126] px-6 xs:px-7 py-3.5 sm:px-8 sm:py-4.5 rounded-full font-bold text-sm sm:text-base shadow-lg transition-all duration-200 cursor-pointer min-h-[48px]"
                aria-label="Book an Ekhum demo"
              >
                <span>Book a demo</span>
                <span className="w-7 h-7 xs:w-8 xs:h-8 rounded-full bg-[#e95126] text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-300 shrink-0">
                  <ArrowRight className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
                </span>
              </motion.button>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
