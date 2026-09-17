const fs = require('fs');
let w = fs.readFileSync('src/components/WorkflowSection.tsx', 'utf8');

// The first block
const block1 = `              <div className="mt-2 space-y-1 text-left">
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

const block1Replace = `              <motion.div 
                className="mt-2 space-y-1 text-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={{
                  visible: { transition: { staggerChildren: 0.15, delayChildren: 1.0 } }
                }}
              >
                <motion.div className="flex items-start gap-1.5" variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } } }}>
                  <span className="text-[10px] font-black text-[#153D2B]">01</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight">
                    <strong>Portal:</strong> Secure KYC onboarding & roles
                  </p>
                </motion.div>
                <motion.div className="flex items-start gap-1.5" variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } } }}>
                  <span className="text-[10px] font-black text-[#F4512A]">02</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight">
                    <strong>Creation:</strong> Custom goal bars & ask ladders
                  </p>
                </motion.div>
                <motion.div className="flex items-start gap-1.5" variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } } }}>
                  <span className="text-[10px] font-black text-[#153D2B]">03</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight">
                    <strong>Connection:</strong> Universal widget & WhatsApp
                  </p>
                </motion.div>
              </motion.div>`;

// The second block
const block2 = `              <div className="mt-2 space-y-1 text-left">
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

const block2Replace = `              <motion.div 
                className="mt-2 space-y-1 text-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={{
                  visible: { transition: { staggerChildren: 0.15, delayChildren: 1.0 } }
                }}
              >
                <motion.div className="flex items-start gap-1.5" variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } } }}>
                  <span className="text-[10px] font-black text-[#F4512A]">04</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight">
                    <strong>Donations & 80G:</strong> Instant WhatsApp 80G in &lt;3s
                  </p>
                </motion.div>
                <motion.div className="flex items-start gap-1.5" variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } } }}>
                  <span className="text-[10px] font-black text-[#153D2B]">05</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight">
                    <strong>Segmentation:</strong> Live tiers & tax classifications
                  </p>
                </motion.div>
                <motion.div className="flex items-start gap-1.5" variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } } }}>
                  <span className="text-[10px] font-black text-[#F4512A]">06</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight">
                    <strong>Journeys:</strong> Automated engagement communication
                  </p>
                </motion.div>
              </motion.div>`;

// The third block
const block3 = `              <div className="mt-2 space-y-1 text-left">
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

const block3Replace = `              <motion.div 
                className="mt-2 space-y-1 text-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={{
                  visible: { transition: { staggerChildren: 0.15, delayChildren: 1.0 } }
                }}
              >
                <motion.div className="flex items-start gap-1.5" variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } } }}>
                  <span className="text-[10px] font-black text-[#153D2B]">07</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight">
                    <strong>Tracking:</strong> Live gross volume & health
                  </p>
                </motion.div>
                <motion.div className="flex items-start gap-1.5" variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } } }}>
                  <span className="text-[10px] font-black text-[#F4512A]">08</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight">
                    <strong>Reporting:</strong> 1-click Form 10BD export
                  </p>
                </motion.div>
                <motion.div className="flex items-start gap-1.5" variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } } }}>
                  <span className="text-[10px] font-black text-[#153D2B]">09</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight">
                    <strong>AI Engine:</strong> Lapsed donor risk & upgrades
                  </p>
                </motion.div>
              </motion.div>`;

w = w.replace(block1, block1Replace);
w = w.replace(block2, block2Replace);
w = w.replace(block3, block3Replace);

// The third inner card to be white
const targetThirdCardOuter = `              {/* Device Mockup 3: Wide Live Ledger & Tax Filing */}
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
                  <div className="bg-[#14201A] rounded-xl p-3 text-left border border-[#273B30] text-white">
                    {/* Settlement Stat */}
                    <div className="bg-white/5 rounded-lg p-2 mb-2 border border-white/5">
                      <div className="flex items-center justify-between">
                        <span className="text-[7.5px] text-gray-400 uppercase font-bold tracking-wider">
                          Net Settled Donations
                        </span>
                        <span className="text-[8px] font-bold text-emerald-400">+28.4% YoY</span>
                      </div>
                      <span className="text-[15px] font-black text-white tracking-tight block">
                        ₹48,20,500
                      </span>
                    </div>

                    {/* Volume Bar visualization */}
                    <div className="flex items-end gap-1.5 h-6 bg-white/5 p-1.5 rounded-md mb-2">
                      <div className="w-1/6 bg-emerald-500/40 h-[40%] rounded-xs"></div>
                      <div className="w-1/6 bg-emerald-500/50 h-[65%] rounded-xs"></div>
                      <div className="w-1/6 bg-emerald-500/60 h-[50%] rounded-xs"></div>
                      <div className="w-1/6 bg-emerald-500/80 h-[75%] rounded-xs"></div>
                      <div className="w-1/6 bg-[#F4512A] h-[100%] rounded-xs"></div>
                      <div className="w-1/6 bg-emerald-400 h-[88%] rounded-xs"></div>
                    </div>

                    {/* 10BD 1-Click Tile */}
                    <div className="bg-[#1F3429] p-2 rounded-lg flex items-center justify-between border border-emerald-400/25">
                      <div>
                        <span className="text-[8.5px] font-black block leading-tight text-white">
                          Form 10BD Ready
                        </span>
                        <span className="text-[7px] text-emerald-200 block">
                          1,248 Records • Zero manual entry
                        </span>
                      </div>
                      <span className="text-[8px] font-black text-white bg-[#F4512A] px-2 py-0.5 rounded shadow-xs">
                        1-Click Export
                      </span>
                    </div>
                  </div>
                </div>
              </div>`;

const replaceThirdCardOuter = `              {/* Device Mockup 3: Wide Live Ledger & Tax Filing */}
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
              </div>`;
w = w.replace(targetThirdCardOuter, replaceThirdCardOuter);


// Roadmap clipping fix
w = w.replace('<div className="overflow-x-auto pb-1 scrollbar-none">', '<div className="overflow-x-auto py-5 px-2 scrollbar-none">');

fs.writeFileSync('src/components/WorkflowSection.tsx', w);
