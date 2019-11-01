import React from 'react';
import logo from '../../images/moon-icon-2.png';
import { findTodaysDate } from '../../utils/helpers';
import { formatTodaysDate } from '../../utils/helpers';
import { findDay } from '../../utils/helpers';
import './Header.css';

export const Header = () => {

  return (
    <header className="main-header">
      <img src={logo} alt="A grey asteroid logo" className="logo"/>
      <h1> Space Insights </h1>
      <div>
      <h2> { findDay() }</h2>
      <h2> { formatTodaysDate(findTodaysDate()) }</h2>
      </div>
    </header>
  )
}