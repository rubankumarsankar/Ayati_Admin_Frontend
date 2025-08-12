import React from "react";
import TVImage from "/assets/tv-utsah.png";
import FadeInWhenVisible from "../../../components/FadeInWhenVisible";

export default function PromoHero() {
  return (
    <section className="w-full bg-white py-6 px-4 md:px-10 lg:px-20 flex flex-col items-center font-primary">
      {/* ✅ Top Banner */}
      <FadeInWhenVisible y={-30}>
        <div className="bg-primary text-white rounded-xl px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4 w-full max-w-7xl">
          <div className="text-center md:text-left text-xl md:text-2xl lg:text-3xl leading-snug">
            <p>
              Learn what agencies do daily—run ads, scale brands, <br />
              and get certified in just
              <span className="text-secondary bg-white font-bold ml-2 px-2 py-0.5 rounded-md">
                30 days!
              </span>
            </p>
          </div>
          <a
            href="#"
            className="bg-secondary/80 hover:bg-secondary text-white font-bold px-5 py-2 rounded-full text-sm sm:text-base hover:opacity-90 transition"
          >
            CLICK HERE TO KNOW MORE
          </a>
        </div>
      </FadeInWhenVisible>

      {/* ✅ Sub-header */}
      <FadeInWhenVisible delay={0.2}>
        <div className="w-full max-w-6xl mt-10 text-center flex flex-col sm:flex-row justify-between items-center gap-3">
          <h2 className="text-primary font-bold text-2xl sm:text-3xl lg:text-4xl">
            Behind the Clicks
          </h2>
          <p className="text-secondary text-sm sm:text-base font-secondary">
            Innovating with A Dash of Madness Since 2017!
          </p>
        </div>
      </FadeInWhenVisible>

      {/* ✅ TV Image */}
      <FadeInWhenVisible delay={0.4} y={10}>
        <div className="mt-10 max-w-xl w-full flex justify-center">
          <img
            src={TVImage}
            alt="The Year of Utsah"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </FadeInWhenVisible>

      {/* ✅ Description */}
      <FadeInWhenVisible delay={0.6}>
        <div className="w-full max-w-6xl mt-10 text-center sm:text-left px-2">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-secondary">
            This year at <span className="font-bold text-primary">Ayatiworks</span>, we’re embracing
            <span className="font-bold text-secondary"> Utsah</span>—the enthusiasm and energy that
            fuel everything we do...
          </p>

          <h3 className="text-lg sm:text-xl text-primary text-center font-bold mt-6">
            Here’s to a year of growth, creativity, and purpose—powered by Utsah!
            Let’s make it unforgettable!
          </h3>

          <div className="border-b border-black/70 shadow-md my-8"></div>
        </div>
      </FadeInWhenVisible>
    </section>
  );
}
