
// Neste arquivo, devem ser inseridos todos os projetos de aplicativos que irão aparecer no portfolio. 
// Cada projeto deve ser um component 'ProjectCard'.

import styles from './Projects.module.css'
import ProjectCard from 'components/portfolio/ProjectCard.js'
import appsIcon from 'image/apps.svg'

// Thumbnails de aplicativos
import jus from 'image/Jus.png'

export default function () {
    return (
        <div className={styles.projects_wrapper}>
            <div className={styles.titles}>
                <img src={appsIcon} alt=""/>
                <h2>Desenvolvimento de <span>Aplicativos</span></h2>
            </div>

             {/* Projetos são inseridos abaixos */}

            <ProjectCard 
            image={jus}
            alt='Jus Consultoria'
            title='Jus Consultoria'
            description='Aplicativo desktop que permite que os usúarios realizem o preenchimento otimizado de contratos. Sistema de cadastro com login e senha,e redirecionamento dos documentos para assinatura no gov.br'
            link='https://jusconsultorias.com.br/'
            button='Saiba mais »'
            />
               
        </div>
    );
}

