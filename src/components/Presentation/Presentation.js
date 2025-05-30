import './Presentation.css'
import Computer from 'image/computer.png'

function Presentation() {
    return (
        <div className='presentation-wrapper'>
            <img className='computer' src={Computer} alt=''></img>
            <div className='presentation-text'>
                <h2>Sua ideia se transforma em <span>solução</span></h2>
                <p>Oferecemos serviços tecnológicos eficientes e acessíveis para o seu negócio, buscando sempre atender da melhor maneira possível!</p>
            </div>
        </div>
    );
};

export default Presentation