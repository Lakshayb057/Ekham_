const fs = require('fs');

let content = fs.readFileSync('src/components/WorkflowSection.tsx', 'utf8');

// 1. Add missing framer-motion import if not present
if (!content.includes("import { motion } from 'framer-motion'")) {
  content = content.replace(
    "import React from 'react';",
    "import React from 'react';\nimport { motion } from 'framer-motion';"
  );
}

// 2. Wrap Heading
const oldHeading = `<div className="text-left pb-2 sm:pb-3 border-b border-[#E8DFD3]/80 mb-1 sm:mb-2">
          <span className="text-[10.5px] sm:text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#F4512A] block mb-1">
            OUR END-TO-END WORKFLOW
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.15rem] font-black text-[#102126] tracking-[-0.035em] leading-[1.08] mb-1">
            One Donation. <span className="text-[#F4512A]">Nine Connected Moments.</span>
          </h2>
          <p className="text-[11.5px] sm:text-xs text-[#687176] max-w-2xl font-normal leading-tight">
            From campaign creation to lasting impact — everything works together, automatically.
          </p>
        </div>`;

const newHeading = `<motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-left pb-2 sm:pb-3 border-b border-[#E8DFD3]/80 mb-1 sm:mb-2"
        >
          <span className="text-[10.5px] sm:text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#F4512A] block mb-1">
            OUR END-TO-END WORKFLOW
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.15rem] font-black text-[#102126] tracking-[-0.035em] leading-[1.08] mb-1">
            One Donation. <span className="text-[#F4512A]">Nine Connected Moments.</span>
          </h2>
          <p className="text-[11.5px] sm:text-xs text-[#687176] max-w-2xl font-normal leading-tight">
            From campaign creation to lasting impact — everything works together, automatically.
          </p>
        </motion.div>`;

content = content.replace(oldHeading, newHeading);

// 3. Wrap Stage 1 Card
const stage1StartOld = `<div className="bg-[#FAF8F5] border border-[#E5DCD0] rounded-[24px] p-4 sm:p-5 flex flex-col justify-between shadow-xs relative overflow-hidden h-full">`;
const stage1StartNew = `<motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#FAF8F5] border border-[#E5DCD0] rounded-[24px] p-4 sm:p-5 flex flex-col justify-between shadow-xs relative overflow-hidden h-full"
          >`;
content = content.replace(stage1StartOld, stage1StartNew);
content = content.replace(`                </div>\n              </div>\n\n            </div>\n          </div>`, `                </div>\n              </div>\n\n            </div>\n          </motion.div>`);


// 4. Wrap Stage 2 Card
const stage2StartOld = `<div className="bg-[#102126] border border-[#1E3037] rounded-[24px] p-4 sm:p-5 flex flex-col justify-between shadow-md relative overflow-hidden h-full group">`;
const stage2StartNew = `<motion.div 
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="bg-[#102126] border border-[#1E3037] rounded-[24px] p-4 sm:p-5 flex flex-col justify-between shadow-md relative overflow-hidden h-full group"
          >`;
content = content.replace(stage2StartOld, stage2StartNew);
content = content.replace(`                  <p className="text-[10.5px] text-gray-300 font-medium leading-tight">\n                    <strong>Re-target:</strong> Smart segmentation triggers\n                  </p>\n                </div>\n              </div>\n\n            </div>\n          </div>`, `                  <p className="text-[10.5px] text-gray-300 font-medium leading-tight">\n                    <strong>Re-target:</strong> Smart segmentation triggers\n                  </p>\n                </div>\n              </div>\n\n            </div>\n          </motion.div>`);


// 5. Wrap Stage 3 Card
const stage3StartOld = `<div className="bg-[#FAF8F5] border border-[#E5DCD0] rounded-[24px] p-4 sm:p-5 flex flex-col justify-between shadow-xs relative overflow-hidden h-full">`;
const stage3StartNew = `<motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="bg-[#FAF8F5] border border-[#E5DCD0] rounded-[24px] p-4 sm:p-5 flex flex-col justify-between shadow-xs relative overflow-hidden h-full"
          >`;
