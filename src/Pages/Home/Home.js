import React from "react";

import About from "./About/About";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Projects from "./Portfolio/Projects";

import Skill from "./Skill/Skill";

const Home = () => {
  return (
    <div id="home">
      <Banner />
      <About />
      <Skill />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
