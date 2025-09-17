import React from "react";
import HeroServicePage from "./services/E-commerce/HeroServiceSection";
import FAQSection from "./services/E-commerce/FAQSection";
import PartnersInClimb from "./Home/PartnersInClimb";
import HeroSectionLayout from "./Home/HeroSection";
import Connection from "./Home/Connection";
import DottedWorldMap from "./Home/MapLocation";
import HomeGridSection from "./Home/HomeGrid";
import OurWideRange from "./services/E-commerce/OurWideRange";
import { Title, Meta } from "react-head";

function ECommerceServicesPage() {
  return (
    <>
      <>
        <Title>
          Ecommerce Website Solutions in Chennai, Ecommerce Website Design &
          Development - Ayatiworks
        </Title>
        <Meta
          name="description"
          content="Grow your online business with expert ecommerce solutions in Chennai! Stunning design and development for success. Start now!"
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

export default ECommerceServicesPage;
