import { HashLink } from "react-router-hash-link";
import { useState } from "react";

import "./BurguerMenu.css"
import logo from 'image/logo.png'

export default function BurguerMenu() {
    const [active, setMode] = useState(false);
    const ToggleMode = () => {
        setMode(!active)
    };

    return(
        <div className="menuHamburguer">
            <div className="menuContainer">
                <HashLink to="/#"><img className='logoheader' src={logo} alt="logo" id="logo-header"/></HashLink>
                <div className={active ? "icon iconActive" : "icon"} onClick={ToggleMode}>
                </div>
            </div>
            <div className={active ? "menu menuOpen" : "menu menuClose"}>
                <div className="list">
                    <ul className="listItems">
                        <li><HashLink to="/">Home</HashLink></li>
                        <li><HashLink to="/sobre-nos/#">Sobre Nós</HashLink></li>
                        <li><HashLink to="/#agendar-reuniao">Contato</HashLink></li>
                        <li><HashLink to="/portfolio/#">Portfolio</HashLink></li>
                    </ul>
                </div>
            </div>    
        </div>
    )
}