import React from 'react';
import MainLayout from './layouts/MainLayout';
import Experimentos from './pages/Experimentos';
import MatrixRain from './components/MatrixRain';
import ParticleBackground from './components/ParticleBackground';
import './App.css';

function App() {
  return (
    <>
      {/* Background effects */}
      <MatrixRain opacity={0.05} />
      <ParticleBackground />
      
      {/* Main content */}
      <MainLayout>
        <Experimentos />
      </MainLayout>
    </>
  );
}

export default App;
