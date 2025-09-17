import React from "react";
import HeroServicePage from "./services/Email/HeroServiceSection";
import FAQSection from "./services/Email/FAQSection";
import PartnersInClimb from "./Home/PartnersInClimb";
import HeroSectionLayout from "./Home/HeroSection";
import Connection from "./Home/Connection";
import DottedWorldMap from "./Home/MapLocation";
import HomeGridSection from "./Home/HomeGrid";
import OurWideRange from "./services/Email/OurWideRange";
import { Title, Meta } from "react-head";

function EmailServicesPage() {
  return (
    <>
      <>
        <Title>
          {" "}
          Email Marketing Company in Chennai, Professional email marketing
          Services - Ayatiworks
        </Title>
        <Meta
          name="description"
          content="Skyrocket conversions with professional email marketing in Chennai! Tailored campaigns to engage and grow your audience. Start now!"
        />
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

export default EmailServicesPage;
