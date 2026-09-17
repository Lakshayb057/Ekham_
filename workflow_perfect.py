import sys

with open('src/components/WorkflowSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Heading Wrap
h_old = """        <div className="text-left pb-2 sm:pb-3 border-b border-[#E8DFD3]/80 mb-1 sm:mb-2">
          <span className="text-[10.5px] sm:text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#F4512A] block mb-1">
            OUR END-TO-END WORKFLOW
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.15rem] font-black text-[#102126] tracking-[-0.035em] leading-[1.08] mb-1">
            One Donation. <span className="text-[#F4512A]">Nine Connected Moments.</span>
          </h2>
          <p className="text-[11.5px] sm:text-xs text-[#687176] max-w-2xl font-normal leading-tight">
            From campaign creation to lasting impact — everything works together, automatically.
          </p>
        </div>"""
h_new = """        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="text-left pb-2 sm:pb-3 border-b border-[#E8DFD3]/80 mb-1 sm:mb-2">
          <span className="text-[10.5px] sm:text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#F4512A] block mb-1">
            OUR END-TO-END WORKFLOW
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.15rem] font-black text-[#102126] tracking-[-0.035em] leading-[1.08] mb-1">
            One Donation. <span className="text-[#F4512A]">Nine Connected Moments.</span>
          </h2>
          <p className="text-[11.5px] sm:text-xs text-[#687176] max-w-2xl font-normal leading-tight">
            From campaign creation to lasting impact — everything works together, automatically.
          </p>
        </motion.div>"""
content = content.replace(h_old, h_new)

# 2. Stage 1 Outer Wrap
c1_old = """          {/* ---------------- STAGE 01: LAUNCH (PHONE 1) ---------------- */}
          <div className="relative flex flex-col justify-between lg:border-r lg:border-[#E5DCD0]/80 lg:pr-7">"""
c1_new = """          {/* ---------------- STAGE 01: LAUNCH (PHONE 1) ---------------- */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="relative flex flex-col justify-between lg:border-r lg:border-[#E5DCD0]/80 lg:pr-7">"""
c1_old_close = """          </div>

          {/* ---------------- STAGE 02: TRANSACT (PHONE 2) ---------------- */}"""
c1_new_close = """          </motion.div>

          {/* ---------------- STAGE 02: TRANSACT (PHONE 2) ---------------- */}"""
content = content.replace(c1_old, c1_new)
content = content.replace(c1_old_close, c1_new_close)


# 3. Stage 2 Outer Wrap
c2_old = """          {/* ---------------- STAGE 02: TRANSACT (PHONE 2) ---------------- */}
          <div className="relative flex flex-col justify-between lg:border-r lg:border-[#E5DCD0]/80 lg:px-3">"""
c2_new = """          {/* ---------------- STAGE 02: TRANSACT (PHONE 2) ---------------- */}
          <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }} className="relative flex flex-col justify-between lg:border-r lg:border-[#E5DCD0]/80 lg:px-3">"""
c2_old_close = """          </div>

          {/* ---------------- STAGE 03: MULTIPLY (PHONE 3) ---------------- */}"""
c2_new_close = """          </motion.div>

          {/* ---------------- STAGE 03: MULTIPLY (PHONE 3) ---------------- */}"""
content = content.replace(c2_old, c2_new)
content = content.replace(c2_old_close, c2_new_close)


# 4. Stage 3 Outer Wrap
c3_old = """          {/* ---------------- STAGE 03: MULTIPLY (PHONE 3) ---------------- */}
          <div className="relative flex flex-col justify-between lg:pl-7">"""
c3_new = """          {/* ---------------- STAGE 03: MULTIPLY (PHONE 3) ---------------- */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }} className="relative flex flex-col justify-between lg:pl-7">"""
c3_old_close = """          </div>

        </div>

        {/* =========================================================================
            BOTTOM ACTIVE LOOPING ROADMAP
        ========================================================================== */}"""
c3_new_close = """          </motion.div>

        </div>

        {/* =========================================================================
            BOTTOM ACTIVE LOOPING ROADMAP
        ========================================================================== */}"""
content = content.replace(c3_old, c3_new)
content = content.replace(c3_old_close, c3_new_close)

# 5. Fix Card 3 Inner BG
card3_inner_old = """                  {/* Dashboard Screen */}
                  <div className="bg-[#14201A] rounded-xl p-3 text-left border border-[#273B30] text-white">
                    {/* Settlement Stat */}
                    <div className="bg-white rounded-lg p-2 mb-2 border border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="text-[7.5px] text-gray-400 uppercase font-bold tracking-wider">
                          Net Settled Donations
                        </span>
                        <span className="text-[8px] font-bold text-[#F4512A]">+28.4% YoY</span>
                      </div>
                      <span className="text-[15px] font-black text-[#153D2B] tracking-tight block">
                        ₹48,20,500
                      </span>
                    </div>

                    {/* Volume Bar visualization */}
                    <div className="flex items-end gap-1.5 h-6 bg-white p-1.5 rounded-md mb-2 border border-gray-200">
                      {[30, 45, 60, 40, 80, 100].map((h, i) => (
                        <motion.div 
                          key={i} 
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          viewport={{ once: false }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          className={`w-full rounded-sm ${i === 5 ? 'bg-[#F4512A]' : 'bg-emerald-400/80'}`}
                        ></motion.div>
                      ))}
                    </div>

                    {/* 10BD Action */}
                    <div className="bg-[#0A1216] rounded-lg p-2 flex items-center justify-between border border-[#1E3037]">
                      <div>
                        <div className="text-[9px] font-bold text-white mb-0.5">Form 10BD Ready</div>
                        <div className="text-[7.5px] text-gray-400">1,248 Records • Zero manual entry</div>
                      </div>
                      <div className="px-2 py-1 bg-[#F4512A] text-white text-[8px] font-bold rounded shadow-xs">
                        1-Click Export
                      </div>
                    </div>
                  </div>"""

card3_inner_new = """                  {/* Dashboard Screen */}
                  <div className="bg-[#FAF8F5] rounded-xl p-3 text-left border border-[#E5DCD0] text-[#102126]">
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
                          <motion.div initial={{ width: 0 }} whileInView={{ width: `${h}%` }} viewport={{ once: false }} transition={{ duration: 0.5, delay: i * 0.1 }} className={`h-full ${i === 4 ? 'bg-[#F4512A]' : 'bg-[#153D2B]'}`}></motion.div>
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
                  </div>"""
content = content.replace(card3_inner_old, card3_inner_new)

if "import { motion }" not in content:
    content = content.replace("import React from 'react';", "import React from 'react';\nimport { motion } from 'framer-motion';")

with open('src/components/WorkflowSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done perfectly!")
