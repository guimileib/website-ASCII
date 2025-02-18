import Header from 'components/Header/Header.js'
import TitleBanner from 'components/TitleBanner/TitleBanner.js';
import Projects from 'components/portfolio/Projects.js';
import BurguerMenu from 'components/BurguerMenu/BurguerMenu.js';
import CaseGeoPhotos from 'components/portfolio/cases/CaseGeoPhotos';
import ButtonWhatsapp from 'components/ButtonWhatsapp/ButtonWhatsapp.js';

function GeoPhotos() {
  return (
    <>
      <div id="portfolio-anchor"></div>
      <BurguerMenu theme='light'/>
      <Header theme='dark'/>
      <ButtonWhatsapp/>
      <CaseGeoPhotos/>
    </>
  )
}

export default GeoPhotos;
