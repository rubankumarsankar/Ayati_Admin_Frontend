import React from "react";
import HeroSection from "./Home/HeroSection";
import GridSection from "./Blog/BlogGrid";
import SlowMarquee from "./Blog/MarqueeCards";
import CaseStudyAndWrite from "./Blog/CaseStudyAndWrite";
import BlogSectionPage from "./Blog/BlogSectionPage";
import Connection from "./Blog/Connection";
import { Title, Meta } from "react-head";

function BlogPage() {
  return (
    <>
      <>
        <Title>Ayatiworks - Blog</Title>
        <Meta
          name="description"
          content="Unlock digital marketing insights with our expert blog! Tips and trends to boost your brand’s growth. Dive in now!"
        />
      </>
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
