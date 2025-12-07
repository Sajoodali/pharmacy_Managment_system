import React, { useState } from "react";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
import CartDrawer from "../components/landing/CartDrawer";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";
import { ShoppingCart, Plus, Star, Search, Filter } from "lucide-react";

const ShopPage = () => {
  const { isCartOpen, closeCart, cartItems, removeFromCart, addToCart } =
    useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Mock Extensive Product List
  const allProducts = [
    {
      id: 1,
      name: "Panadol Advance",
      price: 450,
      category: "Pain Relief",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 2,
      name: "Multivitamin Complex",
      price: 2500,
      category: "Supplements",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      name: "First Aid Kit",
      price: 3200,
      category: "Essentials",
      rating: 5.0,
      image:
        "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 4,
      name: "Brufen 400mg",
      price: 180,
      category: "Pain Relief",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1628771065551-63b75319b698?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 5,
      name: "Digital Thermometer",
      price: 1200,
      category: "Devices",
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1588775405917-727e57c61c77?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 6,
      name: "N95 Face Masks",
      price: 850,
      category: "Protection",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1586942593568-29361efcd571?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 7,
      name: "Calcium + Vitamin D",
      price: 1500,
      category: "Supplements",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400",
    }, // Mock image
    {
      id: 8,
      name: "Blood Pressure Monitor",
      price: 4500,
      category: "Devices",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1588775405917-727e57c61c77?auto=format&fit=crop&q=80&w=400",
    }, // Mock image
    {
      id: 9,
      name: "Bandages (Box of 50)",
      price: 250,
      category: "Essentials",
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=400",
    }, // Mock image
    {
      id: 10,
      name: "Cough Syrup",
      price: 350,
      category: "Pain Relief",
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400",
    }, // Mock image
    {
      id: 11,
      name: "Sanitizer 500ml",
      price: 600,
      category: "Protection",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1586942593568-29361efcd571?auto=format&fit=crop&q=80&w=400",
    }, // Mock image
    {
      id: 12,
      name: "Protein Powder",
      price: 5500,
      category: "Supplements",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&q=80&w=400",
    }, // Mock image
  ];

  const categories = ["All", ...new Set(allProducts.map((p) => p.category))];

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
              Shop Medicines
            </h1>
            <p className="text-gray-600">
              Browse our extensive collection of genuine healthcare products.
            </p>
          </div>

          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative group">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-teal-600 transition-colors"
                size={20}
              />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none w-full sm:w-64 shadow-sm"
              />
            </div>
            <div className="relative">
              <Filter
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-2.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none appearance-none cursor-pointer shadow-sm text-gray-700 font-medium"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100 flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <button
                    onClick={() => addToCart(product)}
                    className="absolute bottom-3 right-3 bg-white p-2.5 rounded-full shadow-lg text-teal-600 hover:bg-teal-600 hover:text-white transition-all transform hover:scale-110 active:scale-95 z-10"
                  >
                    <Plus size={20} />
                  </button>
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-gray-600 uppercase tracking-wide">
                    {product.category}
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-900 text-lg leading-tight line-clamp-1 group-hover:text-teal-600 transition-colors">
                      {product.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1 mb-3">
                    <Star
                      size={14}
                      className="text-yellow-400 fill-yellow-400"
                    />
                    <span className="text-sm font-medium text-gray-600">
                      {product.rating}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-2">
                    <span className="text-xl font-bold text-teal-700">
                      Rs. {product.price}
                    </span>
                    <button
                      onClick={() => addToCart(product)}
                      className="text-sm font-semibold text-gray-500 hover:text-teal-600 flex items-center gap-1 group/btn"
                    >
                      Add to Cart
                      <ShoppingCart
                        size={16}
                        className="group-hover/btn:translate-x-1 transition-transform"
                      />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-sm">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 mx-auto mb-4">
              <Search size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              No products found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filter to find what you're looking
              for.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="mt-6 text-teal-600 font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </main>

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

export default ShopPage;
