import os

# FinalCTA.tsx
with open('src/components/FinalCTA.tsx', 'r', encoding='utf-8') as f:
    content = f.read()
content = content.replace('Stronger India<br />', 'Stronger Future<br />')
content = content.replace('alt=\"Smiling Indian Girl\"', 'alt=\"Smiling Girl\"')
with open('src/components/FinalCTA.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

# HeroImpactSlider.tsx
with open('src/components/HeroImpactSlider.tsx', 'r', encoding='utf-8') as f:
    content = f.read()
content = content.replace('Young Indian girl', 'Young girl')
content = content.replace('Young Indian woman', 'Young woman')
with open('src/components/HeroImpactSlider.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

# HeroSection.tsx
with open('src/components/HeroSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()
content = content.replace('BRIGHTER INDIA.', 'BRIGHTER FUTURE.')
with open('src/components/HeroSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

# StoryModal.tsx
with open('src/components/StoryModal.tsx', 'r', encoding='utf-8') as f:
    content = f.read()
content = content.replace('Indian NGOs', 'NGOs')
with open('src/components/StoryModal.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('Done fixing Indian/India')
