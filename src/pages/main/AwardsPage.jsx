import React from "react";
import HeroSection from "./Home/HeroSection";
import Connection from "./Home/Connection";
import AwardsListSection from "./Awards/AwardsList";
import AwardsSectionPage from "./Awards/AwardSectionPage";
import AwardsContensSection from "./Awards/AwardContensSection";
import AwardsMarqueeSection from "./Awards/AwardsMarqueeSection";

function AwardsPage() {
  return (
    <>
      <HeroSection />
      <AwardsSectionPage />
      <AwardsMarqueeSection />
      <AwardsContensSection />
      {/* <AwardsListSection /> */}

      <Connection />
    </>
  );
}

export default AwardsPage;
