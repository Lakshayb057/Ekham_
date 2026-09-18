import re

file_path = 'src/components/PillarsSection.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace getOrigin logic to just scale and opacity, no x/y translations.
# We will change initial={{ opacity: 0, scale: 0.5, x: origin.x, y: origin.y }}
# to initial={{ opacity: 0, scale: 0.6, y: 20 }}
# actually the user wants "coming from center". 
# Let's use scale: 0.5.

old_origin = '''    const getOrigin = () => {
      switch(index) {
        case 0: return { x: 150, y: 100 };
        case 1: return { x: -150, y: 100 };
        case 2: return { x: 150, y: -100 };
        case 3: return { x: -150, y: -100 };
        default: return { x: 0, y: 0 };
      }
    };

    const origin = getOrigin();'''

new_origin = '''    // Simplified origin for smooth, non-overlapping animation
    // Instead of fixed x/y which breaks on mobile, we just scale up smoothly.
    '''

content = content.replace(old_origin, new_origin)

old_motion = '''      <motion.div 
        initial={{ opacity: 0, scale: 0.5, x: origin.x, y: origin.y }}
        whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}'''

new_motion = '''      <motion.div 
        initial={{ opacity: 0, scale: 0.7, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}'''

content = content.replace(old_motion, new_motion)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print('Fixed PillarsSection')
