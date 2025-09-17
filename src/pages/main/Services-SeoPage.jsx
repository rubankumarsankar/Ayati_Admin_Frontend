import React from "react";
import HeroServicePage from "./services/Seo Services/HeroServiceSection";
import FAQSection from "./services/Seo Services/FAQSection";
import PartnersInClimb from "./Home/PartnersInClimb";
import HeroSectionLayout from "./Home/HeroSection";
import Connection from "./Home/Connection";
import DottedWorldMap from "./Home/MapLocation";
import HomeGridSection from "./Home/HomeGrid";
import OurWideRange from "./services/Seo Services/OurWideRange";

import SEO from "../../components/SEO";

function SeoServicesPage() {
  return (
    <>
      <SEO
        title="Leading SEO Company in Chennai, Affordable SEO Services & Expert
          Solutions - Ayatiworks"
        description="Dominate search rankings with affordable SEO services in Chennai! Expert solutions to boost visibility and drive traffic. Get started now!"
        canonical="https://www.ayatiworks.com/digital-marketing-services/seo"
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

export default SeoServicesPage;
