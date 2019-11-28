import  React from 'react';
import { Link } from 'react-router-dom'
import BurgerMenu from './BurgerMenu'

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-bs">
      <Link to="/">
      <a className="navbar-brand" href="#">MyProfiling</a>
      </Link>
      <BurgerMenu />
    </nav>
  );
}

export default NavBar;
