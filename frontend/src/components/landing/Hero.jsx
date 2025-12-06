import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Truck, ArrowRight } from "lucide-react";

const Hero = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
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
            <a
              href="#shop"
              className="bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-200 px-8 py-4 rounded-2xl font-bold transition-all transform hover:-translate-y-1 hover:border-gray-300 flex items-center justify-center gap-2"
            >
              Order Medicines
            </a>
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

          {/* Placeholder for 3D Element/Illustration */}
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
                    <div className="font-bold text-gray-900">100% Genuine</div>
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
  );
};

export default Hero;
