const fs = require('fs');
let w = fs.readFileSync('src/components/ProblemSection.tsx', 'utf8');

const sIdx = w.indexOf('{/* Main Comparison Layout: DESKTOP (Horizontal) */}');
const eIdx = w.indexOf('{/* 4 Lightweight Feature Highlights */}');

if (sIdx > -1 && eIdx > -1) {
  // We need to keep the </div> that closes the comparison block container, if any.
  // Wait, let's look at the structure.
  //   <div className="hidden lg:grid grid-cols-[1fr_auto_1.15fr] items-center gap-4 mb-5"> ... </div>
  //   <div className="grid lg:hidden grid-cols-[1fr_auto_1fr] items-stretch gap-1.5 sm:gap-4 mb-4 sm:mb-5"> ... </div>
  // </div> (this closes what? It closes the grid... wait, where does `eIdx` start?)
  // Let me just replace the exact tags.
  // The start is `<div className="hidden lg:grid` right below `{/* Main Comparison Layout: DESKTOP (Horizontal) */}`
  // Let's replace the whole section between them.
  const beforeStr = w.substring(0, sIdx);
  const afterStr = w.substring(eIdx);
  
  // Also we need to make sure we don't drop the closing </div> if it was there!
  // Let's find out if there's a </div> right before `eIdx`.
  // Wait, in `w`, before `eIdx`, there is:
  //           </div>
  // 
  //           {/* 4 Lightweight Feature Highlights */}
  
  w = beforeStr + '<ComparisonScanner traditionalNodes={traditionalNodes} ekhumNodes={ekhumNodes} />\n\n          ' + afterStr;
  
  fs.writeFileSync('src/components/ProblemSection.tsx', w);
  console.log("REPLACED SUCCESSFULLY!");
} else {
  console.log("NOT FOUND!");
}
