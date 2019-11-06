import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';


export const Nav = () => {
  return (
    <nav className="main-nav">
      <NavLink to= '/asteroids' > 
        <button className="asteroid-btn nav-btn"> Asteroids </button> 
      </NavLink>
      <NavLink to= '/apod' > 
        <button className="apod-btn nav-btn"> APOD </button> 
      </NavLink>
    </nav>
  )
};