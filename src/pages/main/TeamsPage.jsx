import React from "react";
import HeroSection from "./Home/HeroSection";
import TeamIntro from "./Teams/TeamIntro";
import Connection from "./Home/Connection";
import TeamMember from "./Teams/TeamMember";

import SEO from "../../components/SEO";

function TeamsPage() {
  return (
    <>
      <SEO
        title="Teams - Ayatiworks"
        description="Meet the creative minds behind your brand’s success! Our Chennai-based experts craft strategies to elevate your digital presence. Explore now!"
        canonical="https://www.ayatiworks.com/team"
      />
      <HeroSection />
      <TeamIntro />
      <TeamMember />
      <Connection />
    </>
  );
}

export default TeamsPage;
