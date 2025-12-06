import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Plus, Star } from "lucide-react";

const ProductSection = ({ onAddToCart }) => {
  const products = [
    {
      id: 1,
      name: "Panadol Advance",
      price: 450,
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400",
      category: "Pain Relief",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Multivitamin Complex",
      price: 2500,
      image:
        "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&q=80&w=400",
      category: "Supplements",
      rating: 4.9,
    },
    {
      id: 3,
      name: "First Aid Kit",
      price: 3200,
      image:
        "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=400",
      category: "Essentials",
      rating: 5.0,
    },
    {
      id: 4,
      name: "Brufen 400mg",
      price: 180,
      image:
        "https://images.unsplash.com/photo-1628771065551-63b75319b698?auto=format&fit=crop&q=80&w=400",
      category: "Pain Relief",
      rating: 4.7,
    },
    {
      id: 5,
      name: "Digital Thermometer",
      price: 1200,
      image:
        "https://images.unsplash.com/photo-1588775405917-727e57c61c77?auto=format&fit=crop&q=80&w=400",
      category: "Devices",
      rating: 4.6,
    },
    {
      id: 6,
      name: "N95 Face Masks (Pack of 5)",
      price: 850,
      image:
        "https://images.unsplash.com/photo-1586942593568-29361efcd571?auto=format&fit=crop&q=80&w=400",
      category: "Protection",
      rating: 4.9,
    },
  ];

  return (
    <section id="shop" className="py-24 bg-teal-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Best-selling healthcare essentials available for immediate delivery.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <button
                  onClick={() => onAddToCart(product)}
                  className="absolute bottom-3 right-3 bg-white p-2.5 rounded-full shadow-lg text-teal-600 hover:bg-teal-600 hover:text-white transition-all transform hover:scale-110 active:scale-95"
                >
                  <Plus size={20} />
                </button>
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-gray-600 uppercase tracking-wide">
                  {product.category}
                </div>
              </div>

              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-gray-900 text-lg leading-tight line-clamp-1 group-hover:text-teal-600 transition-colors">
                    {product.name}
                  </h3>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  <Star size={14} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-medium text-gray-600">
                    {product.rating}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-teal-700">
                    Rs. {product.price}
                  </span>
                  <button
                    onClick={() => onAddToCart(product)}
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

        <div className="mt-12 text-center">
          <button className="bg-white border-2 border-teal-100 ring-4 ring-teal-50 text-teal-600 hover:bg-teal-50 hover:border-teal-200 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105">
            View All Medicines
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
