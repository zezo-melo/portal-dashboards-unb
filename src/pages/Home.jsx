// src/pages/Home.jsx
import React from 'react';
import HeroBanner from '../components/HeroBanner.jsx';
import DashboardCarousel from '../components/DashboardCarousel.jsx';
import '../App.css';
import Footer from '../components/Footer.jsx';


const Home = () => {
    return (
        <div className="home-page-container">
            {/* Hero Banner no topo */}
            <HeroBanner />
            
            <h2 className='dashboard-title'>Confira alguns dos Dashboards</h2>
            {/* Carrossel com os dashboards (onde estariam os 3 cards) */}
            <div id="dashboards" className="carousel-section">
                <DashboardCarousel />
            </div>

            <Footer />
        </div>
    );
};

export default Home;