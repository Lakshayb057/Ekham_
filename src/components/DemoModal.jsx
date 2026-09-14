import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DemoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    organisation: '',
    name: '',
    email: '',
    interest: 'The complete platform',
  });
  const [submitted, setSubmitted] = useState(false);

  const closeModal = () => {
    if (window.history.state?.modal === 'demo') {
      window.history.back();
    } else {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      window.history.pushState({ modal: 'demo' }, '');
      const handlePopState = () => onClose();
      window.addEventListener('popstate', handlePopState);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('popstate', handlePopState);
      };
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

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
    confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
  };

  return typeof document !== 'undefined' ? createPortal(
    <div className="fixed inset-0 z-[99999] flex flex-col sm:items-center sm:justify-center sm:p-6 bg-[#142013]/70 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full h-[100dvh] sm:h-auto sm:max-w-lg sm:max-h-[92dvh] bg-[#f5f3ed] text-[#222720] rounded-none sm:rounded-2xl shadow-2xl sm:border sm:border-[#d8d9cf] z-10 flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Top Bar with Back Tab and Close Button */}
        <div className="sm:hidden flex items-center justify-between px-4 py-3 bg-[#f5f3ed]/95 backdrop-blur-md border-b border-[#d8d9cf] shrink-0 z-30">
          <button
            onClick={closeModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#d8d9cf] shadow-xs text-xs font-semibold text-[#222720] active:scale-95 transition-transform cursor-pointer"
            aria-label="Back to overview"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#e95126]" />
            <span>Back</span>
          </button>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#e95126]">
            Get in Touch
          </span>
          <button
            onClick={closeModal}
            className="w-8 h-8 rounded-full bg-white border border-[#d8d9cf] shadow-xs flex items-center justify-center text-[#222720] active:scale-95 transition-transform cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Desktop Close Button (hidden on mobile) */}
        <button
          onClick={closeModal}
          className="hidden sm:flex absolute top-4 right-4 p-2 rounded-full text-[#66695f] hover:text-[#e95126] hover:bg-[#d8d9cf]/40 transition-colors cursor-pointer min-w-[40px] min-h-[40px] items-center justify-center z-20"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Scrollable Modal Content */}
        <div className="flex-1 overflow-y-auto overscroll-contain p-5 xs:p-7 sm:p-8 md:p-10 space-y-5 xs:space-y-6 safe-p-bottom">

        <div className="space-y-1.5 xs:space-y-2 pr-8">
          <span className="text-[11px] xs:text-xs uppercase font-bold tracking-widest text-[#e95126]">
            Start a conversation
          </span>
          <h2 className="text-2xl xs:text-3xl font-medium tracking-tight text-[#222720] leading-tight">
            Better starts <br />with your team.
          </h2>
          <p className="text-xs xs:text-sm text-[#66695f]">
            Prepare a short brief for your Ekhum walkthrough.
          </p>
        </div>

        {submitted ? (
          <div className="p-5 xs:p-6 rounded-xl bg-[#dce4d3] border border-[#4d5946]/30 text-center space-y-4">
            <CheckCircle2 className="w-9 h-9 xs:w-10 xs:h-10 text-[#4d5946] mx-auto" />
            <h3 className="text-base xs:text-lg font-bold text-[#222720]">Brief Downloaded!</h3>
            <p className="text-xs text-[#66695f]">
              Your brief has been downloaded locally as a text file. No information has been sent.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-[#222720] text-white text-xs font-semibold hover:bg-[#e95126] transition-colors cursor-pointer min-h-[44px]"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5 xs:space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#222720]">Organisation</label>
              <input
                type="text"
                required
                value={formData.organisation}
                onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#d8d9cf] bg-white text-base sm:text-sm focus:outline-none focus:border-[#e95126] min-h-[44px]"
                placeholder="Your organization name"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#222720]">Your name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#d8d9cf] bg-white text-base sm:text-sm focus:outline-none focus:border-[#e95126] min-h-[44px]"
                placeholder="Full name"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#222720]">Work email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#d8d9cf] bg-white text-base sm:text-sm focus:outline-none focus:border-[#e95126] min-h-[44px]"
                placeholder="name@organization.org"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#222720]">What would you like to explore?</label>
              <select
                value={formData.interest}
                onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#d8d9cf] bg-white text-base sm:text-sm focus:outline-none focus:border-[#e95126] min-h-[44px]"
              >
                <option>The complete platform</option>
                <option>Fundraising and payments</option>
                <option>Compliance and reconciliation</option>
                <option>Funder and outcome reporting</option>
              </select>
            </div>

            <p className="text-[11px] text-[#66695f] leading-normal pt-1">
              This preview saves your brief as a local text file. It does not send a request or book an appointment.
            </p>

            <button
              type="submit"
              className="w-full py-3 px-6 rounded-full bg-[#222720] text-white hover:bg-[#e95126] font-medium text-sm transition-all duration-300 flex items-center justify-center gap-3 shadow-md cursor-pointer min-h-[48px]"
            >
              <span>Download enquiry brief</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
        </div>
      </div>
    </div>,
    document.body
  ) : null;
}
