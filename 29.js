let bill = 250;
let tip;

let tota;
const minimum = 50;
const max = 300;

if (bill >= minimum && bill <= max) {
  tip = 20;
  tota = bill + bill * (tip / 100);
  console.log(
 `your bill is ${bill}, your tip is ${tip}% and the total is ${tota}`);

} else {
  tip = 15;
  total = bill + bill * (tip / 100);
  console.log(
    `your bill is ${bill}, your tip is ${tip}% and the total is ${tota}`,
  );
}

let total = bill >= 50 && bill <= 300 ? (tip = 20) : (tip = 15);

total = bill + bill * (tip / 100);
console.log(
  `your bill is ${bill}, your tip is ${tip}% and the total is ${total}`,
);
