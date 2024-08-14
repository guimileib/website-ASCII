import './Presentation.css'
import Computer from 'image/computer.png'

function Presentation() {
    return (
        <div className='presentation-wrapper'>
            <img className='computer' src={Computer} alt=''></img>
            <div className='presentation-text'>
                <h2>Sua ideia se transforma em <span>solução</span></h2>
                <p>Seja qual for o seu problema, a solução mais rapida e mais inteligente nós temos aqui para isso, trabalhamos com soluções personalizadas para atender sua empresa da melhor forma possível.</p>
            </div>
        </div>
    );
};

export default Presentation