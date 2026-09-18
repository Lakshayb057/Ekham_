import re

with open('src/components/WorkflowSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the 3 Step Highlights container divs
# For Stage 1 (01, 02, 03)
content = content.replace('''<div className=\"flex items-start gap-1.5\">
                  <span className=\"text-[10px] font-black text-[#153D2B]\">01</span>''',
'''<motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.8 }} transition={{ duration: 0.4, delay: 1.0 }} className=\"flex items-start gap-1.5\">
                  <span className=\"text-[10px] font-black text-[#153D2B]\">01</span>''')

content = content.replace('''<div className=\"flex items-start gap-1.5\">
                  <span className=\"text-[10px] font-black text-[#F4512A]\">02</span>''',
'''<motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.8 }} transition={{ duration: 0.4, delay: 1.2 }} className=\"flex items-start gap-1.5\">
                  <span className=\"text-[10px] font-black text-[#F4512A]\">02</span>''')

content = content.replace('''<div className=\"flex items-start gap-1.5\">
                  <span className=\"text-[10px] font-black text-[#153D2B]\">03</span>''',
'''<motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.8 }} transition={{ duration: 0.4, delay: 1.4 }} className=\"flex items-start gap-1.5\">
                  <span className=\"text-[10px] font-black text-[#153D2B]\">03</span>''')

# For Stage 2 (04, 05, 06)
content = content.replace('''<div className=\"flex items-start gap-1.5\">
                  <span className=\"text-[10px] font-black text-[#F4512A]\">04</span>''',
'''<motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.8 }} transition={{ duration: 0.4, delay: 1.1 }} className=\"flex items-start gap-1.5\">
                  <span className=\"text-[10px] font-black text-[#F4512A]\">04</span>''')

content = content.replace('''<div className=\"flex items-start gap-1.5\">
                  <span className=\"text-[10px] font-black text-[#153D2B]\">05</span>''',
'''<motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.8 }} transition={{ duration: 0.4, delay: 1.3 }} className=\"flex items-start gap-1.5\">
                  <span className=\"text-[10px] font-black text-[#153D2B]\">05</span>''')

content = content.replace('''<div className=\"flex items-start gap-1.5\">
                  <span className=\"text-[10px] font-black text-[#F4512A]\">06</span>''',
'''<motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.8 }} transition={{ duration: 0.4, delay: 1.5 }} className=\"flex items-start gap-1.5\">
                  <span className=\"text-[10px] font-black text-[#F4512A]\">06</span>''')


# For Stage 3 (07, 08, 09)
content = content.replace('''<div className=\"flex items-start gap-1.5\">
                  <span className=\"text-[10px] font-black text-[#153D2B]\">07</span>''',
'''<motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.8 }} transition={{ duration: 0.4, delay: 1.2 }} className=\"flex items-start gap-1.5\">
                  <span className=\"text-[10px] font-black text-[#153D2B]\">07</span>''')

content = content.replace('''<div className=\"flex items-start gap-1.5\">
                  <span className=\"text-[10px] font-black text-[#F4512A]\">08</span>''',
'''<motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.8 }} transition={{ duration: 0.4, delay: 1.4 }} className=\"flex items-start gap-1.5\">
                  <span className=\"text-[10px] font-black text-[#F4512A]\">08</span>''')

content = content.replace('''<div className=\"flex items-start gap-1.5\">
                  <span className=\"text-[10px] font-black text-[#153D2B]\">09</span>''',
'''<motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.8 }} transition={{ duration: 0.4, delay: 1.6 }} className=\"flex items-start gap-1.5\">
                  <span className=\"text-[10px] font-black text-[#153D2B]\">09</span>''')

# Close tags for all 9 highlights
content = content.replace('''</p>
                </div>''',
'''</p>
                </motion.div>''')

with open('src/components/WorkflowSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print('Done fixing WorkflowSection highlights')
