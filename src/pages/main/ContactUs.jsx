import React from "react";
import HeroSection from "./Home/HeroSection";
import Connection from "./Teams/Connection";
import Contact from "./Contact/Contact";
import Location from "./Contact/Location";
import Form from "./Contact/Form";
import Address from "./Contact/Address";
import Brand from "./Contact/Brand";
import Digital from "./Contact/Digital";
import Map from "./Contact/Map";
import Client from "./Contact/Client";

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
      <Client />
      <Connection />
    </>
  );
}

export default HomePage;
