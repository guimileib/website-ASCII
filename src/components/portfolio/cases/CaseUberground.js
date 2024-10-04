import styles from 'components/portfolio/Projects.module.css'
import FeedbackCard from 'components/FeedbackCard/FeedbackCard';
import chevronIcon from 'image/chevron-right.svg';
import { Link } from 'react-router-dom';

import img1 from '../../../image/uberground-1.jpg';
import img2 from '../../../image/uberground-2.jpg';
import img3 from '../../../image/uberground-3.jpg';

export default function CaseUberground() {
    return (
        <>
            <div className='case-anchor'></div>
            <div className={styles.caseTitulo}>
                <h2>Case de Sucesso</h2>
                <h1>Uberground</h1>
            </div>
            <section className={styles.caseDeSucesso}>
                <Link to="/portfolio" className={styles.link}> Ver todos os nossos projetos de destaque
                </Link>
                <div className={styles.container}>
                    <div>  
                        <h2>Sobre a Uberground</h2>
                        <p> Um dos casos de sucesso da nossa empresa envolveu um cliente que buscava um site jornalístico/cultural para apresentar matérias e artigos abrangendo diversos assuntos aos leitores.</p>
                    </div>
                    <div>
                        <h2>O desafio</h2>
                        <p>  O cliente tinha como objetivo oferecer uma plataforma dinâmica onde os usuários poderiam navegar livremente entre as seções “Arte e Diversão”, “Música”, “Cinema”, “Teatro”, “Literatura”, “Stream”, “Kids”, “Eu fui” e “Agenda Udi”. </p>
                    </div>
                </div>
                <div className={styles.container}>
                    <div>
                        <h2>A solução</h2>
                        <p> Com a ajuda da ASCII, o projeto foi construído utilizando WordPress, com 11 páginas no total. A Home e a página 'Sobre Adreana' foram estáticas, enquanto as demais ofereciam conteúdo dinâmico, permitindo inserção de novas notícias pelos administradores. </p>

                        <p> Além disso, os usuários podiam assinar notificações por e-mail para receber atualizações sobre novos artigos e matérias, e também acessar facilmente as redes sociais vinculadas ao site.
                        </p>

                        <p> Esse projeto não apenas atendeu às expectativas do cliente, mas também proporcionou uma experiência envolvente e interativa para os leitores do site UberGround.
                        </p>
                    </div>
                </div>
                <div className={styles.galleryTitle}>
                    <h2>Galeria do Projeto</h2>
                    <a href="">Acesse o site <img src={chevronIcon}></img></a>
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