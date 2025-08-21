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
    <section className="bg-white section">
      {/* Heading + Button */}
      <div className="section-container mt-6">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6">
          {/* Left: Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title text-left md:col-span-10"
          >
            Steadily Crushing the Digital Charts!
            <br />
            One Award at a Time!
          </motion.h2>

          {/* Right: Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex md:justify-end md:col-span-2"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-2 text-sm font-semibold text-blue-900 border border-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition"
            >
              GET IN TOUCH
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Awards Cards */}
      <div className="mt-10 bg-primary rounded-2xl py-10 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center section-container">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative w-64 h-80 sm:w-72 sm:h-96 [perspective:1200px] cursor-pointer"
          >
            <div
              className={`absolute inset-0 rounded-2xl text-center shadow-xl transition-transform duration-700 [transform-style:preserve-3d] ${
                flipped[index] ? "[transform:rotateY(180deg)]" : ""
              }`}
            >
              {/* Front Side */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary rounded-2xl shadow-lg [backface-visibility:hidden] p-6">
                <img
                  src={award.img}
                  alt={award.title}
                  className="h-40 object-contain mb-4"
                />
                <p className="text-white font-primary font-medium text-lg leading-tight">
                  {award.title}
                </p>
                <button
                  onClick={() => handleFlip(index)}
                  className="mt-4 bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-xs font-medium hover:bg-blue-200 transition"
                >
                  KNOW MORE
                </button>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-700 text-white rounded-2xl shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] p-6">
                <p className="text-sm leading-relaxed">{award.backText}</p>
                <button
                  onClick={() => handleFlip(index)}
                  className="mt-4 bg-white text-blue-900 px-4 py-2 rounded-full text-xs font-medium hover:bg-gray-100 transition"
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
