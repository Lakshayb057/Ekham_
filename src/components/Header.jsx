import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X, Sparkles } from 'lucide-react';

export default function Header({ onOpenDemo }) {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setProgress((scrollY / totalHeight) * 100);
      }

      const sections = ['platform', 'technology', 'trust', 'funders', 'calculator'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 220 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on Escape key or window resize
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('resize', handleResize);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'Platform', href: '#platform', id: 'platform' },
    { label: 'Technology', href: '#technology', id: 'technology' },
    { label: 'Trust', href: '#trust', id: 'trust' },
    { label: 'For funders', href: '#funders', id: 'funders' },
    { label: 'Calculator', href: '#calculator', id: 'calculator' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'h-14 sm:h-16 md:h-18 bg-[#f5f3ed]/95 backdrop-blur-md border-b border-[#d8d9cf] shadow-xs' 
        : 'h-14 sm:h-16 md:h-20 bg-[#f5f3ed]/90 backdrop-blur-sm border-b border-[#d8d9cf]/40'
    }`}>
      {/* Scroll Reading Progress Bar */}
      <div 
        className="absolute top-0 left-0 h-[2.5px] bg-[#e95126] transition-all duration-100 ease-out z-50 pointer-events-none"
        style={{ width: `${progress}%` }}
      />

      <div className="max-w-[1360px] mx-auto h-full px-4 sm:px-6 md:px-10 lg:px-12 flex items-center justify-between">
        
        {/* Wordmark (Vertically centered) */}
        <a 
          href="#" 
          className="text-2xl sm:text-3xl font-black tracking-tight text-[#222720] hover:opacity-85 transition-opacity flex items-center shrink-0 leading-none select-none"
          aria-label="Ekhum Home"
        >
          ekhum<span className="text-[#e95126]">.</span>
        </a>

        {/* Desktop & Tablet Nav (> 768px) */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-7 xl:space-x-8 text-xs font-semibold uppercase tracking-wider text-[#66695f]">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`relative py-2 transition-colors duration-200 whitespace-nowrap ${
                activeSection === item.id ? 'text-[#e95126] font-bold' : 'hover:text-[#222720]'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.span 
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#e95126] rounded-full" 
                />
              )}
            </a>
          ))}
        </nav>

        {/* Right Actions Container */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          
          {/* Desktop/Tablet CTA */}
          <button
            onClick={onOpenDemo}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#222720] text-white hover:bg-[#e95126] text-xs font-semibold transition-all duration-300 transform active:scale-95 hover:-translate-y-0.5 shadow-xs cursor-pointer min-h-[40px]"
          >
            <span>Let’s talk</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Mobile CTA (Compact) */}
          <button
            onClick={onOpenDemo}
            className="sm:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#222720] text-white hover:bg-[#e95126] text-[11px] font-bold transition-all active:scale-95 shadow-xs cursor-pointer min-h-[34px]"
          >
            <span>Talk</span>
            <ArrowRight className="w-3 h-3" />
          </button>

          {/* Mobile Animated Hamburger / Close Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer ${
              mobileMenuOpen 
                ? 'bg-[#222720] text-white rotate-90' 
                : 'bg-[#e9ece2] text-[#222720] hover:bg-[#d8d9cf] active:scale-90'
            }`}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* Full-Screen Mobile Animated Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'calc(100dvh - 56px)' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-14 bg-[#f5f3ed] z-50 md:hidden flex flex-col justify-between px-6 py-8 border-b border-[#d8d9cf] overflow-y-auto pb-[calc(2rem+env(safe-area-inset-bottom,0px))]"
          >
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#e95126] px-1">
                Navigation
              </span>

              <nav className="divide-y divide-[#d8d9cf]/60">
                {navItems.map((item, idx) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 + 0.1, duration: 0.3 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-4 text-xl font-medium tracking-tight transition-colors ${
                      activeSection === item.id 
                        ? 'text-[#e95126] font-bold' 
                        : 'text-[#222720] hover:text-[#e95126]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className={`w-5 h-5 transition-transform ${
                      activeSection === item.id ? 'text-[#e95126] translate-x-1' : 'text-[#8c9285]'
                    }`} />
                  </motion.a>
                ))}
              </nav>
            </div>

            {/* Bottom Drawer CTA Block */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="pt-6 border-t border-[#d8d9cf]/80 space-y-3"
            >
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo();
                }}
                className="w-full py-4 px-6 rounded-2xl bg-[#e95126] text-white font-bold text-base flex items-center justify-center gap-3 shadow-lg active:scale-95 transition-all cursor-pointer min-h-[52px]"
              >
                <Sparkles className="w-5 h-5" />
                <span>Book a Live Demo</span>
              </button>

              <p className="text-center text-xs text-[#66695f]">
                DPDP Act 2023 Compliant · 100% Indian Sovereign Stack
              </p>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
