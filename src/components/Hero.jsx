import React from "react";
import Header from "./Header";
import mainImg from "../assets/images/hero.svg";

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <Header />
      <div className="section-container flex-block">
        <div className="text-section">
          <h1>A company focused on innovation in <span>software creation.</span></h1>
          <h3>We always seek the best way to help our customers with good agility.</h3>
          <div className="action-groups">
            <button className="btn primary-btn">Free Consultation</button>
            <button className="btn outline-btn">Read More</button>
          </div>
        </div>
        <div className="image-section">
          {/* <img src={mainImg} alt="" /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;