// src/pages/Home.jsx
import React from 'react';
// Importa os novos componentes
import HeroBanner from '../components/Header.jsx';
import DashboardCarousel from '../components/DashboardCarousel.jsx';

// Importa os estilos globais
import '../App.css';

const Home = () => {
    // Definimos o estilo para garantir que o conteúdo fique abaixo do header (60px)
    // O HeroBanner não precisará de margin-top, pois o carrossel (que é o primeiro elemento visível
    // abaixo do header) já está tratando do margin-top.
    const containerStyle = {
        paddingTop: '0', // O HeroBanner não precisa de padding extra
        minHeight: 'calc(100vh - 60px)', // Garante que a Home tenha altura mínima
        width: '100%',
    }

    return (
        <div style={containerStyle}>
            {/* 1. Componente Hero Banner no topo */}
            <HeroBanner />
            
            {/* 2. Carrossel com os dashboards */}
            {/* Nota: O DashboardCarousel já tem um margin-top de 60px em seu CSS (.carousel-container-full)
               para se posicionar abaixo do header fixo. */}
            <DashboardCarousel />
            
            {/* Você pode adicionar mais conteúdo da página aqui, se precisar */}

        </div>
    );
};

export default Home;