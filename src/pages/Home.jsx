import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import Collections from '../components/Collections';

const Home = () => {
  return (
    <>
      <Hero />
      <ProductGrid />
      
      {/* Brand Section / About Us */}
      <section className="py-40 bg-primary-dark overflow-hidden relative">
        {/* Background Large Text (as seen in reference) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-20 whitespace-nowrap">
          <h2 className="text-[20vw] md:text-[25vw] heading-luxury leading-none">
            ABOUT US
          </h2>
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-[4/5] md:aspect-square">
              <img 
                src="/philosphy.jpeg" 
                alt="Craftsmanship" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1573408302185-9127b5438e3e?q=80&w=1000&auto=format&fit=crop";
                }}
              />
              <div className="absolute -bottom-10 -right-10 bg-primary p-12 hidden lg:block shadow-xl">
                <p className="font-serif text-3xl italic text-accent">"Excellence in every detail."</p>
              </div>
            </div>
            <div className="lg:pl-10">
              <span className="text-[10px] tracking-[0.4em] font-sans text-muted uppercase mb-4 block">
                Our Philosophy
              </span>
              <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight text-accent">
                Designed for the <br />Modern Individual
              </h2>
              <p className="text-muted text-sm md:text-base leading-relaxed mb-10 max-w-md">
                At SU DENIZ, we believe that jewelry is more than just an accessory—it's an expression of your journey. Each piece is meticulously designed in our studio and brought to life by master artisans using the finest materials.
              </p>
              <Link to="/our-story">
                <button className="btn-outline border-accent text-accent hover:bg-accent hover:text-white">Learn More About Us</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Collections />

      {/* Newsletter Section */}
      <section className="py-32 bg-primary">
        <div className="container text-center max-w-2xl">
          <span className="text-[10px] tracking-[0.4em] font-sans text-muted uppercase mb-4 block">
            Join Our Community
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Stay Inspired</h2>
          <p className="text-muted text-sm mb-10">
            Sign up for our newsletter to receive early access to new collections and behind-the-scenes content.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow bg-white/50 border border-accent/10 px-6 py-4 focus:outline-none focus:border-accent transition-colors"
            />
            <button className="btn-primary whitespace-nowrap">Subscribe</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
