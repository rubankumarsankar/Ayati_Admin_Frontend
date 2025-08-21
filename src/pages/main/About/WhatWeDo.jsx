import React from "react";
import { motion } from "framer-motion";
import doodleIcon from "/assets/doodle.png"; // replace with your doodle path

export default function WhatWeDo() {
  const services = [
    {
      title: "Consulting for a Click-Worthy Connection",
      desc: "When everything else is on point, great user design doesn’t just jazz up how users see your company; it also rolls out the red carpet for consumer adoption!",
    },
    {
      title:
        "Creative Marketing Communications: Big on RoI and Even Bigger on Ideas",
      desc: "We craft creative marketing campaigns that not only grab attention but also deliver measurable results for your business.",
    },
    {
      title: "Digital Production and Support: Quality that Goes Global",
      desc: "From strategy to production, we provide end-to-end digital solutions that scale globally with precision and quality.",
    },
    {
      title: "Technology with Trust: Reliable & Scalable",
      desc: "We help enterprises grow by delivering secure, scalable, and performance-driven technology solutions.",
    },
  ];

  // Framer Motion variants
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
    <section className="bg-white section overflow-hidden">
      <div className="section-container mx-auto">
        {/* Heading Row */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex items-start space-x-3">
            <div>
              <h2 className="section-title ">
                What we do
              </h2>
              <span className="block w-20 h-1 bg-sky-500 mt-2"></span>
            </div>
            <motion.img
              src={doodleIcon}
              alt="Doodle"
              className="w-8 h-8"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>

          <p className="text-gray-700 font-secondary max-w-2xl text-sm md:text-base leading-relaxed">
            At AyatiWorks, we’re all about unlocking a digital gateway for our
            clients! Whether it’s sparking consumer conversations through brand
            marketing, launching online shopping sprees, building cool platforms
            for entertainment and finance, managing enterprise networks, or
            supercharging performance—we’ve got it covered! Our secret sauce?
            Practical, trustworthy, and dependable solutions that make your
            digital dreams a reality!
          </p>
        </motion.div>

        {/* Flip Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="relative h-72 sm:h-80 lg:h-96 [perspective:1200px] group"
              custom={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="absolute inset-0 transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Side */}
                <div className="absolute inset-0 flex items-center justify-center text-center text-primary font-semibold p-6 bg-white shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.03] [backface-visibility:hidden]">
                  {service.title}
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 flex items-center justify-center text-center bg-primary text-white p-6 shadow-2xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  {service.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
