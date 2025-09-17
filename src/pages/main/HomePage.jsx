import React from "react";
import HeroSection from "./Home/HeroSection";
import PromoHero from "./Home/PromoHero";
import WhatWeDo from "./Home/WhatWeDo";
import WhatAyati from "./Home/WhatAyati";
import PartnersInClimb from "./Home/PartnersInClimb";
import AwardsSection from "./Home/AwardsSection";
import PixelsPerfected from "./Home/PixelsPerfected";
import DottedWorldMap from "./Home/MapLocation";

import HomeGridSection from "./Home/HomeGrid";
import Connection from "./Home/Connection";
import HeroSectionLayout from "./Home/HeroSectionLayout";
import AyatiAboutSection from "./Home/AyatiAboutSection";
import CaasEdgeSection from "./Home/CaasEdgeSection";
import BrandsMarquee from "./Home/BrandsMarquee";
import FocusSection from "./Home/FocusSection";
import { BenefitsTimeline } from "./Home/BenefitsTimeline";
import BenefitsFlow from "./Home/BenefitCard";

import SEO from "../../components/SEO";

function HomePage() {
  return (
    <>
      <SEO
        title=" Digital marketing agency Chennai, Best Digital marketing company near
          me, Ayatiworks"
        description="Fuel business growth with content-led Digital Marketing Agency Chennai using Content As A Strategy, from ideation to Return on Investment"
        canonical="https://www.ayatiworks.com/"
      />

      <HeroSection />
      {/* <HeroSectionLayout /> */}
      <PromoHero />
      <AyatiAboutSection />
      <CaasEdgeSection />
      {/* <BrandsMarquee /> */}
      {/* <FocusSection /> */}
      {/* <BenefitsTimeline /> */}
      {/* <BenefitsFlow /> */}
      {/* <WhatWeDo /> */}
      <WhatAyati />
      <PartnersInClimb />

      <PixelsPerfected />
      <DottedWorldMap />
      {/* <HomeGridSection /> */}
      {/* <AwardsSection /> */}
      <Connection />
    </>
  );
}

export default HomePage;
