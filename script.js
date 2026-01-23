/*
let js = "amazing";
//if (js === "amazing") alert("Javascript is Fun");

40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);
console.log("jonas");
console.log(23);

let firstNameAwesome = "bob";
let first = "matilda";
let firstNamePerson = "ruby";
console.log(firstNameAwesome);
console.log(first);
console.log(firstNamePerson);

let jonas_matilda = "JM";
let FunctionNew = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "programmer";
let myCurrentJob = "teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

//primitive data types
//number
let age = 23;
//string
let firstName = "Jonas";
//Boolean
let fullAge = true;
//Undefined
let caramba;
//null também bate como undefined
*/
/* 
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");
javascriptIsFun = "YES!";
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

let country = "Brazil";
let continent = "South America";
let population = "200000000";
console.log(country);
console.log(continent);
console.log(population);

let isIsland = false;
let language = "Português";
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

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

//assign operators
let x = 10 + 5; //15
x += 10; // x= x + 10 = 25
x *= 4; //x=x*4 = 100
x++; // x=x+1 = 101
x--; // x=x11 = 100
console.log(x);
console.log(ageJonas > ageSarah);
console.log(ageJonas >= 18);
console.log(now - 1991);
console.log(now - 2018);
console.log(now - 1991 > now - 2018);

let z, y;
z - y - 25 - 10 - 5;
console.log(z, y);
*/
/*
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;
const jonas =
  "Ï'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);
console.log(`Just a regular string`);

console.log(`String with \n\ multiple \n\ lines`);
console.log(`String with
   multiple 
   lines`);
*/
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1;
console.log(n); // isso retornou 11, ok
n = n - 1;
console.log(n); // isso volta um 10?

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}
