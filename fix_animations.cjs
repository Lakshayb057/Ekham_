const fs = require('fs');
let w = fs.readFileSync('src/components/WorkflowSection.tsx', 'utf8');

// The outer block
const origListStart = '<div className="mt-2 space-y-1 text-left">';
const newListStart = `<motion.div 
                className="mt-2 space-y-1 text-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={{
                  visible: { transition: { staggerChildren: 0.15, delayChildren: 1.0 } }
                }}
              >`;

// The inner item
const origItemStart = '<div className="flex items-start gap-1.5">';
const newItemStart = `<motion.div 
                  className="flex items-start gap-1.5"
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
                  }}
                >`;

// Only replace these specifically within the three blocks to avoid breaking other things!
// Actually, `mt-2 space-y-1 text-left` is VERY specific to these exact three lists in the entire codebase.

let count = 0;
while (w.includes(origListStart)) {
  w = w.replace(origListStart, newListStart);
  count++;
}
console.log("Replaced list starts:", count);

// Now for the items inside them. We need to make sure we replace their closing `</div>` with `</motion.div>`.
// And the list closing `</div>` with `</motion.div>`.

// Let's do a simple regex since we know the exact structure:
// <motion.div className="flex items-start gap-1.5" ...>
//   <span ...>...</span>
//   <p ...>...</p>
// </div>
// We can replace the items one by one.
const oldItemRegex = /<div className="flex items-start gap-1\.5">\s*<span className="text-\[10px\] font-black[^>]*>(\d{2})<\/span>\s*<p className="[^"]*">([\s\S]*?)<\/p>\s*<\/div>/g;

w = w.replace(oldItemRegex, (match, num, pContent) => {
  let numColor = (num === '02' || num === '04' || num === '06' || num === '08') ? 'text-[#F4512A]' : 'text-[#153D2B]';
  return `<motion.div 
                  className="flex items-start gap-1.5"
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
                  }}
                >
                  <span className="text-[10px] font-black ${numColor}">${num}</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight">
                    ${pContent.trim()}
                  </p>
                </motion.div>`;
});

// Finally, we need to close the outer `<motion.div>` we created earlier!
// It was followed by `</div>\n\n            </div>\n          </div>` or similar.
// Currently it is `</motion.div>\n              </div>\n\n            </div>` where `</div>` is the list end.
// We can find `</motion.div>\n              </div>` and replace with `</motion.div>\n              </motion.div>`!
// Wait! `</motion.div>` was inserted by the item regex. So the last item ends with `</motion.div>`.
// Then the list ends with `</div>`.
w = w.replace(/<\/motion\.div>\s*<\/div>\s*<\/div>\s*<\/div>/g, '</motion.div>\n              </motion.div>\n\n            </div>\n          </div>');

// Let's make sure that's correct.
// The list structure was:
// <motion.div list>
//    <motion.div item 1> ... </motion.div>
//    <motion.div item 2> ... </motion.div>
//    <motion.div item 3> ... </motion.div>
// </div> <- this needs to be </motion.div>
//
w = w.replace(/<\/motion\.div>\s*<\/div>/g, '</motion.div>\n              </motion.div>');


// Roadmap clipping fix
w = w.replace('<div className="overflow-x-auto pb-1 scrollbar-none">', '<div className="overflow-x-auto py-4 px-2 scrollbar-none">');


fs.writeFileSync('src/components/WorkflowSection.tsx', w);
