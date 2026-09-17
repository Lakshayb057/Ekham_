const fs = require('fs');
let w = fs.readFileSync('src/components/WorkflowSection.tsx', 'utf8');

if (!w.includes('RoadmapLoop')) {
  w = w.replace(/import React from 'react';/, "import React, { useState, useEffect } from 'react';\nimport { motion } from 'framer-motion';");
  
  const loopCode = `
const RoadmapLoop: React.FC<{ timelineSteps: any[] }> = ({ timelineSteps }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % timelineSteps.length);
    }, 1000);
    return () => clearInterval(timer);
  }, [timelineSteps.length]);

  return (
    <div className="overflow-x-auto pb-1 pt-3 scrollbar-none">
      <div className="flex items-center justify-between min-w-[980px] gap-1 relative px-1">
        {timelineSteps.map((step, idx) => {
          const Icon = step.icon;
          const isEven = idx % 2 === 1;
          return (
            <React.Fragment key={idx}>
              <div className="flex flex-col items-center text-center flex-1 max-w-[102px] group hover:-translate-y-0.5 transition-transform">
                <motion.div 
                  animate={{ 
                    scale: idx === activeIndex ? 1.5 : 1, 
                    boxShadow: idx === activeIndex ? '0 0 20px rgba(244,81,42,0.8)' : 'none' 
                  }} 
                  transition={{ duration: 0.4 }} 
                  className={\`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mb-1 shadow-xs transition-all \${
                  isEven 
                    ? 'bg-[#F4512A]/15 text-[#F4512A] border-2 border-[#F4512A]/35 group-hover:bg-[#F4512A] group-hover:text-white' 
                    : 'bg-[#153D2B]/15 text-[#153D2B] border-2 border-[#153D2B]/35 group-hover:bg-[#153D2B] group-hover:text-white'
                }\`}>
                  <Icon className="w-4 h-4 stroke-[2.4]" />
                </motion.div>
                <div className="flex items-center gap-1 justify-center">
                  <span className="text-[9.5px] font-mono font-black text-gray-500">{step.num}</span>
                  <h5 className="text-[10px] font-black text-[#102126] leading-tight truncate">{step.title}</h5>
                </div>
                <p className="text-[8.5px] text-[#687176] leading-tight font-medium line-clamp-2 mt-0.5">{step.desc}</p>
              </div>
              {idx < timelineSteps.length - 1 && (
                <div className="flex items-center justify-center text-[#B5ABA0] select-none flex-shrink-0 -mt-3">
                  <span className="text-[10px] font-mono font-bold tracking-tighter opacity-90">- -›</span>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
`;

  w = w.replace(/export const WorkflowSection/, loopCode + '\nexport const WorkflowSection');
  
  // Replace the original scrollable div with RoadmapLoop
  const startStr = '<div className="overflow-x-auto pb-1 pt-3 scrollbar-none">';
  const endStr = '</div>\n          </div>\n        </div>\n\n        {/* =========================================================================\n            5. TRUST OR CLOSING LOGO';
  const sIdx = w.indexOf(startStr);
  const eIdx = w.indexOf(endStr);
  if (sIdx > -1 && eIdx > -1) {
    w = w.substring(0, sIdx) + '<RoadmapLoop timelineSteps={timelineSteps} />\n          ' + w.substring(eIdx);
  }

  // Animate stages dropping in
  w = w.replace(
    /<div className="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-16 lg:mb-24 relative z-10">/,
    `<motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={{ visible: { transition: { staggerChildren: 0.2 } } }} className="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-16 lg:mb-24 relative z-10">`
  );

  w = w.replace(
    /<div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-\[\#E2DAD0\] relative flex flex-col h-full min-h-\[320px\]">/g,
    `<motion.div variants={{ hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60, damping: 14 } } }} className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E2DAD0] relative flex flex-col h-full min-h-[320px]">`
  );

  w = w.replace(
    /<div className="bg-\[\#153D2B\] rounded-3xl p-6 sm:p-8 shadow-xl border border-\[\#2E5A44\] relative flex flex-col h-full min-h-\[320px\]">/g,
    `<motion.div variants={{ hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60, damping: 14 } } }} className="bg-[#153D2B] rounded-3xl p-6 sm:p-8 shadow-xl border border-[#2E5A44] relative flex flex-col h-full min-h-[320px]">`
  );

  w = w.replace(/<\/div>\n\n            \{\/\* Stage 2/g, '</motion.div>\n\n            {/* Stage 2');
  w = w.replace(/<\/div>\n\n            \{\/\* Stage 3/g, '</motion.div>\n\n            {/* Stage 3');
  w = w.replace(/<\/div>\n          <\/div>\n\n          \{\/\* =========================================================================/g, '</motion.div>\n          </motion.div>\n\n          {/* =========================================================================');

  // Fix Stage 3 colors back to white theme
  w = w.replace(
    /<h4 className="text-lg sm:text-xl font-black text-\[\#102126\] tracking-tight mb-4 sm:mb-6 uppercase">\n                <span className="text-\[\#F4512A\]">3\.<\/span> Engage/g,
    `<h4 className="text-lg sm:text-xl font-black text-[#102126] tracking-tight mb-4 sm:mb-6 uppercase">\n                <span className="text-[#F4512A]">3.</span> Engage`
  );

  fs.writeFileSync('src/components/WorkflowSection.tsx', w);
}
