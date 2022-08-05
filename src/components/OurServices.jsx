import React from "react";
import mainImg1 from "../assets/images/service1.svg";
import mainImg2 from "../assets/images/service2.svg";
import icon1 from "../assets/images/service-item1.svg";
import icon2 from "../assets/images/service-item2.svg";
import icon3 from "../assets/images/service-item3.svg";
import icon4 from "../assets/images/service-item4.svg";

const services = [
  { id: 1, icon: icon1, label: 'Product Management' },
  { id: 2, icon: icon2, label: 'IOS Developement' },
  { id: 3, icon: icon3, label: 'Android Developement' },
  { id: 4, icon: icon4, label: 'Software Developement' }
]

const OurServices = () => {
  return (
    <section className="our-services" id="services">
      <h6 className="section-title">Our <span>Services</span></h6>
      <div className="section-container service-groups">
        {services.map((service) => (
          <div className="service-item" key={service.id}>
            <img src={service.icon} alt="" />
            <p>{service.label}</p>
          </div>
        ))}
      </div>
      <div className="first-section">
        <div className="section-container flex-block">
          <div className="text-section">
            <h1>Our App <span>Development Services</span></h1>
            <h3>We focus on delivering world-class quality and bespoke application development solutions that expand your reach, improve your customer engagement, and take your business to the next level.</h3>
            <div className="action-groups">
              <button className="btn primary-btn">Our Services</button>            
            </div>
          </div>
          <div className="image-section">
            <img src={mainImg1} alt="" />
          </div>
        </div>
      </div>
      <div className="second-section">
        <div className="section-container flex-block reverse">
          <div className="text-section">
            <h1>We Are Transforming the <span>Digital Landscape</span></h1>
            <h3>We take care of your business needs by bringing novel digital experiences to the table by flawlessly integrating design & development. Our team offers end-to-end full stack development services blended with</h3>
            <div className="action-groups">
              <button className="btn primary-btn">Free Consultation</button>            
            </div>
          </div>
          <div className="image-section">
            <img src={mainImg2} alt="" />
          </div>
        </div>
      </div>      
    </section>
  );
};

export default OurServices;