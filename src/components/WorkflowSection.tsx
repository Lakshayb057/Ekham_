import React from 'react';
import { motion } from 'framer-motion';
import { 
  Megaphone, 
  Share2, 
  CreditCard, 
  Users, 
  FileCheck, 
  BarChart3, 
  FileText, 
  Sparkles,
  Building2,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface WorkflowSectionProps {
  onOpenDemoModal?: () => void;
}

export const WorkflowSection: React.FC<WorkflowSectionProps> = ({ onOpenDemoModal }) => {
  // 9 Exact Steps from User Request for the bottom track
  const timelineSteps = [
    { num: '01', title: 'NGO Portal', desc: 'Secure KYC & permissions', icon: Building2 },
    { num: '02', title: 'Campaign Creation', desc: 'Custom goal bars & ask ladders', icon: Megaphone },
    { num: '03', title: 'Campaign Connection', desc: 'Vanity links & universal embed.js', icon: Share2 },
    { num: '04', title: 'Donations & 80G', desc: 'Instant WhatsApp 80G in <3s', icon: CreditCard },
    { num: '05', title: 'Donor Segmentation', desc: 'Live tiers & tax classifications', icon: Users },
    { num: '06', title: 'Events & Journeys', desc: 'Automated engagement flows', icon: FileCheck },
    { num: '07', title: 'Real-Time Tracking', desc: 'Live volume & gateway health', icon: BarChart3 },
    { num: '08', title: 'Reporting', desc: '1-click 10BD & ledger export', icon: FileText },
    { num: '09', title: 'AI & Analytics', desc: 'Churn prediction & ask upgrades', icon: Sparkles },
  ];

  return (
    <section 
      id="workflow" 
      className="min-h-screen py-6 sm:py-8 lg:py-10 bg-[#FAF8F5] relative overflow-hidden border-b border-[#EAE2D7]/80 flex flex-col justify-center"
    >
      <div className="max-w-[1300px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-center">
        
        {/* =========================================================================
            HEADER: CLEAN & EDITORIAL (ALL EXTRA TEXT REMOVED)
        ========================================================================== */}
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="text-left pb-2 sm:pb-3 border-b border-[#E8DFD3]/80 mb-1 sm:mb-2">
          <span className="text-[10.5px] sm:text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#F4512A] block mb-1">
            OUR END-TO-END WORKFLOW
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.15rem] font-black text-[#102126] tracking-[-0.035em] leading-[1.08] mb-1">
            One Donation. <span className="text-[#F4512A]">Nine Connected Moments.</span>
          </h2>
          <p className="text-[11.5px] sm:text-xs text-[#687176] max-w-2xl font-normal leading-tight">
            From campaign creation to lasting impact — everything works together, automatically.
          </p>
        </motion.div>

        {/* =========================================================================
            3 STAGES WITH ENLARGED PHONE INTERFACES & CENTERED ALIGNMENT
        ========================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-7 items-stretch my-2 sm:my-3 lg:my-4">
          
          {/* ---------------- STAGE 01: LAUNCH (PHONE 1) ---------------- */}
          <motion.div initial={{ opacity: 0, x: -50, y: 0 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0 }} className="relative flex flex-col justify-between lg:border-r lg:border-[#E5DCD0]/80 lg:pr-7">
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-full bg-[#153D2B] text-white flex items-center justify-center text-[10px] font-black">
                      01
                    </div>
                    <span className="text-[10.5px] font-black tracking-widest text-[#153D2B] uppercase">
                      STAGE 1: LAUNCH
                    </span>
                  </div>
                  <span className="text-[9.5px] font-bold text-gray-400">Steps 01–03</span>
                </div>

                <h3 className="text-sm sm:text-base font-black text-[#102126] leading-tight mb-2">
                  Launch with Confidence.
                </h3>
              </div>

              {/* Device Mockup 1: Wide Live Campaign Studio */}
              <div className="flex items-center justify-center py-2">
                <div className="w-full max-w-[320px] sm:max-w-[350px] bg-[#0E1A1E] p-3 rounded-2xl shadow-md border-2 border-[#1E3037]">
                  {/* Top Bar / Speaker notch */}
                  <div className="flex items-center justify-between px-1 mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#F4512A]"></span>
                      <span className="text-[9px] font-extrabold text-white/90 uppercase tracking-wide">Live Donor Page</span>
                    </div>
                    <span className="text-[8px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-1.5 py-0.5 rounded">
                      ● Active Appeal
                    </span>
                  </div>

                  {/* Screen Content */}
                  <div className="bg-[#FAF8F5] rounded-xl p-3 text-left border border-[#E5DCD0]">
                    <div className="mb-2">
                      <span className="text-[8px] font-extrabold uppercase text-[#F4512A] tracking-wider block">
                        Verified Cause
                      </span>
                      <h4 className="text-[11px] font-black text-[#102126] leading-snug">
                        Nutrition & School Kits for 100 Children
                      </h4>
                    </div>

                    {/* Progress Bar & Stats */}
                    <div className="bg-[#153D2B]/8 rounded-lg p-2 mb-2 border border-[#153D2B]/15">
                      <div className="flex justify-between items-baseline mb-1">
                        <div>
                          <span className="text-[12px] font-black text-[#153D2B]">₹4,25,000</span>
                          <span className="text-[8.5px] text-gray-500 font-medium ml-1">raised of ₹5,00,000</span>
                        </div>
                        <span className="text-[9.5px] font-black text-[#F4512A]">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                        <div className="bg-[#F4512A] h-full w-[85%] rounded-full"></div>
                      </div>
                    </div>

                    {/* Select Giving Amount */}
                    <div className="grid grid-cols-3 gap-1.5 mb-2">
                      <div className="text-center py-1 bg-white border border-gray-300 rounded-md">
                        <span className="text-[9px] font-bold text-gray-700 block">₹500</span>
                        <span className="text-[7px] text-gray-400 block">1 Kit</span>
                      </div>
                      <div className="text-center py-1 bg-[#153D2B] text-white rounded-md shadow-xs border border-[#153D2B]">
                        <span className="text-[9px] font-black text-white block">₹1,500</span>
                        <span className="text-[7px] text-emerald-200 block">Popular</span>
                      </div>
                      <div className="text-center py-1 bg-white border border-gray-300 rounded-md">
                        <span className="text-[9px] font-bold text-gray-700 block">₹5,000</span>
                        <span className="text-[7px] text-gray-400 block">Full Term</span>
                      </div>
                    </div>

                    {/* Action button */}
                    <button className="w-full py-1.5 bg-[#F4512A] text-white text-[9px] font-black rounded-lg text-center shadow-xs flex items-center justify-center gap-1">
                      <span>Donate via UPI / Card</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* 3 Step Highlights */}
              <div className="mt-2 space-y-1 text-left">
                <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.8 }} transition={{ duration: 0.4, delay: 1.0 }} className="flex items-start gap-1.5">
                  <span className="text-[10px] font-black text-[#153D2B]">01</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight">
                    <strong>Portal:</strong> Secure KYC onboarding & roles
                  </p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.8 }} transition={{ duration: 0.4, delay: 1.2 }} className="flex items-start gap-1.5">
                  <span className="text-[10px] font-black text-[#F4512A]">02</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight">
                    <strong>Creation:</strong> Custom goal bars & ask ladders
                  </p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.8 }} transition={{ duration: 0.4, delay: 1.4 }} className="flex items-start gap-1.5">
                  <span className="text-[10px] font-black text-[#153D2B]">03</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight">
                    <strong>Connection:</strong> Universal widget & WhatsApp
                  </p>
                </motion.div>
              </div>

            </div>
          </motion.div>

          {/* ---------------- STAGE 02: TRANSACT (PHONE 2) ---------------- */}
          <motion.div initial={{ opacity: 0, x: 0, y: -50 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }} className="relative flex flex-col justify-between lg:border-r lg:border-[#E5DCD0]/80 lg:pr-7">
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-full bg-[#F4512A] text-white flex items-center justify-center text-[10px] font-black">
                      02
                    </div>
                    <span className="text-[10.5px] font-black tracking-widest text-[#F4512A] uppercase">
                      STAGE 2: TRANSACT
                    </span>
                  </div>
                  <span className="text-[9.5px] font-bold text-gray-400">Steps 04–06</span>
                </div>

                <h3 className="text-sm sm:text-base font-black text-[#102126] leading-tight mb-2">
                  Every Gift, Connected.
                </h3>
              </div>

              {/* Device Mockup 2: Wide WhatsApp Receipt Interface */}
              <div className="flex items-center justify-center py-2">
                <div className="w-full max-w-[320px] sm:max-w-[350px] bg-[#0E1A1E] p-3 rounded-2xl shadow-md border-2 border-[#1E3037]">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between px-1 mb-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 flex items-center justify-center text-[6px] text-white font-bold">✓</div>
                      <span className="text-[9px] font-extrabold text-white/90 uppercase tracking-wide">WhatsApp Delivery</span>
                    </div>
                    <span className="text-[8px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-1.5 py-0.5 rounded">
                      ⚡ &lt; 3 Seconds
                    </span>
                  </div>

                  {/* Chat UI Screen */}
                  <div className="bg-[#0B141A] rounded-xl p-3 text-left border border-white/10 text-white">
                    {/* Bot Header */}
                    <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-white/10">
                      <div className="flex items-center gap-1.5">
                         <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-[8px] font-black text-black">
                          E
                        </div>
                        <span className="text-[9px] font-bold text-white">EKhum Verified Bot</span>
                      </div>
                      <span className="text-[7.5px] text-gray-400">Instant</span>
                    </div>

                    {/* Payment Alert Bubble */}
                    <div className="bg-[#1F2C34] rounded-lg p-2 mb-2 border border-white/5">
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="text-[8px] font-bold text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400 inline" />
                          Payment Successful
                        </span>
                        <span className="text-[10px] font-black text-white">₹5,000</span>
                      </div>
                      <p className="text-[7.5px] text-gray-300">
                        Rajiv Sharma • 80G Tax Exemption Applied
                      </p>
                    </div>

                    {/* Attached 80G Certificate */}
                    <div className="bg-[#202C33] rounded-lg p-2 flex items-center justify-between border border-emerald-500/30 mb-1.5">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-emerald-400" />
                        <div>
                          <span className="text-[8.5px] font-black text-white block leading-tight">
                            Form 80G Tax Receipt.pdf
                          </span>
                          <span className="text-[7px] text-gray-400 block">
                            Govt ITD Compliant • Digitally Signed
                          </span>
                        </div>
                      </div>
                      <span className="text-[7.5px] font-black text-emerald-400 bg-emerald-500/15 px-1.5 py-0.5 rounded border border-emerald-500/20">
                        Download
                      </span>
                    </div>

                    <div className="text-[7px] text-emerald-400/80 text-center font-medium">
                      ✓ Profile auto-tagged in Donor CRM
                    </div>
                  </div>
                </div>
              </div>

              {/* 3 Step Highlights */}
              <div className="mt-2 space-y-1 text-left">
                <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.8 }} transition={{ duration: 0.4, delay: 1.1 }} className="flex items-start gap-1.5">
                  <span className="text-[10px] font-black text-[#F4512A]">04</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight">
                    <strong>Donations & 80G:</strong> Instant WhatsApp 80G in &lt;3s
                  </p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.8 }} transition={{ duration: 0.4, delay: 1.3 }} className="flex items-start gap-1.5">
                  <span className="text-[10px] font-black text-[#153D2B]">05</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight">
                    <strong>Segmentation:</strong> Live tiers & tax classifications
                  </p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.8 }} transition={{ duration: 0.4, delay: 1.5 }} className="flex items-start gap-1.5">
                  <span className="text-[10px] font-black text-[#F4512A]">06</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight">
                    <strong>Journeys:</strong> Automated engagement communication
                  </p>
                </motion.div>
              </div>

            </div>
          </motion.div>

          {/* ---------------- STAGE 03: MULTIPLY (PHONE 3) ---------------- */}
          <motion.div initial={{ opacity: 0, x: 50, y: 0 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }} className="relative flex flex-col justify-between">
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-full bg-[#153D2B] text-white flex items-center justify-center text-[10px] font-black">
                      03
                    </div>
                    <span className="text-[10.5px] font-black tracking-widest text-[#153D2B] uppercase">
                      STAGE 3: MULTIPLY
                    </span>
                  </div>
                  <span className="text-[9.5px] font-bold text-gray-400">Steps 07–09</span>
                </div>

                <h3 className="text-sm sm:text-base font-black text-[#102126] leading-tight mb-2">
                  Turn Data Into Impact.
                </h3>
              </div>

              {/* Device Mockup 3: Wide Live Ledger & Tax Filing */}
              <div className="flex items-center justify-center py-2">
                <div className="w-full max-w-[320px] sm:max-w-[350px] bg-[#0E1A1E] p-3 rounded-2xl shadow-md border-2 border-[#1E3037]">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between px-1 mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      <span className="text-[9px] font-extrabold text-white/90 uppercase tracking-wide">Automated Compliance</span>
                    </div>
                    <span className="text-[8px] font-bold text-gray-300 bg-white/10 px-1.5 py-0.5 rounded">
                      FY 2025–26
                    </span>
                  </div>

                  {/* Dashboard Screen */}
                  <div className="bg-[#14201A] rounded-xl p-3 text-left border border-[#273B30] text-white">
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
                      <div className="w-1/6 bg-emerald-500/40 h-[40%] rounded-xs"></div>
                      <div className="w-1/6 bg-emerald-500/50 h-[65%] rounded-xs"></div>
                      <div className="w-1/6 bg-emerald-500/60 h-[50%] rounded-xs"></div>
                      <div className="w-1/6 bg-emerald-500/80 h-[75%] rounded-xs"></div>
                      <div className="w-1/6 bg-[#F4512A] h-[100%] rounded-xs"></div>
                      <div className="w-1/6 bg-emerald-400 h-[88%] rounded-xs"></div>
                    </div>

                    {/* 10BD 1-Click Tile */}
                    <div className="bg-[#1F3429] p-2 rounded-lg flex items-center justify-between border border-emerald-400/25">
                      <div>
                        <span className="text-[8.5px] font-black block leading-tight text-white">
                          Form 10BD Ready
                        </span>
                        <span className="text-[7px] text-emerald-200 block">
                          1,248 Records • Zero manual entry
                        </span>
                      </div>
                      <span className="text-[8px] font-black text-white bg-[#F4512A] px-2 py-0.5 rounded shadow-xs">
                        1-Click Export
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3 Step Highlights */}
              <div className="mt-2 space-y-1 text-left">
                <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.8 }} transition={{ duration: 0.4, delay: 1.2 }} className="flex items-start gap-1.5">
                  <span className="text-[10px] font-black text-[#153D2B]">07</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight">
                    <strong>Tracking:</strong> Live gross volume & health
                  </p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.8 }} transition={{ duration: 0.4, delay: 1.4 }} className="flex items-start gap-1.5">
                  <span className="text-[10px] font-black text-[#F4512A]">08</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight">
                    <strong>Reporting:</strong> 1-click Form 10BD export
                  </p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.8 }} transition={{ duration: 0.4, delay: 1.6 }} className="flex items-start gap-1.5">
                  <span className="text-[10px] font-black text-[#153D2B]">09</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight">
                    <strong>AI Engine:</strong> Lapsed donor risk & upgrades
                  </p>
                </motion.div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* =========================================================================
            BOTTOM 9-STEP ROADMAP: PROMINENT & CENTERED
        ========================================================================== */}
        <div className="mt-3 sm:mt-4 lg:mt-5 pt-3 sm:pt-3.5 border-t border-[#E5DCD0]/90 bg-[#F4EFE8]/40 rounded-2xl px-2 sm:px-3 pb-2.5">
          
          {/* Roadmap Label Strip */}
          <div className="flex items-center justify-between text-[10.5px] font-extrabold uppercase tracking-wider text-[#687176] mb-1 px-1">
            <span>AUTOMATED GIVING ROADMAP (01 → 09)</span>
            
          </div>

          <RoadmapLoop timelineSteps={timelineSteps} />

          {/* Centered Pitch CTA Button (Extra fluff removed) */}
          <div className="flex items-center justify-center mt-1.5">
            <button
              onClick={onOpenDemoModal}
              className="inline-flex items-center gap-2 px-7 sm:px-9 py-2 bg-[#F4512A] hover:bg-[#D8411C] text-white text-xs sm:text-[13px] font-bold rounded-full shadow-xs hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>See How EKhum Works — Free 15-Min Demo</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};






