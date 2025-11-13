import React from 'react';
import { Link } from 'react-router-dom';
// Importando a imagem como módulo (necessário no Vite para assets em src/)
import bgElements from '../../assets/bg-elements.png';

const SlideHansen = ({ title, description }) => {
    
    // Conteúdo fixo da imagem (para garantir a fidelidade do texto, como no slide Hansen)
    const fixedTitle = "HANSENÍASE: ANÁLISE EPIDEMIOLÓGICA E DE COMPORTAMENTO";
    const fixedDescription = "Esta seção apresenta um dashboard interativo que permite explorar a evolução temporal, distribuição geográfica e o perfil dos casos de Hanseníase. Utilize os filtros para uma análise detalhada dos dados mais recentes e das tendências regionais.";
    
    // URL e estilos específicos deste slide
    const linkUrl = "/Dash-Hansen";
    // *** USANDO O MESMO ASSET DO HANSEN PARA IGUALAR O VISUAL ***
    const imageUrl = bgElements; 
    // *** USANDO A MESMA COR DE OVERLAY DO HANSEN PARA IGUALAR O VISUAL ***
    // Cor de sobreposição (Azul escuro do Slide Hansen)
    const overlayColor = "#FFFFFF91"; 

    // Novo bloco de estilos customizados (mantendo o #3891C0 para texto e botão)
    const customStyles = {
        slideText: {
            textAlign: 'left', 
            maxWidth: '600px',
            // Usando a cor de destaque consistente para o texto
            color: '#3891C0' 
        },
        title: {
            fontSize: '2.5rem', 
            marginBottom: '1rem', 
            lineHeight: '1.2',
            // Usando a cor de destaque consistente para o título
            color: '#3891C0' 
        },
        description: {
            fontSize: '1.1rem', 
            marginBottom: '2rem'
        },
        // Estilos para o botão (mantendo a cor #3891C0)
        button: {
            backgroundColor: '#3891C0', 
            color: 'white', 
            padding: '12px 24px',
            border: 'none',
            borderRadius: '4px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
        }
    };

    return (
        <Link to={linkUrl} className="slide-link">
            <div 
                className="slide-content" 
                // Estilo para a imagem de fundo e sobreposição
                style={{ 
                    // Usa a variável de URL definida localmente
                    backgroundImage: `linear-gradient(${overlayColor}, ${overlayColor}), url(${imageUrl})`,
                    // Layout Customizado (Alinhar à esquerda)
                    justifyContent: 'flex-start',
                    paddingLeft: '10%',
                }}
            >
                {/* Aplica o estilo customizado à div de texto */}
                <div className="slide-text" style={customStyles.slideText}>
                    
                    {/* Usando o título fixo com estilo customizado */}
                    <h2 style={customStyles.title}>{fixedTitle}</h2>
                    
                    {/* Usando a descrição fixa com estilo customizado */}
                    <p style={customStyles.description}>{fixedDescription}</p>
                    
                    {/* Aplica o estilo customizado ao botão */}
                    <button className="slide-button" style={customStyles.button}>Ver Dashboard</button>
                </div>
            </div>
        </Link>
    );
};

export default SlideHansen;