import React from "react";
import { motion } from "framer-motion";

export default function WhatWeDo() {
  return (
    <section className=" bg-white">
      {/* WHAT WE DO */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center md:items-start section-container gap-8"
      >
        {/* Left Side - Heading + Icon + Image */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:w-1/2">
          <h2 className="section-title flex items-center gap-2">WHAT WE DO</h2>
          <div className="flex justify-center md:justify-start">
            <img
              src="/icon/Brain.png"
              alt="Brain Icon"
              className="w-16 md:w-20"
            />
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="md:w-1/2">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-secondary">
            This year at Ayatiworks, we’re embracing Utsah—the enthusiasm and
            energy that fuel everything we do. For us, Utsah means approaching
            every challenge with positivity, bringing fresh ideas to the table,
            and creating meaningful work that makes a difference. It’s about
            going the extra mile for our clients, supportinG each other as a
            team, and finding joy in every milestone, big or small. As we step
            into 2025, Utsah reminds us to stay passionate, stay inspired, and
            stay connected.
          </p>
        </div>
      </motion.div>
      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="border-b border-black mt-8 sm:mt-10 section-container"
      ></motion.div>
    </section>
  );
}
