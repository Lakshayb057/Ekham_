import React from 'react';
import { ShieldCheck, Heart } from 'lucide-react';

export default function Footer({ onOpenDemo }) {
  return (
    <footer className="bg-[#f5f3ed] border-t border-[#d8d9cf] py-6 pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))] text-[#222720] select-none text-xs">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 space-y-4">
        
        {/* Top Row: Brand & Tagline + Navigation */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <a href="#" className="text-xl font-black tracking-tight text-[#222720] hover:opacity-85 transition-opacity">
              ekhum<span className="text-[#e95126]">.</span>
            </a>
            <span className="px-2 py-0.5 rounded-full bg-[#dce4d3] text-[#222720] text-[9px] font-bold uppercase tracking-wider">
              India Edition
            </span>
            <span className="hidden sm:inline text-[#c0c2b8]">·</span>
            <p className="text-xs text-[#66695f] font-normal w-full sm:w-auto">
              Next-generation donation and compliance infrastructure built for India’s ambitious non-profits.
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-6 font-semibold text-[#44483e] shrink-0">
            <a href="#platform" className="hover:text-[#e95126] transition-colors py-1">How it works</a>
            <a href="#technology" className="hover:text-[#e95126] transition-colors py-1">Technology</a>
            <a href="#trust" className="hover:text-[#e95126] transition-colors py-1">Trust</a>
            <a href="#calculator" className="hover:text-[#e95126] transition-colors py-1">Calculator</a>
            <button 
              onClick={onOpenDemo}
              className="hover:text-[#e95126] font-bold text-[#222720] transition-colors cursor-pointer py-1"
            >
              Contact
            </button>
          </nav>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-[#d8d9cf]/60" />

        {/* Bottom Row: Compliance & Copyright */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 text-[10px] xs:text-[11px] text-[#767b70]">
          <div className="flex items-center gap-1.5 flex-wrap">
            <ShieldCheck className="w-3.5 h-3.5 text-[#1b7a43] shrink-0" />
            <span>DPDP Act 2023 Compliant · 100% Indian Sovereign Infrastructure</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 xs:gap-4">
            <span>© {new Date().getFullYear()} Ekhum Technology Pvt Ltd.</span>
            <span className="text-[#c0c2b8]">·</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-[#e95126] fill-current inline" /> in India
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
