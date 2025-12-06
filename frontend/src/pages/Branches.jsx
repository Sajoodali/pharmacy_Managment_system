import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, User } from "lucide-react";

const Branches = () => {
  const branches = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Pharmacy Branch ${i + 1}`,
    address: `${100 + i} Clinical Road, Karachi`,
    manager: i < 5 ? "Manager A" : "Manager B",
    phone: `+92 300 123456${i}`,
    status: i === 2 ? "Closed" : "Open",
    revenue: `$${(Math.random() * 15000 + 5000).toFixed(2)}`,
  }));

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
        Branch Management
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {branches.map((branch, index) => (
          <motion.div
            key={branch.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 group"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-teal-50 rounded-xl text-primary group-hover:scale-110 transition-transform duration-300">
                <MapPin size={24} />
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                  branch.status === "Open"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {branch.status}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">
              {branch.name}
            </h3>
            <p className="text-gray-500 text-sm mb-6">{branch.address}</p>

            <div className="space-y-3 pt-4 border-t border-gray-100/50">
              <div className="flex items-center text-sm text-gray-600">
                <User size={16} className="mr-3 text-gray-400" />
                <span className="font-medium">{branch.manager}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Phone size={16} className="mr-3 text-gray-400" />
                {branch.phone}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100/50 flex justify-between items-center">
              <span className="text-sm text-gray-500 font-medium">
                Monthly Revenue
              </span>
              <span className="font-bold text-gray-800 text-lg">
                {branch.revenue}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Branches;
