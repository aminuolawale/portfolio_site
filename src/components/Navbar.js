import React from "react";
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
        <li
          className="navbar__links__item"
          onClick={() => animateScroll.scrollTo(1585)}
        >
          Experience
        </li>
        <li
          className="navbar__links__item"
          onClick={() => animateScroll.scrollTo(2485)}
        >
          Projects
        </li>
        <li
          className="navbar__links__item"
          onClick={() => animateScroll.scrollTo(4600)}
        >
          Contact
        </li>
        <li className="navbar__links__item">
          <Button text="Resume" size="sm"></Button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
