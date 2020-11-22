import React from "react";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Buttons";
import { animateScroll } from "react-scroll";

const OtherProjects = () => {
  return (
    <div className="otherProjects">
      <div className="otherProjects__header">
        <h3 onClick={() => animateScroll.scrollTo(0)}>
          Other Noteworthy Projects
        </h3>
        <p>View the archive</p>
      </div>
      <div className="otherProjects__grid">
        <ProjectCard
          title="Project Title"
          text="A project description will go here soon. You can always come back to check"
          tools={["Tool1", "Tool2", "Tool3"]}
        ></ProjectCard>
        <ProjectCard
          title="Project Title"
          text="A project description will go here soon. You can always come back to check"
          tools={["Tool1", "Tool2", "Tool3"]}
        ></ProjectCard>
        <ProjectCard
          title="Project Title"
          text="A project description will go here soon. You can always come back to check"
          tools={["Tool1", "Tool2", "Tool3"]}
        ></ProjectCard>
        <ProjectCard
          title="Project Title"
          text="A project description will go here soon. You can always come back to check"
          tools={["Tool1", "Tool2", "Tool3"]}
        ></ProjectCard>
        <ProjectCard
          title="Project Title"
          text="A project description will go here soon. You can always come back to check"
          tools={["Tool1", "Tool2", "Tool3"]}
        ></ProjectCard>
        <ProjectCard
          title="Project Title"
          text="A project description will go here soon. You can always come back to check"
          tools={["Tool1", "Tool2", "Tool3"]}
        ></ProjectCard>
      </div>
      <div className="otherProjects__button">
        <Button text="Show more" size="md"></Button>
      </div>
    </div>
  );
};

export default OtherProjects;
