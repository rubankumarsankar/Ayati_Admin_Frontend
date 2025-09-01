import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dottedBg from "/assets/dotted-bg.png";
const years = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017];

// Content for each year
const yearContent = {
  2025: {
    title: "The Year of Utsah",
    text: `This year at Ayatworks, we’re embracing Utsah—the enthusiasm and
    energy that fuel everything we do. For us, Utsah means approaching
    every challenge with positivity, bringing fresh ideas to the table,
    and creating meaningful work that makes a difference. It’s about
    going the extra mile for our clients, supporting each other as a
    team, and finding joy in every milestone, big or small. As we step
    into 2025, Utsah reminds us to stay passionate, stay inspired, and
    stay connected. Here’s to a year of growth, creativity, and
    purpose—powered by Utsah! Let’s make it unforgettable!`,
  },
  2024: {
    title: "The Year of Unnati",
    text: `Welcome to the Year of Unnati, our eighth chapter bursting with
    victories and resilience! Every challenge we’ve tackled has blossomed
    into sweet rewards, showcasing our drive for progress. This year,
    we’re not just counting coins but celebrating experiences, knowledge,
    and shared wins. Standing tall at the summit of success, the spirit
    of Unnati is launching us into a future brimming with promise and
    opportunities galore! Let’s soar together!`,
  },
  2023: {
    title: "The Year of Fruition",
    text: `“Patience is the mother of all virtues” – and boy, did we take
    that to heart! As we enter our 7th year, our hard work is finally
    paying off, and we’re ready to savor the fruits of our labor. With
    hope in our hearts, fresh insights, and stronger goals, we’re striding
    forward. At AyatiWorks, the next big thing is upon us now!`,
  },
  2022: {
    title: "The Year of Blooming",
    text: `With our mark set in the digital sky, it’s time to bloom! Our new
    workplace is ready to rock with 5 fabulous departments: Creative,
    Content, Strategy, Web & Product Development, Social Media, and
    Client Success. At AyatiWorks, we’re not just growing; we’re soaring
    into the future! Next stop? The Now!`,
  },
  2021: {
    title: "The Year of Recognition",
    text: `Five years in, and we’re flexing our digital muscles! We proudly
    claimed the title of the best digital interactive tech company out
    there and snagged the award for “Excellence in Digital Marketing.”
    Our pioneer clients stuck with us, and new ones flocked in for our
    magic touch. With all this buzz, our team grew to an awesome 20 pros
    ready to rock the digital world!`,
  },
  2020: {
    title: "The Year We Hoped and Hustled",
    text: `COVID hit, lockdowns came, but we didn’t let that stop our groove.
    Our team grew from 10 to 15, and so did our client list! Nova Life
    Space, Vels Group, Indian Terrain, Royal Enfield, and Benelli jumped
    on board, and we helped them soar. 2020 kept our hopes high and
    crowned us Best Brand of Tamil Nadu. Not bad for a “lockdown year,”
    right?`,
  },
  2019: {
    title: "The Year We Leveled Up",
    text: `If 2018 was a win, 2019 was a boss battle! Big names like Xiaomi,
    Siva Hospitals, Dr. Cecy, and Hyundai joined our roster, proving our
    digital magic was spot on. But wait, there’s more! We created our very
    own learning management system for the Singapore Government (yep, we
    went BIG). And our team? Grew to 10 legends ready to take on the
    world!`,
  },
  2018: {
    title: "The Year We Went Global (And Doubled Up!)",
    text: `Turning one never felt so good! We went from helping local legends
    to landing our first overseas client—schools in Singapore! With our ROI
    wizardry, they trusted us to deliver. Our team? Went from 2 to 6 in no
    time! New clients like Pettikadai, Vinayak Motors, and Noritake joined
    the fun, making 2018 a year packed with promise and big wins!`,
  },
  2017: {
    title: "The Year We Went from Zero to Zoom!",
    text: `It all kicked off with two dreamers and a wild idea. We started by
    helping small brands and startups find their digital feet. But before
    we knew it, bigger players like Kesavardhini and Syscom knocked on our
    door, wanting a slice of our digital magic! With our offbeat
    strategies, we didn’t just help them grow — we blasted their digital
    sales into the stratosphere!`,
  },
};

export default function YearSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto slider every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % years.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentYear = years[activeIndex];
  const { title, text } = yearContent[currentYear];

  return (
    <section className="bg-white section">
      <div className="section-container mx-auto">
        {/* Timeline Nav */}
        <div className="flex items-center justify-center text-sky-600 font-bold mb-12 overflow-x-auto relative">
          {/* Left Arrow */}
          <button
            className="text-blue-600 px-2"
            onClick={() =>
              setActiveIndex((prev) => (prev - 1 + years.length) % years.length)
            }
          >
            ◀
          </button>

          {/* Timeline */}
          <div className="flex items-center">
            {years.map((year, idx) => (
              <div key={year} className="flex items-center">
                <div
                  className={`px-3 p-2 cursor-pointer relative transition ${
                    idx === activeIndex
                      ? "text-secondary font-medium font-primary"
                      : "text-secondary font-normal font-primary"
                  }`}
                  onClick={() => setActiveIndex(idx)}
                >
                  {idx === activeIndex && (
                    <>
                      <div className="absolute top-0 left-0 right-0 h-1 bg-primary/60 "></div>
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary/60 "></div>
                    </>
                  )}
                  {year}
                </div>
                {idx !== years.length - 1 && (
                  <div className="w-14 h-0.5 bg-primary/60 mx-1"></div>
                )}
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            className="text-blue-600 px-2"
            onClick={() => setActiveIndex((prev) => (prev + 1) % years.length)}
          >
            ▶
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left - Content */}
          <div>
            <h2 className="text-secondary font-primary text-lg sm:text-xl md:text-2xl lg:text-3xl leading-snug max-w-xl">
              {title}
            </h2>
            <span className="block w-20 h-1 bg-sky-500 mb-6"></span>
            <p className="text-gray-700 font-secondary leading-relaxed mb-6">
              {text}
            </p>
          </div>

          {/* Right - Vertical Auto Slider */}
          <div
            className="relative flex items-center justify-center h-64 overflow-hidden"
            style={{
              backgroundImage: `url(${dottedBg})`,
              backgroundSize: "cover",
              backgroundRepeat: "repeat",
            }}
          >
            {/* Animated Years - Vertical Stack */}
            <div className="flex flex-col items-center justify-center space-y-6">
              <AnimatePresence initial={false}>
                {years.map((year, idx) => {
                  const offset = idx - activeIndex;

                  // Only show current, prev, and next
                  if (Math.abs(offset) > 1) return null;

                  const isActive = idx === activeIndex;
                  return (
                    <motion.div
                      key={year}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{
                        opacity: isActive ? 1 : 0.3,
                        y: 0,
                        scale: isActive ? 1.3 : 1,
                      }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{ duration: 0.6 }}
                      className={`font-primary font-extrabold ${
                        isActive
                          ? "text-5xl text-secondary"
                          : "text-3xl text-gray-400"
                      }`}
                    >
                      {year}
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="border-b border-primary h-1 mt-8 sm:mt-10 section-container"
      ></motion.div>
    </section>
  );
}
