import React from "react";
import HeroServicePage from "./services/UX UI Design/HeroServiceSection";
import FAQSection from "./services/UX UI Design/FAQSection";
import PartnersInClimb from "./Home/PartnersInClimb";
import HeroSectionLayout from "./Home/HeroSection";
import Connection from "./Home/Connection";
import DottedWorldMap from "./Home/MapLocation";
import HomeGridSection from "./Home/HomeGrid";
import OurWideRange from "./services/UX UI Design/OurWideRange";
import { Title, Meta } from "react-head";

function UXUIDesignServicesPage() {
  return (
    <>
      <>
        <Title>
          Ecommerce UX-UI Design Services Chennai, Web UX - UI development
          company Chennai - Ayatiworks
        </Title>
        <Meta
          name="description"
          content="Boost sales with stunning UX-UI design in Chennai! Expert ecommerce interfaces for seamless user experiences. Design now!"
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

export default UXUIDesignServicesPage;
