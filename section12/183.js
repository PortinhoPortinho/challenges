console.log(5 % 2);
console.log(5 / 2);

console.log(8 % 3);
console.log(8 / 3);

console.log(9 % 3);
console.log(9 / 3);

console.log(7 % 2);
console.log(7 / 2);

const isEven = n => n % 2 === 0;

console.log(isEven(5));
console.log(isEven(7));
console.log(isEven(8));

const isOdd = n => n % 2 !== 0;

console.log(isOdd(5));
console.log(isOdd(7));

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('movements_row')].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = 'orange';
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});
