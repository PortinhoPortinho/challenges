const age = 15;

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);
console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

const country = "Portugal";
const population = 130;
const habitants = population > 33 ? "above" : "below";
console.log(`${country}'s population is ${habitants} average`);
