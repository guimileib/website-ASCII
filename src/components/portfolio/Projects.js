
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

import jus from 'image/Jus.png'
import uberground from 'image/uberground.png'

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
                    link='https://uberground.com.br/'
                />

                <ProjectCard 
                    image={jus}
                    alt='Jus Consultoria'
                    category='Desenvolvimento de Software'
                    title='Jus Consultoria'
                    description='Aplicativo desktop para preenchimento otimizado de contratos. Conta com sistema de cadastro com login e senha.'
                    link='https://jusconsultorias.com.br/'
                />
            </div>
        </section>
    );
}