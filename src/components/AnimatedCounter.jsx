import React, { useEffect, useState } from 'react';
import { useInView, animate } from 'framer-motion';

/**
 * AnimatedCounter:
 * Counts smoothly from 0 to `value` whenever the element scrolls into view.
 * If `replayOnView` is true (default), it re-triggers whenever it re-enters the viewport.
 */
export default function AnimatedCounter({
  from = 0,
  to,
  duration = 1.8,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
  replayOnView = true
}) {
  const [displayValue, setDisplayValue] = useState(from);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: !replayOnView, amount: 0.2 });

  useEffect(() => {
    if (!isInView) {
      if (replayOnView) {
        setDisplayValue(from);
      }
      return;
    }

    const controls = animate(from, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        setDisplayValue(latest);
      },
    });

    return () => controls.stop();
  }, [isInView, from, to, duration, replayOnView]);

  const formatted = decimals > 0 
    ? displayValue.toFixed(decimals) 
    : Math.round(displayValue).toLocaleString('en-IN');

  return (
    <span ref={ref} className={className}>
      {prefix}{formatted}{suffix}
    </span>
  );
}