const RoadmapLoop: React.FC<{ timelineSteps: any[] }> = ({ timelineSteps }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % timelineSteps.length);
    }, 1000);
    return () => clearInterval(timer);
  }, [timelineSteps.length]);

  return (
    <div className="overflow-x-auto py-5 px-2 scrollbar-none">
      <div className="flex items-center justify-between min-w-[980px] gap-1 relative px-1">
        {timelineSteps.map((step, idx) => {
          const Icon = step.icon;
          const isEven = idx % 2 === 1;

          return (
            <React.Fragment key={idx}>
              <div className="flex flex-col items-center text-center flex-1 max-w-[102px] group hover:-translate-y-0.5 transition-transform">
                <motion.div 
                  animate={{ 
                    scale: idx === activeIndex ? 1.5 : 1, 
                    boxShadow: idx === activeIndex ? '0 0 20px rgba(244,81,42,0.8)' : 'none' 
                  }} 
                  transition={{ duration: 0.4 }} 
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mb-1 shadow-xs transition-all ${
                  isEven 
                    ? 'bg-[#F4512A]/15 text-[#F4512A] border-2 border-[#F4512A]/35 group-hover:bg-[#F4512A] group-hover:text-white' 
                    : 'bg-[#153D2B]/15 text-[#153D2B] border-2 border-[#153D2B]/35 group-hover:bg-[#153D2B] group-hover:text-white'
                }`}>
                  <Icon className="w-4 h-4 stroke-[2.4]" />
                </motion.div>

                <div className="flex items-center gap-1 justify-center">
                  <span className="text-[9.5px] font-mono font-black text-gray-500">
                    {step.num}
                  </span>
                  <h5 className="text-[10px] font-black text-[#102126] leading-tight truncate">
                    {step.title}
                  </h5>
                </div>
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ duration: 0.4, delay: 1 }}
                  className="text-[8.5px] text-[#687176] leading-tight font-medium line-clamp-2 mt-0.5"
                >
                  {step.desc}
                </motion.p>
              </div>
              {idx < timelineSteps.length - 1 && (
                <div className="flex items-center justify-center text-[#B5ABA0] select-none flex-shrink-0 -mt-3">
                  <span className="text-[10px] font-mono font-bold tracking-tighter opacity-90">- -›</span>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
