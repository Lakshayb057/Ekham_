import React from 'react';

export default function Footer({ onOpenDemo }) {
  return (
<footer
          className="bg-[#F7F3ED] border-t border-[#E8E2D8] pt-6 sm:pt-8 pb-4 text-[#1C2421]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="footer-pitch-container pb-8 border-b border-[#E8E2D8]"
            >
              {/* Left Column: Brand & Core Mission */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-sm">
                <a href="#hero" aria-label="EKhum home" className="footer-brand mb-2.5">
                  <img src="./ekhum-logo.png" alt="EKhum" className="h-6 w-auto" />
                </a>
                <p className="text-xs text-[#555F59] leading-relaxed mb-3">
                  A unified digital infrastructure for charities — connecting fundraising, donors, compliance, and AI on one intelligent platform.
                </p>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#2D7A4F]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <span>Bank-grade security &amp; end-to-end encryption</span>
                </div>
              </div>

              {/* Center Column: Clean Core Guarantees */}
              <div className="flex flex-col items-center md:items-start text-left max-w-xs">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C2421] mb-2.5">
                  Core Guarantees
                </h4>
                <ul className="space-y-2 text-xs text-[#555F59]">
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#2A724E]/12 flex items-center justify-center text-[#2A724E] shrink-0">
                      <svg className="w-2.5 h-2.5 stroke-[3]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="font-medium">100% Charity-Owned Data</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#2A724E]/12 flex items-center justify-center text-[#2A724E] shrink-0">
                      <svg className="w-2.5 h-2.5 stroke-[3]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="font-medium">Instant 80G Tax Certificates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#2A724E]/12 flex items-center justify-center text-[#2A724E] shrink-0">
                      <svg className="w-2.5 h-2.5 stroke-[3]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="font-medium">Automated NGO Compliance</span>
                  </li>
                </ul>
              </div>

              {/* Navigation columns (Platform, Use Cases, Company, Resources) commented out for clean pitch presentation
              <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div>
                  <h4
                    className="text-xs font-bold uppercase tracking-wider text-[#1C2421] mb-3"
                  >
                    Platform
                  </h4>
                  <ul className="space-y-1.5">
                    <li>
                      <a
                        href="https://ekhum.org/admin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#EB5E28] hover:text-[#D84E1A] transition-colors font-bold"
                        >NGO Login</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://ekhum.org/admin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#555F59] hover:text-[#EB5E28] transition-colors font-medium"
                        >Admin Portal</a
                      >
                    </li>
                    <li>
                      <a
                        href="#pillars"
                        className="text-xs text-[#555F59] hover:text-[#EB5E28] transition-colors font-medium"
                        >Features</a
                      >
                    </li>
                    <li>
                      <a
                        href="#solution"
                        className="text-xs text-[#555F59] hover:text-[#EB5E28] transition-colors font-medium"
                        >Security</a
                      >
                    </li>
                    <li>
                      <a
                        href="#calculator"
                        className="text-xs text-[#555F59] hover:text-[#EB5E28] transition-colors font-medium"
                        >Pricing</a
                      >
                    </li>
                    <li>
                      <a
                        href="#solution"
                        className="text-xs text-[#555F59] hover:text-[#EB5E28] transition-colors font-medium"
                        >Integrations</a
                      >
                    </li>
                  </ul>
                </div>
                <div>
                  <h4
                    className="text-xs font-bold uppercase tracking-wider text-[#1C2421] mb-3"
                  >
                    Use Cases
                  </h4>
                  <ul className="space-y-1.5">
                    <li>
                      <a
                        href="#ecosystem"
                        className="text-xs text-[#555F59] hover:text-[#EB5E28] transition-colors font-medium"
                        >For NGOs</a
                      >
                    </li>
                    <li>
                      <a
                        href="#ecosystem"
                        className="text-xs text-[#555F59] hover:text-[#EB5E28] transition-colors font-medium"
                        >For Donors</a
                      >
                    </li>
                    <li>
                      <a
                        href="#ecosystem"
                        className="text-xs text-[#555F59] hover:text-[#EB5E28] transition-colors font-medium"
                        >For CSR</a
                      >
                    </li>
                    <li>
                      <a
                        href="#ecosystem"
                        className="text-xs text-[#555F59] hover:text-[#EB5E28] transition-colors font-medium"
                        >For Partners</a
                      >
                    </li>
                  </ul>
                </div>
                <div>
                  <h4
                    className="text-xs font-bold uppercase tracking-wider text-[#1C2421] mb-3"
                  >
                    Company
                  </h4>
                  <ul className="space-y-1.5">
                    <li>
                      <a
                        href="#hero"
                        className="text-xs text-[#555F59] hover:text-[#EB5E28] transition-colors font-medium"
                        >About Us</a
                      >
                    </li>
                    <li>
                      <a
                        href="#testimonials"
                        className="text-xs text-[#555F59] hover:text-[#EB5E28] transition-colors font-medium"
                        >Careers</a
                      >
                    </li>
                    <li>
                      <a
                        href="#pillars"
                        className="text-xs text-[#555F59] hover:text-[#EB5E28] transition-colors font-medium"
                        >Blog</a
                      >
                    </li>
                    <li>
                      <a
                        href="#hero"
                        className="text-xs text-[#555F59] hover:text-[#EB5E28] transition-colors font-medium"
                        >Contact</a
                      >
                    </li>
                  </ul>
                </div>
                <div>
                  <h4
                    className="text-xs font-bold uppercase tracking-wider text-[#1C2421] mb-3"
                  >
                    Resources
                  </h4>
                  <ul className="space-y-1.5">
                    <li>
                      <a
                        href="#workflow"
                        className="text-xs text-[#555F59] hover:text-[#EB5E28] transition-colors font-medium"
                        >Help Center</a
                      >
                    </li>
                    <li>
                      <a
                        href="#workflow"
                        className="text-xs text-[#555F59] hover:text-[#EB5E28] transition-colors font-medium"
                        >Guides</a
                      >
                    </li>
                    <li>
                      <a
                        href="#pillars"
                        className="text-xs text-[#555F59] hover:text-[#EB5E28] transition-colors font-medium"
                        >Webinars</a
                      >
                    </li>
                    <li>
                      <a
                        href="#testimonials"
                        className="text-xs text-[#555F59] hover:text-[#EB5E28] transition-colors font-medium"
                        >Case Studies</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
              */}

              {/* Right Column: Connect & Social */}
              <div className="flex flex-col items-center lg:items-end text-center lg:text-right max-w-xs">
                <h4
                  className="text-xs font-bold uppercase tracking-wider text-[#1C2421] mb-2"
                >
                  Stay Connected
                </h4>
                <p className="text-xs text-[#555F59] mb-3 leading-relaxed">
                  Compliance alerts, non-profit policy updates &amp; social impact insights.
                </p>
                
{/* Newsletter subscription hidden until connected to a mailing list. */}

                <div className="flex items-center gap-2 text-gray-500">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="p-2 bg-white rounded-lg border border-[#E8E2D8] hover:text-[#EB5E28] hover:border-[#EB5E28] transition-colors"
                    ><svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path
                        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.65 1.65 0 1 0 0 3.3 1.65 1.65 0 0 0 0-3.3Z"
                      ></path></svg></a
                  ><a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Twitter / X"
                    className="p-2 bg-white rounded-lg border border-[#E8E2D8] hover:text-[#EB5E28] hover:border-[#EB5E28] transition-colors"
                    ><svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path
                        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                      ></path></svg></a
                  ><a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="YouTube"
                    className="p-2 bg-white rounded-lg border border-[#E8E2D8] hover:text-[#EB5E28] hover:border-[#EB5E28] transition-colors"
                    ><svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path
                        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                      ></path></svg></a
                  ><a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="p-2 bg-white rounded-lg border border-[#E8E2D8] hover:text-[#EB5E28] hover:border-[#EB5E28] transition-colors"
                    ><svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path
                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                      ></path></svg
                  ></a>
                </div>
              </div>
            </div>
            <div
              className="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6A756F] gap-4"
            >
              <div>
                © 2026 EKhum Platform Inc. All rights reserved.
              </div>
              <div className="flex items-center gap-3 sm:gap-4 text-[11px] font-medium">
                <a href="https://ekhum.org/admin" target="_blank" rel="noopener noreferrer" className="text-[#EB5E28] hover:underline font-bold">NGO Login</a>
                <span className="text-[#CFC5B8]">|</span>
                <a href="https://ekhum.org/admin" target="_blank" rel="noopener noreferrer" className="text-[#555F59] hover:text-[#EB5E28] font-semibold">Admin Login</a>
                <span className="text-[#CFC5B8]">|</span>
                <span>Building a kinder tomorrow, together</span>
              </div>
            </div>
          </div>
        </footer>
  );
}
