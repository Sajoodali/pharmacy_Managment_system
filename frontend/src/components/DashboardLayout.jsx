import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Search, Bell, UserCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import HeartbeatPreloader from "./HeartbeatPreloader";

const DashboardLayout = ({ children }) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <HeartbeatPreloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="flex h-screen bg-gray-50 overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
          {/* Sidebar Area */}
          <Sidebar />

          <div className="flex-1 flex flex-col overflow-hidden relative">
            {/* Topbar with Glassmorphism */}
            <header className="h-16 bg-white/70 backdrop-blur-md border-b border-white/20 shadow-sm flex items-center justify-between px-6 z-10 sticky top-0">
              <div className="flex items-center bg-white/50 border border-gray-200 rounded-full px-4 py-2 w-96 transition-all focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary">
                <Search size={20} className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search branches, medicines..."
                  className="bg-transparent border-none outline-none text-sm w-full text-gray-700 placeholder-gray-400"
                />
              </div>
              <div className="flex items-center space-x-4">
                <button className="p-2 relative hover:bg-white/80 rounded-full transition-colors border border-transparent hover:border-gray-200">
                  <Bell size={20} className="text-gray-600" />
                  <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                </button>
                <div className="flex items-center space-x-3 cursor-pointer hover:bg-white/80 p-2 pr-4 rounded-full transition-all border border-transparent hover:border-gray-200">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-emerald-400 flex items-center justify-center text-white shadow-md">
                    <UserCircle size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-700 leading-tight">
                      Admin User
                    </span>
                    <span className="text-[10px] text-gray-500 leading-tight">
                      Super Admin
                    </span>
                  </div>
                </div>
              </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 overflow-x-hidden overflow-y-auto p-6 relative">
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-teal-50/50 via-transparent to-cyan-50/30 pointer-events-none"></div>
              <div className="relative z-10">{children}</div>
            </main>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardLayout;
