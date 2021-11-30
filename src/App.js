import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home";
import Details from "./Pages/Home/Portfolio/Details/Details";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          {/* <Route exact path="/projects">
            <Details />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
