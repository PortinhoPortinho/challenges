const deposits = movements.filter(function (mov) {
  return mov > 0;
});

console.log(deposits);
