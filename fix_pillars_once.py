import re

file_path = 'src/components/PillarsSection.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Change once: true to once: false everywhere in PillarsSection
content = content.replace('once: true', 'once: false')

# Inject isMobile logic into ModuleCard
old_module_card_start = '''  // Horizontal Module Card (Image on Right, No Border, Curved Left Edge)
  const ModuleCard = ({ pillar, index }: { pillar: any; index: number }) => {
    const Icon = pillar.icon;
    const imageOnLeft = index % 2 === 0;

    // Determine animation origin relative to the center hub
    // index 0: Top Left (needs to come from bottom right)
    // index 1: Top Right (needs to come from bottom left)
    // index 2: Bottom Left (needs to come from top right)
    // index 3: Bottom Right (needs to come from top left)
    // Simplified origin for smooth, non-overlapping animation
    // Instead of fixed x/y which breaks on mobile, we just scale up smoothly.
    

    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.7, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}'''

new_module_card_start = '''  // Horizontal Module Card (Image on Right, No Border, Curved Left Edge)
  const ModuleCard = ({ pillar, index }: { pillar: any; index: number }) => {
    const Icon = pillar.icon;
    const imageOnLeft = index % 2 === 0;

    const [isMobile, setIsMobile] = React.useState(typeof window !== 'undefined' ? window.innerWidth < 1024 : false);
    React.useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 1024);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getOrigin = () => {
      if (isMobile) {
        return { x: 0, y: -100 - (index * 40) };
      }
      switch(index) {
        case 0: return { x: 200, y: 150 };
        case 1: return { x: -200, y: 150 };
        case 2: return { x: 200, y: -150 };
        case 3: return { x: -200, y: -150 };
        default: return { x: 0, y: 0 };
      }
    };
    const origin = getOrigin();

    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.3, x: origin.x, y: origin.y }}
        whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 50, damping: 14, delay: index * 0.1 }}'''

content = content.replace(old_module_card_start, new_module_card_start)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print('Done fixing PillarsSection')
