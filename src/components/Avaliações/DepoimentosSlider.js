import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./DepoimentosSlider.css"; // Arquivo de estilos

import logoConstru from "image/constru.webp"

const depoimentos = [
  {
    id: 1,
    texto: "Tenho apenas elogios para essa equipe! Estão de parabéns pelo desempenho e rapidez. Com certeza, quando precisarmos novamente, teremos preferência pelo serviço de vocês. Obrigada!",
    nome: "Constru",
    imagem: logoConstru, // Substitua pela URL real
  },
  {
    id: 2,
    texto: "Lorem ipsum dolor sit amet consectetur. Elit sociis consequat venenatis justo sed aenean amet lacus.Lorem ipsum dolor sit amet consectetur. Elit sociis consequat venenatis justo.",
    nome: "Nome",
    imagem: "https://via.placeholder.com/50",
  },
  {
    id: 3,
    texto: "Lorem ipsum dolor sit amet consectetur. Elit sociis consequat venenatis justo sed aenean amet lacus.Lorem ipsum dolor sit amet consectetur. Elit sociis consequat venenatis justo.",
    nome: "Nome",
    imagem: "https://via.placeholder.com/50",
  },
  {
    id: 4,
    texto: "Lorem ipsum dolor sit amet consectetur. Elit sociis consequat venenatis justo sed aenean amet lacus.Lorem ipsum dolor sit amet consectetur. Elit sociis consequat venenatis justo.",
    nome: "Nome",
    imagem: "https://via.placeholder.com/50",
  },
];

const DepoimentosSlider = () => {
  return (
    <div className="container-depoimentos">
      {/* Título e descrição antes do carrossel */}
      <div className="cabecalho-depoimentos">
        <h2>O Impacto das nossas Soluções</h2>
        <p>
          A experiência de quem confiou em nós é a prova de<br />como podemos ajudar sua empresa a crescer e inovar.
        </p>
      </div>

      {/* Carrossel de depoimentos */}
      <div className="swiper-wrapper">
        <Swiper
          modules={[Navigation]}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="slider-depoimentos"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView:3,
              spaceBetween:20,
            },
          }}
        >
          {depoimentos.map((depoimento) => (
            <SwiperSlide key={depoimento.id} className="card-depoimento">
              <div className="conteudo-depoimento">
                <p className="aspas">{depoimento.texto}</p>
              </div>
              <div className="rodape-depoimento">
                <div className="avatar-depoimento">
                  <img 
                    src={depoimento.imagem} 
                    alt={depoimento.nome} 
                    className={`avatar-${depoimento.id}`} // Adiciona uma classe única para cada avatar
                  />
                </div>
                <h4>{depoimento.nome}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Botões de navegação fora do Swiper */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>

      <a href="https://wa.me/+5534991523387" className="whatsapp-button" target="_blank" rel="noopener noreferrer">
        Fale com a gente!
      </a>
    </div>
  );
};

export default DepoimentosSlider;