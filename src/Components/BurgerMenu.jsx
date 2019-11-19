import React, { useState } from 'react';
import {
  NavLink
} from "react-router-dom";

function BugerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <React.Fragment>
      <button className="navbar-toggler" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={ menuOpen ? 'navbar-collapse' : 'collapse navbar-collapse'}>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <NavLink 
              to="/settings"
              className="nav-link float-right"
              onClick={() => setMenuOpen(false)}
            >
              Connected Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              exact to="/"
              className="nav-link float-right"
              onClick={() => setMenuOpen(false)}
            >
              Map
            </NavLink>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default BugerMenu;
