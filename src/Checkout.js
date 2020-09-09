import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";


function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg"
        />
        <div>
          <h2 className="checkout__title">Your Checkout basket</h2>
        </div>
      </div>
      <div className='checkout__right'>
          <Subtotal />

      </div>
    </div>
  );
}

export default Checkout;
