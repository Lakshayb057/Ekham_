import React from 'react';
import Marquee from './Marquee';

export default function Hero({ onOpenDemo }) {
  return (
    <section
      id="hero"
      className="relative pt-[64px] w-full min-h-screen lg:h-screen flex flex-col justify-between overflow-hidden bg-[#FAF8F5]"
    >
      <div className="w-full flex-grow flex flex-col lg:flex-row items-stretch min-h-[420px] z-10 overflow-hidden">
        {/* Left Column Text Content */}
        <div
          className="w-full lg:w-[47%] xl:w-[45%] flex flex-col justify-center px-4 sm:px-10 lg:pl-14 xl:pl-20 lg:pr-6 py-4 sm:py-6 lg:py-3 z-20 flex-shrink-0"
        >
          <div className="mb-2 sm:mb-3.5">
            <span
              className="text-[10px] sm:text-xs font-extrabold tracking-[0.2em] text-[#EB5E28] uppercase"
            >
              A KINDER. STRONGER. BRIGHTER FUTURE.
            </span>
          </div>

          <h1
            className="text-4xl sm:text-6xl lg:text-[3.4rem] xl:text-[3.8rem] font-black text-[#14201A] tracking-[-0.04em] leading-[1.03] mb-3 sm:mb-5"
          >
            <span className="text-[#EB5E28]">Fundraising command centre</span><br />for NGOs.
          </h1>

          <p
            className="text-[11.5px] sm:text-sm md:text-[14.5px] lg:text-[15px] text-[#4A5550] leading-[1.5] max-w-lg mb-4 sm:mb-6 font-normal"
          >
            EKhum connects fundraising, donations, donors, campaigns,
            compliance, reporting, AI, and analytics on one intelligent
            platform — so NGOs can focus less on fragmented
            operations and more on creating meaningful impact.
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <button
              onClick={onOpenDemo}
              className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 text-xs sm:text-sm font-bold text-white bg-[#EB5E28] hover:bg-[#D84E1A] rounded-full shadow-[0_4px_16px_rgba(235,94,40,0.32)] hover:shadow-[0_6px_22px_rgba(235,94,40,0.42)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>Book a Demo</span>
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
                className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>

          <div
            className="flex justify-between items-center w-full pt-3 sm:pt-4 border-t border-[#E8E2D8] text-[8.5px] sm:text-xs font-semibold text-[#3D4842]"
          >
            <div className="flex items-center gap-1 sm:gap-1.5">
              <div
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#2A724E]/12 flex items-center justify-center text-[#2A724E] flex-shrink-0"
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
                  className="lucide lucide-check w-2 h-2 sm:w-2.5 sm:h-2.5 stroke-[3]"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
              <span>100% Charity-Owned Data</span>
            </div>

            <div className="flex items-center gap-1 sm:gap-1.5">
              <div
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#2A724E]/12 flex items-center justify-center text-[#2A724E] flex-shrink-0"
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
                  className="lucide lucide-check w-2 h-2 sm:w-2.5 sm:h-2.5 stroke-[3]"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
              <span>Instant 80G Certificates</span>
            </div>

            <div className="flex items-center gap-1 sm:gap-1.5">
              <div
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#2A724E]/12 flex items-center justify-center text-[#2A724E] flex-shrink-0"
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
                  className="lucide lucide-check w-2 h-2 sm:w-2.5 sm:h-2.5 stroke-[3]"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
              <span>Built for NGOs</span>
            </div>
          </div>
        </div>

        {/* Right Column Split Partition Image (Touching Navbar at Top) */}
        <div
          className="hero-split-image-col w-full lg:w-[53%] xl:w-[55%] relative flex-grow flex items-stretch z-10 overflow-hidden lg:-mt-[64px] min-h-[360px] lg:min-h-full"
        >
          <div
            className="hero-split-image-inner relative w-full h-full select-none overflow-hidden bg-[#1C2421]"
          >
            <div
              className="hero-image-enter hero-image-enter-right absolute top-0 bottom-0 right-0 w-[55%] bg-[#1C2421]"
            >
              <img
                src="./hero-right-clean.jpg"
                alt="Young woman in professional attire"
                className="w-full h-full object-cover object-[60%_center]"
              />
            </div>

            <div
              className="hero-image-enter hero-image-enter-left absolute top-0 bottom-0 left-0 w-[55%] bg-[#E5DCD2] z-10"
              style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)' }}
            >
              <img
                src="./hero-left-clean.jpg"
                alt="Young girl walking to school"
                className="w-full h-full object-cover object-[40%_center]"
              />
            </div>

            <div
              className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-30"
            >
              <div
                className="absolute inset-0 pointer-events-none scale-150"
                style={{ background: 'radial-gradient( circle at center, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 40% )' }}
              ></div>
              <div
                className="relative text-center px-4 w-full max-w-[450px]"
              >
                <h2
                  className="text-2xl sm:text-[42px] font-black text-white tracking-tight leading-[1.1] mb-2 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]"
                >
                  From Possibility<br />to
                  <span className="text-[#EB5E28]"> Reality.</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Black Horizontal Marquee Strip Attached at Bottom of Hero Section */}
      <div className="w-full z-30 flex-shrink-0">
        <Marquee />
      </div>
    </section>
  );
}
