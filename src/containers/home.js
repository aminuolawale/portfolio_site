import React from "react";
import Button from "../components/Buttons";
import abstract from "../img/abstract.png";
import GlitchClip from "react-glitch-effect/core/Clip";
import { animateScroll } from "react-scroll";
const Home = () => {
  const isSmall = () => window.innerWidth <= 600;
  const handleScroll = () => {
    if (isSmall()) {
      animateScroll.scrollTo(5500);
    } else {
      animateScroll.scrollTo(4600);
    }
  };
  return (
    <div className="hero">
      <div className="hero__text">
        <div className="hero__text__accent"></div>
        <p className="hero__text__intro">Hello, my name is</p>
        <h1 className="hero__text__main">Aminu Olawale.</h1>
        <p className="hero__text__sub">I build software.</p>
        <p className="hero__text__p">
          I am a Software Engineer based in Lagos, Nigeria. I develop and
          maintain web and mobile apps, API’s, and microservices.
        </p>
        <div className="hero__text__button">
          <Button text="Contact Me" size="md" action={handleScroll}></Button>
        </div>
      </div>
      <div className="hero__image">
        <GlitchClip onHover={true}>
          <img src={abstract} alt="abstractw"></img>
        </GlitchClip>
      </div>
    </div>
  );
};
export default Home;
