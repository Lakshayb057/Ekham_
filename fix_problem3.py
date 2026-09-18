import re

with open('src/components/ProblemSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Problem Cards overlapping: remove x translation, just use y.
old_prob_variants = '''variants={{
                      hidden: { opacity: 0, x: -50, y: -30, scale: 0.9 },
                      visible: { opacity: 1, x: 0, y: 0, scale: 1, transition: { type: 'spring', stiffness: 60, damping: 14 } }
                    }}'''
new_prob_variants = '''variants={{
                      hidden: { opacity: 0, x: 0, y: -25 },
                      visible: { opacity: 1, x: 0, y: 0, transition: { type: 'spring', stiffness: 70, damping: 15 } }
                    }}'''
content = content.replace(old_prob_variants, new_prob_variants)

# 2. Nodes highlight instead of pop in (Desktop Traditional)
content = content.replace('''<motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false, amount: 0.8 }} transition={{ duration: 0.3, delay: (idx * 0.4) + 0.6 }} className=\"flex flex-col items-center flex-shrink-0\">''',
'''<motion.div initial={{ opacity: 0.25 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.8 }} transition={{ duration: 0.4, delay: (idx * 0.5) + 0.8 }} className=\"flex flex-col items-center flex-shrink-0\">''')

# Desktop Modern
content = content.replace('''<motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false, amount: 0.8 }} transition={{ duration: 0.3, delay: (idx * 0.4) + 0.8 }} className=\"flex flex-col items-center flex-shrink-0\">''',
'''<motion.div initial={{ opacity: 0.25 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.8 }} transition={{ duration: 0.4, delay: (idx * 0.5) + 1.2 }} className=\"flex flex-col items-center flex-shrink-0\">''')

# Mobile Traditional
content = content.replace('''<motion.div key={idx} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.8 }} transition={{ duration: 0.3, delay: (idx * 0.4) + 0.6 }} className=\"flex items-center gap-2.5 sm:gap-6 mb-3 sm:mb-6 last:mb-0 relative z-10\">''',
'''<motion.div key={idx} initial={{ opacity: 0.25 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.8 }} transition={{ duration: 0.4, delay: (idx * 0.5) + 0.8 }} className=\"flex items-center gap-2.5 sm:gap-6 mb-3 sm:mb-6 last:mb-0 relative z-10\">''')

# Mobile Modern
content = content.replace('''<motion.div key={idx} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.8 }} transition={{ duration: 0.3, delay: (idx * 0.4) + 0.8 }} className=\"flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4 last:mb-0 relative z-10 group cursor-default\">''',
'''<motion.div key={idx} initial={{ opacity: 0.25 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.8 }} transition={{ duration: 0.4, delay: (idx * 0.5) + 1.2 }} className=\"flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4 last:mb-0 relative z-10 group cursor-default\">''')

with open('src/components/ProblemSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print('Done fixing ProblemSection')
