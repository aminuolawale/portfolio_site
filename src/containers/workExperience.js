import React, { useState } from "react";
import ListItem from "../components/ListItem";
import { animateScroll } from "react-scroll";

const WorkExperience = () => {
  const [view, setView] = useState("sendbox");
  return (
    <div className="workExperience">
      <div className="workExperience__header">
        <h3 onClick={() => animateScroll.scrollTo(0)}>Where I have worked</h3>
        <div className="workExperience__header__rule"></div>
      </div>
      <div className="workExperience__content">
        <div className="workExperience__content__menu">
          <div className="workExperience__content__menu__border"></div>
          <ul>
            <li
              className={`workExperience__content__menu__listItem ${
                view === "sendbox" && "active"
              }`}
              onClick={() => setView("sendbox")}
            >
              Sendbox
            </li>
            <li
              className={`workExperience__content__menu__listItem ${
                view === "mindmantle" && "active"
              }`}
              onClick={() => setView("mindmantle")}
            >
              MindMantle
            </li>
            <li
              className={`workExperience__content__menu__listItem ${
                view === "dammac" && "active"
              }`}
              onClick={() => setView("dammac")}
            >
              Dammac Global
            </li>
          </ul>
        </div>
        {view === "sendbox" && (
          <div className="workExperience__content__view">
            <div className="workExperience__content__view__header">
              <h4>
                Software Engineer <span>@Sendbox</span>
              </h4>
              <p>Dec 2019 - present</p>
            </div>
            <div className="workExperience__content__view__content">
              <ul>
                <ListItem>
                  Developed and maintained the firm’s core infrastructure and
                  services
                </ListItem>
                <ListItem>
                  Carried out Data analytics and reporting on the firm’s
                  financial performance.
                </ListItem>
                <ListItem>
                  Implemented a realtime monitoring system for the firm's
                  logistics services.
                </ListItem>
                <ListItem>
                  Developed inhouse tools to speed up product development
                  life-cycles.
                </ListItem>
              </ul>
            </div>
          </div>
        )}
        {view === "mindmantle" && (
          <div className="workExperience__content__view">
            <div className="workExperience__content__view__header">
              <h4>
                3D Animator <span>@Mindmantle</span>
              </h4>
              <p>Jan 2018 - Oct 2019</p>
            </div>
            <div className="workExperience__content__view__content">
              <ul>
                <ListItem>
                  Created digital assets for short animated features, games and
                  adverts
                </ListItem>
                <ListItem>
                  Developed plugins in Maya Embedded Language and Python for
                  production pipeline enhancement
                </ListItem>
              </ul>
            </div>
          </div>
        )}
        {view === "dammac" && (
          <div className="workExperience__content__view">
            <div className="workExperience__content__view__header">
              <h4>
                Tech Operations Intern <span>@Dammac Global</span>
              </h4>
              <p>May 2016 - Dec 2016</p>
            </div>
            <div className="workExperience__content__view__content">
              <ul>
                <ListItem>
                  Installation and maintenance of telephony equipment at
                  Transmission stations.
                </ListItem>
                <ListItem>Inventory management</ListItem>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkExperience;
