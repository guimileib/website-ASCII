import './Contact.css';
import { useState, useRef, useEffect } from 'react';
import InputMask from "react-input-mask";
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

import emailIcon from 'image/email.png';
import whatsappIcon from 'image/whatsapp.png';
import addressIcon from 'image/address.png';
import instagramIcon from 'image/instagram.png';
import linkedinIcon from 'image/linkedin.png';
import githubIcon from 'image/github.png';

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [telefone, setTelefone] = useState('');
    const [assunto, setAssunto] = useState('Orçamento');
    const [isFocused, setIsFocused] = useState(false);
    const [confirmationMessage, setConfirmationMessage] = useState('');
    const textareaRef = useRef(null);

    function sendEmail(e) {
        e.preventDefault();

        const templateParams = {
            from_name: "Formulário Site ASCII",
            name,
            message,
            email,
            telefone,
            assunto
        };

        emailjs.send("service_rvoi3gy", "template_h0wix3o", templateParams, "_AzRDYavKUnikg3Af")
        .then((response) => {
            console.log("EMAIL ENVIADO", response.status, response.text);
            setConfirmationMessage("Mensagem enviada com sucesso! Entraremos em contato em breve.");
            
            setName('');
            setEmail('');
            setMessage('');
            setTelefone('');
            setAssunto('');
            
            setTimeout(() => setConfirmationMessage(''), 10000);
        }, (erro) => {
            console.log("ERRO", erro);
            setConfirmationMessage("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
        });
    }

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [message]);

    return (
        <section className='contact-container' id="agendar-reuniao">
            <h2>Agende uma reunião!</h2>
            <p>Saiba como nossa equipe pode ajudar a sua empresa!</p>
            
            <div className='contact-content'>
                <div className='contact-info-container'>
                    <h3>Informações de Contato</h3>
                    <p>Fale conosco! Estamos à disposição para atender você.</p>
                    
                    <div className='contact-details'>
                        <div className="contact-item">
                            <img src={whatsappIcon} alt="Whatsapp" />
                            <a target="_blank" rel="noopener noreferrer" href="https://wa.me/+5534991523387">(34) 99152-3387</a>
                        </div>
                        <div className="contact-item">
                            <img src={emailIcon} alt="Email" />
                            <a target="_blank" rel="noopener noreferrer" href="mailto:ascii@gmail.com">ascii@gmail.com</a>
                        </div>
                        <div className="contact-item">
                            <img src={addressIcon} alt="Endereço" />
                            <a target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/ng1t8887m4m9fh2F9">Universidade Federal de Uberlândia, Bloco 1B, Uberlândia - MG</a>
                        </div>
                    </div>
                    
                    <div className='social-media-container'>
                        <Link target="_blank" to="https://www.instagram.com/asciiempresajr/"><img src={instagramIcon} alt="Instagram" className="social-icon" /></Link>
                        <Link target="_blank" to="https://www.linkedin.com/company/ascii-empresa-j%C3%BAnior/"><img src={linkedinIcon} alt="Linkedin" className="social-icon" /></Link>
                        <Link target="_blank" to="https://github.com/asciiej"><img src={githubIcon} alt="Github" className="social-icon" /></Link>
                    </div>
                </div>
                
                <div className='contact-form'>
                    <form className="form" onSubmit={sendEmail}>

                        <div className="input-container">
                            <input 
                                className={name ? "filled" : ""}
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                pattern="[A-Za-zÀ-ÖØ-öø-ÿ\s]+"
                                title="Digite apenas letras e espaços"
                                required
                            />
                            <label className={name || isFocused ? "label active" : "label"}>Nome</label>
                        </div>
                        
                        <div className="nomeEmail">
                            <div className="input-container">
                                <input
                                    className={email ? "filled" : ""}
                                    type="text"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    required
                                />
                                <label className={email || isFocused ? "label active" : "label"}>Email</label>
                            </div>
                            
                            <div className="input-container">
                                <InputMask
                                    mask="(99) 99999-9999"
                                    className={telefone ? "filled" : ""}
                                    type="tel"
                                    onChange={(e) => setTelefone(e.target.value)}
                                    value={telefone}
                                    required
                                />
                                <label className={telefone || isFocused ? "label active" : "label"}>Telefone</label>
                            </div>
                        </div>
                        
                        <div className="radio-container">
                            <p className="label">Selecionar Assunto</p>
                            <div className="radio-group">
                                {["Orçamento", "Dúvida", "Parceria", "Outros"].map((item) => (
                                    <label key={item} className={`radio-label ${assunto === item ? "selected" : ""}`}>
                                        <input
                                            type="radio"
                                            name="assunto"
                                            value={item}
                                            checked={assunto === item}
                                            onChange={(e) => setAssunto(e.target.value)}
                                            required
                                        />
                                        <span className="custom-radio"></span> {item}
                                    </label>
                                ))}
                            </div>
                        </div>
                        
                        <div className="input-container">
                            <textarea
                                ref={textareaRef}
                                className={message ? "filled" : ""}
                                placeholder="Escreva sua mensagem..."
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                                required
                            />
                        </div>
                        
                        <div className="container-button">
                            <input className="button" type="submit" value="Enviar mensagem" />
                        </div>
                        {confirmationMessage && <p className="confirmation-message">{confirmationMessage}</p>}
                    </form>
                </div>
            </div>
        </section>
    );
}
