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
import { Title, Meta } from "react-head";

function ContactUs() {
  return (
    <>
      <>
        <Title>Contact Us</Title>
        <Meta
          name="description"
          content="Ready to grow your brand? Connect with Chennai’s top digital marketing experts today for tailored solutions that drive results! Reach out now!"
        />
      </>
      <HeroSection />
      <ContactInnerPage />
      <Form />
      <Address />
      <Digital />
      <Brand />
      <Map />
      <PartnersInClimb />
      <Location />

      <Connection />
    </>
  );
}

export default ContactUs;
