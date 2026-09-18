import re

with open('src/components/ProblemSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Desktop Traditional
content = content.replace('delay: (idx * 0.5) + 0.8 }', 'delay: (idx * 0.8) + 0.8 }')
# Desktop Modern
content = content.replace('delay: (idx * 0.5) + 1.2 }', 'delay: (idx * 0.8) + 1.2 }')

# Mobile Traditional (note: previous replace might have affected both if I wasn't careful, let me just run regex or string replace. I used exact strings earlier)
# Wait, let's just use regex for safety:
content = re.sub(r'delay: \(idx \* 0\.5\) \+ 0\.8', r'delay: (idx * 0.8) + 0.8', content)
content = re.sub(r'delay: \(idx \* 0\.5\) \+ 1\.2', r'delay: (idx * 0.8) + 1.2', content)

with open('src/components/ProblemSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print('Fixed delays')
