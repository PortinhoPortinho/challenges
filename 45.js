const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  calcAge: function (birthYear) {
    return 2037 - birthYear;
  },

getSumary: function(){
  return `${jonas.firstName} is a ${this.calcAge(jonas.birthYear)} - year old ${jonas.job}, and he has a ${jonas.hasDriversLicense ? "a" : "no"} driver's license`;
},
};

console.log(jonas.calcAge(1991));
console.log(jonas["calcAge"](1991));
console.log(jonas.getSumary());

