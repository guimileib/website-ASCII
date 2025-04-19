import { useEffect } from "react";
import Header from "../components/Header/Header.js";
import BurguerMenu from 'components/BurguerMenu/BurguerMenu.js';
import Ebooks from "../components/Ebooks/Ebooks";
import TitleBanner from 'components/TitleBanner/TitleBanner.js';
import ButtonWhatsapp from 'components/ButtonWhatsapp/ButtonWhatsapp.js';
import ASCIIPlayCarousel from 'components/ASCIIPlayCarousel/ASCIIPlayCarousel';


function Explore() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>  
            <BurguerMenu theme='light'/>
            <Header theme='dark'/>
            <ButtonWhatsapp/>
            <TitleBanner title='Explore+' image=''/>
            <div
            style={{
                background: `linear-gradient(
                to bottom,
                #FFFFFF 0%,
                #c6e1ff 38%,
                #FFFFFF 98%
                )`,
            }}
            >
            <Ebooks />
            <ASCIIPlayCarousel />
            </div>
        </>
    );
}

export default Explore;