import Content from "components/AboutUs/AboutUs.js"
import Banner from "components/TitleBanner/TitleBanner.js"
import AboutUsImg from "image/quem-somos.png"
import Header from "components/Header/Header.js";

export default function AboutUs() {
    return (
        <>  
            <Header theme="dark"/>
            <Banner title="Sobre Nós" id="about-us__banner-img" image={AboutUsImg}/>
            <Content />
        </>
    );
}