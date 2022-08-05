import React from "react";
import { Link } from "react-router-dom";
import facebookIcon from "../assets/images/facebook.svg";
import twitterIcon from "../assets/images/twitter.svg";
import instagramIcon from "../assets/images/instagram.svg";
import linkedIcon from "../assets/images/linked.svg";

const aboutLinks = [
  { id: 1, link: '/', label: 'Our Company' },
  { id: 2, link: '/', label: 'How we Work' },
  { id: 3, link: '/', label: 'MVP' },
  { id: 4, link: '/', label: 'Startup' },
  { id: 5, link: '/', label: 'Careers' },
  { id: 6, link: '/', label: 'Contact Us' },
  { id: 7, link: '/', label: 'Blog' }
];

const serviceLinks = [
  { id: 1, link: '/', label: 'iOS App Development' },
  { id: 2, link: '/', label: 'Android app development' },
  { id: 3, link: '/', label: 'IoT Application Development' },
  { id: 4, link: '/', label: 'Software Development' },
  { id: 5, link: '/', label: 'Mobile App Design' },
  { id: 6, link: '/', label: 'React Native Development' }
];

const productLinks = [
  { id: 1, link: '/', label: 'Mobile Game Apps' },
  { id: 2, link: '/', label: 'HealthCare Apps' },
  { id: 3, link: '/', label: 'Government Apps' },
  { id: 4, link: '/', label: 'Enterprises Apps' },
  { id: 5, link: '/', label: 'Events & Entertainment Apps' }
];

const Footer = () => {
  return (
    <footer>
      <div className="section-container">
        <div className="footer-top-section">
          <div className="link-group-item">
            <h5>About Us</h5>
            <ul>
              {aboutLinks.map((linkItem) => (
                <li key={linkItem.id}>
                  <Link to={linkItem.link}>{linkItem.label}</Link>
                </li>
              ))}                            
            </ul>
          </div>
          <div className="link-group-item">
            <h5>Services</h5>
            <ul>
              {serviceLinks.map((linkItem) => (
                <li key={linkItem.id}>
                  <Link to={linkItem.link}>{linkItem.label}</Link>
                </li>
              ))}                            
            </ul>
          </div>
          <div className="link-group-item">
            <h5>Products</h5>
            <ul>
              {productLinks.map((linkItem) => (
                <li key={linkItem.id}>
                  <Link to={linkItem.link}>{linkItem.label}</Link>
                </li>
              ))}                            
            </ul>
          </div>
          <div className="link-group-item">
            <h5>Contact Us</h5>
            <ul>
              <li>                  
                <a href="tel:+55 90055-0011">+55 90055-0011</a>
              </li>
              <li>
                Street: Jhon Morgan 122  
              </li>
              <li>                
                <a href="mailto:gavian@mail.com">gavian@mail.com</a>
              </li>
              <li>                
                <Link to="/">EUA</Link>
              </li>                  
            </ul>
          </div>
        </div>        
      </div>
      <div className="footer-bottom-section">
        <div className="footer-bottom-section-container">
          <p>© 2022 Gavian Company</p>
          <div className="social-links">
            <li>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                <img src={facebookIcon} alt="" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                <img src={linkedIcon} alt="" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                <img src={instagramIcon} alt="" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                <img src={twitterIcon} alt="" />
              </a>
            </li>            
          </div>
        </div>        
      </div>
    </footer>
  );
};

export default Footer;