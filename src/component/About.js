import React from 'react'
import Facebook from './Router/Facebook';
import Twitter from './Router/Twitter';
import Instagram from './Router/Instagram';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function About() {
    return (
        <div>
            <h1> About Page</h1>
            <Router>
                <ul>
                    <li><Link to="/Facebook">Facebook </Link></li>
                    <li><Link to="/Instagram">Instagram</Link></li>
                    <li><Link to="Twitter">Twitter</Link></li>
                </ul>
                <Switch>
                    <Route exact path ="/Facebook" component={Facebook}>
                        <Facebook/>
                        </Route>

                        <Route exact path to="/Instagram" component={Instagram}>
                            <Instagram/>

                        </Route>

                        <Route exact path to="/Twitter" component={Twitter}>
                            <Twitter/>
                        </Route>
                </Switch>



            </Router>
        </div>
    )
}

export default About