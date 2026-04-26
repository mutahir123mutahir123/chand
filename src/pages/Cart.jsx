import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, X, ArrowRight } from 'lucide-react';
import { useCartWishlist } from '../context/CartWishlistContext';
import { USD_TO_PKR } from '../data/products';
import { WordReveal, FadeUp, FadeIn, Stagger, StaggerItem } from '../components/TextReveal';

const Cart = () => {
  const { cartItems, updateCartQuantity, removeFromCart } = useCartWishlist();
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="pt-32 pb-20 bg-primary min-h-screen">
      <div className="container">

        {/* ── Page header ─────────────────────────────────────── */}
        <header className="mb-16">
          <FadeUp delay={0.05}>
            <span className="text-[10px] tracking-[0.4em] font-sans text-muted uppercase mb-4 block">
              Your Selection
            </span>
          </FadeUp>
          <h1 className="text-5xl md:text-6xl font-serif text-accent">
            <WordReveal text="Shopping Bag" delay={0.15} />
          </h1>
        </header>

        {cartItems.length > 0 ? (
          <div className="grid lg:grid-cols-3 gap-16">

            {/* ── Cart items ─────────────────────────────────── */}
            <div className="lg:col-span-2 space-y-10">
              {cartItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center space-x-8 pb-10 border-b border-accent/10"
                >
                  <div
                    className="w-32 aspect-[3/4] overflow-hidden flex-shrink-0"
                    style={{ backgroundColor: '#FEF0F0' }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-grow flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                    <div>
                      <h3 className="font-serif text-xl mb-1 text-accent">{item.name}</h3>
                      <p className="text-[10px] tracking-widest uppercase text-muted font-sans">
                        {item.category}
                      </p>
                    </div>

                    <div className="flex items-center space-x-12">
                      {/* Quantity control */}
                      <div className="flex items-center border border-accent/20">
                        <button
                          className="px-4 py-2 hover:bg-accent/5 cursor-pointer text-accent font-sans"
                          onClick={() => updateCartQuantity(item.id, -1)}
                        >
                          −
                        </button>
                        <span className="px-4 py-2 font-sans text-sm text-accent">
                          {item.quantity}
                        </span>
                        <button
                          className="px-4 py-2 hover:bg-accent/5 cursor-pointer text-accent font-sans"
                          onClick={() => updateCartQuantity(item.id, 1)}
                        >
                          +
                        </button>
                      </div>

                      <p className="font-sans tracking-widest text-sm text-muted">
                        Rs. {(item.price * item.quantity * USD_TO_PKR).toLocaleString()}
                      </p>

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

            {/* ── Order summary ───────────────────────────────── */}
            <FadeIn direction="right" delay={0.3}>
              <div className="p-10 h-fit shadow-md" style={{ backgroundColor: '#FEF0F0' }}>
                <h2 className="text-2xl font-serif mb-8 italic text-accent">Order Summary</h2>

                <div className="space-y-4 mb-8 font-sans text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted">Subtotal</span>
                    <span className="text-accent">${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Estimated Shipping</span>
                    <span className="text-accent">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Tax</span>
                    <span className="text-accent text-[10px] uppercase">Calculated at checkout</span>
                  </div>
                </div>

                <div className="h-[1px] bg-accent/15 w-full mb-8" />

                <div className="flex justify-between text-lg font-serif mb-10 text-accent">
                  <span>Total</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>

                <button className="btn-primary w-full flex items-center justify-center">
                  Checkout Now <ArrowRight size={16} className="ml-2" />
                </button>

                <div className="mt-8 text-center">
                  <Link
                    to="/shop"
                    className="text-[10px] tracking-widest uppercase text-muted hover:text-accent transition-colors font-sans"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        ) : (
          <FadeUp delay={0.15}>
            <div className="text-center py-20">
              <ShoppingBag size={48} className="mx-auto text-accent/20 mb-8" strokeWidth={1} />
              <h2 className="text-2xl font-serif mb-4 italic text-accent">Your bag is empty.</h2>
              <Link to="/shop" className="btn-primary">Explore Collection</Link>
            </div>
          </FadeUp>
        )}
      </div>
    </div>
  );
};

export default Cart;
