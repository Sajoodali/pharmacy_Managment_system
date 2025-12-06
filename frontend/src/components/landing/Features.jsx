import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Truck, UserCheck } from "lucide-react";

const Features = () => {
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
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Why PharmaCare?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We go beyond just dispensing medicines. We care for your health with
            integrity and speed.
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
  );
};

export default Features;
