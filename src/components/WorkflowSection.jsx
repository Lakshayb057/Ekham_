import React from 'react';

export default function WorkflowSection({ onOpenDemo }) {
  return (
    <section
      id="workflow"
      className="min-h-screen py-6 sm:py-8 lg:py-10 bg-[#FAF8F5] relative overflow-hidden border-b border-[#EAE2D7]/80 flex flex-col justify-center"
    >
      <div className="max-w-[1300px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-center">
        {/* Section Header */}
        <div
          className="text-left pb-3 sm:pb-4 border-b border-[#E8DFD3]/80"
          style={{ marginBottom: '32px' }}
        >
          <span className="text-[10.5px] sm:text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#F4512A] block mb-1">
            OUR END-TO-END WORKFLOW
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.15rem] font-black text-[#102126] tracking-[-0.035em] leading-[1.08] mb-1.5">
            One Donation. <span className="text-[#F4512A]">Three Connected Moments.</span>
          </h2>
          <p className="text-[11.5px] sm:text-xs text-[#687176] max-w-3xl font-normal leading-tight">
            From campaign creation to lasting impact — everything works together, automatically.
          </p>
        </div>

        {/* 3 Main Stage Blocks - Each devised as a single cohesive card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch mb-5 sm:mb-6">
          {/* Block 1: Stage 1 Launch */}
          <div className="bg-white rounded-2xl border border-[#E5DCD0] p-4 sm:p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between h-full">
            <div>
              {/* Block Header */}
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

              {/* Visual Mockup Card */}
              <div className="flex items-center justify-center py-2">
                <div className="w-full max-w-[320px] sm:max-w-[350px] bg-[#0E1A1E] p-3 rounded-2xl shadow-md border-2 border-[#1E3037]">
                  <div className="flex items-center justify-between px-1 mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#F4512A]"></span>
                      <span className="text-[9px] font-extrabold text-white/90 uppercase tracking-wide">
                        Live Donor Page
                      </span>
                    </div>
                    <span className="text-[8px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-1.5 py-0.5 rounded">
                      ● Active Appeal
                    </span>
                  </div>
                  <div className="bg-[#FAF8F5] rounded-xl p-3 text-left border border-[#E5DCD0]">
                    <div className="mb-2">
                      <span className="text-[8px] font-extrabold uppercase text-[#F4512A] tracking-wider block">
                        Verified Cause
                      </span>
                      <h4 className="text-[11px] font-black text-[#102126] leading-snug">
                        Nutrition &amp; School Kits for 100 Children
                      </h4>
                    </div>
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
                  </div>
                </div>
              </div>

              {/* Text Bullets */}
              <div className="mt-2 space-y-1 text-left">
                <div className="flex items-start gap-1.5">
                  <span className="text-[10px] font-black text-[#153D2B]">01</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight">
                    <strong>Portal:</strong> Secure KYC onboarding &amp; roles
                  </p>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-[10px] font-black text-[#F4512A]">02</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight">
                    <strong>Creation:</strong> Custom goal bars &amp; ask ladders
                  </p>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-[10px] font-black text-[#153D2B]">03</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight">
                    <strong>Connection:</strong> Universal widget &amp; WhatsApp
                  </p>
                </div>
              </div>
            </div>

            {/* Stage 1 Embedded Roadmap Steps */}
            <div className="mt-4 pt-3 border-t border-[#EAE2D7]">
              <div className="bg-[#FAF8F5] rounded-xl p-2 sm:p-2.5 border border-[#E5DCD0]/70 flex items-center justify-between gap-1">
                {/* Step 01 */}
                <div className="flex flex-col items-center text-center flex-1 min-w-0">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mb-1 bg-[#153D2B]/15 text-[#153D2B] border border-[#153D2B]/35">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M10 12h4M10 8h4M14 21v-3a2 2 0 0 0-4 0v3M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"/></svg>
                  </div>
                  <div className="flex items-center gap-0.5 justify-center w-full">
                    <span className="text-[8.5px] font-mono font-bold text-gray-500">01</span>
                    <h5 className="text-[9px] font-bold text-[#102126] leading-tight truncate">NGO Portal</h5>
                  </div>
                  <p className="text-[7.5px] text-[#687176] leading-tight font-medium mt-0.5 truncate">Secure KYC</p>
                </div>

                <div className="h-7 w-px bg-[#E5DCD0] shrink-0"></div>

                {/* Step 02 */}
                <div className="flex flex-col items-center text-center flex-1 min-w-0">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mb-1 bg-[#F4512A]/15 text-[#F4512A] border border-[#F4512A]/35">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zM6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14M8 6v8"/></svg>
                  </div>
                  <div className="flex items-center gap-0.5 justify-center w-full">
                    <span className="text-[8.5px] font-mono font-bold text-gray-500">02</span>
                    <h5 className="text-[9px] font-bold text-[#102126] leading-tight truncate">Campaigns</h5>
                  </div>
                  <p className="text-[7.5px] text-[#687176] leading-tight font-medium mt-0.5 truncate">Goal bars</p>
                </div>

                <div className="h-7 w-px bg-[#E5DCD0] shrink-0"></div>

                {/* Step 03 */}
                <div className="flex flex-col items-center text-center flex-1 min-w-0">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mb-1 bg-[#153D2B]/15 text-[#153D2B] border border-[#153D2B]/35">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                  </div>
                  <div className="flex items-center gap-0.5 justify-center w-full">
                    <span className="text-[8.5px] font-mono font-bold text-gray-500">03</span>
                    <h5 className="text-[9px] font-bold text-[#102126] leading-tight truncate">Connection</h5>
                  </div>
                  <p className="text-[7.5px] text-[#687176] leading-tight font-medium mt-0.5 truncate">Vanity links</p>
                </div>
              </div>
            </div>
          </div>

          {/* Block 2: Stage 2 Transact */}
          <div className="bg-white rounded-2xl border border-[#E5DCD0] p-4 sm:p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between h-full">
            <div>
              {/* Block Header */}
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

              {/* Visual Mockup Card */}
              <div className="flex items-center justify-center py-2">
                <div className="w-full max-w-[320px] sm:max-w-[350px] bg-[#0E1A1E] p-3 rounded-2xl shadow-md border-2 border-[#1E3037]">
                  <div className="flex items-center justify-between px-1 mb-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 flex items-center justify-center text-[6px] text-white font-bold">
                        ✓
                      </div>
                      <span className="text-[9px] font-extrabold text-white/90 uppercase tracking-wide">
                        WhatsApp Delivery
                      </span>
                    </div>
                    <span className="text-[8px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-1.5 py-0.5 rounded">
                      ⚡ &lt; 3 Seconds
                    </span>
                  </div>
                  <div className="bg-[#0B141A] rounded-xl p-3 text-left border border-white/10 text-white">
                    <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-white/10">
                      <div className="flex items-center gap-1.5">
                        <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-[8px] font-black text-black">
                          E
                        </div>
                        <span className="text-[9px] font-bold text-white">EKhum Verified Bot</span>
                      </div>
                      <span className="text-[7.5px] text-gray-400">Instant</span>
                    </div>
                    <div className="bg-[#1F2C34] rounded-lg p-2 mb-2 border border-white/5">
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="text-[8px] font-bold text-emerald-400 flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-3 h-3 text-emerald-400 inline" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m16 9-5.5 5.5L8 12"></path>
                          </svg>
                          Payment Successful
                        </span>
                        <span className="text-[10px] font-black text-white">₹5,000</span>
                      </div>
                      <p className="text-[7.5px] text-gray-300">
                        Rajiv Sharma • 80G Tax Exemption Applied
                      </p>
                    </div>
                    <div className="bg-[#202C33] rounded-lg p-2 flex items-center justify-between border border-emerald-500/30 mb-1.5">
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text w-4 h-4 text-emerald-400" aria-hidden="true">
                          <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                          <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                          <path d="M10 9H8"></path>
                          <path d="M16 13H8"></path>
                          <path d="M16 17H8"></path>
                        </svg>
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

              {/* Text Bullets */}
              <div className="mt-2 space-y-1 text-left">
                <div className="flex items-start gap-1.5">
                  <span className="text-[10px] font-black text-[#F4512A]">04</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight">
                    <strong>Donations &amp; 80G:</strong> Instant WhatsApp 80G in &lt;3s
                  </p>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-[10px] font-black text-[#153D2B]">05</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight">
                    <strong>Segmentation:</strong> Live tiers &amp; tax classifications
                  </p>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-[10px] font-black text-[#F4512A]">06</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight">
                    <strong>Journeys:</strong> Automated engagement communication
                  </p>
                </div>
              </div>
            </div>

            {/* Stage 2 Embedded Roadmap Steps */}
            <div className="mt-4 pt-3 border-t border-[#EAE2D7]">
              <div className="bg-[#FAF8F5] rounded-xl p-2 sm:p-2.5 border border-[#E5DCD0]/70 flex items-center justify-between gap-1">
                {/* Step 04 */}
                <div className="flex flex-col items-center text-center flex-1 min-w-0">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mb-1 bg-[#F4512A]/15 text-[#F4512A] border border-[#F4512A]/35">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/><path d="M6 14h2"/></svg>
                  </div>
                  <div className="flex items-center gap-0.5 justify-center w-full">
                    <span className="text-[8.5px] font-mono font-bold text-gray-500">04</span>
                    <h5 className="text-[9px] font-bold text-[#102126] leading-tight truncate">80G Receipts</h5>
                  </div>
                  <p className="text-[7.5px] text-[#687176] leading-tight font-medium mt-0.5 truncate">WhatsApp &lt;3s</p>
                </div>

                <div className="h-7 w-px bg-[#E5DCD0] shrink-0"></div>

                {/* Step 05 */}
                <div className="flex flex-col items-center text-center flex-1 min-w-0">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mb-1 bg-[#153D2B]/15 text-[#153D2B] border border-[#153D2B]/35">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>
                  </div>
                  <div className="flex items-center gap-0.5 justify-center w-full">
                    <span className="text-[8.5px] font-mono font-bold text-gray-500">05</span>
                    <h5 className="text-[9px] font-bold text-[#102126] leading-tight truncate">Segmentation</h5>
                  </div>
                  <p className="text-[7.5px] text-[#687176] leading-tight font-medium mt-0.5 truncate">Live tiers</p>
                </div>

                <div className="h-7 w-px bg-[#E5DCD0] shrink-0"></div>

                {/* Step 06 */}
                <div className="flex flex-col items-center text-center flex-1 min-w-0">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mb-1 bg-[#F4512A]/15 text-[#F4512A] border border-[#F4512A]/35">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="m9 15 2 2 4-4"/></svg>
                  </div>
                  <div className="flex items-center gap-0.5 justify-center w-full">
                    <span className="text-[8.5px] font-mono font-bold text-gray-500">06</span>
                    <h5 className="text-[9px] font-bold text-[#102126] leading-tight truncate">Journeys</h5>
                  </div>
                  <p className="text-[7.5px] text-[#687176] leading-tight font-medium mt-0.5 truncate">Automated</p>
                </div>
              </div>
            </div>
          </div>

          {/* Block 3: Stage 3 Multiply */}
          <div className="bg-white rounded-2xl border border-[#E5DCD0] p-4 sm:p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between h-full">
            <div>
              {/* Block Header */}
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

              {/* Visual Mockup Card */}
              <div className="flex items-center justify-center py-2">
                <div className="w-full max-w-[320px] sm:max-w-[350px] bg-[#0E1A1E] p-3 rounded-2xl shadow-md border-2 border-[#1E3037]">
                  <div className="flex items-center justify-between px-1 mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      <span className="text-[9px] font-extrabold text-white/90 uppercase tracking-wide">
                        Automated Compliance
                      </span>
                    </div>
                    <span className="text-[8px] font-bold text-gray-300 bg-white/10 px-1.5 py-0.5 rounded">
                      FY 2025–26
                    </span>
                  </div>
                  <div className="bg-[#14201A] rounded-xl p-3 text-left border border-[#273B30] text-white">
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
                    <div className="flex items-end gap-1.5 h-6 bg-white p-1.5 rounded-md mb-2 border border-gray-200">
                      <div className="w-1/6 bg-emerald-500/40 h-[40%] rounded-xs"></div>
                      <div className="w-1/6 bg-emerald-500/50 h-[65%] rounded-xs"></div>
                      <div className="w-1/6 bg-emerald-500/60 h-[50%] rounded-xs"></div>
                      <div className="w-1/6 bg-emerald-500/80 h-[75%] rounded-xs"></div>
                      <div className="w-1/6 bg-[#F4512A] h-[100%] rounded-xs"></div>
                      <div className="w-1/6 bg-emerald-400 h-[88%] rounded-xs"></div>
                    </div>
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

              {/* Text Bullets */}
              <div className="mt-2 space-y-1 text-left">
                <div className="flex items-start gap-1.5">
                  <span className="text-[10px] font-black text-[#153D2B]">07</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight">
                    <strong>Tracking:</strong> Live gross volume &amp; health
                  </p>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-[10px] font-black text-[#F4512A]">08</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight">
                    <strong>Reporting:</strong> 1-click Form 10BD export
                  </p>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-[10px] font-black text-[#153D2B]">09</span>
                  <p className="text-[10.5px] text-[#102126] font-medium leading-tight">
                    <strong>AI Engine:</strong> Lapsed donor risk &amp; upgrades
                  </p>
                </div>
              </div>
            </div>

            {/* Stage 3 Embedded Roadmap Steps */}
            <div className="mt-4 pt-3 border-t border-[#EAE2D7]">
              <div className="bg-[#FAF8F5] rounded-xl p-2 sm:p-2.5 border border-[#E5DCD0]/70 flex items-center justify-between gap-1">
                {/* Step 07 */}
                <div className="flex flex-col items-center text-center flex-1 min-w-0">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mb-1 bg-[#153D2B]/15 text-[#153D2B] border border-[#153D2B]/35">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>
                  </div>
                  <div className="flex items-center gap-0.5 justify-center w-full">
                    <span className="text-[8.5px] font-mono font-bold text-gray-500">07</span>
                    <h5 className="text-[9px] font-bold text-[#102126] leading-tight truncate">Tracking</h5>
                  </div>
                  <p className="text-[7.5px] text-[#687176] leading-tight font-medium mt-0.5 truncate">Live volume</p>
                </div>

                <div className="h-7 w-px bg-[#E5DCD0] shrink-0"></div>

                {/* Step 08 */}
                <div className="flex flex-col items-center text-center flex-1 min-w-0">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mb-1 bg-[#F4512A]/15 text-[#F4512A] border border-[#F4512A]/35">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                  </div>
                  <div className="flex items-center gap-0.5 justify-center w-full">
                    <span className="text-[8.5px] font-mono font-bold text-gray-500">08</span>
                    <h5 className="text-[9px] font-bold text-[#102126] leading-tight truncate">Reporting</h5>
                  </div>
                  <p className="text-[7.5px] text-[#687176] leading-tight font-medium mt-0.5 truncate">1-click 10BD</p>
                </div>

                <div className="h-7 w-px bg-[#E5DCD0] shrink-0"></div>

                {/* Step 09 */}
                <div className="flex flex-col items-center text-center flex-1 min-w-0">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mb-1 bg-[#153D2B]/15 text-[#153D2B] border border-[#153D2B]/35">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/></svg>
                  </div>
                  <div className="flex items-center gap-0.5 justify-center w-full">
                    <span className="text-[8.5px] font-mono font-bold text-gray-500">09</span>
                    <h5 className="text-[9px] font-bold text-[#102126] leading-tight truncate">AI Engine</h5>
                  </div>
                  <p className="text-[7.5px] text-[#687176] leading-tight font-medium mt-0.5 truncate">Risk &amp; Upgrades</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Bottom CTA Button */}
        <div className="flex items-center justify-center mt-5 sm:mt-6">
          <button
            onClick={onOpenDemo}
            className="inline-flex items-center gap-2 px-7 sm:px-9 py-2.5 bg-[#F4512A] hover:bg-[#D8411C] text-white text-xs sm:text-[13px] font-bold rounded-full shadow-xs hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <span>See How EKhum Works — Free 15-Min Demo</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
