import React from 'react';
import ChangeTitle from '../helper/title';
import Email from '../components/email';

const contato = () => {
  ChangeTitle('Contato - Map Consórcio');
  return (
    <div>
      <Email />
    </div>
  );
};

export default contato;
