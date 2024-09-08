import React, { useState } from 'react';
import './Navbar.css'; // Assuming you have a CSS file for styling
import Login from '../pages/Login';
import Register from '../pages/Register';

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span>Content Creation Page</span>
      </div>
      <div className={`navbar-toggle ${active ? 'active' : ''}`} onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`navbar-menu ${active ? 'active' : ''}`}>
        <ul>
          <li><a href="/Login">LOGIN</a></li>
          <li><a href="/Register">REGISTER</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
