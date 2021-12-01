import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home";
import Details from "./Pages/Home/Portfolio/Details/Details";
import Navigation from "./Pages/Shared/Navigation";
import Footer from "./Pages/Footer/Footer";
import Blogs from "./Pages/Home/Blogs/Blogs";
import About from "./Pages/Home/About/About";
import Projects from "./Pages/Home/Portfolio/Projects";
import Contact from "./Pages/Home/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/blog">
            <Blogs />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/projects/:id">
            <Details />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
