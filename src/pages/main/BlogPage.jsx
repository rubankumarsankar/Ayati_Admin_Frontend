import React from "react";
import HeroSection from "./Home/HeroSection";
import ByteSize from "./Blog/ByteSize";
import Connection from "./Teams/Connection";
import GridSection from "./Blog/grid";

function BlogPage() {
  return (
    <>
      <HeroSection />
      <ByteSize />
      <GridSection />
      <Connection />
    </>
  );
}

export default BlogPage;
