// src/components/DashboardCarousel.jsx (Atualizado)

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Importe os componentes de slide que vamos criar
import SlideHansen from './CarouselSlides/SlideHansen.jsx';
import SlideTuberculose from './CarouselSlides/SlideTuberculose.jsx';
import SlideEstudo from './CarouselSlides/SlideEstudo.jsx'
import SlideHansen2 from './CarouselSlides/SlideHansen2.jsx';

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
        component: SlideTuberculose,
        props: { 
            title: "Tuberculose em Destaque",
            description: "Análise de incidência e distribuição geográfica.",
        }
    },
    {
        component: SlideHansen2,
        props: { 
            title: "Tuberculose em Destaque",
            description: "Análise de incidência e distribuição geográfica.",
        }
    },
    {
        component: SlideEstudo,
        props: { 
            title: "Tuberculose em Destaque",
            description: "Análise de incidência e distribuição geográfica.",
        }
    }
    // Adicione mais slides aqui
];

const DashboardCarousel = () => {
    return (
        <div className="carousel-container-full">
            <Swiper
                modules={[Pagination, Autoplay]} 
                spaceBetween={0} 
                slidesPerView={3} 
                pagination={{ clickable: true }} 
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