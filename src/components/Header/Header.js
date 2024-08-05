import "./Header.css"

import {Link} from 'react-router-dom';
import logo from 'image/logo.png'
import esfumacado from 'image/esfumacado.png'

function Header(props) {
    return (
        <>
            <img className='shadow' src={esfumacado} alt="Sombra"/>
            <div className={`${props.theme} header`}>
                <img className='logoheader' src={logo} alt="logo" />
                <ul className='list'>
                    <li className='item'><Link to="/">Home</Link></li>
                    <li className='item'><Link to="/sobre">Quem Somos</Link></li>
                    <li className='item'><Link to="/portfolio">Portfolio</Link></li>
                    <li className='item'><Link to="/">Contato</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Header