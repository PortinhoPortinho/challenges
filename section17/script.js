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
