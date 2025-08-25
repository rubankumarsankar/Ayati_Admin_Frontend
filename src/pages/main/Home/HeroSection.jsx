import React from "react";
import { motion } from "framer-motion";
import videoSrc from "/assets/ayati-banner.mp4";

export default function HeroSection() {
  return (
    <section className="p-2 sm:p-4 md:p-4 bg-white flex justify-center items-center min-h-[60vh] sm:min-h-[70vh] md:min-h-screen">
      <div className="bg-white rounded-none sm:rounded-2xl md:rounded-3xl shadow-none sm:shadow-lg md:shadow-xl overflow-hidden max-w-7xl w-full">
        
        {/* ✅ Animated Video Wrapper */}
        <motion.div
          className="relative w-full h-[40vh] sm:h-[60vh] md:h-[80vh] lg:h-[95vh] xl:h-[100vh] 2xl:h-[100vh] overflow-hidden"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* ✅ Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            src={videoSrc}
          />
        </motion.div>
      </div>
    </section>
  );
}
