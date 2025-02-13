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

import Uberground from 'pags/Uberground';
import JusConsultoria from 'pags/JusConsultoria'
import MembrosCarousel from 'components/MembersCarousel/MembersCarousel';
import Explore from "pags/Explore";
import Bibliotecaebooks from "pags/Bibliotecaebooks";



function App() {
  return (
    <Router>
      <ScrollToAnchor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/sobre" element={<AboutUs />} />
        <Route path="/membros" element={<Members />} />
        <Route path="/portfolio/uberground" element={<Uberground />} />
        <Route path="/portfolio/jus-consultoria" element={<JusConsultoria />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/Bibliotecaebooks" element={<Bibliotecaebooks />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;