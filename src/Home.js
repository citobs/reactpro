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
          <Product
            id='232323'
            title='제품입니다.'
            price={30000}
            image='http://drive.google.com/uc?export=view&id=1EL2wI1FNc7kSaKdP4BCKGnizk2DFnHWm'
            rating={5}
          />
          <Product
            id='232323'
            title='제품입니다.'
            price={30000}
            image='http://drive.google.com/uc?export=view&id=1EL2wI1FNc7kSaKdP4BCKGnizk2DFnHWm'
            rating={5}
          />
          <Product
            id='232323'
            title='제품입니다.'
            price={30000}
            image='http://drive.google.com/uc?export=view&id=1EL2wI1FNc7kSaKdP4BCKGnizk2DFnHWm'
            rating={5}
          />
        </div>

        <div className='home_row'>
          <Product
            id='232323'
            title='제품입니다.'
            price={30000}
            image='http://drive.google.com/uc?export=view&id=1EL2wI1FNc7kSaKdP4BCKGnizk2DFnHWm'
            rating={5}
          />
          <Product
            id='232323'
            title='제품입니다.'
            price={30000}
            image='http://drive.google.com/uc?export=view&id=1EL2wI1FNc7kSaKdP4BCKGnizk2DFnHWm'
            rating={5}
          />
        </div>

        <div className='home_row'>
          <Product
            id='232323'
            title='제품입니다.'
            price={30000}
            image='http://drive.google.com/uc?export=view&id=1EL2wI1FNc7kSaKdP4BCKGnizk2DFnHWm'
            rating={5}
          />
          <Product
            id='232323'
            title='제품입니다.'
            price={30000}
            image='http://drive.google.com/uc?export=view&id=1EL2wI1FNc7kSaKdP4BCKGnizk2DFnHWm'
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
