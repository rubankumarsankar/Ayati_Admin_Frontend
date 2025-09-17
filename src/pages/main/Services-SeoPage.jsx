import React from "react";
import HeroServicePage from "./services/Seo Services/HeroServiceSection";
import FAQSection from "./services/Seo Services/FAQSection";
import PartnersInClimb from "./Home/PartnersInClimb";
import HeroSectionLayout from "./Home/HeroSection";
import Connection from "./Home/Connection";
import DottedWorldMap from "./Home/MapLocation";
import HomeGridSection from "./Home/HomeGrid";
import OurWideRange from "./services/Seo Services/OurWideRange";
import { Title, Meta } from "react-head";

function SeoServicesPage() {
  return (
    <>
      <>
        <Title>
          Leading SEO Company in Chennai, Affordable SEO Services & Expert
          Solutions - Ayatiworks
        </Title>
        <Meta
          name="description"
          content="Dominate search rankings with affordable SEO services in Chennai! Expert solutions to boost visibility and drive traffic. Get started now!"
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

export default SeoServicesPage;
