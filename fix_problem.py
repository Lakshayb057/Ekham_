import re

file_path = 'src/components/ProblemSection.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add motion import
if 'import { motion } ' not in content:
    content = content.replace('import React from \'react\';', 'import React from \'react\';\nimport { motion } from \'framer-motion\';')

# 2. Remove Indian
content = content.replace('Indian Charities<br />\n              Deserve <span className=\"text-[#F4512A]\">Better.</span>', 'Charities<br />\n              Deserve <span className=\"text-[#F4512A]\">Better.</span>')
content = content.replace('Indian Charities', 'Charities')

# 3. Animate Problem Cards
cards_container_old = '<div className=\"grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5\">'
cards_container_new = '''<motion.div 
              initial=\"hidden\"
              whileInView=\"visible\"
              viewport={{ once: true, amount: 0.1 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
              className=\"grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5\"
            >'''
content = content.replace(cards_container_old, cards_container_new)

card_old = '''<div
                    key={idx}
                    className=\"bg-[#F1EEE7] hover:bg-[#EAE4DC] rounded-2xl p-3.5 sm:p-4 flex flex-col justify-start border border-[#E2DAD0] shadow-2xs hover:shadow-xs hover:-translate-y-0.5 transition-all duration-200 min-h-[110px] sm:min-h-[120px]\"
                  >'''
card_new = '''<motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, x: -30, y: -20 },
                      visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
                    }}
                    className=\"bg-[#F1EEE7] hover:bg-[#EAE4DC] rounded-2xl p-3.5 sm:p-4 flex flex-col justify-start border border-[#E2DAD0] shadow-2xs hover:shadow-xs hover:-translate-y-0.5 transition-all duration-200 min-h-[110px] sm:min-h-[120px]\"
                  >'''
content = content.replace(card_old, card_new)

content = content.replace('</div>\n          </div>\n\n        </div>\n\n        {/* ================= THIN', '</motion.div>\n          </div>\n\n        </div>\n\n        {/* ================= THIN')

# 4. Why EKhum Panels Desktop
content = content.replace('<div className=\"bg-[#F1EEE7] border border-[#E2DAD0] rounded-3xl p-5 relative flex flex-col justify-center h-full min-h-[185px]\">',
'<motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className=\"bg-[#F1EEE7] border border-[#E2DAD0] rounded-3xl p-5 relative flex flex-col justify-center h-full min-h-[185px]\">')
content = content.replace('</div>\n\n            {/* ---------------- CENTER COMPARISON INDICATOR ---------------- */}', '</motion.div>\n\n            {/* ---------------- CENTER COMPARISON INDICATOR ---------------- */}')

content = content.replace('<div className=\"bg-[#153D2B] border border-[#1F543C] rounded-3xl p-5 relative shadow-md flex flex-col justify-center h-full min-h-[185px] overflow-hidden\">',
'<motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className=\"bg-[#153D2B] border border-[#1F543C] rounded-3xl p-5 relative shadow-md flex flex-col justify-center h-full min-h-[185px] overflow-hidden\">')
content = content.replace('</div>\n          </div>\n\n          {/* Main Comparison Layout: MOBILE', '</motion.div>\n          </div>\n\n          {/* Main Comparison Layout: MOBILE')

# Why EKhum Panels Mobile
content = content.replace('<div className=\"bg-[#F1EEE7] border border-[#E2DAD0] rounded-xl sm:rounded-3xl p-3 sm:p-4.5 relative flex flex-col justify-start h-full min-h-[170px]\">',
'<motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className=\"bg-[#F1EEE7] border border-[#E2DAD0] rounded-xl sm:rounded-3xl p-3 sm:p-4.5 relative flex flex-col justify-start h-full min-h-[170px]\">')
content = content.replace('</div>\n\n            {/* ---------------- CENTER COMPARISON INDICATOR ---------------- */}', '</motion.div>\n\n            {/* ---------------- CENTER COMPARISON INDICATOR ---------------- */}', 1)

content = content.replace('<div className=\"bg-[#153D2B] border border-[#1F543C] rounded-xl sm:rounded-3xl p-3 sm:p-4.5 relative shadow-md flex flex-col justify-start h-full min-h-[170px] overflow-hidden\">',
'<motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className=\"bg-[#153D2B] border border-[#1F543C] rounded-xl sm:rounded-3xl p-3 sm:p-4.5 relative shadow-md flex flex-col justify-start h-full min-h-[170px] overflow-hidden\">')
content = content.replace('</div>\n\n          </div>\n\n          {/* 4 Lightweight Feature Highlights */}', '</motion.div>\n\n          </div>\n\n          {/* 4 Lightweight Feature Highlights */}')

# 5. Highlight nodes one by one
# Desktop traditional
content = content.replace('<div className=\"flex flex-col items-center flex-shrink-0\">',
'<motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.8 }} transition={{ duration: 0.3, delay: (idx * 0.4) + 0.6 }} className=\"flex flex-col items-center flex-shrink-0\">')
content = content.replace('</div>\n                          <div className=\"w-3.5 h-3.5 rounded-full bg-[#8E877D]', '</div>\n                          <div className=\"w-3.5 h-3.5 rounded-full bg-[#8E877D]') # no need, wait the closing div is ok
content = content.replace('</Minus>\n                              )}\n                            </div>\n                          </div>',
'</Minus>\n                              )}\n                            </div>\n                          </motion.div>')
# Desktop modern
# Wait, for modern it's the exact same class <div className="flex flex-col items-center flex-shrink-0"> which I just replaced!
# So BOTH desktop traditional and modern are now wrapped in motion.div.

# Let's check mobile traditional
content = content.replace('<div key={idx} className=\"flex items-center gap-2.5 sm:gap-6 mb-3 sm:mb-6 last:mb-0 relative z-10\">',
'<motion.div key={idx} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.8 }} transition={{ duration: 0.3, delay: (idx * 0.4) + 0.6 }} className=\"flex items-center gap-2.5 sm:gap-6 mb-3 sm:mb-6 last:mb-0 relative z-10\">')
content = content.replace('</span>\n                        </div>', '</span>\n                        </motion.div>')

# Mobile modern
content = content.replace('<div key={idx} className=\"flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4 last:mb-0 relative z-10 group cursor-default\">',
'<motion.div key={idx} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.8 }} transition={{ duration: 0.3, delay: (idx * 0.4) + 0.8 }} className=\"flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4 last:mb-0 relative z-10 group cursor-default\">')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print('Done!')
