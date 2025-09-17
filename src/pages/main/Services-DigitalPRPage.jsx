import React from "react";
import HeroServicePage from "./services/DigitalPR/HeroServiceSection";
import FAQSection from "./services/DigitalPR/FAQSection";
import PartnersInClimb from "./Home/PartnersInClimb";
import HeroSectionLayout from "./Home/HeroSection";
import Connection from "./Home/Connection";
import DottedWorldMap from "./Home/MapLocation";
import HomeGridSection from "./Home/HomeGrid";
import OurWideRange from "./services/DigitalPR/OurWideRange";
import { Title, Meta } from "react-head";

function DigitalPRServicesPage() {
  return (
    <>
      <>
        <Title>
          Expert Digital PR Services Chennai, Strategic Brand & Media Exposure -
          Ayatiworks
        </Title>
        <Meta
          name="description"
          content="Amplify your brand with strategic digital PR in Chennai! Expert media exposure to boost visibility. Start building today!"
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

export default DigitalPRServicesPage;
