import React from 'react';
import { ShieldCheck, CheckCircle2, MousePointer2, FileText, CalendarDays, Bell, RefreshCw, Download, LayoutDashboard, Megaphone, Users, MessageSquare, Shield, Leaf, BarChart3 } from 'lucide-react';
import { Logo } from './Logo';
import { motion } from 'framer-motion';

export const EcosystemSection: React.FC = () => {
  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemDropVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring" as any, stiffness: 120, damping: 14 }
    }
  };

  const badgeLeftVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.8 },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: { type: "spring" as any, stiffness: 100, damping: 15 }
    }
  };

  const badgeRightVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.8 },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: { type: "spring" as any, stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="ecosystem" className="pt-12 sm:pt-16 bg-[#F8F9FA] relative overflow-hidden font-sans flex flex-col">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full mb-10 sm:mb-16 flex-1">
        
        {/* Top Header */}
        <div className="mb-6 w-full border-b border-gray-200 pb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-4xl">
            <span className="text-[10px] lg:text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#F4512A] mb-2 block">
              CONNECTED ECOSYSTEM
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-tight tracking-tight mb-2 flex flex-wrap gap-2">
              <span>Different Roles.</span> <span className="text-[#F4512A]">One Connected Experience.</span>
            </h2>
            <p className="text-gray-500 font-medium text-sm lg:text-[15px] leading-relaxed">
              EKhum brings NGOs, donors and CSR partners together on a single platform — so every contribution creates greater, measurable impact.
            </p>
          </div>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 relative">
          
          {/* Column 1: Non-Profit Teams */}
          <div className="bg-green-50/50 rounded-2xl p-4 sm:p-5 border border-green-100 flex flex-col h-full relative overflow-hidden group">
            
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shadow-sm shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900">Non-Profit Teams</h3>
                <p className="text-[10px] sm:text-[11px] text-gray-500 font-medium uppercase tracking-wider">For grassroots to large scale</p>
              </div>
            </div>
            
            {/* Laptop Mockup */}
            <div className="w-full flex-1 flex justify-center items-start sm:items-center py-2 sm:py-4 min-h-[160px] sm:min-h-[220px]">
              <div className="w-full max-w-[250px] scale-[0.7] sm:scale-100 origin-top sm:origin-center mt-2 sm:mt-0">
                <div className="bg-white rounded-t-lg border-[4px] border-b-0 border-gray-800 shadow-lg h-40 overflow-hidden relative w-full flex flex-col">
                  <div className="w-full h-4 bg-gray-100 flex items-center px-2 gap-1 border-b shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex flex-1 h-full">
                    {/* Sidebar */}
                    <div className="w-16 border-r border-gray-100 bg-gray-50/30 flex flex-col items-start py-2 px-1.5 gap-1.5 shrink-0">
                      <div className="w-full pl-0.5 mb-1"><Logo variant="dark" showTagline={false} className="scale-[0.25] origin-left -mt-2 -mb-2" /></div>
                      {[
                        { icon: LayoutDashboard, label: 'Dashboard', active: true },
                        { icon: Megaphone, label: 'Campaigns' },
                        { icon: Users, label: 'Donors' },
                        { icon: MessageSquare, label: 'Communications' },
                        { icon: Shield, label: 'Compliance' },
                        { icon: FileText, label: 'Reports' }
                      ].map((item, i) => (
                        <div key={i} className={`flex items-center gap-1 w-full p-0.5 rounded ${item.active ? 'bg-green-50 text-green-700' : 'text-gray-400'}`}>
                          <item.icon className={`w-2.5 h-2.5 ${item.active ? 'text-green-600' : 'text-gray-400'}`} strokeWidth={2.5} />
                          <span className={`text-[5px] font-bold ${item.active ? 'text-green-700' : 'text-gray-500'}`}>{item.label}</span>
                        </div>
                      ))}
                    </div>
                    {/* Content */}
                    <div className="flex-1 p-3 flex flex-col">
                      <div className="flex justify-between items-end mb-2">
                        <div>
                          <div className="text-[7px] font-bold text-gray-500 mb-0.5 uppercase tracking-wider">Total Donations</div>
                          <div className="text-gray-900 text-lg font-black">₹ 12,48,500</div>
                        </div>
                        <div className="text-[7px] text-green-600 font-bold bg-green-50 px-1.5 py-0.5 rounded">↑ 24% this month</div>
                      </div>
                      <div className="w-full flex-1 mt-1 flex items-end overflow-hidden relative">
                         <svg className="w-full h-full text-green-400 opacity-20 absolute bottom-0" viewBox="0 0 100 30" preserveAspectRatio="none">
                           <path d="M0,30 L0,15 C20,15 30,25 40,20 C50,15 60,5 70,10 C80,15 90,5 100,0 L100,30 Z" fill="currentColor"/>
                         </svg>
                         <svg className="w-full h-full text-green-500 absolute bottom-0 z-10" viewBox="0 0 100 30" preserveAspectRatio="none">
                           <path d="M0,15 C20,15 30,25 40,20 C50,15 60,5 70,10 C80,15 90,5 100,0" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                         </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[110%] -ml-[5%] h-2.5 bg-gray-300 rounded-b-lg shadow-sm border-t border-gray-400 relative">
                   <div className="w-12 h-1 bg-gray-400 rounded-b-md mx-auto"></div>
                </div>
              </div>
            </div>

            <motion.div 
              className="mt-4 pt-4 border-t border-green-100/50"
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-50px" }}
            >
              <div className="text-center w-full mb-3 text-[10px] font-bold text-green-600 tracking-widest uppercase">For Non-Profits</div>
              <ul className="space-y-2">
                {[
                  'Zero-cost entry for emerging charities',
                  'Instant compliance setup',
                  'Create & manage campaigns'
                ].map((text, i) => (
                  <motion.li variants={itemDropVariants} key={i} className="flex items-start text-xs lg:text-sm text-gray-600 font-medium leading-tight">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 shrink-0 mt-0.5" />
                    {text}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Column 2: Donors */}
          <div className="bg-orange-50/50 rounded-2xl p-4 sm:p-5 border border-orange-100 flex flex-col h-full relative overflow-hidden group">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center shadow-sm shrink-0">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900">Donors & Patrons</h3>
                <p className="text-[10px] sm:text-[11px] text-gray-500 font-medium uppercase tracking-wider">Individuals and HNI donors</p>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="w-full flex-1 flex justify-center items-start sm:items-center py-2 sm:py-6 min-h-[240px] sm:min-h-[340px] relative">
               <motion.div 
                 className="w-full flex-1 flex justify-center items-center scale-[0.65] sm:scale-100 origin-top sm:origin-center mt-2 sm:mt-0"
                 variants={listVariants}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: false }}
               >
               {/* Left Floating Badges */}
               <div className="absolute left-0 lg:-left-3 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-10 w-[105px] sm:w-[125px]">
                 <motion.div variants={badgeLeftVariants} className="bg-white p-2.5 rounded-xl shadow-sm border border-orange-100 flex flex-col gap-1 items-start relative text-left">
                   <div className="flex items-center gap-1.5 mb-0.5">
                     <MousePointer2 className="w-4 h-4 text-orange-500 shrink-0" />
                     <div className="text-[10px] font-black text-gray-800 leading-tight">Give in seconds</div>
                   </div>
                   <div className="text-[8px] font-medium text-gray-500 leading-tight">via UPI, Card or Net Banking</div>
                 </motion.div>
                 
                 <motion.div variants={badgeLeftVariants} className="bg-white p-2.5 rounded-xl shadow-sm border border-orange-100 flex flex-col gap-1 items-start relative text-left">
                   <div className="flex items-center gap-1.5 mb-0.5">
                     <FileText className="w-4 h-4 text-orange-500 shrink-0" />
                     <div className="text-[10px] font-black text-gray-800 leading-tight">Get instant 80G receipt</div>
                   </div>
                   <div className="text-[8px] font-medium text-gray-500 leading-tight">on WhatsApp</div>
                 </motion.div>

                 <motion.div variants={badgeLeftVariants} className="bg-white p-2.5 rounded-xl shadow-sm border border-orange-100 flex flex-col gap-1 items-start relative text-left">
                   <div className="flex items-center gap-1.5 mb-0.5">
                     <CalendarDays className="w-4 h-4 text-orange-500 shrink-0" />
                     <div className="text-[10px] font-black text-gray-800 leading-tight">Track all</div>
                   </div>
                   <div className="text-[8px] font-medium text-gray-500 leading-tight">your donations in one place</div>
                 </motion.div>
               </div>

               {/* Right Floating Badges */}
               <div className="absolute right-0 lg:-right-3 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-10 w-[105px] sm:w-[125px]">
                 <motion.div variants={badgeRightVariants} className="bg-white p-2.5 rounded-xl shadow-sm border border-orange-100 flex flex-col gap-1 items-start relative text-left">
                   <div className="flex items-center gap-1.5 mb-0.5">
                     <Bell className="w-4 h-4 text-orange-500 shrink-0" />
                     <div className="text-[10px] font-black text-gray-800 leading-tight">Receive</div>
                   </div>
                   <div className="text-[8px] font-medium text-gray-500 leading-tight">updates on real impact</div>
                 </motion.div>
                 
                 <motion.div variants={badgeRightVariants} className="bg-white p-2.5 rounded-xl shadow-sm border border-orange-100 flex flex-col gap-1 items-start relative text-left">
                   <div className="flex items-center gap-1.5 mb-0.5">
                     <RefreshCw className="w-4 h-4 text-orange-500 shrink-0" />
                     <div className="text-[10px] font-black text-gray-800 leading-tight">Manage</div>
                   </div>
                   <div className="text-[8px] font-medium text-gray-500 leading-tight">recurring pledges easily</div>
                 </motion.div>

                 <motion.div variants={badgeRightVariants} className="bg-white p-2.5 rounded-xl shadow-sm border border-orange-100 flex flex-col gap-1 items-start relative text-left">
                   <div className="flex items-center gap-1.5 mb-0.5">
                     <Download className="w-4 h-4 text-orange-500 shrink-0" />
                     <div className="text-[10px] font-black text-gray-800 leading-tight">Download</div>
                   </div>
                   <div className="text-[8px] font-medium text-gray-500 leading-tight">annual tax bundle (80G)</div>
                 </motion.div>
               </div>

               {/* The Phone */}
               <div className="w-[155px] h-[310px] bg-white rounded-[32px] border-[7px] border-gray-900 shadow-xl relative overflow-hidden flex flex-col z-0 mx-auto">
                  <div className="w-14 h-4 bg-gray-900 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-xl z-20"></div>
                  
                  <div className="pt-8 pb-3 px-3 text-center border-b border-gray-50 flex flex-col items-center shrink-0">
                     <Logo variant="dark" showTagline={false} className="scale-[0.55] origin-center mb-1" />
                     <div className="text-xs font-black text-gray-800 leading-tight">Thank you</div>
                     <div className="text-[9px] text-gray-500 font-medium">for your support! 🎉</div>
                  </div>

                  <div className="flex-1 px-3.5 py-3.5 flex flex-col justify-center items-center bg-gray-50/50">
                    <div className="bg-green-50 border border-green-100 rounded-xl p-3 w-full text-center mb-3.5 shadow-sm">
                      <div className="text-2xl font-black text-green-600 mb-0.5">₹ 2,500</div>
                      <div className="text-[8px] text-gray-600 font-bold">Education for All</div>
                    </div>
                    <button className="w-full bg-[#FF5722] text-white text-[10px] font-bold py-2.5 rounded-md shadow-sm mb-2.5 flex items-center justify-center gap-1">
                      View 80G Receipt
                    </button>
                    
                    <div className="w-full space-y-2 mt-2">
                       <button className="w-full bg-white border border-gray-200 text-gray-600 text-[9px] font-bold py-2 rounded flex items-center justify-start px-2.5 gap-2 shadow-sm">
                         <FileText className="w-3 h-3 text-gray-400 shrink-0" /> My Donations
                       </button>
                       <button className="w-full bg-white border border-gray-200 text-gray-600 text-[9px] font-bold py-2 rounded flex items-center justify-start px-2.5 gap-2 shadow-sm">
                         <FileText className="w-3 h-3 text-gray-400 shrink-0" /> Annual Tax Statement
                       </button>
                       <button className="w-full bg-white border border-gray-200 text-gray-600 text-[9px] font-bold py-2 rounded flex items-center justify-start px-2.5 gap-2 shadow-sm">
                         <FileText className="w-3 h-3 text-gray-400 shrink-0" /> Manage Recurring
                       </button>
                    </div>
                  </div>
               </div>
               </motion.div>
            </div>
          </div>

          {/* Column 3: CSR & Corporates */}
          <div className="bg-blue-50/50 rounded-2xl p-4 sm:p-5 border border-blue-100 flex flex-col h-full relative overflow-hidden group">
            
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center shadow-sm shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900">CSR & Corporates</h3>
                <p className="text-[10px] sm:text-[11px] text-gray-500 font-medium uppercase tracking-wider">CSR partners, matching funds and NGO sponsors</p>
              </div>
            </div>

            {/* Tablet Mockup */}
            <div className="w-full flex-1 flex justify-center items-start sm:items-center py-2 sm:py-4 min-h-[160px] sm:min-h-[220px]">
              <div className="w-full max-w-[250px] scale-[0.7] sm:scale-100 origin-top sm:origin-center mt-2 sm:mt-0">
                <div className="bg-white rounded-t-lg border-[4px] border-b-0 border-gray-800 shadow-lg h-40 overflow-hidden relative w-full flex flex-col">
                   <div className="w-full h-4 bg-gray-100 flex items-center px-2 gap-1 border-b shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                  </div>
                  <div className="flex flex-1 h-full">
                    {/* Sidebar */}
                    <div className="w-16 border-r border-gray-100 bg-gray-50/30 flex flex-col items-start py-2 px-1.5 gap-1.5 shrink-0">
                      <div className="w-full pl-0.5 mb-1"><Logo variant="dark" showTagline={false} className="scale-[0.25] origin-left -mt-2 -mb-2" /></div>
                      {[
                        { icon: LayoutDashboard, label: 'Dashboard', active: true },
                        { icon: Megaphone, label: 'Campaigns' },
                        { icon: Shield, label: 'Compliance' },
                        { icon: FileText, label: 'Reports' }
                      ].map((item, i) => (
                        <div key={i} className={`flex items-center gap-1 w-full p-0.5 rounded ${item.active ? 'bg-blue-50 text-blue-700' : 'text-gray-400'}`}>
                          <item.icon className={`w-2.5 h-2.5 ${item.active ? 'text-blue-600' : 'text-gray-400'}`} strokeWidth={2.5} />
                          <span className={`text-[5px] font-bold ${item.active ? 'text-blue-700' : 'text-gray-500'}`}>{item.label}</span>
                        </div>
                      ))}
                    </div>
                    {/* Content */}
                    <div className="flex-1 p-3 flex flex-col">
                      <div className="flex justify-between items-center mb-2.5">
                        <div className="text-[9px] font-black text-gray-800">Rural Education Initiative</div>
                        <div className="text-[7px] font-bold text-green-600">80%</div>
                      </div>
                      
                      <div className="w-full bg-gray-100 rounded-full h-1.5 mb-2.5">
                        <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '80%' }}></div>
                      </div>

                      <div className="flex justify-between mb-2.5">
                        <div>
                          <div className="text-gray-900 text-xs font-black">₹ 50,00,000</div>
                          <div className="text-[5px] text-gray-500 font-bold uppercase tracking-wider">Total Grant</div>
                        </div>
                        <div className="text-right">
                          <div className="text-gray-900 text-xs font-black">₹ 37,50,000</div>
                          <div className="text-[5px] text-gray-500 font-bold uppercase tracking-wider">Utilized</div>
                        </div>
                      </div>
                      
                      <div className="mt-auto grid grid-cols-3 gap-1">
                        <div className="bg-blue-50 rounded p-1">
                          <div className="text-[8px] font-black text-blue-600 mb-0.5">12,500</div>
                          <div className="text-[5px] text-gray-600 font-bold leading-tight">Students<br/>Reached</div>
                        </div>
                        <div className="bg-blue-50 rounded p-1">
                          <div className="text-[8px] font-black text-blue-600 mb-0.5">120</div>
                          <div className="text-[5px] text-gray-600 font-bold leading-tight">Schools<br/>Supported</div>
                        </div>
                        <div className="bg-blue-50 rounded p-1">
                          <div className="text-[8px] font-black text-blue-600 mb-0.5">1,200</div>
                          <div className="text-[5px] text-gray-600 font-bold leading-tight">Volunteers<br/>&nbsp;</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[110%] -ml-[5%] h-2.5 bg-gray-300 rounded-b-lg shadow-sm border-t border-gray-400 relative">
                   <div className="w-12 h-1 bg-gray-400 rounded-b-md mx-auto"></div>
                </div>
              </div>
            </div>

            <motion.div 
              className="mt-4 pt-4 border-t border-blue-100/50"
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-50px" }}
            >
               <div className="text-center w-full mb-3 text-[10px] font-bold text-blue-500 tracking-widest uppercase">For CSR Partners</div>
              <ul className="space-y-2">
                {[
                  'Milestone-based fund tracking',
                  'Utilization certificates & audit trails',
                  'ESG compliance data'
                ].map((text, i) => (
                  <motion.li variants={itemDropVariants} key={i} className="flex items-start text-xs lg:text-sm text-gray-600 font-medium leading-tight">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 mr-2 shrink-0 mt-0.5" />
                    {text}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Full-width Bottom Footer Bar */}
      <div className="w-full bg-[#153D2B] py-3.5 sm:py-4 mt-auto">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-row flex-wrap justify-center sm:justify-between items-center gap-4 sm:gap-6">
          
          <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-[130px] justify-center sm:justify-start">
             <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 shrink-0">
               <Leaf className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" strokeWidth={1.5} />
             </div>
             <div>
               <div className="text-[10px] sm:text-sm font-bold text-white leading-[1.15]">More<br/>Transparency</div>
             </div>
          </div>

          <div className="hidden sm:block w-px h-8 bg-[#1F543C]"></div>

          <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-[130px] justify-center">
             <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 shrink-0">
               <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400" strokeWidth={1.5} />
             </div>
             <div>
               <div className="text-[10px] sm:text-sm font-bold text-white leading-[1.15]">Greater<br/>Accountability</div>
             </div>
          </div>

          <div className="hidden sm:block w-px h-8 bg-[#1F543C]"></div>

          <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-[130px] justify-center">
             <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 shrink-0">
               <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" strokeWidth={1.5} />
             </div>
             <div>
               <div className="text-[10px] sm:text-sm font-bold text-white leading-[1.15]">Sustainable<br/>Impact</div>
             </div>
          </div>

          <div className="hidden sm:block w-px h-8 bg-[#1F543C]"></div>

          <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-[130px] justify-center sm:justify-end">
             <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 shrink-0">
               <Users className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" strokeWidth={1.5} />
             </div>
             <div>
               <div className="text-[10px] sm:text-sm font-bold text-white leading-[1.15]">Unified<br/>Ecosystem</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
