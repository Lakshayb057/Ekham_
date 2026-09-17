import React, { useState } from 'react';
import { X, Lock, ArrowRight, Shield } from 'lucide-react';
import { Logo } from './Logo';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDemoModal: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onOpenDemoModal }) => {
  const [role, setRole] = useState<'ngo' | 'donor' | 'csr'>('ngo');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoggedIn(true);
    setTimeout(() => {
      setLoggedIn(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white border border-[#E8E2D8] rounded-[2rem] w-full max-w-md overflow-hidden shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          <div className="text-center mb-6">
            <Logo variant="dark" className="justify-center mb-4" />
            <h3 className="text-xl font-extrabold text-[#1C2421]">
              Sign in to EKhum
            </h3>
            <p className="text-xs text-[#6A756F] mt-1">
              Access your philanthropy operations workspace
            </p>
          </div>

          {/* Role Selector Tabs */}
          <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#FAF8F5] border border-[#E8E2D8] rounded-xl mb-6">
            <button
              type="button"
              onClick={() => setRole('ngo')}
              className={`py-1.5 text-xs font-bold rounded-lg transition-all ${
                role === 'ngo'
                  ? 'bg-[#1C2421] text-white shadow-xs'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              NGO Admin
            </button>
            <button
              type="button"
              onClick={() => setRole('donor')}
              className={`py-1.5 text-xs font-bold rounded-lg transition-all ${
                role === 'donor'
                  ? 'bg-[#1C2421] text-white shadow-xs'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              Donor
            </button>
            <button
              type="button"
              onClick={() => setRole('csr')}
              className={`py-1.5 text-xs font-bold rounded-lg transition-all ${
                role === 'csr'
                  ? 'bg-[#1C2421] text-white shadow-xs'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              CSR Team
            </button>
          </div>

          {loggedIn ? (
            <div className="text-center py-6">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                <Lock className="w-6 h-6" />
              </div>
              <div className="text-sm font-bold text-[#1C2421]">Logging in to {role.toUpperCase()} Workspace...</div>
              <div className="text-xs text-gray-500 mt-1">Directing to dashboard preview</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#1C2421] mb-1">
                  Registered Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="admin@ngo.org"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#E8E2D8] rounded-xl focus:outline-none focus:border-[#EB5E28]"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-bold text-[#1C2421]">Password</label>
                  <a href="#reset" className="text-[11px] text-[#EB5E28] hover:underline font-semibold">Forgot?</a>
                </div>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#E8E2D8] rounded-xl focus:outline-none focus:border-[#EB5E28]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#EB5E28] hover:bg-[#D84E1A] text-white text-xs sm:text-sm font-bold rounded-xl shadow transition-all flex items-center justify-center gap-2"
              >
                <span>Sign In</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center pt-2">
                <span className="text-xs text-[#6A756F]">Don't have an EKhum organization account? </span>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenDemoModal();
                  }}
                  className="text-xs font-bold text-[#EB5E28] hover:underline ml-1"
                >
                  Onboard Now
                </button>
              </div>

              <div className="flex items-center justify-center gap-1 text-[10px] text-gray-400 pt-2">
                <Shield className="w-3 h-3 text-[#2D7A4F]" />
                <span>Protected by 2FA & ITD Vault Encryption</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
