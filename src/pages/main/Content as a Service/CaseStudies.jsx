import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CaseStudies() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const caseStudies = [
    {
      title: "Automobile Excellence – Volvo",
      description:
        "Our collaboration with Volvo began over 3 years ago and continues to thrive. Together, we’ve elevated their brand presence across Chennai and Tamil Nadu, running hyper-local campaigns that strengthened engagement and dealership-level conversions.",
      image: "/assets/case-car.png",
      link: "#",
    },
    {
      title: "Retail & E-Commerce Growth",
      description:
        "A D2C brand teamed up with Ayatiworks to scale online visibility. Through SEO, performance ads, and social campaigns, we achieved 130% growth in organic traffic and an 85% rise in sales within 6 months.",
      image: "/assets/Tiger.png",
      link: "#",
    },
    {
      title: "Healthcare – Domestic & International Impact",
      description:
        "We’ve partnered with both domestic and international healthcare providers to enhance visibility and patient acquisition. From clinics in Chennai to global health brands in the USA & UAE, our campaigns improved keyword rankings and patient trust across markets.",
      image: "/assets/siva-hospital.png",
      link: "#",
    },
    {
      title: "Technology & SaaS Expansion – Domestic & International",
      description:
        "A leading SaaS company Dataquel has collaborated with Ayatiworks from inception, ideation, execution and results. We have co-created a demand generation content framework to penetrate the market to generate 70% qualified traffic from the target audience in California.",
      image: "/assets/Tiger.png",
      link: "#",
    },
    {
      title: "Beauty & Personal Care Marketing",
      description:
        "Our influencer-led Instagram campaigns helped a Chennai-based salon chain engage more customers. This strategy delivered a 200% increase in interactions and rapid expansion into new franchise locations across Tamil Nadu.",
      image: "/assets/Royal-dutch.png",
      link: "#",
    },
    {
      title: "Real Estate Client Testimonial",
      description:
        "For a leading real estate developer, VGN Properties, Ayatiworks manages website development, landing page design, PPC campaigns, social media marketing, and ongoing web maintenance. This integrated approach not only generated quality leads but also built a steady digital presence that continues to attract homebuyers.",
      image: "/assets/vgn.png",
      link: "#",
    },
  ];

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide every 7s (optional)
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section relative py-16">
      <div className="section-container mx-auto max-w-6xl px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-6"
        >
          <h2 className="section-title flex items-start text-primary">
            Case Studies & Client Success Stories
            
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
            className="bg-secondary h-1 w-[280px] mt-3 origin-left rounded-full"
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-lg text-black/80 mb-12 font-secondary leading-relaxed"
        >
          At Ayatiworks, we deliver end-to-end digital marketing solutions
          designed to help your business grow faster, smarter, and stronger.
        </motion.p>

        {/* Card Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute -left-6 lg:-left-12 bg-white shadow-md p-2 rounded-full hover:bg-secondary hover:text-white transition"
          >
            <ChevronLeft size={28} />
          </motion.button>

          {/* Card Content */}
          <AnimatePresence
            mode="wait"
            onExitComplete={() => setIsAnimating(false)}
          >
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="bg-white shadow-lg rounded-2xl p-6 lg:p-10 flex flex-col lg:flex-row gap-8 items-center w-full"
            >
              {/* Image */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex-1"
              >
                <img
                  src={caseStudies[current].image}
                  alt={caseStudies[current].title}
                  className="w-full h-64 sm:h-80 lg:h-[650px] object-cover rounded-xl"
                />
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex-1 flex flex-col justify-between h-full"
              >
                <div>
                  <h3 className="text-3xl lg:text-4xl font-primary font-medium text-primary mb-4">
                    {caseStudies[current].title}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                      className="bg-secondary h-1 w-[200px] mt-2 origin-left rounded-full"
                    />
                  </h3>
                  <p className="text-gray-700 font-secondary text-base leading-7">
                    {caseStudies[current].description}
                  </p>
                </div>

                {/* Button */}
                <div className="mt-6">
                  <a
                    href={caseStudies[current].link}
                    className="inline-block bg-primary text-white px-6 py-3 rounded-full text-lg font-medium shadow-md hover:bg-secondary transition"
                  >
                    Read Full Case Study
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Right Arrow */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute -right-6 lg:-right-12 bg-white shadow-md p-2 rounded-full hover:bg-secondary hover:text-white transition"
          >
            <ChevronRight size={28} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
