//importing module
// import { addToCart, totalPrice, tq } from './shoppingcart.js';
// console.log('importing module');
// addToCart('apple', 2);
// addToCart('banana', 3);
// console.log(`total price: ${totalPrice}`);
// console.log(`total quantity: ${tq}`);

// import * as ShoppingCart from './shoppingcart.js';
// ShoppingCart.addToCart('apple', 2);
// ShoppingCart.addToCart('banana', 3);
// console.log(`total price: ${ShoppingCart.totalPrice}`);
// console.log(`total quantity: ${ShoppingCart.tq}`);
import add, { cart } from './shoppingcart.js';
console.log('importing module');
add('apple', 2);
add('banana', 3);
console.log(cart);
//////////////////////////////////////////////////////////
//new lecture
// console.log('start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('something');
/*
const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return { title: data.at(-1).title, text: data.at(-1).body };
};
const lastPost = getLastPost();
console.log(lastPost);
// not very clean
lastPost.then(last => console.log(last));

const getLastPost2 = await getLastPost();
console.log(getLastPost2);
*/
///////////////////////////////////////////////////////////////////
//new lecture
/*
const shoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;
  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      ` ${quantity} ${product} added to cart (shipping cost is ${shippingCost})`,
    );
  };
  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(` ${quantity} ${product} ordered from supplier)`);
  };
  return { addToCart, cart, totalPrice, totalQuantity };
})();

shoppingCart2.addToCart('apple', 2);
shoppingCart2.addToCart('banana', 3);
console.log(shoppingCart2.cart);
*/
/////////////////////////////////////////////////////////////////////
//new lecture
//exporting module
/*
export.addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(` ${quantity} ${product} added to cart)`);
};
export.cart = [];
export.totalPrice = 237;
export.totalQuantity = 23;
export.orderStock = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(` ${quantity} ${product} ordered from supplier)`);
};
// import
const { addToCart } = require('./shoppingcart.js');
// */
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
// import cloneDeep2 from 'lodash-es';
import { use } from 'react';
const state = {
  cart: [
    { product: 'apple', quantity: 2 },
    { product: 'banana', quantity: 3 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(state);
console.log(stateClone);
if (module.hot) {
  module.hot.accept();
}
