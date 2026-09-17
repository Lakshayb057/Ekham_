const fs = require('fs');
let w = fs.readFileSync('src/components/WorkflowSection.tsx', 'utf8');

w = w.split('</p>\n                </div>').join('</p>\n                </motion.div>');
w = w.split('</motion.div>\n              </div>').join('</motion.div>\n              </motion.div>');

fs.writeFileSync('src/components/WorkflowSection.tsx', w);
