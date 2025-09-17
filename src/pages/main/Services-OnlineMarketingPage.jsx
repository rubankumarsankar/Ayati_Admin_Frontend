import React from "react";
import HeroServicePage from "./services/Online/HeroServiceSection";
import FAQSection from "./services/Online/FAQSection";
import PartnersInClimb from "./Home/PartnersInClimb";
import HeroSectionLayout from "./Home/HeroSection";
import Connection from "./Home/Connection";
import DottedWorldMap from "./Home/MapLocation";
import HomeGridSection from "./Home/HomeGrid";
import OurWideRange from "./services/Online/OurWideRange";
import { Title, Meta } from "react-head";

function OnlineMarketingServicesPage() {
  return (
    <>
      <>
        <Title>Media Outreach Services, Online Reputation Experts Chennai - Ayatiworks</Title>
        <Meta name="description" content="Strengthen your online reputation with expert media outreach in Chennai! Build trust and visibility. Start now!" />
      </>
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
