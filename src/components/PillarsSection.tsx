import React from 'react';
import { 
  Megaphone, 
  CreditCard, 
  Users, 
  BarChart3, 
  CheckCircle2
} from 'lucide-react';
import { motion } from 'framer-motion';

export const PillarsSection: React.FC = () => {
  const pillars = [
    {
      title: 'Fundraising',
      tagline: 'Brand Sovereignty',
      image: '/pillar_fundraising.jpg',
      icon: Megaphone,
      bgClass: 'bg-[#0A1216]',
      highlights: [
        '100% white-labeled NGO domain',
        'Dynamic asks & 0-cost fees'
      ],
      metricLabel: 'Cost to NGO',
      metricVal: '₹0 Net Fees',
    },
    {
      title: 'Donations & 80G',
      tagline: 'Multi-Rail Smart Router',
      image: '/pillar_donations.jpg',
      icon: CreditCard,
      bgClass: 'bg-[#0A1216]',
      highlights: [
        'Multi-rail auto-failover',
        '80G WhatsApp receipts in < 3s'
      ],
      metricLabel: 'Uptime',
      metricVal: '99.8% Success',
    },
    {
      title: 'Donor Engagement',
      tagline: 'Automated Lifecycle Journeys',
      image: '/pillar_segmentation.jpg',
      icon: Users,
      bgClass: 'bg-[#0A1216]',
      highlights: [
        'Triggered thank-yous & updates',
        'Lapsed donor early detection'
      ],
      metricLabel: 'Retention',
      metricVal: '3.2x LTV',
    },
    {
      title: 'AI Reporting',
      tagline: 'Predictive & Compliance Ledger',
      image: '/pillar_analytics.jpg',
      icon: BarChart3,
      bgClass: 'bg-[#0A1216]',
      highlights: [
        'Predictive churn alerts',
        '1-click Form 10BD ITD export'
      ],
      metricLabel: '10BD Filing',
      metricVal: '1-Click Ready',
    },
  ];

  // Horizontal Module Card (Image on Right, No Border, Curved Left Edge)
  const ModuleCard = ({ pillar, index }: { pillar: any; index: number }) => {
    const Icon = pillar.icon;
    const imageOnLeft = index % 2 === 0;

    return (
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" as any, delay: index * 0.1 }}
        className={`flex ${imageOnLeft ? 'flex-row-reverse' : 'flex-row'} ${pillar.bgClass} rounded-2xl shadow-lg relative z-10 w-full h-[150px] sm:h-[170px] lg:h-[200px] overflow-hidden transition-transform hover:scale-[1.02] duration-300`}
      >
        {/* Content Area */}
        <div className="flex-1 flex flex-col p-4 lg:p-5 justify-between z-10">
          {/* Headline */}
          <div className="flex items-center gap-3 mb-2">
            <div className="w-6 h-6 lg:w-8 lg:h-8 bg-black/30 border border-[#34464B] rounded-md flex items-center justify-center shrink-0">
              <Icon className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#F4512A]" />
            </div>
            <div>
              <h3 className="text-[#FFFFFF] text-sm lg:text-[16px] font-black leading-tight">
                {pillar.title}
              </h3>
              <span className="text-[9px] lg:text-[10px] font-bold text-[#FF8A68] uppercase tracking-wider block mt-1">
                {pillar.tagline}
              </span>
            </div>
          </div>

          {/* Benefits */}
          <div className="flex flex-col gap-1.5 mb-3">
            {pillar.highlights.map((item: string, hIdx: number) => (
              <div key={hIdx} className="flex items-start gap-2 text-left">
                <CheckCircle2 className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-[#F4512A] flex-shrink-0 mt-[1px]" />
                <span className="text-[10px] lg:text-[12px] font-medium leading-snug text-[#AAB7BA] whitespace-nowrap overflow-hidden text-ellipsis">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Metric (Hidden on small screens) */}
          <div className="mt-auto pt-2 lg:pt-3 border-t border-[#34464B]/60 items-center justify-between hidden sm:flex">
            <span className="text-[9px] lg:text-[10px] font-bold text-[#AAB7BA] uppercase tracking-wider">
              {pillar.metricLabel}
            </span>
            <span className="text-[10px] lg:text-[11px] font-black text-[#FFFFFF] bg-black/40 px-2 py-1 rounded-md border border-[#34464B]/60">
              {pillar.metricVal}
            </span>
          </div>
        </div>

        {/* Image Area - Curved Edge based on side */}
        <div className={`w-[130px] sm:w-[160px] lg:w-[190px] h-full shrink-0 relative overflow-hidden ${imageOnLeft ? 'rounded-r-[2rem] lg:rounded-r-[3rem]' : 'rounded-l-[2rem] lg:rounded-l-[3rem]'}`}>
          <img 
            src={pillar.image} 
            alt={pillar.title} 
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    );
  };

  return (
    <section 
      id="pillars" 
      className="h-[calc(100vh-80px)] min-h-[600px] max-h-[1000px] w-full flex flex-col justify-center py-6 bg-[#030405] relative overflow-hidden"
    >
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col h-full gap-8 lg:gap-12">
        
        {/* HEADER */}
        <div className="pb-4 border-b border-[#34464B] flex flex-col sm:flex-row sm:items-end sm:justify-between shrink-0">
          <div className="flex-1">
            <span className="text-[10px] lg:text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#F4512A] block mb-1">
              OUR SOLUTION
            </span>
            <h2 className="text-xl lg:text-[2rem] font-black text-[#FFFFFF] tracking-[-0.035em] leading-[1.05] mb-2">
              Four Core Solution Pillars
            </h2>
            <p className="text-[#AAB7BA] text-xs sm:text-sm lg:text-[15px] font-medium max-w-3xl">
              Everything you need to fundraise, engage, comply and grow - in one platform
            </p>
          </div>
          <span className="text-[10px] lg:text-[11px] font-bold text-[#AAB7BA] uppercase tracking-wider hidden sm:block mb-1 shrink-0">
            Connected Non-Profit OS
          </span>
        </div>

        {/* HUB AND SPOKE LAYOUT (DESKTOP) */}
        <div className="hidden lg:grid grid-cols-[minmax(340px,440px)_auto_minmax(340px,440px)] gap-6 xl:gap-12 items-center justify-between w-full max-w-[1300px] mx-auto flex-1">
          
          {/* Left Modules */}
          <div className="flex flex-col gap-6 xl:gap-10 col-start-1">
            <ModuleCard pillar={pillars[0]} index={0} />
            <ModuleCard pillar={pillars[2]} index={2} />
          </div>

          {/* Central Hub - Desktop */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" as any }}
            className="col-start-2 place-self-center relative z-10 w-[200px] h-[200px] xl:w-[240px] xl:h-[240px] shrink-0 flex items-center justify-center"
          >
            {/* Revolving Rings */}
            <div className="absolute inset-0 rounded-full border-t-[3px] border-r-[3px] border-[#FF5500] animate-[spin_6s_linear_infinite] shadow-[0_0_15px_rgba(255,85,0,0.5)]"></div>
            <div className="absolute inset-2 rounded-full border-b-[3px] border-l-[3px] border-[#FF5500]/70 animate-[spin_8s_linear_infinite_reverse]"></div>
            <div className="absolute inset-4 rounded-full border-[1.5px] border-dashed border-[#FF5500]/40 animate-[spin_12s_linear_infinite]"></div>
            
            <div className="absolute inset-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow-[0_0_50px_rgba(255,85,0,0.15)] flex flex-col items-center justify-center text-center p-4 z-20">
              <span className="text-2xl xl:text-3xl font-black text-[#030405] tracking-tight mb-2">EKhum</span>
              <span className="text-[#34464B] text-[11px] xl:text-[13px] font-bold leading-snug">
                Digital<br/>infrastructure<br/>for charities
              </span>
            </div>
          </motion.div>

          {/* Right Modules */}
          <div className="flex flex-col gap-6 xl:gap-10 col-start-3">
            <ModuleCard pillar={pillars[1]} index={1} />
            <ModuleCard pillar={pillars[3]} index={3} />
          </div>

        </div>

        {/* VERTICAL LAYOUT (MOBILE / TABLET) */}
        <div className="flex flex-col lg:hidden relative items-center gap-6 py-2 flex-1 overflow-y-auto w-full">
          
          {/* Central Hub (Mobile) - Increased size and revolving */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" as any }}
            className="relative z-10 w-28 h-28 sm:w-36 sm:h-36 shrink-0 flex items-center justify-center mb-1 mt-2"
          >
            {/* Revolving Rings */}
            <div className="absolute inset-0 rounded-full border-t-[2.5px] border-r-[2.5px] border-[#FF5500] animate-[spin_6s_linear_infinite] shadow-[0_0_10px_rgba(255,85,0,0.4)]"></div>
            <div className="absolute inset-1.5 rounded-full border-b-[2px] border-l-[2px] border-[#FF5500]/70 animate-[spin_8s_linear_infinite_reverse]"></div>
            <div className="absolute inset-3 rounded-full border border-dashed border-[#FF5500]/40 animate-[spin_12s_linear_infinite]"></div>

            <div className="absolute inset-1 rounded-full bg-white/95 backdrop-blur-sm shadow-[0_0_30px_rgba(255,85,0,0.15)] flex flex-col items-center justify-center text-center p-2 sm:p-4 z-20">
              <span className="text-[1.1rem] sm:text-2xl font-black text-[#030405] tracking-tight mb-0.5">EKhum</span>
              <span className="text-[#34464B] text-[8px] sm:text-[11px] font-bold leading-snug hidden sm:block">
                Digital<br/>infrastructure
              </span>
            </div>
          </motion.div>

          {/* Modules List with full vertical line inside */}
          <div className="flex flex-col gap-5 w-full max-w-md relative z-10">
            {/* Vertical Connecting Line spanning full container */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1.5px] sm:w-0.5 bg-[#FF5500] z-[-1]"></div>
            
            {pillars.map((pillar, idx) => (
              <ModuleCard key={idx} pillar={pillar} index={idx} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
