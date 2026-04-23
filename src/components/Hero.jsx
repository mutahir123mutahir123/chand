import React from 'react';
import { motion } from 'framer-motion';
import { USD_TO_PKR } from '../data/products';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-primary-dark">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="z-10"
        >
          <span className="text-[10px] tracking-[0.4em] font-sans text-ivory/60 uppercase mb-4 block">
            The Art of Elegance
          </span>
          <h2 className="text-7xl md:text-9xl font-serif mb-8 leading-[0.9] tracking-tighter text-ivory">
            Timeless <br />
            <span className="italic font-light">Brilliance</span>
          </h2>
          <p className="text-ivory/80 max-w-md mb-10 text-sm md:text-base leading-relaxed">
            Discover our curated collection of fine jewelry, handcrafted with passion and precision to celebrate your most precious moments.
          </p>
          <div className="hidden lg:flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/shop"><button className="btn-primary bg-ivory text-accent hover:bg-white">Shop Collection</button></Link>
            <Link to="/our-story"><button className="btn-outline border-ivory text-ivory hover:bg-ivory hover:text-accent">Our Story</button></Link>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative aspect-[4/5] lg:aspect-auto lg:h-[80vh]"
        >
          {/* Background Decorative Element */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-dark/40 rounded-full blur-3xl opacity-50" />
          
          {/* Main Hero Image */}
          <div className="relative w-full h-full overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=2000&auto=format&fit=crop" 
              alt="Luxury Jewelry" 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[2s]"
            />
            
            {/* Floating Product Card (Small) */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute bottom-10 -left-10 bg-white/80 backdrop-blur-md p-6 shadow-xl hidden xl:block"
            >
              <p className="text-[8px] tracking-widest uppercase text-muted mb-2">Featured Piece</p>
              <h3 className="font-serif text-lg mb-1">Aura Gold Ring</h3>
              <p className="font-sans text-xs tracking-widest">Rs. {(2450 * USD_TO_PKR).toLocaleString()}</p>
            </motion.div>
          </div>
          
          {/* Buttons - under image on mobile, integrated on desktop */}
          <div className="mt-8 lg:hidden flex flex-col space-y-4 items-center">
            <Link to="/shop"><button className="btn-primary">Shop Collection</button></Link>
            <Link to="/our-story"><button className="btn-outline">Our Story</button></Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;