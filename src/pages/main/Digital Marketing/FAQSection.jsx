import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "1. What is influencer marketing and how does it work?",
    answer:
      "Influencer marketing is a strategy where brands collaborate with digital creators who have strong online following to promote products or services. It works by leveraging trust and engagement influencers have with their audience.",
  },
  {
    question: "2. Why should I choose an influencer marketing agency in Chennai?",
    answer:
      "Local agencies understand the market better and can provide targeted strategies that suit regional audience preferences.",
  },
  {
    question: "3. How do I select the right influencer for my brand?",
    answer:
      "You should select influencers whose audience aligns with your target demographic, ensuring authenticity and higher engagement.",
  },
  {
    question: "4. What platforms are best for influencer marketing campaigns?",
    answer:
      "Platforms like Instagram, YouTube, and TikTok are highly effective depending on your brand niche and target audience.",
  },
  {
    question: "5. How is ROI measured in influencer marketing?",
    answer:
      "ROI is measured by engagement, conversions, brand awareness, and overall campaign performance metrics.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section bg-white">
      <div className="section-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-10 text-center"
        >
          <h2 className="section-title font-bold text-center mb-3">
            Frequently Asked Questions
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
            className="bg-secondary h-1 w-[300px] mt-2 mx-auto origin-left"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border shadow-xl bg-white p-4"
              >
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium font-primary text-2xl text-primary">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-primary text-xl"
                  >
                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                  </motion.span>
                </button>

                {/* Animated Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-secondary font-secondary text-lg leading-6 mt-3">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Right: Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col items-center text-center space-y-6"
          >
            <div>
              <img
                src="/assets/faq-img.png"
                alt="FAQ Illustration"
                className="w-full max-w-sm"
              />
            </div>
            <h3 className="section-title">Any Questions?</h3>
            <p className="text-black font-secondary text-base max-w-md">
              You can ask anything you want to know. Feedback welcome.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
