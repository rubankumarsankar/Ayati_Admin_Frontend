import React from "react";
import HeroServicePage from "./services/Online/HeroServiceSection";
import FAQSection from "./services/Online/FAQSection";
import PartnersInClimb from "./Home/PartnersInClimb";
import HeroSectionLayout from "./Home/HeroSection";
import Connection from "./Home/Connection";
import DottedWorldMap from "./Home/MapLocation";
import HomeGridSection from "./Home/HomeGrid";
import OurWideRange from "./services/Online/OurWideRange";

import SEO from "../../components/SEO";

function OnlineMarketingServicesPage() {
  return (
    <>
      <SEO
        title="Media Outreach Services, Online Reputation Experts Chennai - Ayatiworks"
        description="Strengthen your online reputation with expert media outreach in Chennai! Build trust and visibility. Start now!"
        canonical="https://www.ayatiworks.com/digital-pr/online-reputation-media-outreach"
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

export default OnlineMarketingServicesPage;
