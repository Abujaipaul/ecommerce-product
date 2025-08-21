// src/components/MobileNav/MobileNav.tsx
import './MobileNav.css';
import closeIcon from '../../assets/images/icon-close.svg';

interface MobileNavProps {
  onClose: () => void;
}

const MobileNav = ({ onClose }: MobileNavProps) => {
  return (
    <>
      <div className="mobile-nav-overlay" onClick={onClose}></div>
      <nav className="mobile-nav-menu">
        <button onClick={onClose} className="mobile-nav-close-btn" aria-label="Close menu">
          <img src={closeIcon} alt="close" />
        </button>
        <ul>
          <li><a href="#">Collections</a></li>
          <li><a href="#">Men</a></li>
          <li><a href="#">Women</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </>
  );
};

export default MobileNav;