import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Plus,
  Search,
  MoreVertical,
  Edit,
  Trash2,
  X,
  Upload,
} from "lucide-react";

const WebProducts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mock Web Products Data
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Panadol Advance",
      price: 450,
      category: "Pain Relief",
      stock: 150,
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 2,
      name: "Multivitamin Complex",
      price: 2500,
      category: "Supplements",
      stock: 45,
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      name: "First Aid Kit",
      price: 3200,
      category: "Essentials",
      stock: 20,
      status: "Out of Stock",
      image:
        "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=400",
    },
  ]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
            Online Store Products
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Manage medicines displayed on the public landing page.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-indigo-500/20 flex items-center font-medium hover:scale-105 active:scale-95 duration-200"
        >
          <Plus size={20} className="mr-2" />
          Add Web Product
        </button>
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-5 border-b border-gray-100 flex gap-4">
          <div className="relative flex-1 max-w-md">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search web products..."
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500/50 outline-none text-gray-700"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">
                  Product Details
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">
                  Category
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">
                  Price
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">
                  Web Status
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="hover:bg-gray-50/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gray-100 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">
                          {product.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          Stock: {product.stock} units
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 bg-gray-100 rounded-lg text-xs font-medium text-gray-600">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-800">
                    Rs. {product.price}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div
                        className={`w-2 h-2 rounded-full mr-2 ${
                          product.status === "Active"
                            ? "bg-green-500"
                            : "bg-red-500"
                        }`}
                      ></div>
                      <span
                        className={`text-sm font-medium ${
                          product.status === "Active"
                            ? "text-green-700"
                            : "text-red-700"
                        }`}
                      >
                        {product.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                        <Edit size={18} />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Web Product Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50 flex-shrink-0">
                <h3 className="text-xl font-bold text-gray-800">
                  Add Web Product
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 space-y-4 overflow-y-auto">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-gray-700">
                    Product Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                    placeholder="e.g. Panadol Extra"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-gray-700">
                      Price (Rs)
                    </label>
                    <input
                      type="number"
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                      placeholder="0.00"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-gray-700">
                      Category
                    </label>
                    <select className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all bg-white">
                      <option>Select Category</option>
                      <option>Pain Relief</option>
                      <option>Supplements</option>
                      <option>Devices</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-gray-700">
                    Product Image
                  </label>
                  <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 mb-2">
                      <Upload size={24} />
                    </div>
                    <p className="text-sm font-medium text-gray-700">
                      Click to upload image
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      PNG, JPG up to 5MB
                    </p>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-gray-700">
                    Description
                  </label>
                  <textarea
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all min-h-[100px]"
                    placeholder="Product description..."
                  ></textarea>
                </div>
              </div>

              <div className="p-6 border-t border-gray-100 bg-gray-50/50 flex gap-3 justify-end flex-shrink-0">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl font-medium text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl font-medium bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/20 transition-all"
                >
                  Publish Product
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WebProducts;
