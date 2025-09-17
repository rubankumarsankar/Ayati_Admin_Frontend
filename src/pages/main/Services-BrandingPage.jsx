import React from "react";
import HeroServicePage from "./services/Branding/HeroServiceSection";
import FAQSection from "./services/Branding/FAQSection";
import PartnersInClimb from "./Home/PartnersInClimb";
import HeroSectionLayout from "./Home/HeroSection";
import Connection from "./Home/Connection";
import DottedWorldMap from "./Home/MapLocation";
import HomeGridSection from "./Home/HomeGrid";
import OurWideRange from "./services/Branding/OurWideRange";

import SEO from "../../components/SEO";

function BrandingServicesPage() {
  return (
    <>
     
      <SEO
        title="Creative Branding Services in Chennai, Expert Brand Growth Solutions"
        description="Build a powerful brand with creative branding services in Chennai! Expert solutions to elevate your identity and growth. Start now!"
        canonical="https://www.ayatiworks.com/digital-pr/branding-services"
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

export default BrandingServicesPage;
