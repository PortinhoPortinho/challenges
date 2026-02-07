"use strict";

const t1 = [17, 21, 23];
const t2 = [12, 5, -5, 0, 4];
const temps = t1.concat(t2);

/*
const calcMaxByDays = function (temps) {
  let max = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) max = temps[i];
    
  }
  return max;
};
const max = calcMaxByDays(temps);
console.log(`${max}ºC in ${temps.length} days`);
*/

const calcMaxByDays = function (temps) {
  let tmpDay = temps[0];
  for (let i = 0; i < temps.length; i++) {
    console.log(`${temps[i]}ºC in ${i + 1} day`);
  }
};
const max = calcMaxByDays(temps);

const printForecast = function (temps) {
  let str = "";
  for (let i = 0; i < temps.length; i++) {
    str = str + `... ${temps[i]}ºC in ${i + 1} days `;
  }
  return str;
};
console.log(printForecast(temps));
