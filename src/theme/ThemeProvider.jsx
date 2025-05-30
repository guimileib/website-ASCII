import React, { useEffect } from 'react';

// Design tokens de cor
export const themeTokens = {
  primary: '#00ff00',
  primaryDark: '#00cc00',
  bg: '#000000',
  text: '#ffffff',
  grayDark: '#111111',
  gray: '#333333',
};

// Componente que injeta as variáveis CSS no :root
export const ThemeProvider = ({ children }) => {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--primary-color', themeTokens.primary);
    root.style.setProperty('--primary-dark', themeTokens.primaryDark);
    root.style.setProperty('--bg-color', themeTokens.bg);
    root.style.setProperty('--text-color', themeTokens.text);
    root.style.setProperty('--gray-dark', themeTokens.grayDark);
    root.style.setProperty('--gray', themeTokens.gray);
  }, []);

  return <>{children}</>;
};

// Como usar:
// import { ThemeProvider, themeTokens } from './theme/ThemeProvider';
//
// <ThemeProvider>
//   <App />
// </ThemeProvider>
//
// Agora as variáveis CSS estarão disponíveis globalmente e os tokens podem ser importados em JS/TS. 