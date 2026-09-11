import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CreditCard, 
  Zap, 
  FileSpreadsheet, 
  ShieldCheck, 
  ArrowRight, 
  ArrowUpRight, 
  X, 
  CheckCircle2, 
  Layers, 
  RefreshCw, 
  Lock, 
  Database,
  Cpu,
  Share2,
  Workflow,
  Sparkles
} from 'lucide-react';

export default function TechnologySection({ onOpenDemo }) {
  const [activeModalModule, setActiveModalModule] = useState(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveModalModule(null);
    };
    if (activeModalModule) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModalModule]);

  const modules = [
    {
      id: 'gateway',
      step: '01',
      title: 'Multi-Gateway Routing',
      subtitle: 'Dynamic UPI & Smart Failover',
      category: 'Payments Engine',
      image: '/assets/tech-smart-routing.jpg',
      icon: <CreditCard className="w-5 h-5 text-[#e95126]" />,
      modal: {
        headline: 'Intelligent Payment Routing & Recurring Mandates',
        overview: 'Eliminates single points of failure in donation processing by dynamically orchestrating transactions across multiple Reserve Bank of India-authorized payment gateways in real time.',
        metrics: [
          { label: 'Payment Success', value: '99.98%' },
          { label: 'Mandate Recovery', value: '84%' },
          { label: 'Gateway Redundancy', value: '4 Active' },
        ],
        capabilities: [
          'Dynamic multi-gateway cascading failover across Razorpay, PayU, CCAvenue, and Cashfree.',
          'Native UPI Autopay, e-NACH, and recurring debit mandate scheduling with automated retry sequences.',
          'Cross-border FCRA-compliant multi-currency processing with separate statutory settlement accounts.',
          'Zero-redirect embedded checkout with one-click PAN capture and instantaneous donor confirmation.',
        ],
        pipeline: [
          { step: '01', title: 'Intent Ingestion', desc: 'Donor selects single or recurring contribution.' },
          { step: '02', title: 'Health Ping', desc: 'Dynamic router checks gateway uptime and latency.' },
          { step: '03', title: 'Smart Route', desc: 'Routes via highest-converting channel with fallback.' },
          { step: '04', title: 'Settlement Ledger', desc: 'Funds settled directly to non-profit bank account.' },
        ],
      },
    },
    {
      id: 'tax10bd',
      step: '02',
      title: 'Instant 80G Receipts',
      subtitle: 'WhatsApp Delivery & Form 10BD',
      category: 'Statutory Compliance',
      image: '/assets/tech-instant-receipt.jpg',
      icon: <FileSpreadsheet className="w-5 h-5 text-[#dce4d3]" />,
      modal: {
        headline: 'Automated Tax Receipting & CBDT Filing Preparation',
        overview: 'Eliminates weeks of manual compliance prep by automatically generating sequentially numbered 80G receipts at settlement and compiling Form 10BD annual returns.',
        metrics: [
          { label: 'Prep Time Saved', value: '100%' },
          { label: 'Receipt Latency', value: '< 2 sec' },
          { label: '10BD Schema', value: 'CBDT v2' },
        ],
        capabilities: [
          'Automatic generation of digitally signed, sequentially numbered 80G PDF receipts upon webhook settlement.',
          'Multi-channel real-time dispatch directly to the donor via WhatsApp Cloud API and transactional Email.',
          'Automated validation and sanitization of donor PAN, Aadhaar, and identity documentation.',
          'One-click export of Income Tax Form 10BD structured CSV and JSON matching the exact CBDT portal schema.',
        ],
        pipeline: [
          { step: '01', title: 'Settlement Webhook', desc: 'Gateway confirms receipt of funds in non-profit account.' },
          { step: '02', title: 'Sequence Allocation', desc: 'Assigns immutable, audit-logged 80G series number.' },
          { step: '03', title: 'Multi-Channel Push', desc: 'Dispatches branded PDF via WhatsApp and Email instantly.' },
          { step: '04', title: 'Form 10BD Sync', desc: 'Appends structured record to annual CBDT filing ledger.' },
        ],
      },
    },
    {
      id: 'eventbus',
      step: '03',
      title: 'Real-Time Automation',
      subtitle: 'Donor Journeys & Milestones',
      category: 'Automation Architecture',
      image: '/assets/tech-automation-bus.jpg',
      icon: <Zap className="w-5 h-5 text-[#e95126]" />,
      modal: {
        headline: 'Event-Driven Non-Profit Lifecycle Automation',
        overview: 'A robust event-driven architecture that listens to real-time donation states and triggers automated multi-stakeholder workflows across donor communications, CRM platforms, and programme alerts.',
        metrics: [
          { label: 'Active Topics', value: '11 Events' },
          { label: 'Webhook Latency', value: '< 150ms' },
          { label: 'Integrations', value: 'REST & Webhooks' },
        ],
        capabilities: [
          'Event-driven triggers on donation settlement, mandate renewal, milestone achievement, and failed attempts.',
          'Automated donor stewardship: personalized anniversary messages, project impact dispatches, and milestone alerts.',
          'Seamless two-way integration with Salesforce, HubSpot, Zoho, Google Sheets, and custom non-profit ERPs.',
          'No-code workflow rule builder for programme managers to configure triggers without engineering assistance.',
        ],
        pipeline: [
          { step: '01', title: 'Event Emission', desc: 'Core platform fires an authenticated payload event.' },
          { step: '02', title: 'Rule Evaluation', desc: 'Rules engine evaluates donor segmentation and criteria.' },
          { step: '03', title: 'Action Dispatch', desc: 'Triggers WhatsApp flow, CRM record update, or alert.' },
          { step: '04', title: 'Delivery Telemetry', desc: 'Monitors delivery, opens, and donor engagement rates.' },
        ],
      },
    },
    {
      id: 'audit',
      step: '04',
      title: 'Bank Reconciliation',
      subtitle: 'Nightly 3-Way Rupee Matching',
      category: 'Institutional Governance',
      image: '/assets/tech-audit-reconciliation.jpg',
      icon: <ShieldCheck className="w-5 h-5 text-[#dce4d3]" />,
      modal: {
        headline: 'Bank-Grade Reconciliation & Cryptographic Audit Trails',
        overview: 'Provides statutory transparency and foolproof governance by reconciling every single rupee across payment gateways, bank statements, and programme ledgers every 24 hours.',
        metrics: [
          { label: 'Audit Readiness', value: '100%' },
          { label: 'Reconciliation', value: 'Nightly / 24h' },
          { label: 'Tamper Protection', value: 'Cryptographic' },
        ],
        capabilities: [
          'Automated 3-way matching between gateway capture logs, settlement reports, and core bank account statements.',
          'Attributed, time-stamped immutable logs for every receipt reissue, donor detail correction, or refund.',
          'Strict FCRA regulatory segregation keeping domestic and foreign contributions in legally isolated tracks.',
          'Granular role-based permissions designed specifically for finance controllers, auditors, and leadership.',
        ],
        pipeline: [
          { step: '01', title: 'Statement Fetch', desc: 'Pulls nightly settlement files from bank & gateway feeds.' },
          { step: '02', title: '3-Way Match', desc: 'Correlates UTR numbers, amounts, and transaction IDs.' },
          { step: '03', title: 'Variance Alert', desc: 'Flags any discrepancy or unmapped credit for review.' },
          { step: '04', title: 'Auditor Portal', desc: 'Provides read-only export portal for statutory auditors.' },
        ],
      },
    },
  ];

  return (
    <section id="technology" className="min-h-screen py-12 sm:py-18 lg:py-24 bg-[#222720] text-[#f5f3ed] relative overflow-hidden select-none flex flex-col justify-center">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-[#e95126]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-12 space-y-8 sm:space-y-12 lg:space-y-14 relative z-10 w-full">
        
        {/* Sleek Minimal Single-Line Header with Clickable Heading & Hover Arrow */}
        <div className="border-b border-[#3b4337] pb-4 sm:pb-6">
          <div className="space-y-1.5 sm:space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#dce4d3]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e95126]" />
              <span>03 / The Technology</span>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => setActiveModalModule(modules[0])}
                className="group flex items-center gap-2.5 sm:gap-3 text-left cursor-pointer focus:outline-none"
                title="Click to explore full Technology Architecture Blueprint"
              >
                <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white group-hover:text-[#e95126] transition-colors leading-tight">
                  Good deserves <span className="text-[#dce4d3] group-hover:text-white">efficiency.</span>
                </h2>
                <span className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#e95126] text-white flex items-center justify-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-md shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Tall, Immersive Visual Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-7">
          {modules.map((mod) => (
            <div
              key={mod.id}
              onClick={() => setActiveModalModule(mod)}
              className="group bg-[#1a1f18] border border-[#343d31] hover:border-[#e95126]/60 rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 active:scale-98 hover:-translate-y-2 hover:shadow-2xl cursor-pointer flex flex-col justify-between touch-manipulation"
            >
              {/* Grand Tall Photographic Window */}
              <div className="relative h-48 xs:h-56 sm:h-64 lg:h-72 xl:h-80 w-full overflow-hidden bg-[#141913]">
                <img
                  src={mod.image}
                  alt={mod.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                
                {/* Subtle Top-Left Step Index */}
                <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 bg-[#1a1f18]/85 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-[10px] xs:text-[11px] font-mono font-bold text-[#dce4d3]">
                  {mod.step}
                </div>

                {/* Subtle Hover Action Icon */}
                <div className="absolute top-3 right-3 sm:top-3.5 sm:right-3.5 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 group-hover:text-white group-hover:bg-[#e95126] transition-all">
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Minimal Clean Details Footer */}
              <div className="p-4 sm:p-5 lg:p-6 space-y-1">
                <h3 className="text-sm xs:text-base font-bold text-white group-hover:text-[#dce4d3] transition-colors leading-tight">
                  {mod.title}
                </h3>
                <p className="text-[11px] xs:text-xs text-[#a9b0a1] font-normal">
                  {mod.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detailed Technical Architecture Modal Page */}
      <AnimatePresence>
        {activeModalModule && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 xs:p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalModule(null)}
              className="fixed inset-0 bg-[#121611]/85 backdrop-blur-md"
            />

            {/* Modal Dialog Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-4xl max-h-[90dvh] overflow-y-auto bg-[#1a1f18] text-[#f5f3ed] rounded-2xl sm:rounded-3xl shadow-2xl border border-[#3b4337] p-5 sm:p-8 md:p-10 z-10 space-y-6 sm:space-y-8 safe-p-bottom"
            >
              {/* Modal Top Bar */}
              <div className="flex items-start justify-between gap-4 border-b border-[#2e372b] pb-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#e95126]">
                    {activeModalModule.icon}
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#dce4d3]">
                      {activeModalModule.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {activeModalModule.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setActiveModalModule(null)}
                  className="p-2 rounded-full text-[#a9b0a1] hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Module Navigation Tabs Inside Modal */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-[#2e372b]">
                {modules.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setActiveModalModule(m)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                      activeModalModule.id === m.id
                        ? 'bg-[#dce4d3] text-[#222720]'
                        : 'text-[#a9b0a1] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {m.title}
                  </button>
                ))}
              </div>

              {/* Main Modal Content */}
              <div className="space-y-6">
                
                {/* Headline & Overview */}
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-white">
                    {activeModalModule.modal.headline}
                  </h4>
                  <p className="text-sm text-[#bec3b7] leading-relaxed">
                    {activeModalModule.modal.overview}
                  </p>
                </div>

                {/* Performance Metrics Cards */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  {activeModalModule.modal.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="bg-white/5 border border-[#343d31] rounded-xl p-3.5 sm:p-4 text-center space-y-1"
                    >
                      <div className="text-xl sm:text-2xl font-bold text-[#e95126]">
                        {metric.value}
                      </div>
                      <div className="text-[11px] font-medium text-[#a9b0a1]">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Key Technical Capabilities */}
                <div className="space-y-3">
                  <h5 className="text-xs font-bold uppercase tracking-widest text-[#dce4d3]">
                    Key Capabilities & Specifications
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeModalModule.modal.capabilities.map((cap, i) => (
                      <div
                        key={i}
                        className="bg-[#222920] border border-[#343d31] rounded-xl p-4 flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#e95126] shrink-0 mt-0.5" />
                        <p className="text-xs text-[#d8ded0] leading-relaxed">
                          {cap}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Live Data Pipeline Flow */}
                <div className="space-y-3">
                  <h5 className="text-xs font-bold uppercase tracking-widest text-[#dce4d3]">
                    Operational Execution Pipeline
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5">
                    {activeModalModule.modal.pipeline.map((step, i) => (
                      <div
                        key={i}
                        className="bg-white/5 border border-[#343d31] rounded-xl p-3.5 space-y-1.5"
                      >
                        <div className="text-xs font-mono font-bold text-[#e95126]">
                          {step.step}
                        </div>
                        <div className="text-xs font-bold text-white">
                          {step.title}
                        </div>
                        <div className="text-[11px] text-[#a9b0a1] leading-relaxed">
                          {step.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Modal Footer CTAs */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#2e372b]">
                <div className="text-xs text-[#a9b0a1]">
                  Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono">Esc</kbd> or click outside to dismiss.
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActiveModalModule(null)}
                    className="px-5 py-2 rounded-full border border-[#3b4337] text-xs font-semibold text-[#dce4d3] hover:bg-white/5 transition-colors"
                  >
                    Close
                  </button>
                  {onOpenDemo && (
                    <button
                      onClick={() => {
                        setActiveModalModule(null);
                        onOpenDemo();
                      }}
                      className="px-6 py-2 rounded-full bg-[#e95126] text-white hover:bg-[#d4431a] text-xs font-bold transition-all shadow-md flex items-center gap-2"
                    >
                      <span>Book a live demo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}



