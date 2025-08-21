import React from "react";
import HeroSection from "./Home/HeroSection";
import Contact from "./Contact/Contact";
import Location from "./Contact/Location";
import Form from "./Contact/Form";
import Address from "./Contact/Address";
import Brand from "./Contact/Brand";
import Digital from "./Contact/Digital";
import Map from "./Contact/Map";
import Client from "./Contact/Client";
import Connection from "./Home/Connection";
import PartnersInClimb from "./Home/PartnersInClimb";

function HomePage() {
  return (
    <>
      <HeroSection />
      <Contact />
      <Location />
      <Form />
      <Address />
      <Digital />
      <Brand />
      <Map />
      <PartnersInClimb />
      <Connection />
    </>
  );
}

export default HomePage;
