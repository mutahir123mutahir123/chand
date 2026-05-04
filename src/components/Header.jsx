import React, { useState, useEffect } from 'react';
import { ShoppingBag, User, Heart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useCartWishlist } from '../context/CartWishlistContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const location = useLocation();
  const { cartItems } = useCartWishlist();
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'SHOP',      href: '/shop',     isDropdown: true },
    { name: 'NEW ARRIVALS', href: '/new-arrivals' },
    { name: 'BEST SELLINGS', href: '/best-sellings' },
    { name: 'CLIENT REVIEWS', href: '/reviews' },
    { name: 'CONTACT',   href: '/contact'   },
  ];

  const collections = [
    { name: 'Jhumka', image: '/images/chand-products/1.webp' },
    { name: 'Studs', image: '/images/chand-products/2.webp' },
    { name: 'Kara', image: '/images/chand-products/3.webp' },
    { name: 'Kangan', image: '/images/chand-products/4.webp' },
    { name: 'Jelly Bangles', image: '/images/chand-products/11.webp' },
    { name: 'Bracelets', image: '/images/chand-products/12.webp' },
    { name: 'Pazeb', image: '/images/chand-products/7.webp' },
    { name: 'Rings', image: '/images/chand-products/8.webp' },
    { name: 'Bridal Sets', image: '/images/chand-products/14.webp' },
  ];

  /* When not scrolled the header sits over the dark-teal hero → use white text.
     When scrolled the header gets a white bg → use red/teal text.             */
  const textClass   = isScrolled ? 'text-accent'      : 'text-white';
  const logoClass   = isScrolled ? 'text-accent'      : 'text-white';
  const iconClass   = isScrolled ? 'text-accent'      : 'text-white';
  const borderClass = isScrolled ? 'border-accent/20' : 'border-white/30';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'shadow-sm py-4' : 'py-4 lg:py-8'
      }`}
      style={{ backgroundColor: isScrolled ? '#FFFFFF' : '#1C1C2E' }}
    >
      <div className="container flex items-center justify-between">

        {/* ── Mobile Menu Toggle ───────────────────────────────────── */}
        <button
          className={`lg:hidden transition-colors ${iconClass}`}
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>

        {/* ── Left Nav (Desktop) ───────────────────────────────────── */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.slice(0, 1).map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-[10px] tracking-[0.22em] font-sans transition-all duration-300 hover:opacity-60 ${textClass}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* ── Logo (centered) ─────────────────────────────────────── */}
        <div className="absolute left-1/2 -translate-x-1/2 text-center">
          <Link to="/" className="block">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className={`text-xl md:text-2xl tracking-[0.35em] font-serif uppercase transition-colors duration-500 ${logoClass}`}
            >
              Jewelery Cabin
            </motion.h1>
          </Link>
        </div>

        {/* ── Right Nav (Desktop) + Icons ─────────────────────────── */}
        <div className="flex items-center space-x-6">
          <nav className="hidden lg:flex items-center space-x-8 mr-8">
            {navLinks.slice(0, 1).map((link) => (
              <div key={link.name} className="relative">
                <Link
                  to={link.href}
                  className={`text-[10px] tracking-[0.22em] font-sans transition-all duration-300 hover:opacity-60 ${textClass} cursor-pointer`}
                  onMouseEnter={() => link.isDropdown && setIsShopOpen(true)}
                >
                  {link.name}
                </Link>
                <AnimatePresence>
                  {isShopOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="fixed left-0 top-16 w-screen h-[calc(100vh-4rem)]"
                      onMouseLeave={() => setIsShopOpen(false)}
                    >
                      <div className="flex bg-[#1C1C2E] shadow-2xl overflow-y-auto h-full w-full">
                        <div className="w-1/4 p-8 flex flex-col justify-center space-y-6 min-h-full border-r border-white/10">
                          <h3 className="text-white text-xl tracking-[0.2em] font-serif">COLLECTIONS</h3>
                          <div className="space-y-3">
                            {collections.map((item) => (
                              <Link
                                key={item.name}
                                to={`/collections/${item.name.toLowerCase().replace(' ', '-')}`}
                                className="block text-white/70 text-sm tracking-[0.15em] hover:text-white hover:translate-x-2 transition-all duration-300"
                              >
                                {item.name.toUpperCase()}
                              </Link>
                            ))}
                          </div>
                        </div>
                        <div className="w-3/4 grid grid-cols-3 auto-rows-fr gap-3 p-6 h-full">
                          {collections.map((item) => (
                            <Link
                              key={item.name}
                              to={`/collections/${item.name.toLowerCase().replace(' ', '-')}`}
                              className="relative group overflow-hidden rounded-lg h-full min-h-48"
                            >
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />
                              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-xs tracking-[0.2em] font-medium">
                                {item.name.toUpperCase()}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            {navLinks.slice(2, 4).map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-[10px] tracking-[0.22em] font-sans transition-all duration-300 hover:opacity-60 ${textClass}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              to="/contact"
              className={`transition-opacity hover:opacity-60 hidden md:block ${iconClass}`}
            >
              <User size={20} strokeWidth={1.5} />
            </Link>

            <Link
              to="/wishlist"
              className={`transition-opacity hover:opacity-60 relative ${iconClass}`}
            >
              <Heart size={20} strokeWidth={1.5} />
            </Link>

            <Link
              to="/cart"
              className={`transition-opacity hover:opacity-60 relative ${iconClass}`}
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-white text-[8px] w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ──────────────────────────────────────────── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.45, ease: [0.33, 1, 0.68, 1] }}
            className="fixed inset-0 z-[60] flex flex-col p-8"
            style={{ backgroundColor: '#1C1C2E' }}
          >
            {/* Close */}
            <div className="flex justify-start">
              <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
                <X size={32} className="text-white -ml-2" />
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col space-y-8 mt-12">
              {[{ name: 'HOME', href: '/' }, ...navLinks].map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.45, ease: [0.33, 1, 0.68, 1] }}
                >
                  <Link
                    to={link.href}
                    className="text-2xl tracking-[0.12em] font-serif text-white hover:text-tea-rose transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.4 }}
              className="pt-8 mt-auto border-t border-white/20 flex space-x-6"
            >
              <Link to="/contact"><User  size={24} className="text-white" /></Link>
              <Link to="/wishlist"><Heart size={24} className="text-white" /></Link>
              <Link to="/cart"><ShoppingBag size={24} className="text-white" /></Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
