import styles from 'components/portfolio/Projects.module.css'
import { Link } from 'react-router-dom';

import img1 from '../../../image/geo1.png';
import img2 from '../../../image/geo2.png';
import img3 from '../../../image/geo3.png';

export default function CaseGeoPhotos(){
    return(
        <div>

            <div id='case-anchor'></div>

            <div className={styles.caseTitulo}>
                <h2>Case de Sucesso</h2>
                <h1>Geo Photos</h1>
            </div>

            <section className={styles.caseDeSucesso}>
                <Link to="/portfolio" className={styles.link}> Ver todos os nossos projetos de destaque</Link>
                
                <div className={styles.container}>

                    <div>  
                        <h2>Sobre a Geo Photos</h2>
                        <p>Nosso cliente precisava de uma solução para o processamento de imagens que facilitasse e otimizasse o processo de adicionar coordenadas geográficas e cálculos às suas fotos, reduzindo significativamente o tempo gasto nessa tarefa.</p>
                    </div>

                    <div>
                        <h2>O desafio</h2>
                        <p>A solução deveria automatizar a adição de coordenadas geográficas e cálculos às fotos, eliminando erros e processos manuais demorados. Além disso, deveria ser intuitiva, precisa e otimizar o fluxo de trabalho, aumentando a produtividade.</p>
                    </div>

                </div>
                <div className={styles.container}>

                    <div>
                        <h2>A solução</h2>
                        <p>A ASCII desenvolveu para o cliente uma aplicação desktop utilizando Electron, uma tecnologia que permite criar aplicações multiplataforma com base em tecnologias web. Para atender às demandas específicas do projeto, foram integradas bibliotecas como Sharp, para processamento avançado de imagens, e EXIF, para manipulação e extração de metadados fotográficos, como coordenadas geográficas.

A interface gráfica foi projetada com HTML e CSS, priorizando a usabilidade e a experiência do usuário.

Essa solução combinou tecnologias modernas e de alta performance para entregar ao cliente uma aplicação intuitiva, eficiente e alinhada às suas necessidades, reduzindo significativamente o tempo de trabalho e aumentando a produtividade</p>
                    </div>

                </div>
                <div className={styles.galleryTitle}>

                    <h2>Galeria do Projeto</h2>

                </div>

                <div className={styles.gallery}>
                    <img className={styles.galleryItem} src={img1} alt=""></img>
                    <img className={styles.galleryItem} src={img2} alt=""></img>
                    <img className={styles.galleryItem} src={img3} alt=""></img>
                </div>

            </section>
        </div>
    );
};