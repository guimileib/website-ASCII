import { useState, useEffect } from "react";
import "./styles.css";
import { Webchat, WebchatProvider, getClient } from "@botpress/webchat";

const clientId = "316c2781-4069-4c74-8894-299d9b5e75d8";

const KowalskiCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWebchatOpen, setIsWebchatOpen] = useState(false);

  const client = getClient({
    clientId,
  });

  const configuration = {
    color: "#00FF00",
    botName: "",
    botConversationDescription: "Assistente ASCII",
    useSessionStorage: true,
    messagingUrl: "https://messaging.botpress.cloud",
    composerPlaceholder: "Fale com o assistente...",
    avatarUrl: "/kowalski.png",
    stylesheet:
      "https://webchat-styler-css.botpress.app/prod/code/7d97d93a-d91e-4e5e-a98c-81afba7c4ddd/v31331/style.css",
    showConversationHeader: true,
    hideWidget: true,
  };

  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState);
    // Toggle body scroll when chat is open/closed
    if (!isWebchatOpen) {
      document.body.style.overflow = "hidden";
      
      // Remover cabeçalhos manualmente após um breve delay
      setTimeout(() => {
        const headers = document.querySelectorAll('.webchat-header, .bpw-header-container, .bpw-header, .bpw-layout header');
        headers.forEach(header => {
          if (header) header.style.display = 'none';
        });
        
        // Também substituir o avatar fallback "K" por uma imagem de pinguim
        const avatarFallbacks = document.querySelectorAll('.bpHeaderContentAvatarFallback');
        avatarFallbacks.forEach(avatar => {
          avatar.style.backgroundImage = 'url("/kowalski.png")';
          avatar.style.backgroundSize = 'cover';
          avatar.style.backgroundPosition = 'center';
          avatar.style.color = 'transparent';
          avatar.style.fontSize = '0';
          avatar.textContent = ''; // Remover o conteúdo de texto (a letra K)
        });
        
        // Substituir os avatares das bolhas de mensagem por imagens de pinguim
        const messageAvatars = document.querySelectorAll('.bpMessageAvatarFallback');
        messageAvatars.forEach(avatar => {
          avatar.style.backgroundImage = 'url("/kowalski.png")';
          avatar.style.backgroundSize = 'cover';
          avatar.style.backgroundPosition = 'center';
          avatar.style.color = 'transparent';
          avatar.style.fontSize = '0';
          avatar.textContent = ''; // Remover o conteúdo de texto
        });
        
        // Remover o "B" e o círculo verde no meio do chat
        const conversationStartElements = document.querySelectorAll(
          '.bpMessageListConversationStart, ' +
          '.bpMessageListConversationStartContainer, ' +
          '[class*="bpMessageListConversationStart"], ' +
          '[class*="ConversationStart"], ' +
          '.bpMessageListConversationStartAvatar, ' +
          '[class*="ConversationStartAvatar"]'
        );
        conversationStartElements.forEach(element => {
          if (element) element.style.display = 'none';
        });
        
        // Remover o "⚡ by Botpress" do rodapé
        const botpressElements = document.querySelectorAll(
          '.bpw-powered, ' +
          'div[class*="powered"], ' +
          '[class*="botpress"], ' +
          '.bpw-powered-by, ' +
          '[class*="PoweredBy"], ' +
          '.bp-powered, ' +
          'footer, ' +
          '.bpw-powered-container'
        );
        botpressElements.forEach(element => {
          if (element) {
            element.style.display = 'none';
            element.style.visibility = 'hidden';
            element.style.opacity = '0';
            element.style.height = '0';
            element.style.width = '0';
            element.style.margin = '0';
            element.style.padding = '0';
            element.remove(); // Tenta remover completamente o elemento
          }
        });
        
        // Remover a borda dupla da caixa de texto
        const composerContainers = document.querySelectorAll(
          '.bpw-composer, ' +
          'div[class*="bpComposer"], ' +
          '.bpw-composer-outer, ' +
          'div[class*="composer-outer"]'
        );
        composerContainers.forEach(element => {
          if (element) {
            element.style.border = 'none';
            element.style.boxShadow = 'none';
            element.style.outline = 'none';
            element.style.backgroundColor = '#111111';
          }
        });
        
        // Estilizar a caixa de texto interna
        const composerInners = document.querySelectorAll(
          '.bpw-composer-inner, ' +
          'div[class*="composer-inner"], ' +
          '.bpw-composer-container, ' +
          'div[class*="composer-container"], ' +
          '.bpw-composer textarea, ' +
          'div[class*="bpComposer"] textarea, ' +
          'div[class*="bpComposer"] input'
        );
        composerInners.forEach(element => {
          if (element) {
            element.style.border = '1px solid #00FF00';
            element.style.borderRadius = '5px';
            element.style.backgroundColor = '#111111';
            element.style.color = '#00FF00';
            element.style.boxShadow = 'none';
            element.style.outline = 'none';
          }
        });
        
        // Também remover qualquer elemento com a classe bpMessageListMarqueeTitle
        const kowalskiTitles = document.querySelectorAll('.bpMessageListMarqueeTitle');
        kowalskiTitles.forEach(title => {
          if (title) title.style.display = 'none';
        });
      }, 100);
    } else {
      document.body.style.overflow = "";
    }
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
    toggleWebchat();
  };

  return (
    <WebchatProvider client={client} configuration={configuration}>
      <div
        className={`experiment-card ${isHovered ? "hovered" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={toggleWebchat}
      >
        <div className="card-image">
          <img src="/kowalski.png" alt="Assistente" />
        </div>
        <div className="card-content">
          <h3>Assistente ASCII</h3>
          <p>
            Converse com nosso assistente de inteligência artificial. Tire
            suas dúvidas sobre nossos projetos e serviços.
          </p>
          <button className="experiment-link" onClick={handleButtonClick}>
            Iniciar Conversa
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isWebchatOpen && (
        <div className="chat-overlay" onClick={toggleWebchat}></div>
      )}

      {/* Botpress Webchat */}
      <div
        className="kowalski-webchat-container"
        style={{ display: isWebchatOpen ? "flex" : "none" }}
      >
        <div className="webchat-content">
          <Webchat />
        </div>
      </div>
    </WebchatProvider>
  );
};

export default KowalskiCard;
