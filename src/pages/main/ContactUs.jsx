import React from "react";
import HeroSection from "./Home/HeroSection";
import Contact from "./contact/contact";
import Location from "./contact/Location";
import Form from "./contact/Form";
import Address from "./contact/Address";
import Brand from "./contact/Brand";
import Digital from "./contact/Digital";
import Map from "./contact/Map";
import Client from "./contact/Client";
import Connection from "./Home/Connection";
import PartnersInClimb from "./Home/PartnersInClimb";

function ContactUs() {
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

export default ContactUs;
