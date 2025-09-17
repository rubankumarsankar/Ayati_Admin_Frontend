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

import SEO from "../../components/SEO";

function ContactUs() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Ready to grow your brand? Connect with Chennai’s top digital marketing experts today for tailored solutions that drive results! Reach out now!"
        canonical="https://www.ayatiworks.com/contact-us"
      />
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
