// src/components/Header/Header.tsx
import { useState } from 'react';
import './Header.css'; // Make sure this import is here
import logo from '../../assets/images/logo.svg';
import cartIcon from '../../assets/images/icon-cart.svg';
import avatarImage from '../../assets/images/image-avatar.png';
import menuIcon from '../../assets/images/icon-menu.svg';
import type { CartItem } from '../../types';
import Cart from '../Cart/Cart';
import MobileNav from '../MobileNav/MobileNav';

interface HeaderProps {
  cartItems: CartItem[];
  onRemoveFromCart: (productId: number) => void;
}

const Header = ({ cartItems, onRemoveFromCart }: HeaderProps) => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <header className="header container">
        <div className="header__left">
          <button 
            className="header__menu-btn" 
            onClick={() => setIsMobileNavOpen(true)}
            aria-label="Open menu"
          >
            <img src={menuIcon} alt="menu" />
          </button>
          <a href="/" className="header__logo">
            <img src={logo} alt="sneakers logo" />
          </a>
          {/* This is the key element. The className is "header__nav-desktop" */}
          <nav className="header__nav-desktop">
            <ul>
              <li><a href="#">Collections</a></li>
              <li><a href="#">Men</a></li>
              <li><a href="#">Women</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="header__right">
          <div className="header__cart-container">
            <button
              className="header__cart-btn"
              onClick={() => setIsCartVisible(!isCartVisible)}
              aria-label="Toggle cart"
            >
              <img src={cartIcon} alt="Cart" />
              {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
            </button>
            {isCartVisible && <Cart cartItems={cartItems} onRemoveFromCart={onRemoveFromCart} />}
          </div>
          <img src={avatarImage} alt="User avatar" className="header__avatar" />
        </div>
      </header>
      
      {isMobileNavOpen && <MobileNav onClose={() => setIsMobileNavOpen(false)} />}
    </>
  );
};

export default Header;