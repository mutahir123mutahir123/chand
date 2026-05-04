import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { products, USD_TO_PKR } from '../data/products';
import { Heart, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WordReveal, FadeUp } from '../components/TextReveal';

const PRODUCTS_PER_PAGE = 9;

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  const currentProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    return products.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-32 pb-20 bg-primary">
      <div className="container">

        {/* ── Page header ─────────────────────────────────────── */}
        <header className="mb-16">
          <FadeUp delay={0.05}>
            <span className="text-[10px] tracking-[0.4em] font-sans text-muted uppercase mb-4 block">
              The Collection
            </span>
          </FadeUp>
          <h1 className="text-5xl md:text-6xl font-serif text-accent">
            <WordReveal text="All Products" delay={0.15} />
          </h1>
          <FadeUp delay={0.4}>
            <div className="mt-4 w-12 h-[2px] bg-accent" />
          </FadeUp>
        </header>

        {/* ── Products grid ────────────────────────────────────── */}
        <div key={currentPage} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProducts.map((product, index) => (
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
                  className="relative aspect-square overflow-hidden"
                  style={{ backgroundColor: '#FEF0F0' }}
                >
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
                  <motion.div
                    variants={{
                      rest:  { opacity: 0 },
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

                  {/* Accent line */}
                  <motion.div
                    variants={{
                      rest:  { scaleX: 0 },
                      hover: { scaleX: 1, transition: { duration: 0.4 } },
                    }}
                    style={{ transformOrigin: 'left' }}
                    className="absolute bottom-0 left-0 w-full h-[3px] bg-accent"
                  />
                </div>
              </Link>

              <div className="mt-3 text-center">
                <p className="text-[8px] tracking-[0.2em] uppercase text-muted mb-1 font-sans">
                  {product.category}
                </p>
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-serif text-sm tracking-wide text-accent hover:text-muted transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="font-sans text-xs mt-1 tracking-widest text-muted">
                  Rs. {(product.price * USD_TO_PKR).toLocaleString()}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Pagination ─────────────────────────────────────── */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mt-16">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 rounded-full text-sm font-sans transition-all duration-300 ${
                  currentPage === page
                    ? 'bg-accent text-white'
                    : 'bg-white text-muted hover:bg-accent hover:text-white'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;