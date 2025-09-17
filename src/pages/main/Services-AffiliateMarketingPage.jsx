import React from "react";
import HeroServicePage from "./services/Affiliate/HeroServiceSection";
import FAQSection from "./services/Affiliate/FAQSection";
import PartnersInClimb from "./Home/PartnersInClimb";
import HeroSectionLayout from "./Home/HeroSection";
import Connection from "./Home/Connection";
import DottedWorldMap from "./Home/MapLocation";
import HomeGridSection from "./Home/HomeGrid";
import OurWideRange from "./services/Affiliate/OurWideRange";

import SEO from "../../components/SEO";

function AffiliateMarketingServicesPage() {
  return (
    <>
      <SEO
        title="Affiliate Marketing Company in Chennai, Performance Marketing
          Solutions - Ayatiworks"
        description="Maximize ROI with expert affiliate marketing in Chennai! Performance-driven solutions to scale your business. Partner with us today!"
        canonical="https://www.ayatiworks.com/digital-marketing-services/affiliate-marketing"
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

export default AffiliateMarketingServicesPage;
