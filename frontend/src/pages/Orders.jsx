import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  Eye,
  MoreVertical,
  CheckCircle,
  XCircle,
  Clock,
  X,
  Printer,
  MapPin,
  Phone,
  Mail,
  Package,
  ChevronDown,
} from "lucide-react";

const Orders = () => {
  // Mock Orders Data with Expanded Details
  const [orders, setOrders] = useState([
    {
      id: "#ORD-7829",
      customer: "Ali Khan",
      email: "ali.khan@example.com",
      phone: "+92 300 1234567",
      date: "2024-03-10",
      summaryItems: "Panadol Advance (2), Brufen (1)",
      detailedItems: [
        { name: "Panadol Advance", qty: 2, price: 450, total: 900 },
        { name: "Brufen 400mg", qty: 1, price: 180, total: 180 },
      ],
      subtotal: 1080,
      deliveryFee: 150,
      total: 1230,
      status: "Pending",
      payment: "COD",
      address: "House 123, Street 4, Block B, North Nazimabad, Karachi",
    },
    {
      id: "#ORD-7830",
      customer: "Sarah Ahmed",
      email: "sarah.ahmed@example.com",
      phone: "+92 321 9876543",
      date: "2024-03-09",
      summaryItems: "Multivitamin Complex (1)",
      detailedItems: [
        { name: "Multivitamin Complex", qty: 1, price: 2500, total: 2500 },
      ],
      subtotal: 2500,
      deliveryFee: 0,
      total: 2500,
      status: "Completed",
      payment: "Card",
      address: "Apartment 501, The Heights, Clifton, Karachi",
    },
    {
      id: "#ORD-7831",
      customer: "Bilal Raza",
      email: "bilal.raza@example.com",
      phone: "+92 333 4567890",
      date: "2024-03-09",
      summaryItems: "N95 Face Masks (2)",
      detailedItems: [
        { name: "N95 Face Masks", qty: 2, price: 850, total: 1700 },
      ],
      subtotal: 1700,
      deliveryFee: 150,
      total: 1850,
      status: "Pending",
      payment: "COD",
      address: "Plot 45, Lane 2, DHA Phase 6, Karachi",
    },
    {
      id: "#ORD-7832",
      customer: "Zara Sheikh",
      email: "zara.sheikh@example.com",
      phone: "+92 345 6789012",
      date: "2024-03-08",
      summaryItems: "First Aid Kit (1), Bandages (2)",
      detailedItems: [
        { name: "First Aid Kit", qty: 1, price: 3200, total: 3200 },
        { name: "Bandages", qty: 2, price: 250, total: 500 },
      ],
      subtotal: 3700,
      deliveryFee: 0,
      total: 3700,
      status: "Cancelled",
      payment: "Card",
      address: "House 88, Street 10, Gulshan-e-Iqbal, Karachi",
    },
    {
      id: "#ORD-7833",
      customer: "Usman Ghani",
      email: "usman.ghani@example.com",
      phone: "+92 312 3456789",
      date: "2024-03-08",
      summaryItems: "Digital Thermometer (1)",
      detailedItems: [
        { name: "Digital Thermometer", qty: 1, price: 1200, total: 1200 },
      ],
      subtotal: 1200,
      deliveryFee: 150,
      total: 1350,
      status: "Completed",
      payment: "COD",
      address: "Flat 202, Al-Rehman Towers, PECHS, Karachi",
    },
  ]);

  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleStatusChange = (orderId, newStatus) => {
    // Update local state for the main list
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);

    // Update local state for the modal if open
    if (selectedOrder && selectedOrder.id === orderId) {
      setSelectedOrder({ ...selectedOrder, status: newStatus });
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Completed":
        return <CheckCircle size={14} className="mr-1" />;
      case "Pending":
        return <Clock size={14} className="mr-1" />;
      case "Cancelled":
        return <XCircle size={14} className="mr-1" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
          Orders Management
        </h2>
        <div className="flex space-x-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-initial group">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-teal-600 transition-colors"
              size={20}
            />
            <input
              type="text"
              placeholder="Search orders..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 outline-none transition-all shadow-sm"
            />
          </div>
          <button className="p-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 text-gray-600 transition-all shadow-sm">
            <Filter size={20} />
          </button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-sm border border-gray-100/50 overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left bg-white">
            <thead className="bg-gray-50/50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Items
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-gray-50/80 transition-colors group"
                >
                  <td className="px-6 py-4 font-mono font-medium text-teal-600">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-800">
                    {order.customer}
                  </td>
                  <td
                    className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate"
                    title={order.summaryItems}
                  >
                    {order.summaryItems}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {order.date}
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-800">
                    Rs. {order.total}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {getStatusIcon(order.status)}
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => setSelectedOrder(order)}
                      className="text-gray-400 hover:text-teal-600 transition-colors p-1"
                      title="View Details"
                    >
                      <Eye size={18} />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600 transition-colors p-1 ml-2">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Order Details Modal */}
      <AnimatePresence>
        {selectedOrder && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedOrder(null)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100 flex justify-between items-start bg-gray-50/50 flex-shrink-0">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-2xl font-bold text-gray-800">
                      {selectedOrder.id}
                    </h3>
                    <div className="relative">
                      <select
                        value={selectedOrder.status}
                        onChange={(e) =>
                          handleStatusChange(selectedOrder.id, e.target.value)
                        }
                        className={`appearance-none pl-3 pr-8 py-1 rounded-full text-xs font-bold cursor-pointer border-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 outline-none ${getStatusColor(
                          selectedOrder.status
                        )}`}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                      <ChevronDown
                        size={12}
                        className={`absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none ${
                          selectedOrder.status === "Completed"
                            ? "text-green-700"
                            : selectedOrder.status === "Cancelled"
                            ? "text-red-700"
                            : "text-yellow-700"
                        }`}
                      />
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 flex items-center gap-2">
                    <Clock size={14} /> Placed on {selectedOrder.date}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Content */}
              <div className="p-8 overflow-y-auto space-y-8">
                {/* Customer Info */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-bold text-gray-900 border-b border-gray-100 pb-2">
                      Customer Details
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 flex-shrink-0">
                          <span className="font-bold">
                            {selectedOrder.customer.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">
                            {selectedOrder.customer}
                          </p>
                          <p className="text-sm text-gray-500">Customer</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <Mail size={16} className="text-gray-400" />
                        {selectedOrder.email}
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <Phone size={16} className="text-gray-400" />
                        {selectedOrder.phone}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold text-gray-900 border-b border-gray-100 pb-2">
                      Delivery Information
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin
                          size={20}
                          className="text-teal-600 mt-1 flex-shrink-0"
                        />
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {selectedOrder.address}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <Package size={16} className="text-gray-400" />
                        Shipping Method: Standard Delivery
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div>
                  <h4 className="font-bold text-gray-900 border-b border-gray-100 pb-4 mb-4">
                    Order Summary
                  </h4>
                  <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
                    <table className="w-full text-left">
                      <thead className="bg-gray-100/50">
                        <tr>
                          <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">
                            Product
                          </th>
                          <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase text-center">
                            Qty
                          </th>
                          <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase text-right">
                            Price
                          </th>
                          <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase text-right">
                            Total
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {selectedOrder.detailedItems.map((item, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 font-medium text-gray-800">
                              {item.name}
                            </td>
                            <td className="px-6 py-4 text-center text-gray-600">
                              {item.qty}
                            </td>
                            <td className="px-6 py-4 text-right text-gray-600">
                              Rs. {item.price}
                            </td>
                            <td className="px-6 py-4 text-right font-medium text-gray-900">
                              Rs. {item.total}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot className="bg-white">
                        <tr>
                          <td
                            colSpan="3"
                            className="px-6 pt-6 text-right text-sm text-gray-600"
                          >
                            Subtotal
                          </td>
                          <td className="px-6 pt-6 text-right font-medium text-gray-900">
                            Rs. {selectedOrder.subtotal}
                          </td>
                        </tr>
                        <tr>
                          <td
                            colSpan="3"
                            className="px-6 py-2 text-right text-sm text-gray-600"
                          >
                            Delivery Fee
                          </td>
                          <td className="px-6 py-2 text-right font-medium text-gray-900">
                            Rs. {selectedOrder.deliveryFee}
                          </td>
                        </tr>
                        <tr>
                          <td
                            colSpan="3"
                            className="px-6 pb-6 text-right font-bold text-lg text-gray-900"
                          >
                            Total
                          </td>
                          <td className="px-6 pb-6 text-right font-bold text-lg text-teal-600">
                            Rs. {selectedOrder.total}
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-100 bg-gray-50/50 flex justify-between items-center flex-shrink-0">
                <span className="text-sm text-gray-500">
                  Payment Method:{" "}
                  <span className="font-semibold text-gray-700">
                    {selectedOrder.payment}
                  </span>
                </span>
                <div className="flex gap-3">
                  <button className="px-5 py-2.5 rounded-xl font-medium text-gray-600 hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-200 transition-all flex items-center gap-2">
                    <Printer size={18} />
                    Print Invoice
                  </button>
                  <button
                    onClick={() => setSelectedOrder(null)}
                    className="px-5 py-2.5 rounded-xl font-medium bg-teal-600 hover:bg-teal-700 text-white shadow-lg shadow-teal-500/20 transition-all"
                  >
                    Close Details
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Orders;
