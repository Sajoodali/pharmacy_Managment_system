import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import DashboardLayout from "../components/DashboardLayout";

const Dashboard = () => {
  const location = useLocation();

  return (
    <DashboardLayout>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="h-full"
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </DashboardLayout>
  );
};

export default Dashboard;
