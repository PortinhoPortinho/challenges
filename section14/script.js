'use strict';
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  //never do this
  //dont do an function inside constructor object
  // this.calcAge = function () {    console.log(2037 - this.birthYear);
  // }
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);
const jay = 'Jay';
console.log(jay instanceof Person);
console.log(jonas instanceof Person);
console.log(matilda instanceof Person);
console.log(jack instanceof Person);

Person.hey = function () {
  console.log('Hey there 👋');
  console.log(this);
};
Person.hey();
///////////////////////////////////////////////////
//prototype
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
jonas.calcAge();
matilda.calcAge();
jack.calcAge();
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(jack));
console.log(Person.prototype.isPrototypeOf(Person));
Person.prototype.species = 'Homo sapiens';
console.log(jonas.species);
console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

///////////////////////////////////////////////////
//new lecture

console.log(jonas.__proto__);
//object.prototype is the top of the prototype chain
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);
const arr = [3, 6, 4, 5, 6, 9, 3];
console.log(arr);
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
/////////////////////////////////////////////////////
//challenge 1

const car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
car.prototype.acelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
const BMW = new car('BMW', 120);
const Mercedes = new car('Mercedes', 95);
BMW.acelerate();
BMW.brake();
Mercedes.acelerate();
Mercedes.brake();
Mercedes.acelerate();
Mercedes.acelerate();
Mercedes.acelerate();
Mercedes.acelerate();
/////////////////////////////////////////////////
// class expression
// const PersonCl = class {}

//class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //methods will be added to .prototype property of the objects created by this class
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hello ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }
  get fullName() {
    return this._fullName;
  }
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}
const jessica = new PersonCl('Jessica Davis', 1996);
jessica.calcAge();
console.log(jessica.age);
// PersonCl.prototype.greet = function () {
//   console.log(`Hello ${this.fullName}`);
// };
jessica.greet();
const walter = new PersonCl('Walter White', 1965);
console.log(walter.fullName);
// 1. classes are not hoisted
//2. class are first class citizens
//3. class are executed in strict mode
////////////////////////////////////////////////////
//new lecture
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);
account.latest = 50;
console.log(account.movements);
PersonCl.hey();

////////////////////////////////////////////////////////
//object create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();
console.log(steven.__proto__);
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

///////////////////////////////////////////////////////////
//challenge 2

class CarCL {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  acelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
}
const ford = new CarCL('Ford', 120);
const bmw = new CarCL('BMW', 120);
const mercedes = new CarCL('Mercedes', 95);
ford.acelerate();
ford.brake();
bmw.acelerate();
bmw.brake();
mercedes.acelerate();
mercedes.brake();
///////////////////////////////////////////////////////////////
// new lecture - classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  
  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  
  greet() {
    console.log(`Hey ${this.fullName}`);
  }
  
  get age() {
    return 2037 - this.birthYear;
  }
  
  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  
  get fullName() {
    return this._fullName;
  }
  
  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
  //   console.log(`Hey ${this.firstName}`);
  // };
  jessica.greet();
  
  // 1. Classes are NOT hoisted
  // 2. Classes are first-class citizens
  // 3. Classes are executed in strict mode
  
  const walter = new PersonCl('Walter White', 1965);
  // PersonCl.hey();
  
  class StudentCL extends PersonCl {
    constructor(fullName, birthYear, course) {
      super(fullName, birthYear);
      this.course = course;
    }
    introduce() {
      console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }
    calcAge() {
      console.log(`I am ${this.age} years old`);
    }
  }
  
  const martha = new StudentCL('Martha Jones', 2012, 'Computer Science');
  console.log(martha);
  martha.introduce();
  martha.calcAge();
  /////////////////////////////////////////////////////////////////
  challenge 3
  const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();

  ////////////////////////////////////////////////////////////////
  //new lecture - inheritance between classes, object create
  const PersonProto = {
    calcAge() {
      console.log(2037 - this.birthYear);
    },
    init(firstName, birthYear) {
      this.firstName = firstName;
      this.birthYear = birthYear;
    },
  };
  
  const steven = Object.create(PersonProto);
  const StudentProto = Object.create(PersonProto);
  const jay = Object.create(StudentProto);
  //////////////////////////////////////////////////////////////////////
  //new lecture class example
  
  class Account {
    constructor(owner, currency, pin) {
      this.owner = owner;
      this.currency = currency;
      this.pin = pin;
      this.movements = [];
      this.locale = navigator.language;
      
      console.log(`Thanks for opening an account, ${owner}`);
    }
    deposit(val) {
      this.movements.push(val);
    }
    withdraw(val) {
      this.deposit(-val);
    }
    approveLoan(val) {
      return true;
    }
    requestLoan(val) {
      if (this.approveLoan(val)) {
        this.deposit(val);
        console.log('Loan approved');
      }
    }
  }
  
  const acc1 = new Account('Jonas', 'EUR', 1111);
  // acc1.movements.push(200);
  // acc1.movements.push(530);
  // acc1.movements.push(120);
  // acc1.movements.push(300);
  acc1.deposit(250);
  acc1.withdraw(140);
  acc1.requestLoan(1000);
  console.log(acc1.movements);
  console.log(acc1.locale);
  /////////////////////////////////////////////////////////////////////////////
  //new lecture private class fields
  class Account {
    locale = navigator.language;
    bank = 'Bankist';
    #movements = [];
    #pin;
    constructor(owner, currency, pin) {
      this.owner = owner;
      this.currency = currency;
      this.#pin = pin;
      // this.movements = [];
      // this.locale = navigator.language;
      
      console.log(`Thanks for opening an account, ${owner}`);
    }
    getMovements() {
      return this.#movements;
      //not chainable
    }
    deposit(val) {
    this.movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }
  #approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
    }
    return this;
  }
  
  // #static test() {
    //   console.log('test');
    // }
  }
  
  const acc1 = new Account('Jonas', 'EUR', 1111);
  // acc1.movements.push(200);
  // acc1.movements.push(530);
  // acc1.movements.push(120);
  // acc1.movements.push(300);
  // acc1.deposit(250);
  // acc1.withdraw(140);
  // acc1.requestLoan(1000);
  acc1
  .deposit(300)
  .withdraw(50)
  .requestLoan(25000)
  // .getMovements()
  .withdraw(4000);
  console.log(acc1.movements);
  console.log(acc1.locale);
  */
///////////////////////////////////////////////////////
//new lecture
// challenge 4
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`,
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
// console.log(rivian.#charge);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .brake()
  .brake()
  .chargeBattery(90)
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);
