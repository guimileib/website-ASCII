import styles from 'components/portfolio/Projects.module.css'
import FeedbackCard from 'components/FeedbackCard/FeedbackCard';
import chevronIcon from 'image/chevron-right.svg';
import { Link } from 'react-router-dom';

import img1 from '../../../image/jus-1.jpg';
import img2 from '../../../image/jus-2.jpg';
import img3 from '../../../image/jus-3.jpg';

export default function CaseJusConsultoria() {
    return (
        <>
            <div id='case-anchor'></div>
            <div className={styles.caseTitulo}>
                <h2>Case de Sucesso</h2>
                <h1>Jus Consultoria</h1>
            </div>
            <section className={styles.caseDeSucesso}>
                <Link to="/portfolio" className={styles.link}> Ver todos os nossos projetos de destaque
                </Link>
                <div className={styles.container}>
                    <div>  
                        <h2>Sobre a Jus Consultoria</h2>
                        <p> Um cliente que enfrentava desafios significativos no gerenciamento de contratos. Atualmente, os documentos contratuais estão dispersos, dificultando a revisão, o controle de versões e levantando preocupações com segurança e conformidade regulatória. 
                        </p>
                    </div>
                    <div>
                        <h2>O desafio</h2>
                        <p> Essa falta de uma solução centralizada compromete a eficiência operacional da empresa de advocacia e sua capacidade de responder prontamente às necessidades contratuais do cliente. </p>
                    </div>
                </div>
                <div className={styles.container}>
                    <div>
                        <h2>A solução</h2>
                        <p> Para resolver esses desafios e atender às necessidades específicas do cliente, propõe-se o desenvolvimento de um software robusto e eficiente para o gerenciamento de contratos. <br></br>
                        A solução proporcionou uma interface intuitiva e funcionalidades avançadas que simplificarão o trabalho diário com documentos contratuais.
                        <br></br><br></br>
                        Foi implementada uma tela de login segura para autenticação dos usuários e controle rigoroso de acesso, garantindo que apenas indivíduos autorizados possam visualizar e manipular os contratos. </p> 
                    </div>
                </div>
                <div className={styles.galleryTitle}>
                    <h2>Galeria do Projeto</h2>
                </div>
                <div className={styles.gallery}>
                    <img className={styles.galleryItem} src={img1} alt="Homepage do blog Uberground"></img>
                    <img className={styles.galleryItem} src={img2} alt="Exemplo de página do blog Uberhub"></img>
                    <img className={styles.galleryItem} src={img3} alt="Seção de comentários de uma página do blog Uberground"></img>
                </div>
            </section>
        </>
    );
};