import React, { useState } from 'react';
import { X, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookDemoModal: React.FC<BookDemoModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    orgType: 'ngo',
    orgName: '',
    annualVolume: '10L-50L',
    date: '',
    time: '11:00 AM IST',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#EB5E28', '#2D7A4F', '#FAF8F5'],
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white border border-[#E8E2D8] rounded-[2rem] w-full max-w-lg overflow-hidden shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="p-8 sm:p-10 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-5">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
            <h3 className="text-2xl font-extrabold text-[#1C2421] mb-2">
              Demo Scheduled!
            </h3>
            <p className="text-sm text-[#555F59] leading-relaxed mb-6">
              Thank you, <span className="font-bold text-[#1C2421]">{formData.name}</span>. Our philanthropy solutions architect will meet with you for a live walkthrough of the EKhum platform.
            </p>
            <div className="bg-[#FAF8F5] border border-[#E8E2D8] rounded-2xl p-4 text-left text-xs space-y-2 mb-6 text-gray-600">
              <div><span className="font-bold text-[#1C2421]">Organization:</span> {formData.orgName || 'Grassroots Foundation'}</div>
              <div><span className="font-bold text-[#1C2421]">Time:</span> {formData.time} (Calendar invite sent to {formData.email})</div>
              <div><span className="font-bold text-[#1C2421]">Features:</span> 80G automation, 10BD filing, and custom donor journeys</div>
            </div>
            <button
              onClick={onClose}
              className="w-full py-3 bg-[#1C2421] hover:bg-black text-white text-sm font-bold rounded-xl transition-all"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="p-6 sm:p-8">
            {/* Modal Header */}
            <div className="mb-6">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#EB5E28]">
                15-MINUTE PLATFORM WALKTHROUGH
              </span>
              <h3 className="text-2xl font-extrabold text-[#1C2421] mt-1">
                Book a Live Demo of EKhum
              </h3>
              <p className="text-xs text-[#6A756F] mt-1">
                Discover how unified infrastructure frees your team from manual compliance and drives 3x repeat donors.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#1C2421] mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Radhika Sen"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#E8E2D8] rounded-xl focus:outline-none focus:border-[#EB5E28]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#1C2421] mb-1">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@ngo.org"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#E8E2D8] rounded-xl focus:outline-none focus:border-[#EB5E28]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1C2421] mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#E8E2D8] rounded-xl focus:outline-none focus:border-[#EB5E28]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#1C2421] mb-1">
                    Organization Type
                  </label>
                  <select
                    value={formData.orgType}
                    onChange={(e) => setFormData({ ...formData, orgType: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs bg-[#FAF8F5] border border-[#E8E2D8] rounded-xl focus:outline-none focus:border-[#EB5E28]"
                  >
                    <option value="ngo">Registered NGO (12A / 80G)</option>
                    <option value="csr">Corporate / CSR Foundation</option>
                    <option value="donor">Major Donor / Family Office</option>
                    <option value="partner">Tech / Ecosystem Partner</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1C2421] mb-1">
                    Organization Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Pratham, Udaan"
                    value={formData.orgName}
                    onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#E8E2D8] rounded-xl focus:outline-none focus:border-[#EB5E28]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1C2421] mb-1">
                  Preferred Time Slot
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['11:00 AM IST', '3:30 PM IST', '5:00 PM IST'].map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setFormData({ ...formData, time: slot })}
                      className={`py-2 text-[11px] font-semibold rounded-lg border transition-all ${
                        formData.time === slot
                          ? 'bg-[#1C2421] text-white border-[#1C2421]'
                          : 'bg-[#FAF8F5] text-gray-700 border-[#E8E2D8] hover:bg-gray-100'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#EB5E28] hover:bg-[#D84E1A] text-white text-sm font-bold rounded-xl shadow-md flex items-center justify-center gap-2 transition-all"
                >
                  <span>Confirm Walkthrough</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2D7A4F]" />
                <span>100% Confidential. No spam. Instant calendar link.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
