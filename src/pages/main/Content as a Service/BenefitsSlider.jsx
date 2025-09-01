import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const benefits = [
  {
    title: "Scalable Content Production ",
    desc: "Adjust output to your needs, from 5 posts to a full multimedia campaign.",
  },
  {
    title: "Speed & Agility ",
    desc: "Campaign-ready content delivered faster than traditional setups.",
  },
  {
    title: "Expertise On-Demand ",
    desc: "Access to strategists, writers, designers, and video creators.",
  },
  {
    title: "Cost-Efficient Model ",
    desc: "No bloated retainers; pay only for what you need.",
  },
  {
    title: "Performance-Driven Output ",
    desc: "Every asset is created with SEO, engagement, and conversions in mind.",
  },
  // {
  //   title: "",
  //   desc: "",
  // },
 
];

export default function BenefitsSlider() {
  const [index, setIndex] = useState(0);

  // ✅ Auto-slide every 4s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % benefits.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // ✅ Variants for animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };

  return (
    <section className="bg-white py-12 section">
      {/* ✅ Section Header */}
      <div className="section-container mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title "
        >
          Benefits of Content as a Service (CaaS)
        </motion.h2>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
          className="bg-blue-600 h-1 w-40 mx-auto mt-3 origin-left rounded-full"
        />

        {/* <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-black/80 font-medium font-secondary mt-6 max-w-2xl mx-auto text-base md:text-lg"
        >
          A well-executed digital marketing strategy delivers benefits that
          traditional marketing cannot.
        </motion.p> */}
      </div>

      {/* ✅ Slider Content */}
      <div className="relative max-w-3xl mx-auto h-60 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8 w-full text-center"
          >
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-medium text-primary font-primary mb-3"
            >
              {benefits[index].title}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-black/80 font-medium font-secondary mt-6 max-w-2xl mx-auto text-base md:text-lg"
            >
              {benefits[index].desc}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ✅ Dots Indicator with Animation */}
      <div className="flex justify-center gap-2 mt-6">
        {benefits.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setIndex(i)}
            whileHover={{ scale: 1.2 }}
            animate={{ scale: i === index ? 1.2 : 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === index ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* ✅ Extra Note for Chennai */}
      {/* <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="max-w-3xl mx-auto mt-10 text-center"
      >
        <p className="text-black/80 font-medium font-secondary mt-6 max-w-2xl mx-auto text-base md:text-lg">
          For businesses in <span className="font-semibold">Chennai</span>,
          these benefits translate into brand differentiation and growth in a
          highly saturated market. Imagine launching a new product and reaching
          thousands of potential buyers within days, not weeks. Or building a
          content strategy that establishes you as an industry authority.
        </p>
      </motion.div> */}
    </section>
  );
}
