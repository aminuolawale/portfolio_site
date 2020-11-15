import React from "react";
import Button from "../components/Buttons";
import chevronRight from "../img/chevron-right.png";
import { animateScroll } from "react-scroll";
const About = () => {
  return (
    <div className="about">
      <div className="about__header" onClick={() => animateScroll.scrollTo(0)}>
        <h3>About Me</h3>
        <div className="about__header__rule"></div>
      </div>
      <div className="about__content">
        <div className="about__content__image">
          <div className="about__content__image__imageBorder"></div>
          <div className="about__content__image__img"></div>
        </div>
        <div className="about__content__text">
          <div className="about__content__text__p">
            <p>
              Hello! I am Aminu Mohammed, a Software Engineer based in Lagos,
              Nigeria.
            </p>
            <p>
              I have a passion for software and spend most of my time building
              software or tinkering with the ones that pique my interest. I
              mostly develop and maintain web and mobile applications and while
              I am not working, I enjoy reading science non-fiction books and
              some philosophy.
            </p>
            <p>
              I graduated from the University of Lagos, Nigeria, and after
              working as a motion graphics artist and 3D Animator for a while I
              joined the dev team at Sendbox where I develop and maintain an
              e-commerce and logistics platform used by tens of thousands of
              users daily.
            </p>
            <p>
              Below is the current snapshot of the ever-growing list of tools
              and technology I work with:
            </p>
          </div>
          <div className="about__content__text__techs">
            <ul>
              <li>
                <img
                  className="about__content__text__techs__listIcon"
                  src={chevronRight}
                ></img>
                Python
              </li>
              <li>
                <img
                  className="about__content__text__techs__listIcon"
                  src={chevronRight}
                ></img>
                Typescript
              </li>
              <li>
                <img
                  className="about__content__text__techs__listIcon"
                  src={chevronRight}
                ></img>
                Nodejs
              </li>
            </ul>
            <ul>
              <li>
                <img
                  className="about__content__text__techs__listIcon"
                  src={chevronRight}
                ></img>
                Javascript
              </li>
              <li>
                <img
                  className="about__content__text__techs__listIcon"
                  src={chevronRight}
                ></img>
                React
              </li>
              <li>
                <img
                  className="about__content__text__techs__listIcon"
                  src={chevronRight}
                ></img>
                Docker
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
