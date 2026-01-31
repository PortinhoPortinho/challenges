const hasDriversLicence = true; // esse é o A
const hasGoodVision = true; // esse é o B

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

const shouldDrive = hasDriversLicence && hasGoodVision;

if (hasDriversLicence && hasGoodVision) {
  console.log("sarah should drive");
} else {
  console.log("someone else should drive");
}
const isTired = true;
console.log(hasDriversLicence || hasGoodVision || isTired);
console.log(hasDriversLicence && hasGoodVision && isTired);

if (hasDriversLicence && hasGoodVision && !isTired) {
  console.log("sarah should drive");
} else {
  console.log("someone else should drive");
}

const country = prompt("Name the country u wanna live!");

const speaksEnglish = Boolean(
  prompt("This country speaks english? 1 to yes / 0 to no"),
);
const hasLessthen50mi = Boolean(
  prompt("This country has less than 50 milion people? 1 to yes / 0 to no"),
);
const isAnIsland = Boolean(
  prompt("This country is an Island 1 to yes / 0 to no"),
);

if (speaksEnglish && hasLessthen50mi && !isAnIsland) {
  console.log(`${country}  is a good place to live`);
} else {
  console.log(`${country}  is not a good place to live`);
}
