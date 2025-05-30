
// Neste arquivo, deve-se reunir as seções de todas as categorias de projetos (web, aplicativos, sistemas, etc).
// Cada categoria deve ser um componente separado, no qual estarão inseridos cada projeto.
// Por exemplo: 
/* <section className={styles.portfolio}>
            <WebProjects />
            <AppProjects />
        </section> */
//
// Como a ASCII ainda tem poucos projetos, podemos usar o component de ProjectCard mesmo

import styles from './Projects.module.css'
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';

import jus from 'image/Jus.png'
import uberground from 'image/uberground.png'
import geophotos from 'image/geo1.png';
import constru from 'image/constru1.png';

export default function Projects() {
    return (
        <section className={styles.portfolio}>
            <h2>Conheça as histórias de nossos clientes</h2>
            <div className={styles.projects_wrapper}>
                <ProjectCard 
                    image={uberground}
                    alt='Homepage do Uberground'
                    category='Desenvolvimento de Site'
                    title='Uberground'
                    description='Site de divulgação cultural, com notícias e atualizações sobre a cena artística de Uberlândia.'
                    link='/portfolio/uberground/#case-anchor'
                />

                <ProjectCard 
                    image={jus}
                    alt='Jus Consultoria'
                    category='Desenvolvimento de Software'
                    title='Jus Consultoria'
                    description='Aplicativo desktop para preenchimento otimizado de contratos'
                    link='/portfolio/jus-consultoria/#case-anchor'
                />

                <ProjectCard 
                    image={geophotos}
                    alt='GeoPhotos'
                    category='Desenvolvimento de Software'
                    title='Geo Photos'
                    description='Aplicativo desktop para adição automática de coordenadas em fotos.'
                    link='/portfolio/geo-photos/#case-anchor'
                />
                <ProjectCard 
                    image={constru}
                    alt='Homepage da Constru'
                    category='Desenvolvimento de Site'
                    title='Constru'
                    description='Site institucional da empresa júnior Constru, especializada em construção civil.'
                    link='/portfolio/constru/#case-anchor'
                />        

            </div>
        </section>
    );
}