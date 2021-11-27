import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuData } from '../../utils/index';
import logo from '../../assets/logo.svg';

import './style.scss';

const Menu = ({id = 'menu', showMenu = false, onClose}) => {
  const handleOutSideClick = (e) => {
    if (e.target.id === id) {
      onClose();
      console.log('aqui')
    }
  }
  return (
    <nav id={id} className={showMenu ? 'menu active' : 'menu'} onClick={handleOutSideClick}>
      <ul className="menu-items">
          <img src={logo} className="menu-logo" alt="logo" />

        {MenuData.map((item, index) => {
          return (
            <li onClick={() => onClose()} key={index} className="menu-options">
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