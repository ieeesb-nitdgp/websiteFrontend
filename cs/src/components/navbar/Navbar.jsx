import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="cs__navbar">
      <div className="cs__navbar-links">
        <div className="cs__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wcs">About Us</a></p>
          <p><a href="#home">Contact Us</a></p>
          <p><a href="#home">Team</a></p>
        </div>
      </div>
      <div className="cs__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="cs__navbar-menu_container scale-up-center">
          <div className="cs__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wcs">About Us</a></p>
            <p><a href="#home">Contact Us</a></p>
            <p><a href="#home">Team</a></p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;