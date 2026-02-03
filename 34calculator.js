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