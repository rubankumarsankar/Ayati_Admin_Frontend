import React from "react";
import HeroServicePage from "./services/Social Media/HeroServiceSection";
import FAQSection from "./services/Social Media/FAQSection";
import PartnersInClimb from "./Home/PartnersInClimb";
import HeroSectionLayout from "./Home/HeroSection";
import Connection from "./Home/Connection";
import DottedWorldMap from "./Home/MapLocation";
import HomeGridSection from "./Home/HomeGrid";
import OurWideRange from "./services/Social Media/OurWideRange";
import { Title, Meta } from "react-head";

function SocialMediaServicesPage() {
  return (
    <>
     <>
                            <Title>Social media marketing agency, Social media experts chennai - Ayatiworks</Title>
                            <Meta name="description" content="Amplify your brand with expert social media marketing in Chennai! Engage audiences and drive growth with tailored strategies. Connect today!" />
                          </>
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

export default SocialMediaServicesPage;
