import { useState } from 'react';
import './styles.css';

const ExperimentCard = ({ title, description, image, link, empty }) => {
  const [isHovered, setIsHovered] = useState(false);

  if (empty) {
    return (
      <div 
        className="experiment-card empty"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="card-content">
          <h3>Em breve</h3>
          <p>Novos experimentos chegando...</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`experiment-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {image && (
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
      )}
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        {link && (
          <a href={link} className="experiment-link">
            Explorar Experimento
          </a>
        )}
      </div>
    </div>
  );
};

export default ExperimentCard; 