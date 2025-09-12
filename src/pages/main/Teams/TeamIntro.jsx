import React from "react";
import { motion } from "framer-motion";
import doodleIcon from "/assets/doodle.png"; // replace with your doodle path

export default function TeamIntro() {
  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="w-full bg-white section ">
      {/* Heading & Intro */}
      <motion.div
        className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12 section-container"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Title */}
        <motion.div
          className="flex items-start space-x-3"
          variants={fadeUp}
          custom={1}
        >
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-6"
          >
            <h2 className="section-title flex items-start text-primary">
              Teams
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-[100px] mt-3 origin-left rounded-full"
            />
          </motion.div>
        </motion.div>

        {/* Intro Text */}
        <motion.p
          className="text-black/80 font-secondary max-w-2xl text-base/8 md:text-base/8 leading-relaxed"
          variants={fadeUp}
          custom={2}
        >
          At AyatiWorks, we’re all about unlocking a digital gateway for our
          clients! Whether it's sparking consumer conversations through brand
          marketing, launching online shopping sprees, building cool platforms
          for entertainment and finance, managing enterprise networks, or
          supercharging performance ,  we’ve got it covered! Our secret sauce?
          Practical, trustworthy, and dependable solutions that make your
          digital dreams a reality!
        </motion.p>
      </motion.div>
    </section>
  );
}
