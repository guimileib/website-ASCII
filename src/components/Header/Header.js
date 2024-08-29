import "./Header.css"

import {Link} from 'react-router-dom';
import logo from 'image/logo.png'


function Header(props) {
    return (
        <>
            <div className={`${props.theme} header`}>
                <Link to="/"><img className='logoheader' src={logo} alt="logo" id="logo-header"/></Link>
                <ul className='list'>
                    <li className='item'><Link to="/">Home</Link></li>
                    <li className='item'><Link to="/sobre">Quem Somos</Link></li>
                    <li className='item'><Link to="/portfolio">Portfolio</Link></li>
                    <li className='item'><Link to="/#agendar-reuniao">Contato</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Header