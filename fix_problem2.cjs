const fs = require('fs');

let c = fs.readFileSync('src/components/ProblemSection.tsx', 'utf8');

// Animate Left Panel
c = c.replace(
  /<div className="bg-\[\#F1EEE7\] border border-\[\#E2DAD0\] rounded-3xl p-5 relative flex flex-col justify-center h-full min-h-\[185px\]">/,
  `<motion.div 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ type: "spring" as any, stiffness: 60, damping: 14 }}
              className="bg-[#F1EEE7] border border-[#E2DAD0] rounded-3xl p-5 relative flex flex-col justify-center h-full min-h-[185px]"
            >`
);
// It ends right before: {/* ---------------- CENTER COMPARISON INDICATOR ---------------- */}
c = c.replace(
  /<\/div>\s*\{\/\* ---------------- CENTER COMPARISON INDICATOR ---------------- \*\/\}/,
  `</motion.div>\n\n            {/* ---------------- CENTER COMPARISON INDICATOR ---------------- */}`
);

// Animate Right Panel
c = c.replace(
  /<div className="bg-\[\#153D2B\] border border-\[\#1F543C\] rounded-3xl p-5 relative shadow-md flex flex-col justify-center h-full min-h-\[185px\] overflow-hidden">/,
  `<motion.div 
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ type: "spring" as any, stiffness: 60, damping: 14 }}
              className="bg-[#153D2B] border border-[#1F543C] rounded-3xl p-5 relative shadow-md flex flex-col justify-center h-full min-h-[185px] overflow-hidden"
            >`
);

// It ends right before: {/* ================= MAIN COMPARISON LAYOUT: MOBILE/TABLET
c = c.replace(
  /<\/div>\s*\{\/\* ================= MAIN COMPARISON LAYOUT: MOBILE\/TABLET/,
  `</motion.div>\n\n          {/* ================= MAIN COMPARISON LAYOUT: MOBILE/TABLET`
);

// Highlight nodes
// Traditional Node Desktop
c = c.replace(
  /<div className="w-\[58px\] xl:w-\[64px\] h-\[60px\] xl:h-\[66px\] bg-white rounded-xl border border-\[\#E0D8CC\] shadow-2xs flex flex-col items-center justify-center p-1 text-center">/g,
  `<div className={\`w-[58px] xl:w-[64px] h-[60px] xl:h-[66px] bg-white rounded-xl border flex flex-col items-center justify-center p-1 text-center transition-all duration-300 \${idx === activeComparisonIndex ? 'border-[#F4512A] shadow-[0_0_15px_rgba(244,81,42,0.4)] scale-110 z-20 relative' : 'border-[#E0D8CC] shadow-2xs scale-100 z-10'}\`}>`
);

// Ekhum Node Desktop
c = c.replace(
  /<div className="w-\[50px\] xl:w-\[56px\] h-\[54px\] xl:h-\[60px\] bg-white rounded-xl shadow-xs border border-white flex flex-col items-center justify-center p-0\.5 text-center group hover:scale-105 transition-transform">/g,
  `<div className={\`w-[50px] xl:w-[56px] h-[54px] xl:h-[60px] bg-white rounded-xl shadow-xs border flex flex-col items-center justify-center p-0.5 text-center group transition-all duration-300 \${idx === activeComparisonIndex ? 'border-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.5)] scale-110 z-20 relative' : 'border-white scale-100 z-10'}\`}>`
);

fs.writeFileSync('src/components/ProblemSection.tsx', c);
console.log('Fixed desktop problem panels');
