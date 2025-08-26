import React from "react";
import HeroSection from "./Home/HeroSection";
import Connection from "./Home/Connection";
import AwardsListSection from "./Awards/AwardsList";

function AwardsPage() {
  return (
    <>
      <HeroSection />

      <AwardsListSection />

      <Connection />
    </>
  );
}

export default AwardsPage;
