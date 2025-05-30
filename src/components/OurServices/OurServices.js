import './Services.css';
import Background from 'image/mapa-fundo.svg';
import WaveBottom from 'image/wave-bottom.svg';
import WaveTop from 'image/wave-top.svg';
import ServicesList from './ServicesList.js';

export default function OurServices() {
    return (
        <section className='services'>
            <img className='wave-top' src={WaveTop} alt="Wave Top" />
            <div className='services-background' id="services-header"
                style={{ backgroundImage: `url(${Background})` }}
            >
                <h2>Nossos Serviços</h2>
                <ServicesList />
                <button 
                className="pdf-button" 
                onClick={() => window.open('/Carta de Serviços ASCII.pdf', '_blank')}
            >
                Confira nossa carta de serviços
            </button>
            </div>



            <img className='wave-bottom' src={WaveBottom} alt="Wave Bottom" />
        </section>
    );
};
