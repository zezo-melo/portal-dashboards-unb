// src/components/DashboardCarousel.jsx (Atualizado)

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// IMPORTANTE: Adicione Navigation aos módulos
import { Pagination, Autoplay, Navigation } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // IMPORTANTE: Importe o CSS de navegação

// Importe os componentes de slide que vamos criar
import SlideHansen from './CarouselSlides/SlideHansen.jsx';
// import SlideTuberculose from './CarouselSlides/SlideTuberculose.jsx';

// Importe o CSS do carrossel para estilização, incluindo as setas
import './DashboardCarousel.css'; 

// Lista de Slides: Passa o Componente e dados específicos.
const carouselData = [
    {
        // O SwiperSlide renderizará este componente
        component: SlideHansen, 
        // Você pode passar props específicas aqui, se o Slide precisar de mais dados
        props: { 
            title: "Estudo Hanseníase",     
            description: "Acesse o painel completo de dados.",
        }
    },
    {
        // O SwiperSlide renderizará este componente
        component: SlideHansen, 
        // Você pode passar props específicas aqui, se o Slide precisar de mais dados
        props: { 
            title: "Estudo Hanseníase",     
            description: "Acesse o painel completo de dados.",
        }
    },
//     {
//         component: SlideTuberculose,
//         props: { 
//             title: "Tuberculose em Destaque",
//             description: "Análise de incidência e distribuição geográfica.",
//         }
//     },

];

const DashboardCarousel = () => {
    return (
        <div className="carousel-container-full">
            <Swiper
                // NOVO: Adicione Navigation
                modules={[Pagination, Autoplay, Navigation]} 
                spaceBetween={0} 
                slidesPerView={1} 
                pagination={{ clickable: true }} 
                // NOVO: Habilita a navegação (setas)
                navigation={true} 
                autoplay={{ delay: 10000, disableOnInteraction: false }} 
                loop={true} 
                className="mySwiper"
            >
                {carouselData.map((slide, index) => (
                    <SwiperSlide key={index}>
                        {/* Renderiza o componente de slide importado, passando as props */}
                        <slide.component {...slide.props} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default DashboardCarousel;