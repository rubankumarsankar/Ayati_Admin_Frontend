import React from "react";
import HeroServicePage from "./services/Social Media/HeroServiceSection";
import FAQSection from "./services/Social Media/FAQSection";
import PartnersInClimb from "./Home/PartnersInClimb";
import HeroSectionLayout from "./Home/HeroSection";
import Connection from "./Home/Connection";
import DottedWorldMap from "./Home/MapLocation";
import HomeGridSection from "./Home/HomeGrid";
import OurWideRange from "./services/Social Media/OurWideRange";

import SEO from "../../components/SEO";

function SocialMediaServicesPage() {
  return (
    <>
      <SEO
        title="Social media marketing agency, Social media experts chennai -
          Ayatiworks"
        description="Amplify your brand with expert social media marketing in Chennai! Engage audiences and drive growth with tailored strategies. Connect today!"
        canonical="https://www.ayatiworks.com/digital-marketing-services/social-media-marketing"
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

export default SocialMediaServicesPage;
