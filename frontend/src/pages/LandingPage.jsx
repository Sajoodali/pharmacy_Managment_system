import React from "react";
import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import BranchLocator from "../components/landing/BranchLocator";
import Footer from "../components/landing/Footer";
import ProductSection from "../components/landing/ProductSection";
import CartDrawer from "../components/landing/CartDrawer";
import { useCart } from "../context/CartContext";

import AboutUs from "../components/landing/AboutUs";

const LandingPage = () => {
  const { isCartOpen, closeCart, cartItems, removeFromCart } = useCart();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-800">
      <Navbar />

      <Hero />

      <ProductSection />

      <AboutUs />

      <Features />

      <BranchLocator />

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={closeCart}
        cartItems={cartItems}
        onRemoveFromCart={removeFromCart}
      />
    </div>
  );
};

export default LandingPage;
