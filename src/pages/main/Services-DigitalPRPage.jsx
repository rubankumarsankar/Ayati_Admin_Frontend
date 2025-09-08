import React from "react";
import HeroServicePage from "./services/DigitalPR/HeroServiceSection";
import FAQSection from "./services/DigitalPR/FAQSection";
import PartnersInClimb from "./Home/PartnersInClimb";
import HeroSectionLayout from "./Home/HeroSection";
import Connection from "./Home/Connection";
import DottedWorldMap from "./Home/MapLocation";
import HomeGridSection from "./Home/HomeGrid";
import OurWideRange from "./services/DigitalPR/OurWideRange";

function DigitalPRServicesPage() {
  return (
    <>
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
