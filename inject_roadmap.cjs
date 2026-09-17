const fs = require('fs');
let w = fs.readFileSync('src/components/WorkflowSection.tsx', 'utf8');

const loopCode = `
const RoadmapLoop: React.FC<{ timelineSteps: any[] }> = ({ timelineSteps }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % timelineSteps.length);
    }, 1000);
    return () => clearInterval(timer);
  }, [timelineSteps.length]);

  return (
    <div className="overflow-x-auto pb-1 scrollbar-none">
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
                  <span className="text-[9.5px] font-mono font-black text-gray-500">
                    {step.num}
                  </span>
                  <h5 className="text-[10px] font-black text-[#102126] leading-tight truncate">
                    {step.title}
                  </h5>
                </div>
                <p className="text-[8.5px] text-[#687176] leading-tight font-medium line-clamp-2 mt-0.5">
                  {step.desc}
                </p>
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

if (!w.includes('RoadmapLoop')) {
  w = w.replace('export const WorkflowSection', loopCode + '\nexport const WorkflowSection');
}

if (!w.includes('framer-motion')) {
  w = w.replace("import React from 'react';", "import React from 'react';\nimport { motion } from 'framer-motion';");
}

fs.writeFileSync('src/components/WorkflowSection.tsx', w);
