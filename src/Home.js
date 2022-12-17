import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className='home'>
      <div className='home-container'>
        <img
          className='home_image'
          src='http://drive.google.com/uc?export=view&id=1Y56DRwIRq3dHlJqzYCNaVMXzgvLkwUJO'
          alt='와카리나잇!'
        />

        <div className='home_row'>
          <Product />
        </div>

        <div className='home_row'>
          <Product />
          <Product />
          <Product />
        </div>

        <div className='home_row'>
          <Product />
        </div>
      </div>
      <h1>본문입니다</h1>
    </div>
  );
}
export default Home;
