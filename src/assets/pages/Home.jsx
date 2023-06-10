import React from 'react';
import ChangeTitle from '../helper/title';
import home from '../styles/home.module.css';
import intro from '../images/home.jpg';
import { Link } from 'react-router-dom';
import Email from '../components/email';
import Perguntas from '../components/Perguntas';

const Home = () => {
  ChangeTitle(
    'Venda Seu Consórcio | Venda Seu Consórcio à Vista | Vender Cota',
  );
  return (
    <>
      <section className={home.intro}>
        <div className={home.vender}>
          <h1>QUER VENDER SEU CONSÓRCIO DE FORMA SEGURA?</h1>
          <p>
            Aqui na Map Consórcio você tem a melhor negociação do mercado,
            compramos seu consórcio à vista, hoje mesmo.
          </p>
          <button>QUERO VENDER</button>
        </div>
        <div>
          <img src={intro} alt="" />
        </div>
      </section>

      <section>
        <h2 className={home.etapasTitle}>
          Veja como é fácil vender a sua cota de Consórcio online
        </h2>
        <div className={home.etapas}>
          <div>
            <h3>Preencha o formulário</h3>
            <p>
              Utilize o formulário disponível em nosso site para enviar as
              informações referentes ao seu consórcio.
            </p>
          </div>
          <div>
            <h3>Receba e avalie a proposta</h3>
            <p>
              A Map Consórcio avalia de forma justa o seu consórcio e te envia
              uma proposta.
            </p>
          </div>
          <div>
            <h3>Dinheiro na conta</h3>
            <p>
              Ao assinar o contrato de transferência, você receberá o pagamento
              diretamente em sua conta bancária. Pode ficar tranquilo, pois nós
              nos encarregamos de todas as etapas do processo!
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2>Nossa Empresa é especialista em Compra de Consórcio</h2>
        <p>
          Há mais de 10 anos atuando no mercado financeiro, temos experiência e
          conhecimento que empregamos nas transações, proporcionando aos nossos
          cliente uma negociação segura e com excelente avaliação e preço. Somos
          uma empresa independente que atual no segmento de compra e venda de
          cotas de consórcio e não estamos vinculados a nenhuma empresa de
          consórcio. Se você está precisando vender ou comprar cotas de
          consórcio de imóveis ou veículos, não hesite em nos contatar.
        </p>
        <button>
          <Link to="/quem-somos">Quem Somos</Link>
        </button>
      </section>
      <Perguntas />
      <Email />
    </>
  );
};

export default Home;
