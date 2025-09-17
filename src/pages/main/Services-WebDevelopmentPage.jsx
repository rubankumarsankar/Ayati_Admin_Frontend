import React from "react";
import HeroServicePage from "./services/Web Development/HeroServiceSection";
import FAQSection from "./services/Web Development/FAQSection";
import PartnersInClimb from "./Home/PartnersInClimb";
import HeroSectionLayout from "./Home/HeroSection";
import Connection from "./Home/Connection";
import DottedWorldMap from "./Home/MapLocation";
import HomeGridSection from "./Home/HomeGrid";
import OurWideRange from "./services/Web Development/OurWideRange";

import SEO from "../../components/SEO";

function WebDevelopmentServicesPage() {
  return (
    <>
      <SEO
        title="Ecommerce Web Development Chennai, Web development company -
          Ayatiworks"
        description="Build a powerful online store with expert web development in Chennai! Tailored ecommerce solutions for growth. Start today!"
        canonical="https://www.ayatiworks.com/web-ecommerce/web-development"
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

export default WebDevelopmentServicesPage;
