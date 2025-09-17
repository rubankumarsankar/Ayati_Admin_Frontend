import React from "react";
import HeroServicePage from "./services/Web Maintenance/HeroServiceSection";
import FAQSection from "./services/Web Maintenance/FAQSection";
import PartnersInClimb from "./Home/PartnersInClimb";
import HeroSectionLayout from "./Home/HeroSection";
import Connection from "./Home/Connection";
import DottedWorldMap from "./Home/MapLocation";
import HomeGridSection from "./Home/HomeGrid";
import OurWideRange from "./services/Web Maintenance/OurWideRange";

import SEO from "../../components/SEO";

function WebMaintenanceServicesPage() {
  return (
    <>
      <SEO
        title="Ecommerce Web Maintenance company Chennai, Web development Experts -
          Ayatiworks"
        description="Keep your online store running smoothly with expert web maintenance in Chennai! Reliable solutions for growth. Contact us now!"
        canonical="https://www.ayatiworks.com/web-ecommerce/web-maintenance"
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

export default WebMaintenanceServicesPage;
