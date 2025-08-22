import { motion } from "framer-motion";
import {
  Rocket,
  Search,
  Target,
  ShieldCheck,
  BarChart,
  Trophy,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Discovery Call",
    desc: "Understand business goals, audience, and vision.",
    icon: Rocket,
  },
  {
    id: 2,
    title: "Comprehensive Audit",
    desc: "Evaluate digital presence, gaps, and opportunities.",
    icon: Search,
  },
  {
    id: 3,
    title: "KPI Strategy",
    desc: "Set clear objectives with measurable outcomes.",
    icon: Target,
  },
  {
    id: 4,
    title: "Implementation",
    desc: "Execute tailored growth frameworks across channels.",
    icon: ShieldCheck,
  },
  {
    id: 5,
    title: "Performance Tracking",
    desc: "Leverage analytics to refine and optimize campaigns.",
    icon: BarChart,
  },
  {
    id: 6,
    title: "Sustainable Growth",
    desc: "Deliver consistent, long-term business expansion.",
    icon: Trophy,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

export default function WaveTimeline() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* SVG Wave line */}
        <svg
          viewBox="0 0 1200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-40"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 C150,50 350,150 600,100 C850,50 1050,150 1200,100"
            stroke="url(#grad)"
            strokeWidth="4"
            fill="transparent"
          />
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#a21caf" />
            </linearGradient>
          </defs>
        </svg>

        {/* Timeline nodes and cards */}
        <ul className="relative grid grid-cols-6 gap-10">
          {steps.map((step, index) => (
            <TimelineCard key={step.id} step={step} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function TimelineCard({ step, index }) {
  const Icon = step.icon;
  const isTop = index % 2 === 0; // 1,3,5 top | 2,4,6 bottom
  const connectorDir = isTop ? "top-full" : "bottom-full";

  return (
    <motion.li
      className={`relative flex flex-col items-center ${
        isTop ? "-mb-28" : "-mt-28"
      }`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={index}
    >
      {/* Node on wave */}
      <div className="relative z-10 h-6 w-6 rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500 shadow-lg shadow-cyan-400/50">
        <span className="absolute inset-0 animate-ping rounded-full bg-cyan-400/40"></span>
      </div>

      {/* Connector line */}
      <div
        className={`absolute ${connectorDir} left-1/2 h-20 w-0.5 -translate-x-1/2 
        bg-gradient-to-b from-cyan-400/80 to-fuchsia-400/80`}
      />

      {/* Card */}
      <div
        className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur 
        p-6 shadow-[0_10px_30px_rgba(0,0,0,0.25)] w-52 text-center"
      >
        <div className="relative mb-4 grid h-14 w-14 place-items-center rounded-2xl 
        border border-white/10 bg-white/10 text-white mx-auto">
          <Icon className="h-7 w-7" />
          <span className="pointer-events-none absolute inset-0 -z-10 rounded-2xl 
          bg-gradient-to-br from-cyan-400/30 to-fuchsia-400/30 blur-xl" />
        </div>
        <h3 className="text-lg font-semibold text-white sm:text-xl">
          {String(step.id).padStart(2, "0")} — {step.title}
        </h3>
        <p className="mt-1 text-sm leading-6 text-slate-300 sm:text-base">
          {step.desc}
        </p>
      </div>
    </motion.li>
  );
}
