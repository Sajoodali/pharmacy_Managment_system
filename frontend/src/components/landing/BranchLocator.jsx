import React from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

const BranchLocator = () => {
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
    <section id="branches" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Serving You Across Karachi
            </h2>
            <p className="text-lg text-gray-600 max-w-xl">
              Find the nearest PharmaCare branch. We are expanding rapidly to be
              closer to you.
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
  );
};

export default BranchLocator;
