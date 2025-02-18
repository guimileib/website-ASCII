import React from "react";
import './ButtonWhatsapp.css'

import whatsappImagem from "../../image/botaoWhatsapp1.png";

function ButtonWhatsapp(){
    return(
        <>
            <a href="https://api.whatsapp.com/send?phone=5511971669926" target="_black" className="botaoWhatsapp">
                <img src={whatsappImagem} alt="Botão Whatsapp"/>
            </a>
        </>
    )
}

export default ButtonWhatsapp;