import React from "react";
import { motion } from "framer-motion";

/** Our Edge: CaaS — Content as a Strategy */
export default function CaasEdgeSection() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut", delay },
    viewport: { once: true, amount: 0.3 },
  });

  return (
    <section className="section bg-white">
      <div className="section-container mx-auto px-5">
        {/* HEADLINE */}
        <motion.h2 className="section-title text-left" {...fadeUp(0)}>
          <span className="mb-2 block">
            Our Edge: CaaS - Content as a Strategy
          </span>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
            className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[350px] mt-3 origin-left rounded-full"
          />
        </motion.h2>
        {/* Grid: 3 cols image (left) / 9 cols content (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-10">
          {/* LEFT: Image (3 cols) */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className=" overflow-hidden ">
              {/* Replace with your image */}
              <img
                src="/assets/graph-1.png"
                alt="CaaS decorative"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* RIGHT: Content (9 cols) */}
          <div className="lg:col-span-9">
            {/* INTRO */}
            <motion.p
              {...fadeUp(0.05)}
              className="mt-3 max-w-3xl text-lg font-secondary leading-7 text-black/80"
            >
              In an online world overloaded with ads, posts, and noise, random
              content won’t cut it. That’s why we built our CaaS model: a 360°
              marketing approach that connects your brand strategy, creative
              execution, and media performance.
            </motion.p>

            {/* Mini CTA Card */}
            <motion.div {...fadeUp(0.12)} className="mt-5 ">
              <span className="font-medium text-primary font-primary text-2xl">
                Here’s how the CaaS works:
              </span>
            </motion.div>

            <motion.div
              {...fadeUp(0.18)}
              className="mt-3 inline-flex flex-col bg-white px-4 py-3 text-sm shadow-md ring-1 ring-black/5"
            >
              <button
                type="button"
                className=" text-left text-xl font-medium text-primary font-primary"
              >
                We’re all ears to clients
              </button>
              <span className="mt-1 text-primary font-secondary text-lg">
                Deep-dive brand audits and audience insights.
              </span>
            </motion.div>

            {/* LINES */}
            <div className="mt-8 space-y-5">
              <motion.p
                {...fadeUp(0.2)}
                className="text-xl leading-7 text-black"
              >
                <span className="block font-bold font-secondary text-xl">
                  We Plan with Precision
                </span>
                <span className="block mt-4 ml-1 font-secondary text-black/80">
                  Strategy aligned with business goals, not vanity metrics.
                </span>
              </motion.p>

              <motion.p
                {...fadeUp(0.26)}
                className="text-xl leading-7 text-black"
              >
                <span className="block font-bold font-secondary text-xl">
                  We Execute Seamlessly
                </span>
                <span className="block mt-4 ml-1 font-secondary text-black/80">
                  Creative, media, and analytics under one roof.
                </span>
              </motion.p>

              <motion.p
                {...fadeUp(0.32)}
                className="text-xl leading-7 text-black"
              >
                <span className="block font-bold font-secondary text-xl">
                  We Measure Relentlessly
                </span>
                <span className="block mt-4 ml-1 font-secondary text-black/80">
                  Continuous optimization for maximum ROI.
                </span>
              </motion.p>
            </div>

            {/* FOOTER PARAGRAPH */}
            <motion.p
              {...fadeUp(0.38)}
              className="mt-6 max-w-3xl text-lg leading-7 font-secondary text-black/80"
            >
              From ideation to execution, every Ayatiworks project is powered by
              “Ayati Intelligence.” Our collaborative process weaves
              strategists, designers, media experts, and data analysts who work
              as a single team.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
