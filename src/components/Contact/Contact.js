import './Contact.css'

import mailIcon from 'image/mail.svg'
import whatsappIcon from 'image/whatsapp.svg'
import adressIcon from 'image/address.svg'

export default function Contact () {
    return (
        <section className='agendarReuniao' id="agendar-reuniao">
            <div className='agendarReuniao__text'>
                 <h3>Agende uma reunião!</h3>
                 <p>Saiba como nossa equipe pode ajudar a sua empresa!</p>
                 <button>
                    <a href='https://api.whatsapp.com/send?phone=5511971669926'>Entre em contato</a>
                 </button>
            </div>
            <div className='agendarReuniao__links'>
                <a className='agendarReuniao__link'>
                    <img src={mailIcon} alt=''/>ascii@gmail.com
                </a>
                <a className='agendarReuniao__link' href='https://api.whatsapp.com/send?phone=5511971669926'>
                <img src={whatsappIcon} alt=''/> (11) 97166-9926
                </a>
                <a className='agendarReuniao__link'  href='https://www.google.com.br/maps/place/UFU+BLOCO+1B/@-18.9187011,-48.2620915,17z/data=!3m1!4b1!4m6!3m5!1s0x94a445b99dd0589d:0xa56c91f962191311!8m2!3d-18.9187062!4d-48.2595166!16s%2Fg%2F11p02hs04k?entry=ttu'>
                <img src={adressIcon} alt=''/> Universidade Federal de Uberlândia, Bloco 1B, Sala 201A, Uberlândia - MG
                </a>
            </div>
        </section>
    );
};