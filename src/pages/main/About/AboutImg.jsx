import React from "react";
import tvImage from "/assets/tv.png"; // replace with your TV image path
import doodleIcon from "/assets/doodle.png"; // replace with your doodle icon path

export default function AboutImg() {
  return (
    <section className="bg-white py-12 px-6 md:px-16">
            <div className="flex items-center space-x-4">
      {/* Left side - ABOUT US with underline */}
      <div className="relative">
        <h2 className="text-blue-900 text-3xl font-extrabold">ABOUT US</h2>
       <span className="block h-1 w-24 bg-blue-700 mt-1 mx-auto md:mx-0"></span>
      </div>

      {/* Doodle Icon */}
      <img src={doodleIcon} alt="Doodle Icon" className="w-8 h-8" />

      {/* Tagline */}
      <h3 className="text-sky-600 text-xl md:text-2xl font-bold">
        Innovating with A Dash of Madness Since 2017!
      </h3>
    </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left side - TV Image */}
        <div className="flex justify-center">
          <img
            src={tvImage}
            alt="The Year of Utsah"
            className="max-w-sm w-full"
          />
        </div>

        {/* Right side - Text */}
        <div>
          {/* Heading */}
         

          {/* Description */}
          <p className="text-gray-700 leading-relaxed mb-6">
            This year at Ayatworks, we’re embracing Utsah—the enthusiasm and
            energy that fuel everything we do. For us, Utsah means approaching
            every challenge with positivity, bringing fresh ideas to the table,
            and creating meaningful work that makes a difference. It’s about
            going the extra mile for our clients, supporting each other as a
            team, and finding joy in every milestone, big or small. As we step
            into 2025, Utsah reminds us to stay passionate, stay inspired, and
            stay connected. Here’s to a year of growth, creativity, and
            purpose—powered by Utsah! Let’s make it unforgettable!
          </p>

          {/* Highlight Text */}
          <p className="text-sky-600 font-semibold text-lg">
            Here’s to a year of growth, creativity, and purpose—powered by
            Utsah! Let’s make it unforgettable!
          </p>
        </div>
      </div>

       <div className="border-b border-black/70 shadow-xl my-8"></div>

    </section>
  );
}
