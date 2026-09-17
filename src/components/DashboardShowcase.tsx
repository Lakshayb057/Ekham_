import React, { useState } from 'react';
import { 
  ArrowRight, 
  LayoutDashboard, 
  Megaphone, 
  Users2, 
  FileCheck, 
  BarChart3, 
  MessageSquare, 
  FileText, 
  Settings,
  TrendingUp,
  Search,
  Bell,
  CheckCircle2
} from 'lucide-react';
import { BotanicalFlourish } from './BotanicalFlourish';

interface DashboardShowcaseProps {
  onOpenDemoModal: () => void;
}

export const DashboardShowcase: React.FC<DashboardShowcaseProps> = ({ onOpenDemoModal }) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'campaigns' | 'donors' | 'compliance'>('dashboard');
  const [selectedDonation, setSelectedDonation] = useState<string | null>(null);

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'campaigns', label: 'Campaigns', icon: Megaphone },
    { id: 'donors', label: 'Donors', icon: Users2 },
    { id: 'compliance', label: 'Compliance', icon: FileCheck },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'communications', label: 'Communications', icon: MessageSquare },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const recentDonations = [
    { name: 'Rohit Sharma', amount: '₹5,000', cause: 'Girl Child Education', time: '2m ago', cert: '80G-2026-0941' },
    { name: 'Priya Verma', amount: '₹1,000', cause: 'Clean Water Project', time: '14m ago', cert: '80G-2026-0940' },
    { name: 'Amit Kumar', amount: '₹2,500', cause: 'Nutrition Kits', time: '45m ago', cert: '80G-2026-0939' },
    { name: 'Sneha Patel', amount: '₹10,000', cause: 'Rural Health Clinic', time: '1h ago', cert: '80G-2026-0938' },
  ];

  return (
    <section id="solution" className="h-[100dvh] lg:h-screen lg:min-h-[700px] flex items-center justify-center bg-[#FAF8F5] relative overflow-hidden py-4 sm:py-8">
      {/* Botanical Flourish on Right */}
      <div className="absolute top-1/2 right-0 w-64 opacity-40 pointer-events-none transform translate-x-16 -translate-y-1/2">
        <BotanicalFlourish variant="muted" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-10 items-center">
          
          {/* Left Column: SaaS Dashboard Mockup */}
          <div className="lg:col-span-8 order-2 lg:order-1">
            <div className="bg-[#111A15] p-2 sm:p-3 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl border border-[#26372E]">
              
              {/* Dashboard Browser Frame */}
              <div className="bg-[#18241D] rounded-xl sm:rounded-[2rem] overflow-hidden border border-[#273B30]">
                
                {/* Dashboard Inner Grid */}
                <div className="grid grid-cols-12 min-h-[340px] sm:min-h-[460px]">
                  
                  {/* Left Sidebar */}
                  <div className="col-span-4 bg-[#14201A] p-2.5 sm:p-5 border-r border-[#24352B] flex flex-col justify-between">
                    <div>
                      {/* Sidebar Brand */}
                      <div className="flex items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6 px-1 sm:px-2">
                        <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-md sm:rounded-lg bg-[#EB5E28] flex items-center justify-center text-white font-bold text-[9px] sm:text-xs">
                          E
                        </div>
                        <span className="text-white font-bold text-[10px] sm:text-sm tracking-tight truncate">EKhum Cloud</span>
                      </div>

                      {/* Navigation Links */}
                      <div className="space-y-0.5 sm:space-y-1">
                        {sidebarItems.map((item) => {
                          const Icon = item.icon;
                          const isActive = activeTab === item.id;
                          return (
                            <button
                              key={item.id}
                              onClick={() => {
                                if (['dashboard', 'campaigns', 'donors', 'compliance'].includes(item.id)) {
                                  setActiveTab(item.id as any);
                                }
                              }}
                              className={`w-full flex items-center gap-1.5 sm:gap-2.5 px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg sm:rounded-xl text-[9px] sm:text-xs font-semibold transition-all ${
                                isActive 
                                  ? 'bg-[#EB5E28] text-white shadow-sm' 
                                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                              }`}
                            >
                              <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                              <span className="truncate">{item.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Bottom Status Badge */}
                    <div className="mt-2 sm:mt-4 p-2 sm:p-3 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl hidden sm:block">
                      <div className="flex items-center justify-between text-[11px] text-gray-400 mb-1">
                        <span>10BD Filing</span>
                        <span className="text-green-400 font-bold">Ready</span>
                      </div>
                      <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full w-[96%]"></div>
                      </div>
                    </div>
                  </div>

                  {/* Right Dashboard Area */}
                  <div className="col-span-8 bg-[#FBF9F5] p-3 sm:p-6 text-[#1C2421] flex flex-col justify-between overflow-hidden">
                    
                    <div>
                      {/* Top Bar */}
                      <div className="flex items-center justify-between pb-2 sm:pb-4 mb-2 sm:mb-4 border-b border-[#E8E2D8]">
                        <div className="relative w-full max-w-[100px] sm:max-w-xs">
                          <Search className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-400 absolute left-2 sm:left-2.5 top-1.5 sm:top-2.5" />
                          <input 
                            type="text" 
                            placeholder="Search..." 
                            className="w-full pl-6 sm:pl-8 pr-2 sm:pr-3 py-1 sm:py-1.5 text-[9px] sm:text-xs bg-white border border-[#E8E2D8] rounded-full focus:outline-none"
                            readOnly
                            value=""
                          />
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-2.5 ml-2">
                          <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-white border border-[#E8E2D8] flex items-center justify-center text-gray-600 relative flex-shrink-0">
                            <Bell className="w-2.5 h-2.5 sm:w-3.5 h-3.5" />
                            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#EB5E28] absolute top-0.5 right-0.5 sm:top-1 sm:right-1"></span>
                          </div>
                          <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-[#14201A] text-white flex items-center justify-center font-bold text-[8px] sm:text-xs flex-shrink-0">
                            TF
                          </div>
                        </div>
                      </div>

                      {/* Greeting */}
                      <div className="mb-2 sm:mb-4">
                        <h4 className="text-[11px] sm:text-lg font-extrabold text-[#1C2421] leading-tight truncate">
                          Good Morning!
                        </h4>
                        <p className="text-[8px] sm:text-[11px] text-[#6A756F] truncate hidden sm:block">
                          Here is your daily giving & compliance health summary.
                        </p>
                      </div>

                      {/* 4 Metric Pills */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2.5 mb-3 sm:mb-5">
                        <div className="bg-white p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl border border-[#E8E2D8] shadow-2xs">
                          <div className="text-[7.5px] sm:text-[10px] text-gray-500 font-medium truncate">Total Donations</div>
                          <div className="text-[10px] sm:text-sm font-bold text-[#1C2421] truncate">₹17.4L</div>
                        </div>
                        <div className="bg-white p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl border border-[#E8E2D8] shadow-2xs">
                          <div className="text-[7.5px] sm:text-[10px] text-gray-500 font-medium truncate">Donors</div>
                          <div className="text-[10px] sm:text-sm font-bold text-[#1C2421] truncate">3,260</div>
                        </div>
                        <div className="bg-white p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl border border-[#E8E2D8] shadow-2xs">
                          <div className="text-[7.5px] sm:text-[10px] text-gray-500 font-medium truncate">Campaigns</div>
                          <div className="text-[10px] sm:text-sm font-bold text-[#1C2421] truncate">18</div>
                        </div>
                        <div className="bg-white p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl border border-[#E8E2D8] shadow-2xs">
                          <div className="text-[7.5px] sm:text-[10px] text-gray-500 font-medium truncate">Retention</div>
                          <div className="text-[10px] sm:text-sm font-bold text-[#2A724E] truncate">98%</div>
                        </div>
                      </div>

                      {/* Chart & Recent Donations Split */}
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-3.5">
                        
                        {/* Trend Chart (SVG Area) */}
                        <div className="sm:col-span-7 bg-white p-2 sm:p-3 rounded-xl sm:rounded-2xl border border-[#E8E2D8]">
                          <div className="flex items-center justify-between mb-1 sm:mb-2">
                            <span className="text-[9px] sm:text-xs font-bold text-[#1C2421]">Trend</span>
                            <span className="text-[7.5px] sm:text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1 sm:px-2 py-0.5 rounded-full flex items-center gap-0.5">
                              <TrendingUp className="w-2 h-2 sm:w-2.5 sm:h-2.5" /> +32%
                            </span>
                          </div>
                          
                          {/* SVG Area Chart */}
                          <div className="h-12 sm:h-28 w-full pt-1 sm:pt-2">
                            <svg viewBox="0 0 240 90" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                              <defs>
                                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="#2A724E" stopOpacity="0.3" />
                                  <stop offset="100%" stopColor="#2A724E" stopOpacity="0.0" />
                                </linearGradient>
                              </defs>
                              {/* Filled curve */}
                              <path
                                d="M 10 75 Q 50 65 90 55 T 160 35 T 230 15 L 230 85 L 10 85 Z"
                                fill="url(#chartGrad)"
                              />
                              {/* Stroke curve */}
                              <path
                                d="M 10 75 Q 50 65 90 55 T 160 35 T 230 15"
                                fill="none"
                                stroke="#2A724E"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                              />
                              {/* Data points */}
                              <circle cx="90" cy="55" r="3" fill="#2A724E" className="animate-pulse" />
                              <circle cx="160" cy="35" r="3" fill="#2A724E" className="animate-pulse" />
                              <circle cx="230" cy="15" r="4" fill="#EB5E28" stroke="white" strokeWidth="2" />
                            </svg>
                          </div>
                          <div className="flex justify-between text-[7.5px] sm:text-[9px] text-gray-400 mt-1">
                            <span>Jan</span>
                            <span>Feb</span>
                            <span>Mar</span>
                            <span className="hidden sm:inline">Apr</span>
                            <span className="hidden sm:inline">May</span>
                            <span>Jun</span>
                          </div>
                        </div>

                        {/* Recent Donations List */}
                        <div className="sm:col-span-5 bg-white p-2 sm:p-3 rounded-xl sm:rounded-2xl border border-[#E8E2D8]">
                          <div className="text-[9px] sm:text-xs font-bold text-[#1C2421] mb-1 sm:mb-2">Recent</div>
                          <div className="space-y-1 sm:space-y-1.5">
                            {recentDonations.map((d, i) => (
                              <div 
                                key={i} 
                                onClick={() => setSelectedDonation(d.name === selectedDonation ? null : d.name)}
                                className={`flex items-center justify-between p-1 sm:p-1.5 rounded-lg cursor-pointer transition-colors ${
                                  selectedDonation === d.name ? 'bg-orange-50' : 'hover:bg-gray-50'
                                }`}
                              >
                                <div className="flex items-center gap-1.5 overflow-hidden">
                                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#1C2421]/10 text-[#1C2421] text-[7.5px] sm:text-[9px] font-bold flex items-center justify-center flex-shrink-0">
                                    {d.name.charAt(0)}
                                  </div>
                                  <div className="truncate">
                                    <div className="text-[9px] sm:text-[11px] font-bold text-[#1C2421] truncate">{d.name}</div>
                                    <div className="text-[7.5px] sm:text-[9px] text-gray-400">{d.time}</div>
                                  </div>
                                </div>
                                <div className="text-right flex-shrink-0 ml-1">
                                  <div className="text-[9px] sm:text-[11px] font-bold text-[#1C2421]">{d.amount}</div>
                                  <div className="text-[7.5px] sm:text-[9px] text-emerald-700 font-semibold flex items-center gap-0.5 justify-end">
                                    <CheckCircle2 className="w-2 h-2 sm:w-2.5 sm:h-2.5" /> <span className="hidden sm:inline">80G</span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>
                    </div>

                    {/* Bottom Live Hint */}
                    <div className="mt-2 sm:mt-3 text-center">
                      <span className="text-[7.5px] sm:text-[10px] text-gray-400 font-medium">
                        Live synced with Payment Gateways & ITD API
                      </span>
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Copy & CTA */}
          <div className="lg:col-span-4 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 mb-1.5 sm:mb-3">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#EB5E28]">
                BUILT FOR IMPACT
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1C2421] tracking-tight leading-tight mb-2 sm:mb-5">
              A Smarter Way<br />
              to Manage Giving
            </h2>
            <p className="text-[13px] sm:text-base text-[#555F59] leading-snug sm:leading-relaxed mb-4 sm:mb-6 font-normal">
              Simple. Secure. Scalable. From campaign creation to compliance reporting, EKhum gives you everything you need — in one place.
            </p>
            <button
              onClick={onOpenDemoModal}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-[#1C2421] bg-white hover:bg-gray-50 border border-[#E8E2D8] rounded-full shadow-sm hover:shadow-md transition-all duration-200 group"
            >
              <span>See the Platform</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
