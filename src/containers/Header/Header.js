import React from 'react';
import logo from '../../images/moon-icon.png'

export const Header = () => {
  return (
    <header>
      <h1> Space Insights </h1>
      <img src={logo} alt="A grey asteroid logo" className="logo"/>
    </header>
  )
}