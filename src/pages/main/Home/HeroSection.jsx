import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSectionLayoutExact() {
  return (
    <section className="bg-white py-10 pt-24">
      {/* Outer: 1440w x 600h, padding 15, gap 10 */}
      <div
        className="
          mx-auto
          max-w-[1440px] h-[600px]
          grid grid-cols-[449px_492px_449px]
          gap-[10px] p-[15px]
          rounded-3xl bg-white
        "
      >
        {/* ========== TOP ROW ========== */}

        {/* Top Left Wide: 951 x 185 (spans col 1-2) */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          className="col-[1/3] h-[185px] rounded-3xl overflow-hidden"
        >
          <video
            src="/assets/banner-01.mp4"
            autoPlay muted loop playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Top Right: 449 x 179 (col 3) */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.05 }}
          className="col-[3/4] h-[179px] rounded-3xl overflow-hidden"
        >
          <img
            src="/assets/banner-14.jpg"
            alt="Top Right"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* ========== MIDDLE ROW ========== */}

        {/* Middle Left: 449 x 186 (col 1) */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.1 }}
          className="col-[1/2] h-[186px] rounded-3xl overflow-hidden"
        >
          <img
            src="/assets/banner-18.jpg"
            alt="Middle Left"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Middle Center: 492 x 180 (col 2) */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.15 }}
          className="col-[2/3] h-[180px] rounded-3xl overflow-hidden"
        >
          <video
            src="/assets/banner-12.mp4"
            autoPlay muted loop playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Middle Right: 449 x 186 (col 3) */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          className="col-[3/4] h-[186px] rounded-3xl overflow-hidden"
        >
          <img
            src="/assets/banner-06.png"
            alt="Middle Right"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* ========== BOTTOM ROW ========== */}

        {/* Bottom Left: 449 x 179 (col 1) */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.25 }}
          className="col-[1/2] h-[179px] rounded-3xl overflow-hidden"
        >
          <img
            src="/assets/banner-16.jpg"
            alt="Bottom Left"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Bottom Right Wide: 951 x 185 (spans col 2-3) */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.35 }}
          className="col-[2/4] h-[185px] rounded-3xl overflow-hidden"
        >
          <video
            src="/assets/banner-bottem-1.mp4"
            autoPlay muted loop playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
