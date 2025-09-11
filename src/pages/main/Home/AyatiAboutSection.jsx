import React from "react";
import { motion } from "framer-motion";

export default function AyatiAboutSection() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut", delay },
    viewport: { once: true, amount: 0.3 },
  });

  return (
    <section className="section bg-white">
      <div className="mx-auto section-container">
        {/* HEADLINE */}
        <div className="relative">
          <motion.h2 className="section-title text-left" {...fadeUp(0)}>
            <span className="mb-2 block">
              Ayatiworks – Award-Winning Growth <br />
              Architects Since 2017
            </span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[350px] mt-3 origin-left rounded-full"
            />
          </motion.h2>
        </div>

        {/* MAIN GRID (12 columns) */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* LEFT COLUMN (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <motion.p
              className="text-xl font-secondary font-semibold text-black/80"
              {...fadeUp(0.1)}
            >
              What’s holding your brand back from its next big leap?
            </motion.p>

            <motion.div
              className="max-w-2xl bg-white p-5 shadow-lg ring-1 ring-black/5 hover:shadow-2xl"
              {...fadeUp(0.15)}
            >
              <p className="text-lg leading-7 text-primary font-secondary font-medium">
                <strong>Since 2017</strong>, Ayatiworks has been answering that
                question for brands across Chennai, India, and beyond. We’re not
                here to “run campaigns.” We’re here to design growth blueprints,
                power them with creative precision, and execute with ROI-driven
                focus.
              </p>
            </motion.div>

            <motion.p
              className="text-black/80 font-secondary text-lg leading-7"
              {...fadeUp(0.2)}
            >
              We’re an award-winning digital marketing agency in Chennai trusted by
              brands like Volvo, Nippo, Xiaomi, Herbale, and Tiger Foods. From
              startups finding their voice to established players scaling new
              markets, we make sure your brand isn’t just part of the conversation,
              it leads it.
            </motion.p>
          </div>

          {/* RIGHT COLUMN (4 cols) */}
          <motion.div
            className="lg:col-span-4 flex justify-end items-start"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="w-full overflow-hidden">
              <img
                src="/assets/home-quote.png"
                alt="Ayatiworks visual"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
