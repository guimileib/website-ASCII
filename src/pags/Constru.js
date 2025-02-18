import Header from 'components/Header/Header.js'
import TitleBanner from 'components/TitleBanner/TitleBanner.js';
import Projects from 'components/portfolio/Projects.js';
import BurguerMenu from 'components/BurguerMenu/BurguerMenu.js';
import CaseConstru from 'components/portfolio/cases/CaseConstru.js';
import ButtonWhatsapp from 'components/ButtonWhatsapp/ButtonWhatsapp.js';

function Constru() {
  return (
    <>
      <div id="portfolio-anchor"></div>
      <BurguerMenu theme='light'/>
      <Header theme='dark'/>
      <ButtonWhatsapp/>
      <CaseConstru/>
    </>
  )
}

export default Constru;
