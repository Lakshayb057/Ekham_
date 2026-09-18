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

# 3. Animate Problem Cards Container
# Replace <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5">
content = content.replace('<div className=\"grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5\">',
'''<motion.div 
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
            >''')

# Close problem cards container
content = content.replace('</div>\n          </div>\n\n        </div>\n\n        {/* ================= THIN', '</motion.div>\n          </div>\n\n        </div>\n\n        {/* ================= THIN')

# Animate Problem Cards Items
content = content.replace('''<div
                    key={idx}
                    className=\"bg-[#F1EEE7] hover:bg-[#EAE4DC] rounded-2xl p-3.5 sm:p-4 flex flex-col justify-start border border-[#E2DAD0] shadow-2xs hover:shadow-xs hover:-translate-y-0.5 transition-all duration-200 min-h-[110px] sm:min-h-[120px]\"
                  >''',
'''<motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, x: -30, y: -20 },
                      visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
                    }}
                    className=\"bg-[#F1EEE7] hover:bg-[#EAE4DC] rounded-2xl p-3.5 sm:p-4 flex flex-col justify-start border border-[#E2DAD0] shadow-2xs hover:shadow-xs hover:-translate-y-0.5 transition-all duration-200 min-h-[110px] sm:min-h-[120px]\"
                  >''')
content = content.replace('</p>\n                  </div>\n                );\n              })}', '</p>\n                  </motion.div>\n                );\n              })}')

# 4. Why EKhum panels animation

# DESKTOP TRADITIONAL
content = content.replace('''{/* ---------------- LEFT PANEL: TRADITIONAL OPERATIONS ---------------- */}
            <div className=\"bg-[#F1EEE7] border border-[#E2DAD0] rounded-3xl p-5 relative flex flex-col justify-center h-full min-h-[185px]\">
              <div>''',
'''{/* ---------------- LEFT PANEL: TRADITIONAL OPERATIONS ---------------- */}
            <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className=\"bg-[#F1EEE7] border border-[#E2DAD0] rounded-3xl p-5 relative flex flex-col justify-center h-full min-h-[185px]\">
              <div>''')
content = content.replace('''</div>
              </div>
            </div>

            {/* ---------------- CENTER COMPARISON INDICATOR ---------------- */}''',
'''</div>
              </div>
            </motion.div>

            {/* ---------------- CENTER COMPARISON INDICATOR ---------------- */}''', 1)

# DESKTOP MODERN
content = content.replace('''{/* ---------------- RIGHT PANEL: WITH EKHUM ---------------- */}
            <div className=\"bg-[#153D2B] border border-[#1F543C] rounded-3xl p-5 relative shadow-md flex flex-col justify-center h-full min-h-[185px] overflow-hidden\">
              <div className=\"absolute top-0 right-1/4 w-48 h-12 bg-[#F4512A]/15 blur-xl pointer-events-none rounded-full\"></div>''',
'''{/* ---------------- RIGHT PANEL: WITH EKHUM ---------------- */}
            <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className=\"bg-[#153D2B] border border-[#1F543C] rounded-3xl p-5 relative shadow-md flex flex-col justify-center h-full min-h-[185px] overflow-hidden\">
              <div className=\"absolute top-0 right-1/4 w-48 h-12 bg-[#F4512A]/15 blur-xl pointer-events-none rounded-full\"></div>''')

content = content.replace('''</div>
            </div>
          </div>

          {/* Main Comparison Layout: MOBILE (Vertical Side-by-side) */}''',
'''</div>
            </motion.div>
          </div>

          {/* Main Comparison Layout: MOBILE (Vertical Side-by-side) */}''')


# MOBILE TRADITIONAL
content = content.replace('''{/* ---------------- LEFT PANEL: TRADITIONAL OPERATIONS ---------------- */}
            <div className=\"bg-[#F1EEE7] border border-[#E2DAD0] rounded-xl sm:rounded-3xl p-3 sm:p-4.5 relative flex flex-col justify-start h-full min-h-[170px]\">
              <div>''',
'''{/* ---------------- LEFT PANEL: TRADITIONAL OPERATIONS ---------------- */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className=\"bg-[#F1EEE7] border border-[#E2DAD0] rounded-xl sm:rounded-3xl p-3 sm:p-4.5 relative flex flex-col justify-start h-full min-h-[170px]\">
              <div>''')

