import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('experimentos');

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/logo_experiment.png" alt="ASCII Logo" className="logo" />
      </div>
      <div className="nav-links">
        <a 
          href="#" 
          className={activeLink === 'home' ? 'active' : ''}
          onClick={() => setActiveLink('home')}
        >
          Home
        </a>
        <a 
          href="#" 
          className={activeLink === 'contato' ? 'active' : ''}
          onClick={() => setActiveLink('contato')}
        >
          Contato
        </a>
        <a 
          href="#" 
          className={activeLink === 'quem-somos' ? 'active' : ''}
          onClick={() => setActiveLink('quem-somos')}
        >
          Quem somos
        </a>
        <a 
          href="#" 
          className={activeLink === 'portfolio' ? 'active' : ''}
          onClick={() => setActiveLink('portfolio')}
        >
          Portfólio
        </a>
        <div className="dropdown">
          <a 
            href="#" 
            className={activeLink === 'explore' ? 'active' : ''}
            onClick={() => setActiveLink('explore')}
          >
            Explore
          </a>
          <div className="dropdown-content">
            <a 
              href="#" 
              className={activeLink === 'experimentos' ? 'active' : ''}
              onClick={() => setActiveLink('experimentos')}
            >
              Experimentos 🧪
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 