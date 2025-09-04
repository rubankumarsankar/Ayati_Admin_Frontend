import React from "react";
import { motion } from "framer-motion";

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
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-6"
          >
            <h2 className="section-title flex items-start text-primary">
              What we do
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-[100px] mt-3 origin-left rounded-full"
            />
          </motion.div>

          <p className="text-black/80 font-secondary max-w-2xl mb-6 text-base/8 sm:text-lg/8 md:text-xl/8">
            At Ayatiworks, we open the doors to your digital future. From
            sparking meaningful conversations through brand marketing to
            creating seamless e-commerce experiences, building powerful
            platforms for entertainment and finance, managing enterprise
            networks, or driving measurable performance growth, we cover it all.
            Our strength lies in delivering practical, reliable, and
            result-driven solutions that businesses trust. With Ayatiworks by
            your side, your digital vision isn’t just an idea; it’s a reality in
            motion.
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
        className="border-b border-primary h-1 mt-8 sm:mt-10 section-container"
      ></motion.div>
    </section>
  );
}
