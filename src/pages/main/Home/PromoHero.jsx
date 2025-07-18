import React from "react";
import { motion } from "framer-motion";
import TVImage from "/assets/tv-utsah.png"; // Replace with correct path or import your image

export default function PromoHero() {
  return (
    <section className="w-full bg-white py-6 px-4 md:px-10 lg:px-20 flex flex-col items-center">
      {/* Top Banner */}
      <motion.div
        className="bg-[#003366] text-white rounded-xl px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 w-full max-w-6xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center md:text-left text-xl md:text-2xl">
          <p>
            Learn what agencies do daily—run ads, <br />
            scale brands, and get certified in just
            <span className="text-[#00B6F0] bg-white font-bold ml-4 p-1">
              {" "}
              30 days!
            </span>
          </p>
        </div>
        <a
          href="#"
          className="bg-[#00B6F0] text-white font-bold px-4 py-2 rounded-full text-sm hover:bg-[#009ecc] transition"
        >
          CLICK HERE TO KNOW MORE
        </a>
      </motion.div>

      {/* Sub-header */}
      <motion.div
        className="w-full max-w-6xl mt-10 text-center flex flex-col sm:flex-row justify-between items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h2 className="text-[#003366] font-bold text-2xl sm:text-3xl">
          Behind the Clicks
        </h2>
        <p className="text-[#00B6F0] text-sm sm:text-base">
          Innovating with A Dash of Madness Since 2017!
        </p>
      </motion.div>

      {/* TV Image with Text */}
      <motion.div
        className="mt-10 max-w-xl w-full flex justify-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <img src={TVImage} alt="The Year of Utsah" className="w-full h-auto" />
      </motion.div>
      <motion.div className="w-full max-w-6xl mt-10 gap-4">
        <p className="text-lg">
          This year at Ayatiworks, we’re embracing Utsah—the enthusiasm and
          energy that fuel everything we do. For us, Utsah means approaching
          every challenge with positivity, bringing fresh ideas to the table,
          and creating meaningful work that makes a difference. It’s about going
          the extra mile for our clients, supportinG each other as a team, and
          finding joy in every milestone, big or small. As we step into 2025,
          Utsah reminds us to stay passionate, stay inspired, and stay
          connected.
        </p>

        <h3 className="text-xl text-primary text-center mt-5">
          Here’s to a year of growth, creativity, and purpose—powered by Utsah!
          Let’s make it unforgettable!
        </h3>
            <div className="border-b border-black/70 shadow-xl my-8"></div>

      </motion.div>

    </section>
  );
}
