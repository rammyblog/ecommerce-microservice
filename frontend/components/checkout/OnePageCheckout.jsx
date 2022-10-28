import React, { useState } from 'react';
import CheckoutForm from './CheckoutForm';
import PaymentForm from './PaymentForm';

const OnePageCheckoutComponent = ({ token }) => {
  // create custom hook, but I am already tired of building this app
  const [showCheckoutForm, setShowCheckOutForm] = useState(true);
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  return (
    <>
      {showCheckoutForm && (
        <CheckoutForm
          setShowCheckOutForm={() => setShowCheckOutForm(false)}
          setShowPaymentForm={() => setShowPaymentForm(true)}
          token={token}
        />
      )}
      {showPaymentForm && <PaymentForm token={token} />}
    </>
  );
};

export default OnePageCheckoutComponent;
