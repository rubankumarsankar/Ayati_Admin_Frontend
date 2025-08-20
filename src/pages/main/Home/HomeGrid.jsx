import React from "react";
import { motion } from "framer-motion";

const imgs1 = [
  { src: "/assets/boy.png", heading: "Heading" },
  { src: "/assets/dubai.png", heading: "Heading" },
  { src: "/assets/flower.png", heading: "Heading" },
];

const imgs2 = [
  { src: "/assets/hand.png", heading: "Heading" },
  { src: "/assets/center.png", heading: "Heading" },
  { src: "/assets/happy.png", heading: "Heading" },
];

export default function HomeGridSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2 },
    }),
  };

  return (
    <section className="section">
       <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="section-container text-left relative mb-12"
            >
              <h2 className="section-title relative inline-block">
                Byte-Sized AI (Ayati Intelligence)
                <img
                  src="/logo-left.png"
                  alt="climb"
                  className="absolute right-[-45px] bottom-[-30px] w-10 md:w-12 lg:w-14"
                />
              </h2>
            </motion.div>
      <div className="section-container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Block 1 */}
        <div className="space-y-4">
          {/* Top Image */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={imgs1[0].src}
              alt={imgs1[0].heading}
              className="w-full h-64 md:h-96 object-cover transition-transform duration-500 hover:scale-105"
            />
            <span className="absolute bottom-2 left-2 bg-white text-blue-600 font-bold px-3 py-1 text-sm shadow rounded">
              {imgs1[0].heading}
            </span>
          </motion.div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {imgs1.slice(1).map((img, index) => (
              <motion.div
                key={index}
                custom={index + 1}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={img.src}
                  alt={img.heading}
                  className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute bottom-2 left-2 bg-white text-blue-600 font-bold px-3 py-1 text-sm shadow rounded">
                  {img.heading}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Block 2 */}
        <div className="space-y-4">
          {/* Top Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {imgs2.slice(1).map((img, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={img.src}
                  alt={img.heading}
                  className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute bottom-2 left-2 bg-white text-blue-600 font-bold px-3 py-1 text-sm shadow rounded">
                  {img.heading}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Bottom Image */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={imgs2[0].src}
              alt={imgs2[0].heading}
              className="w-full h-64 md:h-96 object-cover transition-transform duration-500 hover:scale-105"
            />
            <span className="absolute bottom-2 left-2 bg-white text-blue-600 font-bold px-3 py-1 text-sm shadow rounded">
              {imgs2[0].heading}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
