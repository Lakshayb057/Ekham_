const fs = require('fs');

let content = fs.readFileSync('src/components/WorkflowSection.tsx', 'utf8');

if (!content.includes("import { motion }")) {
  content = content.replace("import React from 'react';", "import React from 'react';\nimport { motion } from 'framer-motion';");
}

// 1. Heading Animation
content = content.replace(
  '<div className="mb-6 sm:mb-8 text-left max-w-4xl pt-4">',
  '<motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }} className="mb-6 sm:mb-8 text-left max-w-4xl pt-4">'
);
content = content.replace(
  'From campaign creation to lasting impact — everything works together, automatically.\n          </p>\n        </div>',
  'From campaign creation to lasting impact — everything works together, automatically.\n          </p>\n        </motion.div>'
);

// 2. Stage 1 Animation (Left)
content = content.replace(
  '<div className="relative flex flex-col justify-between lg:border-r lg:border-[#E5DCD0]/80 lg:pr-7">',
  '<motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.6, delay: 0.2 }} className="relative flex flex-col justify-between lg:border-r lg:border-[#E5DCD0]/80 lg:pr-7">'
);
content = content.replace(
  '              </div>\n\n            </div>\n          </div>\n\n          {/* ---------------- STAGE 02:',
  '              </div>\n\n            </div>\n          </motion.div>\n\n          {/* ---------------- STAGE 02:'
);

// 3. Stage 2 Animation (Above)
content = content.replace(
  '<div className="relative flex flex-col justify-between lg:border-r lg:border-[#E5DCD0]/80 lg:px-4">',
  '<motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6, delay: 0.4 }} className="relative flex flex-col justify-between lg:border-r lg:border-[#E5DCD0]/80 lg:px-4">'
);
content = content.replace(
  '              </div>\n\n            </div>\n          </div>\n\n          {/* ---------------- STAGE 03:',
  '              </div>\n\n            </div>\n          </motion.div>\n\n          {/* ---------------- STAGE 03:'
);

// 4. Stage 3 Animation (Right)
content = content.replace(
  '{/* ---------------- STAGE 03: MULTIPLY (PHONE 3) ---------------- */}\n          <div className="relative flex flex-col justify-between">',
  '{/* ---------------- STAGE 03: MULTIPLY (PHONE 3) ---------------- */}\n          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.6, delay: 0.6 }} className="relative flex flex-col justify-between">'
);
content = content.replace(
  '              </div>\n\n            </div>\n          </div>\n\n        </div>\n\n        {/* =========================================================================\n            BOTTOM 9-STEP ROADMAP',
  '              </div>\n\n            </div>\n          </motion.div>\n\n        </div>\n\n        {/* =========================================================================\n            BOTTOM 9-STEP ROADMAP'
);

// 5. Card 3 Inner Style
const oldCard3 = `{/* Device Mockup 3: Wide Live Ledger & Tax Filing */}
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

const newCard3 = `{/* Device Mockup 3: Wide Live Ledger & Tax Filing */}
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

content = content.replace(oldCard3, newCard3);

// Replace internal text colors for Card 3 stats
content = content.replace('<span className="text-[7.5px] text-gray-400 uppercase font-bold tracking-wider">\n                          Net Settled Donations', '<span className="text-[7.5px] text-gray-500 uppercase font-bold tracking-wider">\n                          Net Settled Donations');
content = content.replace('<span className="text-[8px] font-bold text-emerald-400">+28.4% YoY</span>', '<span className="text-[8px] font-bold text-[#F4512A]">+28.4% YoY</span>');
content = content.replace('<span className="text-[15px] font-black text-white tracking-tight block">', '<span className="text-[15px] font-black text-[#153D2B] tracking-tight block">');

// 6. Roadmap
content = content.replace('<span className="text-[#F4512A]">Continuous 9-Step Pipeline</span>', '');

fs.writeFileSync('src/components/WorkflowSection.tsx', content);
console.log('Done!');
