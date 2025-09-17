import React from "react";
import HeroServicePage from "./services/E-commerce/HeroServiceSection";
import FAQSection from "./services/E-commerce/FAQSection";
import PartnersInClimb from "./Home/PartnersInClimb";
import HeroSectionLayout from "./Home/HeroSection";
import Connection from "./Home/Connection";
import DottedWorldMap from "./Home/MapLocation";
import HomeGridSection from "./Home/HomeGrid";
import OurWideRange from "./services/E-commerce/OurWideRange";

import SEO from "../../components/SEO";

function ECommerceServicesPage() {
  return (
    <>
      <SEO
        title="Ecommerce Website Solutions in Chennai, Ecommerce Website Design &
          Development - Ayatiworks"
        description="Grow your online business with expert ecommerce solutions in Chennai! Stunning design and development for success. Start now!"
        canonical="https://www.ayatiworks.com/web-ecommerce/ecommerce-solutions"
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

export default ECommerceServicesPage;
