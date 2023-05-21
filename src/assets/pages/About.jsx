import React from 'react';
import global from '../styles/global.module.css';

const About = () => {
  return (
    <div className={`${global.container}`}>
      <div>
        <h2>Conheça nossa empresa</h2>
      </div>
      <div>
        <h2>Compramos seu Consórcio</h2>
      </div>
      <div>
        <h2>Quero Vender meu Consórcio</h2>
      </div>
      <div>
        <h2>Por que nos escolher?</h2>
      </div>
      <form>
        <h2>Preencha o Formulário para Vender seu Consórcio</h2>
      </form>
      <div>
        <h2>Entre em Contato</h2>
      </div>
    </div>
  );
};

export default About;
