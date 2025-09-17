import React from "react";
import HeroSection from "./Home/HeroSection";

import PixelsPerfected from "./Home/PixelsPerfected";

import Connection from "./Home/Connection";
import CaseStudiesList from "./Case Study/CaseStudiesList";
import { Title, Meta } from "react-head";

function CaseStudiesPage() {
  return (
    <>
      <>
        <Title>
          Ayatiworks Case Studies, Brand Growth & Marketing Excellence
        </Title>
        <Meta
          name="description"
          content="Explore real success stories! See how our Chennai-based experts drive brand growth with innovative marketing. Check them out!"
        />
      </>
      <HeroSection />

      <CaseStudiesList />

      <Connection />
    </>
  );
}

export default CaseStudiesPage;
