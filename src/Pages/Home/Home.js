import React from 'react';
import Navigation from '../Shared/Navigation';
import About from './About/About';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Portfolio from './Portfolio/Portfolio';
import Skill from './Skill/Skill';

const Home = () => {
    return (
        <div>
          <Navigation/>
          <Banner/>
          <About/>
          <Skill/>
          <Portfolio/>
          <Contact/>
        </div>
    );
};

export default Home;