import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {BrowserRouter as Router, Switch, Link} from 'react-router-dom'
import ScrollToAnchor from 'components/ScrollToAnchor/ScrollToAnchor';

import './reset.css';

import Home from 'pags/Home.js'
import Footer from './components/Footer/Footer.js';
import Portfolio from 'pags/Portfolio.js';
import AboutUs from 'pags/AboutUs.js';
import Members from 'pags/Members.js';

import MembrosCarousel from 'components/MembersCarousel/MembersCarousel';

function App() {
  return (
    <Router>
      <ScrollToAnchor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/sobre" element={<AboutUs />} />
        <Route path="/membros" element={<Members />} />
        
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;