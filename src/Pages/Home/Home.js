import React from "react";
import Footer from "../Footer/Footer";
import Navigation from "../Shared/Navigation";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Projects from "./Portfolio/Projects";

import Skill from "./Skill/Skill";

const Home = () => {
  return (
    <div id="home">
      <Navigation />
      <Banner />
      <About />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
