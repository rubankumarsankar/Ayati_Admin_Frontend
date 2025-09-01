import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

const benefits = [
  {
    title: "Measurable ROI",
    desc: "Every click, lead, and conversion can be tracked in real time.",
  },
  {
    title: "Precision Targeting",
    desc: "Reach the right audience, at the right time, with the right message.",
  },
  {
    title: "Cost Efficiency",
    desc: "Compared to TV, print, or outdoor ads, digital platforms deliver higher returns at lower spends.",
  },
  {
    title: "Scalability",
    desc: "Campaigns can be scaled up or optimized instantly depending on performance.",
  },
  {
    title: "Customer Engagement",
    desc: "Two-way conversations with your audience build trust and loyalty.",
  },
];

export default function BenefitsSlider() {
  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Benefits of Digital Marketing
        </h2>
        <p className="text-gray-600 mt-2">
          A well-executed digital marketing strategy delivers benefits that traditional marketing cannot.
        </p>
      </div>

      {/* ✅ Swiper Slider */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="max-w-3xl mx-auto"
      >
        {benefits.map((item, i) => (
          <SwiperSlide key={i}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 text-base">{item.desc}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Extra Note for Chennai */}
      <div className="max-w-3xl mx-auto mt-10 text-center">
        <p className="text-gray-700">
          For businesses in <span className="font-semibold">Chennai</span>, these benefits translate into brand differentiation and growth in a highly saturated market. Imagine launching a new product and reaching thousands of potential buyers within days, not weeks. Or building a content strategy that establishes you as an industry authority.
        </p>
      </div>
    </section>
  );
}
