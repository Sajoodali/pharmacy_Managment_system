import React from "react";
import { motion } from "framer-motion";
import { Search, Filter, AlertTriangle } from "lucide-react";

const Inventory = () => {
  const inventory = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    name: `Medicine ${String.fromCharCode(65 + i)}`,
    category: ["Antibiotics", "Painkillers", "Vitamins"][i % 3],
    stock: Math.floor(Math.random() * 500),
    price: `$${(Math.random() * 50 + 5).toFixed(2)}`,
    status: Math.random() > 0.8 ? "Low Stock" : "In Stock",
    expiry: `202${Math.floor(Math.random() * 3 + 4)}-${Math.floor(
      Math.random() * 12 + 1
    )}-28`,
  }));
  return(
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Global Inventory</h2>
                <div className="flex space-x-3 w-full sm:w-auto">
                    <div className="relative flex-1 sm:flex-initial group">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
                        <input 
                            type="text" 
                            placeholder="Search inventory..." 
                            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all shadow-sm"
                        />
                    </div>
                    <button className="p-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 text-gray-600 transition-all shadow-sm">
                        <Filter size={20} />
                    </button>
                </div>
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100/50 overflow-hidden"
            >
                <div className="overflow-x-auto">
                    <table className="w-full text-left bg-white">
                        <thead className="bg-gray-50/50 border-b border-gray-100">
                            <tr>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Medicine Name</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Category</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Stock Level</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Unit Price</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Expiry Date</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {inventory.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50/80 transition-colors group">
                                    <td className="px-6 py-4 font-semibold text-gray-800 group-hover:text-primary transition-colors">{item.name}</td>
                                    <td className="px-6 py-4">
                                        <span className="px-2.5 py-1 bg-gray-100 rounded-lg text-xs font-medium text-gray-600">{item.category}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center space-x-2">
                                            <span className="font-medium text-gray-800">{item.stock}</span>
                                            <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                                <div 
                                                    className={`h-full rounded-full ${item.stock < 50 ? 'bg-red-500' : 'bg-emerald-500'}`} 
                                                    style={{ width: `${Math.min(item.stock / 5, 100)}%` }}
                                                />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-mono text-sm text-gray-600">{item.price}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{item.expiry}</td>
                                    <td className="px-6 py-4">
                                        {item.status === 'Low Stock' ? (
                                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-red-50 text-red-600 border border-red-100">
                                                <AlertTriangle size={12} className="mr-1.5" />
                                                Low Stock
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-green-50 text-green-600 border border-green-100">
                                                In Stock
                                            </span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>
        </div>
    );
};

export default Inventory;
