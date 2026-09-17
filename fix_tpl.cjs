const fs = require('fs');
let w = fs.readFileSync('src/components/WorkflowSection.tsx', 'utf8');
w = w.replace("className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mb-1 shadow-xs transition-all ${", "className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mb-1 shadow-xs transition-all \\${");
fs.writeFileSync('src/components/WorkflowSection.tsx', w);
