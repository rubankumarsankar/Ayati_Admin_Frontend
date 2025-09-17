import React from "react";
import HeroServicePage from "./services/Web Development/HeroServiceSection";
import FAQSection from "./services/Web Development/FAQSection";
import PartnersInClimb from "./Home/PartnersInClimb";
import HeroSectionLayout from "./Home/HeroSection";
import Connection from "./Home/Connection";
import DottedWorldMap from "./Home/MapLocation";
import HomeGridSection from "./Home/HomeGrid";
import OurWideRange from "./services/Web Development/OurWideRange";
import { Title, Meta } from "react-head";

function WebDevelopmentServicesPage() {
  return (
    <>
      <>
        <Title>
          Ecommerce Web Development Chennai, Web development company -
          Ayatiworks
        </Title>
        <Meta
          name="description"
          content="Build a powerful online store with expert web development in Chennai! Tailored ecommerce solutions for growth. Start today!"
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

export default WebDevelopmentServicesPage;
