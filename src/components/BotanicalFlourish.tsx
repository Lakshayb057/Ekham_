import React from 'react';

interface BotanicalFlourishProps {
  className?: string;
  variant?: 'dark' | 'light' | 'muted';
}

export const BotanicalFlourish: React.FC<BotanicalFlourishProps> = ({ 
  className = '',
  variant = 'light'
}) => {
  const strokeColor = variant === 'dark' 
    ? 'rgba(255, 255, 255, 0.08)' 
    : variant === 'muted'
    ? 'rgba(42, 114, 78, 0.12)'
    : 'rgba(28, 36, 33, 0.08)';

  return (
    <svg 
      className={`pointer-events-none select-none ${className}`}
      viewBox="0 0 160 220" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Central curving stem */}
      <path 
        d="M20 210C40 160 70 120 140 20" 
        stroke={strokeColor} 
        strokeWidth="1.8" 
        strokeLinecap="round"
      />
      {/* Top Leaf */}
      <path 
        d="M140 20C120 40 100 35 90 20C105 10 125 10 140 20Z" 
        fill={strokeColor}
      />
      {/* Right Leaf 1 */}
      <path 
        d="M115 55C140 60 155 45 150 30C130 35 120 45 115 55Z" 
        fill={strokeColor}
      />
      {/* Left Leaf 1 */}
      <path 
        d="M95 85C70 80 55 95 60 110C80 105 90 95 95 85Z" 
        fill={strokeColor}
      />
      {/* Right Leaf 2 */}
      <path 
        d="M75 120C100 125 115 110 110 95C90 100 80 110 75 120Z" 
        fill={strokeColor}
      />
      {/* Left Leaf 2 */}
      <path 
        d="M50 155C25 150 10 165 15 180C35 175 45 165 50 155Z" 
        fill={strokeColor}
      />
    </svg>
  );
};
