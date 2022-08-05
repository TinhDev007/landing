import React from "react";
import mainImg from "../assets/images/company.svg";

const OurCompany = () => {
  return (
    <section className="our-company" id="about">
      <h6 className="section-title">Our <span>Company</span></h6>
      <div className="section-container flex-block reverse">
        <div className="text-section">
          <h1>A company specializing in <span>application</span> and <span>website</span> development</h1>
          <h3>Canada’s best minds under one roof. The architects of a digital tomorrow, united under the banner of AppStudio.</h3>
          <div className="action-groups">
            <button className="btn primary-btn">Our Company</button>
            <button className="btn outline-btn">Learn More</button>
          </div>
        </div>
        <div className="image-section">
          <img src={mainImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default OurCompany;