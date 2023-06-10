import React from 'react';
import emailjs from '@emailjs/browser';
import UseForm from '../helper/Form';
import Input from '../components/input';

const Email = () => {
  const [enviado, setEnviado] = React.useState(false);
  const email = UseForm('email');

  function handleSubmit(e) {
    console.log(email);
    e.preventDefault();
    // emailjs.sendForm(
    //   'service_63svstf',
    //   'template_j7b80yr',
    //   e.target,
    //   'pKJ9pemaBQQgrE8Dh',
    // );
    setEnviado(true);
  }

  return (
    <>
      {enviado ? (
        <p>Enviado</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            name="nome"
            placeholder="Seu nome completo"
            required
          />

          <Input label="Email" type="email" name="email" {...email} />

          <label htmlFor="telefone">Telefone</label>
          <input
            type="number"
            name="telefone"
            placeholder="Seu telefone"
            required
          />

          <label htmlFor="administradora">Administradora</label>
          <input
            type="text"
            name="administradora"
            placeholder="Informe a administradora"
            required
          />

          <label htmlFor="credito">Crédito</label>
          <input
            type="text"
            placeholder="Crédito total"
            name="credito"
            required
          />

          <label htmlFor="pago">Porcentagem(%) Paga</label>
          <input
            type="text"
            placeholder="Porcentagem(%) Paga"
            name="pago"
            required
          />

          <label htmlFor="desejado">Valor Pretendido</label>
          <input
            type="text"
            placeholder="Valor Pretendido"
            name="desejado"
            required
          />

          <div>
            <h3>Contemplado?</h3>
            <label htmlFor="Sim">Sim</label>
            <input type="radio" name="contemplado" value="Sim" required />
            <label htmlFor="Não">Não</label>
            <input type="radio" name="contemplado" value="Não" required />
          </div>

          <label htmlFor="mensagem">Sua mensagem</label>
          <textarea
            placeholder="Estamos quase acabando, descreva alguma informação importante..(opcional)"
            name="mensagem"
            cols="30"
            rows="10"
          ></textarea>
          <button>Enviar</button>
        </form>
      )}
    </>
  );
};

export default Email;
