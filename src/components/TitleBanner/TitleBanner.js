// Componente com o banner padrão que está no topo de cada página, com o título da seção e imagem opcional.
// Os props que podem ser utilizados são:
//      title: Título da página
//      id:    Identificação única da imagem do banner daquela página, para eventuais alterações de tamanho usando CSS.
//      image: Componente com a imagem opcional, vai aparecer ao lado direito do título.

import './TitleBanner.css'
import Background from 'image/mapa-fundo.svg';
import WaveBottom from 'image/wave-bottom.svg';

export default function TitleBanner(props) {
    return (
        <section className='title-banner'>
            <div className='title-banner-background' 
            style={{backgroundImage: `url(${Background})`}}
            >
                <h1>{props.title}</h1>
                <img id={props.id} src={props.image} alt=""/>
            </div>
            <img className='wave-bottom' src={WaveBottom}></img>
        </section>
    );
};