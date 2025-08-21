import React from "react";
import HeroSection from "./Home/HeroSection";
import TeamIntro from "./Teams/TeamIntro";
import Connection from "./Home/Connection";
import HomeGridSection from "./Home/HomeGrid";

function TeamsPage() {
  return (
    <>
      <HeroSection />
      <TeamIntro />
      <HomeGridSection />
      <Connection />
    </>
  );
}

export default TeamsPage;
