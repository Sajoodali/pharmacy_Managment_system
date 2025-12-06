import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Package, Users, Activity } from "lucide-react";

const DashboardHome = () => {
  // Dummy Data
  const stats = [
    {
      label: "Total Revenue",
      value: "$120,500",
      icon: TrendingUp,
      color: "text-emerald-500",
      bg: "bg-emerald-50",
      gradient: "from-emerald-500/20 to-emerald-500/5",
    },
    {
      label: "Total Stock Value",
      value: "$85,000",
      icon: Package,
      color: "text-blue-500",
      bg: "bg-blue-50",
      gradient: "from-blue-500/20 to-blue-500/5",
    },
    {
      label: "Active Users",
      value: "1,250",
      icon: Users,
      color: "text-indigo-500",
      bg: "bg-indigo-50",
      gradient: "from-indigo-500/20 to-indigo-500/5",
    },
    {
      label: "System Health",
      value: "98%",
      icon: Activity,
      color: "text-rose-500",
      bg: "bg-rose-50",
      gradient: "from-rose-500/20 to-rose-500/5",
    },
  ];

  const branches = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Branch ${i + 1} - ${i < 5 ? "North Cluster" : "South Cluster"}`,
    manager: i < 5 ? "Manager A" : "Manager B",
    status: i === 2 ? "Closed" : "Open",
    revenue: `$${(Math.random() * 10000).toFixed(2)}`,
  }));

  return (
    <div className="space-y-8">
      {/* Global Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 relative overflow-hidden group"
          >
            <div
              className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.gradient} rounded-bl-full -mr-10 -mt-10 opacity-50 group-hover:scale-110 transition-transform duration-500`}
            />

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                  <stat.icon size={24} />
                </div>
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full ${stat.bg} ${stat.color} bg-opacity-50`}
                >
                  +2.5%
                </span>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-800 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cluster Performance */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100/50 lg:col-span-2"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800">
                Cluster Performance
              </h3>
              <p className="text-sm text-gray-500">
                Revenue comparison by area
              </p>
            </div>
            <button className="text-sm text-primary font-semibold hover:underline">
              View Details
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-5 bg-gray-50/50 rounded-2xl border border-gray-100 hover:border-teal-100 hover:bg-teal-50/30 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center text-teal-600 font-bold shadow-sm">
                  A
                </div>
                <div>
                  <div className="font-bold text-gray-800 text-lg">
                    North Cluster
                  </div>
                  <div className="text-sm text-gray-500 font-medium">
                    Manager: Alice Smith
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-gray-800 text-xl">$45,230</div>
                <div className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded-md inline-block mt-1">
                  +12% Target
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between p-5 bg-gray-50/50 rounded-2xl border border-gray-100 hover:border-indigo-100 hover:bg-indigo-50/30 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold shadow-sm">
                  B
                </div>
                <div>
                  <div className="font-bold text-gray-800 text-lg">
                    South Cluster
                  </div>
                  <div className="text-sm text-gray-500 font-medium">
                    Manager: Bob Jones
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-gray-800 text-xl">$38,150</div>
                <div className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded-md inline-block mt-1">
                  +8% Target
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Branch Status List */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100/50 overflow-hidden flex flex-col h-[500px]"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-800">Branch Status</h3>
            <div className="flex space-x-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
            </div>
          </div>

          <div className="overflow-y-auto flex-1 pr-2 custom-scrollbar space-y-2">
            {branches.map((branch) => (
              <div
                key={branch.id}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 group"
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      branch.status === "Open"
                        ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"
                        : "bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]"
                    }`}
                  ></div>
                  <div className="text-sm font-semibold text-gray-700 group-hover:text-primary transition-colors">
                    {branch.name}
                  </div>
                </div>
                <div
                  className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide ${
                    branch.status === "Open"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {branch.status}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardHome;
