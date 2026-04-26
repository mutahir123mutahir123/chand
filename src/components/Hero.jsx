import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/* ═══════════════════════════════════════════════════════════════════
   SLIDE DATA
   Each slide has its own background colour, accent colour, copy,
   and featured-piece card. Images 2 & 3 come from /public/images/.
 ═══════════════════════════════════════════════════════════════════ */
const SLIDES = [
  {
    id: 0,
    tag:         'The Art of Elegance',
    heading:     'Timeless',
    subheading:  'Brilliance',
    description: 'Discover our curated collection of fine jewelry, handcrafted with passion and precision to celebrate your most precious moments.',
    image:       'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=2000&auto=format&fit=crop',
    bg:          '#1C1C2E',          // Midnight Indigo
    glowA:       'rgba(155,107,107,0.22)',
    glowB:       'rgba(180,160,220,0.14)',
    subColor:    '#C4B5E8',          // Soft Lavender
    overlayGrad: 'rgba(28,28,46,0.50)',
  },
  {
    id: 1,
    tag:         'Crafted for Eternity',
    heading:     'Radiant',
    subheading:  'Elegance',
    description: 'Each necklace and bracelet tells a story of devotion — sculpted by master artisans from the finest gold, silver, and precious gemstones.',
    image:       '/images/2nd-img.jpg',
    bg:          '#1C1C2E',          // Midnight Indigo
    glowA:       'rgba(155,107,107,0.22)',
    glowB:       'rgba(180,160,220,0.14)',
    subColor:    '#C4B5E8',          // Soft Lavender
    overlayGrad: 'rgba(28,28,46,0.50)',
  },
  {
    id: 2,
    tag:         'Where Nature Meets Luxury',
    heading:     'Forever',
    subheading:  'Yours',
    description: 'From nature\'s depths to the heart of your story — our rings and earrings are crafted to last lifetimes and outlive every trend.',
    image:       '/images/3rd-img.webp',
    bg:          '#1C1C2E',          // Midnight Indigo
    glowA:       'rgba(155,107,107,0.22)',
    glowB:       'rgba(180,160,220,0.14)',
    subColor:    '#C4B5E8',          // Soft Lavender
    overlayGrad: 'rgba(28,28,46,0.50)',
  },
];

const AUTO_INTERVAL = 5500; // ms

/* ═══════════════════════════════════════════════════════════════════
   ANIMATION VARIANTS
 ═══════════════════════════════════════════════════════════════════ */
const EASE_OUT = [0.16, 1, 0.3, 1];
const EASE_IN  = [0.4,  0, 0.6, 1];

// Text block — slides sideways + fades
const textVariants = {
  enter: (dir) => ({
    x:       dir > 0 ? 90 : -90,
    opacity: 0,
  }),
  center: {
    x:       0,
    opacity: 1,
    transition: { duration: 0.65, ease: EASE_OUT },
  },
  exit: (dir) => ({
    x:       dir > 0 ? -90 : 90,
    opacity: 0,
    transition: { duration: 0.38, ease: EASE_IN },
  }),
};

// Image panel — clip-path wipe from/to the slide direction
const imageVariants = {
  enter: (dir) => ({
    clipPath: dir > 0 ? 'inset(0 0 0 100%)' : 'inset(0 100% 0 0)',
    scale:    1.06,
    opacity:  0.7,
  }),
  center: {
    clipPath: 'inset(0 0 0 0%)',
    scale:    1,
    opacity:  1,
    transition: { duration: 0.85, ease: EASE_OUT },
  },
  exit: (dir) => ({
    clipPath: dir > 0 ? 'inset(0 100% 0 0)' : 'inset(0 0 0 100%)',
    scale:    0.97,
    opacity:  0.6,
    transition: { duration: 0.55, ease: EASE_IN },
  }),
};

/* ═══════════════════════════════════════════════════════════════════
   HERO COMPONENT
 ═══════════════════════════════════════════════════════════════════ */
