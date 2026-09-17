const fs = require('fs');
let content = fs.readFileSync('src/components/ProblemSection.tsx', 'utf8');

// 1. Rename
content = content.replace(
  'Indian Charities<br />\n              Deserve',
  'Charities<br />\n              Deserve'
);

// 2. Animation params
content = content.replace(
  "variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 50, damping: 15 } } }}",
  "variants={{ hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0, transition: { type: 'tween', duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}"
);
content = content.replace(
  'variants={{ visible: { transition: { staggerChildren: 0.15 } } }}',
  'variants={{ visible: { transition: { staggerChildren: 0.25, delayChildren: 0.2 } } }}'
);

// 3. Comparison Animation Wrapper - LEFT
const oldLeft = `<div className="bg-[#FAF8F5] border border-[#E5DCD0]/80 rounded-3xl p-5 relative shadow-sm flex flex-col justify-center h-full min-h-[185px]">
          <div className="mb-3.5 flex justify-between items-start gap-2">`;
const newLeft = `<motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: false, amount: 0.2 }} className="bg-[#FAF8F5] border border-[#E5DCD0]/80 rounded-3xl p-5 relative shadow-sm flex flex-col justify-center h-full min-h-[185px]">
          <div className="mb-3.5 flex justify-between items-start gap-2">`;
content = content.replace(oldLeft, newLeft);

// 3a. Close LEFT wrapper
const oldLeftClose = `                </div>
              </div>
            </div>

            {/* ---------------- CENTER COMPARISON INDICATOR ---------------- */}`;
const newLeftClose = `                </div>
              </div>
            </motion.div>

            {/* ---------------- CENTER COMPARISON INDICATOR ---------------- */}`;
content = content.replace(oldLeftClose, newLeftClose);


// 4. Comparison Animation Wrapper - RIGHT
const oldRight = `<div className="bg-[#153D2B] border border-[#1F543C] rounded-xl sm:rounded-3xl p-3 sm:p-4.5 relative shadow-md flex flex-col justify-start h-full min-h-[170px] overflow-hidden">
              <div className="absolute top-0 right-1/4 w-32 sm:w-48 h-12 bg-[#F4512A]/15 blur-xl pointer-events-none rounded-full"></div>`;
const newRight = `<motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: false, amount: 0.2 }} className="bg-[#153D2B] border border-[#1F543C] rounded-xl sm:rounded-3xl p-3 sm:p-4.5 relative shadow-md flex flex-col justify-start h-full min-h-[170px] overflow-hidden">
              <div className="absolute top-0 right-1/4 w-32 sm:w-48 h-12 bg-[#F4512A]/15 blur-xl pointer-events-none rounded-full"></div>`;
content = content.replace(oldRight, newRight);

// 4a. Close RIGHT wrapper
const oldRightClose = `                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* 4 Lightweight Feature Highlights */}`;
const newRightClose = `                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* 4 Lightweight Feature Highlights */}`;
content = content.replace(oldRightClose, newRightClose);

fs.writeFileSync('src/components/ProblemSection.tsx', content);
console.log('Saved problem tweaks!');
