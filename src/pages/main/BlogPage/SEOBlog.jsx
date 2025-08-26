import HeroSection from "../Home/HeroSection";
import React from "react";
import { motion } from "framer-motion";
import Connection from "../Home/Connection";
import FAQSection from "../Digital Marketing/FAQSection";

function SEOBlogPage() {
  return (
    <>
      <HeroSection />
      <section className="bg-white section ">
        {/* Top Title Section */}
        <div className="section-container text-center flex flex-col items-center gap-8 mb-12">
          {/* Title with line */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title"
          >
            <span className="mb-2 block">SEO Simplified for you</span>
            {/* Decorative line */}
            {/* <div className="bg-secondary h-1 w-[300px] mx-auto mt-2"></div> */}
          </motion.h2>

          {/* Paragraph */}
          <p className="text-black/80 font-secondary font-medium  text-center text-base sm:text-lg leading-relaxed">
            When you use a search engine like Google to search for something
            that you need; for example, you want a picture book of the classic –
            “My Fair Lady” - Google displays many e-commerce websites who sell
            this picture book for you to make a choice.
          </p>
        </div>

        <div className="section-container flex flex-col items-start gap-6 mb-12">
          {/* Second Title with line */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title text-left"
          >
            <span className="mb-2 block">
              SEARCH Query – Cheap My Fair Lady Picture Book
            </span>
            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-[280px] mt-3 origin-left rounded-full"
            />
          </motion.h2>

          {/* Image */}
          <img
            src="/assets/blogImg/seo-blog-1.png"
            alt="SEO Illustration"
            className="w-full h-auto max-w-6xl mx-auto rounded-lg"
          />

          {/* Third Title with line */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title text-left mt-4"
          >
            <span className="mb-2 block">Search Results for the query</span>
            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-[280px] mt-3 origin-left rounded-full"
            />
          </motion.h2>

          {/* Image */}
          <img
            src="/assets/blogImg/seo-blog-2.png"
            alt="SEO Illustration"
            className="w-full h-auto max-w-6xl mx-auto rounded-lg"
          />

          {/* Paragraph */}
          <p className="text-black/80 font-secondary font-medium text-left text-base sm:text-lg leading-relaxed mt-4">
            You can make your choice based on your requirements like competitive
            rates, immediate delivery, print quality and any freebies attached
            with the purchase. <br />
            The process of bringing these e-commerce book companies in front you
            to match your search intention is called Search Engine Optimization.{" "}
            <br />
            These companies don’t come up just because they have a website –
            they show up to you because they are Search Engine Optimized.
          </p>

          <div className="text-center flex flex-col items-center gap-8 mb-12">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="section-title "
            >
              <span className="mb-2 block">What is SEO?</span>
              {/* Decorative line */}
              <div className="bg-secondary h-1 w-[200px] mx-auto mt-2"></div>
            </motion.h2>

            {/* Paragraph */}
            <p className="text-black/80 font-secondary font-medium  text-center text-base sm:text-lg leading-relaxed">
              Search Engine Optimization (SEO) is a major branch of digital
              marketing, enabling businesses to enhance their online visibility
              and attract targeted traffic organically. <br />
              Every second, Google handles an estimated 99,000 searches, adding
              up to roughly 8.5 billion queries per day and nearly 2 trillion
              searches globally each year. <br />
              This staggering volume underscores Google’s dominance as the
              world's leading search engine. SEO.ai Highlight these figures,
              showcasing the platform’s massive influence on digital information
              access.
            </p>
          </div>
          <img
            src="/assets/blogImg/seo-blog-3.png"
            alt="SEO Illustration"
            className="w-full h-auto max-w-6xl mx-auto rounded-lg"
          />
          <div className=" bg-primary rounded-xl text-center flex flex-col items-center p-5 gap-8 mb-12">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="section-title text-white mb-6"
            >
              <span className="mb-2 block">Why is SEO Important?</span>
              {/* Decorative line */}
              {/* <div className="bg-white h-1 w-[200px] mx-auto mt-2"></div> */}
            </motion.h2>

            {/* Paragraph */}
            <p className="text-white font-secondary font-medium text-center text-ms/8 sm:text-base/8 mb-5 ">
              The answer is with us! <br />
              Yes, there is a paradigm shift in the way the modern world is
              consuming information and finding things they want. Technology is
              the frontrunner in whatever people do today. People use search
              engines, apps, social media and many other platforms to get what
              they want. <br />
              With Google being the major search engine used in the entire world
              it becomes highly important for businesses to implement SEO to
              increase brand visibility, credibility and make potential
              conversions.
            </p>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="border-b border-black mt-8 sm:mt-10 section-container"
        ></motion.div>
      </section>
      <section className="section-container py-12">
        <div className="mb-12">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title text-left text-2xl md:text-3xl lg:text-4xl font-bold"
          >
            <span className="mb-2 block">How do Search Engines Work?</span>

            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[280px] mt-3 origin-left rounded-full"
            />
          </motion.h2>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 items-start mb-10">
          {/* Left - Image */}
          <div className="w-full">
            <img
              src="/assets/blogImg/blog-7.png"
              alt="Search Engines Work"
              className="w-full h-auto max-w-6xl mx-auto rounded-lg"
            />
          </div>

          {/* Right - Text */}
          <div className="text-gray-700 space-y-6">
            {/* Intro Paragraph */}
            <p className="text-base sm:text-lg md:text-xl text-secondary font-primary font-medium leading-relaxed">
              The internet is the world of online information from various
              sources both reliable and unreliable, but it is available. Search
              Engines use the internet to get information by crawling the web,
              fetching indexed content and ranking and displaying the results to
              match user queries using complex algorithms.
            </p>

            {/* Sub Title */}
            <h3 className="section-title text-left text-2xl sm:text-3xl lg:text-4xl font-bold">
              Have a look at their individual role
            </h3>

            {/* Points */}
            <div className="space-y-6">
              {/* Crawling */}
              <div>
                <h4 className="flex items-center gap-2 font-primary text-xl sm:text-2xl font-medium text-secondary">
                  <span className="text-primary text-2xl sm:text-3xl">1.</span>
                  Crawling
                </h4>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                  Search engines deploy bots, known as crawlers or spiders, to
                  scan the internet and discover new or updated content. These
                  bots follow links and read the content on web pages.
                </p>
              </div>

              {/* Indexing */}
              <div>
                <h4 className="flex items-center gap-2 font-primary text-xl sm:text-2xl font-medium text-secondary">
                  <span className="text-primary text-2xl sm:text-3xl">2.</span>
                  Indexing
                </h4>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                  Once content is discovered, it’s stored and organized in a
                  vast database called the index. This index serves as the
                  repository from which search engines retrieve information in
                  response to user queries.
                </p>
              </div>

              {/* Ranking */}
              <div>
                <h4 className="flex items-center gap-2 font-primary text-xl sm:text-2xl font-medium text-secondary">
                  <span className="text-primary text-2xl sm:text-3xl">3.</span>
                  Ranking
                </h4>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                  When a user performs a search, the search engine analyzes its
                  index to provide the most relevant results. This ranking is
                  determined by numerous factors, including content relevance,
                  quality, and user engagement metrics.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-primary rounded-xl text-center flex flex-col items-center p-5 gap-8 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title text-white mb-6"
          >
            <span className="mb-2 block">
              What are the key components of SEO?{" "}
            </span>
            {/* Decorative line */}
            {/* <div className="bg-white h-1 w-[200px] mx-auto mt-2"></div> */}
          </motion.h2>

          {/* Paragraph */}
          <p className="text-white font-secondary font-medium text-center text-ms/8 sm:text-base/8 mb-5 ">
            SEO comprises various interconnected components that work in tandem
            to provide accurate and relevant information to users while ensuring
            that the right business appears for the right user with the right
            intent. <br />
            Let’s take a sneak peek into each component individually
          </p>
        </div>
      </section>
      <section className="section-container py-12">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title text-left text-2xl md:text-3xl lg:text-4xl font-bold"
          >
            <span className="mb-2 block">On-Page SEO</span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[150px] mt-3 origin-left rounded-full"
            />
          </motion.h2>
        </div>

        {/* ✅ Make grid parent tall enough */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
          {/* Left Content */}
          <div className="text-gray-700 space-y-6">
            {/* Intro Paragraph */}
            <p className="text-base sm:text-lg md:text-xl text-black/80 font-secondary font-medium leading-relaxed">
              Search Engine Optimization is a mechanism used by businesses on
              their websites to ensure that they show up to people when they
              search using search engines like Google, Yahoo or Bing to get
              information they need. This is an organic pattern and this service
              is FREE. Google doesn’t charge a business to show up organically.
              There are many key elements that contribute to making On-Page SEO
              a success when optimizing a particular web page.
            </p>

            {/* Sub Title */}
            <h3 className="section-title text-left text-2xl sm:text-3xl lg:text-4xl font-bold">
              The key elements include:
            </h3>

            {/* Points */}
            <div className="space-y-6">
              {/* Crawling */}
              <div>
                <h4 className="flex items-center gap-2 font-primary text-xl sm:text-2xl font-medium text-secondary">
                  <span className="text-primary text-2xl sm:text-3xl">1.</span>
                  Title Tags and Meta Descriptions:
                </h4>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                  Crafting compelling and keyword-rich titles and descriptions
                  to entice clicks. It is important that every web page has a
                  title tag and meta description. SEO has to be performed with
                  twin intentions in mind. First, the content must be end-user
                  focused and satisfy the intent of the searcher. Secondly, it
                  must satisfy and meet the expectations of search engine
                  algorithms. When these two factors are satisfied in a unique
                  manner that resonates with the company’s brand values and
                  guidelines then you are getting your web page to rank on the
                  SERP.
                </p>
              </div>

              {/* Indexing */}
              <div>
                <h4 className="flex items-center gap-2 font-primary text-xl sm:text-2xl font-medium text-secondary">
                  <span className="text-primary text-2xl sm:text-3xl">2.</span>
                  Header Tags (H1, H2, H3):
                </h4>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                  The header tags, also known as the HTML tags, start from H1
                  and run up to H6 structuring the content with appropriate
                  headings to enhance readability and SEO. It helps the Search
                  Engines clearly understand the hierarchy and the relevance of
                  the content to the context. Proper usage of these header tags
                  improves SEO performance and readability amongst readers.
                  Search Engines understand a web page by its topic and
                  relevance which is highlighted by using appropriate header
                  tags thus the search engine is able to serve the right website
                  to match the search query of the end user.
                </p>
              </div>

              {/* Ranking */}
              <div>
                <h4 className="flex items-center gap-2 font-primary text-xl sm:text-2xl font-medium text-secondary">
                  <span className="text-primary text-2xl sm:text-3xl">3.</span>
                  Content Optimization :
                </h4>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                  Content optimization is a process by which content is written
                  to match the intent of the end user.
                </p>
                <h3 className="font-medium font-primary text-primary text-2xl mt-2 mb-3 ">
                  CONTENT THAT MATCHES SEARCH INTENT
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                  Content is the king, a super performing SEO is the kingmaker
                  that converts super relevant content into business. A magic
                  that happens when the right content meets the right intent is
                  “Win Win”. Both the end user and the business get what they
                  want. This happens when the right keywords are used with all
                  the metrics in place.
                </p>
              </div>

              {/* Image Optimization */}
              <div>
                <h4 className="flex items-center gap-2 font-primary text-xl sm:text-2xl font-medium text-secondary">
                  <span className="text-primary text-2xl sm:text-3xl">4.</span>
                  Image Optimization :
                </h4>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                  Search Engines don’t read images or creatives. They can read
                  the code and that’s why it is important to tag images with
                  content that includes a keyword string naturally which is
                  called image alt text.
                </p>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                  When the end user uses the keyword that matches the alt text
                  given and all the other SEO parameters are in place, it pulls
                  up the image link. This is why giving an ALT text for an image
                  is very important.
                </p>
              </div>

              {/* Internal Linking */}
              <div>
                <h4 className="flex items-center gap-2 font-primary text-xl sm:text-2xl font-medium text-secondary">
                  <span className="text-primary text-2xl sm:text-3xl">5.</span>
                  Internal Linking:
                </h4>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                  One of the most important SEO hacks is Internal Linking. It
                  cannot be avoided because it is a ranking factor in Google’s
                  SEO algorithm because it educates the search engine on the
                  website’s structure and the relationship between pages on a
                  website, which results in improved crawlability, appropriate
                  indexing and top-notch user experience which helps the website
                  rank on SERP.
                </p>
              </div>
            </div>
          </div>

          {/* Right - Sticky Image */}
          <div className="hidden md:block">
            {/* ✅ Sticky works if parent (this div) doesn’t collapse */}
            <div className="sticky top-20">
              <img
                src="/assets/blogImg/blog-8.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section-container py-12">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title text-left text-2xl md:text-3xl lg:text-4xl font-bold"
          >
            <span className="mb-2 block">Off-Page SEO</span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[150px] mt-3 origin-left rounded-full"
            />
          </motion.h2>
        </div>

        {/* ✅ Make grid parent tall enough */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
          {/* Left Content */}
          <div className="hidden md:block">
            {/* ✅ Sticky works if parent (this div) doesn’t collapse */}
            <div className="sticky top-20">
              <img
                src="/assets/blogImg/blog-2.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>

          {/* Right - Sticky Image */}
          <div className="text-gray-700 space-y-6">
            {/* Points */}
            <div className="space-y-6">
              {/* Crawling */}
              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                  <span className="text-primary text-xl sm:text-2xl">1.</span>
                  Not everything that contributes to a website ranking happens
                  on the website. There are some important factors that happen
                  off-site which are called Off-Page SEO works. These works
                  determine how people interact with a website and find them on
                  SERP.
                </p>
              </div>

              {/* Indexing */}
              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                  <span className="text-primary text-xl sm:text-2xl">2.</span>
                  Some of the vital processes used to make successful off-page
                  SEO are improving Backlinks, Guest Posting, Document Sharing,
                  Online Community, Content Marketing, and social media.
                </p>
              </div>

              {/* Ranking */}
              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                  <span className="text-primary text-xl sm:text-2xl">3.</span>
                  Some Emerging SEO Trends in 2025 that we need to know and
                  update ourselves with include Artificial Intelligence in SEO,
                  Voice Search Optimization, Video SEO and Zero-Click Searches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-container py-12">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title text-left text-2xl md:text-3xl lg:text-4xl font-bold"
          >
            <span className="mb-2 block">Technical SEO</span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[150px] mt-3 origin-left rounded-full"
            />
          </motion.h2>
        </div>

        {/* ✅ Make grid parent tall enough */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
          {/* Left Content */}
          <div className="text-gray-700 space-y-6">
            {/* Points */}
            <div className="space-y-6">
              {/* Crawling */}
              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                  <span className="text-primary text-xl sm:text-2xl">1.</span>
                  The life of a website lies in its technical strength; it must
                  be technically strong, flawless and seamless to ensure the end
                  user has a superior experience while navigating.
                </p>
              </div>

              {/* Indexing */}
              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                  <span className="text-primary text-xl sm:text-2xl">2.</span>
                  Technical SEO ensures that the website is sturdy by optimizing
                  its backend, infrastructure and technicalities to improve
                  search engines experience of crawling, indexing and overall
                  efficiency of the website. The major components involved in
                  Technical SEO are backend optimization, improved crawlability,
                  enhanced indexing, boosting the site speed, which is a ranking
                  factor, and involving major technical fixes.
                </p>
              </div>

              {/* Ranking */}
              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                  <span className="text-primary text-xl sm:text-2xl">3.</span>
                  Some key elements of Technical SEO include the website’s
                  structure, sitemaps, mobile responsiveness, page speed,
                  structured data, canonicalization, broken link monitoring,
                  HTTPs, internal linking and Google Search Console.
                </p>
              </div>
            </div>
          </div>

          {/* Right - Sticky Image */}
          <div className="hidden md:block">
            {/* ✅ Sticky works if parent (this div) doesn’t collapse */}
            <div className="sticky top-20">
              <img
                src="/assets/blogImg/blog-3.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section-container py-12">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title text-left text-2xl md:text-3xl lg:text-4xl font-bold"
          >
            <span className="mb-2 block">What is Keyword Research in SEO?</span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[150px] mt-3 origin-left rounded-full"
            />
          </motion.h2>
        </div>

        {/* ✅ Make grid parent tall enough */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
          {/* Left Content */}
          <div className="hidden md:block">
            {/* ✅ Sticky works if parent (this div) doesn’t collapse */}
            <div className="sticky top-20">
              <img
                src="/assets/blogImg/blog-4.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>

          {/* Right - Sticky Image */}
          <div className="text-gray-700 space-y-6">
            {/* Points */}
            <div className="space-y-6">
              {/* Crawling */}
              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                  <span className="text-primary text-xl sm:text-2xl">1.</span>
                  Keyword research is an important process in SEO that
                  identifies the words and phrases both long and short used by
                  people while searching for information on products & services
                  online. Once these words are identified, they are analyzed for
                  various factors like volume of searches in a month, the
                  difficulty of the keyword - to rank on SERP and its
                  competition among similar businesses.
                </p>
              </div>

              {/* Indexing */}
              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                  <span className="text-primary text-xl sm:text-2xl">2.</span>
                  Businesses strive to optimize their websites and web services,
                  and product pages for the keywords that match their products
                  and services offered. By doing so, they increase their chances
                  of showing up to the right customer for the right search term
                  that matches their business offering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-container bg-white">
        {/* Heading */}
        <div className="text-center flex flex-col items-center gap-8 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title "
          >
            <span className="mb-2 block">
              Keyword Research Step by Step Flow
            </span>
            {/* Decorative line */}
            <div className="bg-secondary h-1 w-[200px] mx-auto mt-2"></div>
          </motion.h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-white font-secondary border shadow-sm hover:shadow-lg p-6 text-black/70 font-medium">
            Pick out the keywords your customers might use to find your products
            or services online
          </div>
          <div className="bg-white font-secondary border shadow-sm hover:shadow-lg p-6 text-black/70 font-medium">
            Use tools like Google Keyword Planner to get keyword suggestions for
            free
          </div>
          <div className="bg-white font-secondary border shadow-sm hover:shadow-lg p-6 text-black/70 font-medium">
            Use paid tools like{" "}
            <span className="text-secondary font-semibold">Semrush</span>,{" "}
            <span className="text-secondary font-semibold">Ahrefs</span> and{" "}
            <span className="text-secondary font-semibold">Ubersuggest</span> to
            identify keywords and perform other important SEO tasks too
          </div>
          <div className="bg-white font-secondary border shadow-sm hover:shadow-lg p-6 text-black/70 font-medium">
            Find the Volume of keywords, the competition for the keyword and
            then optimize for SEO by writing unique and end user centric content
          </div>
          <div className="bg-white font-secondary border shadow-sm hover:shadow-lg p-6 text-black/70 font-medium">
            To rank for competitive keywords try using variations of long tail
            keywords
          </div>
        </div>

        {/* Golden Rule */}
        <div className="max-w-5xl mx-auto mt-10">
          <h3 className="text-secondary font-primary text-2xl  font-medium mb-2">
            • Golden Rule
          </h3>
          <p className="text-black/70 font-secondary text-md/8 leading-relaxed">
            Use well researched keywords and write intent based content in
            Google E-E-A-T format to outrank your competitors. Ensure you give
            your users what they are searching for and give them a good user
            experience.
          </p>
        </div>
      </section>
      <section className="section-container py-12">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title text-left text-2xl md:text-3xl lg:text-4xl font-bold"
          >
            <span className="mb-2 block">
              Why is User Experience in SEO very important?
            </span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[150px] mt-3 origin-left rounded-full"
            />
          </motion.h2>
        </div>

        {/* ✅ Make grid parent tall enough */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
          {/* Left Content */}
          <div className="text-gray-700 space-y-6">
            {/* Points */}
            <div className="space-y-6">
              {/* Crawling */}
              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                  <span className="text-primary text-xl sm:text-2xl">• </span>
                  Business is not just offering services or selling products to
                  customers; it is about selling them or offering them an
                  unforgettable experience. Repeat business happens only when
                  the end user feels the experience. This end user experience is
                  called User Experience or UX.
                </p>
              </div>

              {/* Indexing */}
              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                  <span className="text-primary text-xl sm:text-2xl">• </span>
                  Search Engines give lots of importance to UX since they want
                  users coming to a website to have a seamless experience.
                </p>
              </div>

              {/* Ranking */}
              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                  <span className="text-primary text-xl sm:text-2xl">• </span>
                  For websites looking for ranking on SERP, they must offer a
                  positive experience to the web user with lesser bounce rates,
                  and higher engagement.
                </p>
              </div>
              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                  <span className="text-primary text-xl sm:text-2xl">• </span>
                  Google considers user behavior on a website to measure its
                  relevance and quality. Imagine you want some information on,
                  “how to choose the right course for you to pursue your under
                  graduation?” Now you land on a website it starts telling you
                  all the courses available, the universities, the fees and the
                  bank loans available but it is not answering your question”
                  What happens?
                </p>
              </div>

              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                  <span className="text-primary text-xl sm:text-2xl">• </span>
                  You leave the website in under 10 to 15 seconds on the flip
                  side if you get a website that answers your question directly,
                  gives you tips that resonates with your intent, then you start
                  spending more time on that website.
                </p>
              </div>
              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                  <span className="text-primary text-xl sm:text-2xl">• </span>
                  This helps Google to value your content, the experience you
                  offer, and rank your website on SERP.
                </p>
              </div>
              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                  <span className="text-primary text-xl sm:text-2xl">•</span>
                  Google uses Core Web Vitals metrics to measure the user
                  experience from the technical part of the site, directly
                  relating to site navigation and engagement metrics.
                </p>
              </div>
              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                  <span className="text-primary text-xl sm:text-2xl">• </span>
                  The next major factor that contributes to SEO is Local SEO.
                </p>
              </div>
            </div>
          </div>

          {/* Right - Sticky Image */}
          <div className="hidden md:block">
            {/* ✅ Sticky works if parent (this div) doesn’t collapse */}
            <div className="sticky top-20">
              <img
                src="/assets/blogImg/blog-6.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section-container py-12">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title text-left text-2xl md:text-3xl lg:text-4xl font-bold"
          >
            <span className="mb-2 block">Technical SEO</span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[150px] mt-3 origin-left rounded-full"
            />
          </motion.h2>
        </div>

        {/* ✅ Make grid parent tall enough */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
          {/* Left Content */}
          <div className="hidden md:block">
            {/* ✅ Sticky works if parent (this div) doesn’t collapse */}
            <div className="sticky top-20">
              <img
                src="/assets/blogImg/blog-5.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>

          {/* Right - Sticky Image */}
          <div className="text-gray-700 space-y-6">
            {/* Points */}
            <div className="space-y-6">
              {/* Crawling */}
              <p className="text-base sm:text-lg md:text-xl text-secondary font-primary font-medium leading-relaxed">
                In simple terms, carrying out Search Engine Optimization for a
                business website in the habitat or neighborhood to increase
                local traffic is called Local SEO. This strategy improves
                business visibility in the local search results and to get the
                better of local SEO businesses must follow some key aspects like
                Google My Business (GMB) now known as Google Business Profile
                (GBP), Local Citations and Reviews & Ratings which is nothing
                but consumer feedback.
              </p>
              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                  <span className="text-primary text-xl sm:text-2xl">• </span>
                  Implementing Local SEO helps businesses attract business from
                  the local neighborhood quite significantly.
                </p>
              </div>
              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                  <span className="text-primary text-xl sm:text-2xl">• </span>
                  Lifelong Learning is the only way you can stay relevant in the
                  industry and create stunning results. Focus on the plan,
                  progress, and acumen—when these align, the results will
                  naturally follow.
                </p>
              </div>

              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                  <span className="text-primary text-xl sm:text-2xl">• </span>
                  One needs to stay updated with emerging SEO Trends YoY and
                  sometimes even month on month.
                </p>
              </div>

              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                  <span className="text-primary text-xl sm:text-2xl">• </span>
                  Some Emerging SEO Trends in 2025 that we need to know and
                  update ourselves with include Artificial Intelligence in SEO,
                  Voice Search Optimization, Video SEO and Zero-Click Searches.
                </p>
              </div>

              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                  <span className="text-primary text-xl sm:text-2xl">• </span>
                  The only way to ensure SEO works effectively to fetch desired
                  results and stay ahead of competition is to upgrade oneself
                  with the latest SEO trends.
                </p>
              </div>

              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                  <span className="text-primary text-xl sm:text-2xl">• </span>
                  Once you have upgraded your SEO skills, you need to know how
                  to measure it for success. The key metrics in place to measure
                  SEO success include Key Performance Indicators (KPIs) and SEO
                  Tools and Analytics to track and analyze data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section-container text-center flex flex-col items-center gap-8 mt-5 mb-12">
        {/* Title with line */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          <span className="mb-2 block">
            When you measure your SEO, what will <br /> be the outcome?
          </span>
          {/* Decorative line */}
          {/* <div className="bg-secondary h-1 w-[300px] mx-auto mt-2"></div> */}
        </motion.h2>

        {/* Paragraph */}
        <p className="text-secondary font-secondary font-medium  text-center text-base sm:text-lg leading-relaxed">
          Using the right metrics to measure SEO will enlighten us with common
          SEO mistakes to avoid, some of them are not as common as it sounds,
          they can be unique. <br />
          In SEO, knowing the direction towards which the campaign is moving is
          very important. Working on correcting SEO mistakes becomes vital to
          rank on Google SERP.
        </p>
      </div>
      <section className="section-container py-12">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title text-left text-2xl md:text-3xl lg:text-4xl font-bold"
          >
            <span className="mb-2 block">Conclusion</span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[150px] mt-3 origin-left rounded-full"
            />
          </motion.h2>
        </div>

        {/* ✅ Make grid parent tall enough */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
          {/* Left Content */}
          <div className="hidden md:block">
            {/* ✅ Sticky works if parent (this div) doesn’t collapse */}
            <div className="sticky top-20">
              <img
                src="/assets/blogImg/blog-1.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>

          {/* Right - Sticky Image */}
          <div className="text-gray-700 space-y-6">
            {/* Points */}
            <div className="space-y-6">
              {/* Crawling */}

              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                  <span className="text-primary text-xl sm:text-2xl">• </span>
                  Hope you have an idea of what Search Engine Optimization is.
                  This blog is intended to give you some clarity on each
                  component involved in SEO. We will be adding more findings and
                  upgrading content regularly.
                </p>
              </div>
              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                  <span className="text-primary text-xl sm:text-2xl">• </span>
                  We recommend that you join the Ayatiworks community to access
                  the latest industry insights, strategies, and trends.
                </p>
              </div>

              <div>
                <h4 className="flex items-center gap-2 font-primary text-xl sm:text-2xl font-medium text-secondary">
                  <span className="text-primary text-3xl sm:text-4xl">• </span>
                  Disclaimer
                </h4>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                   You have our word! Your data is going to be used only by
                  Ayatiworks to send updates, information and any promotions
                  that Ayatiworks is involved in. You can use the unsubscribe
                  link to get off the mailing list. We hate spam as much as you
                  do. We value your participation in the Ayatiworks community.
                  For any queries you can email us at info@ayatiworks.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FAQSection />
      <Connection />
    </>
  );
}

export default SEOBlogPage;
