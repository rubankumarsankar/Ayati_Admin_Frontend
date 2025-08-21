import React from "react";
import HeroSection from "./Home/HeroSection";
import YearSlider from "./About/YearSlider";
import WhatWeDo from "./About/WhatWeDo";
import HowWeDo from "./About/HowWeDo";
import Connection from "./Home/Connection";
import AboutSection from "./About/AboutSection";

function AboutUs() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <YearSlider />
      <WhatWeDo />
      <HowWeDo />
      <Connection />
    </>
  );
}

export default AboutUs;
