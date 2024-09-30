import React from "react";
import Slider from "react-slick"

import { useState, useEffect } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./SliderCarousel.css";

import linkedinIcon from "image/linkedin.png";
import img from "image/apps.png";


function MemberCard(props) {
    
        const { nome, curso, cargo, diretoria, foto, linkedin } = props.membroP;
        if (diretoria === props.diretoria) {
            return (
                <div>
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
            );
        }
};


export default function SliderCarousel() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/membros/membros.json')
            .then((response) => response.json())
            .then(setData);
    }, []);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        swipeToSlide: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {data.map((membro) => { 
                    return (
                        <MemberCard diretoria="trainee" membroP={membro}/>
                    )
            })};
               
            </Slider>
        </div>
    );
}
