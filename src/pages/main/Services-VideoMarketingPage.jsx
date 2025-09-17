import React from "react";
import HeroServicePage from "./services/Video/HeroServiceSection";
import FAQSection from "./services/Video/FAQSection";
import PartnersInClimb from "./Home/PartnersInClimb";
import HeroSectionLayout from "./Home/HeroSection";
import Connection from "./Home/Connection";
import DottedWorldMap from "./Home/MapLocation";
import HomeGridSection from "./Home/HomeGrid";
import OurWideRange from "./services/Video/OurWideRange";
import { Title, Meta } from "react-head";

function VideoMarketingServicesPage() {
  return (
    <>
      <>
        <Title>
          Video Marketing Company in Chennai, YouTube Advertising and Video
          Promotion company - Ayatiworks
        </Title>
        <Meta
          name="description"
          content="Captivate audiences with expert video marketing in Chennai! Boost your brand with YouTube ads and promotions. Start creating today!"
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

export default VideoMarketingServicesPage;
