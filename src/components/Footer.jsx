import React from 'react';
import { Instagram, Facebook, X, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-accent text-white py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h2 className="text-2xl tracking-[0.3em] font-serif uppercase mb-6">SU DENIZ</h2>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Crafting stories of elegance and timeless beauty through fine jewelry since 2010.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] font-sans uppercase mb-6 text-white/40">Shop</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/shop" className="hover:text-white/60 transition-colors">All Products</Link></li>
              <li><Link to="/shop?category=rings" className="hover:text-white/60 transition-colors">Rings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-white/60 transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-white/60 transition-colors">Earrings</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] font-sans uppercase mb-6 text-white/40">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-white/60 transition-colors">Our Story</Link></li>
              <li><Link to="/craftsmanship" className="hover:text-white/60 transition-colors">Craftsmanship</Link></li>
              <li><Link to="/sustainability" className="hover:text-white/60 transition-colors">Sustainability</Link></li>
              <li><Link to="/contact" className="hover:text-white/60 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] font-sans uppercase mb-6 text-white/40">Join Our World</h4>
            <p className="text-sm text-white/60 mb-4">Subscribe to receive updates and exclusive offers.</p>
            <div className="flex border-b border-white/20 pb-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-none text-sm w-full focus:outline-none placeholder:text-white/20"
              />
              <button className="text-white/60 hover:text-white transition-colors">
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-[10px] tracking-widest text-white/40">
            © 2026 SU DENIZ. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-6 text-white/40">
            <a href="#" className="hover:text-white transition-colors"><Instagram size={18} /></a>
            <a href="#" className="hover:text-white transition-colors"><Facebook size={18} /></a>
            <a href="#" className="hover:text-white transition-colors"><X size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
