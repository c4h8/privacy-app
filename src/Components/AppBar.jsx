import  React from 'react';
import BurgerMenu from './BurgerMenu'

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-bs">
      <a className="navbar-brand" href="#">MyProfiling</a>
      <BurgerMenu />
    </nav>
  );
}

export default NavBar;
