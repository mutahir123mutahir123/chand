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
import CategoryPage from './pages/CategoryPage';
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
              <Route path="/rings" element={<CategoryPage category="rings" />} />
              <Route path="/bracelets" element={<CategoryPage category="bracelets" />} />
              <Route path="/necklaces" element={<CategoryPage category="necklaces" />} />
              <Route path="/earrings" element={<CategoryPage category="earrings" />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartWishlistProvider>
  );
}

export default App;
