import React from "react";
import HeroSection from "./Home/HeroSection";
import Connection from "./Home/Connection";
import AwardsListSection from "./Awards/AwardsList";
import AwardsSectionPage from "./Awards/AwardSectionPage";
import AwardsContensSection from "./Awards/AwardContensSection";
import AwardsMarqueeSection from "./Awards/AwardsMarqueeSection";
import { Title, Meta } from "react-head";

function AwardsPage() {
  return (
    <>
      <>
        <Title>
          Award-Winning Digital Marketing Agency Chennai, Ayatiworks{" "}
        </Title>
        <Meta
          name="description"
          content="Trust an award-winning digital marketing team in Chennai to elevate your brand! Proven strategies for success. Connect now!"
        />
      </>
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
