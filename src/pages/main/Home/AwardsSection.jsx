import React, { useState } from "react";
import { motion } from "framer-motion";

export default function AwardsSection() {
  const [flipped, setFlipped] = useState(Array(4).fill(false));

  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  const awards = [
    {
      title: "Indian Achievers AWARD",
      img: "/assets/aw1.png",
      backText:
        "Recognized for excellence and outstanding contribution in the digital industry.",
    },
    {
      title: "Digital Agency of the YEAR",
      img: "/assets/aw1.png",
      backText:
        "Awarded for delivering top-performing campaigns and exceptional digital results.",
    },
    {
      title: "Trendsetters of TamilNadu by TIMES OF INDIA",
      img: "/assets/aw1.png",
      backText:
        "Celebrated for creating trends that shaped the digital marketing space.",
    },
    {
      title: "TamilNadu Brand Leadership AWARDS",
      img: "/assets/aw1.png",
      backText:
        "Acknowledged for leadership in brand-building and innovative marketing.",
    },
  ];

  return (
    <section className="bg-white py-12 px-4 md:px-12 lg:px-20 text-center">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold text-blue-900"
      >
        Steadily Crushing the Digital Charts!
        <br />
        <span className="text-blue-700">One Award at a Time!</span>
      </motion.h2>

      <motion.button
        whileHover={{ scale: 1.05 }}
        className="mt-4 px-5 py-2 text-sm font-semibold text-blue-900 border border-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition"
      >
        GET IN TOUCH
      </motion.button>

      {/* Awards Cards */}
      <div className="mt-10 bg-blue-900 rounded-2xl py-10 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative w-48 h-64 [perspective:1000px]"
          >
            <div
              className={`absolute inset-0 rounded-xl text-center shadow-lg transition-transform duration-700 [transform-style:preserve-3d] ${
                flipped[index] ? "[transform:rotateY(180deg)]" : ""
              }`}
            >
              {/* Front Side */}
              <div className="absolute inset-0 flex flex-col items-center justify-center [backface-visibility:hidden] p-4">
                <img
                  src={award.img}
                  alt={award.title}
                  className="h-35 mb-4"
                />
                {/* <p className="text-blue-900 font-semibold text-sm leading-tight">
                  {award.title}
                </p> */}
                <button
                  onClick={() => handleFlip(index)}
                  className="mt-3 bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-200 transition"
                >
                  KNOW MORE
                </button>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-700 text-white rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden] p-4">
                <p className="text-sm leading-relaxed">{award.backText}</p>
                <button
                  onClick={() => handleFlip(index)}
                  className="mt-3 bg-white text-blue-900 px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-100 transition"
                >
                  BACK
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
