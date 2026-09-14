import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';

const SLIDE_LIST = [
  { id: 'hero-card', title: 'Platform', code: '01' },
  { id: 'scale-card', title: 'Scale of Good', code: '02' },
  { id: 'systems-card', title: 'Better Systems', code: '03' },
  { id: 'partners-card', title: 'Partners', code: '04' },
  { id: 'journey-card', title: 'Continuity Flow', code: '05' },
  { id: 'technology-card', title: 'Tech Engine', code: '06' },
  { id: 'trust-card', title: 'Trust & Proof', code: '07' },
  { id: 'funders-card', title: 'For Funders', code: '08' },
  { id: 'calculator-card', title: 'Calculator', code: '09' },
  { id: 'closing-card', title: 'Action', code: '10' },
];

export default function PageSlideNavigator() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [hoveredSlide, setHoveredSlide] = useState(null);
  const activeSlideRef = useRef(0);
  const isTransitioningRef = useRef(false);
  const transitionTimerRef = useRef(null);
  const isInternalScrollingRef = useRef(false);
  const internalScrollEndTimerRef = useRef(null);
  const touchStartYRef = useRef(null);
  const gestureActiveRef = useRef(false);
  const wheelEndTimerRef = useRef(null);
  const lastTransitionTimeRef = useRef(0);

  useEffect(() => {
    activeSlideRef.current = activeSlide;
  }, [activeSlide]);

  // Smooth scroll listener with requestAnimationFrame to track active slide accurately
  useEffect(() => {
    let ticking = false;
    let cachedElements = null;

    const getElements = () => {
      if (!cachedElements || cachedElements.some(el => !el)) {
        cachedElements = SLIDE_LIST.map((s) => document.getElementById(s.id));
      }
      return cachedElements;
    };

    const handleResize = () => {
      cachedElements = null;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        ticking = false;
        if (isTransitioningRef.current) return;

        const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
        const vh = window.innerHeight;

        // Edge check: If scrolled to the absolute bottom of page, highlight the last slide
        if (vh + currentScrollY >= document.documentElement.scrollHeight - 35) {
          const lastIdx = SLIDE_LIST.length - 1;
          if (activeSlideRef.current !== lastIdx) {
            setActiveSlide(lastIdx);
            activeSlideRef.current = lastIdx;
          }
          return;
        }

        const centerY = vh * 0.45;
        const els = getElements();

        for (let i = 0; i < els.length; i++) {
          const el = els[i];
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= centerY && rect.bottom >= centerY) {
              if (activeSlideRef.current !== i) {
                setActiveSlide(i);
                activeSlideRef.current = i;
              }
              break;
            }
          }
        }
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Smoothly scroll to target slide by index with exact pixel positioning and alignment
  const goToSlide = (targetIndex, align = 'top') => {
    const clampedIndex = Math.max(0, Math.min(SLIDE_LIST.length - 1, targetIndex));
    const targetId = SLIDE_LIST[clampedIndex].id;
    const targetEl = document.getElementById(targetId);

    if (targetEl) {
      isTransitioningRef.current = true;
      lastTransitionTimeRef.current = Date.now();
      setActiveSlide(clampedIndex);
      activeSlideRef.current = clampedIndex;

      let targetTop = 0;
      if (clampedIndex === 0 && align !== 'bottom') {
        targetTop = 0;
      } else {
        const rect = targetEl.getBoundingClientRect();
        const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
        const elTop = rect.top + currentScrollY;
        const elHeight = targetEl.offsetHeight;
        const vh = window.innerHeight;

        if (align === 'bottom' && elHeight > vh) {
          targetTop = Math.max(0, Math.round(elTop + elHeight - vh));
        } else {
          targetTop = Math.max(0, Math.round(elTop));
        }
      }

      window.scrollTo({ top: targetTop, behavior: 'smooth' });

      if (transitionTimerRef.current) {
        clearTimeout(transitionTimerRef.current);
      }
      transitionTimerRef.current = setTimeout(() => {
        isTransitioningRef.current = false;
      }, 850);
    }
  };

  // Wheel listener with intra-section scroll detection and strict single-section transition lock
  useEffect(() => {
    const handleWheel = (e) => {
      // Don't intercept if a modal is open
      if (document.body.style.overflow === 'hidden') return;

      const deltaY = e.deltaY;
      const absDelta = Math.abs(deltaY);

      // Filter resting tremors / trackpad noise
      if (absDelta < 6) return;

      const now = Date.now();

      // Clear existing wheel end quiet timer
      if (wheelEndTimerRef.current) {
        clearTimeout(wheelEndTimerRef.current);
      }

      // If slide transition is currently animating OR the current wheel gesture already triggered a slide:
      // Completely absorb all incoming momentum events so multiple sections are never skipped!
      if (isTransitioningRef.current || gestureActiveRef.current) {
        e.preventDefault();
        wheelEndTimerRef.current = setTimeout(() => {
          gestureActiveRef.current = false;
          isTransitioningRef.current = false;
          isInternalScrollingRef.current = false;
        }, 280);
        return;
      }

      // Enforce minimum transition cooldown (850ms)
      if (now - lastTransitionTimeRef.current < 850) {
        e.preventDefault();
        wheelEndTimerRef.current = setTimeout(() => {
          gestureActiveRef.current = false;
          isTransitioningRef.current = false;
          isInternalScrollingRef.current = false;
        }, 280);
        return;
      }

      // Schedule reset when wheel stops emitting events
      wheelEndTimerRef.current = setTimeout(() => {
        gestureActiveRef.current = false;
        isTransitioningRef.current = false;
        isInternalScrollingRef.current = false;
      }, 280);

      const currentSlideId = SLIDE_LIST[activeSlideRef.current]?.id;
      const currentEl = document.getElementById(currentSlideId);

      if (!currentEl) return;

      const rect = currentEl.getBoundingClientRect();
      const vh = window.innerHeight;
      const threshold = 18; // px boundary tolerance

      if (deltaY > 0) {
        // Scrolling DOWN
        // If current section still has content below the viewport fold:
        if (rect.bottom > vh + threshold) {
          // Allow native scroll inside the page first so all content is properly visible!
          isInternalScrollingRef.current = true;
          if (internalScrollEndTimerRef.current) {
            clearTimeout(internalScrollEndTimerRef.current);
          }
          internalScrollEndTimerRef.current = setTimeout(() => {
            isInternalScrollingRef.current = false;
          }, 200);

          return; // Do NOT preventDefault! Let content scroll into view!
        }

        // Section bottom is reached and all content is visible!
        // If decaying momentum from previous internal scroll is still firing, absorb it
        if (isInternalScrollingRef.current) {
          e.preventDefault();
          return;
        }

        // If at the last slide, don't transition further
        if (activeSlideRef.current >= SLIDE_LIST.length - 1) {
          return;
        }

        // Intentional stroke: transition to next section with deck effect!
        // Lock this gesture so all subsequent momentum events are absorbed
        e.preventDefault();
        gestureActiveRef.current = true;
        isTransitioningRef.current = true;
        lastTransitionTimeRef.current = now;
        goToSlide(activeSlideRef.current + 1, 'top');
      } else {
        // Scrolling UP
        // If current section's top is scrolled above the viewport:
        if (rect.top < -threshold) {
          // Allow native scroll up inside the page first!
          isInternalScrollingRef.current = true;
          if (internalScrollEndTimerRef.current) {
            clearTimeout(internalScrollEndTimerRef.current);
          }
          internalScrollEndTimerRef.current = setTimeout(() => {
            isInternalScrollingRef.current = false;
          }, 200);

          return; // Do NOT preventDefault! Let content scroll into view!
        }

        // Section top is reached!
        // If decaying momentum from previous internal scroll is still firing, absorb it
        if (isInternalScrollingRef.current) {
          e.preventDefault();
          return;
        }

        // If at the first slide, don't transition
        if (activeSlideRef.current <= 0) {
          return;
        }

        // Intentional stroke: transition to previous section!
        // Lock this gesture so all subsequent momentum events are absorbed
        e.preventDefault();
        gestureActiveRef.current = true;
        isTransitioningRef.current = true;
        lastTransitionTimeRef.current = now;
        goToSlide(activeSlideRef.current - 1, 'bottom');
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
      if (internalScrollEndTimerRef.current) clearTimeout(internalScrollEndTimerRef.current);
      if (wheelEndTimerRef.current) clearTimeout(wheelEndTimerRef.current);
    };
  }, []);

  // Keyboard navigation respecting section scroll boundaries
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (document.body.style.overflow === 'hidden') return;

      const currentSlideId = SLIDE_LIST[activeSlideRef.current]?.id;
      const currentEl = document.getElementById(currentSlideId);
      const vh = window.innerHeight;
      const rect = currentEl?.getBoundingClientRect();
      const threshold = 20;

      if (e.key === 'ArrowDown' || e.key === 'PageDown' || (e.key === ' ' && !e.shiftKey)) {
        if (rect && rect.bottom > vh + threshold) {
          // Allow native key down to scroll inside the section first
          return;
        }
        e.preventDefault();
        if (!isTransitioningRef.current && activeSlideRef.current < SLIDE_LIST.length - 1) {
          goToSlide(activeSlideRef.current + 1, 'top');
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp' || (e.key === ' ' && e.shiftKey)) {
        if (rect && rect.top < -threshold) {
          // Allow native key up to scroll up inside the section first
          return;
        }
        e.preventDefault();
        if (!isTransitioningRef.current && activeSlideRef.current > 0) {
          goToSlide(activeSlideRef.current - 1, 'bottom');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Touch gesture support on mobile & tablets respecting section scroll boundaries
  useEffect(() => {
    const handleTouchStart = (e) => {
      if (document.body.style.overflow === 'hidden') return;
      touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (document.body.style.overflow === 'hidden' || touchStartYRef.current === null) return;
      const touchEndY = e.changedTouches[0].clientY;
      const diffY = touchStartYRef.current - touchEndY;
      touchStartYRef.current = null;

      // Only handle deliberate swipe gestures (> 48px)
      if (Math.abs(diffY) > 48 && !isTransitioningRef.current) {
        const currentSlideId = SLIDE_LIST[activeSlideRef.current]?.id;
        const currentEl = document.getElementById(currentSlideId);

        if (currentEl) {
          const rect = currentEl.getBoundingClientRect();
          const vh = window.innerHeight;
          const threshold = 25;

          if (diffY > 0) {
            // Swiping UP (scrolling DOWN)
            // If the section still has content below the viewport fold:
            if (rect.bottom > vh + threshold) {
              // Section bottom is not yet in view. Let native touch scroll inside the section!
              return;
            }
            if (activeSlideRef.current < SLIDE_LIST.length - 1) {
              goToSlide(activeSlideRef.current + 1, 'top');
            }
          } else {
            // Swiping DOWN (scrolling UP)
            // If the section still has content above the viewport:
            if (rect.top < -threshold) {
              // Section top is not yet in view. Let native touch scroll inside the section!
              return;
            }
            if (activeSlideRef.current > 0) {
              goToSlide(activeSlideRef.current - 1, 'bottom');
            }
          }
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);


  return (
    <div className="fixed right-3.5 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center select-none pointer-events-auto">
      {/* Modern Minimalist Glass Capsule */}
      <div className="relative flex flex-col items-center bg-white/85 backdrop-blur-xl border border-white/90 rounded-full py-3 px-1.5 shadow-[0_12px_36px_rgba(34,39,32,0.1),0_2px_8px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.04]">
        
        {/* Top Active Section Indicator */}
        <div className="flex flex-col items-center pb-1.5 w-full">
          <span className="font-mono-tech text-[10px] font-bold text-[#e95126]">
            {activeSlide + 1 < 10 ? `0${activeSlide + 1}` : activeSlide + 1}
          </span>
          <span className="w-1 h-1 rounded-full bg-[#e95126] mt-0.5 animate-pulse" />
        </div>

        {/* Up Quick Jump Button */}
        <button
          onClick={() => goToSlide(activeSlide - 1)}
          disabled={activeSlide === 0}
          className="w-5 h-5 rounded-full flex items-center justify-center text-[#222720]/40 hover:text-[#e95126] hover:bg-[#e95126]/10 transition-colors disabled:opacity-20 disabled:pointer-events-none cursor-pointer my-0.5"
          aria-label="Previous section"
        >
          <ChevronUp className="w-3.5 h-3.5" />
        </button>

        {/* Vertical Progress Track */}
        <div className="relative flex flex-col items-center gap-1.5 py-1">
          
          {/* Subtle Background Rail Line */}
          <div className="absolute top-2 bottom-2 w-[1.5px] bg-[#222720]/10 left-1/2 -translate-x-1/2 pointer-events-none rounded-full" />
          
          {/* Active Glowing Progress Line */}
          <div
            className="absolute top-2 w-[1.5px] bg-gradient-to-b from-[#e95126] to-[#ff7b52] left-1/2 -translate-x-1/2 pointer-events-none rounded-full shadow-[0_0_6px_rgba(233,81,38,0.4)] transition-all duration-300"
            style={{
              height: `${(activeSlide / (SLIDE_LIST.length - 1)) * 100}%`,
              maxHeight: 'calc(100% - 12px)'
            }}
          />

          {SLIDE_LIST.map((slide, idx) => {
            const isActive = activeSlide === idx;
            const isHovered = hoveredSlide === idx;

            return (
              <div key={slide.id} className="relative flex items-center justify-center">
                <button
                  onClick={() => goToSlide(idx)}
                  onMouseEnter={() => setHoveredSlide(idx)}
                  onMouseLeave={() => setHoveredSlide(null)}
                  className="group relative w-5 h-5 flex items-center justify-center focus:outline-none cursor-pointer"
                  aria-label={`Slide ${idx + 1}: ${slide.title}`}
                >
                  {/* Active Smooth Sliding Pill */}
                  {isActive ? (
                    <motion.div
                      layoutId="activeSlideReticle"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="w-3.5 h-4.5 rounded-full bg-[#e95126] shadow-[0_2px_8px_rgba(233,81,38,0.5)] flex items-center justify-center">
                        <div className="w-1 h-1 rounded-full bg-white" />
                      </div>
                    </motion.div>
                  ) : (
                    /* Inactive Bead */
                    <div className="relative flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#222720]/25 group-hover:bg-[#e95126] group-hover:scale-135 transition-all duration-200" />
                    </div>
                  )}
                </button>

                {/* Floating Glass Tooltip on Hover */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, x: -8, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -8, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-9 top-1/2 -translate-y-1/2 pointer-events-none z-50 flex items-center"
                    >
                      <div className="relative bg-[#1a1e18]/95 backdrop-blur-xl border border-white/15 text-white rounded-lg px-2.5 py-1 shadow-[0_8px_24px_rgba(0,0,0,0.25)] flex items-center gap-2 whitespace-nowrap">
                        <span className="font-mono-tech text-[9px] font-bold text-[#e95126] bg-[#e95126]/15 px-1.5 py-0.5 rounded border border-[#e95126]/30">
                          {slide.code}
                        </span>
                        <span className="text-xs font-semibold tracking-tight text-white/95">
                          {slide.title}
                        </span>
                        {/* Connecting pointer pip */}
                        <div className="w-1.5 h-1.5 bg-[#1a1e18] border-t border-r border-white/15 rotate-45 absolute -right-1 top-1/2 -translate-y-1/2" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Down Quick Jump Button */}
        <button
          onClick={() => goToSlide(activeSlide + 1)}
          disabled={activeSlide === SLIDE_LIST.length - 1}
          className="w-5 h-5 rounded-full flex items-center justify-center text-[#222720]/40 hover:text-[#e95126] hover:bg-[#e95126]/10 transition-colors disabled:opacity-20 disabled:pointer-events-none cursor-pointer my-0.5"
          aria-label="Next section"
        >
          <ChevronDown className="w-3.5 h-3.5" />
        </button>

        {/* Bottom Percentage Readout */}
        <div className="pt-1.5 border-t border-[#222720]/10 w-full flex justify-center">
          <span className="font-mono-tech text-[8.5px] font-bold text-[#66695f]">
            {Math.round(((activeSlide + 1) / SLIDE_LIST.length) * 100)}%
          </span>
        </div>

      </div>
    </div>
  );
}
