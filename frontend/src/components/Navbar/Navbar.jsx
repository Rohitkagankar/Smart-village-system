import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/"><h2>Smart Village System</h2></Link>
      </div>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
        <li>
          <Link to="/agriculture">Agriculture</Link>
        </li>
        <li>
          <Link to="/education">Education</Link>
        </li>
        <li>
          <Link to="/healthcare">Healthcare</Link>
        </li>
        <li>
          <Link to="/economic-development">Economic Development</Link>
        </li>
      </ul>
      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
      </button>
    </nav>
  );
};

export default Navbar;
