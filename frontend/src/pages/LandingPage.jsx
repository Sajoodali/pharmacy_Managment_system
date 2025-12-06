import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  ShieldCheck,
  Truck,
  UserCheck,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-800">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm border-b border-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div
              className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-teal-200">
                P
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent">
                PharmaCare
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10">
              <a
                href="#"
                className="font-medium text-gray-600 hover:text-teal-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#branches"
                className="font-medium text-gray-600 hover:text-teal-600 transition-colors"
              >
                Branches
              </a>
              <a
                href="#services"
                className="font-medium text-gray-600 hover:text-teal-600 transition-colors"
              >
                Services
              </a>

              <Link to="/login">
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg shadow-teal-200 transition-all transform hover:scale-[1.02] active:scale-95">
                  Staff Login
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-teal-600 focus:outline-none"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 shadow-lg"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a
                href="#"
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50"
              >
                Home
              </a>
              <a
                href="#branches"
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50"
              >
                Branches
              </a>
              <a
                href="#services"
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50"
              >
                Services
              </a>
              <div className="pt-4 px-3">
                <Link to="/login" className="w-full">
                  <button className="w-full bg-teal-600 text-white px-4 py-3 rounded-xl font-semibold shadow-md active:scale-95 transition-transform">
                    Staff Login
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center lg:text-left space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
              Trusted by 10,000+ Families in Karachi
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
              Healthcare <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500">
                Simplified.
              </span>
            </h1>

            <p className="text-lg text-gray-600 lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Experience the future of pharmacy with PharmaCare. Genuine
              medicines, expert advice, and lightning-fast delivery across
              Karachi.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-teal-200 transition-all transform hover:-translate-y-1 hover:shadow-2xl flex items-center justify-center gap-2">
                Upload Prescription
                <ArrowRight size={20} />
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-200 px-8 py-4 rounded-2xl font-bold transition-all transform hover:-translate-y-1 hover:border-gray-300 flex items-center justify-center gap-2">
                Order Medicines
              </button>
            </div>
          </motion.div>

          {/* Hero Image / Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Abstract blobs background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-400/20 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-400/20 rounded-full blur-[80px] -z-10 translate-x-20 -translate-y-20"></div>

            {/* Placeholder for 3D Element/Illustration - Using a nice glass card composition instead for now */}
            <div className="relative w-full max-w-lg aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-white rounded-[3rem] shadow-2xl overflow-hidden border border-white/50">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                  <ShieldCheck size={400} />
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-teal-50/80 to-transparent"></div>

                {/* Floating Cards Mockup */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut",
                  }}
                  className="absolute top-1/4 left-8 right-8 bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-lg border border-white/60"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                      <Truck size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Order #2931</div>
                      <div className="text-sm text-teal-600 font-medium">
                        Out for Delivery
                      </div>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full w-full overflow-hidden">
                    <div className="h-full bg-teal-500 w-3/4"></div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 7,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute bottom-1/4 right-8 left-20 bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-white/60 z-10"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">
                        100% Genuine
                      </div>
                      <div className="text-sm text-gray-500">
                        Verified Suppliers
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        id="services"
        className="py-24 bg-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Why PharmaCare?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We go beyond just dispensing medicines. We care for your health
              with integrity and speed.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 lg:gap-12"
          >
            {[
              {
                icon: <ShieldCheck className="w-8 h-8 text-teal-600" />,
                title: "100% Genuine Meds",
                desc: "Sourced directly from manufacturers. We guarantee authenticity for every pill.",
              },
              {
                icon: <Truck className="w-8 h-8 text-teal-600" />,
                title: "Superfast Delivery",
                desc: "Get your medicines delivered to your doorstep within 2 hours in selected areas.",
              },
              {
                icon: <UserCheck className="w-8 h-8 text-teal-600" />,
                title: "Expert Pharmacists",
                desc: "Our qualified staff is always available to consult and guide you effectively.",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                className="bg-gray-50 hover:bg-white p-8 rounded-3xl transition-all duration-300 hover:shadow-xl hover:shadow-teal-100/50 border border-transparent hover:border-teal-100 group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-100">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Branch Locator Section */}
      <section id="branches" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
                Serving You Across Karachi
              </h2>
              <p className="text-lg text-gray-600 max-w-xl">
                Find the nearest PharmaCare branch. We are expanding rapidly to
                be closer to you.
              </p>
            </div>
            <button className="text-teal-600 font-bold hover:text-teal-700 flex items-center gap-2 group">
              View Complete Map{" "}
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </button>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {/* Mock Data for 10 Branches - Showing 8 for grid balance */}
            {[
              {
                name: "Clifton Branch",
                address: "Shop #4, Zamzama Blvd, Phase 5",
                distance: "0.8 km",
              },
              {
                name: "Gulshan Branch",
                address: "Main Rashid Minhas Rd, Block 4",
                distance: "2.4 km",
              },
              {
                name: "North Nazimabad",
                address: "Hyderi Market, Block H",
                distance: "5.1 km",
              },
              {
                name: "DHA Phase 6",
                address: "Khayaban-e-Seher, Lane 4",
                distance: "3.2 km",
              },
              {
                name: "PECHS Branch",
                address: "Tariq Road, Near Dolmen Mall",
                distance: "1.5 km",
              },
              {
                name: "Bahadurabad",
                address: "Char Minar Chowrangi",
                distance: "2.9 km",
              },
              {
                name: "Malir Cantt",
                address: "Askari V, Main Gate",
                distance: "8.4 km",
              },
              {
                name: "Garden East",
                address: "Britto Road, near Aga Khan Jamatkhana",
                distance: "6.7 km",
              },
            ].map((branch, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-teal-50 p-3 rounded-full text-teal-600">
                    <MapPin size={24} />
                  </div>
                  <span className="text-xs font-semibold text-gray-400 bg-gray-100 px-2 py-1 rounded-md">
                    {branch.distance}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {branch.name}
                </h3>
                <p className="text-sm text-gray-500 mb-6 flex-grow">
                  {branch.address}
                </p>

                <button className="w-full py-2.5 rounded-xl border border-teal-200 text-teal-700 font-semibold hover:bg-teal-50 transition-colors flex items-center justify-center gap-2">
                  Get Directions
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <footer className="bg-gray-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold">
                  P
                </div>
                <span className="text-xl font-bold text-white">PharmaCare</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your trusted partner in health. Committed to providing genuine
                medicines and exceptional care to the community.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-teal-400 transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#branches"
                    className="hover:text-teal-400 transition-colors"
                  >
                    Find a Branch
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    Upload Prescription
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Contact</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li>(021) 111-PHARMA</li>
                <li>support@pharmacare.pk</li>
                <li>Head Office: Main Clifton Road, Karachi</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-4">
                Subscribe for health tips and offers.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 border-none rounded-lg px-4 py-2 w-full text-sm focus:ring-2 focus:ring-teal-500"
                />
                <button className="bg-teal-600 px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 PharmaCare Inc. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
