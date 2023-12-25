// PaymentPage.js
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CartContext } from './CartContext';


const PaymentPage = () => {
    const history = useHistory() ;
  const { cartState } = useContext(CartContext);
  const [paymentDetails, setPaymentDetails] = useState({ name: '', cardNumber: '', expirationDate: '', cvv: '' });
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Intégrer ici la logique de paiement avec une solution comme Stripe
    // Une fois le paiement réussi, vous pouvez vider le panier et rediriger l'utilisateur vers une page de confirmation
    alert('Paiement réussi ! Merci pour votre achat.');
    // Réinitialiser le panier
    // En réalité, vous devriez utiliser la logique appropriée en fonction de votre backend
    // Par exemple, vous pourriez envoyer une requête au backend pour effectuer le paiement et vider le panier
    history.push('/confirmation');
  };

  return (
    <div>
      <h1>Paiement</h1>
      <form onSubmit={handlePaymentSubmit}>
        <label>
          Nom sur la carte:
          <input type="text" name="name" value={paymentDetails.name} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Numéro de carte:
          <input type="text" name="cardNumber" value={paymentDetails.cardNumber} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Date d'expiration:
          <input type="text" name="expirationDate" value={paymentDetails.expirationDate} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          CVV:
          <input type="text" name="cvv" value={paymentDetails.cvv} onChange={handleInputChange} required />
        </label>
        <br />
        <button type="submit">Payer</button>
      </form>
    </div>
  );
};

export default PaymentPage;
