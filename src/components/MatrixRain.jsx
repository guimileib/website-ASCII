import React, { useEffect, useRef } from 'react';
import './MatrixRain.css';

const MatrixRain = ({ opacity = 0.1 }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let drops = [];
    
    // Adjust canvas to fill window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeRain();
    };
    
    // Matrix characters (use ASCII characters for more terminal feel)
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>/?`~\\abcdefghijklmnopqrstuvwxyz'.split('');
    
    // Initialize drops
    const initializeRain = () => {
      drops = [];
      const columns = Math.floor(canvas.width / 20);
      
      for (let i = 0; i < columns; i++) {
        // Initialize drops at random positions above the canvas
        drops[i] = Math.floor(Math.random() * -canvas.height);
      }
    };
    
    // Draw matrix characters
    const draw = () => {
      // Set transparent background with opacity
      ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Set text color and style
      ctx.font = '15px monospace';
      
      for (let i = 0; i < drops.length; i++) {
        // Pick random character
        const char = chars[Math.floor(Math.random() * chars.length)];
        
        // Random green shade
        const greenIntensity = Math.floor(Math.random() * 156) + 100; // 100-255
        ctx.fillStyle = `rgba(0, ${greenIntensity}, 0, 0.8)`;
        
        // Draw character
        ctx.fillText(char, i * 20, drops[i]);
        
        // Move drops down
        drops[i] += Math.random() * 5 + 5;
        
        // Reset drops that reach bottom
        if (drops[i] > canvas.height) {
          if (Math.random() > 0.975) {
            drops[i] = 0;
          } else {
            drops[i] = Math.floor(Math.random() * -100);
          }
        }
      }
      
      animationRef.current = requestAnimationFrame(draw);
    };
    
    // Initialize and start animation
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    draw();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, [opacity]);

  return <canvas ref={canvasRef} className="matrix-rain"></canvas>;
};

export default MatrixRain; 