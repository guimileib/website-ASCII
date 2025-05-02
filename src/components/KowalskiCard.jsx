import { useState, useEffect } from "react";
import "./KowalskiCard.css";
import { Webchat, WebchatProvider, getClient } from "@botpress/webchat";

const clientId = "316c2781-4069-4c74-8894-299d9b5e75d8";

const KowalskiCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWebchatOpen, setIsWebchatOpen] = useState(false);
  const [animateIcon, setAnimateIcon] = useState(false);

  // Adicionando animação periódica para chamar atenção (intervalo aumentado para economizar recursos)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isWebchatOpen) {
        setAnimateIcon(true);
        setTimeout(() => setAnimateIcon(false), 1000);
      }
    }, 15000); // Intervalo mais longo para economizar recursos
    
    return () => clearInterval(interval);
  }, [isWebchatOpen]);

  const client = getClient({
    clientId,
  });

  const configuration = {
    theme: 'dark',
    hideWidget: true,
    showCloseButton: false,
    disableAnimations: false,
    layoutWidth: '100%',
    containerWidth: '100%',
    enableTranscriptDownload: false,
    botName: "Kowalski IA",
    botConversationDescription: "Assistente da ASCII Empresa Junior",
    composerPlaceholder: "Fale com o Kowalski IA...",
    // URL da imagem do avatar (deve ser uma URL absoluta e acessível publicamente)
    avatarUrl: window.location.origin + "/images/kowalski.png",
    // Configurações do bot
    botAvatarUrl: window.location.origin + "/images/kowalski.png",
    userAvatarUrl: "", // Deixe vazio para usar a letra inicial do usuário
    // Desativar recursos que podem criar modais
    enableConversationDeletion: false,
    showTimestamp: true,
    showComposer: true,
    closeOnEscape: false,
    overrides: {
      css: {
        header: 'display: none !important;',
        chatContainer: 'background-color: transparent !important; border: none !important;',
        botMessageBubble: 'background-color: rgba(0, 20, 0, 0.8) !important; border: 1px solid #00FF00 !important; color: #eee !important;',
        userMessageBubble: 'background-color: rgba(0, 40, 0, 0.8) !important; border: 1px solid rgba(0, 255, 0, 0.4) !important; color: #eee !important;',
        composer: 'background-color: rgba(0, 20, 0, 0.7) !important; border-top: 1px solid #00FF00 !important; z-index: 1050 !important;',
        composerInputArea: 'background-color: rgba(0, 30, 0, 0.7) !important; color: #eee !important; border: 1px solid #00FF00 !important; border-radius: 10px !important; z-index: 1051 !important;',
        timestampColor: 'rgba(0, 255, 0, 0.7) !important;',
        sendButton: 'background-color: rgba(0, 180, 0, 0.8) !important; color: #000 !important; z-index: 1051 !important;',
        basicTranscriptBackground: 'transparent !important;',
        messageBackground: 'transparent !important;',
        messageTextColor: '#eee !important;',
        dateSeparatorBackground: 'rgba(0, 20, 0, 0.5) !important;',
        dateSeparatorTextColor: 'rgba(0, 255, 0, 0.7) !important;',
        typingAnimationBackground: 'rgba(0, 20, 0, 0.5) !important;',
        typingAnimationForeground: '#00FF00 !important;',
        modalBackground: 'display: none !important; opacity: 0 !important; pointer-events: none !important;',
        modalContent: 'display: none !important; opacity: 0 !important; pointer-events: none !important;',
        // Estilizar explicitamente o avatar
        avatar: 'border: 2px solid #00FF00 !important; box-shadow: 0 0 10px rgba(0, 255, 0, 0.4) !important;',
      }
    },
    messagingUrl: "https://messaging.botpress.cloud",
    useSessionStorage: true,
  };

  // Função para remover qualquer modal que apareça
  useEffect(() => {
    const removeModals = () => {
      const modals = document.querySelectorAll('.bpReset.bpModalContainer, [class*="bpModal"], [class^="bp-modal"]');
      modals.forEach(modal => {
        modal.style.display = 'none';
        modal.style.opacity = '0';
        modal.style.visibility = 'hidden';
        modal.style.pointerEvents = 'none';
        modal.style.zIndex = '-9999';
      });
    };

    // Executar a cada 1000ms para economizar recursos
    const intervalId = setInterval(removeModals, 1000);
    
    // Executar imediatamente também
    removeModals();
    
    // Limpar ao desmontar
    return () => clearInterval(intervalId);
  }, [isWebchatOpen]);

  // Efeito para garantir que a imagem do avatar seja carregada corretamente
  useEffect(() => {
    if (isWebchatOpen) {
      // Dar um tempo para o chat carregar e então ajustar avatares
      const timeoutId = setTimeout(() => {
        // Tentar substituir o fallback avatar
        const fallbackAvatars = document.querySelectorAll('.bpHeaderContentAvatarFallback');
        fallbackAvatars.forEach((avatar) => {
          // Remover qualquer conteúdo existente
          avatar.innerHTML = '';
          
          // Adicionar imagem diretamente
          const img = document.createElement('img');
          img.src = '/images/kowalski.png';
          img.alt = 'Kowalski IA';
          img.style.width = '100%';
          img.style.height = '100%';
          img.style.objectFit = 'contain';
          img.style.objectPosition = 'center';
          
          avatar.appendChild(img);
          
          // Também modificar o estilo diretamente para garantir
          avatar.style.backgroundImage = 'url(/images/kowalski.png)';
          avatar.style.backgroundSize = 'contain';
          avatar.style.backgroundPosition = 'center';
          avatar.style.backgroundColor = 'transparent';
          avatar.style.color = 'transparent';
        });
        
        // Também atualizar outros possíveis avatares do bot
        const botAvatars = document.querySelectorAll('.bpw-bot-avatar img');
        botAvatars.forEach((avatar) => {
          if (avatar instanceof HTMLImageElement) {
            avatar.src = '/images/kowalski.png';
          }
        });
      }, 1000);
      
      return () => clearTimeout(timeoutId);
    }
  }, [isWebchatOpen]);

  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState);
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
    toggleWebchat();
  };

  return (
    <>
      <div
        className={`kowalski-card experiment-card ${isWebchatOpen ? "active" : ""}`}
        style={{ maxWidth: "260px", margin: "0 auto", transform: "scale(0.9)" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={toggleWebchat}
      >
        <div className={`card-image ${animateIcon ? "pulse" : ""}`}>
          <img 
            src="/images/kowalski.png" 
            alt="Kowalski IA" 
            style={{ 
              maxWidth: "80%", 
              maxHeight: "80%", 
              objectFit: "contain",
              margin: "0 auto"
            }}
          />
          <div className="glow-overlay"></div>
        </div>
        <div className="card-content" style={{ padding: "0.8rem" }}>
          <h3 style={{ fontSize: "1.1rem", marginBottom: "0.4rem" }}>Kowalski IA</h3>
          <p style={{ fontSize: "0.85rem", marginBottom: "0.8rem", lineHeight: "1.3" }}>
            Assistente com IA para responder perguntas sobre ASCII e muito mais!
          </p>
          <button
            className="experiment-link"
            onClick={handleButtonClick}
            style={{ 
              padding: "0.4rem 0.8rem", 
              fontSize: "0.85rem",
              width: "100%"
            }}
          >
            Conversar Agora
          </button>
        </div>
      </div>

      {/* Chat Modal (separado do WebchatProvider) */}
      {isWebchatOpen && (
        <div className="chat-modal-container">
        <div className="chat-overlay" onClick={toggleWebchat}></div>
          
          <div className={`kowalski-webchat-container ${isWebchatOpen ? "open" : ""}`}>
            <div className="webchat-header" style={{ padding: "0.8rem" }}>
              <div className="webchat-header-content">
                <img 
                  src="/images/kowalski.png" 
              alt="Kowalski IA"
              className="webchat-avatar"
                  style={{ 
                    maxWidth: "30px", 
                    maxHeight: "30px", 
                    borderRadius: "50%" 
                  }}
            />
            <div className="webchat-info">
                  <h3 style={{ fontSize: "1rem", marginBottom: "0.2rem" }}>Kowalski IA</h3>
                  <span style={{ fontSize: "0.8rem" }}>Assistente ASCII</span>
            </div>
          </div>
          <div className="webchat-controls">
            <button className="minimize-webchat" onClick={toggleWebchat} title="Minimizar">
              _
            </button>
            <button className="close-webchat" onClick={toggleWebchat} title="Fechar">
              ×
            </button>
          </div>
        </div>
        <div className="webchat-content">
              <WebchatProvider client={client} configuration={configuration}>
          <Webchat />
              </WebchatProvider>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default KowalskiCard;
