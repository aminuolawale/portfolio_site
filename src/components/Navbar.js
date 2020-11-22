import React, { useState, useEffect } from "react";
import mainLogo from "../img/main-logo.png";
import Button from "./Buttons";
import { animateScroll } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [dropdownActive, setDropdownActive] = useState(false);

  useEffect(() => {
    animateScroll.scrollTo(0);
  }, []);

  const isSmall = () => window.innerWidth <= 600;
  const homeScroll = () => {
    if (window.innerHeight) animateScroll.scrollTo(0);
  };

  const aboutScroll = () => {
    if (isSmall()) {
      animateScroll.scrollTo(540);
    } else {
      animateScroll.scrollTo(840);
    }
  };

  const experienceScroll = () => {
    if (isSmall()) {
      animateScroll.scrollTo(1400);
    } else {
      animateScroll.scrollTo(1685);
    }
  };

  const projectsScroll = () => {
    if (isSmall()) {
      animateScroll.scrollTo(2310);
    } else {
      animateScroll.scrollTo(2535);
    }
  };

  const contactScroll = () => {
    if (isSmall()) {
      animateScroll.scrollTo(5500);
    } else {
      animateScroll.scrollTo(4600);
    }
  };
  const responsiveHandler = (e) => {
    const nav = document.querySelector(".navbar__links");
    const toggler = document.querySelector(".navbar__toggler");
    if (!nav.contains(e.target) && !toggler.contains(e.target)) {
      setDropdownActive(false);
    }
  };
  useEffect(() => {
    if (dropdownActive) {
      document.addEventListener("click", responsiveHandler);
    } else {
      document.removeEventListener("click", responsiveHandler);
    }
  }, [dropdownActive]);
  return (
    <div className="navbar">
      <div className="navbar__header" onClick={homeScroll}>
        <img src={mainLogo} alt="main-logo"></img>
      </div>
      <ul className={`navbar__links ${dropdownActive ? "responsive" : ""}`}>
        <li className={`navbar__links__item`} onClick={aboutScroll}>
          About
        </li>
        <li className={`navbar__links__item`} onClick={experienceScroll}>
          Experience
        </li>
        <li className={`navbar__links__item`} onClick={projectsScroll}>
          Projects
        </li>
        <li className={`navbar__links__item`} onClick={contactScroll}>
          Contact
        </li>
        <li className={`navbar__links__item`}>
          <Button text="Resume" size="sm"></Button>
        </li>
      </ul>
      <div
        className="navbar__toggler"
        onClick={() => setDropdownActive(!dropdownActive)}
      >
        <GiHamburgerMenu size="30px"></GiHamburgerMenu>
      </div>
    </div>
  );
};

export default Navbar;
