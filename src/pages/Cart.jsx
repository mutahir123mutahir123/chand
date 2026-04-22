import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, X, ArrowRight } from 'lucide-react';
import { useCartWishlist } from '../context/CartWishlistContext';
import { USD_TO_PKR } from '../data/products';

const Cart = () => {
  const { cartItems, updateCartQuantity, removeFromCart } = useCartWishlist();
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="pt-32 pb-20 bg-primary min-h-screen">
      <div className="container">
        <header className="mb-16">
          <span className="text-[10px] tracking-[0.4em] font-sans text-muted uppercase mb-4 block">
            Your Selection
          </span>
          <h1 className="text-5xl md:text-6xl font-serif">Shopping Bag</h1>
        </header>

        {cartItems.length > 0 ? (
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Cart Items List */}
            <div className="lg:col-span-2 space-y-10">
              {cartItems.map((item) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-8 pb-10 border-b border-accent/10"
                >
                  <div className="w-32 aspect-[3/4] bg-[#F0EEE6] overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                    <div>
                      <h3 className="font-serif text-xl mb-1">{item.name}</h3>
                      <p className="text-[10px] tracking-widest uppercase text-muted">{item.category}</p>
                    </div>
                    <div className="flex items-center space-x-12">
                      <div className="flex items-center border border-accent/10">
                        <button 
                          className="px-4 py-2 hover:bg-accent/5 cursor-pointer"
                          onClick={() => updateCartQuantity(item.id, -1)}
                        >-</button>
                        <span className="px-4 py-2 font-sans text-sm">{item.quantity}</span>
                        <button 
                          className="px-4 py-2 hover:bg-accent/5 cursor-pointer"
                          onClick={() => updateCartQuantity(item.id, 1)}
                        >+</button>
                      </div>
                      <p className="font-sans tracking-widest text-sm">Rs. {(item.price * item.quantity * USD_TO_PKR).toLocaleString()}</p>
                      <button 
                        className="text-muted hover:text-accent transition-colors cursor-pointer"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <X size={18} strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Summary */}
            <div className="bg-white/50 p-10 h-fit backdrop-blur-sm">
              <h2 className="text-2xl font-serif mb-8 italic">Order Summary</h2>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Subtotal</span>
                  <span className="font-sans">${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Estimated Shipping</span>
                  <span className="font-sans">Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Tax</span>
                  <span className="font-sans text-[10px] uppercase">Calculated at checkout</span>
                </div>
              </div>
              <div className="h-[1px] bg-accent/10 w-full mb-8" />
              <div className="flex justify-between text-lg font-serif mb-10">
                <span>Total</span>
                <span>${subtotal.toLocaleString()}</span>
              </div>
              <button className="btn-primary w-full flex items-center justify-center">
                Checkout Now <ArrowRight size={16} className="ml-2" />
              </button>
              <div className="mt-8 text-center">
                <Link to="/shop" className="text-[10px] tracking-widest uppercase text-muted hover:text-accent transition-colors">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <ShoppingBag size={48} className="mx-auto text-muted/20 mb-8" strokeWidth={1} />
            <h2 className="text-2xl font-serif mb-4 italic">Your bag is empty.</h2>
            <Link to="/shop" className="btn-primary">Explore Collection</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
