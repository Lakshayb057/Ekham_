const fs = require('fs');
let w = fs.readFileSync('src/components/ProblemSection.tsx', 'utf8');

// 1. Add motion if not there
if (!w.includes('framer-motion')) {
  w = w.replace("import React from 'react';", "import React, { useState, useEffect } from 'react';\nimport { motion } from 'framer-motion';");
}

// 2. Add the component right before ProblemSection
const compScannerCode = `
const ComparisonScanner = ({ traditionalNodes, ekhumNodes }) => {
  const [activeComparisonIndex, setActiveComparisonIndex] = React.useState(0);

  React.useEffect(() => {
    const maxLen = Math.max(traditionalNodes.length, ekhumNodes.length);
    const interval = setInterval(() => {
      setActiveComparisonIndex(prev => (prev + 1) % maxLen);
    }, 1500);
    return () => clearInterval(interval);
  }, [traditionalNodes.length, ekhumNodes.length]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mt-6 max-w-[1020px] mx-auto w-full px-2 sm:px-0">
      
      {/* Traditional Side */}
      <motion.div 
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 50, damping: 15 }}
        viewport={{ once: false }}
        className="bg-[#EAE4DC] border border-[#DDD5C9] rounded-3xl p-5 relative shadow-sm flex flex-col justify-center h-full min-h-[185px] overflow-hidden"
      >
        <div className="absolute top-0 left-1/4 w-32 h-10 bg-[#B5ABA0]/30 blur-2xl pointer-events-none rounded-full"></div>
        <div className="relative z-10">
          <div className="mb-3.5 flex justify-between items-start gap-2">
            <div>
              <h3 className="text-sm font-bold text-[#102126] tracking-tight mb-0.5">
                Traditional Methods
              </h3>
              <p className="text-xs text-[#687176] font-normal">
                Scattered tools. Data silos. Vendor dependence. High costs.
              </p>
            </div>
            <div className="text-[#687176] font-black text-xs uppercase tracking-widest text-right shrink-0 mt-1">
              Siloed
            </div>
          </div>

          <div className="flex items-center justify-between gap-1 overflow-visible pb-1">
            {traditionalNodes.map((node, idx) => {
              const Icon = node.icon;
              return (
                <React.Fragment key={idx}>
                  <div className="flex flex-col items-center flex-shrink-0">
                    <motion.div 
                      animate={{ opacity: activeComparisonIndex === idx ? 1 : 0.6, scale: activeComparisonIndex === idx ? 1.05 : 1, y: activeComparisonIndex === idx ? -2 : 0 }}
                      className="w-[50px] xl:w-[56px] h-[54px] xl:h-[60px] bg-white rounded-xl shadow-xs border border-[#DDD5C9] flex flex-col items-center justify-center p-0.5 text-center relative"
                    >
                      {activeComparisonIndex === idx && (
                        <div className="absolute inset-0 ring-2 ring-[#D8411C] rounded-xl ring-offset-1 pointer-events-none bg-red-500/5"></div>
                      )}
                      <Icon className="w-4 h-4 text-[#687176] stroke-[2.2] mb-0.5" />
                      <span className="text-[8.5px] font-bold text-[#687176] leading-tight text-center">
                        {node.label}
                      </span>
                    </motion.div>
                  </div>
                  {idx < traditionalNodes.length - 1 && (
                    <div className="flex items-center justify-center text-[#B5ABA0] select-none px-0.5 flex-shrink-0">
                      <span className="text-[11px] font-bold text-[#B5ABA0]">&#8594;</span>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          <div className="relative w-full h-8 mt-1 border-t-2 border-dashed border-[#B5ABA0] pt-2 flex justify-center items-center gap-2">
            <span className="text-[10px] font-bold text-[#F4512A] uppercase tracking-widest bg-[#F4512A]/10 px-2 py-0.5 rounded border border-[#F4512A]/20">
              Data Loss & Delays
            </span>
          </div>
        </div>
      </motion.div>

      {/* EKhum Side */}
      <motion.div 
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 50, damping: 15 }}
        viewport={{ once: false }}
        className="bg-[#153D2B] border border-[#1F543C] rounded-3xl p-5 relative shadow-md flex flex-col justify-center h-full min-h-[185px] overflow-hidden"
      >
        <div className="absolute top-0 right-1/4 w-48 h-12 bg-[#F4512A]/15 blur-xl pointer-events-none rounded-full"></div>
        <div className="relative z-10">
          <div className="mb-3.5 flex justify-between items-start gap-2">
            <div>
              <h3 className="text-sm font-bold text-white tracking-tight mb-0.5">
                With EKhum
              </h3>
              <p className="text-xs text-emerald-100/85 font-normal">
                One connected platform. Complete ownership. Real-time visibility.
              </p>
            </div>
            <div className="text-[#F4512A] font-black text-xs uppercase tracking-widest text-right shrink-0 mt-1">
              One Platform
            </div>
          </div>

          <div className="flex items-center justify-between gap-1 overflow-visible pb-0 relative z-10">
            {ekhumNodes.map((node, idx) => {
              const Icon = node.icon;
              return (
                <React.Fragment key={idx}>
                  <div className="flex flex-col items-center flex-shrink-0">
                    <motion.div 
                      animate={{ opacity: activeComparisonIndex === idx ? 1 : 0.8, scale: activeComparisonIndex === idx ? 1.05 : 1, y: activeComparisonIndex === idx ? -2 : 0 }}
                      className="w-[50px] xl:w-[56px] h-[54px] xl:h-[60px] bg-white rounded-xl shadow-xs border border-white flex flex-col items-center justify-center p-0.5 text-center relative"
                    >
                      {activeComparisonIndex === idx && (
                        <div className="absolute inset-0 ring-2 ring-[#4ADE80] rounded-xl ring-offset-1 pointer-events-none bg-emerald-500/10"></div>
                      )}
                      <Icon className="w-4 h-4 text-[#F4512A] stroke-[2.2] mb-0.5" />
                      <span className="text-[8.5px] font-bold text-[#102126] leading-tight text-center">
                        {node.label}
                      </span>
                    </motion.div>
                  </div>
                  {idx < ekhumNodes.length - 1 && (
                    <div className="flex items-center justify-center text-white/60 select-none px-0.5 flex-shrink-0">
                      <span className="text-[11px] font-bold text-white/70">&#8594;</span>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          <div className="relative w-full h-6 my-1 pointer-events-none block">
            <svg className="w-full h-full text-[#F4512A]" viewBox="0 0 360 24" fill="none" preserveAspectRatio="none">
              <line x1="28" y1="0" x2="28" y2="8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
              <line x1="88" y1="0" x2="88" y2="8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
              <line x1="148" y1="0" x2="148" y2="8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
              <line x1="212" y1="0" x2="212" y2="8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
              <line x1="272" y1="0" x2="272" y2="8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
              <line x1="332" y1="0" x2="332" y2="8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
              <path d="M 18 8 Q 53 14, 88 8 T 148 8 T 212 8 T 272 8 T 342 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M 180 8 C 180 14, 180 18, 180 24" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
            </svg>
          </div>

          <div className="flex items-center justify-center gap-2 mt-1.5">
            <div className="relative w-5 h-5 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#F4512A] animate-[spin_10s_linear_infinite]">
                <line x1="18" y1="4" x2="18" y2="32" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
                <line x1="4" y1="18" x2="32" y2="18" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
                <line x1="8.1" y1="8.1" x2="27.9" y2="27.9" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
                <line x1="27.9" y1="8.1" x2="8.1" y2="27.9" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 m-auto w-2.5 h-2.5 bg-[#F4512A] rounded-full border border-white"></div>
            </div>
            <span className="text-[10px] font-bold text-white uppercase tracking-widest text-center shadow-sm">
              Integrated CRM & Growth Engine
            </span>
          </div>

        </div>
      </motion.div>
    </div>
  );
};
`;

