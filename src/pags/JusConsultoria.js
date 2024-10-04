import Header from 'components/Header/Header.js'
import TitleBanner from 'components/TitleBanner/TitleBanner.js';
import Projects from 'components/portfolio/Projects.js';
import BurguerMenu from 'components/BurguerMenu/BurguerMenu.js';

import CaseJusConsultoria from 'components/portfolio/cases/CaseJusConsultoria';
function Ubeground() {
  return (
    <>
      <div id="portfolio-anchor"></div>
      <BurguerMenu theme='light'/>
      <Header theme='dark'/>
      <CaseJusConsultoria />
    </>
  )
}

export default Ubeground;
