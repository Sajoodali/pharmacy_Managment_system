import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  UserPlus,
  Search,
  MoreVertical,
  Phone,
  MapPin,
  X,
  Check,
} from "lucide-react";

const Employees = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mock Data
  const employees = [
    {
      id: 1,
      name: "Ahmed Khan",
      role: "Senior Pharmacist",
      branch: "Clifton Branch",
      phone: "0300-1234567",
      status: "Active",
      avatarColor: "bg-blue-100 text-blue-600",
    },
    {
      id: 2,
      name: "Fatima Ali",
      role: "Sales Associate",
      branch: "Gulshan Branch",
      phone: "0321-9876543",
      status: "On Leave",
      avatarColor: "bg-purple-100 text-purple-600",
    },
    {
      id: 3,
      name: "Kamran Zaidi",
      role: "Inventory Manager",
      branch: "Head Office",
      phone: "0333-5555555",
      status: "Active",
      avatarColor: "bg-emerald-100 text-emerald-600",
    },
    {
      id: 4,
      name: "Sara Ahmed",
      role: "Intern",
      branch: "North Nazimabad",
      phone: "0345-1122334",
      status: "Probation",
      avatarColor: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
            Employee Management
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Manage your team members and their roles.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-teal-600/20 flex items-center font-medium hover:scale-105 active:scale-95 duration-200"
        >
          <UserPlus size={20} className="mr-2" />
          Add Employee
        </button>
      </div>

      {/* Filters & Search */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search employees..."
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-teal-500/50 outline-none text-gray-700"
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
          <select className="bg-gray-50 border-none rounded-xl px-4 py-2 text-sm text-gray-600 focus:ring-2 focus:ring-teal-500/50 outline-none cursor-pointer">
            <option>All Roles</option>
            <option>Pharmacist</option>
            <option>Sales Associate</option>
            <option>Manager</option>
          </select>
          <select className="bg-gray-50 border-none rounded-xl px-4 py-2 text-sm text-gray-600 focus:ring-2 focus:ring-teal-500/50 outline-none cursor-pointer">
            <option>All Branches</option>
            <option>Clifton</option>
            <option>Gulshan</option>
          </select>
        </div>
      </div>

      {/* Employees Grid */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {employees.map((employee, index) => (
          <motion.div
            key={employee.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100/50 hover:shadow-md transition-all duration-300 group flex flex-col"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${employee.avatarColor}`}
                >
                  {employee.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg leading-tight group-hover:text-teal-600 transition-colors">
                    {employee.name}
                  </h3>
                  <p className="text-sm text-gray-500">{employee.role}</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-50 transition-colors">
                <MoreVertical size={20} />
              </button>
            </div>

            <div className="space-y-3 mb-6 flex-grow">
              <div className="flex items-center text-sm text-gray-600 bg-gray-50 p-2 rounded-lg">
                <MapPin size={16} className="mr-2 text-gray-400" />
                {employee.branch}
              </div>
              <div className="flex items-center text-sm text-gray-600 bg-gray-50 p-2 rounded-lg">
                <Phone size={16} className="mr-2 text-gray-400" />
                {employee.phone}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <span
                className={`px-2.5 py-1 rounded-md text-xs font-semibold ${
                  employee.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : employee.status === "On Leave"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {employee.status}
              </span>
              <button className="text-sm text-teal-600 font-medium hover:underline">
                View Profile
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add Employee Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
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
                className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden"
              >
                <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                  <h3 className="text-xl font-bold text-gray-800">
                    Add New Employee
                  </h3>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-gray-700">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-gray-700">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
                      placeholder="john.doe@pharmacare.pk"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-gray-700">
                        Role
                      </label>
                      <select className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all bg-white">
                        <option>Select Role</option>
                        <option>Pharmacist</option>
                        <option>Sales Associate</option>
                        <option>Branch Manager</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-gray-700">
                        Branch
                      </label>
                      <select className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all bg-white">
                        <option>Select Branch</option>
                        <option>Clifton</option>
                        <option>Gulshan</option>
                        <option>Head Office</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="p-6 border-t border-gray-100 bg-gray-50/50 flex gap-3 justify-end">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="px-5 py-2.5 rounded-xl font-medium text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="px-5 py-2.5 rounded-xl font-medium bg-teal-600 hover:bg-teal-700 text-white shadow-lg shadow-teal-500/20 transition-all flex items-center"
                  >
                    <Check size={18} className="mr-2" />
                    Save Employee
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Employees;
