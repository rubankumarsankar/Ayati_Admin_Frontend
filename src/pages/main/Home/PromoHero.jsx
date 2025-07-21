import React from "react";
import { motion } from "framer-motion";
import TVImage from "/assets/tv-utsah.png"; // ✅ Ensure the correct path

export default function PromoHero() {
  return (
    <section className="w-full bg-white py-6 px-4 md:px-10 lg:px-20 flex flex-col items-center font-primary">
      {/* ✅ Top Banner */}
      <motion.div
        className="bg-primary text-white rounded-xl px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 w-full max-w-6xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center font-primary md:text-left text-xl md:text-2xl lg:text-3xl leading-snug">
          <p>
            Learn what agencies do daily—run ads, scale brands, <br />
            and get certified in just
            <span className="text-primary bg-white font-bold ml-2 px-2 py-0.5 rounded-md">
              30 days!
            </span>
          </p>
        </div>

        <a
          href="#"
          className="bg-secondary/80 hover:bg-secondary text-white font-primary font-bold px-5 py-2 rounded-full text-sm sm:text-base hover:opacity-90 transition"
        >
          CLICK HERE TO KNOW MORE
        </a>
      </motion.div>

      {/* ✅ Sub-header */}
      <motion.div
        className="w-full max-w-6xl mt-10 text-center flex flex-col sm:flex-row justify-between items-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h2 className="text-primary font-bold text-2xl sm:text-3xl lg:text-4xl">
          Behind the Clicks
        </h2>
        <p className="text-secondary text-sm sm:text-base font-secondary">
          Innovating with A Dash of Madness Since 2017!
        </p>
      </motion.div>

      {/* ✅ TV Image */}
      <motion.div
        className="mt-10 max-w-xl w-full flex justify-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <img
          src={TVImage}
          alt="The Year of Utsah"
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </motion.div>

      {/* ✅ Description */}
      <motion.div
        className="w-full max-w-6xl mt-10 text-center sm:text-left px-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-secondary">
          This year at <span className="font-bold text-primary">Ayatiworks</span>, we’re embracing
          <span className="font-bold text-secondary"> Utsah</span>—the enthusiasm and energy that
          fuel everything we do. For us, Utsah means approaching every challenge
          with positivity, bringing fresh ideas to the table, and creating
          meaningful work that makes a difference. It’s about going the extra
          mile for our clients, supporting each other as a team, and finding joy
          in every milestone, big or small. As we step into 2025, Utsah reminds
          us to stay passionate, stay inspired, and stay connected.
        </p>

        <h3 className="text-lg sm:text-xl text-primary text-center font-bold mt-6">
          Here’s to a year of growth, creativity, and purpose—powered by Utsah!
          Let’s make it unforgettable!
        </h3>

        <div className="border-b border-black/70 shadow-md my-8"></div>
      </motion.div>
    </section>
  );
}
