import React from "react";
import githubLogo from "../img/github-logo.png";
import externalIcon from "../img/external-icon.png";
import hotelShowcase from "../img/hotel-showcase.png";
const Projects = () => {
  return (
    <div className="projects">
      <div className="projects__header">
        <h3>Some things I have built</h3>
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
              <img src={githubLogo}></img>
            </li>
            <li>
              <img src={externalIcon} />
            </li>
          </ul>
        </div>
        <div className="projects__content__image">
          <img src={hotelShowcase}></img>
        </div>
      </div>
    </div>
  );
};

export default Projects;
