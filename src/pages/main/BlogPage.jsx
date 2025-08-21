import React from "react";
import HeroSection from "./Home/HeroSection";
import ByteSize from "./Blog/ByteSize";
import GridSection from "./Blog/grid";
import Connection from "./Home/Connection";

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
