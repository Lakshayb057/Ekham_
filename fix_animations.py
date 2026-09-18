import re

# 1. ProblemSection.tsx
with open('src/components/ProblemSection.tsx', 'r', encoding='utf-8') as f:
    prob = f.read()

# Change once: true to once: false
prob = prob.replace('once: true', 'once: false')

# Smooth problem cards
old_variants = '''variants={{
                      hidden: { opacity: 0, x: -30, y: -20 },
                      visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
                    }}'''
new_variants = '''variants={{
                      hidden: { opacity: 0, x: -50, y: -30, scale: 0.9 },
                      visible: { opacity: 1, x: 0, y: 0, scale: 1, transition: { type: 'spring', stiffness: 60, damping: 14 } }
                    }}'''
prob = prob.replace(old_variants, new_variants)

# Increase stagger slightly for smoothness
prob = prob.replace('staggerChildren: 0.15', 'staggerChildren: 0.25')

with open('src/components/ProblemSection.tsx', 'w', encoding='utf-8') as f:
    f.write(prob)


# 2. WorkflowSection.tsx
with open('src/components/WorkflowSection.tsx', 'r', encoding='utf-8') as f:
    work = f.read()

work = work.replace('once: true', 'once: false')

with open('src/components/WorkflowSection.tsx', 'w', encoding='utf-8') as f:
    f.write(work)

