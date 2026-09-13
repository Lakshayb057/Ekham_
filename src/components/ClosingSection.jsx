import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ClosingSection({ onOpenDemo }) {
  const [formData, setFormData] = useState({
    organisation: '',
    name: '',
    email: '',
    interest: 'The complete platform',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const brief = `Ekhum walkthrough enquiry\n\nOrganisation: ${formData.organisation}\nName: ${formData.name}\nEmail: ${formData.email}\nInterest: ${formData.interest}\n\nPrepared locally. This enquiry has not been sent.`;
    
    const blob = new Blob([brief], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Ekhum-demo-enquiry.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 1000);

    setSubmitted(true);
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
  };

  return (
    <section className="bg-[#f5f3ed] pt-13 xs:pt-14 sm:pt-12 pb-2 xs:pb-3 sm:pb-12 px-3 xs:px-4 sm:px-8 lg:px-12 relative select-none w-full">
      <div className="max-w-[1360px] mx-auto space-y-2 xs:space-y-2.5 sm:space-y-6">
        
        {/* Mobile Inline Form (Small Screen Size) - Positioned directly above the orange box */}
        <div className="block sm:hidden w-full">
          <div className="bg-white rounded-2xl border border-[#d8d9cf] p-3.5 xs:p-4 sm:p-5 shadow-[0_6px_20px_rgba(34,39,32,0.05)] space-y-2.5">
            <div className="space-y-0.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#e95126] font-mono-tech">
                  Start a conversation
                </span>
                <span className="text-[9px] font-mono-tech text-[#8c9285]">DIRECT BRIEF</span>
              </div>
              <h3 className="text-sm xs:text-base font-bold text-[#222720] tracking-tight">
                Better starts with your team.
              </h3>
              <p className="text-[10.5px] xs:text-[11px] text-[#66695f] leading-snug">
                Prepare a short brief for your Ekhum walkthrough.
              </p>
            </div>

            {submitted ? (
              <div className="p-4 rounded-xl bg-[#dce4d3]/70 border border-[#4d5946]/30 text-center space-y-2.5">
                <CheckCircle2 className="w-7 h-7 text-[#1b7a43] mx-auto" />
                <h4 className="text-sm font-bold text-[#222720]">Brief Downloaded!</h4>
                <p className="text-[11px] text-[#555a4e]">
                  Your brief has been downloaded locally as a text file.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-1.5 rounded-full bg-[#222720] text-white text-[11px] font-semibold hover:bg-[#e95126] transition-colors cursor-pointer"
                >
                  Submit another brief
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2.5">
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-[#222720]">Organisation</label>
                  <input
                    type="text"
                    required
                    value={formData.organisation}
                    onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-[#d8d9cf] bg-[#fbfaf7] text-xs focus:outline-none focus:border-[#e95126] focus:bg-white transition-colors"
                    placeholder="Your organization name"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-[#222720]">Your name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-[#d8d9cf] bg-[#fbfaf7] text-xs focus:outline-none focus:border-[#e95126] focus:bg-white transition-colors"
                      placeholder="Full name"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-[#222720]">Work email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-[#d8d9cf] bg-[#fbfaf7] text-xs focus:outline-none focus:border-[#e95126] focus:bg-white transition-colors"
                      placeholder="name@org.org"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-[#222720]">What would you like to explore?</label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-[#d8d9cf] bg-[#fbfaf7] text-xs focus:outline-none focus:border-[#e95126] focus:bg-white transition-colors"
                  >
                    <option>The complete platform</option>
                    <option>Fundraising and payments</option>
                    <option>Compliance and reconciliation</option>
                    <option>Funder and outcome reporting</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-full bg-[#222720] hover:bg-[#e95126] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow transition-all duration-200 cursor-pointer min-h-[42px] mt-1"
                >
                  <span>Download enquiry brief</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Spacious Floating Gradient Card with 3D Edge Entry */}
        <motion.div 
          initial={{ opacity: 0, y: 30, rotateX: 10, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          style={{ perspective: '1200px' }}
          className="relative rounded-[16px] xs:rounded-[20px] sm:rounded-[32px] overflow-hidden bg-gradient-to-br from-[#e95126] via-[#ee592e] to-[#c73910] text-white px-4 xs:px-6 sm:px-14 lg:px-18 py-3.5 xs:py-4 sm:py-20 lg:py-24 min-h-0 sm:min-h-[300px] flex flex-col justify-center shadow-[0_12px_28px_rgba(233,81,38,0.2)] ring-1 ring-white/20 transform-gpu"
        >
          {/* Subtle Ambient Mesh Radial Glows & Cyber Dots */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/18 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-black/25 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(255,255,255,0.18)_0%,transparent_60%)] pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 sm:gap-10">
            
            {/* Minimal Punchy Headline */}
            <div className="space-y-0.5 sm:space-y-2.5 max-w-2xl text-center sm:text-left w-full sm:w-auto">
              <h2 className="text-base xs:text-lg sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.2] sm:leading-[1.15] text-white">
                Good deserves better. <span className="text-[#ffe0d1] font-normal block sm:inline">Let’s make it happen.</span>
              </h2>
            </div>

            {/* Interactive CTA Button: HIDDEN ON SMALL SCREENS (retained on sm: and up) */}
            <div className="hidden sm:flex w-full sm:w-auto shrink-0 pt-2 md:pt-0">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenDemo}
                className="w-full sm:w-auto group flex items-center justify-center gap-3 bg-white hover:bg-[#fff7f2] text-[#e95126] px-6 xs:px-7 py-3.5 sm:px-8 sm:py-4.5 rounded-full font-bold text-sm sm:text-base shadow-xl transition-all duration-200 cursor-pointer min-h-[48px] glow-orange"
                aria-label="Book an Ekhum demo"
              >
                <span>Book a demo</span>
                <span className="w-7 h-7 xs:w-8 xs:h-8 rounded-full bg-[#e95126] text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-300 shrink-0">
                  <ArrowRight className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
                </span>
              </motion.button>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
