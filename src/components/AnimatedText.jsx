import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * AnimatedText:
 * Staggers in each word or letter loaded smoothly from the bottom/edge with 3D perspective rotation.
 * Replays on viewport scroll if replayOnView=true.
 * When enableCodeScramble=true, triggers a 3D code formation / cipher decode effect on hover or click.
 */
const CODE_GLYPHS = "01{}[];:<>_#*&$+=~^/\\";

export default function AnimatedText({
  text,
  className = '',
  mode = 'word', // 'word' | 'char'
  delay = 0,
  stagger = 0.045,
  direction = 'bottom', // 'bottom' | 'left' | 'right'
  replayOnView = true,
  enableCodeScramble = false,
  scrambleCascadeDelay = 0,
  triggerScramble = 0,
  isOrange = false,
}) {
  const [scrambleDetails, setScrambleDetails] = useState(null);
  const [hasEverScrambled, setHasEverScrambled] = useState(false);
  const timerRef = useRef(null);
  const timeoutRef = useRef(null);

  const startScramble = (extraDelay = 0) => {
    if (!enableCodeScramble) return;
    setHasEverScrambled(true);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    timeoutRef.current = setTimeout(() => {
      const chars = Array.from(text);
      const totalChars = chars.length;
      let frame = 0;
      const maxFrames = totalChars * 2 + 8;

      timerRef.current = setInterval(() => {
        frame++;
        const nextDetails = chars.map((realChar, i) => {
          if (realChar === ' ' || realChar === '\u00A0') {
            return { char: realChar, locked: true, rotX: 0, rotY: 0 };
          }
          const lockFrame = i * 2 + 3;
          if (frame >= lockFrame) {
            return { char: realChar, locked: true, rotX: 0, rotY: 0 };
          }
          const randGlyph = CODE_GLYPHS[Math.floor(Math.random() * CODE_GLYPHS.length)];
          const randRotX = (Math.random() - 0.5) * 50;
          const randRotY = (Math.random() - 0.5) * 40;
          return { char: randGlyph, locked: false, rotX: randRotX, rotY: randRotY };
        });

        setScrambleDetails(nextDetails);

        if (frame >= maxFrames) {
          clearInterval(timerRef.current);
          timerRef.current = null;
          setScrambleDetails(null);
        }
      }, 32);
    }, extraDelay);
  };

  useEffect(() => {
    if (triggerScramble > 0 && enableCodeScramble) {
      startScramble(scrambleCascadeDelay);
    }
  }, [triggerScramble]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const getInitialPosition = () => {
    switch (direction) {
      case 'left': return { x: -35, y: 0, opacity: 0, rotateY: -35 };
      case 'right': return { x: 35, y: 0, opacity: 0, rotateY: 35 };
      default: return { x: 0, y: 35, opacity: 0, rotateX: 45 };
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    hidden: {
      ...getInitialPosition(),
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      rotateX: 0,
      rotateY: 0,
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // If enableCodeScramble is false (e.g. description paragraphs or normal usage), use original behavior
  if (!enableCodeScramble) {
    const elements = mode === 'char' ? Array.from(text) : text.split(' ');
    return (
      <motion.span
        className={`inline-flex flex-wrap ${className}`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: !replayOnView, amount: 0.2 }}
        style={{ perspective: '1000px', backfaceVisibility: 'hidden' }}
      >
        {elements.map((item, index) => (
          <motion.span
            key={index}
            variants={childVariants}
            className="inline-block whitespace-pre transform-gpu will-change-transform"
          >
            {item}
            {mode === 'word' && index !== elements.length - 1 ? '\u00A0' : ''}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  // When enableCodeScramble is true:
  // Render character spans that preserve entrance animation on load, then lock permanently to opacity 1 after scramble!
  const allChars = Array.from(text);

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className} cursor-pointer`}
      variants={!hasEverScrambled ? containerVariants : undefined}
      initial={!hasEverScrambled ? "hidden" : false}
      whileInView={!hasEverScrambled ? "visible" : undefined}
      animate={hasEverScrambled ? { opacity: 1 } : undefined}
      viewport={{ once: !replayOnView, amount: 0.2 }}
      style={{
        perspective: '1000px',
        backfaceVisibility: 'hidden',
        opacity: hasEverScrambled ? 1 : undefined,
      }}
      onMouseEnter={() => startScramble(0)}
      onClick={() => startScramble(0)}
    >
      {allChars.map((realChar, index) => {
        const item = scrambleDetails ? scrambleDetails[index] : null;
        const isLocked = item ? item.locked : true;
        const charToShow = item ? item.char : realChar;

        return (
          <motion.span
            key={index}
            variants={!hasEverScrambled ? childVariants : undefined}
            initial={!hasEverScrambled ? undefined : false}
            animate={
              hasEverScrambled
                ? item && !isLocked
                  ? {
                      rotateX: item.rotX,
                      rotateY: item.rotY,
                      scale: 1.12,
                      opacity: 1,
                      x: 0,
                      y: 0,
                    }
                  : {
                      x: 0,
                      y: 0,
                      opacity: 1,
                      rotateX: 0,
                      rotateY: 0,
                      scale: 1,
                    }
                : undefined
            }
            transition={
              hasEverScrambled
                ? item && !isLocked
                  ? { duration: 0.05 }
                  : { duration: 0.2, ease: 'easeOut' }
                : undefined
            }
            style={{
              transformStyle: 'preserve-3d',
              opacity: hasEverScrambled ? 1 : undefined,
              textShadow: item && !isLocked ? '0 0 12px rgba(233,81,38,0.75)' : 'none',
            }}
            className={`inline-block whitespace-pre transform-gpu ${
              item && !isLocked
                ? 'font-mono text-[#e95126] font-bold'
                : isOrange
                ? 'text-[#e95126]'
                : ''
            }`}
          >
            {charToShow}
          </motion.span>
        );
      })}
    </motion.span>
  );
}
