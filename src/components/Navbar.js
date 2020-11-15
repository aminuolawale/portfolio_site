import React from "react";
import abstract from "../img/abstract.png";
import mainLogo from "../img/main-logo.png";
import Button from "./Buttons";
import { animateScroll } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__header">
        <img src={mainLogo} alt="abstract"></img>
      </div>
      <ul className="navbar__links">
        <li
          className="navbar__links__item"
          onClick={() => animateScroll.scrollTo(840)}
        >
          About
        </li>
        <li className="navbar__links__item">Experience</li>
        <li className="navbar__links__item">Work</li>
        <li className="navbar__links__item">Contact</li>
        <li className="navbar__links__item">
          <Button text="Resume" size="sm"></Button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
