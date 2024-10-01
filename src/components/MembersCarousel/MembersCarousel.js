// Faixa dos direotres, com link para restante da equipe
import { useEffect, useState, useRef } from "react";

import linkedinIcon from "image/linkedin.png";
import navIcon from "image/carousel-nav.svg";
import "./MembersCarousel.css"

export default function MembersCarousel(props) {

    const [data, setData] = useState([]);
    const carousel = useRef(null);
    const carouselItem = useRef(null);

    // Função que vai ser executada sempre que a página é re-renderizada. Como não tem nenhuma dependência, só será executada uma vez, quando o componente for renderizado.
    useEffect(() => {
        fetch('http://localhost:3000/membros/membros.json')
            .then((response) => response.json())
            .then(setData);
    }, []);

    const handleLeftClick = (event) => {
        event.preventDefault();
        carousel.current.scrollLeft -= (carousel.current.offsetWidth - (carouselItem.current.offsetWidth) );
    }

    const handleRightClick = (event) => {
        event.preventDefault();
        carousel.current.scrollLeft += (carousel.current.offsetWidth - (carouselItem.current.offsetWidth) );
    }


    if (!data || !data.length) return null;

    return (
        <>
        <div className="carousel__container">
            <button onClick={handleLeftClick}
                className='carousel__nav desktop left'><img src={navIcon} alt="Anterior"></img>
            </button>
            <div className="carousel" ref={carousel}>
                {data.map((membro) => {
                    const { nome, curso, cargo, diretoria, foto, linkedin } = membro;
                    if (diretoria === props.diretoria) {
                        return (
                            <div className="carousel__item" key={nome} ref={carouselItem}>
                                <div className="carousel__info">
                                    <h3 className="nome">{nome}</h3>
                                    <p className="cargo">{cargo}</p>
                                    <p className="curso">Graduando em {curso}</p>
                                    <div className="carousel__image">
                                        <div className="profile-button">
                                            <a href={linkedin} target="_blank"><img src={linkedinIcon} alt="" /></a>
                                        </div>
                                        <img className="foto" alt="" src={foto} />
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
            <button onClick={handleRightClick} className='carousel__nav desktop right'>
                <img src={navIcon} alt="Próximo"></img>
            </button>
        </div>
            <div className="carousel__nav mobile">
                <button onClick={handleLeftClick}
                    className='carousel__nav left'><img src={navIcon} alt="Anterior"></img>
                </button>
                <button onClick={handleRightClick} className='carousel__nav right'>
                    <img src={navIcon} alt="Próximo"></img>
                </button>
            </div>
        </>
    )
}