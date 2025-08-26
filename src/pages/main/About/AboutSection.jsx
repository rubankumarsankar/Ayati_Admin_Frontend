import React from "react";
import { motion } from "framer-motion";
import tvImage from "/assets/tv.png"; // ✅ Replace with actual path
import doodleIcon from "/assets/doodle.png"; // ✅ Replace with actual path

export default function AboutSection() {
  return (
    <section className="bg-white section py-12 sm:py-16 md:py-20">
      {/* Top Title Section */}
      <div className="section-container text-center flex flex-col sm:flex-row justify-between items-center gap-6 mb-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-6"
        >
          <h2 className="section-title flex items-start text-primary">
            About Us
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
            className="bg-secondary h-1 w-[100px] mt-3 origin-left rounded-full"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-secondary font-primary text-lg sm:text-xl md:text-2xl lg:text-3xl leading-snug max-w-xl"
        >
          Innovating with A Dash of Madness Since 2017!
        </motion.p>
      </div>

      {/* Content Grid */}
      <div className="section-container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left side - TV Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={tvImage}
            alt="The Year of Utsah"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg drop-shadow-xl rounded-xl"
          />
        </motion.div>

        {/* Right side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700 font-secondary leading-relaxed mb-6 text-base sm:text-lg md:text-xl">
            This year at <span className="font-semibold">Ayatworks</span>, we’re embracing
            <span className="text-sky-600 font-semibold"> Utsah</span>—the enthusiasm and
            energy that fuel everything we do. For us, Utsah means approaching
            every challenge with positivity, bringing fresh ideas to the table,
            and creating meaningful work that makes a difference. It’s about
            going the extra mile for our clients, supporting each other as a
            team, and finding joy in every milestone, big or small. As we step
            into 2025, Utsah reminds us to stay passionate, stay inspired, and
            stay connected.
          </p>

          <p className="text-sky-600 font-secondary text-primary font-meduim text-lg md:text-xl">
            Here’s to a year of growth, creativity, and purpose—powered by
            Utsah! Let’s make it unforgettable!
          </p>
        </motion.div>
      </div>

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
