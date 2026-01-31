function logger() {
  console.log("my name is jonas");
}

logger();
logger();
logger();
logger();
logger();

function newTotal() {
  console.log(`o resultado da sua conta é ${total}`);
}

function addition() {
  total = x + y;
  newTotal();
}
function multiplication() {
  total = x * y;
  newTotal();
}
function division() {
  total = x / y;
  newTotal();
}
function subtraction() {
  total = x - y;
  newTotal();
}
/*
let conta = prompt("Qual operação quer fazer? use apenas simbolos");
let x = Number(prompt("Didite o primeiro número da conta"));
let y = Number(prompt("Didite o segundo número da conta"));

switch (conta) {
  case "+":
    addition();
    break;
  case "-":
    subtraction();
    break;
  case "/":
    division();
    break;
  case "*":
    multiplication();
    break;
}
*/
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const country1 = describeCountry("Finland", 6, "Helsinki");
console.log(country1);
const country2 = describeCountry("Brasil", 213, "Brasília");
console.log(country2);
const country3 = describeCountry("Canada", 41, "Ottawa");
console.log(country3);
