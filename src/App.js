import Layout from "./containers/layout";
import Home from "./containers/home";
import "./sass/main.scss";
import About from "./containers/about";
import { Helmet } from "react-helmet";
import WorkExperience from "./containers/workExperience";
import Projects from "./containers/projects";
import OtherProjects from "./containers/otherProjects";
import Contact from "./containers/contact";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import Abstract from "./img/abstract.png";
import { motion } from "framer-motion";
import GlitchClip from "react-glitch-effect/core/Clip";

function App() {
  const [firstAnim, setFirstAnim] = useState(true);
  useEffect(() => {
    setTimeout(() => setFirstAnim(false), 2500);
  }, []);
  return (
    <div className="app">
      <Helmet>
        <title>Aminu Olawale - Software Engineer</title>
      </Helmet>
      {firstAnim ? (
        <motion.div
          className="app__load"
          animate={{ opacity: 0 }}
          transition={{ duration: 2.5 }}
        >
          <GlitchClip duration="4.5s">
            <img src={Abstract} alt="abstract-loading"></img>
          </GlitchClip>
        </motion.div>
      ) : (
        <Layout>
          <Home></Home>
          <About></About>
          <WorkExperience></WorkExperience>
          <Projects></Projects>
          <OtherProjects></OtherProjects>
          <Contact></Contact>
          <Footer></Footer>
        </Layout>
      )}
    </div>
  );
}

export default App;
