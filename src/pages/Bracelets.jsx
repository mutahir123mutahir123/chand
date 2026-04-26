import React from 'react';
import { products } from '../data/products';
import { WordReveal, FadeUp, Stagger, StaggerItem } from '../components/TextReveal';
import CategoryProductCard from '../components/CategoryProductCard';

const Bracelets = () => {
  const bracelets = products.filter((p) => p.category === 'Bracelets');

  return (
    <div className="pt-32 pb-20 bg-primary min-h-screen">
      <div className="container">

        {/* ── Header ──────────────────────────────────────────── */}
        <header className="mb-16 text-center">
          <FadeUp delay={0.05}>
            <span className="text-[10px] tracking-[0.4em] font-sans text-muted uppercase mb-4 block">
              Collection
            </span>
          </FadeUp>

          <h1 className="text-5xl md:text-6xl font-serif text-accent">
            <WordReveal text="BRACELETS" delay={0.15} />
          </h1>

          <FadeUp delay={0.35}>
            <p className="text-muted mt-4 max-w-xl mx-auto text-sm md:text-base">
              Explore our stunning selection of bracelets, designed to adorn your wrist with grace.
            </p>
          </FadeUp>

          <FadeUp delay={0.45}>
            <div className="w-12 h-[2px] bg-accent mx-auto mt-6" />
          </FadeUp>
        </header>

        {/* ── Grid ────────────────────────────────────────────── */}
        {bracelets.length > 0 ? (
          <Stagger delay={0.3} stagger={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {bracelets.map((product) => (
                <StaggerItem key={product.id}>
                  <CategoryProductCard product={product} />
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        ) : (
          <FadeUp delay={0.3}>
            <p className="text-center text-muted py-20 font-sans">No bracelets found in the collection.</p>
          </FadeUp>
        )}
      </div>
    </div>
  );
};

export default Bracelets;
