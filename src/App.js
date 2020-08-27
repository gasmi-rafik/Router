import React from "react";
import Home from './component/Home';
import About from './component/About' ;
import Users from './component/Users' ;
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (

    <div>
    <Router>
      
        <nav>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>


        <Switch>
          <Route exact path="/Home" component={Home}>
            <Home />
          </Route>
          <Route exact path="/About" component={About}>
            <About />
          </Route>
          <Route exact path="/Users" component={Users}>
            <Users />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
