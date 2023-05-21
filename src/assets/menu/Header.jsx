import React from 'react';
import NavMenu from './Nav';
import styles from '../styles/header.module.css';
import global from '../styles/global.module.css';

const Header = () => {
  return (
    <div className={`${styles.menuContainer} `}>
      <div className={`${styles.menu} ${global.container}`}>
        <h2>Logo</h2>
        <NavMenu />
      </div>
    </div>
  );
};

export default Header;
