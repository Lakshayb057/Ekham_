import React from 'react';

export default function BottomCTA({ onOpenDemo }) {
  return (
<section
            className="relative w-full bg-[#0F1614] overflow-hidden font-sans"
          >
            <div
              className="absolute top-0 right-0 bottom-0 w-full lg:w-[60%] z-0 pointer-events-none"
            >
              <img
                src="./smiling_indian_girl_cta.png"
                alt="Smiling Girl"
                className="w-full h-full object-cover object-center contrast-125 brightness-110"
              />
              <div
                className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#0F1614] via-[#0F1614]/70 lg:via-[#0F1614]/60 to-transparent"
              ></div>
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0F1614] via-transparent to-[#0F1614]/30"
              ></div>
            </div>
            <div
              className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 pt-20 pb-36 sm:pb-12 lg:pt-28 lg:pb-12 flex flex-col lg:flex-row justify-between h-full min-h-[650px] sm:min-h-[580px]"
            >
              <div className="w-full lg:w-3/5 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span
                    className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#EB5E28]"
                    >THE NEXT CHAPTER STARTS HERE</span
                  >
                </div>
                <h2
                  className="text-4xl sm:text-5xl lg:text-5xl xl:text-5xl font-black text-white leading-[1.05] tracking-tight mb-3 lg:pr-20"
                >
                  A Kinder, Stronger Future<br />Starts with
                  <span className="text-[#EB5E28]">Connected Giving.</span>
                </h2>
                <p
                  className="text-sm sm:text-base text-gray-400 max-w-lg mb-5 leading-relaxed"
                >
                  Join the organizations, donors, and partners making
                  philanthropy more transparent, efficient, and impactful with
                  EKhum.
                </p>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
                  <button
                    className="bg-[#EB5E28] hover:bg-[#D84E1A] text-white px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-full font-bold flex items-center justify-center gap-1.5 sm:gap-2 transition-colors text-xs sm:text-sm w-full sm:w-auto"
                  >
                    Get Started Today<svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right w-3.5 h-3.5 sm:w-4 sm:h-4"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg></button
                  ><button
                    className="bg-transparent border border-gray-600 hover:border-gray-400 text-white px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-full font-bold flex items-center justify-center gap-1.5 sm:gap-2 transition-colors text-xs sm:text-sm w-full sm:w-auto"
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
                      className="lucide lucide-message-circle w-3.5 h-3.5 sm:w-4 sm:h-4"
                      aria-hidden="true"
                    >
                      <path
                        d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"
                      ></path></svg
                    >Talk to Our Team
                  </button>
                </div>
                <div
                  className="flex flex-row items-center justify-between sm:justify-start gap-1 sm:gap-8 w-full"
                >
                  <div className="flex items-center gap-1.5 sm:gap-3">
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
                      className="lucide lucide-users w-4 h-4 sm:w-6 sm:h-6 text-gray-400 shrink-0"
                      aria-hidden="true"
                    >
                      <path
                        d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                      ></path>
                      <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <circle cx="9" cy="7" r="4"></circle></svg
                    ><span
                      className="text-[9px] sm:text-xs text-gray-300 font-semibold leading-tight"
                      >Stronger<br />Communities</span
                    >
                  </div>
                  <div className="h-6 sm:h-8 w-px bg-gray-700 shrink-0"></div>
                  <div className="flex items-center gap-1.5 sm:gap-3">
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
                      className="lucide lucide-leaf w-4 h-4 sm:w-6 sm:h-6 text-gray-400 shrink-0"
                      aria-hidden="true"
                    >
                      <path
                        d="M11 20a10 10 0 0010-10 25.9 25.9 0 00-1.04-7.281 1 1 0 00-1.755-.325C15.833 5.5 13 5.5 9.8 6.1A7 7 0 0011 20"
                      ></path>
                      <path
                        d="M2 21a5 5 0 012.911-4.544C7.613 15.212 8.351 15.24 11 13"
                      ></path></svg
                    ><span
                      className="text-[9px] sm:text-xs text-gray-300 font-semibold leading-tight"
                      >More<br />Transparency</span
                    >
                  </div>
                  <div className="h-6 sm:h-8 w-px bg-gray-700 shrink-0"></div>
                  <div className="flex items-center gap-1.5 sm:gap-3">
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
                      className="lucide lucide-chart-column lucide-bar-chart-3 w-4 h-4 sm:w-6 sm:h-6 text-gray-400 shrink-0"
                      aria-hidden="true"
                    >
                      <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                      <path d="M18 17V9"></path>
                      <path d="M13 17V5"></path>
                      <path d="M8 17v-3"></path></svg
                    ><span
                      className="text-[9px] sm:text-xs text-gray-300 font-semibold leading-tight"
                      >Greater<br />Impact</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </section>
  );
}
