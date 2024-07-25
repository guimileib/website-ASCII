import React from 'react';
import './Mvv.css';

function Mvv(){
    return (
        <div className='corpo'>
            <div className='texto'>
                <h2>Missão, Visão, Valores</h2>
            </div>
            <div className='cards'>
                <div className='card'>
                    <img alt=''></img>
                    <h3>Missão</h3>
                    <p>Capacitar e transformar talentos através da inovação tecnológica, oferecendo soluções criativas e eficazes para nossos clientes, enquanto promovemos o crescimento pessoal e profissional de nossos membros.</p>
                </div>
                <div className='card'>
                    <img alt=''></img>
                    <h3>Visão</h3>
                    <p>Ser referência em excelência e inovação na área da tecnologia, formando líderes e especialistas comprometidos com o desenvolvimento sustentável e a transformação digital.</p>
                </div>
                <div className='card'>
                    <img alt=''></img>
                    <h3>Valor</h3>
                    <p>Inovação:
                       Buscando novas ideias e soluções para superar desafios e gerar valor.
                        Colaboração:
                        Acreditamos na força do trabalho em equipe e na diversidade de perspectivas para alcançar resultados excepcionais.
                        Desenvolvimento:
                        Investimos no crescimento contínuo de nossos membros, promovendo aprendizado e desenvolvimento pessoal e profissional.</p>
                </div>
            </div>
            <div className='botao'>
                <button to='' >Conheça mais sobre Nós</button>
            </div>
        </div>        
    );
}

export default Mvv;