const fs = require('fs');

const compCode = `
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
    <>
    <div className="hidden lg:grid grid-cols-[1fr_auto_1.15fr] items-center gap-4 mb-5">
      {/* TRADITIONAL */}
      <motion.div 
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 50, damping: 15 }}
        viewport={{ once: false }}
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
                  <motion.div 
                    animate={{ opacity: activeComparisonIndex === idx ? 1 : 0.6, scale: activeComparisonIndex === idx ? 1.05 : 1, y: activeComparisonIndex === idx ? -2 : 0 }}
                    className="w-[50px] xl:w-[56px] h-[54px] xl:h-[60px] bg-white rounded-xl shadow-xs border border-[#E5DCD0] flex flex-col items-center justify-center p-0.5 text-center transition-transform relative"
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

        <div className="relative w-full h-8 mt-1 border-t-2 border-dashed border-[#D2C8BA] pt-2 flex justify-center items-center gap-2">
          <span className="text-[10px] font-bold text-[#F4512A] uppercase tracking-widest bg-[#F4512A]/10 px-2 py-0.5 rounded border border-[#F4512A]/20">
            Data Loss & Reporting Delays
          </span>
        </div>
      </motion.div>

      {/* ARROW */}
      <div className="flex items-center justify-center -mx-1">
        <div className="w-10 h-10 rounded-full bg-white border border-[#E5DCD0] shadow-sm flex items-center justify-center text-[#F4512A]">
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </div>
      </div>

      {/* EKHUM */}
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
                      className="w-[50px] xl:w-[56px] h-[54px] xl:h-[60px] bg-white rounded-xl shadow-xs border border-white flex flex-col items-center justify-center p-0.5 text-center transition-transform relative"
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
    
    <div className="lg:hidden grid grid-cols-1 gap-4 mb-5">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 50, damping: 15 }}
        viewport={{ once: false }}
        className="bg-[#153D2B] border border-[#1F543C] rounded-3xl p-5 relative shadow-md flex flex-col justify-center"
      >
        <div className="absolute top-0 right-1/4 w-48 h-12 bg-[#F4512A]/15 blur-xl pointer-events-none rounded-full"></div>
        <div className="relative z-10">
          <div className="mb-4">
            <h3 className="text-[15px] font-bold text-white tracking-tight mb-1">
              With EKhum
            </h3>
            <p className="text-xs text-emerald-100/85 font-normal">
              One connected platform. Complete ownership. Real-time visibility.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-4">
            {ekhumNodes.map((node, idx) => {
              const Icon = node.icon;
              return (
                <motion.div 
                  key={idx}
                  animate={{ opacity: activeComparisonIndex === idx ? 1 : 0.8, scale: activeComparisonIndex === idx ? 1.05 : 1, y: activeComparisonIndex === idx ? -2 : 0 }}
                  className="bg-white/10 rounded-xl border border-white/10 p-2.5 flex items-center gap-2 relative"
                >
                  {activeComparisonIndex === idx && (
                    <div className="absolute inset-0 ring-2 ring-[#4ADE80] rounded-xl ring-offset-1 pointer-events-none bg-emerald-500/10"></div>
                  )}
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <Icon className="w-4 h-4 text-[#F4512A] stroke-[2.2]" />
                  </div>
                  <span className="text-[10px] font-bold text-white leading-tight">
                    {node.label}
                  </span>
                </motion.div>
              );
            })}
          </div>

          <div className="bg-[#102126]/40 rounded-xl p-3 flex items-center justify-center gap-2 border border-white/5">
            <div className="relative w-5 h-5 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#F4512A] animate-[spin_10s_linear_infinite]">
                <line x1="18" y1="4" x2="18" y2="32" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
                <line x1="4" y1="18" x2="32" y2="18" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
                <line x1="8.1" y1="8.1" x2="27.9" y2="27.9" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
                <line x1="27.9" y1="8.1" x2="8.1" y2="27.9" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 m-auto w-2.5 h-2.5 bg-[#F4512A] rounded-full border border-white"></div>
            </div>
            <span className="text-[10px] font-bold text-white uppercase tracking-widest">
              Integrated CRM & Growth Engine
            </span>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 50, damping: 15 }}
        viewport={{ once: false }}
        className="bg-[#F1EEE7] border border-[#E2DAD0] rounded-3xl p-5 relative flex flex-col justify-center"
      >
        <div className="mb-4">
          <h3 className="text-[15px] font-bold text-[#102126] tracking-tight mb-1">
            Traditional Methods
          </h3>
          <p className="text-xs text-[#687176] font-medium">
            Disconnected tools. Manual work. Limited visibility.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-4">
          {traditionalNodes.map((node, idx) => {
            const Icon = node.icon;
            return (
              <motion.div 
                key={idx}
                animate={{ opacity: activeComparisonIndex === idx ? 1 : 0.6, scale: activeComparisonIndex === idx ? 1.05 : 1, y: activeComparisonIndex === idx ? -2 : 0 }}
                className="bg-white rounded-xl border border-[#E5DCD0] p-2.5 flex items-center gap-2 shadow-xs relative"
              >
                {activeComparisonIndex === idx && (
                  <div className="absolute inset-0 ring-2 ring-[#D8411C] rounded-xl ring-offset-1 pointer-events-none bg-red-500/5"></div>
                )}
                <div className="w-8 h-8 rounded-full bg-[#F4F1ED] flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-[#687176] stroke-[2.2]" />
                </div>
                <span className="text-[10px] font-bold text-[#687176] leading-tight">
                  {node.label}
                </span>
              </motion.div>
            );
          })}
        </div>

        <div className="bg-[#EAE4DC] rounded-xl p-2.5 border border-[#D2C8BA] border-dashed flex justify-center items-center gap-2">
          <span className="text-[10px] font-bold text-[#F4512A] uppercase tracking-widest">
            Data Loss & Reporting Delays
          </span>
        </div>
      </motion.div>
    </div>
    </>
  );
};
`;

const lines = fs.readFileSync('src/components/ProblemSection.tsx', 'utf8').split('\n');
const pIdx = lines.findIndex(l => l.includes('export const ProblemSection'));
if (pIdx > -1) {
  let w = lines.slice(0, pIdx).join('\n') + '\n\n' + compCode + '\n' + lines.slice(pIdx).join('\n');
  fs.writeFileSync('src/components/ProblemSection.tsx', w);
}
