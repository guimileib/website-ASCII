
// Esse é o ocmponente do cartão de cada aprojeot
import styles from './ProjectCard.module.css'

export default function ProjectCard(props) {
    return (
        <div className={styles.project_card}>
            <img src={props.image} alt={props.alt}/>
            <div className={styles.project_text}>
                <h5>{props.category}</h5>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
            </div>
            <a href={props.link} target="_blank">
                <button>Saiba mais</button>
            </a>
        </div>
    );
}