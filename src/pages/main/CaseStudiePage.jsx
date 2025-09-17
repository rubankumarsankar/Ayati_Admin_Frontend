import React from "react";
import HeroSection from "./Home/HeroSection";

import PixelsPerfected from "./Home/PixelsPerfected";

import Connection from "./Home/Connection";
import CaseStudiesList from "./Case Study/CaseStudiesList";

import SEO from "../../components/SEO";

function CaseStudiesPage() {
  return (
    <>
      <SEO
        title="Ayatiworks Case Studies, Brand Growth & Marketing Excellence"
        description="Explore real success stories! See how our Chennai-based experts drive brand growth with innovative marketing. Check them out!"
        canonical="https://www.ayatiworks.com/case-study"
      />
      <HeroSection />

      <CaseStudiesList />

      <Connection />
    </>
  );
}

export default CaseStudiesPage;
