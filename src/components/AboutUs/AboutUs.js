import missionIcon from "image/mission.svg"
import visionIcon from "image/vision.svg"
import valuesIcon from "image/values.svg"
import instagramLogo from "image/instagram-cor.png"
import linkedinLogo from "image/linkedin-cor.png"
import githubLogo from "image/github-cor.png"

import MembersCarousel from 'components/MembersCarousel/MembersCarousel.js';
import {Link} from 'react-router-dom';

import "./AboutUs.css"

export default function AboutUs() {
    return (
        <section className="about-us">
            <h2>Quem Somos</h2>
            <div className="about-us__text">
                <p>Desenvolvemos serviços e projetos para empresas de diferentes portes, atendendo demandas na área de <span>tecnologia da informação</span> - como apps desktop/mobile, sites e softwares completos.</p>
                <p>A ASCII Soluções em Tecnologia é uma instituição constituída e gerida exclusivamente por estudantes da computação da Universidade Federal de Uberlândia (UFU). Atuamos com front e back-end (design e experiencia do usuário, e funcionalidades da aplicação), ou seja, todo o escopo do projeto.</p>
            </div>
           
            <h2>Nossas lideranças</h2>
            <p>Nossa equipe é dividida em várias frentes, que contam com a liderança dos seguintes diretores:</p>
            <MembersCarousel diretoria="diretor" />
            <p className="highlight"> Contamos com um time dedicado e diverso, conheça mais sobre nossos membros: </p>
            <Link to="/membros/#members-anchor"><button>Conheça toda a equipe</button></Link>

            <section className="about-us__mvv">
                <h2>Missão, Visão, Valores</h2>
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
                <h2>Nos siga nas redes!</h2>
                <div className="social-media__wrapper">
                    <div className="social-media__container">
                        <img src={linkedinLogo} alt="Linkedin"></img>
                        <a target="_blank" href="https://www.linkedin.com/company/ascii-empresa-j%C3%BAnior/">ASCII Empresa Junior</a>
                    </div>

                    <div className="social-media__container">
                        <img src={instagramLogo} alt="Instagram"></img>
                        <a target="_blank" href="https://www.instagram.com/asciiempresajr/">@asciiempresajr</a>
                    </div>

                    <div className="social-media__container">
                        <img src={githubLogo} alt="Github"></img>
                        <a target="_blank" href="https://github.com/asciiej/website-ASCII">asciiej</a>
                    </div>
                </div>
            </section>
        </section>
    );
};