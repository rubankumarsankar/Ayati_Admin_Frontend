import React from "react";
import HeroServicePage from "./services/Shopify/HeroServiceSection";
import FAQSection from "./services/Shopify/FAQSection";
import PartnersInClimb from "./Home/PartnersInClimb";
import HeroSectionLayout from "./Home/HeroSection";
import Connection from "./Home/Connection";
import DottedWorldMap from "./Home/MapLocation";
import HomeGridSection from "./Home/HomeGrid";
import OurWideRange from "./services/Shopify/OurWideRange";
import { Title, Meta } from "react-head";

function ShopifyServicesPage() {
  return (
    <>
      <>
        <Title>
          Shopify development company chennai, Shopify experts in Chennai -
          Ayatiworks
        </Title>
        <Meta
          name="description"
          content="Create a thriving online store with expert Shopify development in Chennai! Tailored solutions to boost sales. Start now!"
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

export default ShopifyServicesPage;
