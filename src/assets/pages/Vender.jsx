import React from 'react';
import global from '../styles/global.module.css';
import ChangeTitle from '../helper/title';

const vender = () => {
  ChangeTitle(
    'Venda seu Consórcio hoje com pagamento à vista - Recompra Consórcio',
  );
  return (
    <div className={`${global.container}`}>
      <div>
        <h2>Venda seu Consórcio Ainda Hoje</h2>
      </div>
      <div>
        <h2>Venda seu Consórcio Rapidamente</h2>
      </div>
      <div>
        <h2>Compramos seu Consórcio com Segurança e Qualidade</h2>
      </div>
      <div>
        <h2>Veja como é fácil vender a sua cota de Consórcio online</h2>
      </div>
      <form>
        <h2>Vantagens de vender meu consórcio</h2>
      </form>
      <div>
        <h2>Preencha o Formulário para Vender seu Consórcio</h2>
      </div>
    </div>
  );
};

export default vender;
