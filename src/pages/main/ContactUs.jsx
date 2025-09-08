import React from "react";
import HeroSection from "./Home/HeroSection";
import Location from "./ContactPage/Location";
import Form from "./ContactPage/Form";
import Address from "./ContactPage/Address";
import Brand from "./ContactPage/Brand";
import Digital from "./ContactPage/Digital";
import Map from "./ContactPage/Map";
import Client from "./ContactPage/Client";
import Connection from "./Home/Connection";
import PartnersInClimb from "./Home/PartnersInClimb";
import ContactInnerPage from "./ContactPage/ContactInnerPage";

function ContactUs() {
  return (
    <>
      <HeroSection />
      < ContactInnerPage/>
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
