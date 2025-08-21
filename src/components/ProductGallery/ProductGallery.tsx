// src/components/ProductGallery/ProductGallery.tsx
import { useState } from 'react';
import './ProductGallery.css';
import { product } from '../../data';
import nextIcon from '../../assets/images/icon-next.svg';
import previousIcon from '../../assets/images/icon-previous.svg';

interface ProductGalleryProps {
  onImageClick: () => void;
}

const ProductGallery = ({ onImageClick }: ProductGalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handlePrevious = () => {
    setSelectedImageIndex(
      selectedImageIndex === 0 
        ? product.images.length - 1 
        : selectedImageIndex - 1
    );
  };

  const handleNext = () => {
    setSelectedImageIndex(
      selectedImageIndex === product.images.length - 1 
        ? 0 
        : selectedImageIndex + 1
    );
  };

  return (
    <section className="product-gallery">
      <div className="product-gallery__main-image-wrapper">
        <button onClick={handlePrevious} className="mobile-nav-btn prev" aria-label="Previous image">
          <img src={previousIcon} alt="previous" />
        </button>
        <div className="product-gallery__main-image" onClick={onImageClick}>
          <img 
            src={product.images[selectedImageIndex]} 
            alt="Fall Limited Edition Sneakers" 
          />
        </div>
        <button onClick={handleNext} className="mobile-nav-btn next" aria-label="Next image">
          <img src={nextIcon} alt="next" />
        </button>
      </div>
      <div className="product-gallery__thumbnails">
        {product.thumbnails.map((thumbnail, index) => (
          <div 
            className={`thumbnail-container ${index === selectedImageIndex ? 'active-thumbnail' : ''}`}
            key={index}
            onClick={() => setSelectedImageIndex(index)}
          >
            <img 
              src={thumbnail} 
              alt={`Sneaker thumbnail ${index + 1}`} 
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGallery;