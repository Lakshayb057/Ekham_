import React from 'react';

export default function EcosystemSection({ onOpenDemo }) {
  return (
    <>
      {/*
<section
            id="ecosystem"
            className="pt-12 sm:pt-16 bg-[#F8F9FA] relative overflow-hidden font-sans flex flex-col"
          >
            <div
              className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full mb-10 sm:mb-16 flex-1"
            >
              <div
                className="mb-6 w-full border-b border-gray-200 pb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between"
              >
                <div className="max-w-4xl">
                  <span
                    className="text-[10px] lg:text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#F4512A] mb-2 block"
                    >CONNECTED ECOSYSTEM</span
                  >
                  <h2
                    className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-tight tracking-tight mb-2 flex flex-wrap gap-2"
                  >
                    <span>Different Roles.</span>
                    <span className="text-[#F4512A]"
                      >One Connected Experience.</span
                    >
                  </h2>
                  <p
                    className="text-gray-500 font-medium text-sm lg:text-[15px] leading-relaxed max-w-[800px]"
                  >
                    EKhum brings NGOs, donors and CSR partners together on a
                    single platform — so every contribution creates
                    <span className="whitespace-nowrap"
                      >greater, measurable impact.</span
                    >
                  </p>
                </div>
              </div>
              <div
                className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 relative items-start"
              >
                <div
                  className="bg-green-50/50 rounded-2xl p-4 sm:p-5 border border-green-100 flex flex-col relative overflow-hidden group"
                >
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <div
                      className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shadow-sm shrink-0"
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900">
                        Non-Profit Teams
                      </h3>
                      <p
                        className="text-[10px] sm:text-[11px] text-gray-500 font-medium uppercase tracking-wider"
                      >
                        For grassroots to large scale
                      </p>
                    </div>
                  </div>
                  <div
                    className="w-full flex justify-center items-start sm:items-center py-2 sm:py-4"
                  >
                    <div
                      className="w-full max-w-[250px] scale-[0.7] sm:scale-100 origin-top sm:origin-center mt-2 sm:mt-0 -mb-[40px] sm:mb-0"
                    >
                      <div
                        className="bg-white rounded-t-lg border-[4px] border-b-0 border-gray-800 shadow-lg h-40 overflow-hidden relative w-full flex flex-col"
                      >
                        <div
                          className="w-full h-4 bg-gray-100 flex items-center px-2 gap-1 border-b shrink-0"
                        >
                          <div
                            className="w-1.5 h-1.5 rounded-full bg-red-400"
                          ></div>
                          <div
                            className="w-1.5 h-1.5 rounded-full bg-yellow-400"
                          ></div>
                          <div
                            className="w-1.5 h-1.5 rounded-full bg-green-400"
                          ></div>
                        </div>
                        <div className="flex flex-1 h-full">
                          <div
                            className="w-16 border-r border-gray-100 bg-gray-50/30 flex flex-col items-start py-2 px-1.5 gap-1.5 shrink-0"
                          >
                            <div className="w-full pl-0.5 mb-1">
                              <div
                                className="relative grid grid-cols-[auto_1fr] gap-x-2 sm:gap-x-2.5 items-center select-none scale-[0.25] origin-left -mt-2 -mb-2"
                              >
                                <div
                                  className="row-start-1 col-start-1 relative w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex items-center justify-center lg:translate-y-[1.5px]"
                                >
                                  <svg
                                    viewBox="0 0 36 36"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-full h-full text-[#EB5E28] animate-[spin_10s_linear_infinite]"
                                  >
                                    <line
                                      x1="18"
                                      y1="4"
                                      x2="18"
                                      y2="32"
                                      stroke="currentColor"
                                      strokeWidth="3.2"
                                      strokeLinecap="round"
                                    ></line>
                                    <line
                                      x1="4"
                                      y1="18"
                                      x2="32"
                                      y2="18"
                                      stroke="currentColor"
                                      strokeWidth="3.2"
                                      strokeLinecap="round"
                                    ></line>
                                    <line
                                      x1="8.1"
                                      y1="8.1"
                                      x2="27.9"
                                      y2="27.9"
                                      stroke="currentColor"
                                      strokeWidth="3.2"
                                      strokeLinecap="round"
                                    ></line>
                                    <line
                                      x1="27.9"
                                      y1="8.1"
                                      x2="8.1"
                                      y2="27.9"
                                      stroke="currentColor"
                                      strokeWidth="3.2"
                                      strokeLinecap="round"
                                    ></line>
                                    <circle
                                      cx="18"
                                      cy="18"
                                      r="2.8"
                                      fill="currentColor"
                                    ></circle>
                                  </svg>
                                </div>
                                <div
                                  className="row-start-1 col-start-2 relative flex flex-col justify-center"
                                >
                                  <div
                                    className="flex items-center tracking-tight font-extrabold text-[1.1rem] sm:text-xl lg:text-[1.35rem] leading-none"
                                  >
                                    <span className="text-[#1C2421]">EK</span
                                    ><span className="text-[#EB5E28]">hum</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="flex items-center gap-1 w-full p-0.5 rounded bg-green-50 text-green-700"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-layout-dashboard w-2.5 h-2.5 text-green-600"
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
                              ><span className="text-[5px] font-bold text-green-700"
                                >Dashboard</span
                              >
                            </div>
                            <div
                              className="flex items-center gap-1 w-full p-0.5 rounded text-gray-400"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-megaphone w-2.5 h-2.5 text-gray-400"
                                aria-hidden="true"
                              >
                                <path
                                  d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"
                                ></path>
                                <path
                                  d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"
                                ></path>
                                <path d="M8 6v8"></path></svg
                              ><span className="text-[5px] font-bold text-gray-500"
                                >Campaigns</span
                              >
                            </div>
                            <div
                              className="flex items-center gap-1 w-full p-0.5 rounded text-gray-400"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-users w-2.5 h-2.5 text-gray-400"
                                aria-hidden="true"
                              >
                                <path
                                  d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                                ></path>
                                <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                <circle cx="9" cy="7" r="4"></circle></svg
                              ><span className="text-[5px] font-bold text-gray-500"
                                >Donors</span
                              >
                            </div>
                            <div
                              className="flex items-center gap-1 w-full p-0.5 rounded text-gray-400"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-message-square w-2.5 h-2.5 text-gray-400"
                                aria-hidden="true"
                              >
                                <path
                                  d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"
                                ></path></svg
                              ><span className="text-[5px] font-bold text-gray-500"
                                >Communications</span
                              >
                            </div>
                            <div
                              className="flex items-center gap-1 w-full p-0.5 rounded text-gray-400"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-shield w-2.5 h-2.5 text-gray-400"
                                aria-hidden="true"
                              >
                                <path
                                  d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                                ></path></svg
                              ><span className="text-[5px] font-bold text-gray-500"
                                >Compliance</span
                              >
                            </div>
                            <div
                              className="flex items-center gap-1 w-full p-0.5 rounded text-gray-400"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-file-text w-2.5 h-2.5 text-gray-400"
                                aria-hidden="true"
                              >
                                <path
                                  d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
                                ></path>
                                <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                <path d="M10 9H8"></path>
                                <path d="M16 13H8"></path>
                                <path d="M16 17H8"></path></svg
                              ><span className="text-[5px] font-bold text-gray-500"
                                >Reports</span
                              >
                            </div>
                          </div>
                          <div className="flex-1 p-3 flex flex-col">
                            <div className="flex justify-between items-end mb-2">
                              <div>
                                <div
                                  className="text-[7px] font-bold text-gray-500 mb-0.5 uppercase tracking-wider"
                                >
                                  Total Donations
                                </div>
                                <div className="text-gray-900 text-lg font-black">
                                  ₹ 12,48,500
                                </div>
                              </div>
                              <div
                                className="text-[7px] text-green-600 font-bold bg-green-50 px-1.5 py-0.5 rounded"
                              >
                                ↑ 24% this month
                              </div>
                            </div>
                            <div
                              className="w-full flex-1 mt-1 flex items-end overflow-hidden relative"
                            >
                              <svg
                                className="w-full h-full text-green-400 opacity-20 absolute bottom-0"
                                viewBox="0 0 100 30"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M0,30 L0,15 C20,15 30,25 40,20 C50,15 60,5 70,10 C80,15 90,5 100,0 L100,30 Z"
                                  fill="currentColor"
                                ></path></svg
                              ><svg
                                className="w-full h-full text-green-500 absolute bottom-0 z-10"
                                viewBox="0 0 100 30"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M0,15 C20,15 30,25 40,20 C50,15 60,5 70,10 C80,15 90,5 100,0"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2.5"
                                  strokeLinecap="round"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="w-[110%] -ml-[5%] h-2.5 bg-gray-300 rounded-b-lg shadow-sm border-t border-gray-400 relative"
                      >
                        <div
                          className="w-12 h-1 bg-gray-400 rounded-b-md mx-auto"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-green-100/50">
                    <div
                      className="text-center w-full mb-3 text-[10px] font-bold text-green-600 tracking-widest uppercase"
                    >
                      For Non-Profits
                    </div>
                    <ul className="space-y-2">
                      <li
                        className="flex items-start text-xs lg:text-sm text-gray-600 font-medium leading-tight"
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
                          className="lucide lucide-circle-check lucide-check-circle-2 w-4 h-4 text-green-500 mr-2 shrink-0 mt-0.5"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="m16 9-5.5 5.5L8 12"></path></svg
                        >Zero-cost entry for emerging charities
                      </li>
                      <li
                        className="flex items-start text-xs lg:text-sm text-gray-600 font-medium leading-tight"
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
                          className="lucide lucide-circle-check lucide-check-circle-2 w-4 h-4 text-green-500 mr-2 shrink-0 mt-0.5"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="m16 9-5.5 5.5L8 12"></path></svg
                        >Instant compliance setup
                      </li>
                      <li
                        className="flex items-start text-xs lg:text-sm text-gray-600 font-medium leading-tight"
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
                          className="lucide lucide-circle-check lucide-check-circle-2 w-4 h-4 text-green-500 mr-2 shrink-0 mt-0.5"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="m16 9-5.5 5.5L8 12"></path></svg
                        >Create &amp; manage campaigns
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="bg-orange-50/50 rounded-2xl p-4 sm:p-5 border border-orange-100 flex flex-col relative overflow-hidden group"
                >
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <div
                      className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center shadow-sm shrink-0"
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900">
                        Donors &amp; Patrons
                      </h3>
                      <p
                        className="text-[10px] sm:text-[11px] text-gray-500 font-medium uppercase tracking-wider"
                      >
                        Individuals and HNI donors
                      </p>
                    </div>
                  </div>
                  <div
                    className="w-full flex justify-center items-start sm:items-center py-2 sm:py-6 relative"
                  >
                    <div
                      className="w-full flex justify-center items-center scale-[0.65] sm:scale-100 origin-top sm:origin-center mt-2 sm:mt-0 -mb-[100px] sm:mb-0"
                    >
                      <div
                        className="absolute left-0 lg:-left-3 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-10 w-[105px] sm:w-[125px]"
                      >
                        <div
                          className="bg-white p-2.5 rounded-xl shadow-sm border border-orange-100 flex flex-col gap-1 items-start relative text-left"
                        >
                          <div className="flex items-center gap-1.5 mb-0.5">
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
                              className="lucide lucide-mouse-pointer-2 w-4 h-4 text-orange-500 shrink-0"
                              aria-hidden="true"
                            >
                              <path
                                d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"
                              ></path>
                            </svg>
                            <div
                              className="text-[10px] font-black text-gray-800 leading-tight"
                            >
                              Give in seconds
                            </div>
                          </div>
                          <div
                            className="text-[8px] font-medium text-gray-500 leading-tight"
                          >
                            via UPI, Card or Net Banking
                          </div>
                        </div>
                        <div
                          className="bg-white p-2.5 rounded-xl shadow-sm border border-orange-100 flex flex-col gap-1 items-start relative text-left"
                        >
                          <div className="flex items-center gap-1.5 mb-0.5">
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
                              className="lucide lucide-file-text w-4 h-4 text-orange-500 shrink-0"
                              aria-hidden="true"
                            >
                              <path
                                d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
                              ></path>
                              <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                              <path d="M10 9H8"></path>
                              <path d="M16 13H8"></path>
                              <path d="M16 17H8"></path>
                            </svg>
                            <div
                              className="text-[10px] font-black text-gray-800 leading-tight"
                            >
                              Get instant 80G receipt
                            </div>
                          </div>
                          <div
                            className="text-[8px] font-medium text-gray-500 leading-tight"
                          >
                            on WhatsApp
                          </div>
                        </div>
                        <div
                          className="bg-white p-2.5 rounded-xl shadow-sm border border-orange-100 flex flex-col gap-1 items-start relative text-left"
                        >
                          <div className="flex items-center gap-1.5 mb-0.5">
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
                              className="lucide lucide-calendar-days w-4 h-4 text-orange-500 shrink-0"
                              aria-hidden="true"
                            >
                              <path d="M8 2v3"></path>
                              <path d="M16 2v3"></path>
                              <rect
                                x="3"
                                y="3"
                                width="18"
                                height="18"
                                rx="2"
                              ></rect>
                              <path d="M3 9h18"></path>
                              <path d="M8 13h.01"></path>
                              <path d="M12 13h.01"></path>
                              <path d="M16 13h.01"></path>
                              <path d="M8 17h.01"></path>
                              <path d="M12 17h.01"></path>
                              <path d="M16 17h.01"></path>
                            </svg>
                            <div
                              className="text-[10px] font-black text-gray-800 leading-tight"
                            >
                              Track all
                            </div>
                          </div>
                          <div
                            className="text-[8px] font-medium text-gray-500 leading-tight"
                          >
                            your donations in one place
                          </div>
                        </div>
                      </div>
                      <div
                        className="absolute right-0 lg:-right-3 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-10 w-[105px] sm:w-[125px]"
                      >
                        <div
                          className="bg-white p-2.5 rounded-xl shadow-sm border border-orange-100 flex flex-col gap-1 items-start relative text-left"
                        >
                          <div className="flex items-center gap-1.5 mb-0.5">
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
                              className="lucide lucide-bell w-4 h-4 text-orange-500 shrink-0"
                              aria-hidden="true"
                            >
                              <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                              <path
                                d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"
                              ></path>
                            </svg>
                            <div
                              className="text-[10px] font-black text-gray-800 leading-tight"
                            >
                              Receive
                            </div>
                          </div>
                          <div
                            className="text-[8px] font-medium text-gray-500 leading-tight"
                          >
                            updates on real impact
                          </div>
                        </div>
                        <div
                          className="bg-white p-2.5 rounded-xl shadow-sm border border-orange-100 flex flex-col gap-1 items-start relative text-left"
                        >
                          <div className="flex items-center gap-1.5 mb-0.5">
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
                              className="lucide lucide-refresh-cw w-4 h-4 text-orange-500 shrink-0"
                              aria-hidden="true"
                            >
                              <path
                                d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"
                              ></path>
                              <path d="M21 3v5h-5"></path>
                              <path
                                d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"
                              ></path>
                              <path d="M8 16H3v5"></path>
                            </svg>
                            <div
                              className="text-[10px] font-black text-gray-800 leading-tight"
                            >
                              Manage
                            </div>
                          </div>
                          <div
                            className="text-[8px] font-medium text-gray-500 leading-tight"
                          >
                            recurring pledges easily
                          </div>
                        </div>
                        <div
                          className="bg-white p-2.5 rounded-xl shadow-sm border border-orange-100 flex flex-col gap-1 items-start relative text-left"
                        >
                          <div className="flex items-center gap-1.5 mb-0.5">
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
                              className="lucide lucide-download w-4 h-4 text-orange-500 shrink-0"
                              aria-hidden="true"
                            >
                              <path d="M12 15V3"></path>
                              <path
                                d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                              ></path>
                              <path d="m7 10 5 5 5-5"></path>
                            </svg>
                            <div
                              className="text-[10px] font-black text-gray-800 leading-tight"
                            >
                              Download
                            </div>
                          </div>
                          <div
                            className="text-[8px] font-medium text-gray-500 leading-tight"
                          >
                            annual tax bundle (80G)
                          </div>
                        </div>
                      </div>
                      <div
                        className="w-[155px] h-[310px] bg-white rounded-[32px] border-[7px] border-gray-900 shadow-xl relative overflow-hidden flex flex-col z-0 mx-auto"
                      >
                        <div
                          className="w-14 h-4 bg-gray-900 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-xl z-20"
                        ></div>
                        <div
                          className="pt-8 pb-3 px-3 text-center border-b border-gray-50 flex flex-col items-center shrink-0"
                        >
                          <div
                            className="relative grid grid-cols-[auto_1fr] gap-x-2 sm:gap-x-2.5 items-center select-none scale-[0.55] origin-center mb-1"
                          >
                            <div
                              className="row-start-1 col-start-1 relative w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex items-center justify-center lg:translate-y-[1.5px]"
                            >
                              <svg
                                viewBox="0 0 36 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-full h-full text-[#EB5E28] animate-[spin_10s_linear_infinite]"
                              >
                                <line
                                  x1="18"
                                  y1="4"
                                  x2="18"
                                  y2="32"
                                  stroke="currentColor"
                                  strokeWidth="3.2"
                                  strokeLinecap="round"
                                ></line>
                                <line
                                  x1="4"
                                  y1="18"
                                  x2="32"
                                  y2="18"
                                  stroke="currentColor"
                                  strokeWidth="3.2"
                                  strokeLinecap="round"
                                ></line>
                                <line
                                  x1="8.1"
                                  y1="8.1"
                                  x2="27.9"
                                  y2="27.9"
                                  stroke="currentColor"
                                  strokeWidth="3.2"
                                  strokeLinecap="round"
                                ></line>
                                <line
                                  x1="27.9"
                                  y1="8.1"
                                  x2="8.1"
                                  y2="27.9"
                                  stroke="currentColor"
                                  strokeWidth="3.2"
                                  strokeLinecap="round"
                                ></line>
                                <circle
                                  cx="18"
                                  cy="18"
                                  r="2.8"
                                  fill="currentColor"
                                ></circle>
                              </svg>
                            </div>
                            <div
                              className="row-start-1 col-start-2 relative flex flex-col justify-center"
                            >
                              <div
                                className="flex items-center tracking-tight font-extrabold text-[1.1rem] sm:text-xl lg:text-[1.35rem] leading-none"
                              >
                                <span className="text-[#1C2421]">EK</span
                                ><span className="text-[#EB5E28]">hum</span>
                              </div>
                            </div>
                          </div>
                          <div
                            className="text-xs font-black text-gray-800 leading-tight"
                          >
                            Thank you
                          </div>
                          <div className="text-[9px] text-gray-500 font-medium">
                            for your support! 🎉
                          </div>
                        </div>
                        <div
                          className="flex-1 px-3.5 py-3.5 flex flex-col justify-center items-center bg-gray-50/50"
                        >
                          <div
                            className="bg-green-50 border border-green-100 rounded-xl p-3 w-full text-center mb-3.5 shadow-sm"
                          >
                            <div
                              className="text-2xl font-black text-green-600 mb-0.5"
                            >
                              ₹ 2,500
                            </div>
                            <div className="text-[8px] text-gray-600 font-bold">
                              Education for All
                            </div>
                          </div>
                          <!-- Hidden until functional: View 80G Receipt
      */}
    </>
  );
}
