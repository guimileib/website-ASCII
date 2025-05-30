// usar esse componente como modelo para futuros cases

import styles from 'components/portfolio/ProjectCard.module.css'
import FeedbackCard from 'components/FeedbackCard/FeedbackCard';
import chevronIcon from 'image/chevron-right.svg';

export default function CaseUberground() {
    return (
        <section className={styles.caseDeSucesso}>
            <div id='case-anchor'></div>
            <div className={styles.caseTitulo}>
                <h2>Case de Sucesso</h2>
                <h1>Jus Consultoria</h1>
            </div>
            <div className={styles.container}>
                <h2>Sobre a Jus Consultoria</h2>
                <p>
                    
                </p>
                <h2>O desafio</h2>
                <p>

                </p>
            </div>
            <div className={styles.container}>
                <h2>A solução</h2>
                <p>

                </p>
                <FeedbackCard />
            </div>
            <div className={styles.container}>
                <div>
                    <h2>Galeria do Projeto</h2>
                    <a href="">Acesse o site <img src={chevronIcon}></img></a>
                </div>
                <div className={styles.gallery}>
                    <img className={styles.galleryItem} src="" alt=""></img>
                    <img className={styles.galleryItem} src="" alt=""></img>
                    <img className={styles.galleryItem} src="" alt=""></img>
                </div>
            </div>
        </section>      
    );
};