import photo from 'image/Services_image.png'
import styles from './PortfolioSection.module.css'
import {Link} from 'react-router-dom';

function PortfolioSection() {
    return (
        <section className={styles.call_to_action}>
            <img className={styles.services_image} src={photo} alt="services_image" />
            <div>
                <h2 className={styles.text}>Saiba como a ASCII pode<br></br>ajudar o <span>seu negócio</span>!</h2>
                <Link to="/portfolio"><button>Visite nosso portfólio </button></Link>
            </div>
        </section>
    )
}

export default PortfolioSection