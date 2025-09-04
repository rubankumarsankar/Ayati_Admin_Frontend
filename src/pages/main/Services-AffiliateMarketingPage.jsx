import React from "react";
import HeroServicePage from "./services/Affiliate/HeroServiceSection";
import FAQSection from "./services/Affiliate/FAQSection";
import PartnersInClimb from "./Home/PartnersInClimb";
import HeroSectionLayout from "./Home/HeroSection";
import Connection from "./Home/Connection";
import DottedWorldMap from "./Home/MapLocation";
import HomeGridSection from "./Home/HomeGrid";
import OurWideRange from "./services/Affiliate/OurWideRange";

function AffiliateMarketingServicesPage() {
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

export default AffiliateMarketingServicesPage;
