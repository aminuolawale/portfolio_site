import React from "react";
import Button from "../components/Buttons";
import { animateScroll } from "react-scroll";
import { FaGithub, FaLinkedinIn, FaTwitter, FaPhone } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import PhoneNumber from "react-phone-number";
const Contact = () => {
  return (
    <div className="contact">
      <h3 className="contact__header" onClick={() => animateScroll.scrollTo(0)}>
        Contact me
      </h3>
      <p className="contact__text">
        Feel free to contact me through any of these channels. I'll make sure to
        get back to you.
      </p>
      <div>
        <ul className="contact__links">
          <li className="contact__links__item ">
            {/* <FaPhone size="50px"></FaPhone> */}
            <PhoneNumber number="+2348111279627" isLinked={true} />
          </li>
          <li className="contact__links__item">
            <a href={"mailto:aminuolawalekan@gmail.com"}>
              <FiMail size="50px"></FiMail>
            </a>
          </li>
          <li className="contact__links__item">
            <a href="https://github.com/aminuolawale">
              <FaGithub size="50px"></FaGithub>
            </a>
          </li>
          <li className="contact__links__item">
            <a href="https://www.linkedin.com/in/mohammed-aminu-b94468195">
              <FaLinkedinIn size="50px"></FaLinkedinIn>
            </a>
          </li>
          <li className="contact__links__item">
            <a href="https://twitter.com/aminuolawalekan">
              <FaTwitter size="50px"></FaTwitter>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
