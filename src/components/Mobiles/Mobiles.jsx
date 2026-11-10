import React, { use, useEffect, useState } from 'react';
import Mobile from '../Mobile/Mobile';
import './Mobiles.css'
import { addToLocal, getFromLocal, removeFromCart } from '../../utilities/localStorage';
import Cart from '../Cart/Cart';

const Mobiles = ({ mobilePromises }) => {

  // load data from promise
  const mobileData = use(mobilePromises);
  // console.log(mobileData);

  // declear cart state
  const [cart, setCart] = useState([]);

  // cart event handler
  const cartEventHandler = (mobile) => {
    // console.log("This product will added to Cart id: ", id);

    // In react state cart full object is there but in local storage cart only id is being stored. 
    if (cart.includes(mobile)) {
      alert("This product is already in cart");
      return;
    }

    const updatedCart = [...cart, mobile];
    setCart(updatedCart);
    // console.log(updatedCart); 

    // set id to local storage
    addToLocal(mobile.id);
  }

  // useEffect => manage cart state
  useEffect(() => {
    const storedCartIds = getFromLocal();
    // console.log(storedCartIds, mobileData);

    const storedCartProducts = [];

    for (const id of storedCartIds) {
      const cartProducts = mobileData.find((mobile) => mobile.id === id)
      if (cartProducts) {
        storedCartProducts.push(cartProducts);
      }

    }

    setCart(storedCartProducts);

  }, [mobileData])

  const handleRemoveFromCart = (id) => {
    // console.log(id, "product will be removed");

    const remainingCart = cart.filter((mobile) => mobile.id !== id);
    setCart(remainingCart);
    removeFromCart(id);
  }

  return (
    <div>
      <h3>Total Mobiles: {mobileData.length}</h3>
      <p>Added to Cart: {cart.length}</p>

      {/* Cart Component */}
      <Cart
        cart={cart}
        handleRemoveFromCart={handleRemoveFromCart}
      ></Cart>

      {/* Mobile Component */}
      <div className='mobile-container'>
        {
          mobileData.map((mobile) => <Mobile
            key={mobile.id}
            cartEventHandler={cartEventHandler}
            mobile={mobile}>
          </Mobile>)
        }
      </div>

    </div>
  );
};

export default Mobiles;