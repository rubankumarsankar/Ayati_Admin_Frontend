import React from "react";
import HeroServicePage from "./services/DigitalPR/HeroServiceSection";
import FAQSection from "./services/DigitalPR/FAQSection";
import PartnersInClimb from "./Home/PartnersInClimb";
import HeroSectionLayout from "./Home/HeroSection";
import Connection from "./Home/Connection";
import DottedWorldMap from "./Home/MapLocation";
import HomeGridSection from "./Home/HomeGrid";
import OurWideRange from "./services/DigitalPR/OurWideRange";

import SEO from "../../components/SEO";

function DigitalPRServicesPage() {
  return (
    <>
      <SEO
        title="Expert Digital PR Services Chennai, Strategic Brand & Media Exposure -
          Ayatiworks"
        description="Amplify your brand with strategic digital PR in Chennai! Expert media exposure to boost visibility. Start building today!"
        canonical="https://www.ayatiworks.com/digital-pr/digital-pr-services"
      />
      <HeroSectionLayout />

      <HeroServicePage />
      <HomeGridSection />
      <FAQSection />
      <OurWideRange />
      <PartnersInClimb />
      <DottedWorldMap />
      <Connection />
    </>
  );
}

export default DigitalPRServicesPage;
