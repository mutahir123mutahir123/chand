import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, X } from 'lucide-react';
import { useCartWishlist } from '../context/CartWishlistContext';
import { USD_TO_PKR } from '../data/products';
import { WordReveal, FadeUp, Stagger, StaggerItem } from '../components/TextReveal';

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist, addToCart } = useCartWishlist();

  const handleAddToCart = (product) => {
    addToCart(product);
    removeFromWishlist(product.id);
  };

  return (
    <div className="pt-32 pb-20 bg-primary min-h-screen">
      <div className="container">

        <header className="mb-16">
          <FadeUp delay={0.05}>
            <span className="text-[10px] tracking-[0.4em] font-sans text-muted uppercase mb-4 block">
              Saved Pieces
            </span>
          </FadeUp>
          <h1 className="text-5xl md:text-6xl font-serif text-accent">
            <WordReveal text="Wishlist" delay={0.15} />
          </h1>
        </header>

        {wishlistItems.length > 0 ? (
          <Stagger delay={0.2} stagger={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {wishlistItems.map((item) => (
                <StaggerItem key={item.id}>
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
                      <Link to={`/product/${item.id}`}>
                        <motion.img
                          src={item.image}
                          alt={item.name}
                          variants={{
                            rest:  { scale: 1 },
                            hover: { scale: 1.08, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
                          }}
                          className="w-full h-full object-cover"
                        />
                      </Link>

                      {/* Remove button */}
                      <button
                        className="absolute top-4 right-4 w-8 h-8 bg-white/80 backdrop-blur-sm flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all rounded-full cursor-pointer"
                        onClick={() => removeFromWishlist(item.id)}
                      >
                        <X size={16} strokeWidth={1.5} />
                      </button>

                      {/* Add-to-bag slide-up */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <button
                          className="btn-primary w-full py-3 flex items-center justify-center text-[10px] cursor-pointer"
                          onClick={() => handleAddToCart(item)}
                        >
                          <ShoppingBag size={14} className="mr-2" /> Add to Bag
                        </button>
                      </div>
                    </div>

                    <div className="mt-6">
                      <p className="text-[10px] tracking-[0.2em] uppercase text-muted mb-1 font-sans">
                        {item.category}
                      </p>
                      <Link to={`/product/${item.id}`}>
                        <h3 className="font-serif text-lg tracking-wide text-accent hover:text-muted transition-colors">
                          {item.name}
                        </h3>
                      </Link>
                      <p className="font-sans text-sm mt-2 tracking-widest text-muted">
                        Rs. {(item.price * USD_TO_PKR).toLocaleString()}
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        ) : (
          <FadeUp delay={0.15}>
            <div className="text-center py-20">
              <Heart size={48} className="mx-auto text-accent/20 mb-8" strokeWidth={1} />
              <h2 className="text-2xl font-serif mb-4 italic text-accent">No items saved yet.</h2>
              <Link to="/shop" className="btn-primary">Explore Collection</Link>
            </div>
          </FadeUp>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
