import React from "react";
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className='paymnet'>
      <div className='payment_container'>
        <Link to='/checkout' className='checkoutlink'>
          <h1>
            장바구니로 돌아가기 ({basket?.length} 개의 상품목록이 존재합니다.)
          </h1>
        </Link>

        <div className='payment_section'>
          <div className='payment_title'>
            <h3> 배달 받을 곳</h3>
          </div>
          <div className='payment_address'>
            <p>{user?.email}님의 주소</p>
            <p>경기도</p>
            <p>수원시</p>
          </div>
        </div>
      </div>
      <div className='payment_section'>
        <div className='payement_title'>
          <h3> 상품 목록</h3>
        </div>
        <div className='payment_items'>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <div className='payment_section'>
        <div className='paymnet_title'>
          <h3>결제</h3>
        </div>
        <div className='payment_details'></div>
      </div>
    </div>
  );
}

export default Payment;
