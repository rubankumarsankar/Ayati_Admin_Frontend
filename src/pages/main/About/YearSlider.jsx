import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import doodleIcon from "/assets/doodle.png"; // replace with doodle path

const years = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018];

export default function YearSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto slider every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % years.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Timeline Nav */}
        <div className="flex items-center justify-between text-sky-600 font-bold mb-12 overflow-x-auto">
          {years.map((year, idx) => (
            <div
              key={year}
              className={`px-4 cursor-pointer transition ${
                idx === activeIndex ? "text-blue-700" : "text-sky-500"
              }`}
              onClick={() => setActiveIndex(idx)}
            >
              {year}
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left - Content */}
          <div>
            <h2 className="text-blue-700 text-3xl md:text-4xl font-extrabold flex items-center mb-3">
              The Year of Utsah
              <img
                src={doodleIcon}
                alt="Doodle"
                className="ml-2 w-8 h-8 inline-block"
              />
            </h2>
            <span className="block w-20 h-1 bg-sky-500 mb-6"></span>

            <p className="text-gray-700 leading-relaxed mb-6">
              This year at Ayatworks, we’re embracing Utsah—the enthusiasm and
              energy that fuel everything we do. For us, Utsah means approaching
              every challenge with positivity, bringing fresh ideas to the
              table, and creating meaningful work that makes a difference. It’s
              about going the extra mile for our clients, supporting each other
              as a team, and finding joy in every milestone, big or small. As we
              step into {years[activeIndex]}, Utsah reminds us to stay
              passionate, stay inspired, and stay connected. Here’s to a year of
              growth, creativity, and purpose—powered by Utsah! Let’s make it
              unforgettable!
            </p>
          </div>

          {/* Right - Vertical Auto Slider */}
          <div className="flex flex-col items-center justify-center h-full">
            <div className="space-y-6 text-center">
              <AnimatePresence>
                {years.map((year, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <motion.div
                      key={year}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: isActive ? 1 : 0.3, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.6 }}
                      className={`font-extrabold ${
                        isActive ? "text-5xl text-blue-700" : "text-3xl text-gray-400"
                      }`}
                    >
                      {year}
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
