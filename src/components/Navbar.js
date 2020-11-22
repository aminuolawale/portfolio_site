import React, { useState, useEffect } from "react";
import mainLogo from "../img/main-logo.png";
import Button from "./Buttons";
import { animateScroll } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [focus, setFocus] = useState("home");
  const [dropdownActive, setDropdownActive] = useState(false);

  const homeScroll = () => {
    animateScroll.scrollTo(0);
    setFocus("home");
  };

  const aboutScroll = () => {
    animateScroll.scrollTo(840);
    setFocus("about");
  };

  const experienceScroll = () => {
    animateScroll.scrollTo(1685);
    setFocus("experience");
  };

  const projectsScroll = () => {
    animateScroll.scrollTo(2535);
    setFocus("projects");
  };

  const contactScroll = () => {
    animateScroll.scrollTo(4600);
    setFocus("contact");
  };
  const responsiveHandler = (e) => {
    console.log(e.target);
    const nav = document.querySelector(".navbar__links");
    if (!nav.contains(e.target)) {
      setDropdownActive(false);
    }
  };
  useEffect(() => {
    if (dropdownActive) {
      console.log("activated");
      document.addEventListener("click", responsiveHandler);
    } else {
      console.log("deactivated");
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
