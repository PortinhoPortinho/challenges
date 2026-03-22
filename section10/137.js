'use strict';

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers,
) {
  /*es5
  numPassengers = numPassengers || 1;
  price = price || 199;
*/
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 800);

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 4309284230,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = ' MR.' + passenger.name;

  if (passenger.passport === 4309284230) {
    alert('checked in');
  } else {
    alert('wrong passport');
  }
};
//const flightNum = flight;
//const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
};
//newPassport(jonas);
//checkIn(flight, jonas);
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
