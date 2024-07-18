import './Navbar.css';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

  const [menupen, setMenuOpen] = useState(false) ;

  return (
    <nav>
      <div className="nav-menu">
        <div className="title">
          <NavLink to="/">Home</NavLink>

        </div>
        <div className="menuIcon" onClick ={()=>{
          setMenuOpen(!menupen)
        }}>
          <MenuIcon />
        </div>
      </div>
      <ul className="nav-list" id={menupen ? "menuOpen" : "menuClose"}>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/login">Log In</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;