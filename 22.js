const age = "18";
if (age === 18) console.log("you just became an adult (strict) :D");
if (age == 18) console.log("you just became an adult  (loose) :D");
const favorite = Number(prompt("whats your favorite number"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 25) {
  console.log("cool! 25 is an amazing number!");
} else if (favorite === 7) {
  console.log("cool! 7 is an amazing number!");
} else {
  console.log("your number is not 7 or 25");
}
if (favorite !== 23) console.log("why not 25?");
