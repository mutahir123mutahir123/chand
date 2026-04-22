import React, { createContext, useContext, useState } from 'react';

const CartWishlistContext = createContext();

export const useCartWishlist = () => useContext(CartWishlistContext);

export const CartWishlistProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(items => {
      const existing = items.find(item => item.id === product.id);
      if (existing) {
        return items.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...items, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(items => items.filter(item => item.id !== productId));
  };

  const updateCartQuantity = (productId, delta) => {
    setCartItems(items => items.map(item => {
      if (item.id === productId) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
  };

  const addToWishlist = (product) => {
    if (!wishlistItems.find(item => item.id === product.id)) {
      setWishlistItems(items => [...items, product]);
    }
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems(items => items.filter(item => item.id !== productId));
  };

  const isInWishlist = (productId) => {
    return wishlistItems.some(item => item.id === productId);
  };

  return (
    <CartWishlistContext.Provider value={{
      cartItems,
      wishlistItems,
      addToCart,
      removeFromCart,
      updateCartQuantity,
      addToWishlist,
      removeFromWishlist,
      isInWishlist
    }}>
      {children}
    </CartWishlistContext.Provider>
  );
};