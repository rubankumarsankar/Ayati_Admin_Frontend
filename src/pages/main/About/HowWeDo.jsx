import React from "react";

export default function HowWeDoIt() {
  return (
    <section className="py-12 px-6 md:px-16">
      {/* Heading & Intro */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <h2 className="text-3xl font-bold text-blue-800">
          How do we do it?
        </h2>
        <p className="text-gray-700 leading-relaxed">
          At AyatiWorks, we’re all about unlocking a digital gateway for our clients!
          Whether it’s sparking consumer conversations through brand marketing, launching
          online shopping sprees, building cool platforms for entertainment and finance,
          managing enterprise networks, or supercharging performance—we’ve got it covered!
          Our secret sauce? Practical, trustworthy, and dependable solutions that make your
          digital dreams a reality!
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="p-6 border border-gray-200 rounded-md shadow-md 
                        transition-all duration-300 cursor-pointer
                        hover:bg-blue-800 hover:text-white hover:shadow-xl">
          <h3 className="text-lg font-bold mb-3">
            Customized Social Media and Web Interactions
          </h3>
          <p className="text-sm leading-relaxed">
            Our squad of social media strategists is here to whip up captivating
            content that speaks to your audience’s heart! Need a campaign? We can
            take it from spark to spotlight in less than 24 hours—faster than you
            can say ‘viral sensation!’
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-6 border border-gray-200 rounded-md shadow-md 
                        transition-all duration-300 cursor-pointer
                        hover:bg-blue-800 hover:text-white hover:shadow-xl">
          <h3 className="text-lg font-bold mb-3">
            Using Influencer Marketing to Build Credibility
          </h3>
          <p className="text-sm leading-relaxed">
            Did you know a whopping 88% of consumers trust online reviews? Our
            Influencer tool connects you with trendsetting mavens across various
            industries, helping you build trust and reputation faster than you can
            say ‘influencer power!’
          </p>
        </div>
      </div>
    </section>
  );
}
