import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/header.module.css';

const NavMenu = ({ column }) => {
  return (
    <nav className={column ? styles.menuColumn : styles.menuRow}>
      <Link to="/">Home</Link>
      <Link to="/quem-somos">Quem Somos</Link>
      <Link to="/vender">Vender Meu Consórcio</Link>
      <Link to="/contato">Fale Conosco</Link>
    </nav>
  );
};

export default NavMenu;
