import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
  // console.log(cart);

  return (
    <div className='cart-container'>
      {
        cart.map((singleCartProduct) => {
          return (
            <div key={singleCartProduct.id}>
              <img src={singleCartProduct.imageUrl} alt="" />
              <button onClick={() => handleRemoveFromCart(singleCartProduct.id)}>x</button>
            </div>
          );
        })

        // () => { return JSX } → Explicit return. => filter
        // cart.map((singleCartObject) => {
        //   return singleCartObject.map((singleCart) => {
        //     return (
        //       <div>
        //         <img src={singleCart.imageUrl} alt="" />
        //       </div>
        //     );
        //   });
        // })

        // () => (JSX) → Implicit return. => filter
        // cart.map((singleCartObject) => (
        //   singleCartObject.map((singleCart) => (
        //     <div key={singleCart.id}>
        //       <img src={singleCart.imageUrl} alt="" />
        //     </div>
        //   ))
        // ))

      }

    </div>
  );
};

export default Cart;