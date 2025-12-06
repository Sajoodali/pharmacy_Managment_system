import React from "react";
import { Search, Bell, User } from "lucide-react";

const Header = () => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-10">
      {/* Search Bar */}
      <div className="relative w-96">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />
        <input
          type="text"
          placeholder="Search medicine, customers..."
          className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center space-x-4">
        <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>

        <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-gray-800">
              Dr. Sarah Smith
            </p>
            <p className="text-xs text-gray-500">Chief Pharmacist</p>
          </div>
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
            <User size={20} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
