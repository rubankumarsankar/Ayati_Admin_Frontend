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
      <Title>
        About Ayatiworks - Experts in Digital Marketing & Branding Chennai
      </Title>
      <Meta
        name="description"
        content="Discover top digital marketing & branding experts in Chennai. Unleash your brand’s potential with innovative strategies tailored for success!"
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
