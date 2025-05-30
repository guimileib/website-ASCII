import React, { useState } from "react";
import ReactModal from "react-modal";
import styles from "./ASCIIPlayCard.module.css";

ReactModal.setAppElement("#root");

const ASCIIPlayCard = ({
  type,
  date,
  title,
  summary,
  imageSrc = "https://via.placeholder.com/150",
  youtubeId
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isVideo = type === "VÍDEO";
  const typeClass = isVideo ? styles.video : styles.podcast;
  const iconClass = isVideo ? styles.videoIcon : styles.podcastIcon;

  const playIcon = "▶"; // Usar o mesmo ícone para ambos

  const openModal = () => {
    setIsModalOpen(true); // Permitir abrir modal para ambos os tipos
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={styles.card}>
      <img src={imageSrc} alt={title} className={styles.image} />
      <div className={styles.header}>
        <span className={`${styles.label} ${typeClass}`}>{type}</span>
        <span className={styles.date}> · {date}</span>
      </div>
      <div className={styles.textContainer}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.summary}>{summary}</p>
      </div>
      <div className={styles.footer}>
        <button
          className={`${styles.icon} ${iconClass}`}
          onClick={openModal}
          aria-label="Reproduzir conteúdo"
        >
          {playIcon}
        </button>
      </div>

      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel={`Conteúdo: ${title}`}
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
      >
        <div className={styles.youtubeContainer}>
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
            title={`YouTube player: ${title}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.youtubeIframe}
          />
        </div>
        <button onClick={closeModal} className={styles.closeButton}>
          ×
        </button>
      </ReactModal>
    </div>
  );
};

export default ASCIIPlayCard;
