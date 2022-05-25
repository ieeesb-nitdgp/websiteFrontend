import React from 'react';
import './header.css';
import Logo from '../../assets/IEEE-CS_Logo.webp'

const Header = () => (
  <div className="cs__header section__padding" id="home">
    <div className="cs__header-content">
      <h1 className="gradient__text">IEEE Computer Society NIT Durgapur</h1>
      <p>We strive to be the leading provider of technical information, community services, and personalized support to the world’s computer science and technology communities. We are IEEE Computer Society.</p>
    </div>

    <div className="cs__header-image">
    <img src ={Logo} alt="IEEE Computer Society Logo"/>
    </div>
  </div>
);

export default Header;