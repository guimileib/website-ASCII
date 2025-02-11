import Header from 'components/Header/Header.js';
import Presentation from 'components/Presentation/Presentation.js';
import PortfolioSection from 'components/PortfolioSection/PortfolioSection.js';
import Logos from 'components/Logos/Logos.js';
import OurServices from 'components/OurServices/OurServices.js';
import Mvv from 'components/Mvv/Mvv.js';
import Contact from 'components/Contact/Contact.js';
import BurguerMenu from 'components/BurguerMenu/BurguerMenu.js';
import DepoimentosSlider from 'components/Avaliações/DepoimentosSlider.js';

function Home() {
  return (
    <>
      <BurguerMenu />
      <Header theme="default"/>
      <Presentation />
      <OurServices />
      <PortfolioSection />
      <Mvv />
      <DepoimentosSlider />
      <Contact />
      <Logos />

    </>
  );
}

export default Home;