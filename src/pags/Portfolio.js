import {BrowserRouter as Router, Switch, Route, Link}from 'react-router-dom'
import Header from 'components/Header/Header.js'
import IntroPortfolio from 'components/portfolio/IntroPortfolio.js';
import DevWeb from 'components/portfolio/DevWeb.js';
import DevApp from 'components/portfolio/DevApp.js'

function Portfolio() {
  return (
    <>
      <Header theme="dark"/> 
      <IntroPortfolio/>
      <DevWeb/>
      <DevApp/>
    </>

  )
}

export default Portfolio;
