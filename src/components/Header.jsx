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
        ? 'h-14 sm:h-16 bg-[#f5f3ed]/95 backdrop-blur-md border-b border-[#d8d9cf] shadow-xs' 
        : 'h-15 sm:h-18 bg-[#f5f3ed]/90 backdrop-blur-sm border-b border-[#d8d9cf]/50'
    }`}>
      {/* Scroll Reading Progress Bar */}
      <div 
        className="absolute top-0 left-0 h-[2.5px] bg-[#e95126] transition-all duration-100 ease-out z-50 pointer-events-none"
        style={{ width: `${progress}%` }}
      />

      <div className="max-w-[1360px] mx-auto h-full px-3.5 xs:px-5 sm:px-8 lg:px-12 flex items-center justify-between gap-2">
        {/* Wordmark */}
        <a 
          href="#" 
          className="text-xl xs:text-2xl sm:text-3xl font-extrabold tracking-tight text-[#222720] hover:opacity-85 transition-opacity flex items-center shrink-0 py-1"
          aria-label="Ekhum Home"
        >
          ekhum<span className="text-[#e95126]">.</span>
        </a>

        {/* Desktop & Tablet Navigation */}
        <nav className="hidden md:flex items-center space-x-3.5 lg:space-x-6 xl:space-x-8 text-[11px] lg:text-xs font-semibold uppercase tracking-wider text-[#66695f]">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`relative py-1.5 transition-colors duration-200 whitespace-nowrap ${
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

        {/* Actions & Mobile Menu Toggle */}
        <div className="flex items-center space-x-1.5 xs:space-x-2.5 sm:space-x-3 shrink-0">
          <button
            onClick={onOpenDemo}
            className="group px-3 xs:px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#222720] text-white hover:bg-[#e95126] text-[11px] xs:text-xs font-semibold transition-all duration-300 transform active:scale-95 hover:-translate-y-0.5 flex items-center gap-1.5 sm:gap-2 shadow-xs cursor-pointer min-h-[36px] sm:min-h-[40px]"
          >
            <span className="hidden 2xs:inline">Let’s talk</span>
            <span className="2xs:hidden">Talk</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-[#222720] hover:text-[#e95126] hover:bg-[#d8d9cf]/40 active:scale-95 transition-all focus:outline-none cursor-pointer min-w-[40px] min-h-[40px] flex items-center justify-center"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 top-[56px] sm:top-[64px] bg-black/50 backdrop-blur-xs z-40 md:hidden"
            />

            {/* Menu Sheet */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-full left-0 right-0 bg-[#f5f3ed] border-b border-[#d8d9cf] px-5 xs:px-6 py-6 shadow-2xl z-50 md:hidden space-y-4 max-h-[calc(100dvh-64px)] overflow-y-auto pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))]"
            >
              <div className="space-y-1 divide-y divide-[#d8d9cf]/40">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-3.5 text-base font-medium transition-colors ${
                      activeSection === item.id 
                        ? 'text-[#e95126] font-bold' 
                        : 'text-[#222720] hover:text-[#e95126]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className={`w-4 h-4 transition-transform ${
                      activeSection === item.id ? 'text-[#e95126] translate-x-1' : 'text-[#66695f]/50'
                    }`} />
                  </a>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDemo();
                  }}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#e95126] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md active:scale-98 transition-all cursor-pointer min-h-[48px]"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Book an Interactive Walkthrough</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
