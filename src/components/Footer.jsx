import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="pixel-pattern"></div>
      
      <div className="footer-content">
        <div className="footer-section">
          <img src="/images/logo.png" alt="ASCII Logo" className="footer-logo" />
          <p className="footer-tagline">Transformando ideias em código</p>
        </div>
        
        <div className="footer-section">
          <h3>Links Rápidos</h3>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Contato</a></li>
            <li><a href="#">Quem somos</a></li>
            <li><a href="#">Portfólio</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Experimentos</h3>
          <ul className="footer-links">
            <li><a href="#">Kowalski IA</a></li>
            <li><a href="#">Em breve</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ASCII. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer; 