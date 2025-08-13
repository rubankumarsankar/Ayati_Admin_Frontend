import React from "react";
import HeroSection from "./Home/HeroSection";
import ByteSize from "./Blog/ByteSize";
import Connection from "./Teams/Connection";
import Grid from "./Blog/grid";


function BlogPage() {
  return (
    <>
      <HeroSection />
      <ByteSize />
      <Grid />
      <Connection />
    </>
  );
}

export default BlogPage;
