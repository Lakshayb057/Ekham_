import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  variant = 'dark',
  showTagline = true 
}) => {
  const isDark = variant === 'dark';
  
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Revolving 8-Spoke Asterisk / Starburst Mark from Official EKhum Logo */}
      <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0">
        <svg 
          viewBox="0 0 36 36" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full text-[#EB5E28] animate-[spin_10s_linear_infinite]"
        >
          {/* Vertical Spoke */}
          <line x1="18" y1="4" x2="18" y2="32" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
          {/* Horizontal Spoke */}
          <line x1="4" y1="18" x2="32" y2="18" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
          {/* Diagonal Spoke 1 */}
          <line x1="8.1" y1="8.1" x2="27.9" y2="27.9" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
          {/* Diagonal Spoke 2 */}
          <line x1="27.9" y1="8.1" x2="8.1" y2="27.9" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
          {/* Central Hub */}
          <circle cx="18" cy="18" r="2.8" fill="currentColor" />
        </svg>
      </div>

      {/* Wordmark */}
      <div className="flex flex-col">
        <div className="flex items-center tracking-tight font-extrabold text-xl leading-none">
          <span className={isDark ? "text-[#1C2421]" : "text-white"}>EK</span>
          <span className="text-[#EB5E28]">hum</span>
        </div>
        {showTagline && (
          <span className={`text-[9px] tracking-wide font-medium mt-0.5 hidden sm:block ${isDark ? "text-[#6A756F]" : "text-gray-300"}`}>
            Technology for a kinder tomorrow
          </span>
        )}
      </div>
    </div>
  );
};
