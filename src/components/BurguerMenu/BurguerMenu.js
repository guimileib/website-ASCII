import { useState } from "react";
import { Link } from "react-router-dom";

import "./BurguerMenu.css"
import logo from 'image/logo.png'

export default function BurguerMenu(props) {
    const [active, setMode] = useState(false);
    const ToggleMode = () => {
        setMode(!active)
    };

    return(
        <div className={'menuHamburguer'}>
            <div className="menuContainer">
                <Link path="/"><img className='logoheader' src={logo} alt="logo" id="logo-header"/></Link>
                <div className={active ? 'icon iconActive' : `${props.theme} icon`} onClick={ToggleMode}>
                </div>
            </div>
            <div className={active ? 'menu menuOpen' : "menu menuClose"}>
                <div className="list">
                    <ul className="listItems">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/sobre/#">Sobre Nós</Link></li>
                        <li><Link to="/#agendar-reuniao">Contato</Link></li>
                        <li><Link to="/portfolio/#">Portfolio</Link></li>
                    </ul>
                </div>
            </div>    
        </div>
    )
}