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

function HomePage() {
  return (
    <>
      <HeroSection />
      {/* <HeroSectionLayout /> */}
      <PromoHero />
      {/* <WhatWeDo /> */}
      <WhatAyati />
      <PartnersInClimb />
      <AwardsSection />
      <PixelsPerfected />
      <DottedWorldMap />
      <HomeGridSection />
      <Connection />
    </>
  );
}

export default HomePage;
