import React from 'react';
import global from '../styles/global.module.css';
import ChangeTitle from '../helper/title';

const About = () => {
  ChangeTitle(
    'Conheça Nossa Empresa, Somos especialistas em Compra de consórcio',
  );

  return (
    <div className={`${global.container}`}>
      <div>
        <h2>Preencha o Formulário para Vender seu Consórcio</h2>
      </div>
      <div>
        <h2>Preencha o Formulário para Vender seu Consórcio</h2>
      </div>
    </div>
  );
};

export default About;
