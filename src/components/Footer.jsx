import React from 'react';
import { Instagram, Facebook, X, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FadeUp, Stagger, StaggerItem } from './TextReveal';

const Footer = () => {
  return (
    <footer className="bg-teal text-white py-20 relative overflow-hidden">
      {/* Decorative background glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #BE2E1D 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F7C5C5 0%, transparent 70%)' }}
      />

      <div className="container relative z-10">
        <Stagger delay={0.1} stagger={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

            {/* ── Brand ──────────────────────────────────────────── */}
            <StaggerItem>
              <h2 className="text-2xl tracking-[0.3em] font-serif uppercase mb-6 text-white">
                Moon Jewelry
              </h2>
              <p className="text-white/70 text-base leading-relaxed max-w-xs">
                Crafting stories of elegance and timeless beauty through fine jewelry since 2010.
              </p>
              {/* Decorative divider */}
              <div className="mt-6 w-10 h-[2px] bg-accent" />
            </StaggerItem>

            {/* ── Shop Links ─────────────────────────────────────── */}
            <StaggerItem>
              <h4 className="text-[10px] tracking-[0.3em] font-sans uppercase mb-6 text-tea-rose/70">
                Shop
              </h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/shop"                      className="hover:text-tea-rose transition-colors">All Products</Link></li>
                <li><Link to="/rings"                     className="hover:text-tea-rose transition-colors">Rings</Link></li>
                <li><Link to="/necklaces"                 className="hover:text-tea-rose transition-colors">Necklaces</Link></li>
                <li><Link to="/earrings"                  className="hover:text-tea-rose transition-colors">Earrings</Link></li>
              </ul>
            </StaggerItem>

            {/* ── Company Links ──────────────────────────────────── */}
            <StaggerItem>
              <h4 className="text-[10px] tracking-[0.3em] font-sans uppercase mb-6 text-tea-rose/70">
                Company
              </h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/our-story"     className="hover:text-tea-rose transition-colors">Our Story</Link></li>
                <li><Link to="/craftsmanship" className="hover:text-tea-rose transition-colors">Craftsmanship</Link></li>
                <li><Link to="/sustainability" className="hover:text-tea-rose transition-colors">Sustainability</Link></li>
                <li><Link to="/contact"       className="hover:text-tea-rose transition-colors">Contact</Link></li>
              </ul>
            </StaggerItem>

            {/* ── Newsletter ─────────────────────────────────────── */}
            <StaggerItem>
              <h4 className="text-[10px] tracking-[0.3em] font-sans uppercase mb-6 text-tea-rose/70">
                Join Our World
              </h4>
              <p className="text-base text-white/70 mb-4">
                Subscribe to receive updates and exclusive offers.
              </p>
              <div className="flex border-b border-white/20 pb-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-transparent border-none text-sm w-full focus:outline-none placeholder:text-white/30"
                />
                <button className="text-tea-rose hover:text-white transition-colors">
                  <Mail size={18} />
                </button>
              </div>
            </StaggerItem>
          </div>
        </Stagger>

        {/* ── Bottom Bar ─────────────────────────────────────────── */}
        <FadeUp delay={0.4}>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-[10px] tracking-widest text-white/40">
              © 2026 Moon Jewelry. ALL RIGHTS RESERVED.
            </p>
            <div className="flex space-x-6 text-white/40">
              <a href="#" aria-label="Instagram" className="hover:text-tea-rose transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-tea-rose transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="X / Twitter" className="hover:text-tea-rose transition-colors">
                <X size={18} />
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </footer>
  );
};

export default Footer;
