import React from "react";
import HeroSection from "./Home/HeroSection";
import Connection from "./Home/Connection";
import CareerSectionPage from "./Careers/CareerSectionPage";
import JoinUsTimeline from "./Careers/JoinUsTimeline";
import LetsConnectForm from "./Careers/LetsConnectForm";
import LifeAtAyatiworks from "./Careers/LifeAtAyatiworks";
import RolesMarquee from "./Careers/RolesMarquee";
import CareersLastSection from "./Careers/CareersLastSection";
import PartnersInClimb from "./Home/PartnersInClimb";

import SEO from "../../components/SEO";

const steps = [
  { title: "Impact Every Day", subtitle: "" },
  { title: "Learn Without Limits", subtitle: "" },
  { title: "Culture That Cares", subtitle: "" },
  { title: "Future-Ready Growth", subtitle: "" },
];

function CareersPage() {
  return (
    <>
      <SEO
        title="Careers - Ayatiworks"
        description="Join a dynamic team shaping the future of digital marketing in Chennai! Exciting career opportunities await. Kickstart your journey today!"
        canonical="https://www.ayatiworks.com/careers"
      />
      <HeroSection />
      <CareerSectionPage />
      <JoinUsTimeline steps={steps} />
      {/* <LetsConnectForm /> */}
      <LifeAtAyatiworks />
      <PartnersInClimb />

      <RolesMarquee />
      <CareersLastSection />
      <Connection />
    </>
  );
}

export default CareersPage;
