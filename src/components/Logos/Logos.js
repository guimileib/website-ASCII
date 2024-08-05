import styles from './Logos.module.css'
import algar from 'image/brain_logotipo_algar.png'
import bugware from 'image/bugware.png'
import Nucleo_triangulo from 'image/nucleo_triangulo.png'
import uberhub from 'image/uberhub.png'
import ufu from 'image/ufu.png'
import mti from 'image/mti.png'

function Logos(){
    return(
        <section className={styles.logos}>
            <h2>Nossas parcerias</h2>
            <div className={styles.logos_wrapper}>
                <img className={styles.images} src={algar} alt="Logo_algar"/>
                <img className={styles.images} src={Nucleo_triangulo} alt="Logo_nucleo"/>
                <img className={styles.images} src={uberhub} alt="Logo_uberhub"/>
                <img className={styles.images} src={bugware} alt="Logo_bugware"/>
                <img className={styles.images} src={ufu} alt="Logo_ufu"/>
                <img className={styles.images} src={mti} alt="Logo_mti"/>
            </div>
        </section>
    )
}

export default Logos