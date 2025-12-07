import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Award,
  Users,
  Clock,
  CheckCircle,
} from "lucide-react";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-white to-teal-50/20 overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full bg-teal-50/30 skew-x-12 transform translate-x-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 rounded-full font-bold text-xs uppercase tracking-wider mb-6">
              Our Story
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-[1.2] tracking-tight">
              A Legacy of Care & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                Excellence Since 1998
              </span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              PharmaCare was founded with a simple yet powerful mission: to
              provide accessible, high-quality healthcare to our community. What
              started as a small neighborhood pharmacy has grown into a trusted
              network, driven by our commitment to patient well-being.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Under the visionary leadership of{" "}
              <span className="font-bold text-gray-900">Dr. Ahmed Khan</span>,
              we have expanded to serve thousands of families, ensuring that
              genuine medicines and expert advice are always within reach.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center text-teal-600">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xl">50k+</h4>
                  <p className="text-xs text-gray-500 font-medium uppercase">
                    Happy Customers
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xl">25+</h4>
                  <p className="text-xs text-gray-500 font-medium uppercase">
                    Years Experience
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-teal-900/5 border border-gray-100 relative overflow-hidden group hover:border-teal-100 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <MapPin
                  size={100}
                  className="transform rotate-12 text-teal-600"
                />
              </div>
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2 text-xl">
                <MapPin size={24} className="text-teal-600" />
                Head Office
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                PharmaCare HQ, Blue Area, Islamabad
              </p>
              <div className="flex flex-col sm:flex-row gap-6 text-sm font-medium text-gray-500 pt-6 border-t border-gray-100">
                <span className="flex items-center gap-2 hover:text-teal-600 transition-colors cursor-pointer">
                  <Phone size={18} /> +92 51 123 4567
                </span>
                <span className="flex items-center gap-2 hover:text-teal-600 transition-colors cursor-pointer">
                  <Mail size={18} /> info@pharmacare.pk
                </span>
              </div>
            </div>
          </motion.div>

          {/* Image/Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-teal-300 rounded-full blur-[100px] opacity-20 mix-blend-multiply"></div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-300 rounded-full blur-[100px] opacity-20 mix-blend-multiply"></div>

            <div className="relative bg-white rounded-[2.5rem] p-3 shadow-2xl border border-gray-100 rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">
              <div className="aspect-[4/5] bg-gray-900 rounded-[2rem] overflow-hidden relative group">
                {/* Placeholder for Owner Image - Using a generated gradient/pattern if no real image */}
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col justify-end p-10 text-white relative z-10">
                  {/* Abstract Pattern Overlay */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  ></div>

                  <div className="relative z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="inline-block px-3 py-1 bg-teal-500 rounded-full text-xs font-bold mb-3">
                      FOUNDER
                    </div>
                    <h3 className="text-3xl font-bold mb-2">Dr. Ahmed Khan</h3>
                    <p className="text-gray-400 font-medium mb-6">
                      PharmaCare CEO & Chief Pharmacist
                    </p>

                    <p className="text-sm text-gray-400 border-l-2 border-teal-500 pl-4 italic">
                      "Our goal is not just to sell medicine, but to deliver
                      health and hope to every doorstep."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
