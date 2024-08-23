import React from 'react';
import {Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import logo from 'image/logoHorizontal.png';
import instagram from 'image/instagram.png';
import Linkedin from 'image/linkedin.png' 
import Git from 'image/github.png';

import './Footer.css';
import Background from 'image/mapa-fundo.svg';

function Footer() {
  return (
      <footer className="footer">
          <div className='footer__wrapper'
          style={{backgroundImage: `url(${Background})`}}>
            <div className='footer__container'>
              <h3>Nossos Serviços</h3>
              <ul>
                <li> <HashLink smooth to="/#services-header">Criação de Aplicativos</HashLink></li>
                <li> <HashLink smooth to="/#services-header">Desenvolvimento Web</HashLink>  </li>
                <li> <HashLink smooth to="/#services-header">Modelagem de Sistemas</HashLink>  </li>
                <li> <HashLink smooth to="/#services-header">Consultoria</HashLink> </li>
              </ul>
            </div>

            <a href="#logo-header"><img src={logo} alt="" className="logo" /></a>
            <div className='footer__container'>
              <h3>Informações de Contato</h3>
              <ul>
                <li><HashLink smooth to="/portfolio/#">Portfolio</HashLink></li>
                <li><HashLink to="/sobre/#">Quem Somos</HashLink></li>
                <div className='footer__social-media'>
                  <Link target="_blank" to="https://www.instagram.com/asciiempresajr/"><img src={instagram} alt="Link para o Instagram" className="instagram-icon" /></Link>
                  <Link target="_blank" to="https://www.linkedin.com/company/ascii-empresa-j%C3%BAnior/"><img src={Linkedin} alt="Link para o Linkedin" className="linkedin-icon" /></Link>
                  <Link target="_blank" to="https://github.com/asciiej"><img src={Git} alt="Link para o Github" className="github-icon" /></Link>
                </div>
              </ul>
            </div>
          </div> 
          <p className="copyright">© 2024 ASCII</p>
      </footer>
  );
}

export default Footer;