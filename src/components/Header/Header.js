import "./Header.css"

import logo from 'image/logo.png'
import esfumacado from 'image/esfumacado.png'

function Header() {
    return (
        <>
            <img className='shadow' src={esfumacado} alt="Sombra"/>
            <div className='header'>
                <img className='logoheader' src={logo} alt="logo" />
                <ul className='list'>
                    <li className='item'><a href="#">Home</a></li>
                    <li className='item'><a href="#">Quem Somos</a></li>
                    <li className='item'><a href="#">Portfólio</a></li>
                    <li className='item'><a href="#">Contato</a></li>
                </ul>
            </div>
        </>
    )
}

export default Header