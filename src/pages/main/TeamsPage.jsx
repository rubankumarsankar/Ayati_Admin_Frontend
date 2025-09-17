import React from "react";
import HeroSection from "./Home/HeroSection";
import TeamIntro from "./Teams/TeamIntro";
import Connection from "./Home/Connection";
import TeamMember from "./Teams/TeamMember";
import { Title, Meta } from "react-head";

function TeamsPage() {
  return (
    <>
      <>
        <Title>Teams - Ayatiworks</Title>
        <Meta name="description" content="Meet the creative minds behind your brand’s success! Our Chennai-based experts craft strategies to elevate your digital presence. Explore now!" />
      </>
      <HeroSection />
      <TeamIntro />
      <TeamMember />
      <Connection />
    </>
  );
}

export default TeamsPage;
