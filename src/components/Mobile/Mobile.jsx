import React from 'react';
import './Mobile.css'

const Mobile = ({ mobile, cartEventHandler }) => {
  const { imageUrl, brand, model, price, stock } = mobile

  return (
    <div className='mobile-card'>
      <img src={imageUrl} alt="" />
      <h1>{brand}</h1>
      <p>{model}</p>
      <p>Price: ${price}</p>
      {
        (stock === 0) ?
          <p>Stock Out</p> :
          <p>Only {stock} pieces are available... </p>
      }
      <button onClick={() => cartEventHandler(mobile)} className='btn'>Buy Now</button>
    </div>
  );
};

export default Mobile;