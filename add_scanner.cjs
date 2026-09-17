const fs = require('fs');
let content = fs.readFileSync('src/components/ProblemSection.tsx', 'utf8');

// 1. Add state to ProblemSection
content = content.replace(
  'const ProblemSection: React.FC<ProblemSectionProps> = ({ \n  onOpenDemoModal, \n  onLearnMore \n}) => {',
  `const ProblemSection: React.FC<ProblemSectionProps> = ({ 
  onOpenDemoModal, 
  onLearnMore 
}) => {
  const [activeNode, setActiveNode] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveNode(prev => (prev + 1) % 5);
    }, 1500);
    return () => clearInterval(timer);
  }, []);`
);

// 2. Animate Traditional Node
// Find:
// <div className="w-8 h-8 sm:w-[60px] sm:h-[60px] bg-white rounded-lg sm:rounded-2xl border border-[#E0D8CC] shadow-sm flex items-center justify-center text-center relative z-10">
//   <Icon className="w-3.5 h-3.5 sm:w-6 sm:h-6 text-[#55605A] stroke-[1.8]" />
// </div>
content = content.replace(
  `{traditionalNodes.map((node, idx) => {
                    const Icon = node.icon;
                    return (
                      <div key={idx} className="flex items-center gap-2.5 sm:gap-6 mb-3 sm:mb-6 last:mb-0 relative z-10">
                        <div className="relative flex-shrink-0">
                          {/* White Rounded Card */}
                          <div className="w-8 h-8 sm:w-[60px] sm:h-[60px] bg-white rounded-lg sm:rounded-2xl border border-[#E0D8CC] shadow-sm flex items-center justify-center text-center relative z-10">
                            <Icon className="w-3.5 h-3.5 sm:w-6 sm:h-6 text-[#55605A] stroke-[1.8]" />
                          </div>`,
  `{traditionalNodes.map((node, idx) => {
                    const Icon = node.icon;
                    const isActive = activeNode === idx;
                    return (
                      <div key={idx} className="flex items-center gap-2.5 sm:gap-6 mb-3 sm:mb-6 last:mb-0 relative z-10 transition-all duration-300">
                        <div className="relative flex-shrink-0">
                          {/* White Rounded Card */}
                          <motion.div 
                            animate={{ scale: isActive ? 1.15 : 1, borderColor: isActive ? '#F4512A' : '#E0D8CC', boxShadow: isActive ? '0 0 12px rgba(244,81,42,0.3)' : 'none' }}
                            className="w-8 h-8 sm:w-[60px] sm:h-[60px] bg-white rounded-lg sm:rounded-2xl border shadow-sm flex items-center justify-center text-center relative z-10 transition-colors"
                          >
                            <Icon className={\`w-3.5 h-3.5 sm:w-6 sm:h-6 stroke-[1.8] \${isActive ? 'text-[#F4512A]' : 'text-[#55605A]'}\`} />
                          </motion.div>`
);
// replace label for traditional
content = content.replace(
  `<span className="text-[9.5px] sm:text-[15px] font-bold text-[#102126] leading-tight">
                          {node.label.replace('\\n', ' ')}
                        </span>`,
  `<span className={\`text-[9.5px] sm:text-[15px] font-bold leading-tight transition-colors duration-300 \${isActive ? 'text-[#F4512A]' : 'text-[#102126]'}\`}>
                          {node.label.replace('\\n', ' ')}
                        </span>`
);


// 3. Animate EKhum Node
// Find:
// <div className="w-7 h-7 sm:w-[50px] sm:h-[50px] bg-white rounded-lg sm:rounded-2xl shadow-sm border border-white flex items-center justify-center text-center group-hover:scale-105 transition-transform">
//   <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#F4512A] stroke-[2.2]" />
// </div>
content = content.replace(
  `{ekhumNodes.map((node, idx) => {
                      const Icon = node.icon;
                      return (
                        <div key={idx} className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4 last:mb-0 relative z-10 group cursor-default">
                          
                          {/* Horizontal Branch from Trunk to Node */}
                          <div className="absolute left-[-8px] sm:left-[-16px] top-1/2 -translate-y-1/2 w-2 sm:w-4 h-[2px] bg-[#F4512A] opacity-50 z-0 group-hover:opacity-100 transition-opacity"></div>
                          
                          <div className="relative flex-shrink-0 z-10">
                            {/* White Rounded Card */}
                            <div className="w-7 h-7 sm:w-[50px] sm:h-[50px] bg-white rounded-lg sm:rounded-2xl shadow-sm border border-white flex items-center justify-center text-center group-hover:scale-105 transition-transform">
                              <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#F4512A] stroke-[2.2]" />
                            </div>`,
  `{ekhumNodes.map((node, idx) => {
                      const Icon = node.icon;
                      // traditionalNodes has 5 items. ekhumNodes has 6. Highlight index 5 alongside index 4.
                      const isActive = activeNode === idx || (activeNode === 4 && idx === 5);
                      return (
                        <div key={idx} className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4 last:mb-0 relative z-10 group cursor-default transition-all duration-300">
                          
                          {/* Horizontal Branch from Trunk to Node */}
                          <motion.div animate={{ opacity: isActive ? 1 : 0.4, scaleX: isActive ? 1 : 0.5 }} className="absolute left-[-8px] sm:left-[-16px] top-1/2 -translate-y-1/2 w-2 sm:w-4 h-[2px] bg-[#F4512A] z-0 origin-left"></motion.div>
                          
                          <div className="relative flex-shrink-0 z-10">
                            {/* White Rounded Card */}
                            <motion.div 
                              animate={{ scale: isActive ? 1.15 : 1, boxShadow: isActive ? '0 0 12px rgba(244,81,42,0.6)' : 'none' }}
                              className="w-7 h-7 sm:w-[50px] sm:h-[50px] bg-white rounded-lg sm:rounded-2xl shadow-sm border border-white flex items-center justify-center text-center transition-colors"
                            >
                              <Icon className={\`w-3.5 h-3.5 sm:w-5 sm:h-5 stroke-[2.2] \${isActive ? 'text-[#F4512A]' : 'text-gray-400'}\`} />
                            </motion.div>`
);

content = content.replace(
  `<span className="text-[9px] sm:text-[14px] font-bold text-white leading-tight group-hover:text-[#F4512A] transition-colors">
                            {node.label.replace('\\n', ' ')}
                          </span>`,
  `<span className={\`text-[9px] sm:text-[14px] font-bold leading-tight transition-colors duration-300 \${isActive ? 'text-white' : 'text-emerald-100/50'}\`}>
                            {node.label.replace('\\n', ' ')}
                          </span>`
);

fs.writeFileSync('src/components/ProblemSection.tsx', content);
console.log('Scanner injected via local state!');
