import {BrowserRouter as Router, Switch, Route, Link}from 'react-router-dom'

// Componente
import Header from 'components/Header/Header.js'
import TitleBanner from 'components/TitleBanner/TitleBanner.js';
import Projects from 'components/portfolio/Projects.js';
import Footer from 'components/Footer/Footer.js';

function Portfolio() {
  return (
    <>
      <Header theme='dark'/>
      <TitleBanner title='Nosso Portfolio' image=''/>
       <Projects />
    </>
  )
}

export default Portfolio;
