import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './header.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__logo}>
        <img src="./assets/icons/logo.svg" alt="Logo" />
      </div>
      <nav className={classes.navigation}>
        <ul className={classes.navigation__links}>
          <li className={classes.navigation__item}>
            <NavLink className={classes.navigation__link} end to="/">
              Home
            </NavLink>
          </li>
          <li className={classes.navigation__item}>
            <NavLink className={classes.navigation__link} to="/about">
              About
            </NavLink>
          </li>
          <li className={classes.navigation__item}>
            <NavLink className={classes.navigation__link} to="/form">
              Form
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
