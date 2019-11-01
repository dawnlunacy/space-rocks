import React from 'react';
import logo from '../../images/moon-icon-2.png';
import { findTodaysDate } from '../../utils/helpers';
import { formatTodaysDate } from '../../utils/helpers';
import './Header.css';

export const Header = () => {

  return (
    <header className="main-header">
      <h1> Space Insights </h1>
      <img src={logo} alt="A grey asteroid logo" className="logo"/>
      <h2> { formatTodaysDate(findTodaysDate()) }</h2>
    </header>
  )
}