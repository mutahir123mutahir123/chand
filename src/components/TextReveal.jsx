/**
 * TextReveal.jsx
 * ──────────────────────────────────────────────────────────────────
 * Reusable animation primitives for beautiful text & section reveals.
 * All animations use Framer Motion and are viewport-triggered (once).
 * ──────────────────────────────────────────────────────────────────
 */
import React from 'react';
import { motion } from 'framer-motion';

/* ── Easing curves ─────────────────────────────────────────────── */
const EASE_OUT_EXPO   = [0.16, 1, 0.3, 1];
const EASE_OUT_CUBIC  = [0.33, 1, 0.68, 1];
const EASE_IN_OUT     = [0.25, 0.46, 0.45, 0.94];

/* ── 1. Word-by-word reveal (slot / mask effect) ─────────────────
   Each word slides up from below its overflow-hidden wrapper.
   Great for large display headings.
 ──────────────────────────────────────────────────────────────── */
export const WordReveal = ({
  text,
  className = '',
  delay = 0,
  stagger = 0.1,
  duration = 0.7,
}) => {
  const words = text.split(' ');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden:   { y: '115%', opacity: 0, rotateZ: 1 },
    visible:  {
      y: '0%',
      opacity: 1,
      rotateZ: 0,
      transition: { duration, ease: EASE_OUT_EXPO },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className={className}
      style={{ display: 'inline-block' }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}
        >
          <motion.span
            variants={wordVariants}
            style={{ display: 'inline-block' }}
          >
            {word}{i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

/* ── 2. Character-by-character reveal ────────────────────────────
   Each character fades + slides up with a stagger.
   Perfect for short, impactful headings.
 ──────────────────────────────────────────────────────────────── */
export const CharReveal = ({
  text,
  className = '',
  delay = 0,
  stagger = 0.035,
}) => {
  const chars = text.split('');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const charVariants = {
    hidden:  { y: '100%', opacity: 0 },
    visible: {
      y: '0%',
      opacity: 1,
      transition: { duration: 0.5, ease: EASE_OUT_EXPO },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className={className}
      aria-label={text}
      style={{ display: 'inline-block' }}
    >
      {chars.map((char, i) => (
        <span
          key={i}
          style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}
        >
          <motion.span
            variants={charVariants}
            style={{ display: 'inline-block' }}
            aria-hidden="true"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

/* ── 3. Clip-path reveal ─────────────────────────────────────────
   Content is revealed by animating a clip-path rectangle.
   Great for images, large text blocks, or banner elements.
 ──────────────────────────────────────────────────────────────── */
export const ClipReveal = ({
  children,
  className = '',
  delay = 0,
  direction = 'bottom',   // 'bottom' | 'top' | 'left' | 'right'
  duration = 1.1,
}) => {
  const clipMap = {
    bottom: ['inset(0 0 100% 0)', 'inset(0 0 0% 0)'],
    top:    ['inset(100% 0 0 0)', 'inset(0% 0 0 0)'],
    left:   ['inset(0 100% 0 0)', 'inset(0 0% 0 0)'],
    right:  ['inset(0 0 0 100%)', 'inset(0 0 0 0%)'],
  };
  const [from, to] = clipMap[direction] || clipMap.bottom;

  return (
    <motion.div
      initial={{ clipPath: from, opacity: 0.6 }}
      whileInView={{ clipPath: to, opacity: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration, delay, ease: EASE_OUT_EXPO }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ── 4. Fade-up ──────────────────────────────────────────────────
   General-purpose fade + translate-Y reveal.
 ──────────────────────────────────────────────────────────────── */
export const FadeUp = ({
  children,
  className = '',
  delay = 0,
  duration = 0.75,
  y = 40,
}) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration, delay, ease: EASE_IN_OUT }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ── 5. Fade-in from side ────────────────────────────────────────
   Slide in from left, right, up, or down.
 ──────────────────────────────────────────────────────────────── */
export const FadeIn = ({
  children,
  className = '',
  delay = 0,
  direction = 'left',
  distance = 50,
  duration = 0.85,
}) => {
  const initial = {
    opacity: 0,
    x: direction === 'left' ? -distance : direction === 'right' ? distance : 0,
    y: direction === 'up'   ?  distance : direction === 'down'  ? -distance : 0,
  };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration, delay, ease: EASE_OUT_EXPO }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ── 6. Scale reveal ─────────────────────────────────────────────
   Gentle scale-up + fade for cards, images, icons.
 ──────────────────────────────────────────────────────────────── */
export const ScaleReveal = ({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  from = 0.88,
}) => (
  <motion.div
    initial={{ opacity: 0, scale: from }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration, delay, ease: EASE_IN_OUT }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ── 7. Stagger container + item ─────────────────────────────────
   Wrap a list of <StaggerItem> children inside <Stagger> to
   animate them in sequence.
 ──────────────────────────────────────────────────────────────── */
export const Stagger = ({
  children,
  className = '',
  delay = 0,
  stagger = 0.13,
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-50px' }}
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: stagger,
          delayChildren: delay,
        },
      },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className = '', yOffset = 30 }) => (
  <motion.div
    variants={{
      hidden:  { opacity: 0, y: yOffset },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: EASE_OUT_CUBIC },
      },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ── 8. Shimmer highlight ────────────────────────────────────────
   A luxury shimmer that sweeps across text on viewport enter.
   Pass a solid `baseColor` and a `shineColor`.
 ──────────────────────────────────────────────────────────────── */
export const ShimmerText = ({
  text,
  className = '',
  delay = 0,
  baseColor = '#BE2E1D',
  shineColor = '#F7C5C5',
}) => (
  <motion.span
    initial={{ backgroundPosition: '200% center' }}
    whileInView={{ backgroundPosition: '-200% center' }}
    viewport={{ once: true }}
    transition={{ duration: 2.5, delay, ease: 'easeInOut' }}
    className={className}
    style={{
      backgroundImage: `linear-gradient(90deg, ${baseColor} 0%, ${shineColor} 40%, ${baseColor} 60%, ${baseColor} 100%)`,
      backgroundSize: '200% auto',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      display: 'inline-block',
    }}
  >
    {text}
  </motion.span>
);

/* ── 9. Rotating border reveal ───────────────────────────────────
   A decorative animated border that draws itself around an element.
 ──────────────────────────────────────────────────────────────── */
export const DrawBorder = ({ children, className = '', delay = 0 }) => (
  <motion.div
    className={`relative ${className}`}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    {/* top */}
    <motion.span
      variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 0.5, delay, ease: EASE_OUT_EXPO } } }}
      style={{ transformOrigin: 'left' }}
      className="absolute top-0 left-0 w-full h-[1px] bg-accent block"
    />
    {/* right */}
    <motion.span
      variants={{ hidden: { scaleY: 0 }, visible: { scaleY: 1, transition: { duration: 0.5, delay: delay + 0.15, ease: EASE_OUT_EXPO } } }}
      style={{ transformOrigin: 'top' }}
      className="absolute top-0 right-0 w-[1px] h-full bg-accent block"
    />
    {/* bottom */}
    <motion.span
      variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 0.5, delay: delay + 0.3, ease: EASE_OUT_EXPO } } }}
      style={{ transformOrigin: 'right' }}
      className="absolute bottom-0 left-0 w-full h-[1px] bg-accent block"
    />
    {/* left */}
    <motion.span
      variants={{ hidden: { scaleY: 0 }, visible: { scaleY: 1, transition: { duration: 0.5, delay: delay + 0.45, ease: EASE_OUT_EXPO } } }}
      style={{ transformOrigin: 'bottom' }}
      className="absolute top-0 left-0 w-[1px] h-full bg-accent block"
    />
    {children}
  </motion.div>
);

export default WordReveal;
