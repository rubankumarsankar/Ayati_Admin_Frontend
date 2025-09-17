import React from "react";
import HeroServicePage from "./services/Affiliate/HeroServiceSection";
import FAQSection from "./services/Affiliate/FAQSection";
import PartnersInClimb from "./Home/PartnersInClimb";
import HeroSectionLayout from "./Home/HeroSection";
import Connection from "./Home/Connection";
import DottedWorldMap from "./Home/MapLocation";
import HomeGridSection from "./Home/HomeGrid";
import OurWideRange from "./services/Affiliate/OurWideRange";
import { Title, Meta } from "react-head";

function AffiliateMarketingServicesPage() {
  return (
    <>
      <>
        <Title>
          Affiliate Marketing Company in Chennai, Performance Marketing
          Solutions - Ayatiworks
        </Title>
        <Meta
          name="description"
          content="Maximize ROI with expert affiliate marketing in Chennai! Performance-driven solutions to scale your business. Partner with us today!"
        />
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

export default AffiliateMarketingServicesPage;
