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
          title="Time to have more fun"
          text="A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS"
          tools={["Nextjs", "SASS", "Firebase"]}
        ></ProjectCard>
        <ProjectCard
          title="Time to have more fun"
          text="A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS"
          tools={["Nextjs", "SASS", "Firebase"]}
        ></ProjectCard>
        <ProjectCard
          title="Time to have more fun"
          text="A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS"
          tools={["Nextjs", "SASS", "Firebase"]}
        ></ProjectCard>
        <ProjectCard
          title="Time to have more fun"
          text="A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS"
          tools={["Nextjs", "SASS", "Firebase"]}
        ></ProjectCard>
        <ProjectCard
          title="Time to have more fun"
          text="A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS"
          tools={["Nextjs", "SASS", "Firebase"]}
        ></ProjectCard>
        <ProjectCard
          title="Time to have more fun"
          text="A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS"
          tools={["Nextjs", "SASS", "Firebase"]}
        ></ProjectCard>
      </div>
      <div className="otherProjects__button">
        <Button text="Show more" size="md"></Button>
      </div>
    </div>
  );
};

export default OtherProjects;
