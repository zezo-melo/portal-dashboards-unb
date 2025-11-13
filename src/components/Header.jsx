import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

// O caminho '..' sobe da pasta atual (ex: components) para a pasta raiz (src), 
// onde a pasta 'assets' está.
import LogoCenarios from '../assets/cenarios.jpeg'; 


function Header() {
  return (
    <header className="app-header"> 
      <div className="header-inner">
        
        {/* Bloco da Logo */}
        <Link to="/" className="logo-link">
          <img src={LogoCenarios} alt="Cenários Logo" className="header-logo" />
        </Link>
        
        {/* Bloco da Navegação */}
        <nav className="nav-wrapper">
          <ul className="app-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Início</Link>
            </li>
            <li className="nav-item">
              <Link to="/Dash-Hansen" className="nav-link">Estudo Hansen</Link>
            </li>
            <li className="nav-item">
              <Link to="/Dash-Tuberculose" className="nav-link">Estudo Tuberculose</Link>
            </li>
          </ul>
        </nav>
        
      </div>
    </header>
  );
}

export default Header;