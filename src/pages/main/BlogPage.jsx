import React from "react";
import HeroSection from "./Home/HeroSection";
import GridSection from "./Blog/BlogGrid";
import Connection from "./Home/Connection";
import SlowMarquee from "./Blog/MarqueeCards";
import CaseStudyAndWrite from "./Blog/CaseStudyAndWrite";
import BlogSectionPage from "./Blog/BlogSectionPage";

function BlogPage() {
  return (
    <>
      <HeroSection />
      <BlogSectionPage />
      <SlowMarquee
        heading="Explore Our Digital Capabilities"
        speed={36} // increase to make it even slower (e.g., 45)
      />
      <CaseStudyAndWrite />
      <GridSection />
      <Connection />
    </>
  );
}

export default BlogPage;
