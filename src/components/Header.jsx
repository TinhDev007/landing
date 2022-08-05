import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import LogoImg from "../assets/images/logo.svg";
import MenuImg from "../assets/images/menu.svg";
import CloseImg from "../assets/images/close.png";

const Header = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [visibleMobileMenu, setVisibleMobileMenu] = useState(false);

  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    window.addEventListener('scroll', handleActiveLink);
    return () => {
        window.removeEventListener('scroll', isSticky);
        window.addEventListener('scroll', handleActiveLink);
    };
  });

       
  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
      const header = document.querySelector('.header-section');
      const scrollTop = window.scrollY;
      scrollTop >= 156 ? header.classList.add('sticky') : header.classList.remove('sticky');
  };

  const handleActiveLink = (e) => {
    const links = ['home', 'about', 'services', 'technologies'];
    setActiveLink('');
    if (window.scrollY === 0) {
      setActiveLink('home');
    }
    for(const link of links) {
      const element = document.getElementById(link);
      if (element) {
        const clientTop = element.offsetTop;
        const clientHeight = element.clientHeight;
        if ((window.scrollY + 2 < clientTop + clientHeight) && (window.scrollY + 2 > clientTop)) {
          setActiveLink(link);
          return;
        }
      }
    }
  };

  const handleMobileMenuClick = (link) => {
    setVisibleMobileMenu(false);
    setActiveLink(link);
  };

  return (
    <header className="header-section">
      <div className="header-container">
        <img src={LogoImg} alt="" />
        <div className="header-main-content mobile-hidden">
          <HashLink smooth to="#top" className={activeLink === 'home' ? 'active' : ''} onClick={() => setActiveLink('home')}>Home</HashLink>
          <HashLink smooth to="/#about" className={activeLink === 'about' ? 'active' : ''}  onClick={() => setActiveLink('about')}>About Us</HashLink>
          <HashLink smooth to="/#services" className={activeLink === 'services' ? 'active' : ''} onClick={() => setActiveLink('services')}>Services</HashLink> 
          <HashLink smooth to="/#technologies" className={activeLink === 'technologies' ? 'active' : ''} onClick={() => setActiveLink('technologies')}>Technologies</HashLink>
        </div>
        <HashLink smooth to="/#technologies" className="btn primary-btn small mobile-hidden" onClick={() => setActiveLink('technologies')}>Contact Us</HashLink>
        <img src={MenuImg} className="menu-icon desktop-hidden" alt="" onClick={() => setVisibleMobileMenu(true)} />
      </div>
      <div className={`desktop-hidden mobile-menu ${visibleMobileMenu ? 'move-to-right' : 'move-to-left'}`}>
        <img src={CloseImg} alt="" className="close-icon" onClick={() => setVisibleMobileMenu(false)} />
        <div className="mobile-menu-content">
          <ul>
            <li>
              <HashLink smooth to="#top" className={activeLink === 'home' ? 'active' : ''} onClick={() => handleMobileMenuClick('home')}>Home</HashLink>
            </li>
            <li>
              <HashLink smooth to="/#about" className={activeLink === 'about' ? 'active' : ''}  onClick={() => handleMobileMenuClick('about')}>About Us</HashLink>
            </li>
            <li>
              <HashLink smooth to="/#services" className={activeLink === 'services' ? 'active' : ''} onClick={() => handleMobileMenuClick('services')}>Services</HashLink>
            </li>
            <li>
              <HashLink smooth to="/#technologies" className={activeLink === 'technologies' ? 'active' : ''} onClick={() => handleMobileMenuClick('technologies')}>Technologies</HashLink>
            </li>
            <li>
              <HashLink smooth to="/#technologies" className="btn primary-btn small" onClick={() => handleMobileMenuClick('technologies')}>Contact Us</HashLink>
            </li>
          </ul>
        </div>
      </div>         
    </header>
  );
};

export default Header;