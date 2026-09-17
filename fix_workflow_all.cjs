const fs = require('fs');

let content = fs.readFileSync('src/components/WorkflowSection.tsx', 'utf8');

// Ensure motion is imported
if (!content.includes("import { motion }")) {
  content = content.replace("import React from 'react';", "import React from 'react';\nimport { motion } from 'framer-motion';");
}

// 1. Heading
content = content.replace(
  '<div className="mb-6 sm:mb-8 text-left max-w-4xl pt-4">',
  '<motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }} className="mb-6 sm:mb-8 text-left max-w-4xl pt-4">'
);
content = content.replace(
  'From campaign creation to lasting impact — everything works together, automatically.\n          </p>\n        </div>',
  'From campaign creation to lasting impact — everything works together, automatically.\n          </p>\n        </motion.div>'
);

// 2. Stage 1 wrapper
content = content.replace(
  '{/* ---------------- STAGE 01: LAUNCH (PHONE 1) ---------------- */}\n          <div className="relative flex flex-col justify-between lg:border-r lg:border-[#E5DCD0]/80 lg:pr-7">',
  '{/* ---------------- STAGE 01: LAUNCH (PHONE 1) ---------------- */}\n          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.6, delay: 0.1 }} className="relative flex flex-col justify-between lg:border-r lg:border-[#E5DCD0]/80 lg:pr-7">'
);
content = content.replace(
  '</p>\n                </div>\n              </div>\n\n            </div>\n          </div>\n\n          {/* ---------------- STAGE 02:',
  '</p>\n                </div>\n              </div>\n\n            </div>\n          </motion.div>\n\n          {/* ---------------- STAGE 02:'
);

// 3. Stage 2 wrapper
content = content.replace(
  '{/* ---------------- STAGE 02: TRANSACT (PHONE 2) ---------------- */}\n          <div className="relative flex flex-col justify-between lg:border-r lg:border-[#E5DCD0]/80 lg:px-4">',
  '{/* ---------------- STAGE 02: TRANSACT (PHONE 2) ---------------- */}\n          <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6, delay: 0.2 }} className="relative flex flex-col justify-between lg:border-r lg:border-[#E5DCD0]/80 lg:px-4">'
);
content = content.replace(
  '</p>\n                </div>\n              </div>\n\n            </div>\n          </div>\n\n          {/* ---------------- STAGE 03:',
  '</p>\n                </div>\n              </div>\n\n            </div>\n          </motion.div>\n\n          {/* ---------------- STAGE 03:'
);

// 4. Stage 3 wrapper
content = content.replace(
  '{/* ---------------- STAGE 03: MULTIPLY (PHONE 3) ---------------- */}\n          <div className="relative flex flex-col justify-between">',
  '{/* ---------------- STAGE 03: MULTIPLY (PHONE 3) ---------------- */}\n          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.6, delay: 0.3 }} className="relative flex flex-col justify-between">'
);
content = content.replace(
  '</p>\n                </div>\n              </div>\n\n            </div>\n          </div>\n\n        </div>\n\n        {/* =========================================================================\n            BOTTOM 9-STEP ROADMAP',
  '</p>\n                </div>\n              </div>\n\n            </div>\n          </motion.div>\n\n        </div>\n\n        {/* =========================================================================\n            BOTTOM 9-STEP ROADMAP'
);


// 5. Stage 3 card UI exactly like Stage 1
const stage3OldCard = `{/* Device Mockup 3: Wide Live Ledger & Tax Filing */}
              <div className="flex items-center justify-center py-2">
                <div className="w-full max-w-[320px] sm:max-w-[350px] bg-[#0E1A1E] p-3 rounded-2xl shadow-md border-2 border-[#1E3037]">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between px-1 mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      <span className="text-[9px] font-extrabold text-white/90 uppercase tracking-wide">Automated Compliance</span>
                    </div>
                    <span className="text-[8px] font-bold text-gray-300 bg-white/10 px-1.5 py-0.5 rounded">
                      FY 2025–26
                    </span>
                  </div>

                  {/* Dashboard Screen */}
                  <div className="bg-[#14201A] rounded-xl p-3 text-left border border-[#273B30] text-white">`;

