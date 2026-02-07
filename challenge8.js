const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  console.log(tips[i]);
  console.log(bills[i]);
  totals[i] = bills[i] + tips[i];
  console.log(totals[i]);
}
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
