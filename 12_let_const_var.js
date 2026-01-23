let age = 30;
age = 31;
// let pode mudar conforme qualquer valor que atribua a ele

const birthYear = 1991;

//const é imutável

var job = "teacher";
job = "programmer";

// parece ter a mesma função do let mas fala que é de função, diferente do let que é de bloco
let jobe = "teacher";
jobe = "programmer";

console.log(job);
console.log(jobe);
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2**3 significa 2^3 2 elevado a 3 = 2x2x2=8
const firstName = "jonas";
const lastName = "schmedtmann";
console.log(firstName + " " + lastName);
let tst = 0;
let tst2 = 2;
console.log(tst);
console.log(tst2);

const testando = tst + tst2;
console.log(testando);
tst = 10;
tst2 = 20;

console.log(tst);
console.log(tst2);
console.log(testando);

const aaa = { key: 1 };

console.log(aaa);
aaa.key = 2;
console.log(aaa);
