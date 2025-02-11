import styles from './Logos.module.css'
import algar from 'image/brain_logotipo_algar.png'
import bugware from 'image/bugware.png'
import Nucleo_triangulo from 'image/nucleo_triangulo.png'
import uberhub from 'image/uberhub.png'
import ufu from 'image/ufu.png'
import mti from 'image/mti.png'
import magna from 'image/magna.png'
import fejemg from 'image/fejemg.png'
import motim from 'image/motim.webp'
import wattworks from 'image/wattworks.png'
import facom from 'image/facom.png'
import innovare from 'image/innovare.png'
import constru from 'image/constru.webp'
import consulpsi from 'image/consulpsi.webp'
import ecap from 'image/ecap.jpg'

function Logos(){
    return(
        <section className={styles.logos}>
            <h2>Nossas parcerias</h2>
            <div className={styles.logos_wrapper}>
                <img className={styles.images} src={consulpsi} alt="Logo_consulpsi"/>   
                <img className={styles.images} src={algar} alt="Logo_algar"/>
                <img className={styles.images} src={Nucleo_triangulo} alt="Logo_nucleo"/>
                <img className={styles.images} src={uberhub} alt="Logo_uberhub"/>
                <img className={styles.images} src={bugware} alt="Logo_bugware"/>
                <img className={styles.images} src={ufu} alt="Logo_ufu"/>
                <img className={styles.images} src={mti} alt="Logo_mti"/>
                <img className={styles.images} src={magna} alt="Logo_magna"/>
                <img className={styles.images} src={fejemg} alt="Logo_fejemg"/>
                <img className={styles.images} src={motim} alt="Logo_motim"/>
                <img className={styles.images} src={wattworks} alt="Logo_wattworks"/>
                <img className={styles.images} src={facom} alt="Logo_facom"/>
                <img className={styles.images} src={innovare} alt="Logo_innovare"/>
                <img className={styles.images} src={constru} alt="Logo_constru"/>
                <img className={styles.images} src={ecap} alt="Logo_ecap"/>
            </div>
        </section>
    )
}

export default Logos