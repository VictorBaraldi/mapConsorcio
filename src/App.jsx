import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './assets/pages/Home';
import About from './assets/pages/About';
import Contato from './assets/pages/Contato';
import Faq from './assets/pages/Faq';
import Vender from './assets/pages/Vender';
import Header from './assets/menu/Header';
import Footer from './assets/menu/Footer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quem-somos" element={<About />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/perguntas-frequentes" element={<Faq />} />
          <Route path="/vender" element={<Vender />} />
          <Route path="*" element={<Vender />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
