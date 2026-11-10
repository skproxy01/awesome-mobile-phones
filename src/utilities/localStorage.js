const getCartFromLocalStorage = () => {
  const localStorageCartString = localStorage.getItem("cart");

  if (localStorageCartString) {
    const localStorageCartJson = JSON.parse(localStorageCartString);
    return localStorageCartJson;
  }

  return [];
}

const saveToLocalStorage = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem('cart', cartStringified);
}

// const addCartToLocalStorage = (id) => {
//   const cartItems = getCartFromLocalStorage();
//   // const newCart = cartItems.push(id);
//   const newCart = [...cartItems, id];
//   saveToLocalStorage(newCart);
// }

// Modified Add to Local Prevent Duplicate 
const addCartToLocalStorage = (id) => {
  const cartItems = getCartFromLocalStorage();
  // const newCart = cartItems.push(id);

  if (cartItems.includes(id)) return;

  const newCart = [...cartItems, id];
  saveToLocalStorage(newCart);
}



const removeFromCart = (id) => {
  const cartItems = getCartFromLocalStorage();
  const remainingItems = cartItems.filter((cartItem) => cartItem !== id);
  saveToLocalStorage(remainingItems);
}

export {
  getCartFromLocalStorage as getFromLocal,
  addCartToLocalStorage as addToLocal,
  removeFromCart
}