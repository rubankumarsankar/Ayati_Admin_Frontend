import React from "react";
import HeroSection from "./Home/HeroSection";
import DigitalMarketingSection from "./Digital Marketing/DigitalMarketingSection";
import Connection from "./Home/Connection";
import WhyChennai from "./Digital Marketing/WhyChennai";
import ServicesSection from "./Digital Marketing/ServicesSection";
import ServicesSectionGrid from "./Digital Marketing/ServicesSectionGrid";
import WhyChooseSection from "./Digital Marketing/WhyChooseSection";
import CaseStudies from "./Digital Marketing/CaseStudies";
import FAQSection from "./Digital Marketing/FAQSection";
import GrowthFramework from "./Digital Marketing/GrowthFramework";
import WaveTimeline from "./Digital Marketing/GrowthFramework";
import MarketingServices from "./Digital Marketing/MarketingServices";

function DigitalMarketingPage() {
  return (
    <>
      <HeroSection />
      <DigitalMarketingSection />
      <WhyChennai />
      <MarketingServices />
      {/* <ServicesSection /> */}
      <ServicesSectionGrid />
      <WhyChooseSection />
      <CaseStudies />

      {/* <GrowthFramework /> */}
      {/* <WaveTimeline /> */}
      <FAQSection />
      <Connection />
    </>
  );
}

export default DigitalMarketingPage;
