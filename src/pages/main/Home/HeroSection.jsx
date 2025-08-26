import React from "react";
import videoSrc from "/assets/Ayati.mp4";

export default function HeroSection() {
  return (
    <section className="bg-white flex justify-center items-center min-h-[60vh] sm:min-h-[70vh] md:min-h-auto px-2 sm:px-2 md:px-4">
      <div className="w-full max-w-7xl mx-auto">
        <div className="rounded-2xl sm:rounded-3xl md:rounded-[40px] overflow-hidden shadow-lg">
          {/* ✅ Fully Responsive Rounded Video */}
          <video
            className="w-full h-auto object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
