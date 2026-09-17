import React from 'react';
import { ArrowRight, MessageCircle, Users, Leaf, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

interface FinalCTAProps {
  onOpenDemoModal: () => void;
  onOpenContactModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenDemoModal, onOpenContactModal }) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { type: "spring" as any, stiffness: 60, damping: 15 }
    },
  };

  return (
    <section className="relative w-full bg-[#0F1614] overflow-hidden font-sans">
      
      {/* Background Image & Overlay */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[60%] z-0 pointer-events-none">
        <img 
          src="/smiling_indian_girl_cta.png" 
          alt="Smiling Indian Girl" 
          className="w-full h-full object-cover object-center contrast-125 brightness-110"
        />
        {/* Gradient to seamlessly blend the edge of the image into the solid dark background */}
        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#0F1614] via-[#0F1614]/70 lg:via-[#0F1614]/60 to-transparent"></div>
        {/* Vertical gradient to soften top and bottom edges */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1614] via-transparent to-[#0F1614]/30"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 pt-20 pb-36 sm:pb-12 lg:pt-28 lg:pb-12 flex flex-col lg:flex-row justify-between h-full min-h-[650px] sm:min-h-[580px]">
        
        {/* Left Content */}
        <motion.div 
          className="w-full lg:w-3/5 flex flex-col justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-4">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#EB5E28]">
              THE NEXT CHAPTER STARTS HERE
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-5xl xl:text-5xl font-black text-white leading-[1.05] tracking-tight mb-3 lg:pr-20">
            A Kinder, Stronger India<br />
            Starts with <span className="text-[#EB5E28]">Connected Giving.</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-sm sm:text-base text-gray-400 max-w-lg mb-5 leading-relaxed">
            Join the organizations, donors, and partners making philanthropy more transparent, efficient, and impactful with EKhum.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
            <button onClick={onOpenDemoModal} className="bg-[#EB5E28] hover:bg-[#D84E1A] text-white px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-full font-bold flex items-center justify-center gap-1.5 sm:gap-2 transition-colors text-xs sm:text-sm w-full sm:w-auto">
              Get Started Today
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
            <button onClick={onOpenContactModal} className="bg-transparent border border-gray-600 hover:border-gray-400 text-white px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-full font-bold flex items-center justify-center gap-1.5 sm:gap-2 transition-colors text-xs sm:text-sm w-full sm:w-auto">
              <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Talk to Our Team
            </button>
          </motion.div>

          {/* Metrics Row */}
          <motion.div variants={itemVariants} className="flex flex-row items-center justify-between sm:justify-start gap-1 sm:gap-8 w-full">
            <div className="flex items-center gap-1.5 sm:gap-3">
              <Users className="w-4 h-4 sm:w-6 sm:h-6 text-gray-400 shrink-0" />
              <span className="text-[9px] sm:text-xs text-gray-300 font-semibold leading-tight">Stronger<br/>Communities</span>
            </div>
            <div className="h-6 sm:h-8 w-px bg-gray-700 shrink-0"></div>
            <div className="flex items-center gap-1.5 sm:gap-3">
              <Leaf className="w-4 h-4 sm:w-6 sm:h-6 text-gray-400 shrink-0" />
              <span className="text-[9px] sm:text-xs text-gray-300 font-semibold leading-tight">More<br/>Transparency</span>
            </div>
            <div className="h-6 sm:h-8 w-px bg-gray-700 shrink-0"></div>
            <div className="flex items-center gap-1.5 sm:gap-3">
              <BarChart3 className="w-4 h-4 sm:w-6 sm:h-6 text-gray-400 shrink-0" />
              <span className="text-[9px] sm:text-xs text-gray-300 font-semibold leading-tight">Greater<br/>Impact</span>
            </div>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
};
