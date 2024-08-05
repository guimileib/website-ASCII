import './TitleBanner.css'
import Background from 'image/mapa-fundo.svg';
import WaveBottom from 'image/wave-bottom.svg';

export default function TitleBanner(props) {
    return (
        <section className='title-banner'>
            <div className='title-banner-background' 
            style={{backgroundImage: `url(${Background})`}}
            >
                <h2>{props.title}</h2>
                <img id={props.id} src={props.image}/>
            </div>
            <img className='wave-bottom' src={WaveBottom}></img>
        </section>
    );
};