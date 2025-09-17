import React from "react";
import HeroServicePage from "./services/VideoCreation/HeroServiceSection";
import FAQSection from "./services/VideoCreation/FAQSection";
import PartnersInClimb from "./Home/PartnersInClimb";
import HeroSectionLayout from "./Home/HeroSection";
import Connection from "./Home/Connection";
import DottedWorldMap from "./Home/MapLocation";
import HomeGridSection from "./Home/HomeGrid";
import OurWideRange from "./services/VideoCreation/OurWideRange";
import { Title, Meta } from "react-head";

function VideoCreationServicesPage() {
  return (
    <>
      <>
        <Title>
          Video Creation Services in Chennai, Professional Video Content
          Services in Chennai - Ayatiworks
        </Title>
        <Meta
          name="description"
          content="Engage audiences with professional video creation in Chennai! Stunning visuals to boost your brand’s story. Create now!"
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

export default VideoCreationServicesPage;
