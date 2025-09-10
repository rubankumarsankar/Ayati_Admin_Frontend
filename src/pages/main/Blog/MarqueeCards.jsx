// MarqueeCards.jsx
import { motion } from "framer-motion";

const cards = [
  {
    title: "Digital Marketing",
    text: "From SEO to Programmatic, discover how businesses build visibility, reach the right audiences, and scale growth through smart marketing.",
    img: "/assets/ms-1.png",
  },
  {
    title: "Content-as-Strategy",
    text: "When storytelling meets SEO. Learn how brands craft powerful narratives, win search rankings, and build authority with content that converts.",
    img: "/assets/ms-2.png",
  },
  {
    title: "Digital PR",
    text: "Reputation is currency. Explore how brands earn trust, build credibility, and secure media visibility through modern PR practices.",
    img: "/assets/ms-3.png",
  },
];

// Card UI (matches the look you shared: image + gradient + title/text)
function ServiceCard({ item }) {
  return (
    <div className="relative w-[280px] sm:w-[320px] md:w-[360px] h-[480px] shrink-0 rounded-2xl overflow-hidden shadow-lg">
      <img
        src={item.img}
        alt={item.title}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      {/* tint + vignette */}
      <div
        className={`absolute inset-0 bg-gradient-to-b ${item.tint} opacity-80`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      {/* text */}
      <div className="absolute bottom-0 w-full">
        {/* blurred glass background */}
        <div className="absolute inset-0 backdrop-blur-xs bg-black/30 rounded-b-2xl" />

        <div className="relative p-5 sm:p-6 text-white">
          <h3 className="text-lg sm:text-2xl font-medium font-primary">
            {item.title}
          </h3>
          <p className="mt-2 text-sm sm:text-base font-secondary leading-relaxed text-white/90">
            {item.text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SlowMarquee({ speed = 30, heading = " " }) {
  // Duplicate list for seamless loop
  const rows = [...cards, ...cards];

  return (
    <section className="section-container py-10 md:py-14">
      {/* Optional heading */}
      {heading?.trim() && (
        <div className="mb-6">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title text-left "
          >
            <span className="mb-2 block">{heading}</span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[350px] mt-3 origin-left rounded-full"
            />
          </motion.h2>
        </div>
      )}

      {/* Marquee wrapper with soft edge mask */}
      <div
        className="relative overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        {/* Track (200% width: content duplicated) */}
        <motion.div
          className="flex gap-6 md:gap-8 w-max"
          // animate from 0% to -50% (because items are duplicated)
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {rows.map((item, i) => (
            <ServiceCard key={`${item.title}-${i}`} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
