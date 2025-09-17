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

import SEO from "../../components/SEO";

function ContentServicePages() {
  return (
    <>
      <SEO
        title="Content as a Service in Chennai, Scalable Content Solutions for
          Businesses - Ayatiworks"
        description="Transform your brand with scalable content solutions in Chennai! Engaging content to drive growth and ROI. Discover more now!"
        canonical="https://www.ayatiworks.com/content-as-a-service"
      />
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
