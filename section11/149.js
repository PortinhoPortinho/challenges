let arr = ['a', 'b', 'c', 'd', 'e'];
//slice
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-1));
console.log(arr.slice(-2));
console.log(arr.slice(2, -1));
//splice
console.log(arr.splice(2));
console.log(arr);
//reverse
const arr2 = ['a', 'b', 'c', 'd', 'e'];
console.log(arr2.reverse());
//concat
const letters = arr.concat(arr2);
console.log(arr.concat(arr2));
console.log(letters);
console.log([...arr, ...arr2]);
//join

console.log(letters.join('-'));
