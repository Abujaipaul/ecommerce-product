// src/components/ProductInfo/ProductInfo.tsx
import { useState } from 'react';
import './ProductInfo.css';
import { product } from '../../data';
import cartIcon from '../../assets/images/icon-cart.svg';
import plusIcon from '../../assets/images/icon-plus.svg';
import minusIcon from '../../assets/images/icon-minus.svg';

// Define the type for the props this component will receive
interface ProductInfoProps {
  onAddToCart: (quantity: number) => void;
}

const ProductInfo = ({ onAddToCart }: ProductInfoProps) => {
  // This state is now just for the quantity selector UI
  const [quantity, setQuantity] = useState(0);

  const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // This function now calls the prop function passed from App.tsx
  const handleAddToCart = () => {
    onAddToCart(quantity);
    // Optionally reset quantity to 0 after adding
    setQuantity(0); 
  };

  return (
    <section className="product-info">
      <p className="product-info__company">{product.company}</p>
      <h1 className="product-info__title">{product.name}</h1>
      <p className="product-info__description">{product.description}</p>
      
      <div className="product-info__price-container">
        <div className="price-wrapper">
          <span className="product-info__price">${product.price.toFixed(2)}</span>
          <span className="product-info__discount">{product.discountPercentage}%</span>
        </div>
        <span className="product-info__original-price">${product.originalPrice.toFixed(2)}</span>
      </div>

      <div className="product-info__actions">
        <div className="quantity-selector">
          <button onClick={handleDecrease} aria-label="Decrease quantity">
            <img src={minusIcon} alt="minus" />
          </button>
          <span className="quantity">{quantity}</span>
          <button onClick={handleIncrease} aria-label="Increase quantity">
            <img src={plusIcon} alt="plus" />
          </button>
        </div>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          <img src={cartIcon} className="btn-cart-icon" alt="" />
          <span>Add to cart</span>
        </button>
      </div>
    </section>
  );
};

export default ProductInfo;