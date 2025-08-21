import React from "react";
import { motion } from "framer-motion";
import doodleIcon from "/assets/doodle.png"; // ✅ replace with your doodle path

export default function Contact() {
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
    <section className="w-full bg-white section">
      <div className="section-container mx-auto">
        {/* Heading & Intro */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12">
          {/* Left Title */}
          <motion.div
            className="flex items-start space-x-3"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div>
              <h2 className="section-title">Contact Us</h2>
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

          {/* Right Text Content */}
          <div className="max-w-2xl">
            <motion.h3
              className="text-3xl md:text-3xl font-primary font-medium text-secondary mb-4"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once: true }}
            >
              Ready to Build Something Forward?
            </motion.h3>

            <motion.p
              className="text-gray-700 font-secondary text-base md:text-lg leading-relaxed"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={2}
              viewport={{ once: true }}
            >
              Whether you’re refining your digital presence or starting from
              scratch, we're here to make it happen. Drop us a line, let’s craft
              an unforgettable experience.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
