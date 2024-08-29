import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="logo">MeuGitHub</Link>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Sobre Mim</Link></li>
            <li><Link to="/portfolio">Portfólio</Link></li>
            <li><Link to="/contact">Contato</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
    