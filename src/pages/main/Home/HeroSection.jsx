import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSectionLayoutExact() {
  return (
    <section className="bg-white py-10 md:pt-24">
      {/* 
        Mobile:    grid-cols-2 (to allow 1x2 pairs)
        XL / 2XL:  exact 3-col spec with fixed heights
      */}
      <div
        className="
          mx-auto
          w-full max-w-[1440px]
          grid grid-cols-2 gap-[10px] p-[15px]
          rounded-3xl bg-white
          xl:h-[600px] xl:grid-cols-[449px_492px_449px]
        "
      >
        {/* ======= 1) TOP-WIDE VIDEO ======= */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          className="
            col-span-2            /* mobile: full width */
            xl:col-[1/3]         /* spans col 1-2 on xl */
            rounded-3xl overflow-hidden
            h-48 sm:h-56 md:h-60 xl:h-[185px]
          "
        >
          <video
            src="/assets/banner-01.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* ======= 2) TWO IMAGES (SIDE BY SIDE ON MOBILE) ======= */}
        {/* Top Right (image) */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.05 }}
          className="
            col-span-1 xl:col-[3/4]
            rounded-3xl overflow-hidden border border-gray-200
            h-36 sm:h-40 md:h-44 xl:h-[179px]
          "
        >
          <img
            src="/assets/banner-14.jpg"
            alt="Top Right"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Middle Left (image) */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.1 }}
          className="
            col-span-1 xl:col-[1/2]
            rounded-3xl overflow-hidden border border-gray-200
            h-36 sm:h-40 md:h-44 xl:h-[186px]
          "
        >
          <img
            src="/assets/banner-18.jpg"
            alt="Middle Left"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* ======= 3) CENTER VIDEO (FULL WIDTH ON MOBILE) ======= */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.15 }}
          className="
            col-span-2 xl:col-[2/3]
            rounded-3xl overflow-hidden
            h-50 sm:h-58 md:h-60 xl:h-[190px]
          "
        >
          <video
            src="/assets/banner-12.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* ======= 4) TWO IMAGES (SIDE BY SIDE ON MOBILE) ======= */}
        {/* Middle Right (image) */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          className="
            col-span-1 xl:col-[3/4]
            rounded-3xl overflow-hidden
            h-36 sm:h-40 md:h-44 xl:h-[186px]
          "
        >
          <img
            src="/assets/banner-19.jpg"
            alt="Middle Right"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Bottom Left (image) */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.25 }}
          className="
            col-span-1 xl:col-[1/2]
            rounded-3xl overflow-hidden border border-gray-200
            h-36 sm:h-40 md:h-44 xl:h-[179px]
          "
        >
          <img
            src="/assets/banner-16.jpg"
            alt="Bottom Left"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* ======= 5) BOTTOM-WIDE VIDEO ======= */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.35 }}
          className="
            col-span-2 xl:col-[2/4]
            rounded-3xl overflow-hidden
            h-48 sm:h-56 md:h-60 xl:h-[185px]
          "
        >
          <video
            src="/assets/banner-bottem.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
