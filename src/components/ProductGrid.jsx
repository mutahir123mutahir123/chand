import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag } from 'lucide-react';
import { products, USD_TO_PKR } from '../data/products';
import { Link } from 'react-router-dom';
import { useCartWishlist } from '../context/CartWishlistContext';
import { WordReveal, FadeUp, Stagger, StaggerItem } from './TextReveal';

/* ── Single product card ────────────────────────────────────────── */
const ProductCard = ({ product }) => {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCartWishlist();
  const inWishlist = isInWishlist(product.id);

  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    inWishlist ? removeFromWishlist(product.id) : addToWishlist(product);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <motion.div
      className="group relative"
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      {/* ── Image container ─────────────────────────────────────── */}
      <div
        className="relative aspect-[3/4] overflow-hidden"
        style={{ backgroundColor: '#FEF0F0' }}
      >
        <Link to={`/product/${product.id}`}>
          <motion.img
            src={product.image}
            alt={product.name}
            variants={{
              rest:  { scale: 1 },
              hover: { scale: 1.08, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src =
                'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop';
            }}
          />
        </Link>

        {/* Quick-action overlay */}
        <motion.div
          variants={{
            rest:  { opacity: 0 },
            hover: { opacity: 1, transition: { duration: 0.3 } },
          }}
          className="absolute inset-0 flex items-center justify-center space-x-4"
          style={{ background: 'rgba(13,92,92,0.08)' }}
        >
          <motion.button
            whileTap={{ scale: 0.9 }}
            variants={{
              rest:  { y: 10, opacity: 0 },
              hover: { y: 0,  opacity: 1, transition: { delay: 0.05, duration: 0.35 } },
            }}
            className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-colors ${
              inWishlist ? 'bg-accent text-white' : 'bg-white text-accent hover:bg-accent hover:text-white'
            }`}
            onClick={handleWishlistClick}
          >
            <Heart size={18} strokeWidth={1.5} fill={inWishlist ? 'currentColor' : 'none'} />
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            variants={{
              rest:  { y: 10, opacity: 0 },
              hover: { y: 0,  opacity: 1, transition: { delay: 0.1, duration: 0.35 } },
            }}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors shadow-lg cursor-pointer"
            onClick={handleAddToCart}
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
          </motion.button>
        </motion.div>

        {/* Accent bottom line on hover */}
        <motion.div
          variants={{
            rest:  { scaleX: 0 },
            hover: { scaleX: 1, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
          }}
          style={{ transformOrigin: 'left' }}
          className="absolute bottom-0 left-0 w-full h-[3px] bg-accent"
        />
      </div>

      {/* ── Card info ───────────────────────────────────────────── */}
      <div className="mt-6 text-center">
        <p className="text-[10px] tracking-[0.2em] uppercase text-muted mb-1 font-sans">
          {product.category}
        </p>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-lg tracking-wide text-accent hover:text-muted transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="font-sans text-sm mt-2 tracking-widest text-muted">
          Rs. {(product.price * USD_TO_PKR).toLocaleString()}
        </p>
      </div>
    </motion.div>
  );
};

/* ── Section ────────────────────────────────────────────────────── */
const ProductGrid = () => {
  return (
    <section className="py-32 bg-primary cursor-default">
      <div className="container">

        {/* ── Header ──────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div>
            <FadeUp delay={0.05}>
              <span className="text-[10px] tracking-[0.4em] font-sans text-muted uppercase mb-4 block">
                Curated Selection
              </span>
            </FadeUp>
            <Link to="/shop">
              <h2 className="text-4xl md:text-5xl font-serif text-accent hover:text-muted transition-colors">
                <WordReveal text="Featured Pieces" delay={0.15} />
              </h2>
            </Link>
          </div>

          <FadeUp delay={0.3}>
            <Link to="/shop">
              <button className="text-[10px] tracking-[0.3em] font-sans uppercase border-b-2 border-accent text-accent pb-1 hover:text-muted hover:border-muted transition-colors cursor-pointer">
                View All Products
              </button>
            </Link>
          </FadeUp>
        </div>

        {/* ── Grid ────────────────────────────────────────────── */}
        <Stagger delay={0.2} stagger={0.12}>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {products.slice(0, 4).map((product) => (
              <StaggerItem key={product.id}>
                <ProductCard product={product} />
              </StaggerItem>
            ))}
          </div>
        </Stagger>
      </div>
    </section>
  );
};

export default ProductGrid;
