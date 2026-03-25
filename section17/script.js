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
