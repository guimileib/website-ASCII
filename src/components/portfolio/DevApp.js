import styles from './DevApp.module.css'
import appsIcon from 'image/apps.svg'
import jus from 'image/Jus.png'

export default function DevApp() {
    return (
        <>
            <div className={styles.title}>
                <img src={appsIcon} alt="grade" />
                <h2>Desenvolvimento de Aplicativos</h2>
            </div>

            <div className={styles.projects}>
                <div className={styles.example}>
                    <img src={jus} alt="tela jus" />
                    <h4>Jus Consultoria</h4>
                    <p>Aplicativo desktop que permite
                        que os usúarios realizem o preenchimento otimizado
                        de contratos. Sistema de cadastro com login e senha,
                        e redirecionamento dos documentos para assinatura
                        no gov.br</p>
                </div>
            </div>
        </>
    )
}
