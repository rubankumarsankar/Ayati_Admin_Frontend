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
      cat: "",
      title: "Digital Marketing Services",
      icon: "/assets/good-vibe.png",
      list: [
        "SEO Services",
        "Social Media Marketing",
        "Email Marketing",
        "Instagram Marketing",
        "Affiliate Marketing",
        "Programmatic Marketing",
        "Media Planning & Performance Marketing",
        "Digital Media Planning & Buying",
        "Video Marketing",
      ],
    },
    {
      cat: "",
      title: "Content as a Service",
      icon: "/assets/good-vibe.png",
      list: [
        "Brand Consultant",
        "Video Production",
        "Video Creation",
        "Creative Marketing",
        "Brand Strategy & Positioning",
        "Media Planning & Performance Marketing",
        "Interactive Social Media",
        "Multi-lingual Marketing",
      ],
    },
    {
      cat: "",
      title: "Digital PR Service",
      icon: "/assets/good-vibe.png",
      list: [
        "Digital PR",
        "Influencer Marketing",
        "Online Reputation & Media Outreach",
      ],
    },
    {
      cat: "",
      title: "Web & E-commerce",
      icon: "/assets/good-vibe.png",
      list: [
        "UX/UI Design",
        "Web Development Services",
        "Web Maintenance Services",
        "Shopify Development Services",
        "E-commerce",
      ],
    },
  ];

  return (
    <section className="w-full section">
      {/* Title Section */}
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

      {/* Cards Grid */}
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
            className="relative flex flex-col bg-white p-8 rounded-2xl shadow-lg h-[450px] transition-all duration-300"
          >
            {/* Vertical Label (optional, currently empty) */}
            {card.cat && (
              <div className="absolute inset-y-0 right-0 flex items-center justify-center">
                <span className="rotate-90 font-primary font-bold text-3xl text-secondary tracking-widest whitespace-nowrap">
                  {card.cat}
                </span>
              </div>
            )}

            {/* Title + Icon */}
            <div className="flex items-center gap-3 mb-4">
              <h3 className="font- font-primary text-secondary text-3xl flex-1">
                {card.title}
              </h3>
              <img
                src={card.icon}
                alt={`${card.title} Icon`}
                className="w-18 h-18 object-contain"
              />
            </div>

            {/* Services List */}
            <ul className="space-y-2 text-black/80 uppercase font-secondary font-semibold text-base flex-1 leading-relaxed text-left">
              {card.list.map((service, j) => (
                <li key={j}>{service}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="border-b border-black mt-8 sm:mt-10 section-container"
      ></motion.div>
    </section>
  );
}
