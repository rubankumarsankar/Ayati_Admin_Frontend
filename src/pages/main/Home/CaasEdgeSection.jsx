import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/** Our Edge: CaaS — Content as a Strategy */
export default function CaasEdgeSection() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: prefersReducedMotion ? {} : { opacity: 0, y: 20 },
    whileInView: prefersReducedMotion ? {} : { opacity: 1, y: 0 },
    transition: prefersReducedMotion
      ? { duration: 0 }
      : { duration: 0.6, ease: "easeOut", delay },
    viewport: { once: true, amount: 0.3 },
  });

  return (
    <section className="section bg-white">
      <div className="section-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADLINE */}
        <motion.h2 className="section-title text-left" {...fadeUp(0)}>
          <span className="mb-2 block">Our Edge: CaaS - Content as a Strategy</span>
          <motion.div
            initial={prefersReducedMotion ? {} : { scaleX: 0 }}
            whileInView={prefersReducedMotion ? {} : { scaleX: 1 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.6, ease: "easeInOut", delay: 0.3 }
            }
            className="bg-secondary h-1 w-32 sm:w-48 md:w-72 lg:w-[350px] mt-3 origin-left rounded-full"
            aria-hidden="true"
          />
        </motion.h2>

        {/* Grid: Mobile 1 col, lg 12 col */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 py-8 sm:py-10">
          {/* LEFT: Image — hidden on mobile/tablet */}
          <motion.div
            className="hidden lg:block lg:col-span-3"
            initial={prefersReducedMotion ? {} : { opacity: 0, x: -30 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.6, ease: "easeOut" }
            }
            viewport={{ once: true }}
          >
            <div className="overflow-hidden">
              <img
                src="/assets/graph-1.png"
                alt=""
                aria-hidden="true"
                className="w-full h-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>

          {/* RIGHT: Content */}
          <div className="lg:col-span-9 space-y-6">
            {/* INTRO */}
            <motion.p
              {...fadeUp(0.05)}
              className="mt-2 sm:mt-3 max-w-3xl text-base sm:text-lg font-secondary leading-6 sm:leading-7 text-black/80"
            >
              In an online world overloaded with ads, posts, and noise, random
              content won’t cut it. That’s why we built our CaaS model: a 360°
              marketing approach that connects your brand strategy, creative
              execution, and media performance.
            </motion.p>

            {/* Mini CTA */}
            <motion.div {...fadeUp(0.12)} className="mt-4 sm:mt-5">
              <span className="font-medium text-primary font-primary text-xl sm:text-2xl">
                Here’s how the CaaS works:
              </span>
            </motion.div>

            {/* LINES */}
            <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-5">
              <motion.p {...fadeUp(0.2)} className="text-black">
                <span className="block font-bold font-secondary text-lg sm:text-xl">
                  We’re all ears to clients
                </span>
                <span className="block mt-2 sm:mt-4 ml-1 font-secondary text-black/80 text-base sm:text-lg">
                  Deep-dive brand audits and audience insights.
                </span>
              </motion.p>

              <motion.p {...fadeUp(0.2)} className="text-black">
                <span className="block font-bold font-secondary text-lg sm:text-xl">
                  We Plan with Precision
                </span>
                <span className="block mt-2 sm:mt-4 ml-1 font-secondary text-black/80 text-base sm:text-lg">
                  Strategy aligned with business goals, not vanity metrics.
                </span>
              </motion.p>

              <motion.p {...fadeUp(0.26)} className="text-black">
                <span className="block font-bold font-secondary text-lg sm:text-xl">
                  We Execute Seamlessly
                </span>
                <span className="block mt-2 sm:mt-4 ml-1 font-secondary text-black/80 text-base sm:text-lg">
                  Creative, media, and analytics under one roof.
                </span>
              </motion.p>

              <motion.p {...fadeUp(0.32)} className="text-black">
                <span className="block font-bold font-secondary text-lg sm:text-xl">
                  We Measure Relentlessly
                </span>
                <span className="block mt-2 sm:mt-4 ml-1 font-secondary text-black/80 text-base sm:text-lg">
                  Continuous optimization for maximum ROI.
                </span>
              </motion.p>
            </div>

            {/* FOOTER PARAGRAPH */}
            <motion.p
              {...fadeUp(0.38)}
              className="mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg leading-6 sm:leading-7 font-secondary text-black/80"
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
