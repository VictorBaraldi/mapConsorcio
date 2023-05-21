import React from 'react';
import NavMenu from './Nav';
import styles from '../styles/footer.module.css';
import global from '../styles/global.module.css';

const Footer = () => {
  return (
    <div className={`${styles.grid} ${global.container}`}>
      <div>
        <h2>logo</h2>
        <p>
          Há mais de 10 anos atuando no mercado financeiro, temos experiência e
          conhecimento que empregamos nas transações, proporcionando aos nossos
          cliente uma negociação segura e com excelente avaliação e preço. Somos
          uma empresa independente que atual no segmento de compra e venda de
          cotas de consórcio e não estamos vinculados a nenhuma empresa de
          consórcio.
        </p>
      </div>
      <div>
        <h2>Navegação</h2>
        <NavMenu className={styles.menu} column={true} />
      </div>
      <div>
        <h2>Social</h2>
      </div>
    </div>
  );
};

export default Footer;
