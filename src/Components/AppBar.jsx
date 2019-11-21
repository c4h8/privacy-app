import  React from 'react';
import BurgerMenu from './BurgerMenu'

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-bs">
      <a class="navbar-brand" href="#">Privacy App</a>
      <BurgerMenu />
    </nav>
  );
}

export default NavBar;
