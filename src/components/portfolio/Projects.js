
// Neste arquivo, deve-se reunir as seções de todas as categorias de projetos (web, aplicativos, sistemas, etc).
// Cada categoria deve ser um componente separado, no qual estarão inseridos cada projeto.

import styles from './Projects.module.css'

import WebProjects from './WebProjects.js';
import AppProjects from './AppProjects.js';

export default function Projects() {
    return (
        <section className={styles.portfolio}>
            <WebProjects />
            <AppProjects />
        </section>
    );
}