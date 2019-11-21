import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Icon } from 'semantic-ui-react'

function BugerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <React.Fragment>
      <button className="navbar-toggler" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={ menuOpen ? 'navbar-collapse' : 'collapse navbar-collapse'}>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-2">
          <li className="nav-item">
            <NavLink 
              to="/settings"
              className="nav-link float-right"
              onClick={() => setMenuOpen(false)}
            >
              Connected Services
              <Icon className="ml-3" name='exchange' />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              exact to="/"
              className="nav-link float-right"
              onClick={() => setMenuOpen(false)}
            >
              Map
              <Icon className="ml-3" name='map outline' />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              exact to="/landing-page"
              className="nav-link float-right"
              onClick={() => setMenuOpen(false)}
            >
              Home
              <Icon className="ml-3" name='home' />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              exact to="/landing-page"
              className="nav-link float-right"
              onClick={() => setMenuOpen(false)}
            >
              Profile
              <Icon className="ml-3" name='user outline' />
            </NavLink>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default BugerMenu;
