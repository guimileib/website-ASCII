import React, { useState, useEffect, useRef } from 'react';
import './styles.css';

const TypingText = ({ text, className, speed = 50, startDelay = 0, cursorBlink = true }) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const typingTimer = useRef(null);
  const cursorTimer = useRef(null);
  
  useEffect(() => {
    let delay = startDelay;
    let currentIndex = 0;
    
    const startTyping = () => {
      setIsTyping(true);
      
      typingTimer.current = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingTimer.current);
          setIsTyping(false);
        }
      }, speed);
    };
    
    const timeout = setTimeout(startTyping, delay);
    
    // Cursor blinking effect
    if (cursorBlink) {
      cursorTimer.current = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);
    }
    
    return () => {
      clearTimeout(timeout);
      clearInterval(typingTimer.current);
      clearInterval(cursorTimer.current);
    };
  }, [text, speed, startDelay, cursorBlink]);
  
  return (
    <div className={`typing-text ${className || ''}`}>
      <span>{displayText}</span>
      {(isTyping || cursorBlink) && (
        <span className={`cursor ${showCursor ? 'visible' : 'hidden'}`}>_</span>
      )}
    </div>
  );
};

export default TypingText; 