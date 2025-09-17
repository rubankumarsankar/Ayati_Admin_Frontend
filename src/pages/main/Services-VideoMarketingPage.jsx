import React from "react";
import HeroServicePage from "./services/Video/HeroServiceSection";
import FAQSection from "./services/Video/FAQSection";
import PartnersInClimb from "./Home/PartnersInClimb";
import HeroSectionLayout from "./Home/HeroSection";
import Connection from "./Home/Connection";
import DottedWorldMap from "./Home/MapLocation";
import HomeGridSection from "./Home/HomeGrid";
import OurWideRange from "./services/Video/OurWideRange";

import SEO from "../../components/SEO";

function VideoMarketingServicesPage() {
  return (
    <>
      <SEO
        title="Video Marketing Company in Chennai, YouTube Advertising and Video
          Promotion company - Ayatiworks"
        description="Captivate audiences with expert video marketing in Chennai! Boost your brand with YouTube ads and promotions. Start creating today!"
        canonical="https://www.ayatiworks.com/digital-marketing-services/video-marketing"
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

export default VideoMarketingServicesPage;
