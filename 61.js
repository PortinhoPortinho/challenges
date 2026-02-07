let amp;
const t1 = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const t2 = [3, 5, 1, -9, 0, 5];
const temps = t1.concat(t2);
const calcTempAmplitude = function (t1, t2) {
  
  let max = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== "number") continue;
    if (temps[i] > max) max = temps[i];
  }
  console.log(max);
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== "number") continue;
    if (temps[i] < min) min = temps[i];
  }
  console.log(min);
  amp = max - min;
};
calcTempAmplitude(temps);
console.log(amp);