content = content.replace(stage3StartOld, stage3StartNew);
content = content.replace(`                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight">\n                    <strong>Report:</strong> Transparency feeds growth\n                  </p>\n                </div>\n              </div>\n\n            </div>\n          </div>`, `                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight">\n                    <strong>Report:</strong> Transparency feeds growth\n                  </p>\n                </div>\n              </div>\n\n            </div>\n          </motion.div>`);


// 6. Restyle Stage 3 inner card to be perfectly like Stage 1 inner card
const oldInnerCard3 = `<div className="bg-[#14201A] rounded-xl p-3 text-left border border-[#273B30] text-white">
                    <div className="mb-2.5 pb-2 border-b border-[#273B30]">
                      <span className="text-[8px] font-extrabold uppercase text-[#7E968A] tracking-wider block mb-1">
                        NET SETTLED DONATIONS
                      </span>
                      <div className="flex items-end justify-between">
                        <span className="text-xl font-black text-white">₹48,20,500</span>
                        <span className="text-[9px] font-bold text-[#F4512A] mb-1">+28.4% YoY</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between gap-1 mb-3">
                      {[40, 60, 50, 80, 100, 30].map((h, i) => (
                        <div key={i} className="flex-1 bg-[#1E3025] h-1.5 rounded-full overflow-hidden">
                          <div className={\`h-full \${i === 4 ? 'bg-[#F4512A]' : 'bg-[#52D18F]'}\`} style={{ width: \`\${h}%\` }}></div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-[#1E3025] rounded-lg p-2 flex items-center justify-between border border-[#2A4032]">
                      <div>
                        <div className="text-[9px] font-bold text-white mb-0.5">Form 10BD Ready</div>
                        <div className="text-[7.5px] text-[#7E968A]">1,248 Records • Zero manual entry</div>
                      </div>
                      <div className="px-2 py-1 bg-[#F4512A] text-white text-[8px] font-bold rounded shadow-xs">
                        1-Click Export
                      </div>
                    </div>
                  </div>`;

const newInnerCard3 = `<div className="bg-[#FAF8F5] rounded-xl p-3 text-left border border-[#E5DCD0] text-[#102126]">
                    <div className="mb-2.5 pb-2 border-b border-[#E5DCD0]">
                      <span className="text-[8px] font-extrabold uppercase text-[#687176] tracking-wider block mb-1">
                        NET SETTLED DONATIONS
                      </span>
                      <div className="flex items-end justify-between">
                        <span className="text-xl font-black text-[#153D2B]">₹48,20,500</span>
                        <span className="text-[9px] font-bold text-[#F4512A] mb-1">+28.4% YoY</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between gap-1 mb-3">
                      {[40, 60, 50, 80, 100, 30].map((h, i) => (
                        <div key={i} className="flex-1 bg-[#E2DAD0] h-1.5 rounded-full overflow-hidden">
                          <div className={\`h-full \${i === 4 ? 'bg-[#F4512A]' : 'bg-[#153D2B]'}\`} style={{ width: \`\${h}%\` }}></div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-white rounded-lg p-2 flex items-center justify-between border border-[#E5DCD0] shadow-sm">
                      <div>
                        <div className="text-[9px] font-bold text-[#102126] mb-0.5">Form 10BD Ready</div>
                        <div className="text-[7.5px] text-[#687176]">1,248 Records • Zero manual entry</div>
                      </div>
                      <div className="px-2 py-1 bg-[#F4512A] text-white text-[8px] font-bold rounded shadow-xs">
                        1-Click Export
                      </div>
                    </div>
                  </div>`;

content = content.replace(oldInnerCard3, newInnerCard3);

fs.writeFileSync('src/components/WorkflowSection.tsx', content);
console.log('Workflow section fixes complete!');
