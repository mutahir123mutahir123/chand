import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import Collections from '../components/Collections';
import { WordReveal, FadeUp, FadeIn, ScaleReveal, Stagger, StaggerItem, DrawBorder } from '../components/TextReveal';

const Home = () => {
  return (
    <>
      <Hero />
      <ProductGrid />

      {/* ── Brand / About Section ───────────────────────────────── */}
      <section
        className="py-40 overflow-hidden relative"
        style={{ backgroundColor: '#F7C5C5' }}
      >
        {/* Large decorative watermark text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-10 whitespace-nowrap">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 0.1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="heading-luxury"
            style={{ fontSize: 'clamp(6rem, 22vw, 18rem)', lineHeight: 1 }}
          >
            ABOUT US
          </motion.h2>
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Image column */}
            <FadeIn direction="left" delay={0.15}>
              <div className="relative aspect-[4/5] md:aspect-square">
                <ScaleReveal delay={0.2}>
                  <img
                    src="/philosphy.jpeg"
                    alt="Craftsmanship"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src =
                        'https://images.unsplash.com/photo-1573408302185-9127b5438e3e?q=80&w=1000&auto=format&fit=crop';
                    }}
                  />
                </ScaleReveal>

                {/* Floating quote card */}
                <motion.div
                  initial={{ opacity: 0, x: 20, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.55, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute -bottom-10 -right-10 bg-white p-10 hidden lg:block shadow-xl"
                >
                  <p className="font-serif text-2xl italic text-accent">
                    "Excellence in every detail."
                  </p>
                </motion.div>
              </div>
            </FadeIn>

            {/* Text column */}
            <div className="lg:pl-10">
              <FadeUp delay={0.1}>
                <span className="text-[10px] tracking-[0.4em] font-sans text-muted uppercase mb-4 block">
                  Our Philosophy
                </span>
              </FadeUp>

              <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight text-accent">
                <WordReveal text="Designed for the" delay={0.2} />
                <br />
                <WordReveal text="Modern Individual" delay={0.45} />
              </h2>

              <FadeUp delay={0.6}>
                <p className="text-muted text-base md:text-lg leading-relaxed mb-10 max-w-md">
                  At SU DENIZ, we believe that jewelry is more than just an accessory—it's an
                  expression of your journey. Each piece is meticulously designed in our studio
                  and brought to life by master artisans using the finest materials.
                </p>
              </FadeUp>

              <FadeUp delay={0.75}>
                <Link to="/our-story">
                  <button className="btn-outline border-accent text-accent hover:bg-accent hover:text-white">
                    Learn More About Us
                  </button>
                </Link>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      <Collections />

      {/* ── Newsletter Section ───────────────────────────────────── */}
      <section className="py-32 bg-primary">
        <div className="container text-center max-w-2xl">
          <FadeUp delay={0.1}>
            <span className="text-[10px] tracking-[0.4em] font-sans text-muted uppercase mb-4 block">
              Join Our Community
            </span>
          </FadeUp>

          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-accent">
            <WordReveal text="Stay Inspired" delay={0.2} />
          </h2>

          <FadeUp delay={0.4}>
            <p className="text-muted text-base mb-10">
              Sign up for our newsletter to receive early access to new collections and
              behind-the-scenes content.
            </p>
          </FadeUp>

          <FadeUp delay={0.5}>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow bg-ivory border border-accent/20 px-6 py-4 focus:outline-none focus:border-accent transition-colors font-sans text-sm"
              />
              <button className="btn-primary whitespace-nowrap">Subscribe</button>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
};

export default Home;
