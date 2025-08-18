import React from "react";
import doodleIcon from "/assets/doodle.png"; // replace with your doodle path

export default function WhatWeDo() {
  const services = [
    {
      title: "Consulting for a Click-Worthy Connection",
      desc: "When everything else is on point, great user design doesn’t just jazz up how users see your company; it also rolls out the red carpet for consumer adoption!",
    },
    {
      title: "Creative Marketing Communications: Big on RoI and Even Bigger on Ideas",
      desc: "We craft creative marketing campaigns that not only grab attention but also deliver measurable results for your business.",
    },
    {
      title: "Digital Production and Support: Quality that Goes Global",
      desc: "From strategy to production, we provide end-to-end digital solutions that scale globally with precision and quality.",
    },
  ];

  return (
    <section className="bg-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading Row */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div>
              <h2 className="text-blue-900 text-3xl font-extrabold">What we do</h2>
              <span className="block w-20 h-1 bg-sky-500 mt-1"></span>
            </div>
            <img src={doodleIcon} alt="Doodle" className="w-8 h-8" />
          </div>

          <p className="text-gray-700 max-w-2xl text-sm md:text-base leading-relaxed">
            At AyatiWorks, we’re all about unlocking a digital gateway for our
            clients! Whether it’s sparking consumer conversations through brand
            marketing, launching online shopping sprees, building cool platforms
            for entertainment and finance, managing enterprise networks, or
            supercharging performance—we’ve got it covered! Our secret sauce?
            Practical, trustworthy, and dependable solutions that make your
            digital dreams a reality!
          </p>
        </div>

        {/* Flip Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative h-56 [perspective:1000px] cursor-pointer"
            >
              <div className="absolute inset-0 transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                {/* Front Side */}
                <div className="absolute inset-0 flex items-center justify-center border border-blue-700 text-blue-800 font-semibold p-4 rounded-md [backface-visibility:hidden]">
                  {service.title}
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 flex items-center justify-center bg-blue-700 text-white p-4 rounded-md [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  {service.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
