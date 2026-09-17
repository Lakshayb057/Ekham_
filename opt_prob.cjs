const fs = require('fs');
let c = fs.readFileSync('src/components/ProblemSection.tsx', 'utf8');

if (!c.includes('ComparisonNodes')) {
  const compCode = `const ComparisonNodes: React.FC<{ traditionalNodes: any[], ekhumNodes: any[] }> = ({ traditionalNodes, ekhumNodes }) => {
  const [activeComparisonIndex, setActiveComparisonIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveComparisonIndex((prev) => (prev + 1) % 6);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="hidden lg:grid grid-cols-[1fr_auto_1.15fr] items-center gap-4 mb-5">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ type: 'spring' as any, stiffness: 60, damping: 14 }}
          className="bg-[#F1EEE7] border border-[#E2DAD0] rounded-3xl p-5 relative flex flex-col justify-center h-full min-h-[185px]"
        >
          <div className="mb-3.5 flex justify-between items-start gap-2">
            <div>
              <h3 className="text-sm font-bold text-[#102126] tracking-tight mb-0.5">
                Traditional Charity Operations
              </h3>
              <p className="text-xs text-[#687176] font-medium">
                Disconnected tools. Manual work. Limited visibility.
              </p>
            </div>
            <div className="text-[#F4512A] font-black text-xs uppercase tracking-widest text-right shrink-0 mt-1">
              Many Tools
            </div>
          </div>

          <div className="flex items-center justify-between gap-1 overflow-visible pb-0">
            {traditionalNodes.map((node, idx) => {
              const Icon = node.icon;
              return (
                <React.Fragment key={idx}>
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className={\`w-[58px] xl:w-[64px] h-[60px] xl:h-[66px] bg-white rounded-xl border flex flex-col items-center justify-center p-1 text-center transition-all duration-300 \${idx === activeComparisonIndex ? 'border-[#F4512A] shadow-[0_0_15px_rgba(244,81,42,0.4)] scale-110 z-20 relative' : 'border-[#E0D8CC] shadow-2xs scale-100 z-10'}\`}>
                      <Icon className="w-4 h-4 text-[#55605A] stroke-[1.8] mb-0.5" />
                      <span className="text-[9px] font-bold text-[#102126] leading-tight text-center whitespace-pre-line">
                        {node.label}
                      </span>
                    </div>
                  </div>
                  {idx < traditionalNodes.length - 1 && (
                    <div className="flex items-center justify-center text-[#B0A79C] select-none px-1 flex-shrink-0">
                      <span className="text-[10px] font-mono tracking-tighter opacity-80">- -&#10140;</span>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </motion.div>

        <div className="flex flex-col items-center justify-center px-2 flex-shrink-0 self-center">
          <div className="w-10 h-10 rounded-full bg-[#F4512A] text-white flex items-center justify-center shadow-xs">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4.5 h-4.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ type: 'spring' as any, stiffness: 60, damping: 14 }}
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
                      <div className={\`w-[50px] xl:w-[56px] h-[54px] xl:h-[60px] bg-white rounded-xl shadow-xs border flex flex-col items-center justify-center p-0.5 text-center group transition-all duration-300 \${idx === activeComparisonIndex ? 'border-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.5)] scale-110 z-20 relative' : 'border-white scale-100 z-10'}\`}>
                        <Icon className="w-4 h-4 text-[#F4512A] stroke-[2.2] mb-0.5" />
                        <span className="text-[8.5px] font-bold text-[#102126] leading-tight text-center">
                          {node.label}
                        </span>
                      </div>
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
          </div>
        </motion.div>
      </div>

      <div className="grid lg:hidden grid-cols-[1fr_auto_1fr] items-stretch gap-1.5 sm:gap-4 mb-4 sm:mb-5">
        <div className="bg-[#F1EEE7] border border-[#E2DAD0] rounded-xl sm:rounded-3xl p-3 sm:p-4.5 relative flex flex-col justify-start h-full min-h-[170px]">
          <div>
            <div className="mb-2 sm:mb-3.5 flex flex-col sm:flex-row justify-between items-start gap-1 sm:gap-2">
              <div>
                <h3 className="text-[10.5px] sm:text-sm font-bold text-[#102126] tracking-tight mb-0.5 leading-tight">
                  Traditional
                </h3>
              </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-1 sm:gap-2">
              {traditionalNodes.map((node, idx) => {
                const Icon = node.icon;
                return (
                  <div key={idx} className="flex items-center w-full gap-2 sm:gap-3 mb-1 sm:mb-3 last:mb-0">
                    <div className={\`w-7 h-7 sm:w-[50px] sm:h-[50px] bg-white rounded-lg sm:rounded-2xl border flex items-center justify-center text-center transition-all duration-300 \${idx === activeComparisonIndex ? 'border-[#F4512A] shadow-[0_0_10px_rgba(244,81,42,0.4)] scale-110 z-20 relative' : 'border-[#E0D8CC] shadow-xs scale-100 z-10'}\`}>
                      <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#55605A] stroke-[1.8]" />
                    </div>
                    <span className="text-[9px] sm:text-[13px] font-bold text-[#102126] leading-tight flex-1">
                      {node.label.replace('\\n', ' ')}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center px-0.5 sm:px-1 flex-shrink-0 self-center">
          <div className="w-5 h-5 sm:w-8 sm:h-8 rounded-full bg-[#F4512A] text-white flex items-center justify-center shadow-xs">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-2.5 h-2.5 sm:w-4 sm:h-4"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </div>
        </div>

        <div className="bg-[#153D2B] rounded-xl sm:rounded-3xl p-3 sm:p-4.5 relative shadow-lg sm:shadow-xl border border-[#2E5A44] flex flex-col justify-start h-full min-h-[170px] overflow-hidden">
          <div className="relative z-10">
            <div className="mb-2 sm:mb-3.5 flex flex-col sm:flex-row justify-between items-start gap-1 sm:gap-2">
              <div>
                <h3 className="text-[10.5px] sm:text-sm font-bold text-white tracking-tight mb-0.5 leading-tight">
                  With EKhum
                </h3>
              </div>
            </div>

            <div className="flex flex-col justify-between flex-1 relative pl-2 sm:pl-4 py-1 sm:py-0">
              <div className="absolute left-0 top-4 bottom-4 sm:top-5 sm:bottom-5 w-[2px] bg-gradient-to-b from-[#F4512A]/40 via-[#F4512A] to-[#F4512A]/40 shadow-[0_0_8px_rgba(244,81,42,0.4)] z-0"></div>
              {ekhumNodes.map((node, idx) => {
                const Icon = node.icon;
                return (
                  <div key={idx} className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4 last:mb-0 relative z-10">
                    <div className="absolute left-[-8px] sm:left-[-16px] top-1/2 -translate-y-1/2 w-2 sm:w-4 h-[2px] bg-[#F4512A] opacity-50 z-0"></div>
                    <div className="relative flex-shrink-0 z-10">
                      <div className={\`w-7 h-7 sm:w-[50px] sm:h-[50px] bg-white rounded-lg sm:rounded-2xl shadow-sm border flex items-center justify-center text-center transition-all duration-300 \${idx === activeComparisonIndex ? 'border-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)] scale-110 z-20 relative' : 'border-white scale-100 z-10'}\`}>
                        <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#F4512A] stroke-[2.2]" />
                      </div>
                    </div>
                    <span className="text-[9px] sm:text-[14px] font-bold text-white leading-tight">
                      {node.label.replace('\\n', ' ')}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
`;

  c = c.replace(/export const ProblemSection/, compCode + '\nexport const ProblemSection');

  const startStr = '{/* ================= MAIN COMPARISON LAYOUT: DESKTOP (Horizontal) ================= */}';
  const endStr = '{/* =========================================================================\n            PART 3: THE SOLUTION';
  const sIdx = c.indexOf(startStr);
  const eIdx = c.indexOf(endStr);
  if (sIdx > -1 && eIdx > -1) {
    c = c.substring(0, sIdx) + '<ComparisonNodes traditionalNodes={traditionalNodes} ekhumNodes={ekhumNodes} />\n\n        ' + c.substring(eIdx);
  }
  
  if (!c.includes('useState')) {
    c = c.replace(/import React from 'react';/, "import React, { useState, useEffect } from 'react';\nimport { motion } from 'framer-motion';");
  }

  // Restore the z-index overlap fix that was accidentally reverted
  c = c.replace(
    /className="bg-\[\#F1EEE7\] hover:bg-\[\#EAE4DC\] rounded-2xl/g,
    'style={{ zIndex: 10 - idx, position: "relative" }} className="bg-[#F1EEE7] hover:bg-[#EAE4DC] rounded-2xl'
  );

  fs.writeFileSync('src/components/ProblemSection.tsx', c);
  console.log('ProblemSection optimization written');
}
