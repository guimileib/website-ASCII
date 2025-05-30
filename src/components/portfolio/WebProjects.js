
// Neste arquivo, devem ser inseridos todos os projetos web que irão aparecer no portfolio. 
// Cada projeto deve ser um component 'ProjectCard'.

import styles from './Projects.module.css'
import ProjectCard from 'components/portfolio/ProjectCard.js'
import webIcon from 'image/web.svg'

// Thumbnails de projetos web
import uberground from 'image/uberground.png'

export default function () {
    return (
        <div className={styles.projects_wrapper}>
            <div className={styles.titles}>
                    <img src={webIcon} alt=""/>
                    <h2>Desenvolvimento <span>Web</span></h2>
                </div>

                 {/* Projetos são inseridos abaixos */}
                
                <ProjectCard 
                image={uberground}
                alt='Homepage do Uberground'
                title='Uberground'
                description='A Uberground é um site de divulgação cultural feito sob medida para Adreana Oliveira, com notícias e atualizações sobre a cena artística de Uberlândia.'
                link='https://uberground.com.br/'
                button='Visite o projeto »'
                />

        </div>
    );
}

