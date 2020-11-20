import React from "react";
import githubLogo from "../img/github-logo.png";
import externalIcon from "../img/external-icon.png";
import hotelShowcase from "../img/hotel-showcase.png";
import homeBlissShowcase from "../img/homebliss-showcase.png";
import { animateScroll } from "react-scroll";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects__header">
        <h3 onClick={() => animateScroll.scrollTo(0)}>
          Some things I have built
        </h3>
        <div className="projects__header__rule"></div>
      </div>
      <div className="projects__content">
        <div>
          <div className="projects__content__header">
            <p>Featured Project</p>
            <h4>Placely</h4>
          </div>
          <p className="projects__content__detail">
            UI and mockups for an application/web service that eases the process
            of relocating to new place or finding somwhere to stay during a trip
            that will last long enough for a hotel to prove too expensive.
          </p>
          <ul className="projects__content__techs">
            <li>Gatsby</li>
            <li>Figma</li>
            <li>Reactjs</li>
            <li>Places API</li>
          </ul>
          <ul className="projects__content__links">
            <li>
              <img src={githubLogo} alt="logo"></img>
            </li>
            <li>
              <img src={externalIcon} alt="logo" />
            </li>
          </ul>
        </div>
        <div className="projects__content__image">
          <img src={hotelShowcase} alt="logo"></img>
        </div>
      </div>
      <div className="projects__content">
        <div>
          <div className="projects__content__header">
            <p>Featured Project</p>
            <h4>Homebliss</h4>
          </div>
          <p className="projects__content__detail">
            UI and mockups for an application/web service that eases the process
            of relocating to new place or finding somwhere to stay during a trip
            that will last long enough for a hotel to prove too expensive.
          </p>
          <ul className="projects__content__techs">
            <li>Gatsby</li>
            <li>Figma</li>
            <li>Reactjs</li>
            <li>Places API</li>
          </ul>
          <ul className="projects__content__links">
            <li>
              <img src={githubLogo} alt="logo"></img>
            </li>
            <li>
              <img src={externalIcon} alt="logo" />
            </li>
          </ul>
        </div>
        <div className="projects__content__image">
          <img src={homeBlissShowcase} alt="logo"></img>
        </div>
      </div>
    </div>
  );
};

export default Projects;
