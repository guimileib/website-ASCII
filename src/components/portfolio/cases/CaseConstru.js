import styles from 'components/portfolio/Projects.module.css'
import FeedbackCard from 'components/FeedbackCard/FeedbackCard';
import chevronIcon from 'image/chevron-right.svg';
import { Link } from 'react-router-dom';

import img1 from '../../../image/constru1.png';
import img2 from '../../../image/constru2.png';
import img3 from '../../../image/constru3.png';

export default function CaseConstru() {
    return (
        <>
            <div id='case-anchor'></div>
            <div className={styles.caseTitulo}>
                <h2>Case de Sucesso</h2>
                <h1>Constru</h1>
            </div>
            <section className={styles.caseDeSucesso}>
                <Link to="/portfolio" className={styles.link}> Ver todos os nossos projetos de destaque
                </Link>
                <div className={styles.container}>
                    <div>  
                        <h2>Sobre a Constru</h2>
                        <p> A Constru, empresa júnior de soluções para construção civil, recebeu um website moderno e responsivo, destacando seus serviços e facilitando o contato com clientes.</p>
                         <p> Com formulários otimizados para contato e solicitação de serviços., o site fortalece sua presença digital e competitividade no mercado.</p>
                            
                    </div>
                    <div>
                        <h2>O desafio</h2>
                        <p>Um cliente enfrentava grandes dificuldades na construção de sua presença digital. 
                            Sem um site, sua empresa sofria com a falta de visibilidade online, o que limitava o alcance de novos clientes e dificultava o acesso a informações essenciais sobre seus serviços. </p>
                            <p> Além disso, a ausência de uma plataforma centralizada impedia a interação eficiente com seu público, comprometendo a credibilidade e a competitividade no mercado digital. </p>
                    </div>
                </div>
                <div className={styles.container}>
                    <div>
                        <h2>A solução</h2>
                        <p>Para resolver esses desafios e atender às necessidades específicas do cliente, propôs-se o desenvolvimento de um site moderno e funcional. </p>

                        <p> A solução ofereceu um design responsivo e uma navegação intuitiva que melhoraram a experiência do usuário e destacaram os serviços da empresa.
                        </p>

                        <p> O site incluiu funcionalidades para facilitar o gerenciamento de conteúdo, permitindo atualizações rápidas e organizadas, além de oferecer ferramentas para capturar leads, como formulários otimizados para contato e solicitação de serviços.</p>
                        <p> Adicionalmente, o site integrou recursos de SEO e compatibilidade com dispositivos móveis, ampliando a visibilidade online e assegurando que o cliente se posicionasse de forma competitiva no mercado digital.</p>
                    </div>
                </div>
                <div className={styles.galleryTitle}>
                    <h2>Galeria do Projeto</h2>
                    <a href="https://construej.com.br/" target="_blank">Acesse o site <img src={chevronIcon}></img></a>
                </div>
                <div className={styles.gallery}>
                    <img className={styles.galleryItem} src={img1} alt="Homepage Constru"></img>
                    <img className={styles.galleryItem} src={img2} alt="Exemplo de página Constru"></img>
                    <img className={styles.galleryItem} src={img3} alt="Seção parcerias"></img>
                </div>
            </section>
        </>
    );
};