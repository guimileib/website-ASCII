import React from 'react';
import styles2 from 'components/Ebooks/Ebooks.module.css';
import styles from 'components/EbooksLibrary/EbooksLibrary.module.css';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Imagens
import imagemEbook from 'image/ebook-default.png'

function Ebooks(){
    const ebooks = Array(3).fill(null).map((_, index) => ({
        title: "Título E-book",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa elit lectus enim id euismod.",
        image: imagemEbook,
    }));
    
    return(
        <div className={styles.libraryContainer}>
            <div className={styles.libraryTitle}>
                <h2>Biblioteca de</h2>
                <h2 className={styles.titleHighlight}>eBooks</h2>
            </div>
            <div className={styles2.linkContainer}>
                <Link to="/Bibliotecaebooks">Ver todos</Link>
            </div>
            <div className={styles.ebooksContainer}>
            {ebooks.map((ebook, index) => (
                    <div key={index} className={styles.ebook}>
                        <div className={styles.ebookContent}>
                            <img src={ebook.image} alt="Ebook" className={styles.ebookImage} />
                            <div className={styles.ebookText}>
                                <h1 className={styles.ebookTitle}>{ebook.title}</h1>
                                <p className={styles.ebookDescription}>{ebook.description}</p>
                                <div className={styles.ebookDownload}>
                                    <p>Garanta o seu eBook</p>
                                    <button className={styles.ebookDownloadButton}>
                                        Baixar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Ebooks;