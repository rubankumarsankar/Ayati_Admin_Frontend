import React from "react";
import HeroSection from "./Home/HeroSection";
import YearSlider from "./About/YearSlider";
import WhatWeDo from "./About/WhatWeDo";
import HowWeDo from "./About/HowWeDo";
import Connection from "./Home/Connection";
import AboutSection from "./About/AboutSection";
import { Title, Meta } from "react-head";

function AboutUs() {
  return (
    <>
      <Title>About Us | Ayatiworks</Title>
      <Meta
        name="description"
        content="Learn about Ayatiworks, our mission, vision, and expertise in digital marketing and video solutions."
      />
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
