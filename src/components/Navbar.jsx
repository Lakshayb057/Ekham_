import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenDemo }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[64px] flex items-center transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-[#E5DCD0]/80 shadow-xs'
          : 'bg-[#FAF8F5] backdrop-blur-none border-transparent'
      }`}
    >
      <div className="header-inner w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a aria-label="EKHUM home" className="brand flex items-center justify-start" href="#hero">
          <img alt="EKHUM" className="brand-logo h-7 sm:h-8 w-auto object-contain" src="./ekhum-logo.png" />
        </a>

        {/* Centered Desktop Navigation & Mobile Menu Drawer */}
        <nav className={`main-nav ${isMobileMenuOpen ? 'mobile-nav-open' : ''}`}>
          <a href="#workflow" onClick={closeMenu} className="text-[13.5px] font-medium text-[#1C2421]/80 hover:text-[#EB5E28] transition-colors">
            How it works
          </a>
          <a href="#solution" onClick={closeMenu} className="text-[13.5px] font-medium text-[#1C2421]/80 hover:text-[#EB5E28] transition-colors">
            Solutions
          </a>
          <a href="#pillars" onClick={closeMenu} className="text-[13.5px] font-medium text-[#1C2421]/80 hover:text-[#EB5E28] transition-colors">
            Platform
          </a>
          <a href="#ecosystem" onClick={closeMenu} className="text-[13.5px] font-medium text-[#1C2421]/80 hover:text-[#EB5E28] transition-colors">
            Ecosystem
          </a>
          <a href="#calculator" onClick={closeMenu} className="text-[13.5px] font-medium text-[#1C2421]/80 hover:text-[#EB5E28] transition-colors">
            Pricing
          </a>

          <div className="w-full h-px bg-[#E5DCD0]/70 my-1 lg:hidden"></div>
          <a href="/login" className="text-xs font-bold text-[#EB5E28] flex items-center justify-between py-1 lg:hidden">
            <span>NGO Login</span><span>→</span>
          </a>
          <a href="/admin" className="text-xs font-semibold text-[#1C2421]/80 flex items-center justify-between py-1 lg:hidden">
            <span>Admin Portal</span><span>→</span>
          </a>
        </nav>

        {/* Right CTA Actions - Compact and Perfectly Proportioned */}
        <div className="hidden sm:flex items-center space-x-2">
          <a
            href="/admin"
            className="text-[12px] font-semibold text-[#1C2421]/70 hover:text-[#EB5E28] transition-colors px-2.5 py-1 rounded-full hover:bg-[#F1ECE1]"
            title="Superadmin Authentication"
          >
            Admin
          </a>
          <a
            href="/login"
            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-[#1C2421] bg-white hover:bg-[#F1ECE1] border border-[#E5DCD0] rounded-full shadow-xs hover:shadow transition-all duration-200"
            title="NGO Partner Portal Login"
          >
            <span>NGO Login</span>
          </a>
          <button
            onClick={onOpenDemo}
            type="button"
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 text-xs font-bold text-white bg-[#EB5E28] hover:bg-[#D84E1A] rounded-full shadow-xs hover:shadow transition-all duration-200"
          >
            <span>Book a Demo</span>
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
              className="lucide lucide-arrow-right w-3 h-3"
              aria-hidden="true"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <div className="flex items-center sm:hidden gap-2">
          <a
            href="/login"
            className="px-2.5 py-1 text-[11px] font-semibold text-[#1C2421] bg-white border border-[#E5DCD0] rounded-full shadow-xs"
          >
            Login
          </a>
          <button
            onClick={toggleMenu}
            type="button"
            className="p-1.5 text-[#1C2421] focus:outline-none"
            aria-label="Toggle Menu"
            aria-expanded={isMobileMenuOpen}
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
              className="lucide lucide-menu w-6 h-6"
              aria-hidden="true"
            >
              <path d="M4 5h16"></path>
              <path d="M4 12h16"></path>
              <path d="M4 19h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
