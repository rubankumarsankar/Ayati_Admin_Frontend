import { motion } from "framer-motion";

export default function SolutionsSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const cards = [
    {
      cat: "BRANDWIDTH",
      title: "CTRL + ALT + BRAND",
      icon: "/icon/brand.png",
      list: [
        "Branding Services",
        "Brand Positioning",
        "Creative Solutions",
        "Marketing Consulting",
        "Customer Acquisition",
      ],
    },
    {
      cat: "GRAM & GLORY",
      title: "The Vibe Bureaus",
      icon: "/icon/vibe.png",
      list: [
        "Influencer Marketing",
        "Instagram Marketing",
        "Social Media Strategy",
        "Community Engagement",
        "Performance Marketing",
      ],
    },
    {
      cat: "COMMERCECODE",
      title: "Click & Convert",
      icon: "/icon/click.png",
      list: [
        "Web Development",
        "Shopify / Magento",
        "Custom E-commerce",
        "Mobile App Development",
        "Payment Integration",
      ],
    },
    {
      cat: "PERFORMO",
      title: "Pixel Perfect",
      icon: "/icon/seo.png",
      list: [
        "SEO Services",
        "Programmatic Ads",
        "Performance Marketing",
        "Analytics & Tracking",
        "Email Marketing",
      ],
    },
    {
      cat: "CONTENTMENT ZONE",
      title: "Contentual Healing",
      icon: "/icon/content.png",
      list: [
        "Content Writing",
        "Blog & Copywriting",
        "Digital PR",
        "Marketing Strategy",
        "Content Consultancy",
      ],
    },
    {
      cat: "IDEATORIUM",
      title: "MadLab",
      icon: "/icon/madlab.png",
      list: [
        "Ad Campaign Strategy",
        "Creative Concepts",
        "Consumer Research",
        "Brand Thinking",
        "Marketing Innovation",
      ],
    },
  ];

  return (
    <section className="w-full section">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between items-center section-container mb-10"
      >
        <h3 className="section-title">What Ayati Brew’s</h3>
        <h3 className="text-secondary font-primary text-2xl sm:text-3xl lg:text-3xl text-center md:text-right">
          360 Integrated Solutions
        </h3>
      </motion.div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, y: -5 }}
            className="relative flex flex-col bg-white p-8 rounded-2xl shadow-lg h-[360px] transition-all duration-300"
          >
            {/* Vertical Label */}
            <div className="absolute inset-y-0 right-0 flex items-center justify-center">
              <span className="rotate-90 font-primary font-bold text-lg md:text-xl text-blue-600 tracking-widest whitespace-nowrap">
                {card.cat}
              </span>
            </div>

            {/* Title + Icon */}
            <div className="flex items-center gap-3 mb-6">
              <img src={card.icon} alt={card.title} className="w-12 h-12" />
              <h3 className="font-extrabold text-xl text-gray-800">
                {card.title}
              </h3>
            </div>

            {/* List */}
            <ul className="space-y-2 text-gray-600 text-sm flex-1 leading-relaxed">
              {card.list.map((service, j) => (
                <li key={j}>• {service}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-b border-black mt-10 section-container"></div>
    </section>
  );
}
