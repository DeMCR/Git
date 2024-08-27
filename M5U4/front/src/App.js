import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';

import Footer from './components/Footer.js';
import HomePage from './pages/HomePage.js';
import NuestraSede from './pages/NuestraSede.js';
import Profesores from './pages/Profesores.js';
import ContactoPage from './pages/ContactoPage.js';




function App() {
  return (

    <div className="App">
      
      <BrowserRouter>
      {/* la diferencia con el material complementario es que yo tengo la nav dentro dek Header y por eso el Header debe ir debajo de Browser. Clase mod4u1 min 55:36 */}
      <Header/>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="sede" element={<NuestraSede />} />
        <Route path="profesores" element={<Profesores />} />
        <Route path="contacto" element={<ContactoPage />} />
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
