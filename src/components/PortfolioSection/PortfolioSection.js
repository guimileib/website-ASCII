import photo from 'image/Services_image.png'
import styles from './PortfolioSection.module.css'

function PortfolioSection() {
    return (
        <section className={styles.call_to_action}>
            <img className={styles.services_image} src={photo} alt="services_image" />
            <div>
                <h2 className={styles.text}>O CHAMADO PARA AÇÃO</h2>
                <button to=''>Visite nosso portfólio</button>
            </div>
        </section>
    )
}

export default PortfolioSection