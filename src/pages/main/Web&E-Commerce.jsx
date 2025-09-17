import React from "react";
import HeroSection from "./Home/HeroSection";
import WebAndECommerceSection from "./Web & E-Commerce/WebAndECommerceSection";
import Connection from "./Home/Connection";
import WhyChennai from "./Web & E-Commerce/WhyChennai";
import ServicesSectionGrid from "./Web & E-Commerce/ServicesSectionGrid";
import WhyChooseSection from "./Web & E-Commerce/WhyChooseSection";
import CaseStudies from "./Web & E-Commerce/CaseStudies";
import FAQSection from "./Web & E-Commerce/FAQSection";
import GrowthFramework from "./Web & E-Commerce/GrowthFramework";
import MarketingServices from "./Web & E-Commerce/MarketingServices";
import BenefitsSlider from "./Web & E-Commerce/BenefitsSlider";
import WhyPartner from "./Web & E-Commerce/WhyPartner";

import SEO from "../../components/SEO";

function WebAndECommerce() {
  return (
    <>
      <SEO
        title="Web Ecommerce Services in Chennai, Ecommerce development experts -
          Ayatiworks"
        description="Launch your online store with expert ecommerce services in Chennai! Seamless development for maximum sales. Get started today!"
        canonical="https://www.ayatiworks.com/web-ecommerce"
      />
      <HeroSection />
      <WebAndECommerceSection />
      <WhyChennai />
      <BenefitsSlider />
      <MarketingServices />
      <ServicesSectionGrid />
      <WhyChooseSection />
      <CaseStudies />
      <GrowthFramework />
      <WhyPartner />
      <FAQSection />
      <Connection />
    </>
  );
}

export default WebAndECommerce;
