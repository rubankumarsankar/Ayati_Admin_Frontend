import React from "react";
import HeroSection from "./Home/HeroSection";
import DigitalMarketingSection from "./Digital Marketing/DigitalMarketingSection";
import Connection from "./Home/Connection";
import WhyChennai from "./Digital Marketing/WhyChennai";
import ServicesSectionGrid from "./Digital Marketing/ServicesSectionGrid";
import WhyChooseSection from "./Digital Marketing/WhyChooseSection";
import CaseStudies from "./Digital Marketing/CaseStudies";
import FAQSection from "./Digital Marketing/FAQSection";
import GrowthFramework from "./Digital Marketing/GrowthFramework";
import MarketingServices from "./Digital Marketing/MarketingServices";
import BenefitsSlider from "./Digital Marketing/BenefitsSlider";
import WhyPartner from "./Digital Marketing/WhyPartner";
import { Title, Meta } from "react-head";

function DigitalMarketingPage() {
  return (
    <>
      <>
        <Title>
          Digital Marketing Experts Chennai, Digital marketing company with
          brand growth - Ayatiworks
        </Title>
        <Meta
          name="description"
          content="Boost your brand with expert digital marketing in Chennai! Proven strategies to drive growth and maximize ROI. Start your journey today!"
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

export default DigitalMarketingPage;
