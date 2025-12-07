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
import { CartProvider } from "./context/CartContext";
import ShopPage from "./pages/ShopPage";
import WebProducts from "./pages/WebProducts";
import Orders from "./pages/Orders";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashboardHome />} />
            <Route path="orders" element={<Orders />} />
            <Route path="web-products" element={<WebProducts />} />
            <Route path="branches" element={<Branches />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="employees" element={<Employees />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
