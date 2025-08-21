
import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ProductGallery from './components/ProductGallery/ProductGallery';
import ProductInfo from './components/ProductInfo/ProductInfo';
import { product } from './data';
import type { CartItem } from './types';
import Lightbox from './components/LightBox/LightBox'; 

const App = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  // Add state for lightbox visibility //stae to control the lightbox visibility
  const [isLightboxOpen, setIsLightboxOpen] = useState(false); 

  const handleAddToCart = (quantity: number) => {
    if (quantity === 0) return;

    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        const newItem: CartItem = {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: quantity,
          thumbnail: product.thumbnails[0],
        };
        return [...prevItems, newItem];
      }
    });
  };

  const handleRemoveFromCart = (productId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  return (
    <>
      <Header cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
      <main className="product-page-container">
        {/* Pass a function to open the lightbox modal */}
        <ProductGallery onImageClick={() => setIsLightboxOpen(true)} />
        <ProductInfo onAddToCart={handleAddToCart} />
      </main>

      {/* Conditionally render the Lightbox modal component */}
      {isLightboxOpen && <Lightbox onClose={() => setIsLightboxOpen(false)} />}
    </>
  );
};

export default App;