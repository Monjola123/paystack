import React, { useState } from 'react';
import { PaystackButton } from 'react-paystack';
import './App.css'; 

function App() {
  const publicKey = "pk_test_bdb7e1ff7b5f67c7f8db39e21ff05adcfc395240"; 
  const amount = 184240;

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const componentProps = {
    email,
    amount,
    currency:"GHS",
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };

  const handlePaymentError = (error) => {
    console.error("Paystack Error:", error);
    alert("An error occurred during payment. Please try again.");
  };

  return (
    <div className="App">
      <div className="container">
        <div className="item">
          <div className=""></div>
          <img
            className="item-image"
            src="https://wishatl.com/cdn/shop/files/DX4379-400_FrontDiagonal_800x.png?v=1686067002"
            alt="product"
          />
          <div className="item-details">
            <p className="item-details__title">Air Jordan 1 Mid SE</p>
            <p className="item-details__amount">GHS {amount / 100}</p>
            <p className="item-details__indicator">&lt; 1/1 &gt;</p>
          </div>
        </div>
        <div className="checkout">
          <div className="checkout-form">
            <div className="checkout-field">
              <label>Name</label>
              <input
                type="text"
                id="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Email</label>
              <input
                type="text"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Phone</label>
              <input
                type="text"
                id="phone"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <PaystackButton
              className="paystack-button"
              {...componentProps}
              onError={handlePaymentError}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
