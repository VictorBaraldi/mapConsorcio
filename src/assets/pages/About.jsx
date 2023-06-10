import React from 'react';
import global from '../styles/global.module.css';
import ChangeTitle from '../helper/title';
import Email from '../components/email';

const About = () => {
  ChangeTitle(
    'Conheça Nossa Empresa, Somos especialistas em Compra de consórcio',
  );

  return (
    <div className={`${global.container}`}>
      <section>
        <h2>Quero Vender meu Consórcio</h2>
      </section>
      <section>
        <h2>Por que nos escolher?</h2>
      </section>
      <Email />
    </div>
  );
};

export default About;
