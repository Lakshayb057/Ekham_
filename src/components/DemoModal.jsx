import React, { useState, useEffect, useRef } from 'react';

export default function DemoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organizationType: 'ngo',
    organization: '',
    time: 'morning'
  });

  const dialogRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('demo-open');
      if (dialogRef.current) dialogRef.current.focus();
    } else {
      document.body.classList.remove('demo-open');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('EKhum demo request — ' + formData.organization);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nWork email: ${formData.email}\nPhone: ${formData.phone}\nOrganization type: ${formData.organizationType}\nOrganization: ${formData.organization}\nPreferred time: ${formData.time}`
    );
    window.location.href = `mailto:contact@ekhum.org?subject=${subject}&body=${body}`;
  };

  return (
    <div
      id="demo-overlay"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target.id === 'demo-overlay') onClose();
      }}
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        className="demo-dialog relative w-full max-w-lg bg-[#FAF8F5] rounded-3xl border border-[#E5DCD0] p-6 sm:p-8 shadow-2xl overflow-hidden"
      >
        <button
          type="button"
          onClick={onClose}
          className="demo-close absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close dialog"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h3 className="text-2xl font-bold text-[#1C2421] mb-2">Book a 15-Min Demo</h3>
        <p className="text-sm text-[#4A5550] mb-6">
          See how EKhum automates donor acquisition, 80G/10BD compliance, and recurring donations for your NGO.
        </p>

        <form id="demo-form" onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#1C2421] mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Ananya Sharma"
              className="w-full px-3.5 py-2.5 bg-white border border-[#E5DCD0] rounded-xl text-sm focus:outline-none focus:border-[#EB5E28]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#1C2421] mb-1">Work Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="ananya@ngo.org"
              className="w-full px-3.5 py-2.5 bg-white border border-[#E5DCD0] rounded-xl text-sm focus:outline-none focus:border-[#EB5E28]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#1C2421] mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="w-full px-3.5 py-2.5 bg-white border border-[#E5DCD0] rounded-xl text-sm focus:outline-none focus:border-[#EB5E28]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#1C2421] mb-1">Organization Type</label>
              <select
                name="organizationType"
                value={formData.organizationType}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 bg-white border border-[#E5DCD0] rounded-xl text-sm focus:outline-none focus:border-[#EB5E28]"
              >
                <option value="ngo">Registered NGO / Trust</option>
                <option value="section8">Section 8 Company</option>
                <option value="csr">CSR / Foundation</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1C2421] mb-1">Preferred Time</label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 bg-white border border-[#E5DCD0] rounded-xl text-sm focus:outline-none focus:border-[#EB5E28]"
              >
                <option value="morning">Morning (10 AM - 1 PM)</option>
                <option value="afternoon">Afternoon (1 PM - 5 PM)</option>
                <option value="evening">Evening (5 PM - 8 PM)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#1C2421] mb-1">Organization Name</label>
            <input
              type="text"
              name="organization"
              required
              value={formData.organization}
              onChange={handleChange}
              placeholder="e.g. Hope India Foundation"
              className="w-full px-3.5 py-2.5 bg-white border border-[#E5DCD0] rounded-xl text-sm focus:outline-none focus:border-[#EB5E28]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-[#EB5E28] hover:bg-[#d44f1c] text-white font-bold rounded-xl text-sm transition-all shadow-md mt-2"
          >
            Confirm Demo Request
          </button>
        </form>
      </div>
    </div>
  );
}
