import styles from 'components/portfolio/Projects.module.css'

export default function FeedbackCard(props){
    return(
        <div className={styles.FeedbackCard}>
            <p className='feedback-message'>{props.message}</p>
            <div className="feedback-info">
                <img src={props.image} alt=""></img>
                <div>
                    <p>{props.author}</p>
                    <span>{props.authorInfo}</span>
                </div>
            </div>
        </div>
    );
};