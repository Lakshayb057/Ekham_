const fs = require('fs');

function restoreProblemSection() {
  let c = fs.readFileSync('src/components/ProblemSection.tsx', 'utf8');

  // Add useState and useEffect
  if (!c.includes('useState')) {
    c = c.replace(/import React from 'react';/, "import React, { useState, useEffect } from 'react';");
  }

  // Add activeComparisonIndex state
  if (!c.includes('const [activeComparisonIndex')) {
    c = c.replace(
      'export const ProblemSection: React.FC<ProblemSectionProps> = ({ \n  onOpenDemoModal, \n  onLearnMore \n}) => {',
      `export const ProblemSection: React.FC<ProblemSectionProps> = ({ 
  onOpenDemoModal, 
  onLearnMore 
}) => {
  const [activeComparisonIndex, setActiveComparisonIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveComparisonIndex((prev) => (prev + 1) % 6);
    }, 1500);
    return () => clearInterval(timer);
  }, []);`
    );
  }

  // Fix Problem Cards overlap
  c = c.replace(
    /className="bg-\[\#F1EEE7\] hover:bg-\[\#EAE4DC\] rounded-2xl/g,
    'style={{ zIndex: 10 - idx, position: "relative" }} className="bg-[#F1EEE7] hover:bg-[#EAE4DC] rounded-2xl'
  );

  // Animate Left Panel (Desktop)
  c = c.replace(
    /<div className="bg-\[\#F1EEE7\] border border-\[\#E2DAD0\] rounded-3xl p-5 relative flex flex-col justify-center h-full min-h-\[185px\]">/,
    `<motion.div 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ type: "spring" as any, stiffness: 60, damping: 14 }}
              className="bg-[#F1EEE7] border border-[#E2DAD0] rounded-3xl p-5 relative flex flex-col justify-center h-full min-h-[185px]"
            >`
  );
  c = c.replace(
    /<\/div>\s*\{\/\* ---------------- CENTER COMPARISON INDICATOR ---------------- \*\/\}/,
    `</motion.div>\n\n            {/* ---------------- CENTER COMPARISON INDICATOR ---------------- */}`
  );

  // Animate Right Panel (Desktop)
  c = c.replace(
    /<div className="bg-\[\#153D2B\] border border-\[\#1F543C\] rounded-3xl p-5 relative shadow-md flex flex-col justify-center h-full min-h-\[185px\] overflow-hidden">/,
    `<motion.div 
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ type: "spring" as any, stiffness: 60, damping: 14 }}
              className="bg-[#153D2B] border border-[#1F543C] rounded-3xl p-5 relative shadow-md flex flex-col justify-center h-full min-h-[185px] overflow-hidden"
            >`
  );
  
  // Need to replace the exact correct closing div for Right Panel.
  c = c.replace(
    /                <\/div>\n              <\/div>\n            <\/div>\n          <\/div>\n\n          \{\/\* Main Comparison Layout: MOBILE/,
    '                </div>\n              </div>\n            </motion.div>\n          </div>\n\n          {/* Main Comparison Layout: MOBILE'
  );

  // Highlight nodes Desktop
  c = c.replace(
    /<div className="w-\[58px\] xl:w-\[64px\] h-\[60px\] xl:h-\[66px\] bg-white rounded-xl border border-\[\#E0D8CC\] shadow-2xs flex flex-col items-center justify-center p-1 text-center">/g,
    `<div className={\`w-[58px] xl:w-[64px] h-[60px] xl:h-[66px] bg-white rounded-xl border flex flex-col items-center justify-center p-1 text-center transition-all duration-300 \${idx === activeComparisonIndex ? 'border-[#F4512A] shadow-[0_0_15px_rgba(244,81,42,0.4)] scale-110 z-20 relative' : 'border-[#E0D8CC] shadow-2xs scale-100 z-10'}\`}>`
  );

  c = c.replace(
    /<div className="w-\[50px\] xl:w-\[56px\] h-\[54px\] xl:h-\[60px\] bg-white rounded-xl shadow-xs border border-white flex flex-col items-center justify-center p-0\.5 text-center group hover:scale-105 transition-transform">/g,
    `<div className={\`w-[50px] xl:w-[56px] h-[54px] xl:h-[60px] bg-white rounded-xl shadow-xs border flex flex-col items-center justify-center p-0.5 text-center group transition-all duration-300 \${idx === activeComparisonIndex ? 'border-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.5)] scale-110 z-20 relative' : 'border-white scale-100 z-10'}\`}>`
  );

  // Highlight nodes Mobile
  c = c.replace(
    /<div className="w-7 h-7 sm:w-\[50px\] sm:h-\[50px\] bg-white rounded-lg sm:rounded-2xl border border-\[\#E0D8CC\] flex items-center justify-center text-center shadow-xs">/g,
    `<div className={\`w-7 h-7 sm:w-[50px] sm:h-[50px] bg-white rounded-lg sm:rounded-2xl border flex items-center justify-center text-center transition-all duration-300 \${idx === activeComparisonIndex ? 'border-[#F4512A] shadow-[0_0_10px_rgba(244,81,42,0.4)] scale-110 z-20 relative' : 'border-[#E0D8CC] shadow-xs scale-100 z-10'}\`}>`
  );

  c = c.replace(
    /<div className="w-7 h-7 sm:w-\[50px\] sm:h-\[50px\] bg-white rounded-lg sm:rounded-2xl shadow-sm border border-white flex items-center justify-center text-center group-hover:scale-105 transition-transform">/g,
    `<div className={\`w-7 h-7 sm:w-[50px] sm:h-[50px] bg-white rounded-lg sm:rounded-2xl shadow-sm border flex items-center justify-center text-center transition-all duration-300 \${idx === activeComparisonIndex ? 'border-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)] scale-110 z-20 relative' : 'border-white scale-100 z-10'}\`}>`
  );

  fs.writeFileSync('src/components/ProblemSection.tsx', c);
  console.log('Restored ProblemSection');
}

restoreProblemSection();
