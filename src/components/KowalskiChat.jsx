import React, { useState, useEffect } from 'react';
import ReactWebChat from 'botframework-webchat';
import './KowalskiCard.css';
import './BotChat.css';
import createBotpressDirectLine from '../adapters/BotpressAdapter';

// This component is just a simple wrapper that adds Botpress chat
// directly to the page using their standalone embed code
const KowalskiChat = ({ isVisible, onClose }) => {
  const [directLine, setDirectLine] = useState(null);

  useEffect(() => {
    // Usar nosso adaptador Botpress
    const botpressUrl = 'https://messaging.botpress.cloud'; // URL do Botpress
    const botId = '316c2781-4069-4c74-8894-299d9b5e75d8'; // ID do seu bot Botpress
    
    const dl = createBotpressDirectLine(botpressUrl, botId);
    setDirectLine(dl);
    
    return () => {
      // Limpar
      if (dl) {
        dl.end();
      }
    };
  }, []);

  // Estilo personalizado para o webchat
  const styleOptions = {
    // Cores principais
    accent: '#00FF00',
    backgroundColor: 'transparent',
    subtle: 'rgba(0, 40, 0, 0.2)',
    
    // Botões e controles
    primaryFont: '"Courier New", monospace',
    botAvatarImage: '/kowalski.png',
    botAvatarInitials: 'K',
    userAvatarImage: null,
    userAvatarInitials: 'U',
    
    // Cabeçalho
    hideUploadButton: true,
    
    // Bolhas de mensagem
    bubbleBackground: 'rgba(0, 20, 0, 0.8)',
    bubbleBorderColor: '#00FF00',
    bubbleBorderRadius: 10,
    bubbleBorderWidth: 1,
    bubbleTextColor: '#eee',
    
    // Área de digitação
    sendBoxBackground: 'rgba(0, 30, 0, 0.7)',
    sendBoxBorderColor: '#00FF00',
    sendBoxBorderWidth: 1,
    sendBoxTextColor: '#eee',
    sendBoxPlaceholderColor: 'rgba(255, 255, 255, 0.6)',
    sendBoxButtonColor: '#00FF00',
    
    // Desabilitar o botão de upload
    sendBoxButtonColorOnHover: '#00CC00',
    
    // Ocultar elementos
    hideSendBox: false,
    hideUploadButton: true
  };

  if (!directLine || !isVisible) return null;

  return (
    <>
      {/* Overlay com efeito de blur */}
      <div className="chat-overlay" onClick={onClose}></div>
      
      <div className="kowalski-webchat-container">
        <div className="webchat-header">
          <div className="webchat-header-left">
            <img
              src="/kowalski.png"
              alt="Kowalski IA"
              className="webchat-avatar"
            />
            <div className="webchat-info">
              <h3>Kowalski IA</h3>
              <span className="status-indicator">
                <span className="status-dot"></span>
                Online
              </span>
            </div>
          </div>
          <div className="webchat-controls">
            <button className="minimize-webchat" onClick={onClose} title="Minimizar">
              _
            </button>
            <button className="close-webchat" onClick={onClose} title="Fechar">
              ×
            </button>
          </div>
        </div>
        
        <div className="webchat-content">
          <ReactWebChat 
            directLine={directLine} 
            styleOptions={styleOptions}
            userID="user-id" // Opcional: ID do usuário
            username="Usuário" // Opcional: Nome do usuário
          />
        </div>
      </div>
    </>
  );
};

export default KowalskiChat; 