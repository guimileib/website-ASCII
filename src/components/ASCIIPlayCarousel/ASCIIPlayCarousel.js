import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { Navigation, EffectCoverflow } from "swiper/modules";
import ASCIIPlayCard from "../ASCIIPlayCard/ASCIIPlayCard";
import styles from "./ASCIIPlayCarousel.module.css";
import { Link } from "react-router-dom";

// Importa os dados da pasta src/data
import { asciiplayCards } from "../../data/asciiplayCards";

const ASCIIPlayCarousel = () => {
  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carouselHeader}>
        <h2 className={styles.carouselTitle}>
          ASCII Play:
          <span className={styles.subtitle}>Podcasts e Vídeos</span>
        </h2>
        <div className={styles.linkContainer}>
          <Link to="/Asciiplay">Ver todos</Link>
        </div>
      </div>

      <div className={styles.carousel}>
        <Swiper
          modules={[Navigation, EffectCoverflow]}
          className={styles.mySwiper}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 20,
              coverflowEffect: {
                depth: 30, // Diminuindo a profundidade para telas pequenas
                modifier: 0.8, // Ajuste o modificador para suavizar a transformação
              },
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
              coverflowEffect: {
                depth: 60, // Diminuindo a profundidade em telas médias
                modifier: 0.9, // Suavizando a transformação
              },
            },
            1024: {
              slidesPerView: 2.76,
              spaceBetween: 75,
              coverflowEffect: {
                depth: 100,
                modifier: 1,
              },
            },
          }}
        >
          {asciiplayCards.map((card, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide} >
              <ASCIIPlayCard {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ASCIIPlayCarousel;
