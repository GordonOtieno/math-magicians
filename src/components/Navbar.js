import React from 'react';
import { Link } from 'react-router-dom';
import './styles/navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="link">
      <h1 className="logo">Math Magician</h1>
    </Link>
    <ul className="nav-list">
      <li className="nav-item">
        <Link to="/" className="link">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/calculator" className="link">
          | Calculator |
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/quote" className="link">
          Quote
        </Link>
      </li>
    </ul>
  </nav>
);
export default Navbar;
