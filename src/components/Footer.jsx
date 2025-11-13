// src/components/Footer.jsx

import React from 'react';
import './Footer.css';
// Importa a imagem cenarios.jpeg (Assumindo que está em ../assets/)
import cenariosLogo from '../assets/cenarios.png'; 

// Ícones SVG Simples para Instagram e LinkedIn

const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

const LinkedinIcon = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
);


const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                
                {/* Seção da Logo e Direitos Autorais */}
                <div className="footer-info">
                    
                    {/* Logo baseada na imagem cenarios.jpeg com link para https://cenarios.unb.br/ */}
                    <a 
                        href="https://cenarios.unb.br/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="footer-logo-link"
                    >
                        <img 
                            src={cenariosLogo} 
                            alt="Cenários Logo" 
                            className="footer-logo-img"
                        />
                    </a>
                    
                    <p className="footer-copyright">
                        Todos os direitos reservados.
                    </p>
                </div>

                {/* Seção de Ícones Sociais */}
                <div className="footer-social-links">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <InstagramIcon />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <LinkedinIcon />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;