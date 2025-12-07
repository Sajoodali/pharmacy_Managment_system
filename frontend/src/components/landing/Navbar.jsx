import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems, openCart } = useCart();
  const cartCount = cartItems.length;

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm border-b border-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link
            to="/"
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-teal-200">
              P
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent">
              PharmaCare
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <Link
              to="/"
              className="font-medium text-gray-600 hover:text-teal-600 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="font-medium text-gray-600 hover:text-teal-600 transition-colors"
            >
              Shop
            </Link>
            <a
              href="#branches"
              className="font-medium text-gray-600 hover:text-teal-600 transition-colors"
            >
              Branches
            </a>
            <a
              href="#services"
              className="font-medium text-gray-600 hover:text-teal-600 transition-colors"
            >
              Services
            </a>

            <button
              onClick={openCart}
              className="relative p-2 text-gray-600 hover:text-teal-600 transition-colors"
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            <Link to="/login">
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg shadow-teal-200 transition-all transform hover:scale-[1.02] active:scale-95">
                Staff Login
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={openCart}
              className="relative p-2 text-gray-600 hover:text-teal-600 transition-colors"
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-teal-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 shadow-lg overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              <Link
                to="/"
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50"
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50"
              >
                Shop
              </Link>
              <a
                href="#branches"
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50"
              >
                Branches
              </a>
              <a
                href="#services"
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50"
              >
                Services
              </a>
              <div className="pt-4 px-3">
                <Link to="/login" className="w-full">
                  <button className="w-full bg-teal-600 text-white px-4 py-3 rounded-xl font-semibold shadow-md active:scale-95 transition-transform">
                    Staff Login
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
