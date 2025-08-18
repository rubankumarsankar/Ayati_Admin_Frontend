import React from "react";
import HeroSection from "./Home/HeroSection";
import AboutImg from "./About/AboutImg";
import YearSlider from "./About/YearSlider";
import WhatWeDo from "./About/WhatWeDo";
import HowWeDo from "./About/HowWeDo";
import Connection from "./Teams/Connection";

function AboutUs() {
  return (
    <>
      <HeroSection />
      <AboutImg />
      <YearSlider />
      <WhatWeDo />
      <HowWeDo />
      <Connection />
    </>
  );
}

export default AboutUs;
