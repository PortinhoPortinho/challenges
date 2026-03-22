'use strict';

console.log('-------OR-------');
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'hello' || 23 || null);
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);
console.log('-------AND-------');

console.log(7 && 'Jonas');
console.log('' && 'Jonas');
console.log(true && 0);
console.log(undefined && null);

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'olives', 'tomatoes');
}
restaurant.orderPizza &&
  restaurant.orderPizza('mushrooms', 'olives', 'tomatoes');
