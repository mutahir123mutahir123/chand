import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import { products, USD_TO_PKR } from '../data/products';
import { useCartWishlist } from '../context/CartWishlistContext';

const ProductCard = ({ product, index }) => {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCartWishlist();
  const inWishlist = isInWishlist(product.id);

  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[#F0EEE6]">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop";
            }}
          />
        </Link>
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <button 
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-lg cursor-pointer ${inWishlist ? 'bg-accent text-white' : 'bg-white text-accent hover:bg-accent hover:text-white'}`}
            onClick={handleWishlistClick}
          >
            <Heart size={18} strokeWidth={1.5} fill={inWishlist ? "currentColor" : "none"} />
          </button>
          <button 
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors shadow-lg cursor-pointer"
            onClick={handleAddToCart}
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
          </button>
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-[10px] tracking-[0.2em] uppercase text-muted mb-1">{product.category}</p>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-lg tracking-wide group-hover:text-muted transition-colors">{product.name}</h3>
        </Link>
        <p className="font-sans text-sm mt-2 tracking-widest">Rs. {(product.price * USD_TO_PKR).toLocaleString()}</p>
      </div>
    </motion.div>
  );
};

const Rings = () => {
  const rings = products.filter(p => p.category === 'Rings');

  return (
    <div className="pt-32 pb-20 bg-primary min-h-screen">
      <div className="container">
        <header className="mb-16 text-center">
          <span className="text-[10px] tracking-[0.4em] font-sans text-muted uppercase mb-4 block">
            Collection
          </span>
          <h1 className="text-5xl md:text-6xl font-serif">RINGS</h1>
          <p className="text-muted mt-4 max-w-xl mx-auto">Discover our exquisite collection of rings, crafted with precision and elegance.</p>
        </header>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {rings.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rings;