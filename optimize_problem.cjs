const fs = require('fs');

let c = fs.readFileSync('src/components/ProblemSection.tsx', 'utf8');
const replacement = `const ComparisonNodes = ({ traditionalNodes, ekhumNodes }: any) => {
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
          transition={{ type: "spring" as any, stiffness: 60, damping: 14 }}
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
            {traditionalNodes.map((node: any, idx: number) => {
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
          transition={{ type: "spring" as any, stiffness: 60, damping: 14 }}
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
              {ekhumNodes.map((node: any, idx: number) => {
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

      <div className="flex lg:hidden flex-col gap-4">
        <div className="bg-[#F1EEE7] border border-[#E2DAD0] rounded-3xl p-5 relative shadow-sm">
          <div className="mb-4">
            <h3 className="text-sm sm:text-base font-bold text-[#102126] tracking-tight mb-1">
              Traditional Operations
            </h3>
            <p className="text-[11px] sm:text-xs text-[#687176] font-medium leading-tight">
              Disconnected tools. Manual work.
            </p>
          </div>
          <div className="flex items-center justify-between gap-1 overflow-x-auto pb-1 scrollbar-none">
            {traditionalNodes.map((node: any, idx: number) => {
              const Icon = node.icon;
              return (
                <div key={idx} className="flex flex-col items-center flex-shrink-0 w-16 sm:w-20">
                  <div className={\`w-11 h-11 sm:w-12 sm:h-12 bg-white rounded-xl border flex flex-col items-center justify-center p-1 text-center transition-all duration-300 \${idx === activeComparisonIndex ? 'border-[#F4512A] shadow-[0_0_15px_rgba(244,81,42,0.4)] scale-110 z-20 relative' : 'border-[#E0D8CC] shadow-2xs scale-100 z-10'}\`}>
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#55605A] stroke-[1.8] mb-0.5" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-bold text-[#102126] leading-tight text-center whitespace-pre-line mt-1.5">
                    {node.label.replace('\\n', ' ')}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center -my-1 relative z-10">
          <div className="w-8 h-8 rounded-full bg-[#F4512A] text-white flex items-center justify-center shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 rotate-90"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </div>
        </div>

        <div className="bg-[#153D2B] rounded-3xl p-5 relative shadow-xl border border-[#2E5A44] overflow-hidden">
          <div className="absolute top-0 right-1/4 w-32 sm:w-48 h-12 bg-[#F4512A]/15 blur-xl pointer-events-none rounded-full"></div>
          <div className="relative z-10">
            <div className="mb-4">
              <h3 className="text-[11px] sm:text-sm font-bold text-white tracking-tight mb-1 leading-tight">
                With EKhum
              </h3>
              <div className="text-[#F4512A] font-black text-[9px] sm:text-xs uppercase tracking-widest text-left mt-0.5">
                One Platform
              </div>
            </div>
            
            <div className="flex items-center justify-between gap-1 overflow-x-auto pb-1 scrollbar-none">
              {ekhumNodes.map((node: any, idx: number) => {
                const Icon = node.icon;
                return (
                  <div key={idx} className="flex flex-col items-center flex-shrink-0 w-16 sm:w-20">
                    <div className={\`w-11 h-11 sm:w-12 sm:h-12 bg-white rounded-xl shadow-xs border flex flex-col items-center justify-center p-0.5 text-center transition-all duration-300 \${idx === activeComparisonIndex ? 'border-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.5)] scale-110 z-20 relative' : 'border-white scale-100 z-10'}\`}>
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#F4512A] stroke-[2.2] mb-0.5" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-bold text-white leading-tight text-center mt-1.5">
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

c = c.replace(/export const ProblemSection/g, replacement + '\nexport const ProblemSection');
c = c.replace(/const \[activeComparisonIndex, setActiveComparisonIndex\] = useState\(0\);[\s\S]*?\}, \[\]\);/g, '');

const startStr = '{/* ================= MAIN COMPARISON LAYOUT: DESKTOP';
const endStr = '{/* =========================================================================\n            PART 3: THE SOLUTION';
const startIdx = c.indexOf(startStr);
const endIdx = c.indexOf(endStr);
if (startIdx > -1 && endIdx > -1) {
  c = c.substring(0, startIdx) + '<ComparisonNodes traditionalNodes={traditionalNodes} ekhumNodes={ekhumNodes} />\n\n        ' + c.substring(endIdx);
}

fs.writeFileSync('src/components/ProblemSection.tsx', c);
console.log('Optimized ProblemSection successfully.');
