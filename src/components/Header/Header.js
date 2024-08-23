import "./Header.css"

import {Link} from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import logo from 'image/logo.png'

function Header(props) {
    return (
        <>
            <div className={`${props.theme} header`}>
                <HashLink to="/#"><img className='logoheader' src={logo} alt="logo" id="logo-header"/></HashLink>
                <ul className='list'>
                    <li className='item'><Link to="/">Home</Link></li>
                    <li className='item'><Link to="/sobre">Quem Somos</Link></li>
                    <li className='item'><Link to="/portfolio">Portfolio</Link></li>
                    <li className='item'><HashLink to="/#agendar-reuniao">Contato</HashLink></li>
                </ul>
            </div>
        </>
    )
}

export default Header