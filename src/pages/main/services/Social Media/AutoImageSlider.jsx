import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/assets/service/slider-img-1.png",
  "/assets/service/slider-img-2.png",
  "/assets/service/slider-img-3.png",
];

export default function AutoImageSlider() {
  const [index, setIndex] = useState(0);

  // Auto slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-container">
      <div className="relative w-full max-w-6xl mx-auto h-72 sm:h-96 overflow-hidden shadow-lg">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt={`slide-${index}`}
            className="absolute top-0 left-0 w-full h-full object-cover"
            initial={{ x: "100%" }} // enter from right
            animate={{ x: "0%" }} // move to center
            exit={{ x: "-100%" }} // exit to left
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>
    </section>
  );
}
