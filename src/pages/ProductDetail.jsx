import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products, USD_TO_PKR } from '../data/products';
import { Heart, ShoppingBag, ArrowLeft, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCartWishlist } from '../context/CartWishlistContext';
import { WordReveal, FadeUp, FadeIn, ScaleReveal, Stagger, StaggerItem } from '../components/TextReveal';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart, addToWishlist, isInWishlist } = useCartWishlist();
  const inWishlist = product ? isInWishlist(product.id) : false;

  if (!product) {
    return (
      <div className="pt-40 pb-20 container text-center">
        <h1 className="text-4xl font-serif mb-8 text-accent">Product not found</h1>
        <Link to="/shop" className="btn-primary">Back to Shop</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-primary min-h-screen">
      <div className="container">

        {/* ── Back link ─────────────────────────────────────────── */}
        <FadeUp delay={0.05}>
          <Link
            to="/shop"
            className="inline-flex items-center text-[10px] tracking-widest uppercase text-muted hover:text-accent mb-12 transition-colors font-sans"
          >
            <ArrowLeft size={14} className="mr-2" /> Back to Collection
          </Link>
        </FadeUp>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Image ───────────────────────────────────────────── */}
          <FadeIn direction="left" delay={0.15}>
            <div
              className="aspect-[4/5] overflow-hidden"
              style={{ backgroundColor: '#FEF0F0' }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
              />
            </div>
          </FadeIn>

          {/* ── Product info ─────────────────────────────────────── */}
          <FadeIn direction="right" delay={0.25}>
            <div className="flex flex-col">
              <FadeUp delay={0.3}>
                <span className="text-[10px] tracking-[0.4em] font-sans text-muted uppercase mb-4">
                  {product.category}
                </span>
              </FadeUp>

              <h1 className="text-4xl md:text-5xl font-serif mb-6 text-accent">
                <WordReveal text={product.name} delay={0.4} />
              </h1>

              <FadeUp delay={0.6}>
                <p className="text-2xl font-sans tracking-widest mb-8 text-muted">
                  Rs. {(product.price * USD_TO_PKR).toLocaleString()}
                </p>
              </FadeUp>

              <FadeUp delay={0.65}>
                <div className="h-[1px] bg-accent/15 w-full mb-8" />
              </FadeUp>

              <FadeUp delay={0.7}>
                <p className="text-muted leading-relaxed mb-10 max-w-lg text-base md:text-lg">
                  {product.description}
                </p>
              </FadeUp>

              <FadeUp delay={0.8}>
                <div className="flex flex-col space-y-4 mb-12">
                  <button
                    className="btn-primary w-full md:w-auto flex items-center justify-center"
                    onClick={() => addToCart(product)}
                  >
                    <ShoppingBag size={18} className="mr-3" /> Add to Shopping Bag
                  </button>
                  <button
                    className="btn-outline w-full md:w-auto flex items-center justify-center"
                    onClick={() => addToWishlist(product)}
                  >
                    <Heart size={18} className="mr-3" /> Add to Wishlist
                  </button>
                </div>
              </FadeUp>

              {/* ── Trust badges ──────────────────────────────────── */}
              <Stagger delay={0.9} stagger={0.12}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-accent/10">
                  {[
                    { icon: <Truck      size={20} strokeWidth={1} />, label: 'Free Shipping'   },
                    { icon: <ShieldCheck size={20} strokeWidth={1} />, label: 'Secure Payment'  },
                    { icon: <RefreshCw  size={20} strokeWidth={1} />, label: '30-Day Returns'  },
                  ].map((badge) => (
                    <StaggerItem key={badge.label}>
                      <div className="flex flex-col items-center text-center">
                        <span className="text-muted mb-3">{badge.icon}</span>
                        <span className="text-[10px] tracking-widest uppercase text-muted font-sans">
                          {badge.label}
                        </span>
                      </div>
                    </StaggerItem>
                  ))}
                </div>
              </Stagger>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
