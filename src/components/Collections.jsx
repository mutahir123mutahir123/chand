import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { WordReveal, FadeUp, Stagger, StaggerItem } from './TextReveal';

const collections = [
  { title: 'RINGS',     image: '/images/rings/ring4.jpeg',                  link: '/rings'     },
  { title: 'NECKLACES', image: '/images/necklace/123.jpg',                  link: '/necklaces' },
  { title: 'EARRINGS',  image: '/images/earings/Follow me for more!.jpeg',  link: '/earrings'  },
];

const Collections = () => {
  return (
    <section className="py-32 bg-ivory">
      <div className="container">

        {/* ── Section header ───────────────────────────────────── */}
        <div className="text-center mb-20">
          <FadeUp delay={0.05}>
            <span className="text-[10px] tracking-[0.4em] font-sans text-muted uppercase mb-4 block">
              The Categories
            </span>
          </FadeUp>

          <h2 className="text-4xl md:text-5xl font-serif text-accent">
            <WordReveal text="Explore Collections" delay={0.15} />
          </h2>

          <FadeUp delay={0.35}>
            <div className="w-12 h-[2px] bg-accent mx-auto mt-6" />
          </FadeUp>
        </div>

        {/* ── Cards ────────────────────────────────────────────── */}
        <Stagger delay={0.2} stagger={0.18}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((item) => (
              <StaggerItem key={item.title}>
                <Link to={item.link}>
                  <motion.div
                    className="relative group overflow-hidden aspect-[4/5] block cursor-pointer"
                    whileHover="hover"
                    initial="rest"
                    animate="rest"
                  >
                    {/* Image with scale on hover */}
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      variants={{
                        rest:  { scale: 1 },
                        hover: { scale: 1.08, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
                      }}
                      className="w-full h-full object-cover"
                      style={{ opacity: 0.88 }}
                      onError={(e) => {
                        e.target.src =
                          'https://images.unsplash.com/photo-1573408302185-9127b5438e3e?q=80&w=1000&auto=format&fit=crop';
                      }}
                    />

                    {/* Dark overlay fades out on hover */}
                    <motion.div
                      variants={{
                        rest:  { backgroundColor: 'rgba(13,92,92,0.25)' },
                        hover: { backgroundColor: 'rgba(13,92,92,0.05)' },
                      }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    />

                    {/* ── Hover label (desktop) ───────────────────── */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <motion.div
                        variants={{
                          rest:  { y: 16, opacity: 0 },
                          hover: { y: 0,  opacity: 1, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
                        }}
                        className="hidden lg:block text-center"
                      >
                        <h3 className="text-white text-2xl tracking-[0.3em] font-serif border-b border-white/60 pb-2">
                          {item.title}
                        </h3>
                        <p className="text-white/70 text-[10px] tracking-[0.3em] mt-3 font-sans uppercase">
                          View All
                        </p>
                      </motion.div>
                    </div>

                    {/* ── Always-visible label (mobile) ─────────────── */}
                    <div className="absolute bottom-6 left-0 right-0 text-center lg:hidden">
                      <h3 className="text-white text-sm tracking-[0.3em] font-serif uppercase py-2 bg-teal/40 backdrop-blur-sm">
                        {item.title}
                      </h3>
                    </div>

                    {/* ── Tea-rose accent line (bottom, animates in on hover) ─ */}
                    <motion.div
                      variants={{
                        rest:  { scaleX: 0 },
                        hover: { scaleX: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                      }}
                      style={{ transformOrigin: 'left' }}
                      className="absolute bottom-0 left-0 w-full h-[3px] bg-accent"
                    />
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </div>
        </Stagger>
      </div>
    </section>
  );
};

export default Collections;
