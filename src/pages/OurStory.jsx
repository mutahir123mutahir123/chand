import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { WordReveal, FadeUp, FadeIn, ScaleReveal, Stagger, StaggerItem, DrawBorder } from '../components/TextReveal';

const OurStory = () => {
  return (
    <div className="min-h-screen bg-primary pt-32 pb-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">

          {/* ── Page header ──────────────────────────────────────── */}
          <FadeUp delay={0.05}>
            <span className="text-[10px] tracking-[0.4em] font-sans text-muted uppercase mb-4 block text-center">
              Our Story
            </span>
          </FadeUp>

          <h1 className="text-5xl md:text-7xl font-serif text-center mb-12 leading-tight text-accent">
            <WordReveal text="The Art of" delay={0.15} />
            <br />
            <span className="italic">
              <WordReveal text="Fine Jewelry" delay={0.35} />
            </span>
          </h1>

          <FadeUp delay={0.5}>
            <div className="w-12 h-[2px] bg-accent mx-auto mb-16" />
          </FadeUp>

          {/* ── Story block ──────────────────────────────────────── */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
            <FadeIn direction="left" delay={0.15}>
              <ScaleReveal delay={0.2}>
                <img
                  src="/philosphy.jpeg"
                  alt="Our Craftsmanship"
                  className="w-full h-auto object-cover shadow-lg"
                  onError={(e) => {
                    e.target.src =
                      'https://images.unsplash.com/photo-1573408302185-9127b5438e3e?q=80&w=1000&auto=format&fit=crop';
                  }}
                />
              </ScaleReveal>
            </FadeIn>

            <Stagger delay={0.3} stagger={0.18}>
              <StaggerItem>
                <p className="text-muted text-base md:text-lg leading-relaxed">
                  SU DENIZ was founded with a singular vision: to create jewelry that tells a
                  story. Each piece in our collection is a testament to the artistry and
                  dedication of our master craftsmen, who have spent decades honing their skills
                  in the ancient traditions of jewelry making.
                </p>
              </StaggerItem>
              <StaggerItem className="mt-6">
                <p className="text-muted text-base md:text-lg leading-relaxed">
                  Our journey began in a small studio, where passion met precision. Today, we
                  continue to uphold the same values that guided us from the start – quality,
                  authenticity, and the belief that every individual deserves jewelry that
                  reflects their unique journey.
                </p>
              </StaggerItem>
              <StaggerItem className="mt-6">
                <p className="text-muted text-base md:text-lg leading-relaxed">
                  We source only the finest materials, from ethically mined gemstones to
                  recycled precious metals. Every piece is designed to be more than an
                  accessory – it's a memory, a milestone, a piece of art that can be worn
                  and cherished for generations.
                </p>
              </StaggerItem>
            </Stagger>
          </div>

          {/* ── Values ───────────────────────────────────────────── */}
          <section
            className="py-16 px-8 mb-20 rounded-none relative overflow-hidden"
            style={{ backgroundColor: '#F7C5C5' }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif mb-2 text-accent">
                <WordReveal text="Our Values" delay={0.1} />
              </h2>
              <div className="w-8 h-[2px] bg-accent mx-auto mt-4" />
            </div>

            <Stagger delay={0.25} stagger={0.18}>
              <div className="grid md:grid-cols-3 gap-8 mt-4">
                {[
                  { icon: '✦', title: 'Craftsmanship', desc: 'Every piece is meticulously handcrafted by skilled artisans' },
                  { icon: '♥', title: 'Sustainability', desc: 'We prioritize ethical sourcing and sustainable practices' },
                  { icon: '∞', title: 'Timeless Design', desc: 'Classic pieces designed to last beyond trends' },
                ].map((v) => (
                  <StaggerItem key={v.title}>
                    <DrawBorder delay={0.1} className="text-center p-8 bg-white/60 backdrop-blur-sm">
                      <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <span className="font-serif text-3xl text-accent">{v.icon}</span>
                      </div>
                      <h3 className="font-serif text-xl mb-3 text-accent">{v.title}</h3>
                      <p className="text-muted text-sm">{v.desc}</p>
                    </DrawBorder>
                  </StaggerItem>
                ))}
              </div>
            </Stagger>
          </section>

          {/* ── Visit studio CTA ─────────────────────────────────── */}
          <FadeUp delay={0.1}>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-accent">Visit Our Studio</h2>
              <p className="text-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                We invite you to experience our collection in person. Visit our studio to
                explore our latest designs and speak with our knowledgeable staff about
                creating a piece that's uniquely yours.
              </p>
              <Link to="/contact" className="btn-primary inline-block">
                Get in Touch
              </Link>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
