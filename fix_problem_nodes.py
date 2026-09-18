import re

file_path = 'src/components/ProblemSection.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Desktop Traditional Node
content = content.replace('''<div className=\"flex flex-col items-center flex-shrink-0\">
                          <div className=\"w-[58px] xl:w-[64px] h-[60px] xl:h-[66px] bg-white rounded-xl border border-[#E0D8CC] shadow-2xs flex flex-col items-center justify-center p-1 text-center\">''',
'''<motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.8 }} transition={{ duration: 0.3, delay: (idx * 0.4) + 0.6 }} className=\"flex flex-col items-center flex-shrink-0\">
                          <div className=\"w-[58px] xl:w-[64px] h-[60px] xl:h-[66px] bg-white rounded-xl border border-[#E0D8CC] shadow-2xs flex flex-col items-center justify-center p-1 text-center\">''')

content = content.replace('''</Minus>
                              )}
                            </div>
                          </div>''',
'''</Minus>
                              )}
                            </div>
                          </motion.div>''')

# Desktop Modern Node
content = content.replace('''<div className=\"flex flex-col items-center flex-shrink-0\">
                          <div className=\"w-[50px] xl:w-[56px] h-[54px] xl:h-[60px] bg-white rounded-xl shadow-xs border border-white flex flex-col items-center justify-center p-0.5 text-center group hover:scale-105 transition-transform\">''',
'''<motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.8 }} transition={{ duration: 0.3, delay: (idx * 0.4) + 0.8 }} className=\"flex flex-col items-center flex-shrink-0\">
                          <div className=\"w-[50px] xl:w-[56px] h-[54px] xl:h-[60px] bg-white rounded-xl shadow-xs border border-white flex flex-col items-center justify-center p-0.5 text-center group hover:scale-105 transition-transform\">''')

content = content.replace('''</span>
                          </div>
                        </div>
                        {idx < ekhumNodes.length - 1 && (''',
'''</span>
                          </div>
                        </motion.div>
                        {idx < ekhumNodes.length - 1 && (''')

# Mobile Traditional Node
content = content.replace('''<div key={idx} className=\"flex items-center gap-2.5 sm:gap-6 mb-3 sm:mb-6 last:mb-0 relative z-10\">''',
'''<motion.div key={idx} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.8 }} transition={{ duration: 0.3, delay: (idx * 0.4) + 0.6 }} className=\"flex items-center gap-2.5 sm:gap-6 mb-3 sm:mb-6 last:mb-0 relative z-10\">''')

content = content.replace('''</span>
                      </div>
                    );
                  })}
                </div>''',
'''</span>
                      </motion.div>
                    );
                  })}
                </div>''')

# Mobile Modern Node
content = content.replace('''<div key={idx} className=\"flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4 last:mb-0 relative z-10 group cursor-default\">''',
'''<motion.div key={idx} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.8 }} transition={{ duration: 0.3, delay: (idx * 0.4) + 0.8 }} className=\"flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4 last:mb-0 relative z-10 group cursor-default\">''')

content = content.replace('''</span>
                        </div>
                      );
                    })}
                  </div>''',
'''</span>
                        </motion.div>
                      );
                    })}
                  </div>''')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print('Phase 2 done')
