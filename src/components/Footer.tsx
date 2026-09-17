import React, { useState } from 'react';
import { ArrowRight, Check, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const linkSections = [
    {
      title: 'Platform',
      links: [
        { name: 'Features', href: '#pillars' },
        { name: 'Security', href: '#solution' },
        { name: 'Pricing', href: '#calculator' },
        { name: 'Integrations', href: '#solution' },
      ],
    },
    {
      title: 'Use Cases',
      links: [
        { name: 'For NGOs', href: '#ecosystem' },
        { name: 'For Donors', href: '#ecosystem' },
        { name: 'For CSR', href: '#ecosystem' },
        { name: 'For Partners', href: '#ecosystem' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#hero' },
        { name: 'Careers', href: '#testimonials' },
        { name: 'Blog', href: '#pillars' },
        { name: 'Contact', href: '#hero' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Help Center', href: '#workflow' },
        { name: 'Guides', href: '#workflow' },
        { name: 'Webinars', href: '#pillars' },
        { name: 'Case Studies', href: '#testimonials' },
      ],
    },
  ];

  return (
    <footer className="bg-[#F7F3ED] border-t border-[#E8E2D8] pt-6 sm:pt-8 pb-4 text-[#1C2421]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-4 pb-4 sm:pb-6 border-b border-[#E8E2D8]">
          
          {/* Brand Column */}
          <div className="lg:col-span-3">
            <Logo variant="dark" className="mb-4" />
            <p className="text-xs sm:text-[13px] text-[#555F59] leading-relaxed max-w-xs mb-4">
              A complete digital infrastructure for charities — where fundraising, donations, donors, compliance, reporting, and AI unite on one platform.
            </p>
            <div className="text-xs font-semibold text-[#2D7A4F] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              Bank-grade security & end-to-end encryption
            </div>
          </div>

          {/* Nav Link Columns */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {linkSections.map((sec, idx) => (
              <div key={idx}>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C2421] mb-3">
                  {sec.title}
                </h4>
                <ul className="space-y-1.5">
                  {sec.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.href}
                        className="text-xs text-[#555F59] hover:text-[#EB5E28] transition-colors font-medium"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C2421] mb-3">
              Subscribe to our updates
            </h4>
            <p className="text-xs text-[#555F59] mb-3">
              Stay connected to the future of giving, compliance policy alerts, and social impact insights.
            </p>

            <form onSubmit={handleSubscribe} className="relative flex items-center mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white border border-[#E8E2D8] rounded-xl px-4 py-2.5 text-xs text-[#1C2421] focus:outline-none focus:border-[#EB5E28] pr-12 shadow-2xs"
              />
              <button
                type="submit"
                className="absolute right-1.5 p-2 bg-[#EB5E28] hover:bg-[#D84E1A] text-white rounded-lg transition-colors flex items-center justify-center"
                aria-label="Subscribe"
              >
                {subscribed ? <Check className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
              </button>
            </form>

            {subscribed && (
              <div className="text-[11px] text-emerald-600 font-bold mb-3">
                ✓ Thank you for subscribing to EKhum updates!
              </div>
            )}

            {/* Social Icons */}
            <div className="flex items-center gap-3 text-gray-500">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 bg-white rounded-lg border border-[#E8E2D8] hover:text-[#EB5E28] hover:border-[#EB5E28] transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.65 1.65 0 1 0 0 3.3 1.65 1.65 0 0 0 0-3.3Z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter / X" className="p-2 bg-white rounded-lg border border-[#E8E2D8] hover:text-[#EB5E28] hover:border-[#EB5E28] transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="p-2 bg-white rounded-lg border border-[#E8E2D8] hover:text-[#EB5E28] hover:border-[#EB5E28] transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2 bg-white rounded-lg border border-[#E8E2D8] hover:text-[#EB5E28] hover:border-[#EB5E28] transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6A756F] gap-4">
          <div>
            © {new Date().getFullYear()} EKhum Platform Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px] font-medium">
            <span>Building a kinder tomorrow, together</span>
            <span className="text-gray-300">|</span>
            <a href="#privacy" className="hover:text-[#EB5E28] transition-colors">Privacy Policy</a>
            <span className="text-gray-300">|</span>
            <a href="#terms" className="hover:text-[#EB5E28] transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
