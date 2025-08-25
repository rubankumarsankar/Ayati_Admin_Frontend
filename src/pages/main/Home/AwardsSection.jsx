import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AwardsSection() {
  const [flipped, setFlipped] = useState(Array(4).fill(false));
  const [modalImage, setModalImage] = useState(null);

  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  const awards = [
    {
      title: "Indian Achievers AWARD",
      img: "/assets/av-1.png",
      backImg: "/assets/awards-1.webp",
    },
    {
      title: "Digital Agency of the YEAR",
      img: "/assets/av-2.png",
      backImg: "/assets/awards-2.webp",
    },
    {
      title: "Trendsetters of TamilNadu by TIMES OF INDIA",
      img: "/assets/av-3.png",
      backImg: "/assets/awards-3.webp",
    },
    {
      title: "TamilNadu Brand Leadership AWARDS",
      img: "/assets/av-4.png",
      backImg: "/assets/awards-4.webp",
    },
  ];

  return (
    <section className="bg-white py-16">
      {/* Heading + Button */}
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="section-title text-left md:col-span-10"
          >
            Steadily Crushing the Digital Charts!
            <br /> One Award at a Time!
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex md:justify-end md:col-span-2"
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 text-sm font-medium font-primary text-primary border border-primary rounded-full hover:bg-blue-900 hover:text-white transition"
            >
              GET IN TOUCH
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Awards Cards */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 justify-items-center section-container">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="relative w-64 h-82 sm:w-72 sm:h-96 [perspective:1500px] cursor-pointer"
          >
            <div
              className={`absolute inset-0 rounded-2xl shadow-lg transition-transform duration-700 ease-in-out [transform-style:preserve-3d] ${
                flipped[index] ? "[transform:rotateY(180deg)]" : ""
              }`}
            >
              {/* Front Side */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white border border-gray-200 rounded-2xl shadow-md [backface-visibility:hidden] p-6 transition-all hover:shadow-2xl">
                <img
                  src={award.img}
                  alt={award.title}
                  className="h-50 object-contain mb-4"
                />
                <p className="text-gray-900 font-medium font-primary text-lg leading-snug text-center">
                  {award.title}
                </p>
                <button
                  className="mt-3 font-primary text-secondary border border-secondary hover:bg-secondary hover:text-white px-5 py-2 rounded-full text-base font-medium  transition"
                  onClick={() => handleFlip(index)}
                >
                  KNOW MORE
                </button>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 rounded-2xl shadow-md [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden p-5">
                <img
                  src={award.backImg}
                  alt="Award Back"
                  className="w-full h-full object-cover rounded-lg mb-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    setModalImage(award.backImg);
                  }}
                />
                <button
                  className="mt-1 font-primary text-secondary border border-secondary hover:bg-secondary hover:text-white px-5 py-2 rounded-full text-base font-medium transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFlip(index); // flip back
                  }}
                >
                  FLIP FRONT
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalImage(null)}
          >
            <motion.img
              src={modalImage}
              alt="Award Preview"
              className="max-w-[90%] max-h-[80%] rounded-2xl shadow-2xl"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
