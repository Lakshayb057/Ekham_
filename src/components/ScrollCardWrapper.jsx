import React from 'react';

/**
 * ScrollCardWrapper:
 * Renders each section as a crisp, physical luxury stacked deck card.
 * Elevated with top specular glass highlight, elegant rounded top borders,
 * and deep ambient drop shadow, running with zero scroll overhead at 60/120fps.
 */
export default function ScrollCardWrapper({
  children,
  id,
  className = '',
  enableCardStyle = true,
  cardBg = 'bg-[#f5f3ed]',
  fullHeightOnMobile = true,
  contentJustify = 'justify-center',
}) {
  return (
    <div
      id={id}
      className="relative w-full overflow-visible scroll-mt-0"
    >
      <div
        className={`w-full transform-gpu ${
          enableCardStyle
            ? `relative rounded-t-[24px] sm:rounded-t-[32px] shadow-[0_-16px_48px_rgba(34,39,32,0.08)] border-t border-white/90 ring-1 ring-black/5 ${cardBg} overflow-hidden ${
                fullHeightOnMobile ? 'min-h-[100dvh] min-h-screen' : 'min-h-0 sm:min-h-[100dvh] sm:min-h-screen'
              } flex flex-col ${contentJustify}`
            : ''
        } ${className}`}
      >
        {/* Subtle top edge specular glass sheen */}
        {enableCardStyle && (
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none z-30" />
        )}
        {children}
      </div>
    </div>
  );
}
