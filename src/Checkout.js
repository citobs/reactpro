import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img
          className='checkout_ad'
          src='http://drive.google.com/uc?export=view&id=1AziBGSxQ0g6RJtx32DOQby2hGmp-q6q5'
          alt=''
        />

        <div>
          <h2 className='checkout_title'>장바구니입니다.</h2>

          <CheckoutProduct />
        </div>
      </div>
      <div className='checkout_right'>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
