import missionIcon from "image/mission.svg"
import visionIcon from "image/vision.svg"
import valuesIcon from "image/values.svg"
import instagramLogo from "image/instagram-cor.png"
import linkedinLogo from "image/linkedin-cor.png"
import githubLogo from "image/github-cor.png"

import Background from 'image/mapa-fundo.svg';

import "./AboutUs.css"

export default function AboutUs() {
    return (
        <section className="about-us">
            <div className="about-us__container">
                <div className="about-us__title">
                    <h1>Quem Somos</h1>
                    {/* <button>Conheça nossa equipe</button> */}
                </div>
                <div className="about-us__text">
                    <p>A ASCII Soluções em Tecnologia é uma instituição constituída e gerida exclusivamente por estudantes da computação da Universidade Federal de Uberlândia (UFU).</p>
                    <br></br>
                    <p>Atuamos com front e back-end (design e experiencia do usuário, e funcionalidades da aplicação), ou seja, todo o escopo do projeto.</p>
                </div>
            </div>
            <p className="about-us__hero">Desenvolvemos serviços e projetos para empresas de diferentes portes, atendendo demandas na área de <span>tecnologia da informação</span> - como apps desktop/mobile, sites e softwares completos.</p>
            <section className="about-us__mvv">
                <div className="mvv__container">
                    <div className="mvv__card">
                        <img src={missionIcon} alt=""></img>
                        <div>
                            <h3>Missão</h3>
                            <p>Capacitar e transformar talentos através da inovação tecnológica, oferecendo soluções criativas e eficazes para nossos clientes, enquanto promovemos o crescimento pessoal e profissional de nossos membros.</p>
                        </div>
                    </div>
                    <div className="mvv__card">
                        <img src={visionIcon} alt=""></img>
                        <div>
                            <h3>Visão</h3>
                            <p>Ser referência em excelência e inovação na área da tecnologia, formando líderes e especialistas comprometidos com o desenvolvimento sustentável e a transformação digital.</p>
                        </div>
                    </div>
                </div>
                <div className="mvv__card">
                    <img src={valuesIcon} alt=""></img>
                    <div>
                        <h3>Valores</h3>
                        <ul>
                            <li><span>Inovação:</span> Buscando novas ideias e soluções para superar desafios e gerar valor. </li>
                            <li><span>Colaboração: </span>Acreditamos na força do trabalho em equipe e na diversidade de perspectivas para alcançar resultados excepcionais.</li>
                            <li><span>Desenvolvimento:</span> Investimos no crescimento contínuo de nossos membros, promovendo aprendizado e desenvolvimento pessoal e profissional.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="about-us__social-media">
                <h1>Nos siga nas redes!</h1>
                <h2>Fique por dentro das novidades</h2>
                <div className="social-media__wrapper">
                    <div className="social-media__container">
                        <img src={linkedinLogo} alt="Linkedin"></img>
                        <a href="https://www.instagram.com/asciiempresajr/">ASCII Empresa Junior</a>
                    </div>
                    
                    <div className="social-media__container">
                        <img src={instagramLogo} alt="Instagram"></img>
                        <a href="https://www.instagram.com/asciiempresajr/">@asciiempresajr</a>
                    </div>
                    
                    <div className="social-media__container">
                        <img src={githubLogo} alt="Github"></img>
                        <a href="https://www.instagram.com/asciiempresajr/">asciiej</a>
                    </div>
                </div>
            </section>
        </section>
    );
};