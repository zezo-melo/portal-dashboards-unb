import React from 'react';
import Footer from './Footer.jsx'; // Importa o componente Footer
import './DashboardIframe.css'; // Importa os novos estilos
// REMOVIDO: Assumindo que o vídeo de fundo é o mesmo usado no HeroBanner
// REMOVIDO: import backgroundVideo from '../assets/background-hero-section.mp4'; 

const DashboardIframe = ({ dashboardUrl, title }) => {
  return (
    <div className="dashboard-page-container">
      
      {/* 1. NOVO: Seção de Título Estilizada como Hero Banner (agora com cor sólida) */}
      <div className="iframe-title-banner">
          {/* REMOVIDO: VÍDEO BACKGROUND */}
          {/* REMOVIDO: OVERLAY PARA ESCURECER O VÍDEO */}
          
          {/* TÍTULO ALINHADO À ESQUERDA E CENTRALIZADO NO BANNER */}
          <div className="iframe-title-content">
            {/* O título agora segue o mesmo estilo da HeroBanner, em branco e bold */}
            <h1 className="iframe-title">{title}</h1> 
          </div>
      </div>

      {/* 2. Container do Iframe principal */}
      <div className="iframe-container"> 
        <div className="iframe-wrapper">
          <iframe
            src={dashboardUrl}
            title={title}
            width="100%"
            height="100%" 
            frameBorder="0"
            allowFullScreen
            className="dashboard-iframe" 
          >
            <p>Seu navegador não suporta iframes. Link direto: <a href={dashboardUrl}>{dashboardUrl}</a></p>
          </iframe>
        </div>
      </div>
      
      {/* 3. NOVO: Footer no final da página */}
      <Footer />
    </div>
  );
};


export default DashboardIframe;