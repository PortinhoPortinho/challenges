const jessica1 = {
  fistName: 'Jessica',
  lastName: 'Willians',
  age: 27,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}
const marriedJessica = marryPerson(jessica1, 'Davis');

console.log('Before', jessica1);
console.log('After', marriedJessica);

console.log(jessica1);

const jessica = {
  fistName: 'Jessica',
  lastName: 'Willians',
  age: 27,
  familly: ['Alice', 'Bob'],
};
const jessicaCopy = { ...jessica };
jessicaCopy.lastName = 'Davis';

/*
console.log(jessica, jessicaCopy);
jessicaCopy.familly.push('Mary');
jessicaCopy.familly.push('John');

console.log('Before', jessica);
console.log('After', jessicaCopy);
*/
const jessicaClone = structuredClone(jessica);
jessicaCopy.familly.push('Mary');
jessicaCopy.familly.push('John');

console.log('Before', jessica);
console.log('After', jessicaClone);
