import React from 'react';
import {Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './reset.css';

import Header from 'components/Header/Header.js';
import Presentation from 'components/Presentation/Presentation.js';
import OurServices from 'components/OurServices/OurServices.js';
import Footer from 'components/Footer/Footer.js';
import Contact from 'components/Contact/Contact.js'
import Mvv from 'components/Mvv/Mvv.js';

function App() {
  return (
    <Router>
      <Header />
      <Presentation />
      <OurServices />
      <Mvv />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;