const stage3NewCard = `{/* Device Mockup 3: Wide Live Ledger & Tax Filing */}
              <div className="flex items-center justify-center py-2">
                <div className="w-full max-w-[320px] sm:max-w-[350px] bg-[#0E1A1E] p-3 rounded-2xl shadow-md border-2 border-[#1E3037]">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between px-1 mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      <span className="text-[9px] font-extrabold text-white/90 uppercase tracking-wide">Automated Compliance</span>
                    </div>
                    <span className="text-[8px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-1.5 py-0.5 rounded">
                      FY 2025–26
                    </span>
                  </div>

                  {/* Dashboard Screen */}
                  <div className="bg-[#FAF8F5] rounded-xl p-3 text-left border border-[#E5DCD0] text-[#102126]">`;

content = content.replace(stage3OldCard, stage3NewCard);

content = content.replace('<span className="text-[7.5px] text-gray-400 uppercase font-bold tracking-wider">\n                          Net Settled Donations', '<span className="text-[7.5px] text-gray-500 uppercase font-bold tracking-wider">\n                          Net Settled Donations');
content = content.replace('<span className="text-[8px] font-bold text-emerald-400">+28.4% YoY</span>', '<span className="text-[8px] font-bold text-[#F4512A]">+28.4% YoY</span>');
content = content.replace('<span className="text-[15px] font-black text-white tracking-tight block">', '<span className="text-[15px] font-black text-[#153D2B] tracking-tight block">');

const innerBarOld = `<div className="flex items-end gap-1.5 h-6 bg-white/5 p-1.5 rounded-md mb-2">`;
const innerBarNew = `<div className="flex items-end gap-1.5 h-6 bg-white p-1.5 rounded-md mb-2 border border-gray-200">`;
content = content.replace(innerBarOld, innerBarNew);

const innerTileOld = `<div className="bg-[#1F3429] p-2 rounded-lg flex items-center justify-between border border-emerald-400/25">
                      <div>
                        <span className="text-[8.5px] font-black block leading-tight text-white">
                          Form 10BD Ready
                        </span>
                        <span className="text-[7px] text-emerald-200 block">
                          1,248 Records • Zero manual entry
                        </span>
                      </div>`;
const innerTileNew = `<div className="bg-white p-2 rounded-lg flex items-center justify-between border border-gray-200 shadow-sm">
                      <div>
                        <span className="text-[8.5px] font-black block leading-tight text-[#102126]">
                          Form 10BD Ready
                        </span>
                        <span className="text-[7px] text-gray-500 block">
                          1,248 Records • Zero manual entry
                        </span>
                      </div>`;
content = content.replace(innerTileOld, innerTileNew);

const oldStatTileOld = `<div className="bg-white/5 rounded-lg p-2 mb-2 border border-white/5">`;
const oldStatTileNew = `<div className="bg-white rounded-lg p-2 mb-2 border border-gray-200">`;
content = content.replace(oldStatTileOld, oldStatTileNew);


// 6. Roadmap specific fix
content = content.replace('<span className="text-[#F4512A]">Continuous 9-Step Pipeline</span>', '');


// 7. Re-apply staggered list animations
const applyList = (oldHTML, newHTML) => { content = content.replace(oldHTML, newHTML); };

const list1Old = `{/* 3 Step Highlights */}
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
const list1New = `{/* 3 Step Highlights */}
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
applyList(list1Old, list1New);

const list2Old = `{/* 3 Step Highlights */}
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
const list2New = `{/* 3 Step Highlights */}
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
applyList(list2Old, list2New);

const list3Old = `{/* 3 Step Highlights */}
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
const list3New = `{/* 3 Step Highlights */}
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
applyList(list3Old, list3New);


// 8. Re-apply RoadmapLoop
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
console.log('Complete Script Execution Done!');
