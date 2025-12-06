import React from "react";
import { motion } from "framer-motion";
import { Save, Bell, Lock, User, Moon } from "lucide-react";

const Settings = () => {
  return (
        <div className="max-w-4xl mx-auto space-y-8 pb-10">
            <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Account Settings</h2>

            {/* Profile Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100/50"
            >
                <div className="flex items-center mb-8 pb-4 border-b border-gray-100">
                    <div className="p-3 bg-primary/10 rounded-xl mr-4 text-primary">
                        <User size={24} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-800">Profile Information</h3>
                        <p className="text-sm text-gray-500">Update your account details and contact info</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                        <input
                            type="text"
                            defaultValue="Dr. Sarah Smith"
                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all focus:bg-white"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                        <input
                            type="email"
                            defaultValue="sarah@pharmacare.com"
                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all focus:bg-white"
                        />
                    </div>
                </div>
            </motion.div>

            {/* Notifications Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100/50"
            >
                <div className="flex items-center mb-8 pb-4 border-b border-gray-100">
                     <div className="p-3 bg-indigo-50 rounded-xl mr-4 text-indigo-500">
                        <Bell size={24} />
                    </div>
                     <div>
                        <h3 className="text-lg font-bold text-gray-800">Notifications</h3>
                        <p className="text-sm text-gray-500">Manage your alert preferences</p>
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-gray-50/50 rounded-xl border border-gray-100">
                        <div>
                            <div className="font-bold text-gray-800">Low Stock Alerts</div>
                            <div className="text-sm text-gray-500">Get notified when medicine stock falls below threshold</div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" defaultChecked className="sr-only peer" />
                            <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50/50 rounded-xl border border-gray-100">
                        <div>
                            <div className="font-bold text-gray-800">Branch Status Updates</div>
                            <div className="text-sm text-gray-500">Notifications for branch opening/closing</div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                    </div>
                </div>
            </motion.div>

            {/* Security Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100/50"
            >
                <div className="flex items-center mb-6">
                    <div className="p-3 bg-red-50 rounded-xl mr-4 text-red-500">
                        <Lock size={24} />
                    </div>
                     <div>
                        <h3 className="text-lg font-bold text-gray-800">Security</h3>
                        <p className="text-sm text-gray-500">Manage password and security settings</p>
                    </div>
                </div>
                <button className="text-primary hover:text-primary-dark font-semibold text-sm hover:underline flex items-center">
                    Change Password
                </button>
            </motion.div>

            <div className="flex justify-end pt-4">
                <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-xl flex items-center transition-all shadow-lg shadow-primary/30 font-semibold hover:scale-105 active:scale-95 duration-200">
                    <Save size={20} className="mr-2" />
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default Settings;
