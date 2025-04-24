import { useRef, useEffect } from 'react';
import ExperimentCard from '../../components/UI/ExperimentCard';
import KowalskiCard from '../../components/UI/KowalskiCard';
import TypingText from '../../components/Effects/TypingText';
import GlitchText from '../../components/Effects/GlitchText';
import './styles.css';

const Experimentos = () => {
  const earthRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (earthRef.current) {
        const scrollY = window.scrollY;
        const rotation = scrollY * 0.1; // Adjust rotation speed
        earthRef.current.style.transform = `rotate(${rotation}deg)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="experimentos-page">
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <h1>
              <GlitchText text="Experimento" glitchIntensity="medium" />
            </h1>
            <div className="typing-container">
              <TypingText 
                text="Aqui você encontrará os mais inovadores projetos da nossa empresa junior. Explore nossas ideias e conheça nossas criações."
                speed={30}
                className="hero-typing"
              />
            </div>
            <button className="iniciar-btn pulse">
              Iniciar Experiência
            </button>
          </div>
          <div className="earth-container">
            <img 
              ref={earthRef} 
              src="/images/mundi.png" 
              alt="Terra em ASCII" 
              className="earth-image" 
            />
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <h2><GlitchText text="SOBRE" glitchIntensity="low" /></h2>
          <div className="about-columns">
            <div className="about-column">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Fusce nec arcu id risus volutpat ullamcorper. Vivamus vel 
                hendrerit magna, vitae aliquet augue. Praesent ut massa non 
                urna condimentum volutpat. Sed nec purus sit amet tellus 
                tincidunt fermentum vel at nunc. Vestibulum ante ipsum 
                primis in faucibus orci luctus et ultrices posuere cubilia curae.
              </p>
            </div>
            <div className="about-column">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Fusce nec arcu id risus volutpat ullamcorper. Vivamus vel 
                hendrerit magna, vitae aliquet augue. Praesent ut massa non 
                urna condimentum volutpat. Sed nec purus sit amet tellus 
                tincidunt fermentum vel at nunc. Vestibulum ante ipsum 
                primis in faucibus orci luctus et ultrices posuere cubilia curae.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="experiments-section">
        <div className="container">
          <h2><GlitchText text="NOSSOS EXPERIMENTOS" glitchIntensity="low" /></h2>
          <div className="experiments-grid">
            <KowalskiCard />
            <ExperimentCard empty={true} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experimentos; 