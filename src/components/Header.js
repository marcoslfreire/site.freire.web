import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="hamburger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <Link to="/" className="logo">luciano.freire</Link>

          <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            <li onClick={closeMenu}><Link to="/">Home</Link></li>
            <li onClick={closeMenu}><Link to="/about">Sobre Mim</Link></li>
            <li onClick={closeMenu}><Link to="/portfolio">Portfólio</Link></li>
            <li onClick={closeMenu}><Link to="/contact">Contato</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
