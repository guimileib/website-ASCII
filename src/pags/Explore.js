import { useEffect } from "react";
import Header from "../components/Header/Header.js";
import BurguerMenu from 'components/BurguerMenu/BurguerMenu.js';
import Ebooks from "../components/Ebooks/Ebooks";
import TitleBanner from 'components/TitleBanner/TitleBanner.js';

function Explore() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>  
            <BurguerMenu theme='light'/>
            <Header theme='dark'/>
            <TitleBanner title='Explore+' image=''/>
            <Ebooks/>
        </>
    );
}

export default Explore;