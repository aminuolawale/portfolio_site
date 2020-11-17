import Layout from "./containers/layout";
import Home from "./containers/home";
import "./sass/main.scss";
import About from "./containers/about";
import { Helmet } from "react-helmet";
import WorkExperience from "./containers/workExperience";
import Projects from "./containers/projects";
import OtherProjects from "./containers/otherProjects";

function App() {
  return (
    <div>
      <Helmet>
        <title>Aminu Olawale - Software Engineer</title>
      </Helmet>
      <Layout>
        <Home></Home>
        <About></About>
        <WorkExperience></WorkExperience>
        <Projects></Projects>
        <OtherProjects></OtherProjects>
      </Layout>
    </div>
  );
}

export default App;
