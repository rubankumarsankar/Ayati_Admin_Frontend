import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
// Variants for grid animations
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSectionLayout() {
  const words = ["WE", "MAKES", "CLICKS", "STICKS", "AND", "STORES", "SELL!"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1500); // change every 1.5s
    return () => clearInterval(interval);
  }, [words.length]);
  return (
    <section className="bg-white section">
      <div className="section-container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Title with marquee */}
        <div className="section-title col-span-1 sm:col-span-2 md:col-span-2 bg-primary text-white flex items-center overflow-hidden rounded-xl p-6">
          <motion.div
            className="whitespace-nowrap font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
            animate={{ x: ["100%", "-100%"] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            WHAT MAKES AYATIWORKS ?
          </motion.div>
        </div>

        {/* Steel rods */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-xl p-4 flex items-center justify-center shadow"
        >
          <img
            src="/assets/steel.png"
            alt="Steel Rods"
            className="rounded-md w-full h-full object-cover"
          />
        </motion.div>

        {/* Kid with helmet */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-xl flex items-center justify-center shadow"
        >
          <img
            src="/assets/kid.png"
            alt="Kid with helmet"
            className="rounded-md w-full h-full object-cover"
          />
        </motion.div>

        {/* Medical treatment video */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-xl flex items-center justify-center shadow relative"
        >
          <img
            src="/assets/medical.png"
            alt="Medical treatment"
            className="rounded-md w-full h-full object-cover"
          />
          <button className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6 text-blue-500"
                viewBox="0 0 16 16"
              >
                <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
              </svg>
            </div>
          </button>
        </motion.div>

        {/* Pens branding */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-xl flex items-center justify-center shadow"
        >
          <img
            src="/assets/pens.png"
            alt="Pens"
            className="rounded-md w-full h-full object-cover"
          />
        </motion.div>

        {/* Blue gadget */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-xl flex items-center justify-center shadow"
        >
          <img
            src="/assets/gadget.png"
            alt="Gadget"
            className="rounded-md w-full h-full object-cover"
          />
        </motion.div>

        {/* More than */}
        <div className="col-span-1 sm:col-span-2 bg-primary section-title text-white flex items-center justify-center rounded-xl p-6 text-7xl sm:text-8xl font-bold">
          <motion.span
            key={index} // re-trigger animation when word changes
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            {words[index]}
          </motion.span>
        </div>
      </div>

      {/* ✅ Sticky Contact Button with Animation */}
      {/* <motion.a
        href="/contact"
        initial={{ y: 0 }}
        animate={{ y: [0, -8, 0, 8, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="fixed bottom-[100px] right-6 z-50 flex items-center cursor-pointer"
      >
        <span className="px-4 py-2 mr-2 font-semibold text-black text-sm bg-white rounded-full shadow-md border border-gray-300">
          Get in touch with us
        </span>
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="bg-[#0072CE] flex items-center justify-center w-12 h-12 rounded-full shadow-lg"
        >
          <FaQuoteRight className="text-white text-xl" />
        </motion.div>
      </motion.a> */}
    </section>
  );
}
