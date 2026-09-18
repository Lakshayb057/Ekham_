import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Minus,
  X as XIcon,
  FileText, 
  Database, 
  BarChart3, 
  Unlink, 
  Megaphone, 
  CreditCard, 
  Table2, 
  Mail, 
  Heart, 
  Users, 
  FileCheck2, 
  Send,
  LineChart
} from 'lucide-react';

interface ProblemSectionProps {
  onOpenDemoModal?: () => void;
  onLearnMore?: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ 
  onOpenDemoModal, 
  onLearnMore 
}) => {
  // Problem Cards (4)
  const problems = [
    {
      icon: FileText,
      title: '80G & 10BD Nightmares',
      description: 'Manual, delayed, and error-prone compliance.',
    },
    {
      icon: Database,
      title: 'Data Captivity',
      description: 'Aggregators own your donors.',
    },
    {
      icon: BarChart3,
      title: 'No Visibility',
      description: 'Blind to donor LTV, retention and impact.',
    },
    {
      icon: Unlink,
      title: 'Fragmented Operations',
      description: 'Multiple tools, manual work, high drop-offs.',
    },
  ];

  // Traditional Operations Flow Nodes (5)
  const traditionalNodes = [
    { label: 'Campaign\nTool', icon: Megaphone, badge: 'x' },
    { label: 'Payment\nGateway', icon: CreditCard, badge: 'x' },
    { label: 'Spreadsheet', icon: Table2, badge: 'minus' },
    { label: 'Email\nTool', icon: Mail, badge: 'minus' },
    { label: 'Manual\nReports', icon: FileText, badge: 'minus' },
  ];

  // EKhum Connected Flow Nodes (6)
  const ekhumNodes = [
    { label: 'Campaigns', icon: Megaphone },
    { label: 'Donations', icon: Heart },
    { label: 'Donors', icon: Users },
    { label: 'Compliance', icon: FileCheck2 },
    { label: 'Engagement', icon: Send },
    { label: 'Analytics', icon: BarChart3 },
  ];

  // 4 Feature Highlights
  const highlights = [
    {
      icon: Database,
      title: 'Charity-owned\ndonor data',
    },
    {
      icon: FileText,
      title: 'Simplified 80G &\nForm 10BD workflows',
    },
    {
      icon: Users,
      title: 'Automated\ndonor engagement',
    },
    {
      icon: LineChart,
      title: 'Real-time reporting\nand AI insights',
    },
  ];

  const handleCtaClick = () => {
    if (onOpenDemoModal) {
      onOpenDemoModal();
    } else if (onLearnMore) {
      onLearnMore();
    }
  };

  return (
    <section id="problem" className="min-h-screen lg:h-screen flex flex-col justify-center py-6 sm:py-8 lg:py-8 bg-[#FAF8F2] relative overflow-hidden border-b border-[#EAE2D7]/80">
      <div className="max-w-[1260px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-center h-full">
        
        {/* =========================================================================
            PART 1: THE PROBLEM (Top Section - Clean, Spacious & Balanced)
        ========================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Paragraph, CTA */}
          <div className="lg:col-span-4 xl:col-span-4">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#F4512A] block mb-1.5">
              THE PROBLEM
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] xl:text-[2.45rem] font-black text-[#102126] tracking-[-0.035em] leading-[1.08] mb-2.5">
              Charities<br />
              Deserve <span className="text-[#F4512A]">Better.</span>
            </h2>
            <p className="text-xs sm:text-[13px] text-[#687176] leading-relaxed max-w-sm mb-3.5 font-normal">
              Too many NGOs are held back by manual processes, fragmented tools, and lack of data control.
            </p>
            <button
              onClick={handleCtaClick}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 bg-white hover:bg-gray-50 text-xs sm:text-[13px] font-semibold text-[#102126] rounded-full border border-[#DDD5C9] shadow-2xs hover:shadow-xs transition-all duration-200"
            >
              <span>See the full problem</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#F4512A]" />
            </button>
          </div>

          {/* Right Column: 4 Problem Cards in a horizontal row */}
          <div className="lg:col-span-8 xl:col-span-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.25
                  }
                }
              }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5"
            >
              {problems.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, x: 0, y: -25 },
                      visible: { opacity: 1, x: 0, y: 0, transition: { type: 'spring', stiffness: 70, damping: 15 } }
                    }}
                    className="bg-[#F1EEE7] hover:bg-[#EAE4DC] rounded-2xl p-3.5 sm:p-4 flex flex-col justify-start border border-[#E2DAD0] shadow-2xs hover:shadow-xs hover:-translate-y-0.5 transition-all duration-200 min-h-[110px] sm:min-h-[120px]"
                  >
                    {/* Orange Circle Icon Badge */}
                    <div className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full bg-[#F4512A] text-white flex items-center justify-center mb-2.5 shadow-xs flex-shrink-0">
                      <Icon className="w-4 h-4 stroke-[2.2]" />
                    </div>

                    <h3 className="text-xs sm:text-[13px] font-bold text-[#102126] leading-snug mb-1 whitespace-pre-line">
                      {card.title}
                    </h3>

                    <p className="text-[11px] text-[#687176] leading-snug font-normal">
                      {card.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>

        {/* ================= THIN ELEGANT SEPARATOR ================= */}
        <div className="my-6 sm:my-7 lg:my-8 border-b border-[#E5DCD0]/80"></div>

        {/* =========================================================================
            PART 2: WHY EKHUM (Bottom Section - Clean Comparison)
        ========================================================================== */}
        <div id="why-ekhum">
          
          {/* Section Heading */}
          <div className="mb-3.5 sm:mb-4">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#F4512A] block mb-1">
              WHY EKHUM
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[1.95rem] font-black text-[#102126] tracking-[-0.035em] leading-[1.12] mb-1.5">
              From Fragmented Tools to One <span className="text-[#F4512A]">Connected Platform.</span>
            </h2>
            <p className="text-xs sm:text-[13px] text-[#687176] max-w-2xl leading-normal font-normal">
              EKhum connects fundraising, donations, donors, compliance, engagement, and analytics in one intelligent platform.
            </p>
          </div>

          {/* Main Comparison Layout: DESKTOP (Horizontal) */}
          <div className="hidden lg:grid grid-cols-[1fr_auto_1.15fr] items-center gap-4 mb-5">
            {/* ---------------- LEFT PANEL: TRADITIONAL OPERATIONS ---------------- */}
            <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6 }} className="bg-[#F1EEE7] border border-[#E2DAD0] rounded-3xl p-5 relative flex flex-col justify-center h-full min-h-[185px]">
              <div>
                <div className="mb-3.5 flex justify-between items-start gap-2">
                  <div>
                    <h3 className="text-sm font-bold text-[#102126] tracking-tight mb-0.5">
                      Traditional Charity Operations
                    </h3>
                    <p className="text-xs text-[#687176] font-medium">
                      Disconnected tools. Manual work. Limited visibility.
                    </p>
                  </div>
                  <div className="text-[#F4512A] font-black text-xs uppercase tracking-widest text-right shrink-0 mt-1">
                    Many Tools
                  </div>
                </div>

                <div className="flex items-center justify-between gap-1 overflow-visible pb-0">
                  {traditionalNodes.map((node, idx) => {
                    const Icon = node.icon;
                    return (
                      <React.Fragment key={idx}>
                        <motion.div initial={{ opacity: 0.25 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.8 }} transition={{ duration: 0.4, delay: (idx * 0.8) + 0.8 }} className="flex flex-col items-center flex-shrink-0">
                          <div className="w-[58px] xl:w-[64px] h-[60px] xl:h-[66px] bg-white rounded-xl border border-[#E0D8CC] shadow-2xs flex flex-col items-center justify-center p-1 text-center">
                            <Icon className="w-4 h-4 text-[#55605A] stroke-[1.8] mb-0.5" />
                            <span className="text-[9px] font-bold text-[#102126] leading-tight text-center whitespace-pre-line">
                              {node.label}
                            </span>
                          </div>
                          <div className="w-3.5 h-3.5 rounded-full bg-[#8E877D] text-white flex items-center justify-center -mt-1.5 shadow-2xs z-10">
                            {node.badge === 'x' ? (
                              <XIcon className="w-2 h-2 stroke-[2.8]" />
                            ) : (
                              <Minus className="w-2 h-2 stroke-[3]" />
                            )}
                          </div>
                        </motion.div>
                        {idx < traditionalNodes.length - 1 && (
                          <div className="flex items-center justify-center text-[#B0A79C] select-none px-1 flex-shrink-0">
                            <span className="text-[10px] font-mono tracking-tighter opacity-80">- -&#10140;</span>
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* ---------------- CENTER COMPARISON INDICATOR ---------------- */}
            <div className="flex flex-col items-center justify-center px-2 flex-shrink-0 self-center">
              <div className="w-10 h-10 rounded-full bg-[#F4512A] text-white flex items-center justify-center shadow-xs">
                <ArrowRight className="w-4.5 h-4.5 stroke-[3]" />
              </div>
            </div>

            {/* ---------------- RIGHT PANEL: WITH EKHUM ---------------- */}
            <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6 }} className="bg-[#153D2B] border border-[#1F543C] rounded-3xl p-5 relative shadow-md flex flex-col justify-center h-full min-h-[185px] overflow-hidden">
              <div className="absolute top-0 right-1/4 w-48 h-12 bg-[#F4512A]/15 blur-xl pointer-events-none rounded-full"></div>
              <div className="relative z-10">
                <div className="mb-3.5 flex justify-between items-start gap-2">
                  <div>
                    <h3 className="text-sm font-bold text-white tracking-tight mb-0.5">
                      With EKhum
                    </h3>
                    <p className="text-xs text-emerald-100/85 font-normal">
                      One connected platform. Complete ownership. Real-time visibility.
                    </p>
                  </div>
                  <div className="text-[#F4512A] font-black text-xs uppercase tracking-widest text-right shrink-0 mt-1">
                    One Platform
                  </div>
                </div>

                <div className="flex items-center justify-between gap-1 overflow-visible pb-0 relative z-10">
                  {ekhumNodes.map((node, idx) => {
                    const Icon = node.icon;
                    return (
                      <React.Fragment key={idx}>
                        <motion.div initial={{ opacity: 0.25 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.8 }} transition={{ duration: 0.4, delay: (idx * 0.8) + 1.2 }} className="flex flex-col items-center flex-shrink-0">
                          <div className="w-[50px] xl:w-[56px] h-[54px] xl:h-[60px] bg-white rounded-xl shadow-xs border border-white flex flex-col items-center justify-center p-0.5 text-center group hover:scale-105 transition-transform">
                            <Icon className="w-4 h-4 text-[#F4512A] stroke-[2.2] mb-0.5" />
                            <span className="text-[8.5px] font-bold text-[#102126] leading-tight text-center">
                              {node.label}
                            </span>
                          </div>
                        </motion.div>
                        {idx < ekhumNodes.length - 1 && (
                          <div className="flex items-center justify-center text-white/60 select-none px-0.5 flex-shrink-0">
                            <span className="text-[11px] font-bold text-white/70">&#8594;</span>
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>

                <div className="relative w-full h-6 my-1 pointer-events-none block">
                  <svg className="w-full h-full text-[#F4512A]" viewBox="0 0 360 24" fill="none" preserveAspectRatio="none">
                    <line x1="28" y1="0" x2="28" y2="8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
                    <line x1="88" y1="0" x2="88" y2="8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
                    <line x1="148" y1="0" x2="148" y2="8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
                    <line x1="212" y1="0" x2="212" y2="8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
                    <line x1="272" y1="0" x2="272" y2="8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
                    <line x1="332" y1="0" x2="332" y2="8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
                    <path d="M 18 8 Q 53 14, 88 8 T 148 8 T 212 8 T 272 8 T 342 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                    <path d="M 180 8 C 180 14, 180 18, 180 24" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                  </svg>
                </div>

                <div className="flex items-center justify-center gap-2 mt-1.5">
                  <div className="relative w-5 h-5 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#F4512A] animate-[spin_10s_linear_infinite]">
                      <line x1="18" y1="4" x2="18" y2="32" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
                      <line x1="4" y1="18" x2="32" y2="18" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
                      <line x1="8.1" y1="8.1" x2="27.9" y2="27.9" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
                      <line x1="27.9" y1="8.1" x2="8.1" y2="27.9" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
                      <circle cx="18" cy="18" r="2.8" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="flex items-center tracking-tight font-extrabold text-xl leading-none">
                    <span className="text-white">EK</span>
                    <span className="text-[#F4512A]">hum</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Main Comparison Layout: MOBILE (Vertical Side-by-side) */}
          <div className="grid lg:hidden grid-cols-[1fr_auto_1fr] items-stretch gap-1.5 sm:gap-4 mb-4 sm:mb-5">
            
            {/* ---------------- LEFT PANEL: TRADITIONAL OPERATIONS ---------------- */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.5 }} className="bg-[#F1EEE7] border border-[#E2DAD0] rounded-xl sm:rounded-3xl p-3 sm:p-4.5 relative flex flex-col justify-start h-full min-h-[170px]">
              <div>
                <div className="mb-2 sm:mb-3.5 flex flex-col sm:flex-row justify-between items-start gap-1 sm:gap-2">
                  <div>
                    <h3 className="text-[10.5px] sm:text-sm font-bold text-[#102126] tracking-tight mb-0.5 leading-tight">
                      Traditional
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#687176] font-medium hidden sm:block">
                      Disconnected tools. Manual work. Limited visibility.
                    </p>
                  </div>
                  <div className="text-[#F4512A] font-black text-[9px] sm:text-xs uppercase tracking-widest text-left sm:text-right shrink-0 mt-0 sm:mt-1">
                    Many Tools
                  </div>
                </div>

                {/* Vertical Nodes Timeline */}
                <div className="flex flex-col relative w-full mt-3 sm:mt-6 pb-1 pl-0.5 sm:pl-4">
                  {/* Dashed vertical background line */}
                  <div className="absolute left-[15px] sm:left-[46px] top-4 bottom-4 w-[1.5px] sm:w-[2px] border-l-[1.5px] sm:border-l-[2px] border-dashed border-[#CFC5B8] z-0"></div>

                  {traditionalNodes.map((node, idx) => {
                    const Icon = node.icon;
                    return (
                      <motion.div key={idx} initial={{ opacity: 0.25 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.8 }} transition={{ duration: 0.4, delay: (idx * 0.8) + 0.8 }} className="flex items-center gap-2.5 sm:gap-6 mb-3 sm:mb-6 last:mb-0 relative z-10">
                        <div className="relative flex-shrink-0">
                          {/* White Rounded Card */}
                          <div className="w-8 h-8 sm:w-[60px] sm:h-[60px] bg-white rounded-lg sm:rounded-2xl border border-[#E0D8CC] shadow-sm flex items-center justify-center text-center relative z-10">
                            <Icon className="w-3.5 h-3.5 sm:w-6 sm:h-6 text-[#55605A] stroke-[1.8]" />
                          </div>
                          {/* Minus or Cross badge */}
                          <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-full bg-[#8E877D] text-white flex items-center justify-center shadow-xs z-20">
                            {node.badge === 'x' ? (
                              <XIcon className="w-2 h-2 sm:w-3 sm:h-3 stroke-[3]" />
                            ) : (
                              <Minus className="w-2 h-2 sm:w-3 sm:h-3 stroke-[3]" />
                            )}
                          </div>
                        </div>

                        <span className="text-[9.5px] sm:text-[15px] font-bold text-[#102126] leading-tight">
                          {node.label.replace('\n', ' ')}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* ---------------- CENTER COMPARISON INDICATOR ---------------- */}
            <div className="flex flex-col items-center justify-center px-0.5 sm:px-2 flex-shrink-0 self-center">
              <div className="w-5 h-5 sm:w-10 sm:h-10 rounded-full bg-[#F4512A] text-white flex items-center justify-center shadow-xs">
                <ArrowRight className="w-2.5 h-2.5 sm:w-4.5 sm:h-4.5 stroke-[3]" />
              </div>
            </div>

            {/* ---------------- RIGHT PANEL: WITH EKHUM ---------------- */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.5 }} className="bg-[#153D2B] border border-[#1F543C] rounded-xl sm:rounded-3xl p-3 sm:p-4.5 relative shadow-md flex flex-col justify-start h-full min-h-[170px] overflow-hidden">
              <div className="absolute top-0 right-1/4 w-32 sm:w-48 h-12 bg-[#F4512A]/15 blur-xl pointer-events-none rounded-full"></div>

              <div className="relative z-10">
                <div className="mb-2 sm:mb-3.5 flex flex-col sm:flex-row justify-between items-start gap-1 sm:gap-2">
                  <div>
                    <h3 className="text-[10.5px] sm:text-sm font-bold text-white tracking-tight mb-0.5 leading-tight">
                      With EKhum
                    </h3>
                    <p className="text-[11px] sm:text-xs text-emerald-100/85 font-normal hidden sm:block">
                      One connected platform. Complete ownership. Real-time visibility.
                    </p>
                  </div>
                  <div className="text-[#F4512A] font-black text-[9px] sm:text-xs uppercase tracking-widest text-left sm:text-right shrink-0 mt-0 sm:mt-1">
                    One Platform
                  </div>
                </div>

                {/* Connected Tree Layout */}
                <div className="flex items-stretch relative w-full mt-3 sm:mt-6 z-10">
                  
                  {/* LEFT: EKhum Hub */}
                  <div className="flex flex-col items-center justify-center pr-2 sm:pr-6 relative z-20 w-[35%] sm:w-auto">
                    {/* Central Hub Card */}
                    <div className="bg-white rounded-lg sm:rounded-2xl p-1.5 sm:px-5 sm:py-3 shadow-md border border-white flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-2 z-20">
                      <div className="relative w-4 h-4 sm:w-6 sm:h-6 flex items-center justify-center flex-shrink-0">
                        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#F4512A] animate-[spin_10s_linear_infinite]">
                          <line x1="18" y1="4" x2="18" y2="32" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
                          <line x1="4" y1="18" x2="32" y2="18" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
                          <line x1="8.1" y1="8.1" x2="27.9" y2="27.9" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
                          <line x1="27.9" y1="8.1" x2="8.1" y2="27.9" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
                          <circle cx="18" cy="18" r="2.8" fill="currentColor" />
                        </svg>
                      </div>
                      <div className="flex items-center tracking-tight font-extrabold text-[9px] sm:text-xl leading-none mt-0.5 sm:mt-0">
                        <span className="text-[#102126]">EK</span>
                        <span className="text-[#F4512A]">hum</span>
                      </div>
                    </div>

                    {/* Horizontal Connection line from Hub to Vertical Trunk */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 sm:w-6 h-[2px] bg-[#F4512A] shadow-[0_0_8px_rgba(244,81,42,0.6)] z-10"></div>
                  </div>

                  {/* RIGHT: Branches/Nodes Timeline */}
                  <div className="flex flex-col justify-between flex-1 relative pl-2 sm:pl-4 py-1 sm:py-0">
                    {/* Glowing continuous vertical trunk line */}
                    <div className="absolute left-0 top-4 bottom-4 sm:top-5 sm:bottom-5 w-[2px] bg-gradient-to-b from-[#F4512A]/40 via-[#F4512A] to-[#F4512A]/40 shadow-[0_0_8px_rgba(244,81,42,0.4)] z-0"></div>

                    {ekhumNodes.map((node, idx) => {
                      const Icon = node.icon;
                      return (
                        <motion.div key={idx} initial={{ opacity: 0.25 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.8 }} transition={{ duration: 0.4, delay: (idx * 0.8) + 1.2 }} className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4 last:mb-0 relative z-10 group cursor-default">
                          
                          {/* Horizontal Branch from Trunk to Node */}
                          <div className="absolute left-[-8px] sm:left-[-16px] top-1/2 -translate-y-1/2 w-2 sm:w-4 h-[2px] bg-[#F4512A] opacity-50 z-0 group-hover:opacity-100 transition-opacity"></div>
                          
                          <div className="relative flex-shrink-0 z-10">
                            {/* White Rounded Card */}
                            <div className="w-7 h-7 sm:w-[50px] sm:h-[50px] bg-white rounded-lg sm:rounded-2xl shadow-sm border border-white flex items-center justify-center text-center group-hover:scale-105 transition-transform">
                              <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#F4512A] stroke-[2.2]" />
                            </div>
                            <div className="absolute top-1/2 -left-1 sm:-left-1.5 -translate-y-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#F4512A] shadow-[0_0_4px_rgba(244,81,42,0.8)] z-20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          </div>

                          <span className="text-[9px] sm:text-[14px] font-bold text-white leading-tight group-hover:text-[#F4512A] transition-colors">
                            {node.label.replace('\n', ' ')}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* 4 Lightweight Feature Highlights */}
          <div className="max-w-4xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 pt-3.5 sm:pt-4 border-t border-[#E5DCD0]/70 mb-4 sm:mb-5">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-center gap-2.5 relative">
                  <div className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full border border-[#F4512A]/40 bg-[#F4512A]/10 flex items-center justify-center text-[#F4512A] flex-shrink-0 shadow-2xs">
                    <Icon className="w-4 h-4 stroke-[2]" />
                  </div>

                  <span className="text-xs sm:text-[12.5px] font-bold text-[#102126] leading-snug whitespace-pre-line">
                    {item.title}
                  </span>

                  {idx < highlights.length - 1 && (
                    <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-5 bg-[#E5DCD0]"></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Single Centered Orange CTA */}
          <div className="flex justify-center mt-2 sm:mt-3">
            <button
              onClick={handleCtaClick}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-[#F4512A] hover:bg-[#D8411C] text-white text-xs sm:text-sm font-bold rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>See How EKhum Works</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
