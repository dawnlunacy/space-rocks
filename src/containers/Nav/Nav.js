import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';


export const Nav = () => {
  return (
    <nav className="main-nav">
      <NavLink to= '/asteroids' > 
        <button className="asteroid-btn"> Asteroids </button> 
      </NavLink>
    </nav>
  )
};