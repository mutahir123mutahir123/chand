import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeUp } from '../components/TextReveal';

const products = [
  { id: 1, name: 'Pink Jelly Bangle', price: 850 },
  { id: 2, name: 'Blue Crystal Bangle', price: 950 },
  { id: 3, name: 'Multicolor Bangle Set', price: 1200 },
];

const JellyBangles = () => {
  return (
    <div className="pt-32 pb-20 bg-primary min-h-screen">
      <div className="container">
        <div className="mb-16 relative h-64 md:h-96 overflow-hidden rounded-lg">
          <img
            src="/images/chand-products/9.webp"
            alt="Jelly Bangles"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-serif text-white tracking-[0.2em]">
              JELLY BANGLES
            </h1>
          </div>
        </div>

        <header className="mb-16 text-center">
          <FadeUp delay={0.05}>
            <span className="text-[10px] tracking-[0.4em] font-sans text-muted uppercase mb-4 block">
              Collection
            </span>
          </FadeUp>
          <FadeUp delay={0.35}>
            <div className="w-12 h-[2px] bg-accent mx-auto mt-6" />
          </FadeUp>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
              whileHover="hover"
            >
              <Link to={`/product/${product.id}`}>
                <div
                  className="relative aspect-square overflow-hidden rounded-lg"
                  style={{ backgroundColor: '#FEF0F0' }}
                >
                  <img
                    src="/images/chand-products/jelly.webp"
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    variants={{
                      rest: { opacity: 0 },
                      hover: { opacity: 1, transition: { duration: 0.3 } },
                    }}
                    className="absolute inset-0 flex items-center justify-center space-x-4"
                    style={{ background: 'rgba(13,92,92,0.08)' }}
                  >
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors shadow-lg">
                      <Heart size={18} strokeWidth={1.5} />
                    </button>
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors shadow-lg">
                      <ShoppingBag size={18} strokeWidth={1.5} />
                    </button>
                  </motion.div>
                  <motion.div
                    variants={{
                      rest: { scaleX: 0 },
                      hover: { scaleX: 1, transition: { duration: 0.4 } },
                    }}
                    style={{ transformOrigin: 'left' }}
                    className="absolute bottom-0 left-0 w-full h-[3px] bg-accent"
                  />
                </div>
              </Link>

              <div className="mt-3 text-center">
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-serif text-sm tracking-wide text-accent hover:text-muted transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="font-sans text-xs mt-1 tracking-widest text-muted">
                  Rs. {product.price.toLocaleString()}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JellyBangles;