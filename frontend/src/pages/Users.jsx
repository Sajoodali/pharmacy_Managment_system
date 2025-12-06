import React from "react";
import { motion } from "framer-motion";
import { User, Shield, Mail, MoreVertical } from "lucide-react";

const UsersPage = () => {
  const users = [
    {
      id: 1,
      name: "Dr. Sarah Smith",
      role: "Owner / Super Admin",
      email: "sarah@pharmacare.com",
      status: "Active",
    },
    {
      id: 2,
      name: "John Doe",
      role: "Area Manager (North)",
      email: "john@pharmacare.com",
      status: "Active",
    },
    {
      id: 3,
      name: "Jane Wilson",
      role: "Area Manager (South)",
      email: "jane@pharmacare.com",
      status: "Active",
    },
    ...Array.from({ length: 5 }, (_, i) => ({
      id: i + 4,
      name: `Branch Admin ${i + 1}`,
      role: "Branch Manager",
      email: `admin${i + 1}@pharmacare.com`,
      status: "Active",
    })),
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
          User Management
        </h2>
        <button className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-primary/30 flex items-center font-medium hover:scale-105 active:scale-95 duration-200">
          <User size={20} className="mr-2" />
          Add User
        </button>
      </div>

      <div className="grid gap-4">
        {users.map((user, index) => (
          <motion.div
            key={user.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100/50 flex flex-col md:flex-row items-center justify-between hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 group"
          >
            <div className="flex items-center flex-1 w-full md:w-auto mb-4 md:mb-0">
              <div className="w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center text-gray-500 mr-5 shadow-inner group-hover:scale-110 transition-transform duration-300">
                <User size={26} className="text-gray-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg group-hover:text-primary transition-colors">
                  {user.name}
                </h3>
                <div className="flex items-center text-sm text-gray-500 mt-1 font-medium">
                  <Mail size={14} className="mr-1.5" />
                  {user.email}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4 w-full md:w-auto justify-between md:justify-end">
              <div className="hidden md:flex items-center px-4 py-1.5 bg-blue-50/80 text-blue-700 rounded-lg text-sm font-semibold border border-blue-100">
                <Shield size={14} className="mr-2" />
                {user.role}
              </div>
              <span className="px-3 py-1 bg-emerald-100/80 text-emerald-700 rounded-lg text-xs font-bold uppercase tracking-wide border border-emerald-200/50">
                {user.status}
              </span>
              <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <MoreVertical size={20} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
