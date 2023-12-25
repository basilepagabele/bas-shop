// CartPage.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const CartPage = () => {
  const { cartState, removeFromCart, updateQuantity } = useContext(CartContext);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleUpdateQuantity = (productId, quantity) => {
    updateQuantity(productId, quantity);
  };

  const calculateTotal = () => {
    return cartState.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h1>Panier</h1>
      <ul>
        {cartState.cartItems.map((item) => (
          <li key={item.id}>
            {item.title} - Quantité: {item.quantity} - Prix unitaire: {item.price} € - Total: {item.price * item.quantity} €
            <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</button>
            <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => handleRemoveFromCart(item.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <p>Total du panier: {calculateTotal()} €</p>
      {/* Ajoutez ici un lien vers la page de paiement */}
    </div>
  );
};

export default CartPage;
