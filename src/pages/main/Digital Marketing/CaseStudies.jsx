import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CaseStudies() {
  const [current, setCurrent] = useState(0);

  const caseStudies = [
    {
      title: "Automobile Excellence – Volvo",
      description:
        "Our collaboration with Volvo began over 3 years ago and continues to thrive. Together, we’ve elevated their brand presence across Chennai and Tamil Nadu, running hyper-local campaigns that strengthened engagement and dealership-level conversions.",
      image: "/assets/case-car.png", // ✅ replace with your image
      link: "#",
    },
    {
      title: "Healthcare Growth – Apollo",
      description:
        "We partnered with Apollo Hospitals to amplify their digital presence, ensuring top visibility and patient trust through data-driven campaigns and SEO excellence.",
      image: "/assets/apollo.png", // ✅ replace with your image
      link: "#",
    },
  ];

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };

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
          className="text-lg text-black/80 mb-12  font-secondary leading-relaxed"
        >
          At Ayatiworks, we deliver end-to-end digital marketing solutions
          designed to help your business grow faster, smarter, and stronger. As
          an award-winning digital marketing agency in Chennai, we bring
          together creativity, technology, and data to craft strategies that
          deliver results.
        </motion.p>

        {/* Card Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="absolute -left-6 lg:-left-12 bg-white shadow-md p-2 rounded-full hover:bg-secondary hover:text-white transition"
          >
            <ChevronLeft size={28} />
          </motion.button>

          {/* Card Content */}
          <AnimatePresence mode="wait">
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
                  className="w-full h-[400px] object-cover rounded-xl"
                />
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex-1 flex flex-col justify-between h-full"
              >
                {/* Top Section (Heading + Description) */}
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

                {/* Bottom Section (Button) */}
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
            className="absolute -right-6 lg:-right-12 bg-white shadow-md p-2 rounded-full hover:bg-secondary hover:text-white transition"
          >
            <ChevronRight size={28} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
