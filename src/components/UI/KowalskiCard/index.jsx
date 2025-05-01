import { useState } from "react";
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
    botName: "Kowalski IA",
    botConversationDescription: "Assistente da ASCII Empresa Junior",
    useSessionStorage: true,
    messagingUrl: "https://messaging.botpress.cloud",
    composerPlaceholder: "Fale com o Kowalski IA...",
    avatarUrl: "/kowalski.png",
    stylesheet:
      "https://webchat-styler-css.botpress.app/prod/code/7d97d93a-d91e-4e5e-a98c-81afba7c4ddd/v31331/style.css",
  };

  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState);
    // Toggle body scroll when chat is open/closed
    if (!isWebchatOpen) {
      document.body.style.overflow = "hidden";
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
          <img src="/kowalski.png" alt="Kowalski IA" />
        </div>
        <div className="card-content">
          <h3>Kowalski IA</h3>
          <p>
            Converse com o Kowalski, a inteligência artificial da ASCII. Tire
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
        <div className="webchat-header">
          <img
            src="/kowalski.png"
            alt="Kowalski IA"
            className="webchat-avatar"
          />
          <h3>Kowalski IA</h3>
          <div className="webchat-controls">
            <button className="minimize-webchat" onClick={toggleWebchat}>
              _
            </button>
            <button className="close-webchat" onClick={toggleWebchat}>
              ×
            </button>
          </div>
        </div>
        <div className="webchat-content">
          <Webchat />
        </div>
      </div>
    </WebchatProvider>
  );
};

export default KowalskiCard;
