const fs = require('fs');

let content = fs.readFileSync('src/components/ProblemSection.tsx', 'utf8');

// 1. Rename Indian Charities to Charities
content = content.replace(
  'Indian Charities<br />\n              Deserve',
  'Charities<br />\n              Deserve'
);

// 2. Fix the Problem Cards animation
// The old code has `staggerChildren: 0.15` and `hidden: { opacity: 0, x: -30 }`.
// The user wants it smooth, like it comes from the left (heading).
// We'll change x from -30 to -100, increase the stagger delay, and use a tween.

content = content.replace(
  'transition: { staggerChildren: 0.15 }',
  'transition: { staggerChildren: 0.25, delayChildren: 0.2 }'
);
content = content.replace(
  "visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 50, damping: 15 } }",
  "visible: { opacity: 1, x: 0, transition: { type: 'tween', duration: 0.7, ease: [0.16, 1, 0.3, 1] } }"
);
content = content.replace(
  'hidden: { opacity: 0, x: -30 }',
  'hidden: { opacity: 0, x: -60 }'
);

// 3. Comparison Section animations
// "both cards first comes animatedly from left and one from right and then their each card like campaign and all gets highloights a little one by one"
// First, animate the Left (Traditional) card from left
content = content.replace(
  '<div className="bg-[#FAF8F5] border border-[#E5DCD0]/80 rounded-3xl p-5 relative shadow-sm flex flex-col justify-center h-full min-h-[185px]">',
  '<motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: false, amount: 0.2 }} className="bg-[#FAF8F5] border border-[#E5DCD0]/80 rounded-3xl p-5 relative shadow-sm flex flex-col justify-center h-full min-h-[185px]">'
);
content = content.replace(
  '</p>\n            </div>\n            <div className="text-[#8E877D] font-black text-xs uppercase tracking-widest text-right shrink-0 mt-1">\n              Fragmented\n            </div>\n          </div>',
  '</p>\n            </div>\n            <div className="text-[#8E877D] font-black text-xs uppercase tracking-widest text-right shrink-0 mt-1">\n              Fragmented\n            </div>\n          </div>'
);
// replace closing div of left card with motion.div
content = content.replace(
  '                </div>\n              </div>\n            </div>\n\n            {/* ---------------- CENTER COMPARISON INDICATOR ---------------- */}',
  '                </div>\n              </div>\n            </motion.div>\n\n            {/* ---------------- CENTER COMPARISON INDICATOR ---------------- */}'
);

// Second, animate the Right (EKhum) card from right
content = content.replace(
  '<div className="bg-[#153D2B] border border-[#1F543C] rounded-xl sm:rounded-3xl p-3 sm:p-4.5 relative shadow-md flex flex-col justify-start h-full min-h-[170px] overflow-hidden">',
  '<motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: false, amount: 0.2 }} className="bg-[#153D2B] border border-[#1F543C] rounded-xl sm:rounded-3xl p-3 sm:p-4.5 relative shadow-md flex flex-col justify-start h-full min-h-[170px] overflow-hidden">'
);
// replace closing div of right card with motion.div
content = content.replace(
  '                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n\n        </div>',
  '                  </div>\n                </div>\n              </div>\n            </motion.div>\n\n          </div>\n\n        </div>'
);

// 4. Implement Comparison Scanner component logic inside ProblemSection.tsx
// We will insert a custom component for the synchronized scanner inside the component.

// Actually, wait, the nodes are mapped in ProblemSection.
// I can just replace the node maps with a ComparisonScanner that does it perfectly!

fs.writeFileSync('src/components/ProblemSection.tsx', content);
console.log('Done Problem fixes!');
