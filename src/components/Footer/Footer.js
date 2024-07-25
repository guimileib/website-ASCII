import React from 'react';
import {Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import logo from 'image/logoHorizontal.png';
import back from 'image/back.png';
import instagram from 'image/instagram.png';
import Linkedin from 'image/linkedin.png' 
import Git from 'image/github.png';

import './Footer.css';

function Footer() {
  return (
      <footer className="footer">
        <div className="footer-background">
          <img src={back} alt="" className="background-image" />
          <img src={logo} alt="" className="logo" />
          <img src={back} alt="" className="background-image" />
        </div>

        <div className="footer-content">
          <div className="servicesfooter">
            <h1>Nossos Serviços</h1>
            <div className="links">
              <Link to="" className="link">Criação de aplicativos</Link>
              <Link to="" className="link">Desenvolvimento Web</Link>
              <Link to="" className="link">Modelagem de Sistemas</Link>
              <Link to="" className="link">Consultoria</Link>
            </div>
          </div>

          <div className="contact">
            <div className="contact-info">
              <Link to="" className="link">Informações de Contato</Link>
              <Link to="" className="link">Portfólio</Link>
              <Link to="" className="link">Quem Somos</Link>
            </div>
            <div className="social-media">
              <Link to=""><img src={instagram} alt="" className="instagram-icon" /></Link>
              <Link to=""><img src={Linkedin} alt="" className="linkedin-icon" /></Link>
              <Link to=""><img src={Git} alt="" className="github-icon" /></Link>
            </div>
          </div>

        </div>
        <div className="copyright">
          <p>© 2024 ASCII</p>
        </div>
      </footer>
  );
}

export default Footer;