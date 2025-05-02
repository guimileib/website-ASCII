import React from 'react';
import MainLayout from './layouts/MainLayout';
import Experimentos from './pages/Experimentos';
import ParticleBackground from './components/ParticleBackground';
import './styles/index.css';
import './App.css';

function App() {
  return (
    <>
      {/* Background effects - Matrix Rain removido */}
      <ParticleBackground />
      
      {/* Main content */}
      <MainLayout>
        <Experimentos />
      </MainLayout>
    </>
  );
}

export default App;
