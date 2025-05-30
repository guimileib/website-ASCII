import React from 'react';
import styles from 'components/NewsPage/NewsPage.module.css';

//Importação das imagens como objetos
import image from 'image/main-image-news.png'

function NewsPage(){
    return(
        <div className={styles.newsContainer}>
            <section className={styles.newsHeader}>
                <h1>
                    Lorem ipsum dolor sit amet consectetur. Amet orci vel amet massa sed eget. Netus quis netus egestas quis aliquam sed elementum at.
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Facilisi porttitor lacinia ultricies tempor ut aliquet vitae aliquet quam. Turpis et sit vel sed praesent sed aliquam malesuada. In tincidunt sed rhoncus arcu scelerisque scelerisque volutpat eget. Dictumst orci ullamcorper lorem ante lorem.
                </p>
                <div className={styles.publication}>
                    <p id='date'>23/01/2025</p>
                    <p id='time'>12:52</p>
                </div>
                <div className={styles.image}>
                    <img src={image}></img>
                    <p className={styles.description}>
                    Lorem ipsum dolor sit amet consectetur. Scelerisque fames posuere etiam amet. Nibh pulvinar viverra dignissim iaculis quis sapien pulvinar pharetra maecenas.
                    </p>
                </div>
            </section>
            <section className={styles.content}>
                <p className={styles.paragraph}>
                    Lorem ipsum dolor sit amet consectetur. Ac auctor a nulla feugiat elit dictum. Gravida et non ultricies mauris curabitur tempus porttitor justo. Ultrices elementum orci lorem metus vitae diam neque turpis in. Viverra eget leo neque aliquam auctor et. Gravida iaculis integer eu velit amet libero pulvinar sed donec. Lacus at imperdiet pellentesque aliquet lorem. Dolor habitant hac vel non.
                </p>
                <p className={styles.paragraph}>
                    Lorem ipsum dolor sit amet consectetur. Ac auctor a nulla feugiat elit dictum. Gravida et non ultricies mauris curabitur tempus porttitor justo. Ultrices elementum orci lorem metus vitae diam neque turpis in. Viverra eget leo neque aliquam auctor et. Gravida iaculis integer eu velit amet libero pulvinar sed donec. Lacus at imperdiet pellentesque aliquet lorem. Dolor habitant hac vel non.
                </p>
                <h2 className={styles.subtitle}>
                    Lorem ipsum dolor
                </h2>
                <p className={styles.paragraph}>
                    Lorem ipsum dolor sit amet consectetur. Ac auctor a nulla feugiat elit dictum. Gravida et non ultricies mauris curabitur tempus porttitor justo. Ultrices elementum orci lorem metus vitae diam neque turpis in. Viverra eget leo neque aliquam auctor et. Gravida iaculis integer eu velit amet libero pulvinar sed donec. Lacus at imperdiet pellentesque aliquet lorem. Dolor habitant hac vel non.
                </p>
                <p className={styles.paragraph}>
                    Lorem ipsum dolor sit amet consectetur. Ac auctor a nulla feugiat elit dictum. Gravida et non ultricies mauris curabitur tempus porttitor justo. Ultrices elementum orci lorem metus vitae diam neque turpis in. Viverra eget leo neque aliquam auctor et. Gravida iaculis integer eu velit amet libero pulvinar sed donec. Lacus at imperdiet pellentesque aliquet lorem. Dolor habitant hac vel non.
                </p>
            </section>
        </div>
    );
}

export default NewsPage;