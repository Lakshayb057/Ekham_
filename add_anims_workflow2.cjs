const fs = require('fs');

let content = fs.readFileSync('src/components/WorkflowSection.tsx', 'utf8');

// Normalize EVERYTHING to LF
content = content.replace(/\r\n/g, '\n');

// Wrap heading
const hTarget = '<div className="text-left pb-2 sm:pb-3 border-b border-[#E8DFD3]/80 mb-1 sm:mb-2">';
const hReplace = '<motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="text-left pb-2 sm:pb-3 border-b border-[#E8DFD3]/80 mb-1 sm:mb-2">';
const hCloseTarget = '          </p>\n        </div>';
const hCloseReplace = '          </p>\n        </motion.div>';

content = content.replace(hTarget, hReplace);
content = content.replace(hCloseTarget, hCloseReplace);

// Wrap Card 1
const c1Target = '<div className="bg-[#FAF8F5] border border-[#E5DCD0] rounded-[24px] p-4 sm:p-5 flex flex-col justify-between shadow-xs relative overflow-hidden h-full">';
const c1Replace = '<motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="bg-[#FAF8F5] border border-[#E5DCD0] rounded-[24px] p-4 sm:p-5 flex flex-col justify-between shadow-xs relative overflow-hidden h-full">';
const c1CloseTarget = '              </div>\n\n            </div>\n          </div>\n\n          {/* ---------------- STAGE 02: TRANSACT (PHONE 2) ---------------- */}';
const c1CloseReplace = '              </div>\n\n            </div>\n          </motion.div>\n\n          {/* ---------------- STAGE 02: TRANSACT (PHONE 2) ---------------- */}';

content = content.replace(c1Target, c1Replace);
content = content.replace(c1CloseTarget, c1CloseReplace);

// Wrap Card 2
const c2Target = '<div className="bg-[#102126] border border-[#1E3037] rounded-[24px] p-4 sm:p-5 flex flex-col justify-between shadow-md relative overflow-hidden h-full group">';
const c2Replace = '<motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }} className="bg-[#102126] border border-[#1E3037] rounded-[24px] p-4 sm:p-5 flex flex-col justify-between shadow-md relative overflow-hidden h-full group">';
const c2CloseTarget = '              </div>\n\n            </div>\n          </div>\n\n          {/* ---------------- STAGE 03: MULTIPLY (PHONE 3) ---------------- */}';
const c2CloseReplace = '              </div>\n\n            </div>\n          </motion.div>\n\n          {/* ---------------- STAGE 03: MULTIPLY (PHONE 3) ---------------- */}';

content = content.replace(c2Target, c2Replace);
content = content.replace(c2CloseTarget, c2CloseReplace);

// Wrap Card 3
// Warning: Stage 3 uses the same exact open string as stage 1!
// We'll replace the last index of it.
const c3Target = '<div className="bg-[#FAF8F5] border border-[#E5DCD0] rounded-[24px] p-4 sm:p-5 flex flex-col justify-between shadow-xs relative overflow-hidden h-full">';
const c3Replace = '<motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }} className="bg-[#FAF8F5] border border-[#E5DCD0] rounded-[24px] p-4 sm:p-5 flex flex-col justify-between shadow-xs relative overflow-hidden h-full">';
const lastIndex = content.lastIndexOf(c3Target);
if (lastIndex !== -1) {
  content = content.substring(0, lastIndex) + c3Replace + content.substring(lastIndex + c3Target.length);
}

const c3CloseTarget = '              </div>\n\n            </div>\n          </div>\n\n        </div>\n\n        {/* =========================================================================';
const c3CloseReplace = '              </div>\n\n            </div>\n          </motion.div>\n\n        </div>\n\n        {/* =========================================================================';
content = content.replace(c3CloseTarget, c3CloseReplace);

if (!content.includes("import { motion }")) {
  content = content.replace("import React from 'react';", "import React from 'react';\nimport { motion } from 'framer-motion';");
}

fs.writeFileSync('src/components/WorkflowSection.tsx', content);
console.log('Done!');