if (!w.includes('ComparisonScanner')) {
  w = w.replace('export const ProblemSection', compScannerCode + '\nexport const ProblemSection');
}

// 3. Replace the actual grid of the 2 columns
const sIdx = w.indexOf('<div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mt-6 max-w-[1020px] mx-auto w-full px-2 sm:px-0">');
if (sIdx > -1) {
  const endMarker = '          </div>\n\n        </div>\n      </motion.div>\n    </div>'; // No wait, let me just replace exactly up to " Integrated CRM & Growth Engine"
  const targetEnd = w.indexOf('Integrated CRM & Growth Engine', sIdx);
  if (targetEnd > -1) {
    const realEnd = w.indexOf('</div>\n      </div>\n    </div>', targetEnd);
    if (realEnd > -1) {
      w = w.substring(0, sIdx) + '<ComparisonScanner traditionalNodes={traditionalNodes} ekhumNodes={ekhumNodes} />\n' + w.substring(realEnd + 29);
      console.log("REPLACED COMPARISON GRID");
    }
  }
}

// 4. Also fix the problem cards stagger animation
// <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5">
w = w.replace(
  '<div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5">',
  '<motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={{ visible: { transition: { staggerChildren: 0.15 } } }} className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5 relative">'
);

w = w.replace(
  /className="bg-\[\#F1EEE7\] hover:bg-\[\#EAE4DC\] rounded-2xl p-3\.5 sm:p-4 flex flex-col justify-start border border-\[\#E2DAD0\] shadow-2xs hover:shadow-xs hover:-translate-y-0\.5 transition-all duration-200 min-h-\[110px\] sm:min-h-\[120px\]"/g,
  'variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { type: \'spring\', stiffness: 50, damping: 15 } } }} style={{ zIndex: problems.length - idx, position: \'relative\' }} className="bg-[#F1EEE7] hover:bg-[#EAE4DC] rounded-2xl p-3.5 sm:p-4 flex flex-col justify-start border border-[#E2DAD0] shadow-2xs min-h-[110px] sm:min-h-[120px]"'
);

w = w.replace(
  /return \(\n\s*<div\n\s*key={idx}\n\s*variants=\{\{ hidden:/g,
  'return (\n                  <motion.div\n                    key={idx}\n                    variants={{ hidden:'
);

w = w.replace(/<\/p>\n\s*<\/div>\n\s*\);\n\s*\}\)/g, '</p>\n                  </motion.div>\n                );\n              })');
w = w.replace(/<\/div>\n          <\/div>\n\n        <\/div>\n\n        \{\/\* =========================================================================\n            2\. THE EKhum SOLUTION/g, '</motion.div>\n          </div>\n\n        </div>\n\n        {/* =========================================================================\n            2. THE EKhum SOLUTION');

fs.writeFileSync('src/components/ProblemSection.tsx', w);
