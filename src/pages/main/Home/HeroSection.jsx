import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSectionLayoutExact() {
  return (
    <section className="bg-white py-10 pt-24">
      {/* Outer container: fluid by default; locks to exact spec at 2xl */}
      <div
        className="
          mx-auto
          w-full
          px-4
          grid gap-3
          /* Breakpoints */
          md:grid-cols-2
          xl:grid-cols-3
          2xl:max-w-[1440px] 2xl:h-[600px]
          2xl:grid-cols-[449px_492px_449px] 2xl:gap-[10px] 2xl:p-[15px]
          rounded-3xl bg-white
        "
      >
        {/* ===== TOP LEFT WIDE (spans 2 cols on md/xl, fixed on 2xl) ===== */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          className="
            overflow-hidden rounded-3xl
            aspect-[16/9]
            md:col-span-2
            xl:col-[1/3] 
            2xl:aspect-auto 2xl:h-[185px] 2xl:col-[1/3]
          "
        >
          <video
            src="/assets/banner-01.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* ===== TOP RIGHT ===== */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.05 }}
          className="
            overflow-hidden rounded-3xl
            aspect-[16/10]
            border border-gray-200
            xl:col-[3/4]
            2xl:aspect-auto 2xl:h-[179px]
          "
        >
          <img
            src="/assets/banner-14.jpg"
            alt="Top Right"
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* ===== MIDDLE LEFT ===== */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.1 }}
          className="
            overflow-hidden rounded-3xl
            aspect-[16/10]
            xl:col-[1/2]
            2xl:aspect-auto 2xl:h-[200px]
          "
        >
          <img
            src="/assets/banner-17.jpg"
            alt="Middle Left"
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* ===== MIDDLE CENTER ===== */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.15 }}
          className="
            overflow-hidden rounded-3xl
            aspect-[16/10]
            xl:col-[2/3]
            2xl:aspect-auto 2xl:h-[200px]
          "
        >
          <video
            src="/assets/banner-12.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* ===== MIDDLE RIGHT ===== */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          className="
            overflow-hidden rounded-3xl
            aspect-[16/10]
            xl:col-[3/4]
            2xl:aspect-auto 2xl:h-[200px]
          "
        >
          <img
            src="/assets/banner-19.jpg"
            alt="Middle Right"
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* ===== BOTTOM LEFT ===== */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.25 }}
          className="
            overflow-hidden rounded-3xl
            aspect-[16/10]
            xl:col-[1/2] border border-gray-200
            2xl:aspect-auto 2xl:h-[184px]
          "
        >
          <img
            src="/assets/banner-16.jpg"
            alt="Bottom Left"
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* ===== BOTTOM RIGHT WIDE (spans 2 cols at md+, exact at 2xl) ===== */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.35 }}
          className="
            overflow-hidden rounded-3xl
            aspect-[16/9]
            md:col-span-2
            xl:col-[2/4]
            2xl:aspect-auto 2xl:h-[185px] 
          "
        >
          <video
            src="/assets/banner-bottem-1.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
