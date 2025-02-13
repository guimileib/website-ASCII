import React from 'react';
import styles from 'components/EbooksLibrary/EbooksLibrary.module.css';

//Imagens
import imagemEbook from 'image/ebook-default.png'

function EbooksLibrary() {

    // Simulação de uma lista de eBooks
    const ebooks = Array(9).fill(null).map((_, index) => ({
        title: "Título E-book",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa elit lectus enim id euismod.",
        image: imagemEbook,
    }));

    /*
    //Um array para conter os ebooks reais do site, fazer substituição dos dados:

    const ebooks = [
    {
        title: "Aprenda JavaScript",
        description: "Descubra os fundamentos do JavaScript e torne-se um desenvolvedor web.",
        image: imagemEbook,
    },
    ]
    */

    return (
        <>
         <div id="Bibliotecaebooks-anchor"></div>
        <div className={styles.libraryContainer}>
            <div className={styles.libraryTitle}>
                <h2>Biblioteca de</h2>
                <h2 className={styles.titleHighlight}>eBooks</h2>
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
        </>
    );
}

export default EbooksLibrary;