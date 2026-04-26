import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import { USD_TO_PKR } from '../data/products';
import { useCartWishlist } from '../context/CartWishlistContext';
import { WordReveal, FadeUp, Stagger, StaggerItem } from '../components/TextReveal';

const categoryProducts = {
  rings: {
    title: 'RINGS',
    description: 'Discover our exquisite collection of rings, crafted with precision and elegance.',
    products: [
      { id: 101, name: 'Aura Diamond Ring',    price: 1850, image: '/images/rings/ring1.jpeg',   category: 'Rings' },
      { id: 102, name: 'Serenity Gold Band',   price: 1200, image: '/images/rings/ring2.jpeg',   category: 'Rings' },
      { id: 103, name: 'Eternal Knot Ring',    price: 1550, image: '/images/rings/ring3.jpeg',   category: 'Rings' },
      { id: 104, name: 'Royal Signet Ring',    price: 2200, image: '/images/rings/ring4.jpeg',   category: 'Rings' },
    ],
  },
  bracelets: {
    title: 'BRACELETS',
    description: 'Explore our stunning selection of bracelets, designed to adorn your wrist with grace.',
    products: [
      { id: 201, name: 'Cubic Zirconia Bangle',   price: 950,  image: '/images/bracelete/1pc Cubic Zirconia Decor Cuff Bangle Copper Jewelry.jpeg', category: 'Bracelets' },
      { id: 202, name: 'Golden Charm Bracelet',   price: 1450, image: '/images/bracelete/download (1).jpeg', category: 'Bracelets' },
      { id: 203, name: 'Elegant Cuff Bracelet',   price: 1100, image: '/images/bracelete/download.jpeg',     category: 'Bracelets' },
      { id: 204, name: 'Diamond Tennis Bracelet', price: 3500, image: '/images/bracelete/Jewelry Style.jpeg',category: 'Bracelets' },
    ],
  },
  necklaces: {
    title: 'NECKLACES',
    description: 'Adorn yourself with our beautiful necklaces, perfect for every occasion.',
    products: [
      { id: 301, name: 'Infinite Solitaire',  price: 2400, image: '/images/necklace/Infinite Solitaire Pendant Necklace - 18K Gold Plated _ Rose.jpeg', category: 'Necklaces' },
      { id: 302, name: 'Heart Pendant',       price: 850,  image: '/images/necklace/Heart Pendant Necklace.jpeg', category: 'Necklaces' },
      { id: 303, name: 'Classic Pearl Strand',price: 1800, image: '/images/necklace/123.jpg',                     category: 'Necklaces' },
      { id: 304, name: 'Rose Gold Chain',     price: 1200, image: '/images/necklace/Pretty!!.jpeg',               category: 'Necklaces' },
    ],
  },
  earrings: {
    title: 'EARRINGS',
    description: 'Find the perfect pair of earrings to complement your style.',
    products: [
      { id: 401, name: 'Water Drop Earrings',    price: 950,  image: '/images/earings/Water Drop Earrings.jpeg',      category: 'Earrings' },
      { id: 402, name: 'Crystal Studs',          price: 650,  image: '/images/earings/Water Drop Earrings (1).jpeg',  category: 'Earrings' },
      { id: 403, name: 'Gold Hoop Earrings',     price: 1200, image: '/images/earings/download.jpeg',                 category: 'Earrings' },
      { id: 404, name: 'Diamond Drop Earrings',  price: 2800, image: '/images/earings/Follow me for more!.jpeg',      category: 'Earrings' },
    ],
  },
};

/* ── Product card ───────────────────────────────────────────────── */
const ProductCard = ({ product }) => {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCartWishlist();
  const inWishlist = isInWishlist(product.id);

  const handleWishlistClick = (e) => {
    e.preventDefault(); e.stopPropagation();
    inWishlist ? removeFromWishlist(product.id) : addToWishlist(product);
  };
  const handleAddToCart = (e) => {
    e.preventDefault(); e.stopPropagation();
    addToCart(product);
  };

  return (
    <motion.div
      className="group relative"
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
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

        <motion.div
          variants={{
            rest:  { opacity: 0 },
            hover: { opacity: 1, transition: { duration: 0.3 } },
          }}
          className="absolute inset-0 flex items-center justify-center space-x-4"
          style={{ background: 'rgba(13,92,92,0.08)' }}
        >
          <button
            className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-colors ${
              inWishlist ? 'bg-accent text-white' : 'bg-white text-accent hover:bg-accent hover:text-white'
            }`}
            onClick={handleWishlistClick}
          >
            <Heart size={18} strokeWidth={1.5} fill={inWishlist ? 'currentColor' : 'none'} />
          </button>
          <button
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors shadow-lg cursor-pointer"
            onClick={handleAddToCart}
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
          </button>
        </motion.div>

        <motion.div
          variants={{
            rest:  { scaleX: 0 },
            hover: { scaleX: 1, transition: { duration: 0.4 } },
          }}
          style={{ transformOrigin: 'left' }}
          className="absolute bottom-0 left-0 w-full h-[3px] bg-accent"
        />
      </div>

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

/* ── Category page ──────────────────────────────────────────────── */
const CategoryPage = ({ category }) => {
  const data = categoryProducts[category];

  if (!data) {
    return (
      <div className="pt-32 pb-20 bg-primary min-h-screen">
        <div className="container text-center">
          <h1 className="text-4xl font-serif text-accent">Category not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-primary min-h-screen">
      <div className="container">

        {/* ── Header ──────────────────────────────────────────── */}
        <header className="mb-16 text-center">
          <FadeUp delay={0.05}>
            <span className="text-[10px] tracking-[0.4em] font-sans text-muted uppercase mb-4 block">
              Collection
            </span>
          </FadeUp>

          <h1 className="text-5xl md:text-6xl font-serif text-accent">
            <WordReveal text={data.title} delay={0.15} />
          </h1>

          <FadeUp delay={0.4}>
            <p className="text-muted mt-4 max-w-xl mx-auto text-sm md:text-base">
              {data.description}
            </p>
          </FadeUp>

          <FadeUp delay={0.5}>
            <div className="w-12 h-[2px] bg-accent mx-auto mt-6" />
          </FadeUp>
        </header>

        {/* ── Grid ────────────────────────────────────────────── */}
        <Stagger delay={0.3} stagger={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.products.map((product) => (
              <StaggerItem key={product.id}>
                <ProductCard product={product} />
              </StaggerItem>
            ))}
          </div>
        </Stagger>
      </div>
    </div>
  );
};

export default CategoryPage;
