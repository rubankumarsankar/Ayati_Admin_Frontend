import React from "react";
import YearSlider from "./About/YearSlider";
import WhatWeDo from "./About/WhatWeDo";
import HowWeDo from "./About/HowWeDo";
import Connection from "./Home/Connection";
import AboutSection from "./About/AboutSection";

import SEO from "../../components/SEO";
import HeroSectionLayout from "./Home/HeroSection";

function AboutUs() {
  return (
    <>
      <SEO
        title="About Ayatiworks - Experts in Digital Marketing & Branding Chennai"
        description="Discover top digital marketing & branding experts in Chennai. Unleash your brand’s potential with innovative strategies tailored for success!"
        canonical="https://www.ayatiworks.com/about-us"
      />
      <HeroSectionLayout />
      <AboutSection />
      <YearSlider />
      <WhatWeDo />
      <HowWeDo />
      <Connection />
    </>
  );
}

export default AboutUs;
