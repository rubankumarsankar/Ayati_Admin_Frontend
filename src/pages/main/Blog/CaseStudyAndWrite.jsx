// CaseStudyAndWrite.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "0px 0px -80px" },
  transition: { duration: 0.55, ease: "easeOut", delay: d },
});

export default function CaseStudyAndWrite() {
  return (
    <section className="section-container py-12 md:py-16">
      {/* ===== Case Study Card ===== */}
      <motion.article
        {...fadeUp(0)}
        className="relative overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
      >
        {/* subtle corner glow */}
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          animate={{ x: ["-10%", "110%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="pointer-events-none absolute -top-10 h-28 w-28 rounded-full bg-secondary/10 blur-3xl"
        />

        <div className="grid grid-cols-1 md:grid-cols-[280px,1fr]">
          {/* Left Image */}
          <div className="p-5 md:p-6">
            <div className="overflow-hidden rounded-xl ring-1 ring-black/5">
              <motion.img
                src="/assets/jeep.png"
                alt="Jeep Independence Day merchandise campaign"
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="p-5 md:p-6 lg:p-8">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="section-title text-left"
            >
              <span className="mb-2 block">
                Digital Marketing for Automobile Brands | <br />
                Jeep India Independence Day Merchandise <br />
                by Ayatiworks
              </span>
            </motion.h2>

            {/* underline must be outside the <h2> */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[250px] mt-3 origin-left rounded-full"
            />

            <motion.p
              {...fadeUp(0.1)}
              className="mt-4 text-base md:text-lg font-secondary leading-7 text-black/80"
            >
              Discover how Ayatiworks transformed Jeep India’s Independence Day
              merchandise microsite , revamped UI/UX, catchy creatives, and a
              3-day social sprint that translated likes into ₹240K+ in sales.
            </motion.p>

            <motion.div {...fadeUp(0.15)} className="mt-8 text-left">
              {/* React Router Link styled as a button */}
              <MotionLink
                to="case-study/jeep"
                role="button"
                aria-label="Read Full Case Study"
                className="inline-flex items-center justify-center rounded-full bg-secondary/90 px-10 py-3 text-lg md:text-xl font-primary font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-secondary/40"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Read Full Case Study
              </MotionLink>
            </motion.div>
          </div>
        </div>
      </motion.article>

      {/* spacing */}
      <div className="h-16 sm:h-20" />

    </section>
  );
}
