import React from 'react';
import { 
  ArrowRight, 
  Minus,
  Megaphone, 
  CreditCard, 
  Table2, 
  Mail, 
  FileText, 
  Heart, 
  Users, 
  FileCheck2, 
  Send, 
  BarChart3,
  Database,
  LineChart
} from 'lucide-react';
import { Logo } from './Logo';

interface WhyEkhumSectionProps {
  onOpenDemoModal?: () => void;
}

export const WhyEkhumSection: React.FC<WhyEkhumSectionProps> = ({ onOpenDemoModal }) => {
  // Traditional Nodes (5)
  const traditionalNodes = [
    { label: 'Campaign Tool', icon: Megaphone },
    { label: 'Payment Gateway', icon: CreditCard },
    { label: 'Spreadsheet', icon: Table2 },
    { label: 'Email Tool', icon: Mail },
    { label: 'Manual Reports', icon: FileText },
  ];

  // EKhum Connected Nodes (6)
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

  return (
    <section id="why-ekhum" className="py-16 sm:py-20 lg:py-24 bg-[#FAF8F2] relative overflow-hidden">
      
      {/* ================= BACKGROUND BOTANICAL LEAF ACCENTS ================= */}
      {/* Bottom-Left Organic Leaf Shape */}
      <div className="absolute -bottom-6 -left-4 w-40 sm:w-52 h-40 sm:h-52 pointer-events-none z-0 opacity-80">
        <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 180C45 150 80 110 100 60" stroke="#153D2B" strokeWidth="2.5" strokeLinecap="round" opacity="0.35" />
          <path d="M35 150C20 130 25 110 48 105C48 128 42 145 35 150Z" fill="#153D2B" opacity="0.9" />
          <path d="M65 120C50 100 55 80 78 75C78 98 72 115 65 120Z" fill="#2E5A44" opacity="0.85" />
          <path d="M95 85C80 65 85 45 105 40C105 63 100 80 95 85Z" fill="#153D2B" opacity="0.9" />
          <path d="M15 175C45 175 75 160 100 145C75 145 45 160 15 175Z" fill="#E8DEC\-?" opacity="0.5" />
        </svg>
      </div>

      {/* Bottom-Right Organic Leaf Shape */}
      <div className="absolute -bottom-6 -right-4 w-40 sm:w-52 h-40 sm:h-52 pointer-events-none z-0 opacity-80">
        <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M180 180C135 150 100 110 80 60" stroke="#153D2B" strokeWidth="2.5" strokeLinecap="round" opacity="0.35" />
          <path d="M145 150C160 130 155 110 132 105C132 128 138 145 145 150Z" fill="#153D2B" opacity="0.9" />
          <path d="M115 120C130 100 125 80 102 75C102 98 108 115 115 120Z" fill="#2E5A44" opacity="0.85" />
          <path d="M85 85C100 65 95 45 75 40C75 63 80 80 85 85Z" fill="#153D2B" opacity="0.9" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= SECTION HEADING ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#F4512A] block mb-2.5">
              WHY EKHUM
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-[#102126] tracking-[-0.035em] leading-[1.08] mb-3">
              From Fragmented Tools<br />
              to One <span className="text-[#F4512A]">Connected Platform.</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#687176] max-w-xl leading-relaxed font-normal">
              EKhum connects fundraising, donations, donors, compliance, engagement, and analytics in one intelligent platform.
            </p>
          </div>

          {/* Right Cursive Flourish: "Same Mission. Greater Impact." */}
          <div className="relative md:text-right flex-shrink-0 select-none pointer-events-none -rotate-2 self-start md:self-auto mb-2 md:mb-4">
            <span className="font-handwriting text-2xl sm:text-[28px] text-[#102126] font-bold block leading-tight">
              Same<br />Mission<br />Greater<br />Impact
            </span>
            <svg className="w-24 h-3.5 text-[#F4512A] ml-auto mt-0.5" viewBox="0 0 120 18" fill="none">
              <path d="M5 12C45 4 80 16 115 6" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* ================= MAIN COMPARISON LAYOUT (TWO SIDE-BY-SIDE PANELS) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1.15fr] items-center gap-4 lg:gap-3 mb-12 sm:mb-14">
          
          {/* ---------------- 1. LEFT PANEL: TRADITIONAL OPERATIONS ---------------- */}
          <div className="bg-[#F1EEE7] border border-[#E2DAD0] rounded-3xl p-5 sm:p-6 lg:p-7 relative flex flex-col justify-between h-full min-h-[340px]">
            <div>
              {/* Panel Header */}
              <div className="mb-6 flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#102126] tracking-tight mb-0.5">
                    Traditional Charity Operations
                  </h3>
                  <p className="text-xs text-[#687176] font-medium">
                    Disconnected tools. Manual work. Limited visibility.
                  </p>
                </div>
                <div className="text-[#F4512A] font-black text-xs sm:text-sm uppercase tracking-widest text-right shrink-0 mt-1">
                  Many Tools
                </div>
              </div>

              {/* 5 Horizontal Nodes */}
              <div className="flex items-center justify-between gap-1 sm:gap-1.5 overflow-x-auto sm:overflow-visible pb-2 sm:pb-0">
                {traditionalNodes.map((node, idx) => {
                  const Icon = node.icon;
                  return (
                    <React.Fragment key={idx}>
                      <div className="flex flex-col items-center flex-shrink-0">
                        {/* White Rounded Card */}
                        <div className="w-[58px] sm:w-[68px] lg:w-[64px] xl:w-[72px] h-[64px] sm:h-[72px] lg:h-[70px] xl:h-[76px] bg-white rounded-2xl border border-[#E0D8CC] shadow-2xs flex flex-col items-center justify-center p-1.5 text-center">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#55605A] stroke-[1.8] mb-1" />
                          <span className="text-[9.5px] sm:text-[10px] font-bold text-[#102126] leading-tight text-center">
                            {node.label}
                          </span>
                        </div>

                        {/* Minus / Disconnected Icon Badge below node */}
                        <div className="w-4 h-4 rounded-full bg-[#9E958A] text-white flex items-center justify-center -mt-2 shadow-2xs z-10">
                          <Minus className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                      </div>

                      {/* Thin broken gray arrow connector */}
                      {idx < traditionalNodes.length - 1 && (
                        <div className="flex items-center justify-center text-[#B0A79C] select-none px-0.5 flex-shrink-0">
                          <span className="text-[11px] font-mono tracking-tighter opacity-80">- -›</span>
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            {/* Handwritten script at bottom */}
            <div className="mt-8 pt-4 border-t border-[#E5DDCF]/60 flex items-center justify-between">
              <div className="font-handwriting text-base sm:text-lg text-[#55605A] font-bold leading-tight -rotate-2 select-none">
                Disconnected.<br />Harder to create impact.
              </div>
              <svg className="w-12 h-6 text-[#8F867A] -rotate-12 opacity-70" viewBox="0 0 60 30" fill="none">
                <path d="M10 25C25 25 40 15 50 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="3 3" />
                <path d="M42 5L50 5L48 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* ---------------- 2. CENTER COMPARISON INDICATOR ---------------- */}
          <div className="flex lg:flex-col items-center justify-center py-2 lg:py-0 px-4 flex-shrink-0 self-center">
            {/* Orange Circle Arrow Button */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#F4512A] text-white flex items-center justify-center shadow-sm">
              <ArrowRight className="w-5 h-5 stroke-[3]" />
            </div>
          </div>

          {/* ---------------- 3. RIGHT PANEL: WITH EKHUM ---------------- */}
          <div className="bg-[#0a0a0a] border border-gray-800 rounded-3xl p-5 sm:p-6 lg:p-7 relative shadow-lg flex flex-col justify-between h-full min-h-[340px] overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-1/4 w-72 h-20 bg-[#F4512A]/12 blur-2xl pointer-events-none rounded-full"></div>

            <div className="relative z-10">
              {/* Panel Header */}
              <div className="mb-6 flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-0.5 flex items-center gap-2">
                    <span>With EKhum</span>
                  </h3>
                  <p className="text-xs text-gray-400 font-normal">
                    One connected platform. Complete ownership. Real-time visibility.
                  </p>
                </div>
                <div className="text-[#F4512A] font-black text-xs sm:text-sm uppercase tracking-widest text-right shrink-0 mt-1">
                  One Platform
                </div>
              </div>

              {/* 6 Horizontal Nodes */}
              <div className="flex items-center justify-between gap-1 sm:gap-1.5 overflow-x-auto sm:overflow-visible pb-2 sm:pb-0 relative z-10">
                {ekhumNodes.map((node, idx) => {
                  const Icon = node.icon;
                  return (
                    <React.Fragment key={idx}>
                      <div className="flex flex-col items-center flex-shrink-0">
                        {/* White Rounded Card */}
                        <div className="w-[52px] sm:w-[60px] lg:w-[56px] xl:w-[64px] h-[58px] sm:h-[66px] lg:h-[64px] xl:h-[70px] bg-white rounded-2xl shadow-sm border border-white flex flex-col items-center justify-center p-1 text-center group hover:scale-105 transition-transform">
                          <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#F4512A] stroke-[2.2] mb-0.5" />
                          <span className="text-[9px] sm:text-[9.5px] font-bold text-[#102126] leading-tight text-center">
                            {node.label}
                          </span>
                        </div>
                      </div>

                      {/* Continuous connector arrow */}
                      {idx < ekhumNodes.length - 1 && (
                        <div className="flex items-center justify-center text-white/50 select-none px-0.5 flex-shrink-0">
                          <span className="text-xs font-bold text-white/60">→</span>
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>

              {/* Orange Bus Connector Lines dropping down into central EKhum Card */}
              <div className="relative w-full h-8 sm:h-9 my-1 pointer-events-none hidden sm:block">
                <svg className="w-full h-full text-[#F4512A]" viewBox="0 0 400 36" fill="none" preserveAspectRatio="none">
                  {/* Vertical drop lines from nodes */}
                  <line x1="33" y1="0" x2="33" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="100" y1="0" x2="100" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="166" y1="0" x2="166" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="233" y1="0" x2="233" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="300" y1="0" x2="300" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="366" y1="0" x2="366" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  {/* Horizontal Bus Bar */}
                  <path d="M33 18 H 366" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  {/* Central Drop Line into EKhum card */}
                  <line x1="200" y1="18" x2="200" y2="36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>

              {/* Elevated White EKhum Logo Card */}
              <div className="flex items-center justify-center mt-2 sm:mt-0">
                <div className="bg-white rounded-2xl px-5 sm:px-6 py-2 shadow-md border border-white flex items-center justify-center">
                  <Logo variant="dark" showTagline={true} />
                </div>
              </div>
            </div>

            {/* Handwritten annotation at bottom-right */}
            <div className="mt-4 pt-2 flex items-center justify-end relative z-10">
              <div className="flex items-center gap-2 select-none pointer-events-none -rotate-2">
                <svg className="w-6 h-6 text-gray-500" viewBox="0 0 30 30" fill="none">
                  <path d="M5 20C12 15 18 10 25 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M17 5L25 5L25 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-handwriting text-sm sm:text-base text-gray-300 font-bold leading-tight">
                  Connected.<br />Efficient.<br />Greater Impact.
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* ================= 4 LIGHTWEIGHT INLINE FEATURE HIGHLIGHTS ================= */}
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-[#E5DCD0]">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3 relative">
                {/* Circular Orange Outline Icon */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#F4512A]/40 bg-[#F4512A]/10 flex items-center justify-center text-[#F4512A] flex-shrink-0 shadow-2xs">
                  <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2]" />
                </div>

                <span className="text-xs sm:text-[13px] font-bold text-[#102126] leading-snug whitespace-pre-line">
                  {item.title}
                </span>

                {/* Vertical Divider between items on desktop */}
                {idx < highlights.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-8 bg-[#E5DCD0]"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* ================= SINGLE CENTERED ORANGE CTA ================= */}
        <div className="flex justify-center mt-10 sm:mt-12">
          <button
            onClick={onOpenDemoModal}
            className="inline-flex items-center gap-2 px-7 sm:px-8 py-3 bg-[#F4512A] hover:bg-[#D8411C] text-white text-xs sm:text-sm font-bold rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <span>See How EKhum Works</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </section>
  );
};
