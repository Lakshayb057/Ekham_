import React, { useState } from 'react';

export default function CalculatorSection({ onOpenDemo }) {
  const [monthlyVolume, setMonthlyVolume] = useState(1500000);
  const [monthlyTransactions, setMonthlyTransactions] = useState(450);

  // Fixed aggregator fee at 8% as requested:
  // "make current aggregator fixed to 8% and remove these both staff and current aggregator / gatways fees"
  const currentAggregatorRate = 0.08; // 8% fixed industry benchmark
  const directPGPaymentRate = 0.018; // 1.8% direct payment gateway
  const feeSavingsRate = currentAggregatorRate - directPGPaymentRate; // 6.2% net platform fee saved

  const monthlyFeeSavings = Math.round(monthlyVolume * feeSavingsRate);
  const annualFeeSavings = monthlyFeeSavings * 12;

  // Compliance hours saved (avg ~0.12 hrs per transaction manual overhead, 85% automated)
  const complianceHoursSaved = Math.round(monthlyTransactions * 0.12 * 0.85 * 12);
  const operationalHoursSavings = complianceHoursSaved * 400; // estimated operational cost ₹400/hr

  const totalAnnualSavings = annualFeeSavings + operationalHoursSavings;
  const retainedDonorValue = Math.round(monthlyVolume * 12 * 0.06);

  const formatINR = (val) => {
    return '₹' + Number(Math.round(val)).toLocaleString('en-IN');
  };

  return (
    <section
      id="calculator"
      className="py-12 sm:py-16 bg-[#FAF8F5] relative min-h-screen flex flex-col justify-center font-sans overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative pb-20">
        <div className="mb-6 sm:mb-8 w-full border-b border-gray-200 pb-4 flex flex-col sm:flex-row items-start sm:items-end justify-between">
          <div className="w-full text-left">
            <span className="text-[10px] lg:text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#EB5E28] mb-2 block">
              SAVINGS &amp; EFFICIENCY CALCULATOR
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] xl:text-[2.45rem] font-extrabold text-[#1C2421] tracking-tight leading-[1.1] mb-2 sm:whitespace-nowrap">
              See What Your Organization Could Save.
            </h2>
            <p className="text-sm sm:text-base text-[#555F59] leading-relaxed max-w-3xl">
              Eliminate high platform fees, eliminate manual compliance drag, and reclaim hours for your actual mission.
            </p>
          </div>
        </div>

        <div className="bg-white border border-[#E8E2D8] rounded-[2rem] p-5 sm:p-8 lg:p-10 shadow-card max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: 2 Interactive Sliders + Fixed 8% Aggregator Callout */}
            <div className="lg:col-span-7 space-y-6">
              {/* Slider 1: Monthly Donation Volume */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs sm:text-sm font-bold text-[#1C2421]">
                    Monthly Donation Volume
                  </label>
                  <span className="text-sm font-extrabold text-[#EB5E28] bg-orange-50 px-2.5 py-1 rounded-lg border border-[#EB5E28]/20">
                    {formatINR(monthlyVolume)}
                  </span>
                </div>
                <input
                  type="range"
                  min="100000"
                  max="10000000"
                  step="50000"
                  className="w-full h-2 bg-[#E8E2D8] rounded-lg appearance-none cursor-pointer accent-[#EB5E28]"
                  value={monthlyVolume}
                  onChange={(e) => setMonthlyVolume(Number(e.target.value))}
                />
                <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                  <span>₹1 Lakh</span>
                  <span>₹50 Lakhs</span>
                  <span>₹1 Crore</span>
                </div>
              </div>

              {/* Slider 2: Monthly Transactions / Donors */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs sm:text-sm font-bold text-[#1C2421]">
                    Monthly Transactions / Donors
                  </label>
                  <span className="text-sm font-extrabold text-[#1C2421] bg-gray-100 px-2.5 py-1 rounded-lg">
                    {monthlyTransactions.toLocaleString('en-IN')} donations
                  </span>
                </div>
                <input
                  type="range"
                  min="25"
                  max="5000"
                  step="25"
                  className="w-full h-2 bg-[#E8E2D8] rounded-lg appearance-none cursor-pointer accent-[#EB5E28]"
                  value={monthlyTransactions}
                  onChange={(e) => setMonthlyTransactions(Number(e.target.value))}
                />
                <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                  <span>25</span>
                  <span>2,500</span>
                  <span>5,000+</span>
                </div>
              </div>

              {/* Fixed 8% Aggregator Benchmark Callout */}
              <div className="bg-[#FAF8F5] border border-[#E8E2D8] rounded-xl p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EB5E28]"></span>
                  <span className="font-bold text-[#1C2421]">Current Aggregator Fee:</span>
                  <span className="font-extrabold text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded text-[11px]">
                    8.0% Fixed
                  </span>
                </div>
                <div className="text-[11px] text-[#555F59] font-medium">
                  Direct PG: 1.8% • <strong className="text-emerald-700 font-bold">6.2% Platform Margin Reclaimed</strong>
                </div>
              </div>
            </div>

            {/* Right Column: Estimated Annual Impact */}
            <div className="lg:col-span-5 bg-[#111520] text-white rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-xl border border-gray-800 relative overflow-hidden h-full min-h-[360px]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#EB5E28]/10 rounded-full blur-3xl pointer-events-none"></div>
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-800">
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                    Estimated Annual Impact
                  </span>
                  <span className="text-[9px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 rounded">
                    8% vs EKhum
                  </span>
                </div>
                <div className="mb-6">
                  <div className="text-[10px] text-[#EB5E28] font-bold uppercase tracking-wider mb-1">
                    Total Estimated Annual Savings
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {formatINR(totalAnnualSavings)}
                  </div>
                  <div className="text-[10px] text-gray-400 mt-1 font-medium">
                    Direct platform fees + operational hours saved
                  </div>
                </div>
                <div className="space-y-3.5 pt-4 border-t border-gray-800">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-gray-300 flex items-center gap-1.5">
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
                        className="lucide lucide-indian-rupee w-3.5 h-3.5 text-[#EB5E28]"
                        aria-hidden="true"
                      >
                        <path d="M6 3h12"></path>
                        <path d="M6 8h12"></path>
                        <path d="m6 13 8.5 8"></path>
                        <path d="M6 13h3"></path>
                        <path d="M9 13c6.667 0 6.667-10 0-10"></path>
                      </svg>
                      Monthly Fee Savings:
                    </span>
                    <span className="font-bold text-white">
                      {formatINR(monthlyFeeSavings)} /mo
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-gray-300 flex items-center gap-1.5">
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
                        className="lucide lucide-clock w-3.5 h-3.5 text-emerald-400"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 6v6l4 2"></path>
                      </svg>
                      Compliance Hours Saved:
                    </span>
                    <span className="font-bold text-white">
                      ~{complianceHoursSaved.toLocaleString('en-IN')} hrs / year
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-gray-300 flex items-center gap-1.5">
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
                        className="lucide lucide-trending-up w-3.5 h-3.5 text-blue-400"
                        aria-hidden="true"
                      >
                        <path d="M16 7h6v6"></path>
                        <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                      </svg>
                      Retained Donor Value:
                    </span>
                    <span className="font-bold text-white">
                      +{formatINR(retainedDonorValue)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-800">
                <button
                  type="button"
                  onClick={onOpenDemo}
                  className="w-full py-2.5 px-4 bg-[#EB5E28] hover:bg-[#D84E1A] text-white text-xs font-bold rounded-xl transition-all duration-200 shadow-sm flex items-center justify-center gap-1.5"
                >
                  <span>Claim Your Free Savings Audit</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
                </div>
              </div>
            </div>
            <div
              className="absolute bottom-0 w-full bg-[#111520] py-3.5 sm:py-4 border-t border-gray-800"
            >
              <div
                className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-center items-center gap-4 px-4 sm:px-6 text-center"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center border border-gray-800 shadow-sm"
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
                      className="lucide lucide-leaf w-4 h-4 text-[#EB5E28]"
                      aria-hidden="true"
                    >
                      <path
                        d="M11 20a10 10 0 0010-10 25.9 25.9 0 00-1.04-7.281 1 1 0 00-1.755-.325C15.833 5.5 13 5.5 9.8 6.1A7 7 0 0011 20"
                      ></path>
                      <path
                        d="M2 21a5 5 0 012.911-4.544C7.613 15.212 8.351 15.24 11 13"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-white"
                    >Every rupee saved is a rupee that can do more good.</span
                  >
                </div>
              </div>
            </div>
          </section>
  );
}
