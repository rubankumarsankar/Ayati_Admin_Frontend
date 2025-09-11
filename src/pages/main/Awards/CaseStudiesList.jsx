import { motion } from "framer-motion";

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Automobile Excellence - Volvo",
      description:
        "Our collaboration with Volvo began over 3 years ago and continues to thrive. Together, we’ve elevated their brand presence across Chennai and Tamil Nadu, running hyper-local campaigns that strengthened engagement and dealership-level conversions.",
      image: "/assets/case-car.png",
      link: "#",
    },
    {
      title: "Retail & E-Commerce Growth",
      description:
        "A D2C brand teamed up with Ayatiworks to scale online visibility. Through SEO, performance ads, and social campaigns, we achieved 130% growth in organic traffic and an 85% rise in sales within 6 months.",
      image: "/assets/Tiger.png",
      link: "#",
    },
    {
      title: "Healthcare - Domestic & International Impact",
      description:
        "We’ve partnered with both domestic and international healthcare providers to enhance visibility and patient acquisition. From clinics in Chennai to global health brands in the USA & UAE, our campaigns improved keyword rankings and patient trust across markets.",
      image: "/assets/siva-hospital.png",
      link: "#",
    },
    {
      title: "Technology & SaaS Expansion - Domestic & International",
      description:
        "A leading SaaS company Dataquel has collaborated with Ayatiworks from inception, ideation, execution and results. We have co-created a demand generation content framework to penetrate the market to generate 70% qualified traffic from the target audience in California.",
      image: "/assets/Tiger.png",
      link: "#",
    },
    {
      title: "Beauty & Personal Care Marketing",
      description:
        "Our influencer-led Instagram campaigns helped a Chennai-based salon chain engage more customers. This strategy delivered a 200% increase in interactions and rapid expansion into new franchise locations across Tamil Nadu.",
      image: "/assets/Royal-dutch.png",
      link: "#",
    },
    {
      title: "Real Estate Client Testimonial",
      description:
        "For a leading real estate developer, VGN Properties, Ayatiworks manages website development, landing page design, PPC campaigns, social media marketing, and ongoing web maintenance. This integrated approach not only generated quality leads but also built a steady digital presence that continues to attract homebuyers.",
      image: "/assets/vgn.png",
      link: "#",
    },
    {
      title: "The School That Schooled Us - APL Global School",
      description:
        "From website maintenance to managing their complete presence on Meta, X, and more, Ayatiworks ensures APL Global School stays consistently visible, engaging, and connected with parents and students online.",
      image: "/assets/apl-img.png",
      link: "#",
    },
    {
      title: "The Steel Deal - Apex Dura TMT",
      description:
        "As a 360° digital partner, we manage Apex Dura’s website, social media, creatives, and digital PR, building a durable digital foundation that matches the strength of their product.",
      image: "/assets/apex-hands.png",
      link: "#",
    },
  ];

  return (
    <section className="section py-16 bg-gray-50">
      <div className="section-container mx-auto max-w-6xl px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <div className="inline-block">
            <h2 className="section-title">Case Studies & Success Stories</h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-[200px] mt-3 origin-left rounded-full mx-auto"
            />
          </div>

          <p className="text-lg font-secondary text-gray-600 mt-2">
            Real results we’ve delivered across industries.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col"
            >
              {/* Image */}
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-56 object-cover"
              />

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-medium font-primary text-primary mb-3">
                  {study.title}
                </h3>
                <p className="text-gray-600 font-secondary text-sm flex-grow">
                  {study.description}
                </p>

                {/* Button */}
                <a
                  href={study.link}
                  className="mt-6 inline-block font-primary bg-primary text-white px-5 py-2 rounded-full text-sm font-medium shadow-md hover:bg-secondary transition self-start"
                >
                  Read More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
