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
    <div className={`relative grid grid-cols-[auto_1fr] gap-x-2 sm:gap-x-2.5 items-center select-none ${className}`}>
      {/* Revolving 8-Spoke Asterisk / Starburst Mark */}
      <div className="row-start-1 col-start-1 relative w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex items-center justify-center lg:translate-y-[1.5px]">
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

      {/* Wordmark and Tagline */}
      <div className="row-start-1 col-start-2 relative flex flex-col justify-center">
        <div className="flex items-center tracking-tight font-extrabold text-[1.1rem] sm:text-xl lg:text-[1.35rem] leading-none">
          <span className={isDark ? "text-[#1C2421]" : "text-white"}>EK</span>
          <span className="text-[#EB5E28]">hum</span>
        </div>
        {/* Tagline - Absolutely positioned directly under the text */}
        {showTagline && (
          <span className={`absolute top-[92%] left-[2px] text-[8px] sm:text-[9px] tracking-wide font-medium hidden sm:block whitespace-nowrap ${isDark ? "text-[#6A756F]" : "text-gray-300"}`}>
            Technology for a kinder tomorrow
          </span>
        )}
      </div>
    </div>
  );
};
