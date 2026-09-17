import sys

with open('src/components/WorkflowSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

c3_old = """          {/* ---------------- STAGE 03: MULTIPLY (PHONE 3) ---------------- */}
          <div className="relative flex flex-col justify-between">"""

c3_new = """          {/* ---------------- STAGE 03: MULTIPLY (PHONE 3) ---------------- */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }} className="relative flex flex-col justify-between">"""

content = content.replace(c3_old, c3_new)

with open('src/components/WorkflowSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Fixed stage 3 open tag!")