content = content.replace('''</div>
              </div>
            </div>

            {/* ---------------- CENTER COMPARISON INDICATOR ---------------- */}''',
'''</div>
              </div>
            </motion.div>

            {/* ---------------- CENTER COMPARISON INDICATOR ---------------- */}''')

# MOBILE MODERN
content = content.replace('''{/* ---------------- RIGHT PANEL: WITH EKHUM ---------------- */}
            <div className=\"bg-[#153D2B] border border-[#1F543C] rounded-xl sm:rounded-3xl p-3 sm:p-4.5 relative shadow-md flex flex-col justify-start h-full min-h-[170px] overflow-hidden\">
              <div className=\"absolute top-0 right-1/4 w-32 sm:w-48 h-12 bg-[#F4512A]/15 blur-xl pointer-events-none rounded-full\"></div>''',
'''{/* ---------------- RIGHT PANEL: WITH EKHUM ---------------- */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className=\"bg-[#153D2B] border border-[#1F543C] rounded-xl sm:rounded-3xl p-3 sm:p-4.5 relative shadow-md flex flex-col justify-start h-full min-h-[170px] overflow-hidden\">
              <div className=\"absolute top-0 right-1/4 w-32 sm:w-48 h-12 bg-[#F4512A]/15 blur-xl pointer-events-none rounded-full\"></div>''')

content = content.replace('''</div>
            </div>

          </div>

          {/* 4 Lightweight Feature Highlights */}''',
'''</div>
            </motion.div>

          </div>

          {/* 4 Lightweight Feature Highlights */}''')


# 5. Highlight Nodes Desktop Traditional
content = content.replace('''<div className=\"flex flex-col items-center flex-shrink-0\">
                          <div className=\"w-[58px] xl:w-[64px] h-[60px] xl:h-[66px] bg-white rounded-xl border border-[#E0D8CC] shadow-2xs flex flex-col items-center justify-center p-1 text-center\">''',
'''<motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.8 }} transition={{ duration: 0.3, delay: (idx * 0.4) + 0.6 }} className=\"flex flex-col items-center flex-shrink-0\">
                          <div className=\"w-[58px] xl:w-[64px] h-[60px] xl:h-[66px] bg-white rounded-xl border border-[#E0D8CC] shadow-2xs flex flex-col items-center justify-center p-1 text-center\">''')
content = content.replace('''</Minus>
                              )}
                            </div>
                          </div>
                        </div>
                        {idx < traditionalNodes.length - 1 && (''',
'''</Minus>
                              )}
                            </div>
                          </motion.div>
                        </div>
                        {idx < traditionalNodes.length - 1 && (''') # Wait, this might be tricky because there's an extra div?
# Let's just do it cleanly using regex or explicit replace.
# The desktop traditional node looks like this:
#                        <div className="flex flex-col items-center flex-shrink-0">
#                          <div className="w-[58px] xl:w-[64px] h-[60px] xl:h-[66px] bg-white rounded-xl border border-[#E0D8CC] shadow-2xs flex flex-col items-center justify-center p-1 text-center">
#                            <Icon className="w-4 h-4 text-[#55605A] stroke-[1.8] mb-0.5" />
#                            <span className="text-[9px] font-bold text-[#102126] leading-tight text-center whitespace-pre-line">
#                              {node.label}
#                            </span>
#                          </div>
#                          <div className="w-3.5 h-3.5 rounded-full bg-[#8E877D] text-white flex items-center justify-center -mt-1.5 shadow-2xs z-10">
#                            {node.badge === 'x' ? (
#                              <XIcon className="w-2 h-2 stroke-[2.8]" />
#                            ) : (
#                              <Minus className="w-2 h-2 stroke-[3]" />
#                            )}
#                          </div>
#                        </div>

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print('Phase 1 done')
