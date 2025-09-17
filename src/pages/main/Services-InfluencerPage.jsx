import React from "react";
import HeroServicePage from "./services/Influencer/HeroServiceSection";
import FAQSection from "./services/Influencer/FAQSection";
import PartnersInClimb from "./Home/PartnersInClimb";
import HeroSectionLayout from "./Home/HeroSection";
import Connection from "./Home/Connection";
import DottedWorldMap from "./Home/MapLocation";
import HomeGridSection from "./Home/HomeGrid";
import OurWideRange from "./services/Influencer/OurWideRange";
import { Title, Meta } from "react-head";

function InfluencerServicesPage() {
  return (
    <>
      <>
        <Title>
          Influencer Marketing Services in Chennai, Grow with Influencers -
          Ayatiworks{" "}
        </Title>
        <Meta
          name="description"
          content="Skyrocket your brand with influencer marketing in Chennai! Connect with influencers to drive growth. Partner with us now!"
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

export default InfluencerServicesPage;
