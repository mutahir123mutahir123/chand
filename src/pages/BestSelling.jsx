import React from 'react';
import { WordReveal, FadeUp } from '../components/TextReveal';

const BestSelling = () => {
  return (
    <div className="pt-32 pb-20 bg-primary min-h-screen">
      <div className="container">
        <div className="mb-16 relative h-64 md:h-96 overflow-hidden rounded-lg">
          <img
            src="/images/chand-products/12.webp"
            alt="Best Selling"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-serif text-white tracking-[0.2em]">
              BEST SELLING
            </h1>
          </div>
        </div>
        <header className="mb-16 text-center">
          <FadeUp delay={0.05}>
            <span className="text-[10px] tracking-[0.4em] font-sans text-muted uppercase mb-4 block">
              Most Popular
            </span>
          </FadeUp>
          <FadeUp delay={0.35}>
            <div className="w-12 h-[2px] bg-accent mx-auto mt-6" />
          </FadeUp>
        </header>
        <FadeUp delay={0.3}>
          <p className="text-center text-muted py-20 font-sans text-lg">No Products Available</p>
        </FadeUp>
      </div>
    </div>
  );
};

export default BestSelling;