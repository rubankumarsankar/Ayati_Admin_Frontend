import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function PartnersInClimb() {
  const controlsRow1 = useAnimation();
  const controlsRow2 = useAnimation();

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    controlsRow1.start({
      x: "-100%",
      transition: { repeat: Infinity, ease: "linear", duration: 35 },
    });
    controlsRow2.start({
      x: "0%",
      transition: { repeat: Infinity, ease: "linear", duration: 35 },
    });
  };

  const stopAnimation = () => {
    controlsRow1.stop();
    controlsRow2.stop();
  };

  const partners = [
    { name: "Clinet 1", logo: "/logos/Client-1.webp" },
    { name: "Clinet 1", logo: "/logos/Client-2.webp" },
    { name: "Clinet 1", logo: "/logos/Client-3.webp" },
    { name: "Clinet 1", logo: "/logos/Client-4.webp" },
    { name: "Clinet 1", logo: "/logos/Client-5.webp" },
    { name: "Clinet 1", logo: "/logos/Client-6.webp" },
    { name: "Clinet 1", logo: "/logos/Client-7.webp" },
    { name: "Clinet 1", logo: "/logos/Client-8.webp" },
    { name: "Clinet 1", logo: "/logos/Client-9.webp" },
    { name: "Clinet 1", logo: "/logos/Client-10.webp" },
    { name: "Clinet 1", logo: "/logos/Client-11.webp" },
    { name: "Clinet 1", logo: "/logos/Client-12.webp" },
    { name: "Clinet 1", logo: "/logos/Client-13.webp" },
    { name: "Clinet 1", logo: "/logos/Client-14.webp" },
    { name: "Clinet 1", logo: "/logos/Client-15.webp" },
    { name: "Clinet 1", logo: "/logos/Client-16.webp" },
    { name: "Clinet 1", logo: "/logos/Client-17.webp" },
    { name: "Clinet 1", logo: "/logos/Client-18.webp" },
    { name: "Clinet 1", logo: "/logos/Client-19.webp" },
    { name: "Clinet 1", logo: "/logos/Client-20.webp" },
    { name: "Clinet 1", logo: "/logos/Client-21.webp" },
    { name: "Clinet 1", logo: "/logos/Client-22.webp" },
    { name: "Clinet 1", logo: "/logos/Client-23.webp" },
    { name: "Clinet 1", logo: "/logos/Client-24.webp" },
    { name: "Clinet 1", logo: "/logos/Client-25.webp" },
    { name: "Clinet 1", logo: "/logos/Client-26.webp" },
    { name: "Clinet 1", logo: "/logos/Client-27.webp" },
    { name: "Clinet 1", logo: "/logos/Client-28.webp" },
    { name: "Clinet 1", logo: "/logos/Client-29.webp" },
    { name: "Clinet 1", logo: "/logos/Client-30.webp" },
    { name: "Clinet 1", logo: "/logos/Client-31.webp" },
    { name: "Clinet 1", logo: "/logos/Client-32.webp" },
    { name: "Clinet 1", logo: "/logos/Client-33.webp" },
    { name: "Clinet 1", logo: "/logos/Client-34.webp" },
    { name: "Clinet 1", logo: "/logos/Client-35.webp" },
    { name: "Clinet 1", logo: "/logos/Client-36.webp" },
    { name: "Clinet 1", logo: "/logos/Client-37.webp" },
    { name: "Clinet 1", logo: "/logos/Client-38.webp" },
    { name: "Clinet 1", logo: "/logos/Client-39.webp" },
    { name: "Clinet 1", logo: "/logos/Client-40.webp" },
    { name: "Clinet 1", logo: "/logos/Client-41.webp" },
  ];

  return (
    <section className="bg-white py-10 md:py-10 lg:py-10">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12 section-container relative"
      >
        <h2 className="section-title relative inline-block">
          Our Partners in Climb
          <img
            src="/logo-left.png"
            alt="climb"
            className="absolute right-[-50px] bottom-[-40px] w-8 md:w-12 lg:w-14"
          />
        </h2>
      </motion.div>

      {/* ✅ Row 1 - Left to Right */}
      <div
        className="relative w-full overflow-hidden mb-6 section-container"
        onMouseEnter={stopAnimation}
        onMouseLeave={startAnimation}
      >
        <motion.div
          className="flex gap-4 sm:gap-6 md:gap-8"
          initial={{ x: "0%" }}
          animate={controlsRow1}
        >
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`row1-${index}`}
              className="bg-white p-2 sm:p-3 md:p-4 flex items-center justify-center cursor-pointer min-w-[100px] sm:min-w-[140px] md:min-w-[180px] transition-all"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-8 sm:h-10 md:h-12 lg:h-14 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* ✅ Row 2 - Right to Left */}
      <div
        className="relative w-full overflow-hidden section-container"
        onMouseEnter={stopAnimation}
        onMouseLeave={startAnimation}
      >
        <motion.div
          className="flex gap-4 sm:gap-6 md:gap-8"
          initial={{ x: "-100%" }}
          animate={controlsRow2}
        >
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`row2-${index}`}
              className="bg-white p-2 sm:p-3 md:p-4 flex items-center justify-center cursor-pointer min-w-[100px] sm:min-w-[140px] md:min-w-[180px] transition-all"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-8 sm:h-10 md:h-12 lg:h-14 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
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
