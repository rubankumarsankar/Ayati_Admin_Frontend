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

function ContentServicePages() {
  return (
    <>
      <HeroSection />
      <DigitalMarketingSection />
      <WhyChennai />
      <MarketingServices />
      <ServicesSectionGrid />
      <WhyChooseSection />
      <CaseStudies />
      <FAQSection />
      <Connection />
    </>
  );
}

export default ContentServicePages;
