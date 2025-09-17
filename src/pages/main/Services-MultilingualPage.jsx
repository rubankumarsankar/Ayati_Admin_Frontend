import React from "react";
import HeroServicePage from "./services/Multilingual/HeroServiceSection";
import FAQSection from "./services/Multilingual/FAQSection";
import PartnersInClimb from "./Home/PartnersInClimb";
import HeroSectionLayout from "./Home/HeroSection";
import Connection from "./Home/Connection";
import DottedWorldMap from "./Home/MapLocation";
import HomeGridSection from "./Home/HomeGrid";
import OurWideRange from "./services/Multilingual/OurWideRange";

import SEO from "../../components/SEO";

function MultilingualServicesPage() {
  return (
    <>
      <SEO
        title="Multilingual Marketing Services in Chennai, Native Language Marketing
          Experts - Ayatiworks"
        description="Reach global audiences with multilingual marketing in Chennai! Native language strategies to grow your brand. Connect today!"
        canonical="https://www.ayatiworks.com/content-as-a-service/multilingual-marketing"
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

export default MultilingualServicesPage;
