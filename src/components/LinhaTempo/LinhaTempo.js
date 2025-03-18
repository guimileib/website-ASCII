import foto from "image/fotoAscii.jpg"
import techmob from "image/techmob.png"
import asciiAntiga from "image/ASCIIAntiga.png"
import ano2021 from "image/2021.jpeg"
import mascotes from "image/mascotes.jpg"
import styles from './LinhaTempo.module.css';


function LinhaTempo() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>Nossa História</h2>
            </div>
            <div className={styles.grid}>
                <div className={styles.gridItem}>
                    <p className={styles.ano}>2013</p>
                    <p className={styles.texto}>A empresa Júnior da FACOM, inicialmente chamada Techbomb, foi fundada por estudantes de Ciência da Computação. Embora não tenha prosperado, plantou as sementes para o que viria a ser a ASCII.</p>
                    <img src={techmob} alt="foto"/>
                </div>
                <div className={styles.gridItem}>
                    <p className={styles.ano}>2019</p>
                    <p className={styles.texto}>A ASCII foi oficialmente criada, marcando o renascimento da Empresa Júnior da FACOM. Nossos primeiros projetos foram realizados em parceria com o Núcleo do Triângulo, estabelecendo as bases para nosso crescimento futuro.</p>
                    <img src={asciiAntiga} alt="foto" />
                </div>
                <div className={styles.gridItem}>
                    <p className={styles.ano}>2021</p>
                    <p className={styles.texto}>Apesar dos desafios impostos pela pandemia, a ASCII continuou a crescer, adaptando-se às novas realidades do mercado e mantendo nosso compromisso com a excelência.</p>
                    <img src={ano2021} alt="foto" />
                </div>
                <div className={styles.gridItem}>
                    <p className={styles.ano}>2024</p>
                    <p className={styles.texto}>Passamos por uma reestruturação completa, revitalizando nossa marca com uma nova logo, bandeira, camisas e mascotes. Este foi um ano de transformação e renovação.</p>
                    <img src={mascotes} alt="foto"  />
                </div>
                <div className={styles.gridItem}>
                    <p className={styles.ano}>2024.2</p>
                    <p className={styles.texto}>Nos tornamos uma empresa júnior colaborativa e tivemos a honra de subir ao palco do evento TransformaRR, sendo reconhecidos como Empresa Júnior de Alto Crescimento.</p>
                    <img src={foto} alt="foto" />
                </div>
            </div>
        </div>
    );
  }
  
  export default LinhaTempo;