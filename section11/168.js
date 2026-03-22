const lastWithdrawal = movements.findLast(mov => mov < 0);
console.log(lastWithdrawal);

const lastestLargeWithdrawal = movements.findLastIndex(
  mov => math.abs(mov) > 1000,
);
console.log(lastestLargeWithdrawal);
console.log(
  `The lastest large withdrawal was ${lastestLargeWithdrawal}, ${movements.length - lastestLargeWithdrawal - 1} movements ago`,
);
