import React from "react";
import HeroSection from "./Home/HeroSection";
import GridSection from "./Blog/BlogGrid";
import SlowMarquee from "./Blog/MarqueeCards";
import CaseStudyAndWrite from "./Blog/CaseStudyAndWrite";
import BlogSectionPage from "./Blog/BlogSectionPage";
import Connection from "./Blog/Connection";

import SEO from "../../components/SEO";

function BlogPage() {
  return (
    <>
      <SEO
        title="Ayatiworks - Blog"
        description="Unlock digital marketing insights with our expert blog! Tips and trends to boost your brand’s growth. Dive in now!"
        canonical="https://www.ayatiworks.com/blogs"
      />
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
