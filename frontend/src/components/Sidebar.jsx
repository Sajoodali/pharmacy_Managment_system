import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Store,
  Package,
  Users,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Activity,
  Settings,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Overview", icon: LayoutDashboard, path: "/dashboard" },
  { label: "Branches", icon: Store, path: "/dashboard/branches" },
  { label: "Inventory", icon: Package, path: "/dashboard/inventory" },
  { label: "Users", icon: Users, path: "/dashboard/users" },
  { label: "Settings", icon: Settings, path: "/dashboard/settings" },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <motion.div
      animate={{ width: collapsed ? 80 : 260 }}
      className="h-screen bg-gradient-to-b from-white to-gray-50 border-r border-gray-200 flex flex-col shadow-xl relative z-20 flex-shrink-0"
    >
      {/* Header */}
      <div className="h-20 flex items-center justify-between px-4 border-b border-gray-100/50">
        {!collapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-3 text-primary font-bold text-xl truncate"
          >
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
              <Activity size={24} className="text-primary" />
            </div>
            <span className="tracking-tight text-gray-800">PharmaCare</span>
          </motion.div>
        )}
        {collapsed && (
          <div className="w-full flex justify-center text-primary">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
              <Activity size={24} />
            </div>
          </div>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`p-1.5 rounded-full hover:bg-white hover:shadow-md text-gray-500 transition-all border border-transparent hover:border-gray-100 ${
            collapsed
              ? "absolute -right-3 top-20 bg-white border border-gray-100 shadow-sm"
              : ""
          }`}
        >
          {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* Nav Items */}
      <div className="flex-1 py-6 space-y-2 px-3 overflow-y-auto custom-scrollbar">
        {navItems.map((item) => {
          const isActive =
            location.pathname === item.path ||
            (item.path !== "/dashboard" &&
              location.pathname.startsWith(item.path));
          return (
            <Link to={item.path} key={item.path}>
              <div
                className={`
                    relative flex items-center px-4 py-3.5 rounded-xl cursor-pointer transition-all duration-300 group
                    ${
                      isActive
                        ? "bg-gradient-to-r from-primary to-teal-500 text-white shadow-lg shadow-teal-500/30"
                        : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                    }
                    ${collapsed ? "justify-center" : "space-x-4"}
                `}
              >
                <item.icon
                  size={22}
                  className={`${
                    isActive
                      ? "text-white"
                      : "group-hover:text-primary transition-colors"
                  }`}
                />
                {!collapsed && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="font-medium whitespace-nowrap text-sm"
                  >
                    {item.label}
                  </motion.span>
                )}
                {isActive && !collapsed && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute right-2 w-1.5 h-1.5 bg-white rounded-full opacity-50"
                  />
                )}
              </div>
            </Link>
          );
        })}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-100/50">
        <button
          className={`
            flex items-center w-full p-3 rounded-xl hover:bg-red-50 text-gray-500 hover:text-red-500 transition-all duration-300 group
            ${collapsed ? "justify-center" : "space-x-3"}
          `}
        >
          <LogOut
            size={20}
            className="group-hover:translate-x-1 transition-transform"
          />
          {!collapsed && (
            <span className="font-medium whitespace-nowrap text-sm">
              Logout
            </span>
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default Sidebar;
