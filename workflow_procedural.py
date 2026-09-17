import sys

with open('src/components/WorkflowSection.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Ensure motion import
has_motion = any("import { motion }" in line for line in lines)
if not has_motion:
    for i, line in enumerate(lines):
        if line.startswith("import React"):
            lines[i] = "import React from 'react';\nimport { motion } from 'framer-motion';\n"
            break

# 1. Heading Wrap
# Find "OUR END-TO-END WORKFLOW" block
for i, line in enumerate(lines):
    if "OUR END-TO-END WORKFLOW" in line:
        # Go up to find the div
        for j in range(i, i-10, -1):
            if '<div className="text-left pb-2 sm:pb-3 border-b border-[#E8DFD3]/80 mb-1 sm:mb-2">' in lines[j]:
                lines[j] = '        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="text-left pb-2 sm:pb-3 border-b border-[#E8DFD3]/80 mb-1 sm:mb-2">\n'
                break
        
        # Go down to find the closing div of this header
        for j in range(i, i+20):
            if '</p>' in lines[j]:
                lines[j+1] = '        </motion.div>\n'
                break
        break

# 2. Stages 1, 2, 3 wrappers
stage1_idx = -1
stage2_idx = -1
stage3_idx = -1
for i, line in enumerate(lines):
    if "STAGE 01: LAUNCH (PHONE 1)" in line: stage1_idx = i
    if "STAGE 02: TRANSACT (PHONE 2)" in line: stage2_idx = i
    if "STAGE 03: MULTIPLY (PHONE 3)" in line: stage3_idx = i

def replace_stage_wrapper(stage_comment_idx, x_val, y_val, delay):
    if stage_comment_idx == -1: return
    # The div is on the line right after the comment
    wrapper_line_idx = stage_comment_idx + 1
    # Replace '<div className="' with '<motion.div initial={{ opacity: 0, x: {x_val}, y: {y_val} }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: {delay} }} className="'
    lines[wrapper_line_idx] = lines[wrapper_line_idx].replace('<div className="', f'<motion.div initial={{{{ opacity: 0, x: {x_val}, y: {y_val} }}}} whileInView={{{{ opacity: 1, x: 0, y: 0 }}}} viewport={{{{ once: false, amount: 0.1 }}}} transition={{{{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: {delay} }}}} className="')

    # Find the closing tag. The closing tag is a '</div>' that has exactly the same indentation as the opening div.
    indent = len(lines[wrapper_line_idx]) - len(lines[wrapper_line_idx].lstrip())
    # Find next line with same indent that is '</div>'
    for j in range(wrapper_line_idx + 1, len(lines)):
        curr_indent = len(lines[j]) - len(lines[j].lstrip())
        if curr_indent == indent and lines[j].strip().startswith("</div>"):
            lines[j] = lines[j].replace("</div>", "</motion.div>")
            break

replace_stage_wrapper(stage1_idx, -50, 0, 0)
replace_stage_wrapper(stage2_idx, 0, -50, 0.1)
replace_stage_wrapper(stage3_idx, 50, 0, 0.2)

content = "".join(lines)

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

with open('src/components/WorkflowSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done perfectly and procedurally!")
