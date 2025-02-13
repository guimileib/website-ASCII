import { useEffect } from "react";
import Header from "../components/Header/Header.js";
import BurguerMenu from 'components/BurguerMenu/BurguerMenu.js';
import TitleBanner from 'components/TitleBanner/TitleBanner.js';
import EbooksLibrary from "components/EbooksLibrary/EbooksLibrary.js";

function Bibliotecaebooks() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>  
            <BurguerMenu theme='light'/>
            <Header theme='dark'/>
            <TitleBanner title='Biblioteca de Ebooks' image=''/>
            <EbooksLibrary/>
        </>
    );
}

export default Bibliotecaebooks;
