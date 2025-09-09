import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  { id: "/icon/1.png", title: "Discovery Call", desc: "Understand business goals, audience, and vision." },
  { id: "/icon/2.png", title: "Comprehensive Audit", desc: "Evaluate digital presence, gaps, and opportunities." },
  { id: "/icon/3.png", title: "KPI-Driven Strategy", desc: "Define success metrics aligned to business outcomes." },
  { id: "/icon/4.png", title: "Tailored Campaign Planning", desc: "Build strategies for SEO, PPC, and DBC funnels." },
  { id: "/icon/5.png", title: "Creative Execution", desc: "Design & deploy creatives across digital platforms." },
  { id: "/icon/6.png", title: "Content Marketing", desc: "Develop valuable, consistent, and SEO-rich content." },
  { id: "/icon/7.png", title: "Ad Optimization", desc: "Continuously test and refine paid campaigns." },
  { id: "/icon/8.png", title: "Automation Setup", desc: "Implement CRMs, email flows, and lead nurturing." },
  { id: "/icon/9.png", title: "Analytics & Reporting", desc: "Track ROI, KPIs, and provide transparent reporting." },
  { id: "/icon/10.png", title: "Growth Scaling", desc: "Expand reach with data-backed scaling strategies." },
];

export default function GrowthFramework() {
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    let isThrottled = false;

    const handleWheel = (e) => {
      if (isThrottled) return;

      if (e.deltaY > 0) {
        setShowSecond(true);
      } else if (e.deltaY < 0) {
        setShowSecond(false);
      }

      isThrottled = true;
      setTimeout(() => {
        isThrottled = false;
      }, 800);
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  const variants = {
    hiddenDown: { opacity: 0, y: 100 },
    hiddenUp: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
    exitDown: { opacity: 0, y: -100 },
    exitUp: { opacity: 0, y: 100 },
  };

  return (
    <div className="relative bg-white section overflow-hidden h-screen flex flex-col justify-center">
      {/* Title */}
      <div className="section-container mx-auto text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold"
        >
          <span className="mb-2 flex items-start">
            Our 10-Step Growth Framework
          </span>
          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
            className="bg-secondary h-1 w-[280px] mt-3 origin-left rounded-full"
          />
        </motion.h2>
        <p className="mt-5 text-black/80 font-secondary font-medium mb-2 text-base sm:text-lg">
          Our 10-step approach ensures measurable, ROI-driven growth for every client.
        </p>
      </div>

      {/* Wave Line */}
      <div className="absolute top-[200px] left-0 w-full -translate-y-1/2 z-0">
        {/* <img
          src="/assets/line-1.png"
          alt="wave line"
          className="w-full h-auto object-contain"
        /> */}
      </div>

      {/* Animate Steps (1-5 or 6-10) */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <AnimatePresence mode="wait">
          {!showSecond ? (
            <motion.div
              key="first"
              initial="hiddenDown"
              animate="visible"
              exit="exitDown"
              variants={variants}
              transition={{ duration: 0.7 }}
              className="flex justify-between gap-8"
            >
              {steps.slice(0, 5).map((step, index) => (
                <div
                  key={step.id}
                  className={`w-1/5 flex flex-col items-center px-4 ${
                    index % 2 === 0 ? "mb-36" : "mt-36"
                  }`}
                >
                  <div className="w-16 h-16 mb-6">
                    <img src={step.id} alt={step.title} />
                  </div>
                  <h3 className="font-primary text-xl sm:text-2xl text-center mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-800 font-secondary text-sm sm:text-base text-center leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="second"
              initial="hiddenUp"
              animate="visible"
              exit="exitUp"
              variants={variants}
              transition={{ duration: 0.7 }}
              className="flex justify-between gap-8"
            >
              {steps.slice(5, 10).map((step, index) => (
                <div
                  key={step.id}
                  className={`w-1/5 flex flex-col items-center px-4 ${
                    index % 2 === 0 ? "mb-36" : "mt-36"
                  }`}
                >
                  <div className="w-16 h-16 mb-6">
                    <img src={step.id} alt={step.title} />
                  </div>
                  <h3 className="font-primary text-xl sm:text-2xl text-center mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-800 font-secondary text-sm sm:text-base text-center leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Text */}
      <div className="max-w-4xl mx-auto text-center mt-20 px-6">
        <p className="text-black/80 font-secondary font-medium mb-2 text-base sm:text-lg">
          At Ayatiwork, our 10-step framework isn’t just about execution, it’s about building a reliable growth engine for your brand. With clarity, creativity, and consistency, we help you scale smarter, faster, and stronger.
        </p>
        <a
          href="/contact-us"
          className="text-blue-700 font-semibold mt-4 inline-block"
        >
          Ready to start your growth journey?
        </a>
      </div>
    </div>
  );
}
