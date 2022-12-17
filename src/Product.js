import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className='product'>
      <h1>취직상품입니다.</h1>
      <div className='product_info'>
        <p> 제품1</p>
        <p className='product_price'>
          <small> 가격 </small>
          <strong>10,000</strong>
          <small>원</small>
        </p>
        <div className='product_rating'>
          <p>★</p>
          <p>★</p>
          <p>★</p>
          <p>★</p>
        </div>
      </div>
      <img
        src='http://drive.google.com/uc?export=view&id=1EL2wI1FNc7kSaKdP4BCKGnizk2DFnHWm'
        alt='상품정보'
      />
      <button> 장바구니 담기</button>
    </div>
  );
}

export default Product;
