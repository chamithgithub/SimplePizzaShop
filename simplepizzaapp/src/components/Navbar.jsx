import './Navbar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
       <NavLink className="title" to="/">Home</NavLink>
      <ul>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/login">Log In</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;