import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import OurStory from './pages/OurStory';
import Rings from './pages/Rings';
import Necklaces from './pages/Necklaces';
import Earrings from './pages/Earrings';
import Bracelets from './pages/Bracelets';
import { CartWishlistProvider } from './context/CartWishlistContext';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <CartWishlistProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-primary">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/our-story" element={<OurStory />} />
              <Route path="/rings" element={<Rings />} />
              <Route path="/bracelets" element={<Bracelets />} />
              <Route path="/necklaces" element={<Necklaces />} />
              <Route path="/earrings" element={<Earrings />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartWishlistProvider>
  );
}

export default App;
