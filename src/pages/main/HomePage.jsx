import React from "react";
import HeroSection from "./Home/HeroSection";
import PromoHero from "./Home/PromoHero";
import WhatWeDo from "./Home/WhatWeDo";
import WhatAyati from "./Home/WhatAyati";
import PartnersInClimb from "./Home/PartnersInClimb";
import AwardsSection from "./Home/AwardsSection";
import PixelsPerfected from "./Home/PixelsPerfected";
import DottedWorldMap from "./Home/MapLocation";
import GridSection from "./Blog/grid";
import Connection from "./Teams/Connection";

function HomePage() {
  return (
    <>
      <HeroSection />
      <PromoHero />
      <WhatWeDo />
      <WhatAyati />
      <PartnersInClimb />
      <AwardsSection />
      <PixelsPerfected />
      <DottedWorldMap />
      <GridSection />
      <Connection />
    </>
  );
}

export default HomePage;
