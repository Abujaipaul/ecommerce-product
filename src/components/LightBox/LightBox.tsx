import './Lightbox.css';
import { product } from '../../data';
import closeIcon from '../../assets/images/icon-close.svg';
import nextIcon from '../../assets/images/icon-next.svg';
import previousIcon from '../../assets/images/icon-previous.svg';
import { useState } from 'react';

interface LightboxProps {
  onClose: () => void;
}

const Lightbox = ({ onClose }: LightboxProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex(currentIndex === 0 ? product.images.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === product.images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    // 1. Add onClick to the overlay div to call the onClose prop
    <div className="lightbox-overlay" onClick={onClose}>
      
      {/* 2. Add onClick to the content div to stop the event from bubbling up */}
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="lightbox-close-btn" aria-label="Close lightbox">
          <img src={closeIcon} alt="close" />
        </button>
        
        <div className="lightbox-image-container">
          <button onClick={handlePrevious} className="lightbox-nav-btn prev" aria-label="Previous image">
            <img src={previousIcon} alt="previous" />
          </button>
          
          <img src={product.images[currentIndex]} alt={product.name} className="lightbox-main-image" />
          
          <button onClick={handleNext} className="lightbox-nav-btn next" aria-label="Next image">
            <img src={nextIcon} alt="next" />
          </button>
        </div>

        <div className="lightbox-thumbnails">
          {product.thumbnails.map((thumbnail, index) => (
            <div 
              key={index}
              className={`lightbox-thumbnail-container ${index === currentIndex ? 'active-thumbnail' : ''}`}
              onClick={() => setCurrentIndex(index)}
            >
              <img src={thumbnail} alt={`Thumbnail ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;