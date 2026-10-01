import React from 'react';

export default function SolutionSection({ onOpenDemo }) {
  return (
<section
            id="solution"
            className="h-[100dvh] lg:h-screen lg:min-h-[700px] flex items-center justify-center bg-[#FAF8F5] relative overflow-hidden py-4 sm:py-8"
          >
            <div
              className="absolute top-1/2 right-0 w-64 opacity-40 pointer-events-none transform translate-x-16 -translate-y-1/2"
            >
              <svg
                className="pointer-events-none select-none"
                viewBox="0 0 160 220"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 210C40 160 70 120 140 20"
                  stroke="rgba(42, 114, 78, 0.12)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M140 20C120 40 100 35 90 20C105 10 125 10 140 20Z"
                  fill="rgba(42, 114, 78, 0.12)"
                ></path>
                <path
                  d="M115 55C140 60 155 45 150 30C130 35 120 45 115 55Z"
                  fill="rgba(42, 114, 78, 0.12)"
                ></path>
                <path
                  d="M95 85C70 80 55 95 60 110C80 105 90 95 95 85Z"
                  fill="rgba(42, 114, 78, 0.12)"
                ></path>
                <path
                  d="M75 120C100 125 115 110 110 95C90 100 80 110 75 120Z"
                  fill="rgba(42, 114, 78, 0.12)"
                ></path>
                <path
                  d="M50 155C25 150 10 165 15 180C35 175 45 165 50 155Z"
                  fill="rgba(42, 114, 78, 0.12)"
                ></path>
              </svg>
            </div>
            <div
              className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
            >
              <div
                className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-10 items-center"
              >
                <div className="lg:col-span-8 order-2 lg:order-1">
                  <div
                    className="bg-[#111A15] p-2 sm:p-3 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl border border-[#26372E]"
                  >
                    <div
                      className="bg-[#18241D] rounded-xl sm:rounded-[2rem] overflow-hidden border border-[#273B30]"
                    >
                      <div
                        className="grid grid-cols-12 min-h-[340px] sm:min-h-[460px]"
                      >
                        <div
                          className="col-span-4 bg-[#14201A] p-2.5 sm:p-5 border-r border-[#24352B] flex flex-col justify-between"
                        >
                          <div>
                            <div
                              className="flex items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6 px-1 sm:px-2"
                            >
                              <div
                                className="w-4 h-4 sm:w-6 sm:h-6 rounded-md sm:rounded-lg bg-[#EB5E28] flex items-center justify-center text-white font-bold text-[9px] sm:text-xs"
                              >
                                E
                              </div>
                              <span
                                className="text-white font-bold text-[10px] sm:text-sm tracking-tight truncate"
                                >EKhum Cloud</span
                              >
                            </div>
                            <div className="space-y-0.5 sm:space-y-1">
                              <div
                                className="w-full flex items-center gap-1.5 sm:gap-2.5 px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg sm:rounded-xl text-[9px] sm:text-xs font-semibold transition-all bg-[#EB5E28] text-white shadow-sm"
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
                                  className="lucide lucide-layout-dashboard w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0"
                                  aria-hidden="true"
                                >
                                  <rect
                                    width="7"
                                    height="9"
                                    x="3"
                                    y="3"
                                    rx="1"
                                  ></rect>
                                  <rect
                                    width="7"
                                    height="5"
                                    x="14"
                                    y="3"
                                    rx="1"
                                  ></rect>
                                  <rect
                                    width="7"
                                    height="9"
                                    x="14"
                                    y="12"
                                    rx="1"
                                  ></rect>
                                  <rect
                                    width="7"
                                    height="5"
                                    x="3"
                                    y="16"
                                    rx="1"
                                  ></rect></svg
                                ><span className="truncate">Dashboard</span></div
                              ><div
                                className="w-full flex items-center gap-1.5 sm:gap-2.5 px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg sm:rounded-xl text-[9px] sm:text-xs font-semibold transition-all text-gray-400 hover:text-white hover:bg-white/5"
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
                                  className="lucide lucide-megaphone w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"
                                  ></path>
                                  <path
                                    d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"
                                  ></path>
                                  <path d="M8 6v8"></path></svg
                                ><span className="truncate">Campaigns</span></div
                              ><div
                                className="w-full flex items-center gap-1.5 sm:gap-2.5 px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg sm:rounded-xl text-[9px] sm:text-xs font-semibold transition-all text-gray-400 hover:text-white hover:bg-white/5"
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
                                  className="lucide lucide-users-round lucide-users-2 w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0"
                                  aria-hidden="true"
                                >
                                  <path d="M18 21a8 8 0 0 0-16 0"></path>
                                  <circle cx="10" cy="8" r="5"></circle>
                                  <path
                                    d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"
                                  ></path></svg
                                ><span className="truncate">Donors</span></div
                              ><div
                                className="w-full flex items-center gap-1.5 sm:gap-2.5 px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg sm:rounded-xl text-[9px] sm:text-xs font-semibold transition-all text-gray-400 hover:text-white hover:bg-white/5"
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
                                  className="lucide lucide-file-check w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
                                  ></path>
                                  <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                  <path d="m9 15 2 2 4-4"></path></svg
                                ><span className="truncate"
                                  >Compliance</span
                                ></div
                              ><div
                                className="w-full flex items-center gap-1.5 sm:gap-2.5 px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg sm:rounded-xl text-[9px] sm:text-xs font-semibold transition-all text-gray-400 hover:text-white hover:bg-white/5"
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
                                  className="lucide lucide-chart-column lucide-bar-chart-3 w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0"
                                  aria-hidden="true"
                                >
                                  <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                                  <path d="M18 17V9"></path>
                                  <path d="M13 17V5"></path>
                                  <path d="M8 17v-3"></path></svg
                                ><span className="truncate">Analytics</span></div
                              ><div
                                className="w-full flex items-center gap-1.5 sm:gap-2.5 px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg sm:rounded-xl text-[9px] sm:text-xs font-semibold transition-all text-gray-400 hover:text-white hover:bg-white/5"
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
                                  className="lucide lucide-message-square w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"
                                  ></path></svg
                                ><span className="truncate"
                                  >Communications</span
                                ></div
                              ><div
                                className="w-full flex items-center gap-1.5 sm:gap-2.5 px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg sm:rounded-xl text-[9px] sm:text-xs font-semibold transition-all text-gray-400 hover:text-white hover:bg-white/5"
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
                                  className="lucide lucide-file-text w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
                                  ></path>
                                  <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                  <path d="M10 9H8"></path>
                                  <path d="M16 13H8"></path>
                                  <path d="M16 17H8"></path></svg
                                ><span className="truncate">Reports</span></div
                              ><div
                                className="w-full flex items-center gap-1.5 sm:gap-2.5 px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg sm:rounded-xl text-[9px] sm:text-xs font-semibold transition-all text-gray-400 hover:text-white hover:bg-white/5"
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
                                  className="lucide lucide-settings w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"
                                  ></path>
                                  <circle cx="12" cy="12" r="3"></circle></svg
                                ><span className="truncate">Settings</span>
                              </div>
                            </div>
                          </div>
                          <div
                            className="mt-2 sm:mt-4 p-2 sm:p-3 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl hidden sm:block"
                          >
                            <div
                              className="flex items-center justify-between text-[11px] text-gray-400 mb-1"
                            >
                              <span>10BD Filing</span
                              ><span className="text-green-400 font-bold"
                                >Ready</span
                              >
                            </div>
                            <div
                              className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden"
                            >
                              <div className="bg-green-500 h-full w-[96%]"></div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-span-8 bg-[#FBF9F5] p-3 sm:p-6 text-[#1C2421] flex flex-col justify-between overflow-hidden"
                        >
                          <div>
                            <div
                              className="flex items-center justify-between pb-2 sm:pb-4 mb-2 sm:mb-4 border-b border-[#E8E2D8]"
                            >
                              <div
                                className="relative w-full max-w-[100px] sm:max-w-xs"
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
                                  className="lucide lucide-search w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-400 absolute left-2 sm:left-2.5 top-1.5 sm:top-2.5"
                                  aria-hidden="true"
                                >
                                  <path d="m21 21-4.34-4.34"></path>
                                  <circle cx="11" cy="11" r="8"></circle></svg
                                ><input
                                  type="text"
                                  placeholder="Search..."
                                  className="w-full pl-6 sm:pl-8 pr-2 sm:pr-3 py-1 sm:py-1.5 text-[9px] sm:text-xs bg-white border border-[#E8E2D8] rounded-full focus:outline-none"
                                  readOnly
                                />
                              </div>
                              <div
                                className="flex items-center gap-1.5 sm:gap-2.5 ml-2"
                              >
                                <div
                                  className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-white border border-[#E8E2D8] flex items-center justify-center text-gray-600 relative flex-shrink-0"
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
                                    className="lucide lucide-bell w-2.5 h-2.5 sm:w-3.5 h-3.5"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M10.268 21a2 2 0 0 0 3.464 0"
                                    ></path>
                                    <path
                                      d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"
                                    ></path></svg
                                  ><span
                                    className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#EB5E28] absolute top-0.5 right-0.5 sm:top-1 sm:right-1"
                                  ></span>
                                </div>
                                <div
                                  className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-[#14201A] text-white flex items-center justify-center font-bold text-[8px] sm:text-xs flex-shrink-0"
                                >
                                  TF
                                </div>
                              </div>
                            </div>
                            <div className="mb-2 sm:mb-4">
                              <h4
                                className="text-[11px] sm:text-lg font-extrabold text-[#1C2421] leading-tight truncate"
                              >
                                Good Morning!
                              </h4>
                              <p
                                className="text-[8px] sm:text-[11px] text-[#6A756F] truncate hidden sm:block"
                              >
                                Here is your daily giving &amp; compliance
                                health summary.
                              </p>
                            </div>
                            <div
                              className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2.5 mb-3 sm:mb-5"
                            >
                              <div
                                className="bg-white p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl border border-[#E8E2D8] shadow-2xs"
                              >
                                <div
                                  className="text-[7.5px] sm:text-[10px] text-gray-500 font-medium truncate"
                                >
                                  Total Donations
                                </div>
                                <div
                                  className="text-[10px] sm:text-sm font-bold text-[#1C2421] truncate"
                                >
                                  ₹17.4L
                                </div>
                              </div>
                              <div
                                className="bg-white p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl border border-[#E8E2D8] shadow-2xs"
                              >
                                <div
                                  className="text-[7.5px] sm:text-[10px] text-gray-500 font-medium truncate"
                                >
                                  Donors
                                </div>
                                <div
                                  className="text-[10px] sm:text-sm font-bold text-[#1C2421] truncate"
                                >
                                  3,260
                                </div>
                              </div>
                              <div
                                className="bg-white p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl border border-[#E8E2D8] shadow-2xs"
                              >
                                <div
                                  className="text-[7.5px] sm:text-[10px] text-gray-500 font-medium truncate"
                                >
                                  Campaigns
                                </div>
                                <div
                                  className="text-[10px] sm:text-sm font-bold text-[#1C2421] truncate"
                                >
                                  18
                                </div>
                              </div>
                              <div
                                className="bg-white p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl border border-[#E8E2D8] shadow-2xs"
                              >
                                <div
                                  className="text-[7.5px] sm:text-[10px] text-gray-500 font-medium truncate"
                                >
                                  Retention
                                </div>
                                <div
                                  className="text-[10px] sm:text-sm font-bold text-[#2A724E] truncate"
                                >
                                  98%
                                </div>
                              </div>
                            </div>
                            <div
                              className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-3.5"
                            >
                              <div
                                className="sm:col-span-7 bg-white p-2 sm:p-3 rounded-xl sm:rounded-2xl border border-[#E8E2D8]"
                              >
                                <div
                                  className="flex items-center justify-between mb-1 sm:mb-2"
                                >
                                  <span
                                    className="text-[9px] sm:text-xs font-bold text-[#1C2421]"
                                    >Trend</span
                                  ><span
                                    className="text-[7.5px] sm:text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1 sm:px-2 py-0.5 rounded-full flex items-center gap-0.5"
                                    ><svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="lucide lucide-trending-up w-2 h-2 sm:w-2.5 sm:h-2.5"
                                      aria-hidden="true"
                                    >
                                      <path d="M16 7h6v6"></path>
                                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                    </svg>
                                    +32%</span
                                  >
                                </div>
                                <div className="h-12 sm:h-28 w-full pt-1 sm:pt-2">
                                  <svg
                                    viewBox="0 0 240 90"
                                    preserveAspectRatio="none"
                                    className="w-full h-full overflow-visible"
                                  >
                                    <defs>
                                      <linearGradient
                                        id="chartGrad"
                                        x1="0"
                                        y1="0"
                                        x2="0"
                                        y2="1"
                                      >
                                        <stop
                                          offset="0%"
                                          stopColor="#2A724E"
                                          stopOpacity="0.3"
                                        ></stop>
                                        <stop
                                          offset="100%"
                                          stopColor="#2A724E"
                                          stopOpacity="0.0"
                                        ></stop>
                                      </linearGradient>
                                    </defs>
                                    <path
                                      d="M 10 75 Q 50 65 90 55 T 160 35 T 230 15 L 230 85 L 10 85 Z"
                                      fill="url(#chartGrad)"
                                    ></path>
                                    <path
                                      d="M 10 75 Q 50 65 90 55 T 160 35 T 230 15"
                                      fill="none"
                                      stroke="#2A724E"
                                      strokeWidth="2.5"
                                      strokeLinecap="round"
                                    ></path>
                                    <circle
                                      cx="90"
                                      cy="55"
                                      r="3"
                                      fill="#2A724E"
                                      className="animate-pulse"
                                    ></circle>
                                    <circle
                                      cx="160"
                                      cy="35"
                                      r="3"
                                      fill="#2A724E"
                                      className="animate-pulse"
                                    ></circle>
                                    <circle
                                      cx="230"
                                      cy="15"
                                      r="4"
                                      fill="#EB5E28"
                                      stroke="white"
                                      strokeWidth="2"
                                    ></circle>
                                  </svg>
                                </div>
                                <div
                                  className="flex justify-between text-[7.5px] sm:text-[9px] text-gray-400 mt-1"
                                >
                                  <span>Jan</span><span>Feb</span
                                  ><span>Mar</span
                                  ><span className="hidden sm:inline">Apr</span
                                  ><span className="hidden sm:inline">May</span
                                  ><span>Jun</span>
                                </div>
                              </div>
                              <div
                                className="sm:col-span-5 bg-white p-2 sm:p-3 rounded-xl sm:rounded-2xl border border-[#E8E2D8]"
                              >
                                <div
                                  className="text-[9px] sm:text-xs font-bold text-[#1C2421] mb-1 sm:mb-2"
                                >
                                  Recent
                                </div>
                                <div className="space-y-1 sm:space-y-1.5">
                                  <div
                                    className="flex items-center justify-between p-1 sm:p-1.5 rounded-lg cursor-pointer transition-colors hover:bg-gray-50"
                                  >
                                    <div
                                      className="flex items-center gap-1.5 overflow-hidden"
                                    >
                                      <div
                                        className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#1C2421]/10 text-[#1C2421] text-[7.5px] sm:text-[9px] font-bold flex items-center justify-center flex-shrink-0"
                                      >
                                        R
                                      </div>
                                      <div className="truncate">
                                        <div
                                          className="text-[9px] sm:text-[11px] font-bold text-[#1C2421] truncate"
                                        >
                                          Rohit Sharma
                                        </div>
                                        <div
                                          className="text-[7.5px] sm:text-[9px] text-gray-400"
                                        >
                                          2m ago
                                        </div>
                                      </div>
                                    </div>
                                    <div className="text-right flex-shrink-0 ml-1">
                                      <div
                                        className="text-[9px] sm:text-[11px] font-bold text-[#1C2421]"
                                      >
                                        ₹5,000
                                      </div>
                                      <div
                                        className="text-[7.5px] sm:text-[9px] text-emerald-700 font-semibold flex items-center gap-0.5 justify-end"
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
                                          className="lucide lucide-circle-check lucide-check-circle-2 w-2 h-2 sm:w-2.5 sm:h-2.5"
                                          aria-hidden="true"
                                        >
                                          <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                          ></circle>
                                          <path d="m16 9-5.5 5.5L8 12"></path>
                                        </svg>
                                        <span className="hidden sm:inline"
                                          >80G</span
                                        >
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="flex items-center justify-between p-1 sm:p-1.5 rounded-lg cursor-pointer transition-colors hover:bg-gray-50"
                                  >
                                    <div
                                      className="flex items-center gap-1.5 overflow-hidden"
                                    >
                                      <div
                                        className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#1C2421]/10 text-[#1C2421] text-[7.5px] sm:text-[9px] font-bold flex items-center justify-center flex-shrink-0"
                                      >
                                        P
                                      </div>
                                      <div className="truncate">
                                        <div
                                          className="text-[9px] sm:text-[11px] font-bold text-[#1C2421] truncate"
                                        >
                                          Priya Verma
                                        </div>
                                        <div
                                          className="text-[7.5px] sm:text-[9px] text-gray-400"
                                        >
                                          14m ago
                                        </div>
                                      </div>
                                    </div>
                                    <div className="text-right flex-shrink-0 ml-1">
                                      <div
                                        className="text-[9px] sm:text-[11px] font-bold text-[#1C2421]"
                                      >
                                        ₹1,000
                                      </div>
                                      <div
                                        className="text-[7.5px] sm:text-[9px] text-emerald-700 font-semibold flex items-center gap-0.5 justify-end"
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
                                          className="lucide lucide-circle-check lucide-check-circle-2 w-2 h-2 sm:w-2.5 sm:h-2.5"
                                          aria-hidden="true"
                                        >
                                          <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                          ></circle>
                                          <path d="m16 9-5.5 5.5L8 12"></path>
                                        </svg>
                                        <span className="hidden sm:inline"
                                          >80G</span
                                        >
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="flex items-center justify-between p-1 sm:p-1.5 rounded-lg cursor-pointer transition-colors hover:bg-gray-50"
                                  >
                                    <div
                                      className="flex items-center gap-1.5 overflow-hidden"
                                    >
                                      <div
                                        className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#1C2421]/10 text-[#1C2421] text-[7.5px] sm:text-[9px] font-bold flex items-center justify-center flex-shrink-0"
                                      >
                                        A
                                      </div>
                                      <div className="truncate">
                                        <div
                                          className="text-[9px] sm:text-[11px] font-bold text-[#1C2421] truncate"
                                        >
                                          Amit Kumar
                                        </div>
                                        <div
                                          className="text-[7.5px] sm:text-[9px] text-gray-400"
                                        >
                                          45m ago
                                        </div>
                                      </div>
                                    </div>
                                    <div className="text-right flex-shrink-0 ml-1">
                                      <div
                                        className="text-[9px] sm:text-[11px] font-bold text-[#1C2421]"
                                      >
                                        ₹2,500
                                      </div>
                                      <div
                                        className="text-[7.5px] sm:text-[9px] text-emerald-700 font-semibold flex items-center gap-0.5 justify-end"
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
                                          className="lucide lucide-circle-check lucide-check-circle-2 w-2 h-2 sm:w-2.5 sm:h-2.5"
                                          aria-hidden="true"
                                        >
                                          <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                          ></circle>
                                          <path d="m16 9-5.5 5.5L8 12"></path>
                                        </svg>
                                        <span className="hidden sm:inline"
                                          >80G</span
                                        >
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="flex items-center justify-between p-1 sm:p-1.5 rounded-lg cursor-pointer transition-colors hover:bg-gray-50"
                                  >
                                    <div
                                      className="flex items-center gap-1.5 overflow-hidden"
                                    >
                                      <div
                                        className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#1C2421]/10 text-[#1C2421] text-[7.5px] sm:text-[9px] font-bold flex items-center justify-center flex-shrink-0"
                                      >
                                        S
                                      </div>
                                      <div className="truncate">
                                        <div
                                          className="text-[9px] sm:text-[11px] font-bold text-[#1C2421] truncate"
                                        >
                                          Sneha Patel
                                        </div>
                                        <div
                                          className="text-[7.5px] sm:text-[9px] text-gray-400"
                                        >
                                          1h ago
                                        </div>
                                      </div>
                                    </div>
                                    <div className="text-right flex-shrink-0 ml-1">
                                      <div
                                        className="text-[9px] sm:text-[11px] font-bold text-[#1C2421]"
                                      >
                                        ₹10,000
                                      </div>
                                      <div
                                        className="text-[7.5px] sm:text-[9px] text-emerald-700 font-semibold flex items-center gap-0.5 justify-end"
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
                                          className="lucide lucide-circle-check lucide-check-circle-2 w-2 h-2 sm:w-2.5 sm:h-2.5"
                                          aria-hidden="true"
                                        >
                                          <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                          ></circle>
                                          <path d="m16 9-5.5 5.5L8 12"></path>
                                        </svg>
                                        <span className="hidden sm:inline"
                                          >80G</span
                                        >
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-2 sm:mt-3 text-center">
                            <span
                              className="text-[7.5px] sm:text-[10px] text-gray-400 font-medium"
                              >Live synced with Payment Gateways &amp; ITD
                              API</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-4 order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 mb-1.5 sm:mb-3">
                    <span
                      className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#EB5E28]"
                      >BUILT FOR IMPACT</span
                    >
                  </div>
                  <h2
                    className="text-2xl sm:text-4xl font-extrabold text-[#1C2421] tracking-tight leading-tight mb-2 sm:mb-5"
                  >
                    A Smarter Way<br />to Manage Giving
                  </h2>
                  <p
                    className="text-[13px] sm:text-base text-[#555F59] leading-snug sm:leading-relaxed mb-4 sm:mb-6 font-normal"
                  >
                    Simple. Secure. Scalable. From campaign creation to
                    compliance reporting, EKhum gives you everything you need —
                    in one place.
                  </p>
                  
{/* Hidden until functional: See the Platform */}

                </div>
              </div>
            </div>
          </section>
  );
}
