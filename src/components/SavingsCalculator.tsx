import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, IndianRupee, Clock, TrendingUp, Leaf } from 'lucide-react';
import confetti from 'canvas-confetti';

interface SavingsCalculatorProps {
  onOpenDemoModal: () => void;
}

export const SavingsCalculator: React.FC<SavingsCalculatorProps> = ({ onOpenDemoModal }) => {
  const [monthlyVolume, setMonthlyVolume] = useState<number>(1500000); // 15 Lakhs default
  const [monthlyDonations, setMonthlyDonations] = useState<number>(450);
  const [currentFeePercent, setCurrentFeePercent] = useState<number>(5.5);
  const [staffComplianceHours, setStaffComplianceHours] = useState<number>(60);

  const calculations = useMemo(() => {
    const ekhumFeePercent = 1.8;
    const currentPlatformCostMonthly = (monthlyVolume * currentFeePercent) / 100;
    const ekhumPlatformCostMonthly = (monthlyVolume * ekhumFeePercent) / 100;
    const monthlyPlatformSavings = Math.max(0, currentPlatformCostMonthly - ekhumPlatformCostMonthly);
    
    const hourlyCost = 350;
    const monthlyComplianceHoursSaved = Math.round(staffComplianceHours * 0.85); 
    const monthlyStaffSavings = monthlyComplianceHoursSaved * hourlyCost;
    
    const avgTicket = monthlyVolume / Math.max(1, monthlyDonations);
    const retainedDonorsPerMonth = Math.round(monthlyDonations * 0.12);
    const retainedValueMonthly = retainedDonorsPerMonth * avgTicket * 0.5;

    const totalAnnualSavings = (monthlyPlatformSavings + monthlyStaffSavings) * 12;

    return {
      monthlyPlatformSavings: Math.round(monthlyPlatformSavings),
      totalAnnualSavings: Math.round(totalAnnualSavings),
      hoursSavedAnnual: Math.round(monthlyComplianceHoursSaved * 12),
      retainedValueAnnual: Math.round(retainedValueMonthly * 12),
    };
  }, [monthlyVolume, monthlyDonations, currentFeePercent, staffComplianceHours]);

  const triggerCelebrate = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#EB5E28', '#2D7A4F', '#FAF8F5'],
    });
  };

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="calculator" className="py-12 sm:py-16 bg-[#FAF8F5] relative min-h-screen flex flex-col justify-center font-sans overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative pb-20">
        
        {/* Header */}
        <div className="mb-6 sm:mb-8 w-full border-b border-gray-200 pb-4 flex flex-col sm:flex-row items-start sm:items-end justify-between">
          <div className="max-w-2xl text-left">
            <span className="text-[10px] lg:text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#EB5E28] mb-2 block">
              SAVINGS & EFFICIENCY CALCULATOR
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1C2421] tracking-tight leading-[1.1] mb-2">
              See What Your Organization Could Save.
            </h2>
            <p className="text-sm sm:text-base text-[#555F59] leading-relaxed max-w-2xl">
              Eliminate high platform fees, eliminate manual compliance drag, and reclaim hours for your actual mission.
            </p>
          </div>
        </div>

        {/* Calculator Main Box (Restored 2-column interactive design) */}
        <div className="bg-white border border-[#E8E2D8] rounded-[2rem] p-5 sm:p-8 lg:p-10 shadow-card max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              {/* Slider 1 */}
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
                  min={100000}
                  max={10000000}
                  step={50000}
                  value={monthlyVolume}
                  onChange={(e) => setMonthlyVolume(Number(e.target.value))}
                  className="w-full h-2 bg-[#E8E2D8] rounded-lg appearance-none cursor-pointer accent-[#EB5E28]"
                />
                <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                  <span>₹1 Lakh</span>
                  <span>₹50 Lakhs</span>
                  <span>₹1 Crore</span>
                </div>
              </div>

              {/* Slider 2 */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs sm:text-sm font-bold text-[#1C2421]">
                    Monthly Transactions / Donors
                  </label>
                  <span className="text-sm font-extrabold text-[#1C2421] bg-gray-100 px-2.5 py-1 rounded-lg">
                    {monthlyDonations.toLocaleString()} donations
                  </span>
                </div>
                <input
                  type="range"
                  min={25}
                  max={5000}
                  step={25}
                  value={monthlyDonations}
                  onChange={(e) => setMonthlyDonations(Number(e.target.value))}
                  className="w-full h-2 bg-[#E8E2D8] rounded-lg appearance-none cursor-pointer accent-[#EB5E28]"
                />
                <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                  <span>25</span>
                  <span>2,500</span>
                  <span>5,000+</span>
                </div>
              </div>

              {/* Slider 3 */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs sm:text-sm font-bold text-[#1C2421]">
                    Current Aggregator / Gateway Fee
                  </label>
                  <span className="text-sm font-extrabold text-red-600 bg-red-50 px-2.5 py-1 rounded-lg">
                    {currentFeePercent.toFixed(1)}%
                  </span>
                </div>
                <input
                  type="range"
                  min={2.0}
                  max={10.0}
                  step={0.5}
                  value={currentFeePercent}
                  onChange={(e) => setCurrentFeePercent(Number(e.target.value))}
                  className="w-full h-2 bg-[#E8E2D8] rounded-lg appearance-none cursor-pointer accent-[#EB5E28]"
                />
                <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                  <span>2% (Basic PG)</span>
                  <span>5.5% (Aggregators)</span>
                  <span>10% (Crowdfunders)</span>
                </div>
              </div>

              {/* Slider 4 */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs sm:text-sm font-bold text-[#1C2421]">
                    Monthly Staff Hours on 80G Receipts & 10BD
                  </label>
                  <span className="text-sm font-extrabold text-[#1C2421] bg-gray-100 px-2.5 py-1 rounded-lg">
                    {staffComplianceHours} hours/mo
                  </span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={160}
                  step={5}
                  value={staffComplianceHours}
                  onChange={(e) => setStaffComplianceHours(Number(e.target.value))}
                  className="w-full h-2 bg-[#E8E2D8] rounded-lg appearance-none cursor-pointer accent-[#EB5E28]"
                />
                <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                  <span>10 hrs</span>
                  <span>80 hrs</span>
                  <span>160 hrs (Full-time)</span>
                </div>
              </div>
            </div>

            {/* Right Output Results Panel (Now Pure Black) */}
            <div className="lg:col-span-5 bg-[#111520] text-white rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-xl border border-gray-800 relative overflow-hidden h-full min-h-[360px]">
              
              {/* Subtle orange accent light */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#EB5E28]/10 rounded-full blur-3xl pointer-events-none"></div>

              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-800">
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                    Estimated Annual Impact
                  </span>
                  <button 
                    onClick={triggerCelebrate}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-[#EB5E28] text-white transition-colors"
                    title="Calculate"
                  >
                    <Calculator className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="mb-6">
                  <div className="text-[10px] text-[#EB5E28] font-bold uppercase tracking-wider mb-1">
                    Total Estimated Annual Savings
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {formatINR(calculations.totalAnnualSavings)}
                  </div>
                  <div className="text-[10px] text-gray-400 mt-1 font-medium">
                    Direct platform fees + operational hours saved
                  </div>
                </div>

                <div className="space-y-3.5 pt-4 border-t border-gray-800">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-gray-300 flex items-center gap-1.5">
                      <IndianRupee className="w-3.5 h-3.5 text-[#EB5E28]" /> Monthly Fee Savings:
                    </span>
                    <span className="font-bold text-white">
                      {formatINR(calculations.monthlyPlatformSavings)}/mo
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-gray-300 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-emerald-400" /> Compliance Hours Saved:
                    </span>
                    <span className="font-bold text-white">
                      ~{calculations.hoursSavedAnnual} hrs / year
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-gray-300 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-blue-400" /> Retained Donor Value:
                    </span>
                    <span className="font-bold text-white">
                      +{formatINR(calculations.retainedValueAnnual)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-800">
                <button
                  onClick={() => {
                    triggerCelebrate();
                    onOpenDemoModal();
                  }}
                  className="w-full py-3 px-4 bg-[#EB5E28] hover:bg-[#D84E1A] text-white text-xs sm:text-sm font-bold rounded-xl flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <span>Claim Your Free Savings Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="absolute bottom-0 w-full bg-[#111520] py-3.5 sm:py-4 border-t border-gray-800">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-center items-center gap-4 px-4 sm:px-6 text-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center border border-gray-800 shadow-sm">
              <Leaf className="w-4 h-4 text-[#EB5E28]" />
            </div>
            <span className="text-sm font-bold text-white">
              Every rupee saved is a rupee that can do more good.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
