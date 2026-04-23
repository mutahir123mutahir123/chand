import React, { useState, useEffect } from 'react';
import { ShoppingBag, User, Heart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useCartWishlist } from '../context/CartWishlistContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { cartItems } = useCartWishlist();
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'RINGS', href: '/rings' },
    { name: 'NECKLACES', href: '/necklaces' },
    { name: 'EARRINGS', href: '/earrings' },
    { name: 'BRACELETS', href: '/bracelets' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-primary/90 backdrop-blur-md py-4 shadow-sm' : 'lg:bg-transparent bg-primary py-4 lg:py-8'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-accent"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>

        {/* Left Nav (Desktop) */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.slice(0, 2).map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className="text-[10px] tracking-[0.2em] font-sans text-accent hover:opacity-60 transition-opacity"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 text-center">
          <Link to="/" className="block">
            <h1 className="text-1xl md:text-2xl tracking-[0.3em] font-serif uppercase">
              Jewelery Cabin
            </h1>
            {/* <p className="text-[8px] tracking-[0.5em] font-sans mt-1 text-muted uppercase">
              Fine Jewelry
            </p> */}
          </Link>
        </div>

        {/* Right Nav (Desktop) */}
        <div className="flex items-center space-x-6">
          <nav className="hidden lg:flex items-center space-x-8 mr-8">
            {navLinks.slice(2).map((link) => (
              <Link 
                key={link.name} 
                to={link.href}
                className="text-[10px] tracking-[0.2em] font-sans text-accent hover:opacity-60 transition-opacity"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link to="/contact" className="text-accent hover:opacity-60 transition-opacity hidden md:block">
              <User size={20} strokeWidth={1.5} />
            </Link>
            <Link to="/wishlist" className="text-accent hover:opacity-60 transition-opacity relative">
              <Heart size={20} strokeWidth={1.5} />
            </Link>
            <Link to="/cart" className="text-accent hover:opacity-60 transition-opacity relative">
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.5 }}
            className="fixed inset-0 bg-primary z-[60] flex flex-col p-8"
          >
            <div className="flex justify-start">
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={32} className="text-accent -ml-2" />
              </button>
            </div>
            <nav className="flex flex-col space-y-8 mt-12">
              <Link 
                to="/" 
                className="text-2xl tracking-[0.1em] font-serif text-accent"
              >
                HOME
              </Link>
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href}
                  className="text-2xl tracking-[0.1em] font-serif text-accent"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-8 border-t border-accent/10 flex space-x-6">
                <Link to="/contact"><User size={24} /></Link>
                <Link to="/wishlist"><Heart size={24} /></Link>
                <Link to="/cart"><ShoppingBag size={24} /></Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
