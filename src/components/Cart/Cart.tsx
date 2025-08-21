// src/components/Cart/Cart.tsx
import './Cart.css';
import type { CartItem } from '../../types';
import deleteIcon from '../../assets/images/icon-delete.svg';

interface CartProps {
  cartItems: CartItem[];
  onRemoveFromCart: (productId: number) => void;
}

const Cart = ({ cartItems, onRemoveFromCart }: CartProps) => {
  return (
    <div className="cart-dropdown">
      <h3 className="cart-dropdown__title">Cart</h3>
      <div className="cart-dropdown__content">
        {cartItems.length === 0 ? (
          <p className="cart-dropdown__empty-message">Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.thumbnail} alt={item.name} className="cart-item__thumbnail" />
                <div className="cart-item__details">
                  <p className="cart-item__name">{item.name}</p>
                  <p className="cart-item__price">
                    ${item.price.toFixed(2)} x {item.quantity}{' '}
                    <span className="cart-item__total-price">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </p>
                </div>
                <button 
                  className="cart-item__delete-btn"
                  onClick={() => onRemoveFromCart(item.id)}
                  aria-label={`Remove ${item.name} from cart`}
                >
                  <img src={deleteIcon} alt="delete" />
                </button>
              </div>
            ))}
            <button className="checkout-btn">Checkout</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;