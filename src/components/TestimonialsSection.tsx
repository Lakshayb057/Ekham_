import React from 'react';
import { ArrowRight } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="bg-[#0a0a0a] min-h-screen w-full flex items-center justify-center overflow-hidden font-sans py-12 lg:py-0">
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-10 h-full flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        
        {/* LEFT COLUMN - TEXT & CTA */}
        <div className="lg:w-[35%] flex flex-col justify-center">
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#EB5E28] mb-4">
            STORIES OF IMPACT
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-black text-white leading-[0.9] tracking-tighter mb-6 uppercase">
            Real<br/>
            People.<br/>
            Real<br/>
            <span className="text-[#EB5E28]">Change.</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-10 pr-4">
            From grassroots charities to individual donors and CSR partners, EKhum is helping build a kinder tomorrow — one story at a time.
          </p>

          <div className="w-8 h-[3px] bg-[#EB5E28] mb-10"></div>

          <button className="bg-[#EB5E28] hover:bg-[#D84E1A] text-white px-7 py-3.5 rounded-lg font-bold flex items-center gap-3 w-max transition-colors text-sm">
            Explore More Stories
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* RIGHT COLUMN - IMAGES GRID */}
        <div className="lg:w-[65%] w-full flex flex-col gap-4 max-h-[85vh] justify-center">
          
          {/* Top 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
            
            {/* Card 01 - NGO */}
            <div className="relative group overflow-hidden bg-[#111] rounded-sm min-h-[200px] lg:min-h-[240px]">
              <img src="https://images.unsplash.com/photo-1524293581917-878a6d017c71?auto=format&fit=crop&w=800&q=80" alt="NGO" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30"></div>
              
              {/* Red Corner */}
              <div className="absolute top-0 left-0 w-10 h-10 border-t-[6px] border-l-[6px] border-[#e11d48]"></div>

              {/* Top Right Number */}
              <div className="absolute top-4 right-5 text-right">
                <div className="text-2xl font-black text-white leading-none tracking-tighter">01</div>
                <div className="text-[8px] font-bold text-gray-300 uppercase tracking-widest mt-1">NGO</div>
              </div>

              {/* Bottom Left Content (Clean, smaller font in corner) */}
              <div className="absolute bottom-5 left-6 right-6">
                <div className="max-w-[85%]">
                  <p className="text-gray-300 text-[11px] sm:text-xs leading-relaxed italic mb-3 font-medium">
                    "EKhum helped us go digital without any IT team. Now we receive donations, issue 80G receipts and focus on our work."
                  </p>
                  <div className="text-[10px] font-black text-white uppercase tracking-wider mb-0.5">Seema Verma</div>
                  <div className="text-[9px] text-gray-400 font-medium">Founder, Udaan Foundation</div>
                </div>
              </div>
            </div>

            {/* Card 02 - DONOR */}
            <div className="relative group overflow-hidden bg-[#111] rounded-sm min-h-[200px] lg:min-h-[240px]">
              <img src="https://images.unsplash.com/photo-1531891570158-e71b35a485bc?auto=format&fit=crop&w=800&q=80" alt="Donor" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30"></div>
              
              {/* Top Right Number */}
              <div className="absolute top-4 right-5 text-right">
                <div className="text-2xl font-black text-white leading-none tracking-tighter">02</div>
                <div className="text-[8px] font-bold text-gray-300 uppercase tracking-widest mt-1">DONOR</div>
              </div>

              {/* Content Bottom Right Aligned */}
              <div className="absolute bottom-5 left-6 right-6 flex justify-end">
                <div className="max-w-[85%] text-right">
                  <p className="text-gray-300 text-[11px] sm:text-xs leading-relaxed italic mb-3 font-medium">
                    "I love how simple it is to donate and get my 80G receipt instantly on WhatsApp. I can also download my annual tax statement in one click."
                  </p>
                  <div className="text-[10px] font-black text-white uppercase tracking-wider mb-0.5">Rohan Mehta</div>
                  <div className="text-[9px] text-gray-400 font-medium">Monthly Donor</div>
                </div>
              </div>
            </div>

            {/* Card 03 - CSR PARTNER */}
            <div className="relative group overflow-hidden bg-[#111] rounded-sm min-h-[200px] lg:min-h-[240px]">
              <img src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=800&q=80" alt="CSR Partner" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30"></div>
              
              {/* Top Left Number */}
              <div className="absolute top-4 left-5">
                <div className="text-2xl font-black text-white leading-none tracking-tighter">03</div>
                <div className="text-[8px] font-bold text-gray-300 uppercase tracking-widest mt-1">CSR PARTNER</div>
              </div>

              {/* Content */}
              <div className="absolute bottom-5 left-6 right-6">
                <div className="max-w-[85%]">
                  <p className="text-gray-300 text-[11px] sm:text-xs leading-relaxed italic mb-3 font-medium">
                    "EKhum gives us complete visibility from grant allocation to on-ground impact. The utilization certificates and audit trails make our reporting seamless."
                  </p>
                  <div className="text-[10px] font-black text-white uppercase tracking-wider mb-0.5">Priya Nair</div>
                  <div className="text-[9px] text-gray-400 font-medium">CSR Head, Zenith Corp</div>
                </div>
              </div>
            </div>

            {/* Card 04 - BENEFICIARIES */}
            <div className="relative group overflow-hidden bg-[#111] rounded-sm min-h-[200px] lg:min-h-[240px]">
              <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80" alt="Beneficiaries" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30"></div>
              
              {/* Top Left Number */}
              <div className="absolute top-4 left-5">
                <div className="text-2xl font-black text-white leading-none tracking-tighter">04</div>
                <div className="text-[8px] font-bold text-gray-300 uppercase tracking-widest mt-1">BENEFICIARIES</div>
              </div>

              {/* Content */}
              <div className="absolute bottom-5 left-6 right-6">
                <div className="max-w-[85%]">
                  <p className="text-gray-300 text-[11px] sm:text-xs leading-relaxed italic mb-3 font-medium">
                    "Because of our supporters on EKhum, we now have a better learning environment and more opportunities for our future."
                  </p>
                  <div className="text-[10px] font-black text-white uppercase tracking-wider mb-0.5">Student</div>
                  <div className="text-[9px] text-gray-400 font-medium">Rural Education Program</div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Thumbnails */}
          <div className="grid grid-cols-3 gap-4 h-[90px] shrink-0">
            {/* Thumb 1 */}
            <div className="relative group overflow-hidden bg-[#111] rounded-sm cursor-pointer">
              <img src="https://images.unsplash.com/photo-1542887800-faca0261c9e1?auto=format&fit=crop&w=400&q=80" alt="Communities" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <span className="absolute bottom-3 left-4 text-[11px] font-bold text-white leading-tight">
                Stronger<br/>Communities
              </span>
            </div>
            
            {/* Thumb 2 */}
            <div className="relative group overflow-hidden bg-[#111] rounded-sm cursor-pointer">
              <img src="https://images.unsplash.com/photo-1518398046578-8cca57782e17?auto=format&fit=crop&w=400&q=80" alt="Opportunities" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <span className="absolute bottom-3 left-4 text-[11px] font-bold text-white leading-tight">
                Greater<br/>Opportunities
              </span>
            </div>

            {/* Thumb 3 */}
            <div className="relative group overflow-hidden bg-[#111] rounded-sm cursor-pointer">
              <img src="https://images.unsplash.com/photo-1603833785160-b9df56d2baeb?auto=format&fit=crop&w=400&q=80" alt="Futures" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <span className="absolute bottom-3 left-4 text-[11px] font-bold text-white leading-tight">
                Brighter<br/>Futures
              </span>
              {/* Right Orange Line decoration */}
              <div className="absolute bottom-3 right-4 w-[2px] h-6 bg-[#EB5E28]"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
