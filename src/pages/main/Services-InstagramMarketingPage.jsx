import React from "react";
import HeroServicePage from "./services/Instagram/HeroServiceSection";
import FAQSection from "./services/Instagram/FAQSection";
import PartnersInClimb from "./Home/PartnersInClimb";
import HeroSectionLayout from "./Home/HeroSection";
import Connection from "./Home/Connection";
import DottedWorldMap from "./Home/MapLocation";
import HomeGridSection from "./Home/HomeGrid";
import OurWideRange from "./services/Instagram/OurWideRange";

import SEO from "../../components/SEO";

function InstagramServicesPage() {
  return (
    <>
      <SEO
        title="Unlock digital marketing insights with our expert blog! Tips and
          trends to boost your brand’s growth. Dive in now!"
        description="Grow your brand on Instagram with expert marketing in Chennai! Creative strategies to boost engagement and sales. Get started today!"
        canonical="https://www.ayatiworks.com/digital-marketing-services/instagram-marketing"
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

export default InstagramServicesPage;
