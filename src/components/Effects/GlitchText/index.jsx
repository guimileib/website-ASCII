import React, { useState, useEffect } from 'react';
import './styles.css';

const GlitchText = ({ text, className, glitchIntensity = 'medium' }) => {
  const [isGlitching, setIsGlitching] = useState(false);
  
  useEffect(() => {
    const glitchInterval = Math.random() * 5000 + 2000; // Random interval between 2-7 seconds
    
    const intervalId = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => {
        setIsGlitching(false);
      }, 200); // Glitch duration
    }, glitchInterval);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`glitch-container ${className || ''}`}>
      <div className={`glitch-text ${isGlitching ? 'active' : ''} ${glitchIntensity}`}>
        {text}
      </div>
      {isGlitching && (
        <>
          <div className="glitch-text glitch-top" aria-hidden="true">
            {text}
          </div>
          <div className="glitch-text glitch-bottom" aria-hidden="true">
            {text}
          </div>
        </>
      )}
    </div>
  );
};

export default GlitchText; 