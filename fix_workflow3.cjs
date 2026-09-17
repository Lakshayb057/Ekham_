const fs = require('fs');
let content = fs.readFileSync('src/components/WorkflowSection.tsx', 'utf8');

const list1_old = `{/* 3 Step Highlights */}
              <div className="mt-2 space-y-1 text-left">
                <div className="flex items-start gap-1.5">
                  <span className="text-[10px] font-black text-[#153D2B]">01</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight">
                    <strong>Portal:</strong> Secure KYC onboarding & roles
                  </p>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-[10px] font-black text-[#F4512A]">02</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight">
                    <strong>Creation:</strong> Custom goal bars & ask ladders
                  </p>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-[10px] font-black text-[#153D2B]">03</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight">
                    <strong>Connection:</strong> Universal widget & WhatsApp
                  </p>
                </div>
              </div>`;
const list1_new = `{/* 3 Step Highlights */}
              <motion.div className="mt-2 space-y-1 text-left" initial="hidden" whileInView="visible" viewport={{ once: false }} variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 1.0 } } }}>
                <motion.div className="flex items-start gap-1.5" variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}>
                  <span className="text-[10px] font-black text-[#153D2B]">01</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight"><strong>Portal:</strong> Secure KYC onboarding & roles</p>
                </motion.div>
                <motion.div className="flex items-start gap-1.5" variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}>
                  <span className="text-[10px] font-black text-[#F4512A]">02</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight"><strong>Creation:</strong> Custom goal bars & ask ladders</p>
                </motion.div>
                <motion.div className="flex items-start gap-1.5" variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}>
                  <span className="text-[10px] font-black text-[#153D2B]">03</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight"><strong>Connection:</strong> Universal widget & WhatsApp</p>
                </motion.div>
              </motion.div>`;
content = content.replace(list1_old, list1_new);

const list2_old = `{/* 3 Step Highlights */}
              <div className="mt-2 space-y-1 text-left">
                <div className="flex items-start gap-1.5">
                  <span className="text-[10px] font-black text-[#F4512A]">04</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight">
                    <strong>Donations & 80G:</strong> Instant WhatsApp 80G in &lt;3s
                  </p>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-[10px] font-black text-[#153D2B]">05</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight">
                    <strong>Segmentation:</strong> Live tiers & tax classifications
                  </p>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-[10px] font-black text-[#F4512A]">06</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight">
                    <strong>Journeys:</strong> Automated engagement communication
                  </p>
                </div>
              </div>`;
const list2_new = `{/* 3 Step Highlights */}
              <motion.div className="mt-2 space-y-1 text-left" initial="hidden" whileInView="visible" viewport={{ once: false }} variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 1.0 } } }}>
                <motion.div className="flex items-start gap-1.5" variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}>
                  <span className="text-[10px] font-black text-[#F4512A]">04</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight"><strong>Donations & 80G:</strong> Instant WhatsApp 80G in &lt;3s</p>
                </motion.div>
                <motion.div className="flex items-start gap-1.5" variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}>
                  <span className="text-[10px] font-black text-[#153D2B]">05</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight"><strong>Segmentation:</strong> Live tiers & tax classifications</p>
                </motion.div>
                <motion.div className="flex items-start gap-1.5" variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}>
                  <span className="text-[10px] font-black text-[#F4512A]">06</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight"><strong>Journeys:</strong> Automated engagement communication</p>
                </motion.div>
              </motion.div>`;
content = content.replace(list2_old, list2_new);

const list3_old = `{/* 3 Step Highlights */}
              <div className="mt-2 space-y-1 text-left">
                <div className="flex items-start gap-1.5">
                  <span className="text-[10px] font-black text-[#153D2B]">07</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight">
                    <strong>Tracking:</strong> Live gross volume & health
                  </p>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-[10px] font-black text-[#F4512A]">08</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight">
                    <strong>Reporting:</strong> 1-click Form 10BD export
                  </p>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-[10px] font-black text-[#153D2B]">09</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight">
                    <strong>AI Engine:</strong> Lapsed donor risk & upgrades
                  </p>
                </div>
              </div>`;
const list3_new = `{/* 3 Step Highlights */}
              <motion.div className="mt-2 space-y-1 text-left" initial="hidden" whileInView="visible" viewport={{ once: false }} variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 1.0 } } }}>
                <motion.div className="flex items-start gap-1.5" variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}>
                  <span className="text-[10px] font-black text-[#153D2B]">07</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight"><strong>Tracking:</strong> Live gross volume & health</p>
                </motion.div>
                <motion.div className="flex items-start gap-1.5" variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}>
                  <span className="text-[10px] font-black text-[#F4512A]">08</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight"><strong>Reporting:</strong> 1-click Form 10BD export</p>
                </motion.div>
                <motion.div className="flex items-start gap-1.5" variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}>
                  <span className="text-[10px] font-black text-[#153D2B]">09</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight"><strong>AI Engine:</strong> Lapsed donor risk & upgrades</p>
                </motion.div>
              </motion.div>`;
content = content.replace(list3_old, list3_new);

// Roadmap Loop substitution
const roadmapOld = content.substring(
  content.indexOf('<div className="overflow-x-auto pb-1 scrollbar-none">'),
  content.indexOf('          {/* Centered Pitch CTA Button')
);
const roadmapNew = '<RoadmapLoop timelineSteps={timelineSteps} />\n\n';
content = content.replace(roadmapOld, roadmapNew);

const roadmapLoopComponent = `
const RoadmapLoop: React.FC<{ timelineSteps: any[] }> = ({ timelineSteps }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % timelineSteps.length);
    }, 1000);
    return () => clearInterval(timer);
  }, [timelineSteps.length]);

  return (
    <div className="overflow-x-auto py-5 px-2 scrollbar-none">
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

if(!content.includes('const RoadmapLoop')) {
  content += roadmapLoopComponent;
}

fs.writeFileSync('src/components/WorkflowSection.tsx', content);
console.log('Done script 3!');
