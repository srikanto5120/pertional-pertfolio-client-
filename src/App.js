 
 
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from'react-router-dom'
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
       <Home/>
      </Router>
    </div>
  );
}

export default App;
