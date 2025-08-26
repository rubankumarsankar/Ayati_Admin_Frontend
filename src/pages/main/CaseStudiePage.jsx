import React from "react";
import HeroSection from "./Home/HeroSection";

import PixelsPerfected from "./Home/PixelsPerfected";

import Connection from "./Home/Connection";
import CaseStudiesList from "./Awards/CaseStudiesList";

function CaseStudiesPage() {
  return (
    <>
      <HeroSection />

      <CaseStudiesList />

      <Connection />
    </>
  );
}

export default CaseStudiesPage;
