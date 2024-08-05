import styles from './DevWeb.module.css'
import webIcon from 'image/web.svg'
import uberground from 'image/uberground.png'

export default function DevWeb(){
    return(
        <>  
            <div className={styles.titles}>
                <img src={webIcon} alt="globo"/>
                <h2>Desenvolvimento web</h2>
            </div>
            
            <div className={styles.projects}>
                <div className={styles.example}>
                    <img src={uberground} alt="projeto uberground"/>
                    <h4>Uberground</h4>
                    <p>A Uberground é um site de divulgação cultural feito sob medida para Adreana Oliveira, com notícias e atualizações sobre a cena artística de Uberlândia.</p>
                    <button to=''>visite o site »</button>
                </div>
            </div>
            
        </>
    )
}
