const fs = require('fs');
let c = fs.readFileSync('src/components/ProblemSection.tsx', 'utf8');

// Traditional Mobile
c = c.replace(
  /<div className="w-7 h-7 sm:w-\[50px\] sm:h-\[50px\] bg-white rounded-lg sm:rounded-2xl border border-\[\#E0D8CC\] flex items-center justify-center text-center shadow-xs">/g,
  `<div className={\`w-7 h-7 sm:w-[50px] sm:h-[50px] bg-white rounded-lg sm:rounded-2xl border flex items-center justify-center text-center transition-all duration-300 \${idx === activeComparisonIndex ? 'border-[#F4512A] shadow-[0_0_10px_rgba(244,81,42,0.4)] scale-110 z-20 relative' : 'border-[#E0D8CC] shadow-xs scale-100 z-10'}\`}>`
);

// Ekhum Mobile
c = c.replace(
  /<div className="w-7 h-7 sm:w-\[50px\] sm:h-\[50px\] bg-white rounded-lg sm:rounded-2xl shadow-sm border border-white flex items-center justify-center text-center group-hover:scale-105 transition-transform">/g,
  `<div className={\`w-7 h-7 sm:w-[50px] sm:h-[50px] bg-white rounded-lg sm:rounded-2xl shadow-sm border flex items-center justify-center text-center transition-all duration-300 \${idx === activeComparisonIndex ? 'border-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)] scale-110 z-20 relative' : 'border-white scale-100 z-10'}\`}>`
);

fs.writeFileSync('src/components/ProblemSection.tsx', c);
console.log('Fixed mobile layout highlighting');
