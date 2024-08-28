import React from 'react';
import './Mvv.css';

import missionIcon from "image/mission.svg"
import visionIcon from "image/vision.svg"
import valuesIcon from "image/values.svg"
import { Link } from 'react-router-dom';
function Mvv(){
    return (
        <section className='mvv'>
            <div className='cards-wrapper'>
                <div className='card'>
                    <img src={missionIcon} alt=''></img>
                    <h3>Missão</h3>
                    <p>Oferecer resultados eficazes para nossos clientes, enquanto promovemos o crescimento pessoal e profissional de nossos membros.</p>
                </div>
                <div className='card'>
                    <img src={visionIcon} alt=''></img>
                    <h3>Visão</h3>
                    <p>Ser referência na área de soluções digitais, formando profissionais qualificados para lidar com a tranasformação tecnológica.</p>
                </div>
                <div className='card'>
                    <img src={valuesIcon} alt=''></img>
                    <h3>Valores</h3>
                    <p>Inovação, Colaboração e Comprometimento. </p>
                </div>
            </div>
            <Link to="/sobre"><button>Conheça mais sobre Nós</button></Link>
        </section>        
    );
}

export default Mvv;