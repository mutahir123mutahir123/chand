import React from 'react';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import { Heart, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Shop = () => {
  return (
    <div className="pt-32 pb-20 bg-primary">
      <div className="container">
        <header className="mb-16">
          <span className="text-[10px] tracking-[0.4em] font-sans text-muted uppercase mb-4 block">
            The Collection
          </span>
          <h1 className="text-5xl md:text-6xl font-serif">All Products</h1>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/product/${product.id}`}>
                <div className="relative aspect-[3/4] overflow-hidden bg-[#F0EEE6]">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors shadow-lg">
                      <Heart size={18} strokeWidth={1.5} />
                    </button>
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors shadow-lg">
                      <ShoppingBag size={18} strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
              </Link>
              
              <div className="mt-6 text-center">
                <p className="text-[10px] tracking-[0.2em] uppercase text-muted mb-1">{product.category}</p>
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-serif text-lg tracking-wide group-hover:text-muted transition-colors">{product.name}</h3>
                </Link>
                <p className="font-sans text-sm mt-2 tracking-widest">${product.price.toLocaleString()}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
