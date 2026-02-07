const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

const percentageOfWorld3 = (population) => (population / 7900) * 100;

const brasilPopulation3 = percentageOfWorld3(213);
const portugalPopulation3 = percentageOfWorld3(11);
const canadaPopulation3 = percentageOfWorld3(40);
console.log(brasilPopulation3, portugalPopulation3, canadaPopulation3);