const Hero = () => {
  const [[current, direction], setSlide] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const go = useCallback((dir) => {
    setSlide(([prev]) => [(prev + dir + SLIDES.length) % SLIDES.length, dir]);
  }, []);

  const goTo = useCallback((idx) => {
    setSlide(([prev]) => [idx, idx > prev ? 1 : -1]);
  }, []);

  /* Auto-advance */
  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current);
    if (!isPaused) {
      timerRef.current = setInterval(() => go(1), AUTO_INTERVAL);
    }
  }, [go, isPaused]);

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [resetTimer, current, isPaused]);

  const slide = SLIDES[current];

  return (
    <motion.section
      className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden"
      animate={{ backgroundColor: slide.bg }}
      transition={{ duration: 0.85, ease: EASE_OUT }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >

      {/* ── Animated ambient glows (key-based so they refresh per slide) */}
      <motion.div
        key={`glowA-${current}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: [1, 1.22, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-24 -left-44 w-[720px] h-[720px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${slide.glowA} 0%, transparent 70%)` }}
      />
      <motion.div
        key={`glowB-${current}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: [1.2, 1, 1.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute -bottom-20 -right-44 w-[580px] h-[580px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${slide.glowB} 0%, transparent 70%)` }}
      />

      {/* ── Slide counter (top-right) ─────────────────────────────── */}
      <div className="absolute top-28 right-6 lg:right-10 z-20 flex items-center space-x-2">
        <span className="text-white font-serif text-2xl leading-none tabular-nums">
          {String(current + 1).padStart(2, '0')}
        </span>
        <span className="text-white/30 text-sm font-sans">/</span>
        <span className="text-white/40 text-sm font-sans">
          {String(SLIDES.length).padStart(2, '0')}
        </span>
      </div>

      {/* ── Main grid ────────────────────────────────────────────── */}
      <div className="container grid lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* ── TEXT COLUMN ─────────────────────────────────────────── */}
        <div className="z-10 relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`text-${current}`}
              custom={direction}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {/* Tag line */}
              <span className="text-[10px] tracking-[0.45em] font-sans text-white/50 uppercase mb-6 block">
                {slide.tag}
              </span>

              {/* Big heading */}
              <h2 className="text-7xl md:text-9xl font-serif mb-8 leading-[0.9] tracking-tighter">
                <span className="block text-white">{slide.heading}</span>
                <span
                  className="block italic font-light"
                  style={{ color: slide.subColor }}
                >
                  {slide.subheading}
                </span>
              </h2>

              {/* Description */}
              <p className="text-white/80 max-w-md mb-10 text-base md:text-lg leading-relaxed">
                {slide.description}
              </p>

              {/* CTA buttons – desktop only */}
              <div className="hidden lg:flex flex-row space-x-4">
                <Link to="/shop">
                  <button className="btn-primary">Shop Collection</button>
                </Link>
                <Link to="/our-story">
                  <button
                    className="btn-outline transition-colors"
                    style={{ borderColor: 'rgba(255,255,255,0.55)', color: '#fff' }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    Our Story
                  </button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── IMAGE COLUMN ────────────────────────────────────────── */}
        <div className="relative aspect-[4/5] lg:aspect-auto lg:h-[80vh]">

          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={`img-${current}`}
              custom={direction}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 overflow-hidden shadow-2xl"
            >
              {/* Ken-Burns subtle zoom on each slide */}
              <motion.img
                src={slide.image}
                alt={slide.heading}
                className="w-full h-full object-cover"
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{ duration: 7, ease: 'easeOut' }}
                onError={(e) => {
                  e.target.src =
                    'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=2000&auto=format&fit=crop';
                }}
              />

              {/* Bottom gradient matching slide bg */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `linear-gradient(to top, ${slide.overlayGrad} 0%, transparent 55%)`,
                }}
              />
            </motion.div>
          </AnimatePresence>

        </div>
      </div>

      {/* ── ARROW BUTTONS ────────────────────────────────────────── */}
      {[
        { dir: -1, icon: ChevronLeft,  side: 'left-8'  },
        { dir:  1, icon: ChevronRight, side: 'right-8' },
      ].map(({ dir, icon: Icon, side }) => (
        <motion.button
          key={dir}
          whileHover={{ scale: 1.12, backgroundColor: 'rgba(255,255,255,0.22)' }}
          whileTap={{ scale: 0.92 }}
          onClick={() => { go(dir); setIsPaused(false); }}
          aria-label={dir > 0 ? 'Next slide' : 'Previous slide'}
          className={`absolute ${side} top-1/2 -translate-y-1/2 z-20
            hidden lg:flex items-center justify-center
            w-12 h-12
            rounded-full border border-white/30 bg-white/10 backdrop-blur-sm
            text-white cursor-pointer transition-colors duration-300`}
        >
          <Icon size={20} strokeWidth={1.5} />
        </motion.button>
      ))}

      {/* ── SLIDE INDICATORS (progress bars) ─────────────────────── */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center space-x-3 z-20">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => { goTo(i); setIsPaused(false); }}
            aria-label={`Go to slide ${i + 1}`}
            className="relative h-[3px] rounded-full overflow-hidden cursor-pointer transition-all duration-500"
            style={{
              width:           i === current ? '48px' : '22px',
              backgroundColor: 'rgba(255,255,255,0.25)',
            }}
          >
            {i === current && (
              <motion.div
                className="absolute inset-0 rounded-full bg-white"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isPaused ? undefined : 1 }}
                transition={{ duration: AUTO_INTERVAL / 1000, ease: 'linear' }}
                style={{ transformOrigin: 'left' }}
              />
            )}
            {i !== current && (
              <div className="absolute inset-0 bg-white/50 rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-8 hidden lg:flex flex-col items-center space-y-2 z-20"
      >
        <span className="text-[8px] tracking-[0.4em] uppercase text-white/35 font-sans">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[1px] h-8 bg-gradient-to-b from-white/35 to-transparent"
        />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
