import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeartbeatPreloader = ({ onComplete }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // 3 seconds total animation time: 3 beats + fade out
    const timer = setTimeout(() => {
      setShow(false);
      // slightly delay the actual onComplete to allow exit animation to finish
      setTimeout(onComplete, 800);
    }, 3500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50, transition: { duration: 0.8 } }}
          className="fixed inset-0 z-50 flex items-center justify-center  bg-gradient-to-br from-teal-50 via-white to-cyan-100"
        >
          <div className="relative w-full max-w-lg h-64 overflow-hidden flex items-center justify-center">
            {/* SVG Heartbeat Path */}
            <svg
              viewBox="0 0 500 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <motion.path
                d="M0 75 H50 L70 30 L90 120 L110 75 H150 H180 L200 20 L220 130 L240 75 H300 H330 L350 10 L370 140 L390 75 H500"
                stroke="#0F766E" /* Medical Teal */
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0.2 }}
                animate={{
                  pathLength: [0, 1, 0], // Draw then undraw
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  duration: 2,
                  times: [0, 0.5, 1],
                  repeat: 2, // Repeat a few times
                  ease: "easeInOut",
                }}
              />

              {/* Glowing Leading Dot */}
              <motion.circle
                r="4"
                fill="#2DD4BF"
                filter="url(#glow)"
                initial={{ offsetDistance: "0%" }}
                animate={{ offsetDistance: "100%" }}
              >
                {/* Note: offset-path needs CSS support or specific SVG motion path setup, simplified here with path animation */}
              </motion.circle>
            </svg>

            {/* Text Glitch Effect / Loading Text */}
            <motion.div
              className="absolute bottom-10 font-mono text-teal-500 tracking-widest text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              SYSTEM INITIALIZING...
            </motion.div>

            {/* Simple Glow Filter */}
            <svg width="0" height="0">
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HeartbeatPreloader;
