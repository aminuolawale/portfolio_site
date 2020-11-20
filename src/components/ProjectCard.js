import React from "react";
import openedFolder from "../img/opened-folder.png";
import githubLogo from "../img/github-logo.png";
import externalIcon from "../img/external-icon.png";

const ProjectCard = (props) => {
  return (
    <div className="projectCard">
      <div className="projectCard__top">
        <img src={openedFolder}></img>
        <ul>
          <li>
            <img src={githubLogo}></img>
          </li>
          <li>
            <img src={externalIcon}></img>
          </li>
        </ul>
      </div>
      <h4 className="projectCard__title">{props.title}</h4>
      <p className="projectCard__text">{props.text}</p>
      <ul className="projectCard__tools">
        {props.tools.map((tool) => (
          <li>{tool}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
