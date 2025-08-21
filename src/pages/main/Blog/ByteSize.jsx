import React from "react";
import { motion } from "framer-motion";
import doodleIcon from "/assets/doodle.png"; // replace with your doodle path

export default function ByteSize() {
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
            <div>
              <h2 className="section-title flex items-top">
                Byte-Sized AI <br /> (Ayati Intelligence)
              </h2>
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
                viewport={{ once: true }}
                className="block h-1 bg-sky-500 mt-2"
              ></motion.span>
            </div>
            <motion.img
              src={doodleIcon}
              alt="Doodle"
              className="w-8 h-8"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Intro Text */}
          <motion.p
            className="text-gray-700 font-secondary max-w-2xl text-base/8 md:text-base/8 leading-relaxed"
            variants={fadeUp}
            custom={2}
          >
            At AyatiWorks, we’re all about unlocking a digital gateway for our
            clients! Whether it's sparking consumer conversations through brand
            marketing, launching online shopping sprees, building cool platforms
            for entertainment and finance, managing enterprise networks, or
            supercharging performance— we’ve got it covered! Our secret sauce?
            Practical, trustworthy, and dependable solutions that make your
            digital dreams a reality!
          </motion.p>
        </motion.div>
      </section>
  );
}
