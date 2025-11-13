// src/components/HeroBanner.jsx
import React from 'react';
import './HeroBanner.css';
import backgroundVideo from '../assets/background-hero-section.mp4'; 
import graphicImage from '../assets/graphic.png'; // **NOVO: Importa a imagem graphic.png**

const HeroBanner = () => {
    const [isHovered, setIsHovered] = React.useState(false);

    // Função para fazer scroll suave até a seção de dashboards
    const handleScrollToDashboards = (e) => {
        e.preventDefault();
        const dashboardsSection = document.getElementById('dashboards');
        if (dashboardsSection) {
            dashboardsSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <div className="hero-banner-container">
            
            {/* VÍDEO BACKGROUND */}
            <video autoPlay loop muted playsInline className="hero-video-background">
                <source src={backgroundVideo} type="video/mp4" />
                Seu navegador não suporta a tag de vídeo.
            </video>
            
            {/* OVERLAY PARA ESCURECER O VÍDEO */}
            <div className="hero-video-overlay"></div>

            <div className="hero-content">
                {/* Seção de texto à esquerda */}
                <div className="hero-text-section">
                    <h1 className="hero-title">PORTAL DE DASHBOARDS</h1>
                    <p className="hero-description">
                        Acesse e explore os dashboards do projeto Cenários.
                    </p>
                    <a 
                        href="#dashboards"
                        onClick={handleScrollToDashboards}
                        className="hero-button"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        EXPLORAR DASHBOARDS
                    </a>
                </div>
                
                {/* Ícone de dashboard à direita - AGORA É A IMAGEM graphic.png */}
                <div className="hero-graphic-section"> {/* **Mudei o nome da classe para ser mais descritivo** */}
                    <img src={graphicImage} alt="Gráfico de Dashboards" className="hero-graphic-image" /> {/* **NOVO: Substituído pelo elemento <img>** */}
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;