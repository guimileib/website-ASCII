import React from "react";
import './ButtonWhatsapp.css'

import whatsappImagem from "../../image/botaoWhatsapp1.png";

function ButtonWhatsapp(){
    return(
        <>
            <a href="https://wa.me/+5534991523387" target="_black" className="botaoWhatsapp">
                <img src={whatsappImagem} alt="Botão Whatsapp"/>
            </a>
        </>
    )
}

export default ButtonWhatsapp;
