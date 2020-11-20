import React from "react";
import Button from "../components/Buttons";
import { animateScroll } from "react-scroll";

const Contact = () => {
  return (
    <div className="contact">
      <h3 className="contact__header" onClick={() => animateScroll.scrollTo(0)}>
        Get In Touch
      </h3>
      <p className="contact__text">
        Although I'm not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I'll
        try my best to get back to you!
      </p>
      <div className="contact__button">
        <Button text="Say hello" size="md"></Button>
      </div>
    </div>
  );
};

export default Contact;
