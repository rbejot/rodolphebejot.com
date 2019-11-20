import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import Portfolio from './Portfolio';
import About from './About';

function App() {

  const MenuItem = ({ path, name }) => (
    <div className="flex-1">
      <span>
        <NavLink exact to={path} activeClassName="active">{name}</NavLink>
      </span>
    </div>
  );

  return (
    <Router>
      <div className="container flex column center">
        <div className="menu flex content-typo normal-typo-size">
          {/* TODO: Add My Ressources menu, https://dev.to/jsmanifest/22-miraculous-tools-for-react-developers-in-2019-4i46  */}
          <MenuItem path="/" name={'Portfolio'} />
          {/* <MenuItem path="/code" name={'Code'} /> */}
          {/* <MenuItem path="/music" name={'Musique'} /> */}
          <MenuItem path="/about" name={'À propos'} />
        </div>

        <div className="content flex column center">
          <Switch>
              {/* <Route path="/code">
                <div className="card">
                  
                </div>
              </Route> */}
              {/* <Route path="/music">
                <h1>Musique</h1>
              </Route> */}
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
                <Portfolio />
              </Route>
          </Switch>
        </div>
      <footer className="flex center content-typo little-typo-size">&copy; Site crée par mes soins - {new Date().getFullYear()}</footer>
      </div>
    </Router>
  );
}

export default App;
