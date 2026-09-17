const fs = require('fs');

let c = fs.readFileSync('src/components/ProblemSection.tsx', 'utf8');

// The file currently has:
//               </div>
//             </div>
//           </div>
//
//           {/* Main Comparison Layout: MOBILE (Vertical Side-by-side) */}
// But wait! Right now it has:
//               </div>
//             </div>
//           </motion.div>
//
//           {/* Main Comparison Layout: MOBILE (Vertical Side-by-side) */}

c = c.replace(
  /<\/div>\n            <\/div>\n          <\/motion.div>\n\n          \{\/\* Main Comparison Layout: MOBILE/g,
  '</div>\n            </motion.div>\n          </div>\n\n          {/* Main Comparison Layout: MOBILE'
);

// If it's formatted differently:
c = c.replace(
  /<\/div>\s*<\/div>\s*<\/motion.div>\s*\{\/\* Main Comparison Layout: MOBILE/g,
  '</div>\n            </motion.div>\n          </div>\n\n          {/* Main Comparison Layout: MOBILE'
);

// wait, the code earlier was:
//               </div>
//             </div>
//           </div>
// 
//           {/* Main Comparison Layout: MOBILE
// I replaced:
//           </div>
//
//           {/* Main Comparison Layout: MOBILE
// With:
//           </motion.div>
//
//           {/* Main Comparison Layout: MOBILE
// 
// So the structure now is:
//               </div>
//             </div>
//           </motion.div>
// 
//           {/* Main Comparison Layout: MOBILE

fs.writeFileSync('src/components/ProblemSection.tsx', c);
console.log('Fixed desktop problem panel ending');
