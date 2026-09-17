const fs = require('fs');
let content = fs.readFileSync('src/components/WorkflowSection.tsx', 'utf8');

const replacement = `
              {/* Device Mockup 3: Wide Live Ledger & Tax Filing */}
              <div className="flex items-center justify-center py-2">
                <div className="w-full max-w-[320px] sm:max-w-[350px] bg-white p-3 rounded-2xl shadow-md border border-gray-200">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between px-1 mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      <span className="text-[9px] font-extrabold text-[#102126] uppercase tracking-wide">Automated Compliance</span>
                    </div>
                    <span className="text-[8px] font-bold text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded">
                      FY 2025–26
                    </span>
                  </div>

                  {/* Dashboard Screen */}
                  <div className="bg-[#153D2B]/5 rounded-xl p-3 text-left border border-[#153D2B]/10 text-[#102126]">
                    {/* Settlement Stat */}
                    <div className="bg-white rounded-lg p-2 mb-2 border border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="text-[7.5px] text-gray-500 uppercase font-bold tracking-wider">
                          Net Settled Donations
                        </span>
                        <span className="text-[8px] font-bold text-emerald-600">+28.4% YoY</span>
                      </div>
                      <span className="text-[15px] font-black text-[#153D2B] tracking-tight block">
                        ₹48,20,500
                      </span>
                    </div>

                    {/* Volume Bar visualization */}
                    <div className="flex items-end gap-1.5 h-6 bg-white p-1.5 rounded-md mb-2 border border-gray-200">
                      <div className="w-1/6 bg-emerald-500/40 h-[40%] rounded-xs"></div>
                      <div className="w-1/6 bg-emerald-500/50 h-[65%] rounded-xs"></div>
                      <div className="w-1/6 bg-emerald-500/60 h-[50%] rounded-xs"></div>
                      <div className="w-1/6 bg-emerald-500/80 h-[75%] rounded-xs"></div>
                      <div className="w-1/6 bg-[#F4512A] h-[100%] rounded-xs"></div>
                      <div className="w-1/6 bg-emerald-400 h-[88%] rounded-xs"></div>
                    </div>

                    {/* 10BD 1-Click Tile */}
                    <div className="bg-white p-2 rounded-lg flex items-center justify-between border border-gray-200 shadow-sm">
                      <div>
                        <span className="text-[8.5px] font-black block leading-tight text-[#102126]">
                          Form 10BD Ready
                        </span>
                        <span className="text-[7px] text-gray-500 block">
                          1,248 Records • Zero manual entry
                        </span>
                      </div>
                      <span className="text-[8px] font-black text-white bg-[#F4512A] px-2 py-0.5 rounded shadow-xs">
                        1-Click Export
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3 Step Highlights */}
`;

// It should be inserted right after:
//                 <h3 className="text-sm sm:text-base font-black text-[#102126] leading-tight mb-2">
//                   Turn Data Into Impact.
//                 </h3>
//               </div>
const targetStr = `                <h3 className="text-sm sm:text-base font-black text-[#102126] leading-tight mb-2">
                  Turn Data Into Impact.
                </h3>
              </div>`;

content = content.replace(targetStr, targetStr + "\n\n" + replacement);

// Next: Wrap the "3 Step Highlights" lists in a stagger animation!
// There are three such lists: "01 Portal", "04 Donations & 80G", "07 Tracking".
// We will replace `<div className="mt-2 space-y-1 text-left">` with `<motion.div ...>`
const listTarget = `<div className="mt-2 space-y-1 text-left">`;
const listReplacement = `<motion.div 
                className="mt-2 space-y-1 text-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={{
                  visible: { transition: { staggerChildren: 0.15, delayChildren: 1.0 } }
                }}
              >`;

content = content.split(listTarget).join(listReplacement);

// We must also replace the inner items of these lists with motion.divs
const itemTarget = `<div className="flex items-start gap-1.5">`;
const itemReplacement = `<motion.div 
                  className="flex items-start gap-1.5"
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
                  }}
                >`;

content = content.split(itemTarget).join(itemReplacement);

// Close the motion.div for the lists!
content = content.split(`</p>\n                </div>\n              </div>`).join(`</p>\n                </motion.div>\n              </motion.div>`);

// Fix RoadmapLoop circle cutoff
content = content.replace(`<div className="overflow-x-auto pb-1 scrollbar-none">`, `<div className="overflow-x-auto py-5 px-2 scrollbar-none">`);


fs.writeFileSync('src/components/WorkflowSection.tsx', content);
