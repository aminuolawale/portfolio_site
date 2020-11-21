import React from "react";
import { animateScroll } from "react-scroll";
import ListItem from "../components/ListItem";
const About = () => {
  return (
    <div className="about">
      <div className="about__header" onClick={() => animateScroll.scrollTo(0)}>
        <h3>About Me</h3>
        <div className="about__header__rule"></div>
      </div>
      <div className="about__content">
        <div className="about__content__image">
          <div className="about__content__image__img"></div>
          <div className="about__content__image__imageBorder"></div>
        </div>
        <div className="about__content__text">
          <div className="about__content__text__p">
            <p>
              Hi I am Aminu Olawale, a Software Engineer based in Lagos,
              Nigeria.
            </p>
            <p>
              I love making cool things with computers. I started out as a 3D
              Animator making short animated films and adverts and got drawn
              into the world of software engineering, particularly game
              development. The web grew on me and I soon found myself building
              and deploying web applications. I love the dynamism and speed of
              evolution of web technologies and I find it exciting to always
              have something new to learn everyday.
            </p>
            <p>
              Below is the current snapshot of the ever-growing list of tools
              and technologies I work with:
            </p>
          </div>
          <div className="about__content__text__techs">
            <ul>
              <ListItem>Python</ListItem>
              <ListItem>Javascript/Typescript</ListItem>
              <ListItem>Nodejs</ListItem>
            </ul>
            <ul>
              <ListItem>React/React-Native</ListItem>
              <ListItem>Golang</ListItem>
              <ListItem>Docker</ListItem>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
