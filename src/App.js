import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from "./LandingPage"
import Header from "./Header"
import Footer from "./Footer"
import './App.css';



function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
        </Switch>
        <Footer/>
      </Router>    
    </div>
  );
}

export default App;
