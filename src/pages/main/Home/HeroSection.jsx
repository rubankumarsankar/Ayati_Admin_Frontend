import React from "react";
import videoSrc from "/assets/video.mp4"; 

export default function HeroSection() {
  return (
    <section className="p-4 md:p-8 bg-white flex justify-center items-center min-h-screen">
      <div className="bg-white rounded-3xl shadow-xl p-0 overflow-hidden max-w-7xl w-full">
        {/* ✅ Full-size video inside the card */}
        <video
          className="w-full h-full object-cover shadow-2xl  rounded-3xl"
          autoPlay
          loop
          muted
          playsInline
          src={videoSrc}
        />
      </div>
    </section>
  );
}
