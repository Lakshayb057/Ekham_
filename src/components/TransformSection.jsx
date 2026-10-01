import React from 'react';

export default function TransformSection({ onOpenDemo }) {
  return (
<section
            className="transform-section relative w-full h-[calc(100vh-80px)] min-h-[600px] overflow-hidden bg-black flex items-center border-t border-white/5"
          >
            <div className="absolute top-0 right-0 w-full md:w-[75%] h-full">
              <img
                src="./beyond-1.jpg"
                alt="Impact"
                className="transform-bg-img absolute inset-0 w-full h-full object-cover"
                style={{filter: 'contrast(1.15) saturate(1.25) brightness(1.05)', opacity: '1'}}
              />
            </div>
            <div
              className="transform-gradient-overlay absolute inset-0 w-full h-full md:w-[70%] lg:w-[60%] pointer-events-none z-10"
            ></div>
            <svg
              className="hidden md:block absolute bottom-0 left-0 w-full h-full pointer-events-none z-20"
              viewBox="0 0 1400 800"
              fill="none"
              preserveAspectRatio="xMidYMid slice"
            >
              <path
                d="M -100,700 C 200,600 400,750 700,750 C 1000,750 1200,650 1500,700"
                stroke="#EB5E28"
                strokeWidth="1.5"
                strokeLinecap="round"
                pathLength="1"
                strokeDashoffset="0"
                strokeDasharray="0 1"
              ></path>
              <path
                d="M 1250,685 C 1270,685 1280,665 1280,655 C 1280,635 1260,635 1250,655 C 1240,635 1220,635 1220,655 C 1220,665 1230,685 1250,685 Z"
                stroke="#EB5E28"
                strokeWidth="1.5"
                fill="none"
              ></path>
            </svg>
            <div
              className="absolute top-8 right-8 md:top-12 md:right-12 z-30 text-right hidden sm:block"
            >
              <div
                className="text-[9px] font-bold tracking-[0.2em] text-white uppercase leading-[1.8] mb-2 drop-shadow-md"
              >
                STRONGER<br />PEOPLE<br />BRIGHTER<br />TOMORROWS
              </div>
              <div className="w-8 h-[1px] bg-white/60 ml-auto"></div>
            </div>
            <div
              className="transform-content-container relative z-30 w-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col justify-end pb-28 md:pb-0 md:justify-center h-full"
            >
              <div className="max-w-[400px] lg:max-w-[460px] xl:max-w-[500px]">
                <div className="flex items-center gap-4 mb-4">
                  <span
                    className="text-[#EB5E28] font-bold tracking-[0.2em] text-[10px] md:text-[11px] uppercase"
                    >BEYOND THE PLATFORM</span
                  >
                </div>
                <h2
                  className="text-4xl md:text-5xl lg:text-[60px] font-black tracking-[-0.03em] leading-[1.05] mb-4"
                >
                  <span className="text-white">Because impact</span><br /><span
                    className="text-[#EB5E28]"
                    >is personal.</span
                  >
                </h2>
                <p
                  className="text-[14px] md:text-[16px] lg:text-lg text-gray-300 leading-[1.6] font-medium max-w-[360px]"
                >
                  Behind every donation is a person, a family, and a future
                  worth moving forward.
                </p>
                <div className="mt-8 md:mt-12 flex items-center gap-4">
                  <svg
                    width="22"
                    height="34"
                    viewBox="0 0 24 36"
                    fill="none"
                    stroke="#4ade80"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-80"
                  >
                    <path d="M12 36 V 12"></path>
                    <path d="M12 24 C 6 24 2 18 2 12 C 8 12 12 18 12 24"></path>
                    <path
                      d="M12 18 C 18 18 22 10 22 4 C 16 4 12 10 12 18"
                    ></path>
                  </svg>
                  <div
                    className="text-[8px] md:text-[9px] font-bold tracking-[0.2em] text-gray-400 uppercase leading-[1.7]"
                  >
                    PEOPLE<br />PURPOSE<br />POSSIBILITIES
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-8 left-6 lg:left-12 z-30 flex gap-3">
              
{/* Hidden until functional: inactive control */}

{/* Hidden until functional: inactive control */}

{/* Hidden until functional: inactive control */}

{/* Hidden until functional: inactive control */}

            </div>
          </section>
  );
}
