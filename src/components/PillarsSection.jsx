import React from 'react';

export default function PillarsSection({ onOpenDemo }) {
  return (
    <>
      {/*
<section
            id="pillars"
            className="min-h-[100dvh] w-full flex flex-col justify-center py-12 lg:py-16 bg-[#030405] relative overflow-hidden"
          >
            <div
              className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col h-full gap-8 lg:gap-12"
            >
              <div
                className="pb-4 border-b border-[#34464B] flex flex-col sm:flex-row sm:items-end sm:justify-between shrink-0"
              >
                <div className="flex-1">
                  <span
                    className="text-[10px] lg:text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#F4512A] block mb-1"
                    >OUR SOLUTION</span
                  >
                  <h2
                    className="text-xl lg:text-[2rem] font-black text-[#FFFFFF] tracking-[-0.035em] leading-[1.05] mb-2"
                  >
                    Four Core Solution Pillars
                  </h2>
                  <p
                    className="text-[#AAB7BA] text-xs sm:text-sm lg:text-[15px] font-medium max-w-3xl"
                  >
                    Everything you need to fundraise, engage, comply and grow -
                    in one platform
                  </p>
                </div>
                <span
                  className="text-[10px] lg:text-[11px] font-bold text-[#AAB7BA] uppercase tracking-wider hidden sm:block mb-1 shrink-0"
                  >Connected Non-Profit OS</span
                >
              </div>
              <div
                className="hidden lg:grid grid-cols-[minmax(340px,440px)_auto_minmax(340px,440px)] gap-6 xl:gap-12 items-center justify-between w-full max-w-[1300px] mx-auto flex-1"
              >
                <div className="flex flex-col gap-6 xl:gap-10 col-start-1">
                  <div
                    className="flex flex-row-reverse bg-[#0A1216] rounded-2xl shadow-lg relative z-10 w-full h-[150px] sm:h-[170px] lg:h-[200px] overflow-hidden transition-transform hover:scale-[1.02] duration-300"
                  >
                    <div
                      className="flex-1 flex flex-col p-4 lg:p-5 justify-between z-10"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className="w-6 h-6 lg:w-8 lg:h-8 bg-black/30 border border-[#34464B] rounded-md flex items-center justify-center shrink-0"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-megaphone w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#F4512A]"
                            aria-hidden="true"
                          >
                            <path
                              d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"
                            ></path>
                            <path
                              d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"
                            ></path>
                            <path d="M8 6v8"></path>
                          </svg>
                        </div>
                        <div>
                          <h3
                            className="text-[#FFFFFF] text-sm lg:text-[16px] font-black leading-tight"
                          >
                            Fundraising
                          </h3>
                          <span
                            className="text-[9px] lg:text-[10px] font-bold text-[#FF8A68] uppercase tracking-wider block mt-1"
                            >Brand Sovereignty</span
                          >
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5 mb-3">
                        <div className="flex items-start gap-2 text-left">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-circle-check lucide-check-circle-2 w-3 h-3 lg:w-3.5 lg:h-3.5 text-[#F4512A] flex-shrink-0 mt-[1px]"
                            aria-hidden="true"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m16 9-5.5 5.5L8 12"></path></svg
                          ><span
                            className="text-[10px] lg:text-[12px] font-medium leading-snug text-[#AAB7BA] whitespace-nowrap overflow-hidden text-ellipsis"
                            >100% white-labeled NGO domain</span
                          >
                        </div>
                        <div className="flex items-start gap-2 text-left">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-circle-check lucide-check-circle-2 w-3 h-3 lg:w-3.5 lg:h-3.5 text-[#F4512A] flex-shrink-0 mt-[1px]"
                            aria-hidden="true"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m16 9-5.5 5.5L8 12"></path></svg
                          ><span
                            className="text-[10px] lg:text-[12px] font-medium leading-snug text-[#AAB7BA] whitespace-nowrap overflow-hidden text-ellipsis"
                            >Dynamic asks &amp; 0-cost fees</span
                          >
                        </div>
                      </div>
                      <div
                        className="mt-auto pt-2 lg:pt-3 border-t border-[#34464B]/60 items-center justify-between hidden sm:flex"
                      >
                        <span
                          className="text-[9px] lg:text-[10px] font-bold text-[#AAB7BA] uppercase tracking-wider"
                          >Cost to NGO</span
                        ><span
                          className="text-[10px] lg:text-[11px] font-black text-[#FFFFFF] bg-black/40 px-2 py-1 rounded-md border border-[#34464B]/60"
                          >₹0 Net Fees</span
                        >
                      </div>
                    </div>
                    <div
                      className="w-[130px] sm:w-[160px] lg:w-[190px] h-full shrink-0 relative overflow-hidden rounded-r-[2rem] lg:rounded-r-[3rem]"
                    >
                      <img
                        src="./pillar_fundraising.jpg"
                        alt="Fundraising"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div
                    className="flex flex-row-reverse bg-[#0A1216] rounded-2xl shadow-lg relative z-10 w-full h-[150px] sm:h-[170px] lg:h-[200px] overflow-hidden transition-transform hover:scale-[1.02] duration-300"
                  >
                    <div
                      className="flex-1 flex flex-col p-4 lg:p-5 justify-between z-10"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className="w-6 h-6 lg:w-8 lg:h-8 bg-black/30 border border-[#34464B] rounded-md flex items-center justify-center shrink-0"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-users w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#F4512A]"
                            aria-hidden="true"
                          >
                            <path
                              d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                            ></path>
                            <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                          </svg>
                        </div>
                        <div>
                          <h3
                            className="text-[#FFFFFF] text-sm lg:text-[16px] font-black leading-tight"
                          >
                            Donor Engagement
                          </h3>
                          <span
                            className="text-[9px] lg:text-[10px] font-bold text-[#FF8A68] uppercase tracking-wider block mt-1"
                            >Automated Lifecycle Journeys</span
                          >
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5 mb-3">
                        <div className="flex items-start gap-2 text-left">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-circle-check lucide-check-circle-2 w-3 h-3 lg:w-3.5 lg:h-3.5 text-[#F4512A] flex-shrink-0 mt-[1px]"
                            aria-hidden="true"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m16 9-5.5 5.5L8 12"></path></svg
                          ><span
                            className="text-[10px] lg:text-[12px] font-medium leading-snug text-[#AAB7BA] whitespace-nowrap overflow-hidden text-ellipsis"
                            >Triggered thank-yous &amp; updates</span
                          >
                        </div>
                        <div className="flex items-start gap-2 text-left">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-circle-check lucide-check-circle-2 w-3 h-3 lg:w-3.5 lg:h-3.5 text-[#F4512A] flex-shrink-0 mt-[1px]"
                            aria-hidden="true"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m16 9-5.5 5.5L8 12"></path></svg
                          ><span
                            className="text-[10px] lg:text-[12px] font-medium leading-snug text-[#AAB7BA] whitespace-nowrap overflow-hidden text-ellipsis"
                            >Lapsed donor early detection</span
                          >
                        </div>
                      </div>
                      <div
                        className="mt-auto pt-2 lg:pt-3 border-t border-[#34464B]/60 items-center justify-between hidden sm:flex"
                      >
                        <span
                          className="text-[9px] lg:text-[10px] font-bold text-[#AAB7BA] uppercase tracking-wider"
                          >Retention</span
                        ><span
                          className="text-[10px] lg:text-[11px] font-black text-[#FFFFFF] bg-black/40 px-2 py-1 rounded-md border border-[#34464B]/60"
                          >3.2x LTV</span
                        >
                      </div>
                    </div>
                    <div
                      className="w-[130px] sm:w-[160px] lg:w-[190px] h-full shrink-0 relative overflow-hidden rounded-r-[2rem] lg:rounded-r-[3rem]"
                    >
                      <img
                        src="./pillar_segmentation.jpg"
                        alt="Donor Engagement"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="col-start-2 place-self-center relative z-10 w-[200px] h-[200px] xl:w-[240px] xl:h-[240px] shrink-0 flex items-center justify-center"
                >
                  <div
                    className="absolute inset-0 rounded-full border-t-[3px] border-r-[3px] border-[#FF5500] animate-[spin_6s_linear_infinite] shadow-[0_0_15px_rgba(255,85,0,0.5)]"
                  ></div>
                  <div
                    className="absolute inset-2 rounded-full border-b-[3px] border-l-[3px] border-[#FF5500]/70 animate-[spin_8s_linear_infinite_reverse]"
                  ></div>
                  <div
                    className="absolute inset-4 rounded-full border-[1.5px] border-dashed border-[#FF5500]/40 animate-[spin_12s_linear_infinite]"
                  ></div>
                  <div
                    className="absolute inset-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow-[0_0_50px_rgba(255,85,0,0.15)] flex flex-col items-center justify-center text-center p-4 z-20"
                  >
                    <span
                      className="text-2xl xl:text-3xl font-black text-[#030405] tracking-tight mb-2"
                      >EKhum</span
                    ><span
                      className="text-[#34464B] text-[11px] xl:text-[13px] font-bold leading-snug"
                      >Digital<br />infrastructure<br />for charities</span
                    >
                  </div>
                </div>
                <div className="flex flex-col gap-6 xl:gap-10 col-start-3">
                  <div
                    className="flex flex-row bg-[#0A1216] rounded-2xl shadow-lg relative z-10 w-full h-[150px] sm:h-[170px] lg:h-[200px] overflow-hidden transition-transform hover:scale-[1.02] duration-300"
                  >
                    <div
                      className="flex-1 flex flex-col p-4 lg:p-5 justify-between z-10"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className="w-6 h-6 lg:w-8 lg:h-8 bg-black/30 border border-[#34464B] rounded-md flex items-center justify-center shrink-0"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-credit-card w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#F4512A]"
                            aria-hidden="true"
                          >
                            <rect
                              width="20"
                              height="14"
                              x="2"
                              y="5"
                              rx="2"
                            ></rect>
                            <line x1="2" x2="22" y1="10" y2="10"></line>
                            <path d="M6 14h2"></path>
                          </svg>
                        </div>
                        <div>
                          <h3
                            className="text-[#FFFFFF] text-sm lg:text-[16px] font-black leading-tight"
                          >
                            Donations &amp; 80G
                          </h3>
                          <span
                            className="text-[9px] lg:text-[10px] font-bold text-[#FF8A68] uppercase tracking-wider block mt-1"
                            >Multi-Rail Smart Router</span
                          >
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5 mb-3">
                        <div className="flex items-start gap-2 text-left">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-circle-check lucide-check-circle-2 w-3 h-3 lg:w-3.5 lg:h-3.5 text-[#F4512A] flex-shrink-0 mt-[1px]"
                            aria-hidden="true"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m16 9-5.5 5.5L8 12"></path></svg
                          ><span
                            className="text-[10px] lg:text-[12px] font-medium leading-snug text-[#AAB7BA] whitespace-nowrap overflow-hidden text-ellipsis"
                            >Multi-rail auto-failover</span
                          >
                        </div>
                        <div className="flex items-start gap-2 text-left">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-circle-check lucide-check-circle-2 w-3 h-3 lg:w-3.5 lg:h-3.5 text-[#F4512A] flex-shrink-0 mt-[1px]"
                            aria-hidden="true"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m16 9-5.5 5.5L8 12"></path></svg
                          ><span
                            className="text-[10px] lg:text-[12px] font-medium leading-snug text-[#AAB7BA] whitespace-nowrap overflow-hidden text-ellipsis"
                            >80G WhatsApp receipts in &lt; 3s</span
                          >
                        </div>
                      </div>
                      <div
                        className="mt-auto pt-2 lg:pt-3 border-t border-[#34464B]/60 items-center justify-between hidden sm:flex"
                      >
                        <span
                          className="text-[9px] lg:text-[10px] font-bold text-[#AAB7BA] uppercase tracking-wider"
                          >Uptime</span
                        ><span
                          className="text-[10px] lg:text-[11px] font-black text-[#FFFFFF] bg-black/40 px-2 py-1 rounded-md border border-[#34464B]/60"
                          >99.8% Success</span
                        >
                      </div>
                    </div>
                    <div
                      className="w-[130px] sm:w-[160px] lg:w-[190px] h-full shrink-0 relative overflow-hidden rounded-l-[2rem] lg:rounded-l-[3rem]"
                    >
                      <img
                        src="./pillar_donations.jpg"
                        alt="Donations &amp; 80G"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div
                    className="flex flex-row bg-[#0A1216] rounded-2xl shadow-lg relative z-10 w-full h-[150px] sm:h-[170px] lg:h-[200px] overflow-hidden transition-transform hover:scale-[1.02] duration-300"
                  >
                    <div
                      className="flex-1 flex flex-col p-4 lg:p-5 justify-between z-10"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className="w-6 h-6 lg:w-8 lg:h-8 bg-black/30 border border-[#34464B] rounded-md flex items-center justify-center shrink-0"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-chart-column lucide-bar-chart-3 w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#F4512A]"
                            aria-hidden="true"
                          >
                            <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                            <path d="M18 17V9"></path>
                            <path d="M13 17V5"></path>
                            <path d="M8 17v-3"></path>
                          </svg>
                        </div>
                        <div>
                          <h3
                            className="text-[#FFFFFF] text-sm lg:text-[16px] font-black leading-tight"
                          >
                            AI Reporting
                          </h3>
                          <span
                            className="text-[9px] lg:text-[10px] font-bold text-[#FF8A68] uppercase tracking-wider block mt-1"
                            >Predictive &amp; Compliance Ledger</span
                          >
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5 mb-3">
                        <div className="flex items-start gap-2 text-left">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-circle-check lucide-check-circle-2 w-3 h-3 lg:w-3.5 lg:h-3.5 text-[#F4512A] flex-shrink-0 mt-[1px]"
                            aria-hidden="true"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m16 9-5.5 5.5L8 12"></path></svg
                          ><span
                            className="text-[10px] lg:text-[12px] font-medium leading-snug text-[#AAB7BA] whitespace-nowrap overflow-hidden text-ellipsis"
                            >Predictive churn alerts</span
                          >
                        </div>
                        <div className="flex items-start gap-2 text-left">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-circle-check lucide-check-circle-2 w-3 h-3 lg:w-3.5 lg:h-3.5 text-[#F4512A] flex-shrink-0 mt-[1px]"
                            aria-hidden="true"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m16 9-5.5 5.5L8 12"></path></svg
                          ><span
                            className="text-[10px] lg:text-[12px] font-medium leading-snug text-[#AAB7BA] whitespace-nowrap overflow-hidden text-ellipsis"
                            >1-click Form 10BD ITD export</span
                          >
                        </div>
                      </div>
                      <div
                        className="mt-auto pt-2 lg:pt-3 border-t border-[#34464B]/60 items-center justify-between hidden sm:flex"
                      >
                        <span
                          className="text-[9px] lg:text-[10px] font-bold text-[#AAB7BA] uppercase tracking-wider"
                          >10BD Filing</span
                        ><span
                          className="text-[10px] lg:text-[11px] font-black text-[#FFFFFF] bg-black/40 px-2 py-1 rounded-md border border-[#34464B]/60"
                          >1-Click Ready</span
                        >
                      </div>
                    </div>
                    <div
                      className="w-[130px] sm:w-[160px] lg:w-[190px] h-full shrink-0 relative overflow-hidden rounded-l-[2rem] lg:rounded-l-[3rem]"
                    >
                      <img
                        src="./pillar_analytics.jpg"
                        alt="AI Reporting"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col lg:hidden relative items-center gap-6 py-2 flex-1 overflow-y-auto w-full"
              >
                <div
                  className="relative z-10 w-28 h-28 sm:w-36 sm:h-36 shrink-0 flex items-center justify-center mb-1 mt-2"
                >
                  <div
                    className="absolute inset-0 rounded-full border-t-[2.5px] border-r-[2.5px] border-[#FF5500] animate-[spin_6s_linear_infinite] shadow-[0_0_10px_rgba(255,85,0,0.4)]"
                  ></div>
                  <div
                    className="absolute inset-1.5 rounded-full border-b-[2px] border-l-[2px] border-[#FF5500]/70 animate-[spin_8s_linear_infinite_reverse]"
                  ></div>
                  <div
                    className="absolute inset-3 rounded-full border border-dashed border-[#FF5500]/40 animate-[spin_12s_linear_infinite]"
                  ></div>
                  <div
                    className="absolute inset-1 rounded-full bg-white/95 backdrop-blur-sm shadow-[0_0_30px_rgba(255,85,0,0.15)] flex flex-col items-center justify-center text-center p-2 sm:p-4 z-20"
                  >
                    <span
                      className="text-[1.1rem] sm:text-2xl font-black text-[#030405] tracking-tight mb-0.5"
                      >EKhum</span
                    ><span
                      className="text-[#34464B] text-[8px] sm:text-[11px] font-bold leading-snug hidden sm:block"
                      >Digital<br />infrastructure</span
                    >
                  </div>
                </div>
                <div className="flex flex-col gap-5 w-full max-w-md relative z-10">
                  <div
                    className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1.5px] sm:w-0.5 bg-[#FF5500] z-[-1]"
                  ></div>
                  <div
                    className="flex flex-row-reverse bg-[#0A1216] rounded-2xl shadow-lg relative z-10 w-full h-[150px] sm:h-[170px] lg:h-[200px] overflow-hidden transition-transform hover:scale-[1.02] duration-300"
                  >
                    <div
                      className="flex-1 flex flex-col p-4 lg:p-5 justify-between z-10"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className="w-6 h-6 lg:w-8 lg:h-8 bg-black/30 border border-[#34464B] rounded-md flex items-center justify-center shrink-0"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-megaphone w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#F4512A]"
                            aria-hidden="true"
                          >
                            <path
                              d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"
                            ></path>
                            <path
                              d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"
                            ></path>
                            <path d="M8 6v8"></path>
                          </svg>
                        </div>
                        <div>
                          <h3
                            className="text-[#FFFFFF] text-sm lg:text-[16px] font-black leading-tight"
                          >
                            Fundraising
                          </h3>
                          <span
                            className="text-[9px] lg:text-[10px] font-bold text-[#FF8A68] uppercase tracking-wider block mt-1"
                            >Brand Sovereignty</span
                          >
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5 mb-3">
                        <div className="flex items-start gap-2 text-left">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-circle-check lucide-check-circle-2 w-3 h-3 lg:w-3.5 lg:h-3.5 text-[#F4512A] flex-shrink-0 mt-[1px]"
                            aria-hidden="true"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m16 9-5.5 5.5L8 12"></path></svg
                          ><span
                            className="text-[10px] lg:text-[12px] font-medium leading-snug text-[#AAB7BA] whitespace-nowrap overflow-hidden text-ellipsis"
                            >100% white-labeled NGO domain</span
                          >
                        </div>
                        <div className="flex items-start gap-2 text-left">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-circle-check lucide-check-circle-2 w-3 h-3 lg:w-3.5 lg:h-3.5 text-[#F4512A] flex-shrink-0 mt-[1px]"
                            aria-hidden="true"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m16 9-5.5 5.5L8 12"></path></svg
                          ><span
                            className="text-[10px] lg:text-[12px] font-medium leading-snug text-[#AAB7BA] whitespace-nowrap overflow-hidden text-ellipsis"
                            >Dynamic asks &amp; 0-cost fees</span
                          >
                        </div>
                      </div>
                      <div
                        className="mt-auto pt-2 lg:pt-3 border-t border-[#34464B]/60 items-center justify-between hidden sm:flex"
                      >
                        <span
                          className="text-[9px] lg:text-[10px] font-bold text-[#AAB7BA] uppercase tracking-wider"
                          >Cost to NGO</span
                        ><span
                          className="text-[10px] lg:text-[11px] font-black text-[#FFFFFF] bg-black/40 px-2 py-1 rounded-md border border-[#34464B]/60"
                          >₹0 Net Fees</span
                        >
                      </div>
                    </div>
                    <div
                      className="w-[130px] sm:w-[160px] lg:w-[190px] h-full shrink-0 relative overflow-hidden rounded-r-[2rem] lg:rounded-r-[3rem]"
                    >
                      <img
                        src="./pillar_fundraising.jpg"
                        alt="Fundraising"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div
                    className="flex flex-row bg-[#0A1216] rounded-2xl shadow-lg relative z-10 w-full h-[150px] sm:h-[170px] lg:h-[200px] overflow-hidden transition-transform hover:scale-[1.02] duration-300"
                  >
                    <div
                      className="flex-1 flex flex-col p-4 lg:p-5 justify-between z-10"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className="w-6 h-6 lg:w-8 lg:h-8 bg-black/30 border border-[#34464B] rounded-md flex items-center justify-center shrink-0"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-credit-card w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#F4512A]"
                            aria-hidden="true"
                          >
                            <rect
                              width="20"
                              height="14"
                              x="2"
                              y="5"
                              rx="2"
                            ></rect>
                            <line x1="2" x2="22" y1="10" y2="10"></line>
                            <path d="M6 14h2"></path>
                          </svg>
                        </div>
                        <div>
                          <h3
                            className="text-[#FFFFFF] text-sm lg:text-[16px] font-black leading-tight"
                          >
                            Donations &amp; 80G
                          </h3>
                          <span
                            className="text-[9px] lg:text-[10px] font-bold text-[#FF8A68] uppercase tracking-wider block mt-1"
                            >Multi-Rail Smart Router</span
                          >
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5 mb-3">
                        <div className="flex items-start gap-2 text-left">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-circle-check lucide-check-circle-2 w-3 h-3 lg:w-3.5 lg:h-3.5 text-[#F4512A] flex-shrink-0 mt-[1px]"
                            aria-hidden="true"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m16 9-5.5 5.5L8 12"></path></svg
                          ><span
                            className="text-[10px] lg:text-[12px] font-medium leading-snug text-[#AAB7BA] whitespace-nowrap overflow-hidden text-ellipsis"
                            >Multi-rail auto-failover</span
                          >
                        </div>
                        <div className="flex items-start gap-2 text-left">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-circle-check lucide-check-circle-2 w-3 h-3 lg:w-3.5 lg:h-3.5 text-[#F4512A] flex-shrink-0 mt-[1px]"
                            aria-hidden="true"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m16 9-5.5 5.5L8 12"></path></svg
                          ><span
                            className="text-[10px] lg:text-[12px] font-medium leading-snug text-[#AAB7BA] whitespace-nowrap overflow-hidden text-ellipsis"
                            >80G WhatsApp receipts in &lt; 3s</span
                          >
                        </div>
                      </div>
                      <div
                        className="mt-auto pt-2 lg:pt-3 border-t border-[#34464B]/60 items-center justify-between hidden sm:flex"
                      >
                        <span
                          className="text-[9px] lg:text-[10px] font-bold text-[#AAB7BA] uppercase tracking-wider"
                          >Uptime</span
                        ><span
                          className="text-[10px] lg:text-[11px] font-black text-[#FFFFFF] bg-black/40 px-2 py-1 rounded-md border border-[#34464B]/60"
                          >99.8% Success</span
                        >
                      </div>
                    </div>
                    <div
                      className="w-[130px] sm:w-[160px] lg:w-[190px] h-full shrink-0 relative overflow-hidden rounded-l-[2rem] lg:rounded-l-[3rem]"
                    >
                      <img
                        src="./pillar_donations.jpg"
                        alt="Donations &amp; 80G"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div
                    className="flex flex-row-reverse bg-[#0A1216] rounded-2xl shadow-lg relative z-10 w-full h-[150px] sm:h-[170px] lg:h-[200px] overflow-hidden transition-transform hover:scale-[1.02] duration-300"
                  >
                    <div
                      className="flex-1 flex flex-col p-4 lg:p-5 justify-between z-10"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className="w-6 h-6 lg:w-8 lg:h-8 bg-black/30 border border-[#34464B] rounded-md flex items-center justify-center shrink-0"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-users w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#F4512A]"
                            aria-hidden="true"
                          >
                            <path
                              d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                            ></path>
                            <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                          </svg>
                        </div>
                        <div>
                          <h3
                            className="text-[#FFFFFF] text-sm lg:text-[16px] font-black leading-tight"
                          >
                            Donor Engagement
                          </h3>
                          <span
                            className="text-[9px] lg:text-[10px] font-bold text-[#FF8A68] uppercase tracking-wider block mt-1"
                            >Automated Lifecycle Journeys</span
                          >
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5 mb-3">
                        <div className="flex items-start gap-2 text-left">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-circle-check lucide-check-circle-2 w-3 h-3 lg:w-3.5 lg:h-3.5 text-[#F4512A] flex-shrink-0 mt-[1px]"
                            aria-hidden="true"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m16 9-5.5 5.5L8 12"></path></svg
                          ><span
                            className="text-[10px] lg:text-[12px] font-medium leading-snug text-[#AAB7BA] whitespace-nowrap overflow-hidden text-ellipsis"
                            >Triggered thank-yous &amp; updates</span
                          >
                        </div>
                        <div className="flex items-start gap-2 text-left">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-circle-check lucide-check-circle-2 w-3 h-3 lg:w-3.5 lg:h-3.5 text-[#F4512A] flex-shrink-0 mt-[1px]"
                            aria-hidden="true"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m16 9-5.5 5.5L8 12"></path></svg
                          ><span
                            className="text-[10px] lg:text-[12px] font-medium leading-snug text-[#AAB7BA] whitespace-nowrap overflow-hidden text-ellipsis"
                            >Lapsed donor early detection</span
                          >
                        </div>
                      </div>
                      <div
                        className="mt-auto pt-2 lg:pt-3 border-t border-[#34464B]/60 items-center justify-between hidden sm:flex"
                      >
                        <span
                          className="text-[9px] lg:text-[10px] font-bold text-[#AAB7BA] uppercase tracking-wider"
                          >Retention</span
                        ><span
                          className="text-[10px] lg:text-[11px] font-black text-[#FFFFFF] bg-black/40 px-2 py-1 rounded-md border border-[#34464B]/60"
                          >3.2x LTV</span
                        >
                      </div>
                    </div>
                    <div
                      className="w-[130px] sm:w-[160px] lg:w-[190px] h-full shrink-0 relative overflow-hidden rounded-r-[2rem] lg:rounded-r-[3rem]"
                    >
                      <img
                        src="./pillar_segmentation.jpg"
                        alt="Donor Engagement"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div
                    className="flex flex-row bg-[#0A1216] rounded-2xl shadow-lg relative z-10 w-full h-[150px] sm:h-[170px] lg:h-[200px] overflow-hidden transition-transform hover:scale-[1.02] duration-300"
                  >
                    <div
                      className="flex-1 flex flex-col p-4 lg:p-5 justify-between z-10"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className="w-6 h-6 lg:w-8 lg:h-8 bg-black/30 border border-[#34464B] rounded-md flex items-center justify-center shrink-0"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-chart-column lucide-bar-chart-3 w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#F4512A]"
                            aria-hidden="true"
                          >
                            <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                            <path d="M18 17V9"></path>
                            <path d="M13 17V5"></path>
                            <path d="M8 17v-3"></path>
                          </svg>
                        </div>
                        <div>
                          <h3
                            className="text-[#FFFFFF] text-sm lg:text-[16px] font-black leading-tight"
                          >
                            AI Reporting
                          </h3>
                          <span
                            className="text-[9px] lg:text-[10px] font-bold text-[#FF8A68] uppercase tracking-wider block mt-1"
                            >Predictive &amp; Compliance Ledger</span
                          >
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5 mb-3">
                        <div className="flex items-start gap-2 text-left">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-circle-check lucide-check-circle-2 w-3 h-3 lg:w-3.5 lg:h-3.5 text-[#F4512A] flex-shrink-0 mt-[1px]"
                            aria-hidden="true"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m16 9-5.5 5.5L8 12"></path></svg
                          ><span
                            className="text-[10px] lg:text-[12px] font-medium leading-snug text-[#AAB7BA] whitespace-nowrap overflow-hidden text-ellipsis"
                            >Predictive churn alerts</span
                          >
                        </div>
                        <div className="flex items-start gap-2 text-left">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-circle-check lucide-check-circle-2 w-3 h-3 lg:w-3.5 lg:h-3.5 text-[#F4512A] flex-shrink-0 mt-[1px]"
                            aria-hidden="true"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m16 9-5.5 5.5L8 12"></path></svg
                          ><span
                            className="text-[10px] lg:text-[12px] font-medium leading-snug text-[#AAB7BA] whitespace-nowrap overflow-hidden text-ellipsis"
                            >1-click Form 10BD ITD export</span
                          >
                        </div>
                      </div>
                      <div
                        className="mt-auto pt-2 lg:pt-3 border-t border-[#34464B]/60 items-center justify-between hidden sm:flex"
                      >
                        <span
                          className="text-[9px] lg:text-[10px] font-bold text-[#AAB7BA] uppercase tracking-wider"
                          >10BD Filing</span
                        ><span
                          className="text-[10px] lg:text-[11px] font-black text-[#FFFFFF] bg-black/40 px-2 py-1 rounded-md border border-[#34464B]/60"
                          >1-Click Ready</span
                        >
                      </div>
                    </div>
                    <div
                      className="w-[130px] sm:w-[160px] lg:w-[190px] h-full shrink-0 relative overflow-hidden rounded-l-[2rem] lg:rounded-l-[3rem]"
                    >
                      <img
                        src="./pillar_analytics.jpg"
                        alt="AI Reporting"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
      */}
    </>
  );
}
