import './Services.css'
import Background from 'image/mapa-fundo.svg';
import WaveBottom from 'image/wave-bottom.svg';
import WaveTop from 'image/wave-top.svg';
import ServicesList from './ServicesList.js';

export default function OurServices( ) {
    return (
        <section className='services'>
            <img className='wave-top' src={WaveTop}></img>
            <div className='services-background' 
            style={{backgroundImage: `url(${Background})`}}
            >
                <h2>Nossos Serviços</h2>
                <ServicesList />
            </div>
            <img className='wave-bottom' src={WaveBottom}></img>
        </section>
    );
};