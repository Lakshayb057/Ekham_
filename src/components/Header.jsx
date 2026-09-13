import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Menu, X, Sparkles, ShieldCheck } from 'lucide-react';

export default function Header({ onOpenDemo }) {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('platform');
  const [hoveredNav, setHoveredNav] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Throttled scroll progress & elevated state tracking
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setScrolled(scrollY > 25);

          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            setProgress((scrollY / totalHeight) * 100);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Native IntersectionObserver for zero-reflow active nav indicator tracking
  useEffect(() => {
    const sections = [
      { id: 'hero-card', navId: 'platform' },
      { id: 'hero-section', navId: 'platform' },
      { id: 'scale-card', navId: 'platform' },
      { id: 'systems-card', navId: 'platform' },
      { id: 'partners-card', navId: 'partners' },
      { id: 'partner-organisations-section', navId: 'partners' },
      { id: 'journey-card', navId: 'platform' },
      { id: 'technology-card', navId: 'technology' },
      { id: 'technology', navId: 'technology' },
      { id: 'trust-card', navId: 'trust' },
      { id: 'trust', navId: 'trust' },
      { id: 'funders-card', navId: 'funders' },
      { id: 'funders', navId: 'funders' },
      { id: 'calculator-card', navId: 'calculator' },
      { id: 'calculator', navId: 'calculator' },
      { id: 'closing-card', navId: 'calculator' },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          const matched = sections.find((s) => s.id === visibleEntries[0].target.id);
          if (matched) {
            setActiveSection(matched.navId);
          }
        }
      },
      { rootMargin: '-20% 0px -40% 0px', threshold: [0, 0.2, 0.5] }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll handler for nav items
  const handleNavClick = (e, item) => {
    e.preventDefault();
    setActiveSection(item.id);
    const targetEl = document.getElementById(item.targetId) || document.getElementById(item.id);
    if (targetEl) {
      const top = Math.max(0, targetEl.getBoundingClientRect().top + window.pageYOffset);
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

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
    { label: 'Platform', targetId: 'hero-card', href: '#hero-card', id: 'platform', badge: '01' },
    { label: 'Partners', targetId: 'partners-card', href: '#partners-card', id: 'partners', badge: '02' },
    { label: 'Technology', targetId: 'technology-card', href: '#technology-card', id: 'technology', badge: '03' },
    { label: 'Trust', targetId: 'trust-card', href: '#trust-card', id: 'trust', badge: '04' },
    { label: 'For funders', targetId: 'funders-card', href: '#funders-card', id: 'funders', badge: '05' },
    { label: 'Calculator', targetId: 'calculator-card', href: '#calculator-card', id: 'calculator', badge: '06' },
  ];

  return (
    <header className="fixed top-2.5 sm:top-4 inset-x-0 w-full z-50 px-3 sm:px-6 pointer-events-none">
      {/* Suspended Floating Glass Capsule Navbar */}
      <motion.div
        initial={{ y: -25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto max-w-[1300px] mx-auto rounded-2xl sm:rounded-full transition-all duration-300 relative overflow-hidden ${
          scrolled
            ? 'bg-[#f5f3ed]/90 backdrop-blur-xl border border-white/95 shadow-[0_14px_40px_rgba(34,39,32,0.12),0_1px_3px_rgba(0,0,0,0.06)] py-2 sm:py-2.5 px-3.5 sm:px-6'
            : 'bg-[#f5f3ed]/80 backdrop-blur-lg border border-white/80 shadow-[0_8px_30px_rgba(34,39,32,0.06)] py-2.5 sm:py-3.5 px-4 sm:px-7'
        }`}
      >
        {/* Top Specular Glass Reflection Sheen */}
        <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/90 to-transparent pointer-events-none" />

        {/* Fixed Solid Orange Line Across Navbar Bottom (not moving with page scroll) */}
        <div className="absolute bottom-0 inset-x-0 h-[2.5px] bg-[#e95126] pointer-events-none" />

        <div className="flex items-center justify-between gap-3 sm:gap-6 w-full">
          
          {/* Brand Wordmark */}
          <div className="flex items-center shrink-0">
            <a
              href="#"
              className="text-2xl sm:text-[26px] font-black tracking-tight text-[#222720] select-none cursor-pointer focus:outline-none flex items-center leading-none"
              aria-label="Ekhum Home"
            >
              ekhum<span className="text-[#e95126]">.</span>
            </a>
          </div>

          {/* Desktop & Tablet Magnetic Sliding Nav */}
          <nav
            onMouseLeave={() => setHoveredNav(null)}
            className="hidden md:flex items-center gap-1 lg:gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#66695f] relative p-1 rounded-full bg-black/[0.02] border border-black/[0.03]"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const isHovered = hoveredNav === item.id;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  onMouseEnter={() => setHoveredNav(item.id)}
                  className={`relative px-3 sm:px-3.5 lg:px-4 py-1.5 rounded-full transition-colors duration-200 z-10 whitespace-nowrap cursor-pointer select-none flex items-center gap-1.5 ${
                    isActive
                      ? 'text-[#e95126] font-bold'
                      : isHovered
                      ? 'text-[#222720]'
                      : 'text-[#66695f] hover:text-[#222720]'
                  }`}
                >
                  {/* Magnetic Floating Pill Highlight with Crisp Orange Outline */}
                  {(isHovered || (isActive && !hoveredNav)) && (
                    <motion.span
                      layoutId="magneticNavPill"
                      className={`absolute inset-0 rounded-full z-[-1] shadow-xs ${
                        isActive
                          ? 'border border-[#e95126] bg-[#e95126]/10'
                          : 'bg-white/90 shadow-xs'
                      }`}
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                    />
                  )}

                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Container: Specular 3D CTA Button */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* 3D Specular CTA Button */}
            <motion.button
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenDemo}
              className="relative group overflow-hidden px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#222720] via-[#2d342b] to-[#222720] hover:from-[#e95126] hover:via-[#ee5d33] hover:to-[#c73910] text-white font-bold text-xs sm:text-[13px] tracking-tight shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer min-h-[38px] sm:min-h-[42px] flex items-center gap-2 border border-white/20"
            >
              {/* Shimmering Specular Sheen Beam */}
              <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:animate-tech-shimmer pointer-events-none" />

              <span>Let’s talk</span>
              <span className="w-5 h-5 rounded-full bg-white/15 text-white flex items-center justify-center group-hover:rotate-45 group-hover:bg-white group-hover:text-[#e95126] transition-all duration-300 shrink-0">
                <ArrowRight className="w-3 h-3" />
              </span>
            </motion.button>

            {/* Mobile 3D Animated Hamburger Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer shrink-0 border ${
                mobileMenuOpen
                  ? 'bg-[#222720] text-white border-black rotate-90 shadow-md'
                  : 'bg-white/90 text-[#222720] border-[#d8d9cf] hover:bg-[#eae8de] shadow-xs'
              }`}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </motion.button>

          </div>
        </div>
      </motion.div>

      {/* Floating 3D Mobile Navigation Sheet Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto max-w-[1280px] mx-auto mt-2 rounded-3xl bg-[#f5f3ed]/95 backdrop-blur-2xl border border-white/90 shadow-2xl p-5 sm:p-6 md:hidden overflow-hidden space-y-4"
          >
            {/* Header Badge */}
            <div className="flex items-center justify-between pb-2 border-b border-[#d8d9cf]/60 text-xs text-[#66695f]">
              <span className="font-bold font-mono-tech uppercase tracking-widest text-[#e95126] text-[10px]">
                Explore Architecture
              </span>
              <span className="font-mono text-[10px] text-[#8c9285]">
                100% Indian Sovereign
              </span>
            </div>

            {/* Staggered 3D Tile Nav Links */}
            <nav className="space-y-1.5">
              {navItems.map((item, idx) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 + 0.05, duration: 0.3 }}
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      handleNavClick(e, item);
                    }}
                    className={`flex items-center justify-between p-3.5 rounded-2xl transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#e95126] text-white shadow-md font-bold'
                        : 'bg-white/80 hover:bg-white text-[#222720] border border-black/5'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono font-bold ${
                        isActive ? 'bg-white/20 text-white' : 'bg-[#e9ece2] text-[#66695f]'
                      }`}>
                        {item.badge}
                      </span>
                      <span className="text-base tracking-tight">{item.label}</span>
                    </div>

                    <ArrowRight className={`w-4 h-4 transition-transform ${
                      isActive ? 'text-white translate-x-1' : 'text-[#8c9285]'
                    }`} />
                  </motion.a>
                );
              })}
            </nav>

            {/* Bottom Primary Drawer CTA */}
            <div className="pt-2 space-y-2">
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo();
                }}
                className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-[#e95126] to-[#d64117] text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-lg cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book Live Architecture Demo</span>
              </motion.button>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#767b70] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1b7a43]" />
                <span>DPDP Act 2023 Compliant · RBI-Authorized Gateways</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
