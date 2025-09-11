import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

/* ========= CONFIG ========= */
const items = [
  {
    no: "01",
    color: "bg-amber-100",
    title: "360° marketing without juggling multiple vendors.",
    tilt: "-rotate-[12deg]",
    pos: "md:col-start-1 md:justify-self-start",
  },
  {
    no: "02",
    color: "bg-blue-100",
    title: "Faster campaign rollouts with in-house production & strategy.",
    tilt: "rotate-[18deg]",
    pos: "md:col-start-2 md:justify-self-end",
  },
  {
    no: "03",
    color: "bg-violet-200",
    title: "Transparent reporting and ROI clarity.",
    tilt: "-rotate-[10deg]",
    pos: "md:col-start-1 md:justify-self-start",
  },
  {
    no: "04",
    color: "bg-amber-100",
    title: "Scalable solutions for local and global markets.",
    tilt: "rotate-[12deg]",
    pos: "md:col-start-2 md:justify-self-end",
  },
];

export default function BenefitsTimeline() {
  const fade = (d = 0) => ({
    initial: { opacity: 0, y: 26 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut", delay: d },
    viewport: { once: true, amount: 0.35 },
  });

  // Refs to cards and container
  const containerRef = useRef(null);
  const cardRefs = useMemo(
    () => Array.from({ length: items.length }, () => React.createRef()),
    []
  );
  const [paths, setPaths] = useState(["", "", ""]);

  useLayoutEffect(() => {
    const update = () => {
      const wrap = containerRef.current;
      if (!wrap) return;

      const wrapRect = wrap.getBoundingClientRect();
      const anchors = cardRefs.map((r, idx) => {
        const el = r.current;
        const rect = el?.getBoundingClientRect();
        if (!rect) return null;

        const midY = rect.top + rect.height / 2 - wrapRect.top;
        // left col (1,3) get RIGHT anchor; right col (2,4) get LEFT anchor
        const isRightCol = (idx + 1) % 2 === 0;
        const x = isRightCol ? rect.left - wrapRect.left : rect.right - wrapRect.left;
        return { x, y: midY, rect, isRightCol };
      });

      const newPaths = [];
      // 1 -> 2
      if (anchors[0] && anchors[1]) {
        newPaths[0] = curveBetween(anchors[0], anchors[1], 80);
      }
      // 2 -> 3
      if (anchors[1] && anchors[2]) {
        newPaths[1] = curveBetween(anchors[1], anchors[2], 80);
      }
      // 3 -> 4
      if (anchors[2] && anchors[3]) {
        newPaths[2] = curveBetween(anchors[2], anchors[3], 80);
      }
      setPaths(newPaths);
    };

    const ro = new ResizeObserver(update);
    ro.observe(document.body);
    update();
    return () => ro.disconnect();
  }, [cardRefs]);

  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      {/* Lined paper background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(#f2f4f7_1px,transparent_1px)] bg-[length:100%_34px]"
      />

      <div className="mx-auto max-w-5xl px-5">
        {/* Heading */}
        <motion.h2
          {...fade(0)}
          className="text-2xl sm:text-3xl md:text-[32px] font-extrabold tracking-tight text-blue-900"
        >
          The Benefits of Partnering with Us
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-2 h-1 w-40 sm:w-56 bg-blue-700 rounded-full origin-left"
        />

        {/* Grid + Curves */}
        <div
          ref={containerRef}
          className="relative mt-10 grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-y-16"
        >
          {/* Responsive dashed curves */}
          <svg className="pointer-events-none absolute inset-0 -z-0 hidden md:block" width="100%" height="100%">
            {paths.map(
              (d, i) =>
                d && (
                  <path
                    key={i}
                    d={d}
                    stroke="#c7d2fe"
                    strokeWidth="4"
                    strokeDasharray="6 10"
                    strokeLinecap="round"
                    fill="none"
                  />
                )
            )}
          </svg>

          {items.map((it, idx) => (
            <motion.div
              key={it.no}
              {...fade(0.1 * (idx + 1))}
              className={`${it.pos} px-2`}
              ref={cardRefs[idx]}
            >
              <motion.article
                whileHover={{
                  rotate: it.tilt.includes("-") ? -2 : 2,
                  y: -4,
                }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                className={`relative isolate w-[min(390px,100%)] rounded-2xl bg-white p-4 shadow-[0_10px_35px_rgba(16,24,40,0.12)] ring-1 ring-black/5 ${it.tilt}`}
              >
                <div className={`rounded-xl ${it.color} p-4 pr-5 sm:p-5 shadow-inner`}>
                  <div className="mb-3 flex items-center gap-3">
                    <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-md bg-white px-2 text-[13px] font-extrabold text-blue-900 ring-1 ring-black/5 shadow">
                      {it.no}
                    </span>
                  </div>
                  <p className="text-[14px] leading-6 text-gray-800">{it.title}</p>
                </div>
                <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b from-white/40 to-transparent" />
              </motion.article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Quadratic curve helper: start {x,y} to end {x,y}, with horizontal pull */
function curveBetween(a, b, pull = 80) {
  if (!a || !b) return "";
  // If going left→right, pull control point towards the middle with horizontal bias
  const dir = Math.sign(b.x - a.x) || 1;
  const cx = (a.x + b.x) / 2 + dir * pull;
  const cy = (a.y + b.y) / 2;
  // Use a smooth quadratic curve
  return `M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y}`;
}
