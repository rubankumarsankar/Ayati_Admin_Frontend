import React from "react";
import videoSrc from "/assets/video.mp4";

export default function HeroSection() {
  return (
    <section className="p-2 sm:p-4 md:p-8 bg-white flex justify-center items-center min-h-[60vh] sm:min-h-[70vh] md:min-h-screen">
      <div className="bg-white rounded-none sm:rounded-2xl md:rounded-3xl shadow-none sm:shadow-lg md:shadow-xl overflow-hidden max-w-7xl w-full">
        {/* ✅ Responsive Video */}
        <div className="relative w-full aspect-[4/3] sm:aspect-video md:aspect-[16/9] lg:aspect-[21/9]">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            src={videoSrc}
          />
        </div>
      </div>
    </section>
  );
}
