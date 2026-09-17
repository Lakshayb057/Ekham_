const fs = require('fs');
let content = fs.readFileSync('src/components/WorkflowSection.tsx', 'utf8');

const oldCard3 = `<div className="bg-[#14201A] rounded-xl p-3 text-left border border-[#273B30] text-white">
                    {/* Settlement Stat */}
                    <div className="bg-white rounded-lg p-2 mb-2 border border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="text-[7.5px] text-gray-400 uppercase font-bold tracking-wider">
                          Net Settled Donations
                        </span>
                        <span className="text-[8px] font-bold text-[#F4512A]">+28.4% YoY</span>
                      </div>
                      <span className="text-[15px] font-black text-[#153D2B] tracking-tight block">
                        ₹48,20,500
                      </span>
                    </div>

                    {/* Volume Bar visualization */}
                    <div className="flex items-end gap-1.5 h-6 bg-white p-1.5 rounded-md mb-2 border border-gray-200">
                      {[30, 45, 60, 40, 80, 100].map((h, i) => (
                        <motion.div 
                          key={i} 
                          initial={{ height: 0 }}
                          whileInView={{ height: \`\${h}%\` }}
                          viewport={{ once: false }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          className={\`w-full rounded-sm \${i === 5 ? 'bg-[#F4512A]' : 'bg-emerald-400/80'}\`}
                        ></motion.div>
                      ))}
                    </div>

                    {/* 10BD Action */}
                    <div className="bg-[#0A1216] rounded-lg p-2 flex items-center justify-between border border-[#1E3037]">
                      <div>
                        <div className="text-[9px] font-bold text-white mb-0.5">Form 10BD Ready</div>
                        <div className="text-[7.5px] text-gray-400">1,248 Records • Zero manual entry</div>
                      </div>
                      <div className="px-2 py-1 bg-[#F4512A] text-white text-[8px] font-bold rounded shadow-xs">
                        1-Click Export
                      </div>
                    </div>
                  </div>`;

const newCard3 = `<div className="bg-[#FAF8F5] rounded-xl p-3 text-left border border-[#E5DCD0]">
                    <div className="mb-2.5 pb-2 border-b border-[#E5DCD0]">
                      <span className="text-[8px] font-extrabold uppercase text-[#687176] tracking-wider block mb-1">
                        NET SETTLED DONATIONS
                      </span>
                      <div className="flex items-end justify-between">
                        <span className="text-xl font-black text-[#153D2B]">₹48,20,500</span>
                        <span className="text-[9px] font-bold text-[#F4512A] mb-1">+28.4% YoY</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between gap-1 mb-3">
                      {[40, 60, 50, 80, 100, 30].map((h, i) => (
                        <div key={i} className="flex-1 bg-[#E2DAD0] h-1.5 rounded-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} whileInView={{ width: \`\${h}%\` }} viewport={{ once: false }} transition={{ duration: 0.5, delay: i * 0.1 }} className={\`h-full \${i === 4 ? 'bg-[#F4512A]' : 'bg-[#153D2B]'}\`}></motion.div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-white rounded-lg p-2 flex items-center justify-between border border-[#E5DCD0] shadow-sm">
                      <div>
                        <div className="text-[9px] font-bold text-[#102126] mb-0.5">Form 10BD Ready</div>
                        <div className="text-[7.5px] text-[#687176]">1,248 Records • Zero manual entry</div>
                      </div>
                      <div className="px-2 py-1 bg-[#F4512A] text-white text-[8px] font-bold rounded shadow-xs">
                        1-Click Export
                      </div>
                    </div>
                  </div>`;

content = content.replace(oldCard3, newCard3);
fs.writeFileSync('src/components/WorkflowSection.tsx', content);
console.log('Fixed card 3 precisely!');
