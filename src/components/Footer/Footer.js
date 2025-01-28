import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

import logo from 'image/logoHorizontal.png';

import './Footer.css';
import Background from 'image/mapa-fundo.svg';
import WaveTop from 'image/wave-top.svg';

function Footer() {
  return (
    <footer className="footer">
      {/* Adicionando a onda no topo do footer */}
      <img className='wave-top' src={WaveTop} alt="Onda superior" />

      <div className='footer__wrapper' style={{ backgroundImage: `url(${Background})` }}>
        <div className='footer__container'>
          <h3>Nossos Serviços</h3>
          <ul>
            <li> <Link to="/#services-header">Criação de Aplicativos</Link></li>
            <li> <Link to="/#services-header">Desenvolvimento Web</Link></li>
            <li> <Link to="/#services-header">Modelagem de Sistemas</Link></li>
            <li> <Link to="/#services-header">Consultoria</Link></li>
          </ul>
        </div>

        <a href="#logo-header"><img src={logo} alt="" className="logo" /></a>
        <div className='footer__container'>
          <h3>Informações de Contato</h3>
          <ul>
            <li><Link to="/portfolio/#portfolio-anchor">Portfolio</Link></li>
            <li><Link to="/sobre/#sobre-anchor">Quem Somos</Link></li>
            <li><span className="inactive-link">Explore+</span></li>
            <li><span className="inactive-link">Contato</span></li>
          </ul>
        </div>
      </div>
      <p className="copyright" style={{ marginTop: '20px' }}>&copy; 2024 ASCII</p>
    </footer>
  );
}

export default Footer;