import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenDemoModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemoModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Why EKhum', href: '#why-ekhum' },
    { label: 'For NGOs', href: '#ecosystem' },
    { label: 'For Donors', href: '#ecosystem' },
    { label: 'For CSR', href: '#ecosystem' },
    { label: 'Resources', href: '#pillars' },
    { label: 'About', href: '#workflow' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 bg-[#FAF8F5] py-2 lg:py-2 transition-all duration-200 ${
          isScrolled ? 'border-b border-[#E8E2D8]/70 shadow-xs' : 'border-b-0 shadow-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center">
            <Logo variant="dark" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[14px] font-medium text-[#1C2421]/80 hover:text-[#EB5E28] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3 sm:space-x-4">

            {/* Get Started Button */}
            <button
              onClick={onOpenDemoModal}
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-white bg-[#EB5E28] hover:bg-[#D84E1A] rounded-full shadow-sm hover:shadow transition-all duration-200"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center sm:hidden gap-2">
            <button
              onClick={onOpenDemoModal}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#EB5E28] rounded-full"
            >
              Start
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1C2421] focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden">
          <div className="fixed top-16 right-0 bottom-0 w-4/5 max-w-sm bg-[#FAF8F5] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="pb-4 mb-4 border-b border-[#E8E2D8]">
                <Logo variant="dark" />
              </div>
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-base font-semibold text-[#1C2421] hover:text-[#EB5E28] py-1"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#E8E2D8] flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemoModal();
                }}
                className="w-full py-2.5 flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#EB5E28] hover:bg-[#D84E1A] rounded-full shadow"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
