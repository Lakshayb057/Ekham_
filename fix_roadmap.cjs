const fs = require('fs');
let c = fs.readFileSync('src/components/WorkflowSection.tsx', 'utf8');

if (!c.includes('const [activeIndex')) {
  c = c.replace(
    'export const WorkflowSection: React.FC<WorkflowSectionProps> = ({ onOpenDemoModal }) => {',
    `export const WorkflowSection: React.FC<WorkflowSectionProps> = ({ onOpenDemoModal }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 9);
    }, 1000);
    return () => clearInterval(timer);
  }, []);`
  );
}

c = c.replace(
  /<div className=\{\`w-9 h-9/g,
  '<motion.div animate={{ scale: idx === activeIndex ? 1.5 : 1, boxShadow: idx === activeIndex ? "0 0 20px rgba(244,81,42,0.8)" : "none" }} transition={{ duration: 0.4 }} className={`w-9 h-9'
);

c = c.replace(
  /<\/div>\s*\{\/\* Step Number/g,
  '</motion.div>\n\n                      {/* Step Number'
);

fs.writeFileSync('src/components/WorkflowSection.tsx', c);
