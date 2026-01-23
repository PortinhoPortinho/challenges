let massMark = 78;
let massJohn = 92;
let heightMark = 1.69;
let heightJohn = 1.95;
let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIJohn);
console.log(BMIMark);
let markHigherBMI;
if (BMIMark > BMIJohn) {
  markHigherBMI = true;
  console.log("Mark has a higher BMI than John");
} else {
  markHigherBMI = false;
  console.log("John has a higher BMI than Mark");
}
console.log(markHigherBMI);
massMark2 = 95;
massJohn2 = 85;
heightMark2 = 1.88;
heightJohn2 = 1.76;

let BMIMark2 = massMark2 / (heightMark2 * heightMark2);
let BMIJohn2 = massJohn2 / (heightJohn2 * heightJohn2);
if (BMIMark2 > BMIJohn2) {
  markHigherBMI2 = true;
  console.log("Mark has a higher BMI than John");
} else {
  markHigherBMI2 = false;
  console.log("John has a higher BMI than Mark");
}

console.log(BMIJohn2);
console.log(BMIMark2);
console.log(markHigherBMI2);
