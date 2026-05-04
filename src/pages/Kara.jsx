import React from 'react';
import { WordReveal, FadeUp } from '../components/TextReveal';

const Kara = () => {
  return (
    <div className="pt-32 pb-20 bg-primary min-h-screen">
      <div className="container">
        <header className="mb-16 text-center">
          <FadeUp delay={0.05}>
            <span className="text-[10px] tracking-[0.4em] font-sans text-muted uppercase mb-4 block">
              Collection
            </span>
          </FadeUp>
          <h1 className="text-5xl md:text-6xl font-serif text-accent">
            <WordReveal text="KARA" delay={0.15} />
          </h1>
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

export default Kara;