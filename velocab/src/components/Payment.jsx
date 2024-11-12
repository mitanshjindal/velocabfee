import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import './css/Payment.css';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedRide } = location.state || {};
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [upiId, setUpiId] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    setTimeout(() => {
      setIsProcessing(false);
      alert('Payment successful!');
      
      const lastRides = JSON.parse(localStorage.getItem('lastRides')) || [];
      lastRides.push(selectedRide);
      localStorage.setItem('lastRides', JSON.stringify(lastRides));
      
      navigate('/last');
    }, 2000);
  };

  if (!selectedRide) {
    return <div>No ride selected. Please go back and select a ride.</div>;
  }

  return (
    <motion.div 
      className="payment-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className="payment-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Complete Your Booking
      </motion.h1>
      <motion.div 
        className="ride-details"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2>{selectedRide.type}</h2>
        <img src={selectedRide.image} alt={selectedRide.type} />
        <p>From: {selectedRide.from}</p>
        <p>To: {selectedRide.to}</p>
        <p>Distance: {selectedRide.distance} km</p>
        <p>Price: Rs. {selectedRide.price}</p>
        <p>Seats: {selectedRide.seats}</p>
      </motion.div>
      <motion.form 
        onSubmit={handleSubmit} 
        className="payment-form"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="payment-methods">
          <motion.button
            type="button"
            className={paymentMethod === 'card' ? 'active' : ''}
            onClick={() => setPaymentMethod('card')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Card
          </motion.button>
          <motion.button
            type="button"
            className={paymentMethod === 'upi' ? 'active' : ''}
            onClick={() => setPaymentMethod('upi')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            UPI
          </motion.button>
          <motion.button
            type="button"
            className={paymentMethod === 'netbanking' ? 'active' : ''}
            onClick={() => setPaymentMethod('netbanking')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Net Banking
          </motion.button>
        </div>
        
        
        {paymentMethod === 'card' && (
          <>
            <input type="text" placeholder="Card Number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
            <input type="text" placeholder="MM/YY" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} required />
            <input type="text" placeholder="CVV" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
            <input type="text" placeholder="Name on Card" value={name} onChange={(e) => setName(e.target.value)} required />
          </>
        )}
        {paymentMethod === 'upi' && <input type="text" placeholder="UPI ID" value={upiId} onChange={(e) => setUpiId(e.target.value)} required />}
        {paymentMethod === 'netbanking' && <input type="text" placeholder="Bank Account Number" value={bankAccount} onChange={(e) => setBankAccount(e.target.value)} required />}
        
        <motion.button type="submit" disabled={isProcessing}>{isProcessing ? 'Processing...' : 'Pay Now'}</motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Payment;
