import React from "react";
import HeroSection from "./Home/HeroSection";
import DigitalMarketingSection from "./Digital PR/DigitalPRSection";
import Connection from "./Home/Connection";
import WhyChennai from "./Digital PR/WhyChennai";
import ServicesSectionGrid from "./Digital PR/ServicesSectionGrid";
import WhyChooseSection from "./Digital PR/WhyChooseSection";
import CaseStudies from "./Digital PR/CaseStudies";
import FAQSection from "./Digital PR/FAQSection";
import GrowthFramework from "./Digital PR/GrowthFramework";
import MarketingServices from "./Digital PR/MarketingServices";
import BenefitsSlider from "./Digital PR/BenefitsSlider";
import WhyPartner from "./Digital PR/WhyPartner";
import { Title, Meta } from "react-head";

function DigitalPRPage() {
  return (
    <>
      <>
        <Title>
          Digital PR experts in Chennai, Reputation & Media Outreach -
          Ayatiworks
        </Title>
        <Meta
          name="description"
          content="Elevate your brand with expert digital PR in Chennai! Boost reputation and media outreach for maximum impact. Get started now!"
        />
      </>
      <HeroSection />
      <DigitalMarketingSection />
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

export default DigitalPRPage;
