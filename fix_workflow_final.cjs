const fs = require('fs');
let content = fs.readFileSync('src/components/WorkflowSection.tsx', 'utf8');

// 1. Remove "Continuous 9-Step Pipeline"
content = content.replace(
  '<span className="text-[#F4512A]">Continuous 9-Step Pipeline</span>',
  ''
);

// 2. Animate the Heading
content = content.replace(
  '<div className="mb-6 sm:mb-8 text-left max-w-4xl pt-4">',
  '<motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }} className="mb-6 sm:mb-8 text-left max-w-4xl pt-4">'
);
content = content.replace(
  'From campaign creation to lasting impact — everything works together, automatically.\n          </p>\n        </div>',
  'From campaign creation to lasting impact — everything works together, automatically.\n          </p>\n        </motion.div>'
);

// 3. Animate STAGE 1 (Left)
content = content.replace(
  '<div className="relative flex flex-col justify-between lg:border-r lg:border-[#E5DCD0]/80 lg:pr-7">',
  '<motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }} className="relative flex flex-col justify-between lg:border-r lg:border-[#E5DCD0]/80 lg:pr-7">'
);
content = content.replace(
  '</motion.div>\n\n            </div>\n          </div>\n\n          {/* ---------------- STAGE 02:',
  '</motion.div>\n\n            </div>\n          </motion.div>\n\n          {/* ---------------- STAGE 02:'
);

// 4. Animate STAGE 2 (Above)
content = content.replace(
  '<div className="relative flex flex-col justify-between lg:border-r lg:border-[#E5DCD0]/80 lg:px-4">',
  '<motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }} className="relative flex flex-col justify-between lg:border-r lg:border-[#E5DCD0]/80 lg:px-4">'
);
content = content.replace(
  '</motion.div>\n\n            </div>\n          </div>\n\n          {/* ---------------- STAGE 03:',
  '</motion.div>\n\n            </div>\n          </motion.div>\n\n          {/* ---------------- STAGE 03:'
);

// 5. Animate STAGE 3 (Right)
content = content.replace(
  '<div className="relative flex flex-col justify-between">',
  '<motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }} className="relative flex flex-col justify-between">'
);
content = content.replace(
  '</motion.div>\n\n            </div>\n          </div>\n\n        </div>\n\n        {/* =========================================================================',
  '</motion.div>\n\n            </div>\n          </motion.div>\n\n        </div>\n\n        {/* ========================================================================='
);

fs.writeFileSync('src/components/WorkflowSection.tsx', content);
console.log('Workflow fixed!');
