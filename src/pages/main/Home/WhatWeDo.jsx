import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb } from "react-icons/fa";

export default function WhatWeDo() {
  return (
    <section className="w-full bg-white py-6 px-4 md:px-10 lg:px-20 flex flex-col items-center">
        <div className="border-b border-black/70 shadow-xl my-8"></div>
      {/* WHAT WE DO */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10"
      >
        {/* Left Side - Heading + Icon + Image */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:w-1/3">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 flex items-center gap-2">
            WHAT WE DO
            <FaLightbulb className="text-yellow-500" />
          </h2>
          <img src="/icon/Brain.png" alt="Brain Icon" className="w-16 md:w-20" />
        </div>

        {/* Right Side - Text */}
        <p className="max-w-3xl text-gray-600 leading-relaxed md:w-2/3 text-center md:text-left">
          This year at Ayatiworks, we’re embracing Utasth—the enthusiasm and
          energy that fuel everything we do. For us, Utasth means approaching
          every challenge with positivity, bringing fresh ideas to the table,
          and creating meaningful work that makes a difference. It’s about
          going the extra mile for our clients, supporting each other as a team,
          and finding joy in every relationship, big or small.
        </p>
      </motion.div>

      {/* <div className="border-t border-gray-300 my-8"></div> */}
    </section>
  );
}
