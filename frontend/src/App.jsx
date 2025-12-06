import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DashboardHome from "./components/DashboardHome";
import Branches from "./pages/Branches";
import Inventory from "./pages/Inventory";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import LandingPage from "./pages/LandingPage";
import Employees from "./pages/Employees";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="branches" element={<Branches />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="employees" element={<Employees />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
