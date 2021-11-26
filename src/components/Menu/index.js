import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuData } from '../../utils/index';
import logo from '../../assets/logo.svg';

import './style.scss';

const Menu = () => {
  return (
    <nav className='menu active'>
      <ul className="menu-items">
          <img src={logo} className="menu-logo" alt="logo" />

        {MenuData.map((item, index) => {
          return (
            <li key={index} className="menu-options">
              <NavLink to={item.path} activeClassName="selected">
                <span className="menu-icon">{item.icon}</span>
                <span className="menu-label">{item.name}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Menu;