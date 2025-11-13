import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

// O caminho '..' sobe da pasta atual (ex: components) para a pasta raiz (src), 
// onde a pasta 'assets' está.
import LogoCenarios from '../assets/cenarios.jpeg'; 


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Fecha o menu quando clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.nav-wrapper') && !event.target.closest('.menu-toggle')) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="app-header"> 
      <div className="header-inner">
        
        {/* Bloco da Logo */}
        <Link to="/" className="logo-link" onClick={closeMenu}>
          <img src={LogoCenarios} alt="Cenários Logo" className="header-logo" />
        </Link>
        
        {/* Botão do Menu Hambúrguer */}
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        {/* Overlay para fechar o menu */}
        {isMenuOpen && (
          <div className="menu-overlay" onClick={closeMenu}></div>
        )}
        
        {/* Bloco da Navegação */}
        <nav className={`nav-wrapper ${isMenuOpen ? 'active' : ''}`}>
          <ul className="app-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={closeMenu}>Início</Link>
            </li>
            <li className="nav-item">
              <Link to="/dash-hanseniase" className="nav-link" onClick={closeMenu}>Estudo Hanseníase</Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/Dash-Tuberculose" className="nav-link" onClick={closeMenu}>Estudo Tuberculose</Link>
            </li> */}
          </ul>
        </nav>
        
      </div>
    </header>
  );
}

export default Header;