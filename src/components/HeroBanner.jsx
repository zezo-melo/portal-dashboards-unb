// src/components/HeroBanner.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
    heroContainer: {
        padding: '60px 20px',
        textAlign: 'center',
        backgroundColor: '#f8f9fa', 
        borderBottom: '1px solid #e9ecef',
        color: '#343a40',
    },
    title: {
        fontSize: '3rem',
        fontWeight: '700',
        marginBottom: '10px',
        color: '#3891C0', /* Cor de destaque */
    },
    subtitle: {
        fontSize: '1.25rem',
        fontWeight: '400',
        marginBottom: '30px',
        maxWidth: '800px',
        margin: '0 auto 30px',
    },
    button: {
        display: 'inline-block',
        backgroundColor: '#B67355', /* Cor do hover do link no Header */
        color: 'white', 
        padding: '12px 30px',
        borderRadius: '50px',
        textDecoration: 'none',
        fontSize: '1.1rem',
        fontWeight: '600',
        transition: 'background-color 0.3s ease',
    },
    buttonHover: {
        backgroundColor: '#3891C0', /* Cor de destaque */
    }
};

const HeroBanner = () => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div style={styles.heroContainer}>
            <h1 style={styles.title}>CENÁRIOS & INSIGHTS</h1>
            <p style={styles.subtitle}>
                Análise detalhada e em tempo real dos indicadores de saúde mais críticos. Transforme dados complexos em decisões informadas e estratégicas.
            </p>
            <Link 
                to="/Dash-Hansen" 
                style={{ ...styles.button, ...(isHovered && styles.buttonHover) }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                Ver Estudo em Destaque
            </Link>
        </div>
    );
};

export default HeroBanner;