import { useState } from 'react';

// Icons
import appsIcon from 'image/apps.svg'
import webIcon from 'image/web.svg'
import consultoriaIcon from 'image/consultoria.svg'
import sistemasIcon from 'image/sistemas.svg'
import chevronRight from 'image/chevron-right.svg'

// Pictures
import appsImg from 'image/apps.png'
import webImg from 'image/web.png'
import consultoriaImg from 'image/consultoria.png'
import sistemasImg from 'image/sistemas.png'

const services = [{
    id: 'apps',
    icon: appsIcon,
    title: 'Desenvolvimento de Aplicativos',
    description: 'Aplicativos desktop e mobile, para melhor servir a sua aplicação, se necessário',
    details: <>
        Criamos aplicativos móveis para Android e iOS, focando em desempenho e usabilidade. Nossas tecnologias são React Native e Flutter.
        <ul>
            <li>
                <span className='emphasis'>Interface Intuitiva: </span> Desenvolvemos o design do aplicativo, usando ferramentas como o Figma, assegurando acessibilidade e boa experiência do usuário.
            </li>
            <li>
                <span className='emphasis'>Soluções Sob Medida: </span> Seja gerenciar estoque, agendar serviços ou rastrear entregas, entre outros, procuramos compreender a sua necessidade para oferecer a melhor estratégia.
            </li>
        </ul>
    </>,
    image: appsImg
},
{
    id: 'web',
    icon: webIcon,
    title: 'Desenvolvimento Web',
    description: 'Criação e gerenciamento de sites estáticos e dinâmicos',
    details: <> <ul>
        <li>
            <span className='emphasis'>Responsividade:</span> Criamos sites que se adaptam a dispositivos móveis, tablets e desktops.
        </li>
        <li>
            <span className='emphasis'>Personalização:</span> Personalizamos o design, cores e funcionalidades para atender às suas necessidades.
        </li>
        <li>
            <span className='emphasis'>Funcionalidades de Back e Front-end:</span> Para além da interface, implementamos gerenciamento de conteúdo, formulários, integrações com APIs e mais.
        </li>
    </ul> </>,
    image: webImg
},
{
    id: 'sistemas',
    icon: sistemasIcon,
    title: 'Modelagem de Sistemas',
    description: 'Planejamento do seu produto, de acordo com as etapas da engenharia de software',
    details: <> <ul>
        <li>
            <span className='emphasis'>Análise de Requisitos: </span>Identificamos e documentamos suas necessidades para garantir que o software atenda às suas expectativas.
        </li>
        <li>
            <span className='emphasis'>Modelagem UML: </span>Criamos diagramas com casos de uso, classes, sequências, eatividades para visualizar e planejar o sistema.
        </li>
        <li>
            <span className='emphasis'>Design Arquitetural: </span>Desenvolvemos uma arquitetura eficiente  para garantir escalabilidade e segurança do software.
        </li>
        <li>
            <span className='emphasis'>Documentação Completa: </span>Fornecemos documentação para facilitar manutenção e atualizações.
        </li>
    </ul> </>,
    image: sistemasImg
},
{
    id: 'consultoria',
    icon: consultoriaIcon,
    title: 'Consultoria',
    description: 'Consultoria técnica para identificar e corrigir bugs em sistemas existentes, além de trabalhar com a documentação.',
    details: <> <ul>
        <li>
            <span className='emphasis'>Análise e Diagnóstico: </span>Avaliamos seu software para identificar oportunidades de melhoria.
        </li>
        <li>
            <span className='emphasis'>Refatoração: </span>Reestruturamos seu código para torná-lo mais eficiente, legível e fácil de manter.
        </li>
        <li>
            <span className='emphasis'>Treinamento:  </span>Ministramos treinamento para sua equipe.
        </li>

    </ul> </>,
    image: consultoriaImg
}];

export default function ServicesList() {
    const [active, setActive] = useState(null);

    return (
        <div className='services-list'>
            {services.map((service, idx) => {
                const isActive = active === idx;
                const selected = isActive ? 'service-card service-active' : 'service-card';
                const visible = active != null && active !== idx ? 'service-hidden' : '';

                return (
                    <div
                        className={`${selected} ${visible}`}
                        key={service.id}>
                        <div className='service-header'>
                            <img className='service-icon' src={service.icon} alt=""></img>
                            <h3>{service.title}</h3>
                        </div>
                        <p>{service.description}</p>
                        <label className='service-button'>
                            <input
                                type="checkbox"
                                onClick={() => {
                                    if (isActive) {
                                        setActive(null);
                                    } else {
                                        setActive(idx)
                                    }
                                }}>
                            </input>
                            {isActive ? 'Voltar' : 'Saiba Mais'}
                            <img src={chevronRight} className='chevronIcon' alt=''></img>
                        </label>

                        {isActive && <div className='service-details'>
                            <p>{service.details} </p>
                            <img src={service.image} alt=''></img>
                        </div>}
                    </div>
                );
            })}
        </div>
    );
};