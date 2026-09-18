import re

file_path = 'src/components/ProblemSection.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('''                              <Minus className=\"w-2 h-2 stroke-[3]\" />
                            )}
                          </div>
                        </div>''', '''                              <Minus className=\"w-2 h-2 stroke-[3]\" />
                            )}
                          </div>
                        </motion.div>''')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print('Fixed missing closing tag')
