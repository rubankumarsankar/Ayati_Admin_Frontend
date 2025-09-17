import React from "react";
import HeroServicePage from "./services/Programmatic/HeroServiceSection";
import FAQSection from "./services/Programmatic/FAQSection";
import PartnersInClimb from "./Home/PartnersInClimb";
import HeroSectionLayout from "./Home/HeroSection";
import Connection from "./Home/Connection";
import DottedWorldMap from "./Home/MapLocation";
import HomeGridSection from "./Home/HomeGrid";
import OurWideRange from "./services/Programmatic/OurWideRange";

import SEO from "../../components/SEO";

function ProgrammaticServicesPage() {
  return (
    <>
      <SEO
        title="Programmatic Marketing Company in Chennai , Programmatic Advertising
          Services - Ayatiworks"
        description="Revolutionize ads with programmatic marketing in Chennai! Precision targeting for maximum impact. Boost your campaigns today!"
        canonical="https://www.ayatiworks.com/"
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

export default ProgrammaticServicesPage;
