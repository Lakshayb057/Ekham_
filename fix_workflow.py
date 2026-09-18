import re

file_path = 'src/components/WorkflowSection.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace <p className="text-[8.5px]..."> with <motion.p ...>
old_p = '<p className=\"text-[8.5px] text-[#687176] leading-tight font-medium line-clamp-2 mt-0.5\">\n                  {step.desc}\n                </p>'
new_p = '''<motion.p
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.4, delay: 1 }}
                  className=\"text-[8.5px] text-[#687176] leading-tight font-medium line-clamp-2 mt-0.5\"
                >
                  {step.desc}
                </motion.p>'''

if old_p in content:
    content = content.replace(old_p, new_p)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print('Done workflow')
