const fs = require('fs');

let content = fs.readFileSync('src/components/ProblemSection.tsx', 'utf8');

const comparisonScannerStr = `
// ==========================================
// ComparisonScanner (Child Component)
// ==========================================
const ComparisonScanner = ({ traditionalNodes, ekhumNodes }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % traditionalNodes.length);
    }, 1200);
    return () => clearInterval(timer);
  }, [traditionalNodes.length]);

  return (
    <div className="flex flex-col lg:flex-row items-stretch gap-4 sm:gap-8 justify-between relative mt-6 max-w-[1080px] mx-auto w-full">
      {/* ---------------- LEFT PANEL: TRADITIONAL ---------------- */}
      <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: false, amount: 0.2 }} className="bg-[#FAF8F5] border border-[#E5DCD0]/80 rounded-3xl p-5 relative shadow-sm flex flex-col justify-center h-full min-h-[185px] flex-1">
        <div className="mb-3.5 flex justify-between items-start gap-2">
          <div>
            <h3 className="text-sm font-bold text-[#102126] tracking-tight mb-0.5">
              Traditional Operations
            </h3>
            <p className="text-xs text-[#687176] font-normal">
              Siloed data. Repetitive manual effort.
            </p>
          </div>
          <div className="text-[#8E877D] font-black text-xs uppercase tracking-widest text-right shrink-0 mt-1">
            Fragmented
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-[20px] top-4 bottom-4 w-[2px] border-l-[2px] border-dashed border-[#CFC5B8] z-0"></div>

          {traditionalNodes.map((node, idx) => {
            const Icon = node.icon;
            const isActive = activeIndex === idx;
            return (
              <div key={idx} className="flex items-center gap-4 mb-4 last:mb-0 relative z-10 transition-all duration-300">
                <div className="relative flex-shrink-0">
                  <motion.div 
                    animate={{ scale: isActive ? 1.1 : 1, borderColor: isActive ? '#F4512A' : '#E0D8CC', boxShadow: isActive ? '0 0 10px rgba(244,81,42,0.2)' : 'none' }}
                    className="w-[42px] h-[42px] bg-white rounded-xl shadow-sm border flex items-center justify-center text-center relative z-10"
                  >
                    <Icon className={\`w-4 h-4 stroke-[2] \${isActive ? 'text-[#F4512A]' : 'text-[#55605A]'}\`} />
                  </motion.div>
                </div>
                <span className={\`text-[13px] font-bold leading-tight transition-colors duration-300 \${isActive ? 'text-[#F4512A]' : 'text-[#102126]'}\`}>
                  {node.label.replace('\\n', ' ')}
                </span>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* ---------------- CENTER INDICATOR ---------------- */}
      <div className="flex flex-col items-center justify-center self-center px-2">
        <div className="w-8 h-8 rounded-full bg-[#F4512A] text-white flex items-center justify-center shadow-xs">
          <svg className="w-3.5 h-3.5 stroke-[3]" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </div>
      </div>

      {/* ---------------- RIGHT PANEL: EKHUM ---------------- */}
      <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: false, amount: 0.2 }} className="bg-[#153D2B] border border-[#1F543C] rounded-3xl p-5 relative shadow-md flex flex-col justify-start h-full min-h-[170px] flex-1 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-48 h-12 bg-[#F4512A]/15 blur-xl pointer-events-none rounded-full"></div>

        <div className="relative z-10">
          <div className="mb-3.5 flex justify-between items-start gap-2">
            <div>
              <h3 className="text-sm font-bold text-white tracking-tight mb-0.5 leading-tight">
                With EKhum
              </h3>
              <p className="text-xs text-emerald-100/85 font-normal">
                One connected platform. Real-time visibility.
              </p>
            </div>
            <div className="text-[#F4512A] font-black text-xs uppercase tracking-widest text-right shrink-0 mt-1">
              One Platform
            </div>
          </div>

          <div className="flex items-stretch relative w-full mt-6 z-10">
            {/* EKhum Hub */}
            <div className="flex flex-col items-center justify-center pr-6 relative z-20">
              <div className="bg-white rounded-2xl px-5 py-3 shadow-md border border-white flex items-center justify-center gap-2 z-20">
                <div className="relative w-6 h-6 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#F4512A] animate-[spin_10s_linear_infinite]">
                    <line x1="18" y1="4" x2="18" y2="32" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
                    <line x1="4" y1="18" x2="32" y2="18" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
                    <circle cx="18" cy="18" r="2.8" fill="currentColor" />
                  </svg>
                </div>
                <div className="flex items-center tracking-tight font-extrabold text-xl leading-none">
                  <span className="text-[#102126]">EK</span>
                  <span className="text-[#F4512A]">hum</span>
                </div>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-[2px] bg-[#F4512A] shadow-[0_0_8px_rgba(244,81,42,0.6)] z-10"></div>
            </div>

            {/* Branches */}
            <div className="flex flex-col justify-between flex-1 relative pl-4">
              <div className="absolute left-0 top-5 bottom-5 w-[2px] bg-gradient-to-b from-[#F4512A]/40 via-[#F4512A] to-[#F4512A]/40 shadow-[0_0_8px_rgba(244,81,42,0.4)] z-0"></div>

              {ekhumNodes.slice(0,5).map((node, idx) => {
                const Icon = node.icon;
                const isActive = activeIndex === idx;
                return (
                  <div key={idx} className="flex items-center gap-4 mb-3 last:mb-0 relative z-10">
                    <motion.div 
                      animate={{ opacity: isActive ? 1 : 0.4, scaleX: isActive ? 1 : 0 }} 
                      className="absolute left-[-16px] top-1/2 -translate-y-1/2 w-4 h-[2px] bg-[#F4512A] z-0 origin-left"
                    ></motion.div>
                    
                    <div className="relative flex-shrink-0 z-10">
                      <motion.div 
                        animate={{ scale: isActive ? 1.1 : 1, boxShadow: isActive ? '0 0 12px rgba(244,81,42,0.5)' : 'none' }}
                        className="w-[36px] h-[36px] bg-white rounded-xl shadow-sm flex items-center justify-center text-center relative"
                      >
                        <Icon className={\`w-4 h-4 stroke-[2.2] \${isActive ? 'text-[#F4512A]' : 'text-gray-400'}\`} />
                      </motion.div>
                    </div>

                    <span className={\`text-[13px] font-bold leading-tight transition-colors duration-300 \${isActive ? 'text-white' : 'text-emerald-100/50'}\`}>
                      {node.label.replace('\\n', ' ')}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
`;

const oldGridStr = content.substring(
  content.indexOf('<div className="flex flex-col lg:flex-row items-stretch gap-2.5 sm:gap-5 lg:gap-8 justify-between relative mt-5 sm:mt-8 max-w-[1080px] mx-auto w-full">'),
  content.indexOf('{/* =========================================================================')
);

const newGridStr = `<ComparisonScanner traditionalNodes={traditionalNodes} ekhumNodes={ekhumNodes} />\n\n        `;

content = content.replace(oldGridStr, newGridStr);
content = content.replace('const ProblemSection: React.FC<ProblemSectionProps> = ({', comparisonScannerStr + '\n\nconst ProblemSection: React.FC<ProblemSectionProps> = ({');

fs.writeFileSync('src/components/ProblemSection.tsx', content);
console.log('Scanner injected!');
