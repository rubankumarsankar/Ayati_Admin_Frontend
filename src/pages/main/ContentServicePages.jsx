import FAQSection from "./Content as a Service/FAQSection";
import Connection from "./Home/Connection";
import HeroSection from "./Home/HeroSection";
import DigitalMarketingSection from "./Content as a Service/DigitalMarketingSection";
import WhyChennai from "./Content as a Service/WhyChennai";
import ServicesSectionGrid from "./Content as a Service/ServicesSectionGrid";
import WhyChooseSection from "./Content as a Service/WhyChooseSection";
import CaseStudies from "./Content as a Service/CaseStudies";
import MarketingServices from "./Content as a Service/MarketingServices";
import WhyCaasSection from "./Content as a Service/WhyCaasSection";
import BenefitsSlider from "./Content as a Service/BenefitsSlider";
import CaaSBenefits from "./Content as a Service/CaaSBenefits";
import CaaSFramework from "./Content as a Service/GrowthFramework";
import WhyPartner from "./Content as a Service/WhyPartner";
import { Title, Meta } from "react-head";

function ContentServicePages() {
  return (
    <>
      <>
        <Title>
          Content as a Service in Chennai, Scalable Content Solutions for
          Businesses - Ayatiworks
        </Title>
        <Meta
          name="description"
          content="Transform your brand with scalable content solutions in Chennai! Engaging content to drive growth and ROI. Discover more now!"
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
      <CaaSBenefits />
      <CaaSFramework />
      <WhyPartner />
      <FAQSection />
      <Connection />
    </>
  );
}

export default ContentServicePages;
