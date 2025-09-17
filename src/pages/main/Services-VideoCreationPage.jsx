import React from "react";
import HeroServicePage from "./services/VideoCreation/HeroServiceSection";
import FAQSection from "./services/VideoCreation/FAQSection";
import PartnersInClimb from "./Home/PartnersInClimb";
import HeroSectionLayout from "./Home/HeroSection";
import Connection from "./Home/Connection";
import DottedWorldMap from "./Home/MapLocation";
import HomeGridSection from "./Home/HomeGrid";
import OurWideRange from "./services/VideoCreation/OurWideRange";

import SEO from "../../components/SEO";

function VideoCreationServicesPage() {
  return (
    <>
      <SEO
        title="Video Creation Services in Chennai, Professional Video Content
          Services in Chennai - Ayatiworks"
        description="Engage audiences with professional video creation in Chennai! Stunning visuals to boost your brand’s story. Create now!"
        canonical="https://www.ayatiworks.com/content-as-a-service/video-creation"
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

export default VideoCreationServicesPage;
