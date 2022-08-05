import React from "react";
import Hero from "../components/Hero";
import OurCompany from "../components/OurCompany";
import OurServices from "../components/OurServices";
import Testimonials from "../components/Testimonicals";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <OurCompany />
      <OurServices />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
