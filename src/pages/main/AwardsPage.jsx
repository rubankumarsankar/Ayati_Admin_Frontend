import React from "react";
import HeroSection from "./Home/HeroSection";
import Connection from "./Home/Connection";
import AwardsListSection from "./Awards/AwardsList";
import AwardsSectionPage from "./Awards/AwardSectionPage";
import AwardsContensSection from "./Awards/AwardContensSection";
import AwardsMarqueeSection from "./Awards/AwardsMarqueeSection";

import SEO from "../../components/SEO";

function AwardsPage() {
  return (
    <>
      <SEO
        title="Award-Winning Digital Marketing Agency Chennai, Ayatiworks"
        description="Trust an award-winning digital marketing team in Chennai to elevate your brand! Proven strategies for success. Connect now!"
        canonical="https://www.ayatiworks.com/awards"
      />
      <HeroSection />
      <AwardsSectionPage />
      <AwardsMarqueeSection />
      <AwardsContensSection />
      <AwardsListSection />

      <Connection />
    </>
  );
}

export default AwardsPage;
