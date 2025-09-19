import React from "react";
import { motion } from "framer-motion";

export default function ContactInnerPage() {
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
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mb-6"
            >
              <h2 className="section-title flex items-start text-primary">
                Contact Us
              </h2>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
                className="bg-secondary h-1 w-[150px] mt-3 origin-left rounded-full"
              />
            </motion.div>

           
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
              className="text-black/80 font-secondary text-base md:text-lg leading-relaxed"
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
