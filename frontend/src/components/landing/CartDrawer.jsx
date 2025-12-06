import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Trash2, ArrowRight } from "lucide-react";

const CartDrawer = ({ isOpen, onClose, cartItems, onRemoveFromCart }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
              <div className="flex items-center gap-3">
                <div className="bg-teal-100 p-2 rounded-lg text-teal-600">
                  <ShoppingBag size={20} />
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  Your Cart ({cartItems.length})
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all"
              >
                <X size={24} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 p-8">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mb-4">
                    <ShoppingBag size={48} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Your cart is empty
                  </h3>
                  <p className="text-gray-500 max-w-xs">
                    Looks like you haven't added any medicines or products yet.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-4 text-teal-600 font-semibold hover:text-teal-700 hover:underline"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cartItems.map((item, index) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    key={`${item.id}-${index}`}
                    className="flex gap-4 p-3 bg-white border border-gray-100 rounded-2xl shadow-sm"
                  >
                    <div className="w-20 h-20 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-gray-800 line-clamp-1">
                            {item.name}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {item.category}
                          </p>
                        </div>
                        <button
                          onClick={() => onRemoveFromCart(index)}
                          className="text-gray-400 hover:text-red-500 transition-colors p-1"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <div className="font-bold text-teal-600">
                        Rs. {item.price}
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-gray-50 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>Rs. {subtotal}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Delivery Fee</span>
                    <span className="text-green-600 font-medium">Free</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-gray-900 pt-2 border-t border-gray-200">
                    <span>Total</span>
                    <span>Rs. {subtotal}</span>
                  </div>
                </div>

                <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 rounded-xl font-bold shadow-lg shadow-teal-500/30 flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-95">
                  Checkout Now <ArrowRight size={20} />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
