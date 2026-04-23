import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products, USD_TO_PKR } from '../data/products';
import { Heart, ShoppingBag, ArrowLeft, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCartWishlist } from '../context/CartWishlistContext';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart, addToWishlist, isInWishlist } = useCartWishlist();
  const inWishlist = product ? isInWishlist(product.id) : false;

  const handleAddToCart = () => {
    if (product) addToCart(product);
  };

  const handleAddToWishlist = () => {
    if (product) addToWishlist(product);
  };

  if (!product) {
    return (
      <div className="pt-40 pb-20 container text-center">
        <h1 className="text-4xl font-serif mb-8">Product not found</h1>
        <Link to="/shop" className="btn-primary">Back to Shop</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-primary min-h-screen">
      <div className="container">
        <Link to="/shop" className="inline-flex items-center text-[10px] tracking-widest uppercase text-muted hover:text-accent mb-12 transition-colors">
          <ArrowLeft size={14} className="mr-2" /> Back to Collection
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Image Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/5] bg-[#F0EEE6] overflow-hidden"
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
            />
          </motion.div>

          {/* Product Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <span className="text-[10px] tracking-[0.4em] font-sans text-muted uppercase mb-4">
              {product.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-serif mb-6">{product.name}</h1>
            <p className="text-2xl font-sans tracking-widest mb-8 text-accent">
              Rs. {(product.price * USD_TO_PKR).toLocaleString()}
            </p>
            
            <div className="h-[1px] bg-accent/10 w-full mb-8" />
            
            <p className="text-muted leading-relaxed mb-10 max-w-lg">
              {product.description}
            </p>

            <div className="flex flex-col space-y-4 mb-12">
              <button 
                className="btn-primary w-full md:w-auto flex items-center justify-center"
                onClick={handleAddToCart}
              >
                <ShoppingBag size={18} className="mr-3" /> Add to Shopping Bag
              </button>
              <button 
                className="btn-outline w-full md:w-auto flex items-center justify-center"
                onClick={handleAddToWishlist}
              >
                <Heart size={18} className="mr-3" /> Add to Wishlist
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-accent/10">
              <div className="flex flex-col items-center text-center">
                <Truck size={20} className="text-muted mb-3" strokeWidth={1} />
                <span className="text-[10px] tracking-widest uppercase text-muted">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <ShieldCheck size={20} className="text-muted mb-3" strokeWidth={1} />
                <span className="text-[10px] tracking-widest uppercase text-muted">Secure Payment</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <RefreshCw size={20} className="text-muted mb-3" strokeWidth={1} />
                <span className="text-[10px] tracking-widest uppercase text-muted">30-Day Returns</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
