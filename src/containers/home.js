import React from "react";
import Button from "../components/Buttons";
import abstract from "../img/abstract.png";
import GlitchClip from "react-glitch-effect/core/Clip";
import { animateScroll } from "react-scroll";
const Home = () => {
  return (
    <div className="hero">
      <div className="hero__text">
        <div className="hero__text__accent"></div>
        <p className="hero__text__intro">Hello, my name is</p>
        <h1 className="hero__text__main">Aminu Olawale.</h1>
        <p className="hero__text__sub">I build software.</p>
        <p className="hero__text__p">
          I am a Software Engineer based in Lagos, Nigeria specialized in
          developing and maintaining web/mobile apps, API’s, and microservices.
        </p>
        <div className="hero__text__button">
          <Button
            text="Get in touch"
            size="md"
            action={() => animateScroll.scrollTo(4600)}
          ></Button>
        </div>
      </div>
      <div className="hero__image">
        <GlitchClip duration="10s">
          <img src={abstract}></img>
        </GlitchClip>
      </div>
    </div>
  );
};
export default Home;
